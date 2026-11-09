/* ——— Track/Trace — pages, search-engine text, FAQs, landing-page copy ———
 *
 * This is the one file to edit for SEO wording.
 *  - title:       the blue link in Google results (aim for under ~60 characters)
 *  - description: the grey text under it (aim for 140–160 characters)
 *  - path:        the page's web address
 * Each landing page targets one search topic so Google can tell them apart.
 *
 * Keyword map (Nov 2026, from competitor research on Namsys and Morphis):
 *   home      cash logistics software · cash logistics platform
 *   cashmgmt  cash management software (for CIT / ATM / banks — qualified, because
 *             plain "cash management software" is dominated by corporate treasury)
 *   cit       cash in transit software · armored carrier software · armored car management
 *   routing   CIT route optimization · armored route planning · dispatch
 *   atm       ATM servicing / replenishment · ATM cash management · cash forecasting
 *   flm       ATM repair and maintenance software · ATM field service · FLM/SLM
 *   vault     cash vault management software · cash center · vault operations
 *   billing   CIT billing software · cash logistics billing and invoicing
 *   portal    customer portal · online cash ordering · self-service pickup requests
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
    title: 'Cash Logistics Software & Platform for CIT/ATM | Track/Trace',
    description:
      'End-to-end cash processing and logistics software for cash-in-transit, ATM and FLM/SLM operators: routing, cash vaults, ATM maintenance and billing in one.',
  },
  {
    key: 'cashmgmt',
    path: '/cash-management-software/',
    crumb: 'Cash Management Software',
    title: 'Cash Management Software for CIT & ATM | Track/Trace',
    description:
      'Cash management software for armored carriers, ATM operators and banks: cash and coin ordering, forecasting, vault balances and shipments on one platform.',
  },
  {
    key: 'cit',
    path: '/cash-in-transit-software/',
    crumb: 'Cash-in-Transit Software',
    title: 'Cash-in-Transit Software for Armored Carriers | Track/Trace',
    description:
      'Cash-in-transit (CIT) software for armored carriers: dispatch, dynamic routing, real-time tracking, chain-of-custody receipts, liability and event billing.',
  },
  {
    key: 'routing',
    path: '/cit-route-optimization/',
    crumb: 'CIT Route Optimization',
    title: 'CIT Route Optimization & Armored Routing | Track/Trace',
    description:
      'CIT route optimization software: dynamic and automatic rerouting, per-stop optimization, live route transfer, ETA and mileage tracking for armored routes.',
  },
  {
    key: 'atm',
    path: '/atm-servicing-software/',
    crumb: 'ATM Servicing Software',
    title: 'ATM Servicing & Cash Replenishment Software | Track/Trace',
    description:
      'ATM servicing software for cash replenishment: dispense forecasting, auto-created shipments, decash/recash and automated lock dispatch across lock brands.',
  },
  {
    key: 'flm',
    path: '/atm-maintenance-software/',
    crumb: 'ATM Repair & Maintenance Software',
    title: 'ATM Repair & Maintenance Software (FLM/SLM) | Track/Trace',
    description:
      'ATM repair and maintenance software for FLM/SLM field service: auto-assigned tickets, service checklists, photo evidence, parts, SLAs and a customer portal.',
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
    key: 'billing',
    path: '/cit-billing-software/',
    crumb: 'CIT Billing Software',
    title: 'CIT Billing Software for Cash Logistics | Track/Trace',
    description:
      'Billing software for cash-in-transit and ATM services: bill on any service event in real time, catch missed billable events and export to your invoicing.',
  },
  {
    key: 'portal',
    path: '/cash-logistics-customer-portal/',
    crumb: 'Customer Portal',
    title: 'Cash Logistics Customer Portal & Ordering | Track/Trace',
    description:
      'A customer portal for cash logistics: online cash and coin orders, live pickup requests, ETA notifications, receipts, service tickets and real-time billing.',
  },
  {
    key: 'vs-namsys',
    path: '/namsys-alternative/',
    crumb: 'NamSys Alternative',
    compare: true,
    title: 'NamSys Alternative for CIT & Cash Logistics | Track/Trace',
    description:
      'Comparing Track/Trace and NamSys for cash-in-transit, vault and cash logistics software: how each is positioned, where Track/Trace differs, and what to ask.',
  },
  {
    key: 'vs-morphis',
    path: '/morphis-alternative/',
    crumb: 'Morphis Alternative',
    compare: true,
    title: 'Morphis Alternative for Armored Carriers & ATM | Track/Trace',
    description:
      'Comparing Track/Trace and Morphis for armored carrier, ATM and field service software: how each is positioned, where Track/Trace differs, and what to ask.',
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

// Order here = order in the footer and the "Solutions" cards.
const TNT_LANDING_KEYS = ['cashmgmt', 'cit', 'routing', 'atm', 'flm', 'vault', 'billing', 'portal'];
const TNT_COMPARE_KEYS = ['vs-namsys', 'vs-morphis'];
const tntPage = (key) => TNT_PAGES.find(p => p.key === key);

/* ——— FAQs (shown on the page AND sent to Google as structured data) ——— */
const TNT_FAQS = {
  home: [
    {
      q: 'What is Track/Trace?',
      a: 'Track/Trace is a cash logistics platform — SaaS software for cash-in-transit (CIT), ATM and FLM/SLM service operations. It covers branches, cash vaults, routes, field users, customers, contracts and billing in a single platform engineered for cash logistics from the ground up.',
    },
    {
      q: 'What is cash logistics software?',
      a: 'Cash logistics software runs the movement and handling of physical cash: ordering and forecasting, vault processing, armored routes and stops, ATM servicing and maintenance, chain-of-custody records and billing. Track/Trace brings all of these into one platform instead of separate systems.',
    },
    {
      q: 'Who is Track/Trace built for?',
      a: 'Regional and high-volume armored carriers and CIT operators, ATM loading and FLM service companies, and FLM/SLM service providers — from operations running a few routes a day to those running 50 or more.',
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
  cashmgmt: [
    {
      q: 'What is cash management software for CIT and ATM operators?',
      a: 'It is software that manages physical cash across its whole cycle — customer and bank orders, forecasting, vault balances and ledgers, shipments on routes, ATM fills and billing — rather than corporate cash-flow or treasury management.',
    },
    {
      q: 'Can banks and financial institutions connect directly?',
      a: 'Yes. Bank and FI systems connect through an adaptive I/O framework for cash and coin ordering, vault balance and activity, approved shipments, order timing controls, deposit-out procedures and ledgering, with data directly accessible.',
    },
    {
      q: 'Does it forecast cash needs?',
      a: 'Yes. Empty/fill and dispense forecasting can create shipments automatically, and recurring schedules generate scheduled work without manual entry.',
    },
  ],
  cit: [
    {
      q: 'What is cash-in-transit (CIT) software?',
      a: 'CIT software — also called armored carrier or armored car management software — runs the operations of an armored transport business: planning and routing pickups and deliveries, tracking trucks and crews, capturing chain-of-custody receipts, managing liability and billing for each service.',
    },
    {
      q: 'Can routes change during the day?',
      a: 'Yes. Locations are dynamically routable, with live route transfer, dynamic and automatic rerouting, truck transfers, and per-stop optimization and ETA management.',
    },
    {
      q: 'How is liability enforced on the truck?',
      a: 'Truck liability is enforced in the platform, with fixed route assignment, cage and safe integration, pre-trip checks and geofenced access.',
    },
    {
      q: 'How is chain of custody recorded?',
      a: 'Every user and shipment event is auditable. Receipts, signatures and names, proof of delivery and bank or carrier drop-off are captured at each stop, so you can always answer who took possession and when.',
    },
  ],
  routing: [
    {
      q: 'What is CIT route optimization?',
      a: 'It is planning and adjusting armored routes so trucks serve more stops with less drive time — sequencing stops, balancing routes and rerouting when the day changes, while keeping delivery cutoffs and liability rules intact.',
    },
    {
      q: 'Can stops move between trucks during the day?',
      a: 'Yes. Track/Trace supports live route transfer and truck transfers, with dynamic and automatic rerouting.',
    },
    {
      q: 'Can we compare the planned route to what actually happened?',
      a: 'Yes. Stops are tracked sequenced versus actual, with real-time tracking, ETA, time and mileage for every route, and route and stop timing analytics.',
    },
  ],
  atm: [
    {
      q: 'What ATM servicing does Track/Trace support?',
      a: 'Retail and financial-institution ATM servicing and cash replenishment: order-type workflows, same-day decash and recash, required deposits, service checklists and automated lock dispatch.',
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
      q: 'What is ATM repair and maintenance software?',
      a: 'It is field service software built for ATMs: it creates and assigns repair tickets, dispatches technicians, guides first-line (FLM) and second-line (SLM) maintenance with checklists, tracks parts and SLAs, and records what was done at every machine.',
    },
    {
      q: 'What are FLM and SLM?',
      a: 'First-line maintenance (FLM) covers on-site fixes such as clearing jams, replacing consumables and resetting devices. Second-line maintenance (SLM) covers technical repairs such as replacing parts and modules. Track/Trace supports both with a customizable service model.',
    },
    {
      q: 'Can technicians be assigned automatically?',
      a: 'Yes. Tickets are assigned by technician auto-assignment rules, including on-route assignments and external coordination.',
    },
    {
      q: 'Can our customers create and cancel service tickets?',
      a: 'Yes. Customers participate directly through a customer portal — creating and cancelling tickets, with SLA visibility and ETA notifications.',
    },
  ],
  vault: [
    {
      q: 'What does cash vault management software do?',
      a: 'It gives a cash center or vault real-time visibility of the cash it holds and moves: vault balances, ledgers, packing and counting, deposits and the orders behind them, with every event auditable.',
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
  billing: [
    {
      q: 'What can be billed?',
      a: 'Any service action. Billing rules tie events to charges, so pickups, deliveries, ATM services, one-off charges and other service events can all drive billing in real time.',
    },
    {
      q: 'How does it catch missed revenue?',
      a: 'Track/Trace flags missed billable events, so services performed but not billed can be found and recovered.',
    },
    {
      q: 'Does it replace our accounting system?',
      a: 'No. Billing is exportable to your existing systems, with invoicing (AP/AR) connections by API or SFTP transfer.',
    },
  ],
  portal: [
    {
      q: 'What can customers do in the portal?',
      a: 'View and adjust cash and coin schedules, create or edit on-demand shipments, request routed or ad-hoc pickups, see receipts and proof of delivery, open service tickets, receive ETA notifications and see billing in real time.',
    },
    {
      q: 'Do customers see service history?',
      a: 'Yes. Customers can see location service history, shipment history, ledger activity and daily vault balance and liability.',
    },
    {
      q: 'Can customers request changes to service?',
      a: 'Yes. Location change management and operating hours are handled in the portal, such as new service starting on a given date or service only between certain times.',
    },
  ],
  'vs-namsys': [
    {
      q: 'Is Track/Trace an alternative to NamSys?',
      a: 'Yes, for many operations. Both are cash logistics software. NamSys offers its Cirreon modules and Currency Controller for vault, CIT, routing, forecasting, billing, smart safe, retail and branch cash. Track/Trace is a single co-managed platform for CIT, ATM servicing, FLM/SLM maintenance, cash vaults and billing, with ATM lock automation through OTC Anywhere.',
    },
    {
      q: 'Can we move from NamSys to Track/Trace?',
      a: 'Migration is scoped during discovery for each operation. Track/Trace brings data in through its adaptive I/O framework — shipment file import, batch create, API and SFTP transfer — and implementation targets a 90-day window to first production cutover.',
    },
    {
      q: 'Where does the NamSys information on this page come from?',
      a: 'From NamSys’s public website as of November 2026. Products and features change, so confirm current details directly with NamSys.',
    },
  ],
  'vs-morphis': [
    {
      q: 'Is Track/Trace an alternative to Morphis?',
      a: 'Yes, for many operations. Morphis offers separate solutions for armored car management, cash management forecasting, field service, vehicle routing, smart safes and more, licensed on-site or as SaaS. Track/Trace is a single co-managed platform for CIT, ATM servicing, FLM/SLM maintenance, cash vaults and billing, with ATM lock automation through OTC Anywhere.',
    },
    {
      q: 'Can we move from Morphis to Track/Trace?',
      a: 'Migration is scoped during discovery for each operation. Track/Trace brings data in through its adaptive I/O framework — shipment file import, batch create, API and SFTP transfer — and implementation targets a 90-day window to first production cutover.',
    },
    {
      q: 'Where does the Morphis information on this page come from?',
      a: 'From Morphis’s public website as of November 2026. Products and features change, so confirm current details directly with Morphis.',
    },
  ],
  notfound: [],
};

/* ——— Landing pages ——— */
const TNT_LANDINGS = {
  cashmgmt: {
    eyebrow: 'Cash management',
    h1: ['Cash management', 'software.'],
    accentLine: 0,
    lede:
      'Manage physical cash across its whole cycle — orders, forecasts, vaults, routes, ATMs and billing — on one cash logistics platform built for armored carriers, ATM operators and the banks they serve.',
    automates: [
      'Cash and coin ordering, with bank and FI order management',
      'Empty/fill and dispense forecasting that creates shipments',
      'Real-time vault balances, ledgers and cash position',
      'Shipments routed, tracked and receipted end to end',
      'Customer portal for orders, pickups and visibility',
      'Real-time billing on every service action',
    ],
    steps: [
      { h: 'Connect the cash cycle', p: 'Banks, vaults, branches, routes and ATMs share one set of orders, balances and ledgers instead of separate systems.' },
      { h: 'Automate the routine', p: 'Forecasts and recurring schedules create the work; workflows enforce how it is packed, moved and delivered.' },
      { h: 'See it in real time', p: 'Cash position, liability and every shipment event are visible to your team — and to your customers.' },
    ],
    caseKey: '01',
  },
  cit: {
    eyebrow: 'Cash-in-transit',
    h1: ['Cash-in-transit', 'software.'],
    accentLine: 0,
    lede:
      'Track/Trace is armored carrier software that runs CIT operations end to end — dispatch, dynamic routing, real-time tracking, chain-of-custody capture and billing on every service action — engineered for cash-in-transit, not retrofitted into it.',
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
    caseKey: '03',
  },
  routing: {
    eyebrow: 'Route optimization',
    h1: ['CIT route', 'optimization.'],
    accentLine: 0,
    lede:
      'Plan and run armored routes that adapt to the day — dynamic and automatic rerouting, per-stop optimization, live route and truck transfers, with every stop tracked against plan.',
    automates: [
      'Dynamic and automatic rerouting',
      'Per-stop optimization and ETA management',
      'Live route transfer and truck transfers',
      'Sequenced vs. actual stop tracking',
      'Ship-type routing management and delivery cutoffs',
      'Route and stop timing analytics',
    ],
    steps: [
      { h: 'Route by rule', p: 'Locations are dynamically routable, with recurring schedules and ship-type routing rules built in.' },
      { h: 'Adapt live', p: 'When the day changes, reroute automatically or transfer stops between routes and trucks in real time.' },
      { h: 'Improve the ratio', p: 'Track time, mileage and stop timing to raise route-to-stop ratios over time.' },
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
    eyebrow: 'ATM repair & maintenance',
    h1: ['ATM repair &', 'maintenance software.'],
    accentLine: 0,
    lede:
      'No more generic, one-size-fits-all field service platforms. Track/Trace is ATM repair and maintenance software for FLM and SLM service — a customizable service model with enforced compliance on every service action.',
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
      'Real-time cash visibility for every vault, cash center and branch — pack, count and deposit workflows, customizable ledgers and bank order management, with every event fully auditable.',
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
  billing: {
    eyebrow: 'Billing',
    h1: ['CIT billing', 'software.'],
    accentLine: 0,
    lede:
      'Bill on any service action, the moment it happens. Track/Trace ties contracts and service events to billing rules, flags missed billable events and exports to your invoicing — across CIT, ATM and FLM services.',
    automates: [
      'Real-time event billing',
      'Event → billing rules from your contracts',
      'Missed billable event detection',
      'One-off charges and cross-service billing',
      'Customer-accessible billing',
      'Billing exports and AP/AR invoicing integration',
    ],
    steps: [
      { h: 'Model your contracts', p: 'Contracts drive billing coordination, service coordination, change management and documents.' },
      { h: 'Bill as you serve', p: 'Every applicable service event creates its charge in real time — no end-of-month reconstruction.' },
      { h: 'Export and reconcile', p: 'Send billing to your invoicing system by API or SFTP; customers can see where the month stands.' },
    ],
    caseKey: '02',
  },
  portal: {
    eyebrow: 'Customer portal',
    h1: ['Win them once.', 'Service them forever.'],
    accentLine: 1,
    lede:
      'Give your customers a cash logistics portal: online cash and coin orders, live pickup requests, receipts and proof of delivery, service tickets, ETA notifications and real-time billing — every touchpoint inside the platform.',
    automates: [
      'Online cash and coin orders and schedules',
      'Routed and ad-hoc pickup requests',
      'Receipts, manifests and proof of delivery',
      'Service ticket requests',
      'ETA and event notifications',
      'Real-time billing visibility',
    ],
    steps: [
      { h: 'Invite your customers', p: 'Customers participate directly in operations with controlled, real-time visibility.' },
      { h: 'Let them self-serve', p: 'Orders, pickups, schedule changes and tickets are created by the customer, not re-keyed by your staff.' },
      { h: 'Answer before they ask', p: 'Notifications, receipts and history answer the questions that used to come by phone.' },
    ],
    showLoop: true,
  },
};

/* ——— Comparison pages ———
 * RULES for this section (keep them when editing):
 *  - Every statement about a competitor must come from that competitor's own
 *    public website, and be re-checked before each update. Note the date.
 *  - Describe what they offer; never claim they LACK something we can't verify.
 *  - Be fair: say when the competitor may be the better fit.
 */
const TNT_COMPARE = {
  'vs-namsys': {
    name: 'NamSys',
    h1: ['A NamSys', 'alternative.'],
    lede:
      'NamSys and Track/Trace both make cash logistics software. Here is how each describes itself, where Track/Trace takes a different approach, and the questions worth asking any vendor before you choose.',
    theirs: {
      tagline: '“Cloud-based cash processing and logistics software” — “one cloud platform for the whole cash cycle.”',
      points: [
        'Cirreon product family: Vault, CIT, Smart Safe, Retail, Branch, Forecasting, Routing and Accounting',
        'Currency Controller for high-volume cash vaults and cash centers, in the cloud or on-site',
        'Serves financial institutions, cash-in-transit, smart safe and retail',
        'Subscription pricing; start with one product and expand',
        'SOC 2 and ISO/IEC 27001:2022; operating since 1989',
      ],
      source: 'namsys.com, November 2026',
    },
    better: 'If smart safe monitoring or retail cash management is central to your business, NamSys has dedicated Cirreon modules for both — compare them closely.',
  },
  'vs-morphis': {
    name: 'Morphis',
    h1: ['A Morphis', 'alternative.'],
    lede:
      'Morphis and Track/Trace both serve armored carriers, ATM operators and cash logistics. Here is how each describes itself, where Track/Trace takes a different approach, and the questions worth asking any vendor before you choose.',
    theirs: {
      tagline: '“Cash management software and currency supply chain solutions.”',
      points: [
        'Separate solutions: Armored Car Management, Cash Management Forecasting, Enterprise Cash Management, Field Service Command Center, Optimized Vehicle Routing, Smart Safe Manager, Cash In Manager, CRM and Change Order Forecasting',
        'Serves central banks, commercial banks, CIT providers, ATM operators and retailers',
        'Licensed on-site or as software-as-a-service',
        'In the banking and currency supply chain industries for over 20 years',
      ],
      source: 'morphisinc.com, November 2026',
    },
    better: 'If you want to license and run the software on your own servers, or you need central-bank-scale currency forecasting or smart safe management, Morphis offers those options — compare them closely.',
  },
};

// What Track/Trace does differently — shared by both comparison pages.
// Only Track/Trace's own capabilities here, all from this site.
const TNT_DIFFERENTIATORS = [
  { h: 'One platform, not modules', p: 'CIT, ATM servicing, FLM/SLM maintenance, cash vaults, customers, contracts and billing run in one platform, sharing the same data.' },
  { h: 'Co-managed, weekly roadmap', p: 'Configured against your operating model, not a template — and you help direct weekly platform updates. Your roadmap, our delivery.' },
  { h: 'ATM lock automation built in', p: 'Automated lock dispatch through OTC Anywhere across dormakaba, S&G and Intergard: opening on check-out, geofenced controls, close enforcement and reassigns.' },
  { h: 'ATM repair & maintenance', p: 'FLM/SLM service management with auto-assigned tickets, enforced checklists, photo and video evidence, parts, SLAs and a customer portal.' },
  { h: 'Zero-trust enforcement', p: 'Precision user permissions, workflow-controlled field execution, real-time deviation detection and approval, and full auditability of every event.' },
  { h: '90-day implementation target', p: 'From discovery to first production cutover in a typical 90-day window, then continuous weekly delivery.' },
];

// Neutral buying questions — useful whichever vendor you choose.
const TNT_BUYER_QUESTIONS = [
  'Is it one platform or separate products — and do they share one set of data?',
  'Can it cover CIT, ATM servicing, FLM/SLM and vault operations together?',
  'How are ATM locks opened — and which lock brands are automated?',
  'How quickly are changes you request actually delivered?',
  'Can customers order, request pickups and see billing themselves?',
  'Is every service event billable automatically — and are missed billables caught?',
  'What does implementation take, and when is first production cutover?',
];

Object.assign(window, {
  TNT_COMPARE, TNT_DIFFERENTIATORS, TNT_BUYER_QUESTIONS, TNT_COMPARE_KEYS,
  TNT_PAGES, TNT_FAQS, TNT_LANDINGS, TNT_LANDING_KEYS, tntPage, tntAnchor, tntImg,
});
