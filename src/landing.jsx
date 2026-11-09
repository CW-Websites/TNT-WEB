/* ——— Solution links (home), FAQ section, and the landing-page layout ——— */

const TNT_SOLUTION_CARDS = [
  { key: 'cashmgmt', name: 'Cash management',   blurb: 'Orders, forecasts, vault balances, shipments and billing across the whole cash cycle.' },
  { key: 'cit',      name: 'Cash-in-transit',   blurb: 'Armored carrier dispatch, dynamic routing, real-time tracking, custody capture and liability.' },
  { key: 'routing',  name: 'Route optimization',blurb: 'Dynamic rerouting, per-stop optimization, live route and truck transfers.' },
  { key: 'atm',      name: 'ATM servicing',     blurb: 'Dispense forecasting, auto-created shipments, decash/recash and automated lock dispatch.' },
  { key: 'flm',      name: 'ATM maintenance',   blurb: 'FLM/SLM repair tickets, auto-assignment, checklists, photo evidence, parts and SLAs.' },
  { key: 'vault',    name: 'Cash vaults',       blurb: 'Real-time cash visibility, pack/count/deposit workflows, ledgers and bank orders.' },
  { key: 'billing',  name: 'Billing',           blurb: 'Real-time event billing, missed-billable detection and exports to your invoicing.' },
  { key: 'portal',   name: 'Customer portal',   blurb: 'Online orders, pickup requests, receipts, tickets, ETAs and billing for your customers.' },
];

