import { Icons } from './Icons';

export function PrepareSection({ copy, onCTA }) {
  return (
    <section id="prepare" style={{ padding: '44px 18px 8px', scrollMarginTop: 68 }}>
      <div className="reveal">
        <div className="hindi eyebrow" style={{ color: 'var(--violet)' }}>{copy.prepEyebrow}</div>
        <h2 className="hindi h-sec" style={{ marginTop: 6 }}>{copy.prepTitle}</h2>
        <p className="hindi" style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.55, margin: '10px 0 0' }}>{copy.prepSub}</p>
      </div>

      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {copy.prepItems.map((f, i) => (
          <div key={i} className="card reveal" style={{ padding: 15, transitionDelay: `${i * 60}ms` }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12, background: 'rgba(122,90,248,.12)',
              display: 'grid', placeItems: 'center', fontSize: 21, lineHeight: 1,
            }}>{f.e}</div>
            <div className="hindi" style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em', marginTop: 11 }}>{f.t}</div>
            <div className="hindi" style={{ fontSize: 12.5, color: 'var(--ink-soft)', marginTop: 4, lineHeight: 1.45 }}>{f.d}</div>
          </div>
        ))}
      </div>

      <button onClick={onCTA} className="btn btn-primary hindi" style={{ marginTop: 16 }}>
        {copy.prepCta} <Icons.ArrowRight s={18} />
      </button>
    </section>
  );
}
