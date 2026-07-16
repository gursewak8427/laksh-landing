const exams = ['SSC CGL', 'SSC CHSL', 'RRB NTPC', 'RRB Group D', 'UP Police', 'Delhi Police', 'IBPS PO', 'IBPS Clerk', 'SBI PO', 'CTET', 'CDS', 'NDA', 'AFCAT'];

export function ExamsStrip({ copy }) {
  return (
    <section style={{ padding: '44px 0 8px', paddingLeft: 0, paddingRight: 0 }}>
      <h2 className="hindi h-sec reveal" style={{ padding: '0 18px' }}>{copy.examsTitle}</h2>
      <div style={{ marginTop: 16, overflow: 'hidden', position: 'relative', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
        <div style={{ display: 'flex', gap: 8, animation: 'scrollX 32s linear infinite', width: 'max-content', paddingLeft: 18 }}>
          {[...exams, ...exams].map((e, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 99,
              padding: '10px 16px', fontSize: 13, fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap',
              boxShadow: 'var(--sh-sm)',
            }}>{e}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
