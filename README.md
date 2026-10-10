# jordanbangia.com

Personal site built with [Astro](https://astro.build) and hosted on Cloudflare Workers (static assets).

All page content lives in `src/data/profile.ts`.

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static output in dist/
```

Deploys run through Cloudflare Workers Builds: pushes to `master` go to production, other branches get preview URLs. Build command `npm run build`, deploy command `npx wrangler deploy`.

## Contact form

The form posts to `/api/contact`, handled by `worker/index.js`, which emails the message through Cloudflare Email Routing. No email address appears in the site or this repo.

One-time setup in Cloudflare:

1. Turn on Email Routing for jordanbangia.com and verify the inbox that should receive messages.
2. Create a Turnstile widget for jordanbangia.com and put its site key in `src/data/profile.ts` (`turnstileSiteKey`).
3. Add two secrets to the Worker: `CONTACT_TO` (the verified inbox) and `TURNSTILE_SECRET`.

For local testing, put those two values in `.dev.vars` and run `npm run build && npx wrangler dev`.
