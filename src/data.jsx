/* ——— TNT data — distilled from the deck —————————————————————————————
   Tone follows CoorWorks: brief, impact-statement copy. */

const TNT_NAV_LINKS = [
  { id: 'pillars',       label: 'Platform'        },
  { id: 'benefits',      label: 'Benefits'        },
  { id: 'cases',         label: 'Deployments'     },
  { id: 'customers',     label: 'Customers'       },
  { id: 'atm',           label: 'ATM'             },
  { id: 'integrations',  label: 'Integrations'    },
  { id: 'process',       label: 'Process'         },
];

const TNT_BENEFITS = [
  /* Column 1 (top to bottom) */
  'Dynamic & Automated Routing Operations',
  'Full Auditability of All User / Shipment Events',
  'Precision User Permissions Controls',
  'Order Workflow Enforcement Design',
  'Automate any Service Schedule',
  /* Column 2 (top to bottom) */
  'UI Simplification & User Proofing',
  'Real-Time Deviation Detection / Approval',
  'Deal with Any Edge Case',
  'Integrated Customer Engagement',
  'Billing on Any Service Action',
];

/* Hero kicker scope tags */
const TNT_SCOPE = ['VAULTING', 'CIT', 'ATM', 'SERVICE', 'FORECASTING', 'CONTRACTING', 'BILLING'];

/* The 15 capability pillars from slide 2 — ordered exactly as positioned
   in the deck (top row L→R, then bottom row L→R), 5 wide × 3 rows. */
const TNT_PILLARS = [
  /* —— Row 1: Top half of slide, left → right —— */
  { name: 'Branches', items: [
    'Centralized Mgmt',
    'Action Permissions',
    'Operation Design',
    'Procedure Design',
    'Secured Transfer',
  ]},
  { name: 'Cash Vaults', items: [
    'Real-Time Cash Visibility',
    'Pack / Count / Deposit',
    'Customizable Ledgers',
    'Bank / FI Order Mgmt',
    'Fully Auditable',
  ]},
  { name: 'Customers', items: [
    'Direct Ops Participation',
    'Real-Time Visibility',
    'Live Pickup Requests',
    'Event Notifications',
    'Receipts / Manifests',
  ]},
  { name: 'Contracts', items: [
    'Billing Coordination',
    'Event → Billing Rules',
    'Service Coordination',
    'Change Mgmt',
    'Document Mgmt',
  ]},
  { name: 'Locations', items: [
    'Dynamically Routable',
    'Recurring Schedules',
    'Ship Type Routing Mgmt',
    'Empty / Fill Forecasting',
    'Kaba / S&G Integrated',
  ]},

  /* —— Row 2: Top-right tail + bottom-left start —— */
  { name: 'Shipments', items: [
    'Forecast Creatable',
    'Auto-Create Schedules',
    'Receipt / POD Capture',
    'On-Route Deliverable',
    'Delivery Cutoffs',
  ]},
  { name: 'Stops', items: [
    'Sequenced vs. Actual',
    'Live Route Transfer',
    'Per Stop Optimization',
    'ETA Management',
    'Truck Transfers',
  ]},
  { name: 'Routes', items: [
    'Real-Time Tracking',
    'Dynamic & Auto Rerouting',
    'Drive Optimization',
    'ETA Time / Mileage',
    'Liability Enforced',
  ]},
  { name: 'Trucks', items: [
    'Liability Enforcement',
    'Fixed Route Assignment',
    'Cage / Safe Integration',
    'Truck Pre-Trip Checks',
    'Geo-Fenced Access',
  ]},
  { name: 'Field Users', items: [
    'Workflow-Controlled',
    'Stop / Step Enforced',
    'Real-Time Work Updates',
    'Just-In-Time Open Codes',
    'Deviation Alert / Approve',
  ]},

  /* —— Row 3: Bottom-right —— */
  { name: 'CIT / FI', items: [
    'Service Monitoring',
    'Same-Day Deliveries',
    'Batch Processing',
    'Coin + Coin Management',
    'Delivery / Count Controls',
  ]},
  { name: 'Retail / FI ATM', items: [
    'Order Type Workflows',
    'Same-Day Decash / Recash',
    'Automated Lock Dispatch',
    'Required Deposits',
    'Service Checklists',
  ]},
  { name: 'FLM / SLM', items: [
    'Customizable Model',
    'Auto-Ticket Assignment',
    'External Coordination',
    'Customer Portal',
    'On-Route Assignments',
  ]},
  { name: 'Billing', items: [
    'Real-Time Event Billing',
    'All Services Applicable',
    'Missed Billable Events',
    'Customer Accessible',
    'System Exportable',
  ]},
  { name: 'Analytics', items: [
    'Top Performers',
    'Route / Stop Timing',
    'Utilization Trending',
    'Service Responsiveness',
    'Field / Vault Compliance',
  ]},
];

