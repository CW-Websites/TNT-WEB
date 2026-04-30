function TNTContact() {
  const [status, setStatus] = React.useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    setStatus('submitting');
    try {
      const res = await fetch('https://formspree.io/f/xpqknjzg', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section section--paper2" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <div className="eyebrow" style={{marginBottom:24}}>Contact</div>
            <h2 className="contact__title">
              Schedule a <span className="accent">demo.</span>
            </h2>
            <p className="contact__lede">
              Tell us about your operation. Schedule an hour to understand the scope of TNT
              and where it can move the needle in your CIT / ATM / FLM service operation.
            </p>
            <div className="contact__rows">
              <div className="contact__row">
                <span className="k">Email</span>
                <span className="v"><a href="mailto:Support@Coorworks.com">Support@Coorworks.com</a></span>
              </div>
              <div className="contact__row">
                <span className="k">Office</span>
                <span className="v">CoorWorks · 1069 W Broad Street #813 · Falls Church, VA 22046</span>
              </div>
              <div className="contact__row">
                <span className="k">Direct</span>
                <span className="v"><a href="tel:7032006225">703.200.6225</a></span>
              </div>
              <div className="contact__row">
                <span className="k">Hours</span>
                <span className="v">Mon–Fri · 09:00–18:00 ET · Platform operates 24×7</span>
              </div>
            </div>
          </div>
          {status === 'success' ? (
            <div className="contact__form contact__success" role="status" aria-live="polite">
              <div className="contact__success-mark" aria-hidden="true">
                <img src="uploads/check-circle-green.png" alt=""/>
              </div>
              <h3>Thanks — we got it.</h3>
              <p>
                Your message is in. A member of the CoorWorks team will be in touch within one business day to schedule your demo.
              </p>
              <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')} style={{alignSelf:'flex-start'}}>
                Send another
              </button>
            </div>
          ) : (
            <form
              className="contact__form reveal"
              action="https://formspree.io/f/xpqknjzg"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="contact__field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" placeholder="Jane Doe" required/>
              </div>
              <div className="contact__field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" placeholder="jane@company.com" required/>
              </div>
              <div className="contact__field">
                <label htmlFor="cf-company">Company / Operation</label>
                <input id="cf-company" name="company" type="text" placeholder="Operation name & scope"/>
              </div>
              <div className="contact__field">
                <label htmlFor="cf-message">What are you trying to move?</label>
                <textarea id="cf-message" name="message" placeholder="Margin · velocity · compliance · onboarding · loss rate"></textarea>
              </div>
              {/* Honeypot — bots fill this, humans don't see it */}
              <input type="text" name="_gotcha" style={{display:'none'}} tabIndex="-1" autoComplete="off"/>
              {status === 'error' && (
                <div className="contact__error" role="alert">
                  Something went wrong sending your message. Please email <a href="mailto:Support@Coorworks.com">Support@Coorworks.com</a> directly.
                </div>
              )}
              <button
                className="btn btn--accent"
                type="submit"
                disabled={status === 'submitting'}
                style={{alignSelf:'flex-start'}}
              >
                {status === 'submitting' ? 'Sending…' : 'Send'}
                {status !== 'submitting' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
window.TNTContact = TNTContact;

function TNTFooter() {
  return (
    <footer className="tnt-footer">
      <div className="container">
        <div className="tnt-footer__grid">
          <div className="tnt-footer__col">
            <img src="uploads/logo-tnt.png" alt="Track/Trace" style={{height: 36, width: 'auto', marginBottom: 18}}/>
            <p style={{margin: 0, lineHeight: 1.6, opacity: 0.8, fontSize: 14, maxWidth: '34ch'}}>
              A SaaS platform for cash logistics — CIT, ATM, and FLM/SLM service operations. Engineered for cash logistics from the ground up, not retrofitted into it.
            </p>
          </div>
          <div className="tnt-footer__col">
            <h4>Site</h4>
            <ul>
              <li><a href="#pillars">Platform</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#cases">Deployments</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="tnt-footer__col">
            <h4>CoorWorks Products</h4>
            <ul>
              <li><a href="https://coorworks.com" target="_blank" rel="noopener">CoorWorks</a></li>
              <li><a href="#top">Track/Trace</a></li>
              <li><a href="https://coorworks.com#deliverables" target="_blank" rel="noopener">OTC Anywhere</a></li>
              <li><a href="https://coorworks.com#deliverables" target="_blank" rel="noopener">ELISA</a></li>
              <li><a href="https://coorworks.com#deliverables" target="_blank" rel="noopener">Coordinate</a></li>
            </ul>
          </div>
          <div className="tnt-footer__col">
            <h4>Contact</h4>
            <ul>
              <li>1069 W Broad Street #813</li>
              <li>Falls Church, VA 22046</li>
              <li><a href="tel:+17032006225">+1 (703) 200‑6225</a></li>
              <li><a href="mailto:support@coorworks.com">support@coorworks.com</a></li>
            </ul>
          </div>
        </div>

        <a href="https://coorworks.com" target="_blank" rel="noopener" className="tnt-footer__wordmark" aria-label="A CoorWorks product">
          CoorWorks<span className="accent">.</span>
        </a>

        <div className="tnt-footer__legal">
          <span>© {new Date().getFullYear()} CoorWorks, Inc. All rights reserved.</span>
          <span>Track/Trace · A CoorWorks Platform · Operating 24 × 7</span>
        </div>
      </div>
    </footer>
  );
}
window.TNTFooter = TNTFooter;
