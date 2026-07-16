export function FeaturesSection({ copy }) {
  return (
    <section style={{ padding: '44px 18px 8px' }}>
      <h2 className="hindi h-sec reveal">{copy.featuresTitle}</h2>
      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {copy.features.map((f, i) => (
          <div key={i} className="card reveal" style={{ padding: 15, transitionDelay: `${i * 60}ms` }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12, background: 'var(--saffron-tint)',
              display: 'grid', placeItems: 'center', fontSize: 21, lineHeight: 1,
            }}>{f.e}</div>
            <div className="hindi" style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em', marginTop: 11 }}>{f.t}</div>
            <div className="hindi" style={{ fontSize: 12.5, color: 'var(--ink-soft)', marginTop: 4, lineHeight: 1.45 }}>{f.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
