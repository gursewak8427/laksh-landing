import { Icons } from './Icons';

export function FinalCTA({ copy, onCTA, count }) {
  return (
    <section style={{ padding: '44px 18px 24px' }}>
      <div className="reveal" style={{
        background: 'var(--ink)', color: '#fff', borderRadius: 'var(--r-xl)',
        padding: '30px 22px', position: 'relative', overflow: 'hidden',
      }}>
        <div aria-hidden style={{ position: 'absolute', top: '-30%', right: '-20%', width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,107,31,.4) 0%, transparent 62%)' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: '-40%', left: '-25%', width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(122,90,248,.28) 0%, transparent 62%)' }} />
        <div style={{ position: 'relative' }}>
          <div className="hindi pill" style={{ background: 'rgba(242,107,31,.18)', color: '#FFB67A', fontSize: 10, fontWeight: 800, padding: '5px 11px', letterSpacing: .5 }}>
            <Icons.Sparkle s={11} c="#FFB67A" /> FREE FOR EARLY USERS
          </div>
          <h2 className="hindi" style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.08, margin: '16px 0 8px' }}>{copy.finalCtaH}</h2>
          <p className="hindi" style={{ fontSize: 15, color: 'rgba(255,255,255,.72)', lineHeight: 1.5, margin: 0 }}>{copy.finalCtaSub}</p>
          <button onClick={onCTA} className="btn btn-primary hindi" style={{ marginTop: 20 }}>{copy.cta} <Icons.ArrowRight s={18} /></button>
          <div className="hindi" style={{ marginTop: 12, fontSize: 12, color: 'rgba(255,255,255,.55)', textAlign: 'center', display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center' }}>
            <span className="dot-live" /> {count}+ students already on waitlist
          </div>
        </div>
      </div>
    </section>
  );
}
