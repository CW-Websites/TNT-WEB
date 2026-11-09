const { useEffect: useEffectTNT } = React;

function useTNTReveal() {
  useEffectTNT(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// `page` says which page to show: 'home', a landing page ('cit', 'atm',
// 'flm', 'vault') or 'notfound'. See src/pages.jsx for the list.
function TNTApp({ page = 'home' }) {
  useTNTReveal();

  let main;
  if (page === 'home') {
    main = (
      <>
        <TNTHero/>
        <TNTPillars/>
        <TNTBenefits/>
        <TNTSolutions/>
        <TNTCases/>
        <TNTLoop/>
        <TNTATM/>
        <TNTIntegrations/>
        <TNTProcess/>
        <TNTWhy/>
        <TNTFaq page="home"/>
        <TNTContact/>
      </>
    );
  } else if (TNT_LANDINGS[page]) {
    main = (<><TNTLanding page={page}/><TNTContact/></>);
  } else {
    main = <TNTNotFound/>;
  }

  return (
    <>
      <TNTNav/>
      <main>{main}</main>
      <TNTFooter/>
    </>
  );
}
window.TNTApp = TNTApp;
// The page is mounted by build.mjs (pre-rendered HTML + hydrate in the browser).
