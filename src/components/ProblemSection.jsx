export function ProblemSection({ copy }) {
  return (
    <section style={{ padding: '44px 18px 8px' }}>
      <h2 className="hindi h-sec reveal">{copy.problemTitle}</h2>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {copy.problems.map((p, i) => (
          <div key={i} className="hindi card reveal" style={{
            padding: '14px', display: 'flex', gap: 12, alignItems: 'center', transitionDelay: `${i * 60}ms`,
          }}>
            <div style={{
              fontSize: 22, lineHeight: 1, flexShrink: 0, width: 42, height: 42, borderRadius: 12,
              background: 'var(--red-tint)', display: 'grid', placeItems: 'center',
            }}>{p.e}</div>
            <div style={{ fontSize: 14, color: 'var(--ink)', fontWeight: 600, lineHeight: 1.4 }}>{p.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
