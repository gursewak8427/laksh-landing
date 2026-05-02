import { Icons } from './Icons';

export function FinalCTA({ copy, onCTA, count }) {
  return (
    <section style={{ padding: '40px 16px 24px' }}>
      <div style={{ background: '#0E1130', color: 'white', borderRadius: 22, padding: '28px 22px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-20%', width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,107,31,.35) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative' }}>
          <div className="hindi" style={{ display: 'inline-flex', gap: 5, alignItems: 'center', background: 'rgba(242,107,31,.18)', color: '#FFB67A', fontSize: 10, fontWeight: 800, padding: '4px 10px', borderRadius: 99, letterSpacing: .5 }}>
            <Icons.Sparkle s={11} c="#FFB67A" /> FREE FOR EARLY USERS
          </div>
          <h2 className="hindi" style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.1, margin: '14px 0 8px' }}>{copy.finalCtaH}</h2>
          <p className="hindi" style={{ fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.5, margin: 0 }}>{copy.finalCtaSub}</p>
          <button onClick={onCTA} className="hindi" style={{ marginTop: 20, width: '100%', background: '#F26B1F', color: 'white', border: 'none', borderRadius: 14, padding: '16px 18px', fontSize: 16, fontWeight: 800, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, boxShadow: '0 10px 24px -6px rgba(242,107,31,.5)' }}>
            {copy.cta} <Icons.ArrowRight s={18} />
          </button>
          <div style={{ marginTop: 10, fontSize: 11, color: 'rgba(255,255,255,.5)', textAlign: 'center' }}>{count}+ students already on waitlist</div>
        </div>
      </div>
    </section>
  );
}
