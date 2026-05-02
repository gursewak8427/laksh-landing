const exams = ['SSC CGL','SSC CHSL','RRB NTPC','RRB Group D','UP Police','Delhi Police','IBPS PO','IBPS Clerk','SBI PO','CTET','CDS','NDA','AFCAT'];

export function ExamsStrip({ copy }) {
  return (
    <section style={{ padding: '40px 0 8px' }}>
      <h2 className="hindi" style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.15, margin: 0, padding: '0 16px' }}>{copy.examsTitle}</h2>
      <div style={{ marginTop: 16, overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 8, animation: 'scrollX 30s linear infinite', width: 'max-content' }}>
          {[...exams, ...exams].map((e, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid #EFEEE6', borderRadius: 99, padding: '10px 16px', fontSize: 13, fontWeight: 700, color: '#0E1130', whiteSpace: 'nowrap' }}>{e}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