/* Deployment cases — slides 5–8 */
const TNT_CASES = [
  {
    n: '01',
    model: 'Regional CIT Operator',
    target: 'Ops Scaling for Additional Customer Acquisition',
    title: 'Regional CIT — Operational Scaling',
    pull: 'No extra time for anything — needs a co-managed platform configured for maximum process efficiency.',
    foundations: [
      'Simplified regular / emergency ledgering',
      'User-proof order create, packing, counting',
      'Daily vault balance & activity reporting',
      'Deposit-out / bag-out packing',
      'Dynamically routed Fed / Bank pickups',
      'Real-time billing & one-off charges',
      'Automation-assisted route planning',
    ],
    targets: [
      'Expand customer base',
      'Simplify resource expansion',
      'Increase route / stop ratios',
      'Deepen customer engagement',
      'Structured billing established',
    ],
    scope: [
      { k: 'Routes', v: '3–5 Daily' },
      { k: 'Stops',  v: '10–20 / Route' },
      { k: 'Staff',  v: '3–5 Dedicated' },
    ],
  },
  {
    n: '02',
    model: 'ATM & FLM Services',
    target: 'Full Logistical Automation',
    title: 'ATM Loading & FLM Service',
    pull: 'No time to breathe day over day — needs a system to automate key logistical functions.',
    foundations: [
      'Regular / emergency ledgers',
      'Daily vault balance & activity reporting',
      'Deposit-out / bag-out packing',
      'Dispense forecasting & auto shipment creation',
      'Dynamically routed Fed / Bank pickups',
      'Fully automated lock dispatch',
      'Real-time cross-service billing',
    ],
    targets: [
      'Auto-create scheduled work',
      'Eliminate manual lock dispatch',
      'Single billing surface across services',
      'Forecast-driven operations',
    ],
    scope: [
      { k: 'Routes', v: '5–7 Daily' },
      { k: 'Stops',  v: '10–20 / Route' },
      { k: 'Staff',  v: '3–5 Dedicated' },
    ],
  },
  {
    n: '03',
    model: 'High-Volume CIT',
    target: 'Consistent Operational Enforcement',
    title: 'High-Volume CIT Operation',
    pull: 'No time to breathe day over day — needs a system to fully trust operational enforcement.',
    foundations: [
      'Precision user permissions',
      'Zero-trust enforcement at every step',
      'Workflow-controlled field execution',
      'Full auditability of every event',
      'Real-time deviation detection / approval',
      'Centralized procedure management',
    ],
    targets: [
      'Zero-trust enforcement established',
      'Full auditability established',
      'Reduced operational risk surface',
      'Shorter onboarding for new users',
    ],
    scope: [
      { k: 'Routes', v: '15–50 Daily' },
      { k: 'Stops',  v: '25–40 / Route' },
      { k: 'Staff',  v: '10+ Dedicated' },
    ],
  },
  {
    n: '04',
    model: 'FLM/SLM Service Provider',
    target: 'ATM Specific Service Management',
    title: 'FLM Service Provider Operation',
    pull: 'No more non-industry-specific, generic, one-size-fits-all service management platforms.',
    foundations: [
      'Customizable service options & controls',
      'Enforced compliance per service action',
      'Pic / video evidence capture (before / after)',
      'Direct customer participation (create / cancel)',
      'Machine service & truck checklists',
      'Automated lock opening / closing',
      'SLA visibility',
      'Simplified parts management',
      'ETA notifications',
      'Tool / equipment check-in / check-out',
      'Technician auto-assignment rules',
      'Preventative maintenance schedules',
    ],
    targets: [
      'Deepen customer engagement',
      'Integrate lock operations',
      'Custom-configured service model',
      'External coordination automated',
    ],
    scope: [
      { k: 'Techs',  v: '10+ Service' },
      { k: 'Model',  v: 'Custom-Configured' },
    ],
  },
];

