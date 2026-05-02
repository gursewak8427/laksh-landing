import { Icons } from './Icons';
import { AutoFillDemo } from './AutoFillDemo';

export function Hero({ copy, onCTA, count }) {
  return (
    <section style={{ padding: '20px 16px 8px', position: 'relative' }}>
      <div className="hindi" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'white', border: '1px solid #EFEEE6', padding: '6px 12px 6px 6px', borderRadius: 99, fontSize: 11, fontWeight: 700, color: '#0E1130' }}>
        <span style={{ background: '#FFF1E6', color: '#C24600', padding: '3px 8px', borderRadius: 99, fontSize: 9, fontWeight: 800, letterSpacing: .5 }}>NEW</span>
        {copy.badge}
      </div>

      <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.05, margin: '14px 0 0' }}>
        <span className="hindi" style={{ color: '#0E1130' }}>{copy.h1a}</span>
        <br />
        <span className="hindi" style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
          <span style={{ position: 'relative', zIndex: 2, color: '#D93B3B', textDecoration: 'line-through', textDecorationThickness: 2 }}>{copy.h1b}</span>
        </span>
        <br />
        <span className="hindi" style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
          <span style={{ position: 'relative', zIndex: 2, color: '#0E1130' }}>{copy.h1c}</span>
          <span aria-hidden style={{ position: 'absolute', left: -2, right: -4, bottom: '6%', height: '24%', background: 'rgba(242,107,31,.32)', borderRadius: 4, zIndex: 1 }} />
        </span>
      </h1>

      <p className="hindi" style={{ fontSize: 16, color: '#5C6075', lineHeight: 1.55, margin: '14px 0 0' }}>{copy.sub}</p>

      <div style={{ marginTop: 22 }}><AutoFillDemo formName={copy.formName} /></div>

      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ background: 'white', border: '1.5px solid #FFE0E0', borderRadius: 16, padding: '14px 14px' }}>
          <div className="hindi" style={{ fontSize: 10, fontWeight: 800, color: '#D93B3B', letterSpacing: .8 }}>{copy.timeBefore.toUpperCase()}</div>
          <div className="hindi" style={{ fontSize: 22, fontWeight: 800, marginTop: 6, lineHeight: 1, textDecoration: 'line-through', textDecorationColor: '#D93B3B', textDecorationThickness: 2 }}>{copy.timeBeforeNum}</div>
          <div style={{ fontSize: 10, color: '#7A7E94', marginTop: 6, lineHeight: 1.4 }}>Type karte raho… 😩</div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #F26B1F, #FF8C42)', color: 'white', borderRadius: 16, padding: '14px 14px', boxShadow: '0 14px 32px -10px rgba(242,107,31,.55)' }}>
          <div className="hindi" style={{ fontSize: 10, fontWeight: 800, letterSpacing: .8, display: 'inline-flex', gap: 4, alignItems: 'center' }}>
            <Icons.Bolt s={10} c="white" /> {copy.timeAfter.toUpperCase()}
          </div>
          <div className="hindi" style={{ fontSize: 22, fontWeight: 800, marginTop: 6, lineHeight: 1 }}>{copy.timeAfterNum}</div>
          <div style={{ fontSize: 10, marginTop: 6, lineHeight: 1.4, opacity: .92 }}>1 click → AI fills sab ⚡</div>
        </div>
      </div>

      <button onClick={onCTA} className="hindi" style={{ marginTop: 22, width: '100%', background: '#F26B1F', color: 'white', border: 'none', borderRadius: 14, padding: '16px 18px', fontSize: 16, fontWeight: 800, cursor: 'pointer', boxShadow: '0 10px 24px -6px rgba(242,107,31,.5)', animation: 'pulse 2.4s ease-in-out infinite', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        {copy.cta} <Icons.ArrowRight s={18} />
      </button>

      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 12, color: '#5C6075' }}>
        <div style={{ display: 'flex' }}>
          {['#FFB67A','#9C5BF5','#28C96A','#3A7AFE'].map((c,i) => (
            <div key={i} style={{ width: 22, height: 22, borderRadius: 99, background: c, border: '2px solid white', marginLeft: i===0?0:-8, fontSize: 9, color: 'white', fontWeight: 800, display: 'grid', placeItems: 'center' }}>{['R','P','A','S'][i]}</div>
          ))}
        </div>
        <span><strong style={{ color: '#0E1130' }}>{count}+ students</strong> already waiting</span>
      </div>
    </section>
  );
}