function TNTSolutions({ exclude, eyebrow = 'Solutions', title, tone = '' }) {
  const cards = TNT_SOLUTION_CARDS.filter(c => c.key !== exclude);
  return (
    <section className={'section ' + tone} id="solutions">
      {tone && <div className="grid-bg"></div>}
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="section-head__title">
            {title || (<>Cash logistics software for <span className="accent">every operation.</span></>)}
          </h2>
          <p className="section-head__lede">
            CIT, ATM, FLM/SLM and vault operations on one platform — so every service line shares the same
            customers, routes, ledgers and billing.
          </p>
        </div>
        <div className="solcards reveal">
          {cards.map(c => {
            const p = tntPage(c.key);
            return (
              <a key={c.key} className="solcard" href={p.path}>
                <span className="solcard__name">{c.name}</span>
                <span className="solcard__blurb">{c.blurb}</span>
                <span className="solcard__more">{p.crumb} →</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.TNTSolutions = TNTSolutions;

function TNTFaq({ page }) {
  const faqs = TNT_FAQS[page] || [];
  if (!faqs.length) return null;
  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">FAQ</div>
          <h2 className="section-head__title">
            Common <span className="accent">questions.</span>
          </h2>
        </div>
        <div className="faq reveal">
          {faqs.map(f => (
            <details key={f.q} className="faq__item">
              <summary className="faq__q">{f.q}</summary>
              <p className="faq__a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
window.TNTFaq = TNTFaq;

function TNTLanding({ page }) {
  const L = TNT_LANDINGS[page];
  const P = tntPage(page);
  const C = TNT_CASES.find(c => c.n === L.caseKey);
  return (
    <>
      <section className="section hero landing-hero" id="top">
        <div className="grid-bg"></div>
        <div className="hero__inner">
          <div className="hero__copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href="/">Track/Trace</a><span className="sep">/</span><span>{P.crumb}</span>
            </nav>
            <div className="hero__kicker"><span>{L.eyebrow}</span></div>
            <h1 className="hero__title">
              {L.h1.map((line, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <br/>}
                  {i === L.accentLine ? <span className="accent">{line}</span> : line}
                </React.Fragment>
              ))}
            </h1>
            <p className="hero__sub">{L.lede}</p>
            <div className="hero__ctas">
              <a href="#contact" className="btn btn--accent">
                Schedule a demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="/#pillars" className="btn btn--ghost">See the platform</a>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__ph hero__ph--web" aria-label="Track/Trace web — Route Control">
              <img src={tntImg('/uploads/TNT-Main-Web-Hero.png')} fetchpriority="high" alt={`Track/Trace ${P.crumb.toLowerCase()} — Route Control dashboard`} />
            </div>
            <div className="hero__ph hero__ph--app" aria-label="Track/Trace mobile app">
              <img src={tntImg('/uploads/TNT-Main-App-Hero.png')} alt="Track/Trace mobile app showing route delivery summary" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper2" id="capabilities">
        <div className="grid-bg"></div>
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">What it covers</div>
            <h2 className="section-head__title">
              Built for the work, <span className="accent">not retrofitted.</span>
            </h2>
          </div>
          <ul className="benefits-grid benefits-grid--auto reveal">
            {L.automates.map(b => (
              <li key={b} className="benefit">
                <div className="benefit__check"></div>
                <div className="benefit__text">{b}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="how">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">How it works</div>
            <h2 className="section-head__title">
              Configured against <span className="accent">your model.</span>
            </h2>
          </div>
          <ol className="steps reveal">
            {L.steps.map((s, i) => (
              <li key={s.h} className="step">
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__h">{s.h}</h3>
                <p className="step__p">{s.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {C && (
        <section className="section section--paper2" id="cases">
          <div className="grid-bg"></div>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Example deployment</div>
              <h2 className="section-head__title">{C.title}</h2>
            </div>
            <div className="cases reveal">
              <div className="case">
                <div className="case__head">
                  <div className="case__model">{C.model}</div>
                  <div className="case__arrow" aria-hidden="true">
                    <img src={tntImg('/uploads/arrow-outbound.png')} loading="lazy" decoding="async" alt=""/>
                  </div>
                  <div className="case__target">{C.target}</div>
                </div>
                <div className="case__body">
                  <div className="case__id">
                    <div className="case__pull">{C.pull}</div>
                    <div className="case__scope">
                      {C.scope.map(s => (
                        <div key={s.k+s.v} className="row"><span className="k">{s.k}</span><span className="v">{s.v}</span></div>
                      ))}
                    </div>
                  </div>
                  <div className="case__col">
                    <h4>Functional Foundations</h4>
                    <ul>{C.foundations.map(f => <li key={f}>{f}</li>)}</ul>
                  </div>
                  <div className="case__col">
                    <h4>Platform Targets</h4>
                    <ul>{C.targets.map(t => <li key={t}>{t}</li>)}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {L.otcLink && (
        <section className="section section--ink" id="locks">
          <div className="grid-bg"></div>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Lock automation</div>
              <h2 className="section-head__title">
                ATM locks open <span className="accent">automatically.</span>
              </h2>
              <p className="section-head__lede">
                Track/Trace dispatches lock combinations through OTC Anywhere — automated opening on check-out,
                geofenced open controls, close enforcement and automated reassigns across dormakaba, S&amp;G and
                Intergard lock systems.
              </p>
              <p style={{marginTop: 24}}>
                <a className="btn btn--accent" href="https://otcanywhere.com/">Learn about OTC Anywhere ATM lock automation →</a>
              </p>
            </div>
          </div>
        </section>
      )}

      {L.showLoop && (
        <section className="section section--paper2" id="customers">
          <div className="grid-bg"></div>
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">Every customer question</div>
              <h2 className="section-head__title">
                Answered <span className="accent">inside the platform.</span>
              </h2>
            </div>
            <div className="loop reveal">
              <div className="loop__list" style={{gridColumn: '1 / -1'}}>
                {TNT_LOOP_ITEMS.map(it => (
                  <div key={it.l1 + it.l2} className="loop__item">
                    <span className="loop__item-label">
                      <span className="loop__item-l1">{it.l1}</span>
                      <span className="loop__item-l2">{it.l2}</span>
                    </span>
                    <span className="loop__item-q">{it.q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <TNTFaq page={page}/>
      <TNTSolutions exclude={page} tone="section--paper2" eyebrow="Other solutions"
        title={<>One platform for <span className="accent">every service line.</span></>}/>
    </>
  );
}
window.TNTLanding = TNTLanding;

function TNTNotFound() {
  return (
    <section className="section hero landing-hero" id="top">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">404</div>
          <h1 className="section-head__title">This page <span className="accent">doesn’t exist.</span></h1>
          <p className="section-head__lede">
            It may have moved. Head back to the <a href="/">Track/Trace home page</a> or pick a solution:{' '}
            {TNT_LANDING_KEYS.map((k, i) => (
              <React.Fragment key={k}>{i > 0 && ' · '}<a href={tntPage(k).path}>{tntPage(k).crumb}</a></React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
window.TNTNotFound = TNTNotFound;

/* ——— Comparison pages (NamSys / Morphis) — content lives in src/pages.jsx ——— */
const TNT_SELF = {
  tagline: 'Cash logistics software — CIT, ATM, FLM/SLM and cash vaults on one co-managed platform.',
  points: [
    'One platform: branches, cash vaults, customers, contracts, locations, shipments, stops, routes, trucks, field users and billing',
    'ATM servicing plus FLM/SLM repair and maintenance',
    'Automated ATM lock dispatch through OTC Anywhere',
    'Co-managed platform-as-a-service with weekly delivery',
    'Typical 90-day target to first production cutover',
  ],
};

function TNTCompare({ page }) {
  const X = TNT_COMPARE[page];
  const P = tntPage(page);
  return (
    <>
      <section className="section hero landing-hero" id="top">
        <div className="grid-bg"></div>
        <div className="hero__inner">
          <div className="hero__copy">
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href="/">Track/Trace</a><span className="sep">/</span><span>{P.crumb}</span>
            </nav>
            <div className="hero__kicker"><span>Track/Trace vs. {X.name}</span></div>
            <h1 className="hero__title">
              {X.h1[0]}<br/><span className="accent">{X.h1[1]}</span>
            </h1>
            <p className="hero__sub">{X.lede}</p>
            <div className="hero__ctas">
              <a href="#contact" className="btn btn--accent">
                Schedule a demo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="#different" className="btn btn--ghost">What’s different</a>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__ph hero__ph--web" aria-label="Track/Trace web — Route Control">
              <img src={tntImg('/uploads/TNT-Main-Web-Hero.png')} fetchpriority="high" alt="Track/Trace cash logistics software — Route Control dashboard" />
            </div>
            <div className="hero__ph hero__ph--app" aria-label="Track/Trace mobile app">
              <img src={tntImg('/uploads/TNT-Main-App-Hero.png')} alt="Track/Trace mobile app showing route delivery summary" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper2" id="glance">
        <div className="grid-bg"></div>
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">At a glance</div>
            <h2 className="section-head__title">
              Track/Trace vs. <span className="accent">{X.name}.</span>
            </h2>
          </div>
          <div className="compare reveal">
            <div className="cmpcard">
              <div className="cmpcard__name">{X.name}</div>
              <p className="cmpcard__tag">{X.theirs.tagline}</p>
              <ul className="cmpcard__list">{X.theirs.points.map(t => <li key={t}>{t}</li>)}</ul>
              <p className="cmpcard__src">Source: {X.theirs.source}</p>
            </div>
            <div className="cmpcard cmpcard--us">
              <div className="cmpcard__name">Track/Trace</div>
              <p className="cmpcard__tag">{TNT_SELF.tagline}</p>
              <ul className="cmpcard__list">{TNT_SELF.points.map(t => <li key={t}>{t}</li>)}</ul>
              <p className="cmpcard__src">Source: trackandtracecash.com</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="different">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Where Track/Trace is different</div>
            <h2 className="section-head__title">
              Built for cash logistics, <span className="accent">not retrofitted.</span>
            </h2>
          </div>
          <ol className="steps steps--six reveal">
            {TNT_DIFFERENTIATORS.map((d, i) => (
              <li key={d.h} className="step">
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="step__h">{d.h}</h3>
                <p className="step__p">{d.p}</p>
              </li>
            ))}
          </ol>
          <div className="fitnote reveal">
            <div className="fitnote__h">When {X.name} may fit better</div>
            <p className="fitnote__p">{X.better}</p>
          </div>
        </div>
      </section>

      <section className="section section--ink" id="questions">
        <div className="grid-bg"></div>
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Choosing a vendor</div>
            <h2 className="section-head__title">
              Questions to ask <span className="accent">any vendor.</span>
            </h2>
          </div>
          <ul className="benefits-grid benefits-grid--auto reveal">
            {TNT_BUYER_QUESTIONS.map(q => (
              <li key={q} className="benefit">
                <div className="benefit__check"></div>
                <div className="benefit__text">{q}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TNTFaq page={page}/>
      <TNTSolutions tone="section--paper2" eyebrow="Track/Trace solutions"
        title={<>One platform for <span className="accent">every service line.</span></>}/>
      <section className="section cmp-legal">
        <div className="container">
          <p>
            Information about {X.name} on this page is taken from {X.name}’s public website ({X.theirs.source}) and may
            have changed since. {X.name} and its product names are trademarks of their respective owner; Track/Trace and
            CoorWorks are not affiliated with or endorsed by {X.name}. Spotted something out of date?{' '}
            <a href="mailto:support@coorworks.com">Tell us</a> and we’ll correct it.
          </p>
        </div>
      </section>
    </>
  );
}
window.TNTCompare = TNTCompare;
