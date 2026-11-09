// Google Analytics 4 for trackandtracecash.com ("Track/Trace - GA4" property).
//
// Loaded only in the browser (build.mjs imports it into the site script).
// It does NOT run on Netlify deploy previews or on your own computer, so test
// visits don't pollute your real visitor numbers.
//
// If you add another outside service later, remember to allow it in the
// Content-Security-Policy line in netlify.toml.

const GA_ID = 'G-PENDING';
const LIVE_HOSTS = ['trackandtracecash.com', 'www.trackandtracecash.com'];

window.dataLayer = window.dataLayer || [];
window.gtag = function gtag() { window.dataLayer.push(arguments); };

if (/^G-[A-Z0-9]{6,}$/.test(GA_ID) && LIVE_HOSTS.includes(window.location.hostname)) {
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

// Record a demo request as a GA "generate_lead" event, tagged with the page it
// came from. Mark generate_lead as a Key event in GA to see it in reports.
window.tntTrackLead = function (sourcePage) {
  window.gtag('event', 'generate_lead', { source_page: sourcePage });
};
