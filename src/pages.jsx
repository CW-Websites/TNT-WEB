/* ——— Track/Trace — pages, search-engine text, FAQs, landing-page copy ———
 *
 * This is the one file to edit for SEO wording.
 *  - title:       the blue link in Google results (aim for under ~60 characters)
 *  - description: the grey text under it (aim for 140–160 characters)
 *  - path:        the page's web address
 * Each landing page targets one search topic so Google can tell them apart.
 * ———————————————————————————————————————————————————————————————————————— */

// Which page is being shown. Set by build.mjs (when building) and by the
// browser bundle (when the page loads). Used to make nav links work from
// sub-pages, e.g. "#pillars" on the home page becomes "/#pillars" elsewhere.
let TNT_CURRENT_PAGE = 'home';
const tntAnchor = (id) => (TNT_CURRENT_PAGE === 'home' ? `#${id}` : `/#${id}`);

// Images: build.mjs makes a smaller WebP copy of every PNG in /uploads, with a
// fingerprint in the name (e.g. TNT-OTC.3k9x1a2b.webp) so browsers always
// fetch the new version when you replace a PNG. Keep editing the PNGs; use
// tntImg('/uploads/name.png') in code and the build swaps in the WebP.
const tntImg = (p) => ((typeof window !== 'undefined' && window.__TNT_IMG__) || {})[p] || p;

const TNT_PAGES = [
  {
    key: 'home',
    path: '/',
    crumb: 'Track/Trace',
    title: 'Cash Logistics Software for CIT, ATM & FLM | Track/Trace',
    description:
      'Track/Trace is cash logistics software for CIT, ATM and FLM/SLM operations: dynamic routing, cash vault management, lock automation and billing in one platform.',
  },
  {
    key: 'cit',
    path: '/cash-in-transit-software/',
    crumb: 'Cash-in-Transit Software',
    title: 'Cash-in-Transit (CIT) Software | Track/Trace',
    description:
      'Cash-in-transit (CIT) software for armored transport: dynamic routing, real-time tracking, chain-of-custody receipts, liability enforcement and event billing.',
  },
  {
    key: 'atm',
    path: '/atm-servicing-software/',
    crumb: 'ATM Servicing Software',
    title: 'ATM Servicing & Replenishment Software | Track/Trace',
    description:
      'ATM servicing software for decash/recash, dispense forecasting, auto-created shipments and automated lock dispatch across dormakaba, S&G and Intergard.',
  },
  {
    key: 'flm',
    path: '/flm-slm-service-management/',
    crumb: 'FLM/SLM Service Management',
    title: 'FLM/SLM Service Management Software for ATMs | Track/Trace',
    description:
      'FLM/SLM service management built for ATMs: auto-ticket assignment, enforced service checklists, photo evidence, SLA visibility and a customer portal.',
  },
  {
    key: 'vault',
    path: '/cash-vault-management-software/',
    crumb: 'Cash Vault Management Software',
    title: 'Cash Vault Management Software | Track/Trace',
    description:
      'Cash vault management software: real-time cash visibility, pack/count/deposit workflows, customizable ledgers, bank order management and full auditability.',
  },
  {
    key: 'notfound',
    path: '/404',
    crumb: 'Page not found',
    noindex: true,
    title: 'Page not found | Track/Trace',
    description: 'This page does not exist. Track/Trace is cash logistics software for CIT, ATM and FLM/SLM service operations.',
  },
];

const TNT_LANDING_KEYS = ['cit', 'atm', 'flm', 'vault'];
const tntPage = (key) => TNT_PAGES.find(p => p.key === key);

