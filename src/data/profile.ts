// All site content lives here. Edit this file to update the page.
// Headings are split into `lead` and an italic `emphasis` ending.

export const profile = {
  name: 'Jordan Bangia',
  initials: 'JB',
  location: 'Toronto, Canada',
  // Shown as a small status badge. Set to '' to hide it.
  status: '',
  description: 'Jordan Bangia: Staff Software Developer at Waabi. Data platforms, backend systems and consulting.',
  headline: { lead: 'Software for data systems and', emphasis: 'physical AI.' },
  intro:
    "I'm Jordan Bangia, a Staff Software Developer at Waabi. I build data platforms and backend systems that get robotics software out of the lab and into production.",
  currentWork: {
    title: 'Data Platform',
    description: 'Technical Lead Manager for data infrastructure at Waabi, an autonomous trucking company.',
    tags: ['Go', 'Data', 'Robotics'],
  },
};

export const about = {
  heading: { lead: 'Backend and data systems for robots,', emphasis: 'trucks and warehouses.' },
  paragraphs: [
    'Today I\'m the Technical Lead Manager of the Data Platform team at Waabi, which builds autonomous trucks. I joined in 2022 on Simulation Core and moved to Data Platform in 2023.',
    'Before that I spent five years at Kindred shipping software for robotic picking and sorting in live warehouses, and two years on real-time big data pipelines at Rakuten Kobo.',
  ],
  skills: ['Data infrastructure', 'Go', 'Backend systems', 'Robotics', 'Systems integration'],
};

export const consulting = {
  heading: 'From prototype to production, on your timeline.',
  pitch:
    "I've built data infrastructure for autonomous trucks, software for warehouse robots, and real-time pipelines at Kobo. Alongside my full-time role I take on a few engagements a year, helping startups and small businesses build data systems, bring AI into everyday work, and launch web products that hold up once real users arrive.",
  services: [
    {
      title: 'Data platforms',
      description: 'Designing data platforms and pipelines that teams can rely on as they grow.',
    },
    {
      title: 'AI enablement',
      description:
        'Giving your business AI superpowers: picking the right tools, connecting them to your data and workflows, and getting them into everyday use.',
    },
    {
      title: 'Full-stack web',
      description: 'Web apps built end to end, from the database and backend to a fast, polished front end.',
    },
    {
      title: 'Robotics systems',
      description: 'On-site integration and software that has to keep working on robots in the field.',
    },
  ],
};

export type Experience = {
  date: string;
  company: string;
  url?: string;
  role: string;
  detail: string;
  description?: string;
  // Logo in public/logos, shown single-colour. ratio is width / height.
  logo?: { src: string; ratio: number };
};

export const experience: Experience[] = [
  {
    date: '2022–Now',
    company: 'Waabi',
    url: 'https://waabi.ai',
    logo: { src: '/logos/waabi.svg', ratio: 3.26 },
    role: 'Staff Software Developer',
    detail: 'Data Platform · Technical Lead Manager',
    description: "Leading the team that builds the data infrastructure behind Waabi's autonomous trucks.",
  },
  {
    date: '2017–2022',
    company: 'Kindred, part of Ocado Group',
    logo: { src: '/logos/kindred.png', ratio: 3.72 },
    role: 'Senior Software Developer',
    detail: 'Robotic picking and sorting',
    description:
      'Core software for the INDUCT picking robot and the SORT robotic sorter, a Go and React service for on-site workflows, customer warehouse integrations and KPI reporting.',
  },
  {
    date: '2015–2017',
    company: 'Rakuten Kobo',
    url: 'https://www.kobo.com',
    logo: { src: '/logos/kobo.svg', ratio: 5.22 },
    role: 'Systems Engineer, Big Data',
    detail: 'Real-time data systems',
    description:
      'Real-time pipelines for events from the website, mobile apps and e-readers, plus systems that opened up big data to other teams.',
  },
  {
    date: '2012–2014',
    company: 'Pivotal Labs, Xtreme Labs and AJB Software',
    role: 'Engineering co-ops',
    detail: 'Mobile and backend',
    description: 'Android, BlackBerry and iOS apps, plus C# backend work.',
  },
  {
    date: '2011–2015',
    company: 'University of Toronto',
    url: 'https://www.utoronto.ca',
    logo: { src: '/logos/uoft.png', ratio: 2.7 },
    role: 'B.A.Sc., Engineering Science',
    detail: 'Electrical and Computer major',
  },
];

export const contact = {
  kicker: 'Have a systems problem to solve?',
  heading: { lead: "Tell me about your team and what you're", emphasis: 'building.' },
};

export const links = {
  github: 'https://github.com/jordanbangia',
  linkedin: 'https://www.linkedin.com/in/jbangia',
};

// Public Turnstile site key for the contact form (widget managed in the Cloudflare dashboard).
export const turnstileSiteKey = '0x4AAAAAAFTILNhqIWlH3u55';
