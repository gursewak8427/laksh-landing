export function ProblemSection({ copy }) {
  return (
    <section style={{ padding: '40px 16px 8px' }}>
      <h2 className="hindi" style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.15, margin: 0 }}>
        {copy.problemTitle}
      </h2>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {copy.problems.map((p, i) => (
          <div key={i} className="hindi" style={{
            background: 'white',
            border: '1px solid #EFEEE6',
            borderRadius: 14,
            padding: '14px 14px',
            display: 'flex',
            gap: 12,
            alignItems: 'center',
          }}>
            <div style={{ fontSize: 26, lineHeight: 1, flexShrink: 0 }}>{p.e}</div>
            <div style={{ fontSize: 14, color: '#0E1130', fontWeight: 600, lineHeight: 1.4 }}>{p.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