/* ——— FAQs (shown on the page AND sent to Google as structured data) ——— */
const TNT_FAQS = {
  home: [
    {
      q: 'What is Track/Trace?',
      a: 'Track/Trace is a SaaS platform for cash logistics — cash-in-transit (CIT), ATM and FLM/SLM service operations. It covers branches, cash vaults, routes, field users, customers, contracts and billing in a single platform engineered for cash logistics from the ground up.',
    },
    {
      q: 'Who is Track/Trace built for?',
      a: 'Regional and high-volume CIT operators, ATM loading and FLM service companies, and FLM/SLM service providers — from operations running a few routes a day to those running 50 or more.',
    },
    {
      q: 'How long does implementation take?',
      a: 'The typical target window is 90 days from discovery to first production cutover. After go-live, platform updates continue on a weekly cadence.',
    },
    {
      q: 'What does "co-managed platform-as-a-service" mean?',
      a: 'Track/Trace is configured against your operating model rather than a template, and you help drive and direct weekly platform updates. The roadmap is yours; the delivery is ours.',
    },
    {
      q: 'Does Track/Trace automate ATM lock opening?',
      a: 'Yes. Through OTC Anywhere, Track/Trace provides fully automated lock dispatch across dormakaba, S&G and Intergard lock systems — opening on check-out, geofenced open controls, close enforcement and automated reassigns.',
    },
    {
      q: 'What can Track/Trace integrate with?',
      a: 'Currency platforms, bank and financial institution systems, cash sorters and safes such as Glory and Semacon, Bluetooth scanners and printers, and external invoicing systems via API or SFTP.',
    },
  ],
  cit: [
    {
      q: 'What is cash-in-transit (CIT) software?',
      a: 'CIT software runs the operations of an armored transport business: planning and routing pickups and deliveries, tracking trucks and crews, capturing chain-of-custody receipts, managing liability and billing for each service.',
    },
    {
      q: 'Can routes change during the day?',
      a: 'Yes. Track/Trace locations are dynamically routable, with live route transfer, dynamic and automatic rerouting, and per-stop optimization and ETA management.',
    },
    {
      q: 'How is liability enforced on the truck?',
      a: 'Truck liability is enforced in the platform, with fixed route assignment, cage and safe integration, pre-trip checks and geofenced access.',
    },
    {
      q: 'Can customers see their own pickups and deliveries?',
      a: 'Yes. Customers get real-time visibility, live pickup requests, event notifications, ETA notifications and receipts or manifests for every shipment.',
    },
  ],
  atm: [
    {
      q: 'What ATM servicing does Track/Trace support?',
      a: 'Retail and financial-institution ATM servicing: order-type workflows, same-day decash and recash, required deposits, service checklists and automated lock dispatch.',
    },
    {
      q: 'Can ATM shipments be created automatically?',
      a: 'Yes. Dispense forecasting drives automatic shipment creation, and recurring schedules can auto-create scheduled work.',
    },
    {
      q: 'Which ATM locks are supported?',
      a: 'Track/Trace works with dormakaba (Kaba), S&G and Intergard lock systems through OTC Anywhere, including automated opening on check-out and close enforcement.',
    },
  ],
  flm: [
    {
      q: 'What is FLM/SLM service management?',
      a: 'First-line maintenance (FLM) and second-line maintenance (SLM) are the service calls that keep ATMs running. FLM/SLM service management software assigns those tickets, guides technicians through the work and records what was done.',
    },
    {
      q: 'Is the service model fixed?',
      a: 'No. Track/Trace uses a customizable service model with configurable service options and controls, enforced compliance for each service action, and technician auto-assignment rules.',
    },
    {
      q: 'Can our customers create and cancel service tickets?',
      a: 'Yes. Customers participate directly through a customer portal — creating and cancelling tickets, with SLA visibility and ETA notifications.',
    },
  ],
  vault: [
    {
      q: 'What does cash vault management software do?',
      a: 'It gives a cash operation real-time visibility of the cash it holds and moves: vault balances, ledgers, packing and counting, deposits and the orders behind them, with every event auditable.',
    },
    {
      q: 'Can we report daily vault balance and activity?',
      a: 'Yes. Daily vault balance and activity reporting is standard, alongside regular and emergency ledgers and deposit-out / bag-out packing.',
    },
    {
      q: 'Does it integrate with banks and cash sorters?',
      a: 'Yes. Bank and FI systems connect through an adaptive I/O framework for cash and coin ordering, vault balances and approved shipments; cash sorters and safes such as Glory and Semacon integrate directly.',
    },
  ],
  notfound: [],
};

