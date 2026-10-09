// Serves the static Astro build and handles the contact form.
// Messages are emailed via Cloudflare Email Routing so no address appears on the site.
//
// Secrets (set in the Cloudflare dashboard or with `wrangler secret put`):
//   CONTACT_TO        verified Email Routing destination that receives messages
//   TURNSTILE_SECRET  Turnstile secret key
import { EmailMessage } from 'cloudflare:email';

const FROM = 'contact@jordanbangia.com';
const MAX_MESSAGE = 5000;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request, env) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ error: 'Invalid form.' }, 400);
  }

  const name = clean(form.get('name'), 200);
  const email = clean(form.get('email'), 320);
  const message = String(form.get('message') ?? '').trim().slice(0, MAX_MESSAGE);
  const token = String(form.get('cf-turnstile-response') ?? '');

  // Honeypot: real people leave this hidden field empty.
  if (form.get('company')) return json({ ok: true });

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please fill in your name, a valid email and a message.' }, 400);
  }

  const verified = await verifyTurnstile(token, request.headers.get('CF-Connecting-IP'), env);
  if (!verified) return json({ error: 'Could not verify you are human. Please try again.' }, 400);

  const raw = [
    `From: Website contact form <${FROM}>`,
    `To: <${env.CONTACT_TO}>`,
    `Reply-To: ${encodeHeader(name)} <${email}>`,
    `Subject: ${encodeHeader(`Website enquiry from ${name}`)}`,
    `Message-ID: <${crypto.randomUUID()}@jordanbangia.com>`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message,
  ].join('\r\n');

  try {
    await env.CONTACT_EMAIL.send(new EmailMessage(FROM, env.CONTACT_TO, raw));
  } catch (err) {
    console.error('contact send failed', err);
    return json({ error: 'Something went wrong sending your message.' }, 500);
  }
  return json({ ok: true });
}

async function verifyTurnstile(token, ip, env) {
  if (!token) return false;
  const body = new FormData();
  body.append('secret', env.TURNSTILE_SECRET);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
    });
    const data = await res.json();
    return data.success === true;
  } catch (err) {
    console.error('turnstile verify failed', err);
    return false;
  }
}

// RFC 2047 encoding so non-ASCII names survive in headers.
function encodeHeader(value) {
  if (/^[\x20-\x7e]*$/.test(value)) return value;
  const bytes = new TextEncoder().encode(value);
  return `=?UTF-8?B?${btoa(String.fromCharCode(...bytes))}?=`;
}

// Single-line, header-safe value.
function clean(value, max) {
  return String(value ?? '')
    .replace(/[\r\n<>"]/g, ' ')
    .trim()
    .slice(0, max);
}

function json(data, status = 200) {
  return Response.json(data, { status });
}
