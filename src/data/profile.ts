// All site content lives here. Edit this file to update the page.
// Headings are split into `lead` and an italic `emphasis` ending.

export const profile = {
  name: 'Jordan Bangia',
  initials: 'JB',
  location: 'Toronto, Canada',
  // Shown as a small status badge. Set to '' to hide it.
  status: '',
  title: 'Jordan Bangia: Software for data systems and physical AI',
  description:
    'Jordan Bangia, Staff Software Developer at Waabi in Toronto. Consulting on data platforms, AI enablement, full-stack web and robotics systems.',
  headline: { lead: 'Software for data systems and', emphasis: 'physical AI.' },
  intro:
    "I'm Jordan Bangia. I build the data platforms and backend systems that get robotics software out of the lab and into production.",
  currentWork: {
    title: 'Data Platform',
    description: 'Technical Lead Manager for data infrastructure at Waabi, an autonomous trucking company.',
    tags: ['Go', 'Data', 'Robotics'],
  },
};

export const about = {
  heading: { lead: 'Over a decade of data from', emphasis: 'real machines.' },
  paragraphs: [
    'The common thread in my work is data coming off real devices: e-readers, warehouse robots, and now autonomous trucks. That data is messy and high-volume, and it has to be trustworthy before anyone can build on it.',
    "I do my best work close to the hardware and close to the people using what I build, whether that's an operator on a warehouse floor or an engineer training the next model.",
  ],
};

export const consulting = {
  heading: 'From prototype to production, on your timeline.',
  pitch:
    'Alongside my full-time role I take on a few engagements a year with startups and small businesses, helping them bring AI into everyday work and launch web products that hold up once real users arrive. I work hands-on with your team, writing the code rather than handing over a report.',
  services: [
    {
      title: 'Data platforms',
      description: 'Pipelines and storage your team can trust as data volume and headcount grow.',
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
    description: 'Joined on Simulation Core in 2022, then moved to lead the Data Platform team in 2023.',
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
