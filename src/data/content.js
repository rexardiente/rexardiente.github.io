// ─────────────────────────────────────────────────────────────────────────
// Content for rexardiente.github.io
// Edit copy here. Items marked  // TODO: confirm  are best-effort and should
// be verified by Rex before going public.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Rex Ardiente',
  firstName: 'Rex',
  lastName: 'Ardiente',
  role: 'Software Engineer & Founder',
  status: 'Tech Lead @ Jobvious · Founder @ Zynlab', // shown in the live status line
  email: 'rardiente.dev@gmail.com',
  intro:
    'I design and build AI infrastructure — multi-tenant LLM platforms, retrieval-augmented systems, and the real-time services that run them.',
  links: {
    github: 'https://github.com/rexardiente',
    linkedin: 'https://www.linkedin.com/in/rex-ardiente-ba9721b8/',
    email: 'mailto:rardiente.dev@gmail.com',
  },
};

export const about = {
  body: [
    'I’m driven to build technology people can depend on. From my earliest work close to the hardware, I learned that the best systems are the ones you never have to think about — they just work.',
    'That foundation now points at AI infrastructure. I build platforms that put large language models into production: multi-tenant APIs, retrieval-augmented generation, real-time voice, and the metering, billing, and tenancy underneath them.',
    'I work end to end — architecture, backend, and the interfaces on top — but I’m happiest close to the systems layer, where correctness and scale actually live.',
  ],
  stats: [
    { value: '7+', label: 'Years building' },
    { value: '30+', label: 'Projects shipped' },
    { value: 'Intl.', label: 'Clients served' },
  ],
};

// Current-era work — featured.
export const work = [
  {
    index: '01',
    name: 'Zynlab',
    kind: 'AI Platform',
    role: 'Founder',
    status: 'Live',
    href: 'https://zynlab.dev',
    summary:
      'An OpenAI-compatible AI platform: a multi-tenant API with retrieval-augmented generation, real-time voice, and full metering and billing underneath. The flagship.',
    stack: ['TypeScript', 'NestJS', 'pgvector', 'Cloudflare', 'Docker'],
    featured: true,
  },
  {
    index: '02',
    name: 'Jobvious',
    kind: 'Recruiting Platform', // TODO: confirm exact product framing
    role: 'Technical Lead Developer',
    status: 'Current',
    href: 'https://itsjobvious.com',
    summary:
      'Leading development on a recruiting and talent-acquisition platform — web and mobile clients plus the APIs and integrations behind them.', // TODO: confirm
    stack: ['Node.js', 'React', 'Firebase', 'PostgreSQL'], // TODO: confirm stack
    featured: true,
  },
  {
    index: '03',
    name: 'Niksen PMS',
    kind: 'Property Management System',
    role: 'Co-Founder',
    status: 'Live',
    href: 'https://niksenpms.com',
    summary:
      'A multi-tenant property-management platform — bookings, operations, and the services behind them — that I co-founded and run in production across a suite of API, admin, and integration services.',
    stack: ['NestJS', 'Prisma', 'PostgreSQL', 'Qdrant', 'Multi-tenant'],
    featured: true,
  },
  {
    index: '04',
    name: 'Stratify Platform',
    kind: 'Multi-tenant SaaS',
    role: 'Co-Founder',
    status: 'Prototype',
    href: 'https://stratify-app.niksenpms.com', // temporary link

    summary:
      'A modular, plugin-based platform bringing HRMS, project management, and logistics into one multi-tenant SaaS for contractors, builders, and SMBs.',
    stack: ['NestJS', 'Turbo · pnpm', 'PostgreSQL', 'Docker'],
    featured: true,
  },
  {
    index: '05',
    name: 'Finance App',
    kind: 'Fintech · Client Work',
    role: 'Builder',
    status: 'Demo',
    href: 'https://abotkaya-finance.zynlab.dev', // NOTE: URL reveals client name despite anonymized card title

    summary:
      'Digitizing a lending business end to end for a private client — salary loans, mortgages, and check rediscounting — as a mobile-first, borrower-facing fintech app with live amortization and a themed design system.',
    stack: ['React', 'Vite', 'NestJS', 'TanStack Query'],
    featured: true,
  },
  {
    index: '06',
    name: 'Zyn Mission Control',
    kind: 'Internal Ops',
    role: 'Builder',
    status: 'Internal',
    href: null,
    summary:
      'A central operations dashboard for my AI infrastructure — agents, tasks, content pipelines, and memory in one place. Details intentionally kept brief.',
    stack: ['NestJS', 'React', 'Socket.io', 'Prisma'],
    featured: true,
  },
];

// Older work — supporting archive.
export const archive = [
  { name: 'WowooExchange', kind: 'Cryptocurrency Exchange', year: '—' },
  { name: 'Coinica', kind: 'Crypto Application', year: '—' },
  { name: 'Blocki', kind: 'Blockchain Application', year: '—' },
  { name: 'InnoMiner', kind: 'Embedded Linux · Innosilicon', year: '—' },
  { name: 'ZetaMiner', kind: 'Embedded Linux · ASIC Firmware', year: '—' },
  { name: 'LKC Innovation', kind: 'Website Development', year: '—' },
  { name: 'Batcoin Supreme', kind: 'Website Development', year: '—' },
  { name: 'EnhancedGeo', kind: 'Website Development', year: '—' },
];

// Stack — shows the evolution from foundations to current AI-infra focus.
export const stack = [
  {
    group: 'AI & Backend',
    tag: 'now',
    items: [
      'LLM Platforms',
      'OpenAI-compatible APIs',
      'RAG · pgvector',
      'NestJS',
      'TypeScript',
      'Real-time Voice',
      'Prisma',
      'PostgreSQL',
    ],
  },
  {
    group: 'Infrastructure',
    tag: 'now',
    items: [
      'Docker · Compose',
      'Cloudflare Tunnel',
      'Proxmox',
      'VPS',
      'Self-hosted',
      'Multi-tenant Systems',
      'Turbo · pnpm',
      'Redis',
    ],
  },
  {
    group: 'Interface',
    tag: 'now',
    items: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'DaisyUI', 'Magic UI'],
  },
  {
    group: 'Foundations',
    tag: 'roots',
    items: ['Node.js', 'Python', 'MongoDB', 'ERP Systems', 'Scala · Play', 'Embedded Linux'],
  },
];
