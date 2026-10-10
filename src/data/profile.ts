// All site content lives here. Edit this file to update the page.

export const profile = {
  name: 'Jordan Bangia',
  initials: 'JB',
  headline: 'Staff Software Developer at Waabi',
  tagline: 'I build data platforms and software for robots.',
  location: 'Toronto, Canada',
  aboutLead: 'Backend and data systems, most of them running close to real hardware.',
  // Shown as a small status badge. Set to '' to hide it.
  status: 'Open to consulting',
  about: [
    'Right now I work on the TLM Data Platform at Waabi, an autonomous trucking company.',
    'Before that I spent five years at Kindred (part of Ocado Group) shipping software for robotic sorting and picking in live warehouses, and two years on real-time big data pipelines at Rakuten Kobo.',
  ],
};

export const consulting = {
  heading: 'Senior help on backend and data infrastructure.',
  pitch:
    'I take on a small number of consulting engagements alongside my full-time work, usually with teams that need senior help on backend systems, data infrastructure, or getting software running reliably on real hardware.',
  services: [
    'Data platform and pipeline design',
    'Backend services in Go',
    'Architecture and code reviews',
    'Robotics and on-site systems integration',
  ],
};

// Public Turnstile site key for the contact form (widget managed in the Cloudflare dashboard).
export const turnstileSiteKey = '0x4AAAAAAFTILNhqIWlH3u55';

export type Role = {
  title: string;
  start: string;
  end: string;
  note?: string;
};

export type Job = {
  company: string;
  url?: string;
  location: string;
  roles: Role[];
  summary?: string;
};

export const experience: Job[] = [
  {
    company: 'Waabi',
    url: 'https://waabi.ai',
    location: 'Toronto',
    roles: [
      { title: 'Staff Software Developer', start: '2024', end: 'Now', note: 'TLM Data Platform' },
      { title: 'Senior Software Developer', start: '2023', end: '2024', note: 'TLM Data Platform' },
      { title: 'Senior Software Developer', start: '2022', end: '2023', note: 'Simulation Core' },
    ],
  },
  {
    company: 'Kindred, part of Ocado Group',
    url: 'https://www.kindred.ai',
    location: 'Toronto',
    roles: [
      { title: 'Senior Software Developer', start: '2020', end: '2022' },
      { title: 'Software Developer', start: '2017', end: '2020' },
    ],
    summary:
      'Core software for the INDUCT robotic picking system and performance work on the SORT robotic sorter. Built a Go and React service for on-site workflows and human interaction with the robot, plus customer warehouse integrations and KPI reporting.',
  },
  {
    company: 'Rakuten Kobo',
    url: 'https://www.kobo.com',
    location: 'Toronto',
    roles: [{ title: 'Systems Engineer, Big Data', start: '2015', end: '2017' }],
    summary:
      'Real-time pipelines for events from the website, mobile apps and e-readers, and systems that exposed big data to other teams.',
  },
  {
    company: 'Pivotal Labs, Xtreme Labs, AJB Software',
    location: 'Toronto',
    roles: [{ title: 'Engineering co-ops', start: '2012', end: '2014' }],
    summary: 'Android, BlackBerry and iOS apps, plus C# backend work.',
  },
];

export const education = [
  {
    school: 'University of Toronto',
    degree: 'B.A.Sc., Engineering Science (Electrical and Computer)',
    start: '2011',
    end: '2015',
  },
];

export const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jbangia' },
  { label: 'GitHub', href: 'https://github.com/jordanbangia' },
];

// "2017 – 2022" style range covering all of a job's roles.
export function jobPeriod(job: Job): string {
  const starts = job.roles.map((r) => r.start);
  const ends = job.roles.map((r) => r.end);
  const start = starts.reduce((a, b) => (a < b ? a : b));
  const end = ends.includes('Now') ? 'Now' : ends.reduce((a, b) => (a > b ? a : b));
  return `${start} – ${end}`;
}
