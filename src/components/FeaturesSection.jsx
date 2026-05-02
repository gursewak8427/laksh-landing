export function FeaturesSection({ copy }) {
  return (
    <section style={{ padding: '40px 16px 8px' }}>
      <h2 className="hindi" style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.15, margin: 0 }}>{copy.featuresTitle}</h2>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {copy.features.map((f, i) => (
          <div key={i} style={{ background: 'white', border: '1px solid #EFEEE6', borderRadius: 16, padding: '16px 16px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: '#FFF1E6', display: 'grid', placeItems: 'center', fontSize: 22, lineHeight: 1, flexShrink: 0 }}>{f.e}</div>
            <div style={{ flex: 1 }}>
              <div className="hindi" style={{ fontSize: 16, fontWeight: 800, color: '#0E1130', letterSpacing: '-.01em' }}>{f.t}</div>
              <div className="hindi" style={{ fontSize: 13, color: '#5C6075', marginTop: 4, lineHeight: 1.5 }}>{f.d}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