/* Customer integration loop — slide 4 */
const TNT_LOOP_TAGLINE = 'Win Them Once. Service Them Forever.';
const TNT_LOOP_ITEMS = [
  { l1: 'Location',          l2: 'Service History',          q: 'When were they last here?' },
  { l1: 'Shipment',          l2: 'Specific History',         q: 'When was it delivered?' },
  { l1: 'Ledger',            l2: 'Activity',                 q: 'Let me verify…' },
  { l1: 'Daily Vault',       l2: 'Balance',                  q: 'What is current cash position / liability?' },
  { l1: 'View / Adjust',     l2: 'Cash / Coin Schedules',    q: 'Need to add more to the order.' },
  { l1: 'On-Demand Shipment',l2: 'Create / Edit',            q: 'What\u2019s the standing order?' },
  { l1: 'Routed / Ad-Hoc',   l2: 'Pickup Requests',          q: 'Need this picked-up ASAP.' },
  { l1: 'Delivery / Pickup', l2: 'Receipts',                 q: 'Notify on all activity at that location.' },
  { l1: 'Signature / Name',  l2: 'Receipt Capture',          q: 'Who took possession / when?' },
  { l1: 'Bank / Carrier',    l2: 'POD',                      q: 'When were they dropped-off?' },
  { l1: 'Real-Time',         l2: 'Billing',                  q: 'Where are we this month?' },
  { l1: 'Service Ticket',    l2: 'Requests',                 q: 'Machine is down…' },
  { l1: 'ETA',               l2: 'Notifications',            q: 'When will they be at location X?' },
  { l1: 'Location',          l2: 'Change Mgmt',              q: 'I need new service starting on the 1st.' },
  { l1: 'Operating',          l2: 'Hours',                   q: 'I need service between these times.' },
];

/* Integrations matrix — slide 10 */
const TNT_INTEGRATIONS = [
  {
    name: 'Currency Platforms',
    items: [
      { t: 'Shipment Import' },
      { t: 'Status Updates' },
      { t: 'Location Detail' },
    ],
  },
  {
    name: 'Bank / FI Systems',
    items: [
      { t: 'Adaptive I/O Framework' },
      { t: 'Cash/Coin Ordering' },
      { t: 'Vault Balance/Activity' },
      { t: 'Approved Shipments' },
      { t: 'Order Timing Controls' },
      { t: 'Deposit Out Procedures' },
      { t: 'Regular/EC Ledgering' },
      { t: 'Data Directly Accessible' },
    ],
  },
  {
    name: 'Cash Sorters / Safes',
    items: [
      { t: 'Semacon' },
      { t: 'Glory' },
      { t: 'Recommend', recommend: true },
    ],
  },
  {
    name: 'Bluetooth Devices',
    items: [
      { t: 'HID Laser Scanners' },
      { t: 'Printers' },
      { t: 'Recommend', recommend: true },
    ],
  },
  {
    name: 'Core Processes',
    items: [
      { t: 'Shipment Batch Create' },
      { t: 'Shipment File Import' },
      { t: 'Machine Balances' },
      { t: 'Change Management', group: 'top' },
      { t: 'User Time Exports' },
      { t: 'Billing Exports' },
    ],
  },
  {
    name: 'External Solutions',
    items: [
      { t: 'Invoicing AP/AR' },
      { t: 'API –Based' },
      { t: 'SFTP Transfer' },
    ],
  },
];

/* Process — slide 11 */
const TNT_PROCESS_STEPS = [
  { t: 'Discovery & operating-model fit',     s: 'We map your CIT/ATM/FLM operation against the platform — gaps, edge cases, integrations.' },
  { t: 'Co-managed configuration',             s: 'Branches, vaults, contracts, ledgers, billing rules — set up against your model, not a template.' },
  { t: 'Direct platform mgmt',                 s: 'You help drive and direct weekly platform updates — your roadmap, our delivery.' },
  { t: 'Continuous evolution',                 s: 'Capabilities ship in days, not quarters. The platform compounds with your operation.' },
];

/* Stats strip — pulled from the broader CoorWorks deck for credibility */
const TNT_STATS = [
  { num: '$3Bn',  unit: '+/mo', lbl: 'Cash Processed',     desc: 'Secured cash processing + transport across vaults, branches, and routes.' },
  { num: '500K',  unit: '+/mo', lbl: 'ATM Opens / Closes', desc: 'Cross-platform ATM lock automation (Kaba, S&G, Intergard).' },
  { num: '90',    unit: 'day',  lbl: 'Implementation',     desc: 'From discovery to first production cutover, typical target window.' },
  { num: '24×7',  unit: '',     lbl: 'Operations',         desc: 'Platform operates 24×7. We work on-demand alongside it.' },
];

Object.assign(window, {
  TNT_NAV_LINKS, TNT_SCOPE, TNT_PILLARS, TNT_BENEFITS, TNT_CASES,
  TNT_LOOP_TAGLINE, TNT_LOOP_ITEMS,
  TNT_INTEGRATIONS, TNT_PROCESS_STEPS, TNT_STATS,
});
