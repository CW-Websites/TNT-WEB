function TNTATM() {
  const items = [
    'Automated Opening On Check Out',
    'Manual Opening On-Demand',
    'Geofenced Open Controls',
    'Close Enforcement',
    'Automated Reassigns',
    'Truck Cages/Safes',
  ];
  return (
    <section className="section" id="atm">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Lock Automation</div>
          <h2 className="section-head__title">
            Fully automated lock <span className="accent">dispatching.</span>
          </h2>
          <p className="section-head__lede">
            Works across DormaKaba, Stanley S&amp;G and Intergard lock systems<br/>— one platform, every lock, every truck, every vault.
          </p>
        </div>
        <div className="atm reveal">
          <div className="atm__body">
            <div className="atm__visual">
              <img src="uploads/TNT-OTC.png" alt="OTC Anywhere — Track/Trace lock systems integration: Primary and Secondary OTC services with Lock System DB, Keybox (Enterprise hosted), 3rd Party, and On-Premise lock systems" />
            </div>
            <div className="atm__rightcol">
              <a className="btn btn--primary atm__visit" href="https://otcanywhere.com" target="_blank" rel="noopener">
                Visit site
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
              </a>
              <ul className="atm__list">
                {items.map(it => (
                  <li key={it}>
                    <span className="atm__check" aria-hidden="true">
                      <img src="uploads/check-circle-green.png" alt=""/>
                    </span>
                    <span className="atm__text">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.TNTATM = TNTATM;
