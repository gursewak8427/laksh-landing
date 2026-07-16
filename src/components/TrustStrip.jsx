export function TrustStrip({ copy }) {
  return (
    <section style={{ padding: '18px 18px 0' }}>
      <div className="card" style={{ padding: '12px 10px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
        {copy.trust.map((t, i) => (
          <div key={i} className="hindi" style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, textAlign: 'center',
            padding: '4px 2px', borderRight: i < copy.trust.length - 1 ? '1px solid var(--line)' : 'none',
          }}>
            <span style={{ fontSize: 18 }}>{t.e}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.25 }}>{t.t}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
