/* ——— Why Track/Trace ——————————————————————————————————————————————
   Closing argument before the contact / Schedule Demo section.
   Layout: title + lede on the left, diagram card floats top-right,
   3 pillar cards beneath. ———————————————————————————————————————— */

const TNT_WHY_PILLARS = [
  {
    k: 'Customization',
    body: 'Configured against your operating model — branches, vaults, contracts, ledgers, billing, integrations. Not a template, not a forced retrofit.',
    pts: ['Operating-model fit', 'On-demand integrations', 'Co-managed configuration'],
  },
  {
    k: 'Optimization',
    body: 'Your roadmap, our weekly cadence. The platform compounds — every operator benefits as new capability ships, with you helping direct what comes next.',
    pts: ['Weekly release cadence', 'Customer-driven roadmap', 'Compounding capability'],
  },
  {
    k: 'Automation',
    body: 'CIT, ATM and FLM/SLM service operations engineered for cash logistics — locks, routes, reassigns, settlements, exceptions — automated end-to-end.',
    pts: ['Lock dispatch + close enforcement', 'Route & exception automation', 'Settlement & reassign flows'],
  },
];

function TNTWhyDiagram() {
  return (
    <div className="why__diagram-frame">
      <div className="why__rowlabel-row">
        <span className="why__rowlabel-text">Process</span>
      </div>
      <img className="why__diagram-img" src="uploads/TNT-Why2.png"
           alt="Process loop — Customization, Optimization, Automation — connected to the Track/Trace platform"/>
      <div className="why__rowlabel-row">
        <span className="why__rowlabel-text">Platform</span>
      </div>
    </div>
  );
}

function TNTWhy() {
  return (
    <section className="section section--paper2" id="why">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="why-top reveal">
          <div className="why-top__copy">
            <div className="eyebrow">Why Track/Trace</div>
            <h2 className="section-head__title">
              Built to Optimize<br/>
              CIT + ATM + FLM<br/>
              — <span className="accent">end to end.</span>
            </h2>
          </div>
          <div className="why-top__diagram">
            <TNTWhyDiagram/>
          </div>
        </div>

        <div className="why__pillars reveal">
          {TNT_WHY_PILLARS.map((p, i) => (
            <div key={p.k} className="why__pillar">
              <div className="why__pillar-name">{p.k}</div>
              <p className="why__pillar-body">{p.body}</p>
              <ul className="why__pillar-pts">
                {p.pts.map(pt => (
                  <li key={pt}>
                    <span className="why__check" aria-hidden="true">
                      <img src="uploads/check-circle-green.png" alt=""/>
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.TNTWhy = TNTWhy;
