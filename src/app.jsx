const { useEffect: useEffectTNT } = React;

const TNT_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#2F6FB8",
  "showGrid": true
}/*EDITMODE-END*/;

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

function applyTNTTweaks(t) {
  const root = document.documentElement;
  root.style.setProperty('--accent', t.accent || '#2F6FB8');
  document.querySelectorAll('.grid-bg').forEach(el => {
    el.style.display = t.showGrid ? '' : 'none';
  });
}

function TNTApp() {
  const [t, setTweak] = useTweaks(TNT_TWEAK_DEFAULTS);
  useTNTReveal();
  useEffectTNT(() => { applyTNTTweaks(t); }, [t]);

  return (
    <>
      <TNTNav/>
      <main>
        <TNTHero/>
        <TNTPillars/>
        <TNTBenefits/>
        <TNTCases/>
        <TNTLoop/>
        <TNTATM/>
        <TNTIntegrations/>
        <TNTProcess/>
        <TNTWhy/>
        <TNTContact/>
      </main>
      <TNTFooter/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Brand"/>
        <TweakColor label="Accent" value={t.accent}
          onChange={(v) => setTweak('accent', v)}/>
        <TweakSection label="Behavior"/>
        <TweakToggle label="Schematic grid" value={!!t.showGrid}
          onChange={(v) => setTweak('showGrid', v)}/>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<TNTApp/>);