/* ——— Landing pages ——— */
const TNT_LANDINGS = {
  cit: {
    eyebrow: 'Cash-in-transit',
    h1: ['Cash-in-transit', 'software.'],
    accentLine: 0,
    lede:
      'Track/Trace runs armored transport operations end to end — dynamic routing, real-time tracking, chain-of-custody capture and billing on every service action — engineered for CIT, not retrofitted into it.',
    automates: [
      'Dynamic and automatic rerouting, with live route transfer',
      'Real-time route tracking with ETA, time and mileage',
      'Receipt, signature and proof-of-delivery capture',
      'Truck liability enforcement, cage and safe integration',
      'Dynamically routed Fed and bank pickups',
      'Real-time billing and one-off charges',
    ],
    steps: [
      { h: 'Map your operation', p: 'We map your CIT operation against the platform — branches, vaults, routes, customers, edge cases and integrations.' },
      { h: 'Configure, not template', p: 'Routes, stops, contracts, ledgers and billing rules are configured against your model, with workflow-controlled field execution.' },
      { h: 'Run and evolve', p: 'Go live in a typical 90-day target window, then keep shipping — your priorities, our weekly cadence.' },
    ],
    caseKey: '01',
  },
  atm: {
    eyebrow: 'ATM servicing',
    h1: ['ATM servicing', 'software.'],
    accentLine: 0,
    lede:
      'Replenish and service ATMs from one platform: dispense forecasting, auto-created shipments, same-day decash and recash, and fully automated lock dispatch across dormakaba, S&G and Intergard.',
    automates: [
      'Dispense forecasting and automatic shipment creation',
      'Same-day decash and recash workflows',
      'Order-type workflows and required deposits',
      'Fully automated lock dispatch via OTC Anywhere',
      'Service checklists enforced at every machine',
      'Single billing surface across ATM services',
    ],
    steps: [
      { h: 'Forecast the work', p: 'Empty/fill forecasting and recurring schedules create ATM shipments automatically.' },
      { h: 'Route and open', p: 'Shipments are routed to trucks; locks open automatically on check-out with geofenced controls and close enforcement.' },
      { h: 'Bill every action', p: 'Every service event can drive billing in real time, visible to your customers.' },
    ],
    caseKey: '02',
    otcLink: true,
  },
  flm: {
    eyebrow: 'FLM / SLM service',
    h1: ['FLM/SLM service', 'management.'],
    accentLine: 0,
    lede:
      'No more generic, one-size-fits-all service platforms. Track/Trace is FLM and SLM service management built for ATMs — a customizable service model with enforced compliance on every service action.',
    automates: [
      'Technician auto-ticket assignment rules',
      'Machine service and truck checklists',
      'Photo and video evidence capture, before and after',
      'Customer portal to create and cancel tickets',
      'SLA visibility and ETA notifications',
      'Preventative maintenance schedules and parts management',
    ],
    steps: [
      { h: 'Model your service', p: 'Service options, controls and compliance rules are configured to how you deliver FLM and SLM.' },
      { h: 'Dispatch automatically', p: 'Tickets are assigned to technicians by rule, including on-route assignments and external coordination.' },
      { h: 'Prove the work', p: 'Checklists, photo/video evidence and automated lock opening and closing record every visit.' },
    ],
    caseKey: '04',
    otcLink: true,
  },
  vault: {
    eyebrow: 'Cash vaults',
    h1: ['Cash vault', 'management.'],
    accentLine: 0,
    lede:
      'Real-time cash visibility for every vault and branch — pack, count and deposit workflows, customizable ledgers and bank order management, with every event fully auditable.',
    automates: [
      'Real-time cash visibility and current cash position',
      'Pack / count / deposit workflows that are user-proof',
      'Regular and emergency ledgers, fully customizable',
      'Daily vault balance and activity reporting',
      'Bank and FI order management with order timing controls',
      'Deposit-out and bag-out packing procedures',
    ],
    steps: [
      { h: 'Centralize branches', p: 'Branches, vaults and procedures are managed centrally with precise action permissions.' },
      { h: 'Control every movement', p: 'Orders, packing, counting and secured transfers follow enforced workflows.' },
      { h: 'Audit everything', p: 'Every user and shipment event is recorded, with ledgers and balances available in real time.' },
    ],
    caseKey: '01',
  },
};

Object.assign(window, {
  TNT_PAGES, TNT_FAQS, TNT_LANDINGS, TNT_LANDING_KEYS, tntPage, tntAnchor, tntImg,
});
