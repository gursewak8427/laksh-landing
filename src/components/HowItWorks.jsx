export function HowItWorks({ copy }) {
  return (
    <section style={{ padding: '44px 18px 8px' }}>
      <div className="reveal">
        <div className="hindi eyebrow">{copy.howSub}</div>
        <h2 className="hindi h-sec" style={{ marginTop: 6 }}>{copy.howTitle}</h2>
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>
        {/* connecting line */}
        <div aria-hidden style={{
          position: 'absolute', left: 31, top: 30, bottom: 30, width: 2,
          background: 'repeating-linear-gradient(var(--saffron) 0 6px, transparent 6px 12px)', opacity: .35,
        }} />
        {copy.steps.map((s, i) => (
          <div key={i} className="card reveal" style={{
            padding: 16, display: 'flex', gap: 14, alignItems: 'flex-start',
            transitionDelay: `${i * 80}ms`, position: 'relative', zIndex: 1,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12, flexShrink: 0,
              background: 'linear-gradient(135deg, var(--saffron), var(--saffron-2))',
              color: '#fff', fontWeight: 800, fontSize: 17, display: 'grid', placeItems: 'center',
              boxShadow: 'var(--sh-saffron)',
            }}>{s.n}</div>
            <div style={{ flex: 1 }}>
              <div className="hindi" style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>
                <span style={{ marginRight: 6 }}>{s.e}</span>{s.t}
              </div>
              <div className="hindi" style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 4, lineHeight: 1.5 }}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
