import { Icons } from './Icons';
import { AutoFillDemo } from './AutoFillDemo';

export function Hero({ copy, onCTA, count }) {
  return (
    <section style={{ padding: '22px 18px 8px' }}>
      {/* Badge */}
      <div className="hindi pill" style={{
        background: 'var(--card)', border: '1px solid var(--line)',
        padding: '6px 12px 6px 6px', fontSize: 11, fontWeight: 700, color: 'var(--ink)',
        boxShadow: 'var(--sh-sm)',
      }}>
        <span style={{ background: 'var(--saffron-tint)', color: 'var(--saffron-deep)', padding: '3px 8px', borderRadius: 99, fontSize: 9, fontWeight: 800, letterSpacing: .5 }}>NEW</span>
        {copy.badge}
      </div>

      {/* Headline */}
      <h1 className="hindi" style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.04, margin: '16px 0 0' }}>
        <span style={{ color: 'var(--ink)' }}>{copy.h1a}</span>{' '}
        <span style={{ position: 'relative', whiteSpace: 'nowrap' }}>
          <span style={{ color: 'var(--red)', textDecoration: 'line-through', textDecorationThickness: 3 }}>{copy.h1strike}</span>
        </span>
        <br />
        <span style={{ color: 'var(--ink)' }}>{copy.h1b}</span>{' '}
        <span style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }}>
          <span style={{ position: 'relative', zIndex: 2, color: 'var(--saffron-deep)' }}>{copy.h1accent}</span>
          <span aria-hidden style={{
            position: 'absolute', left: -3, right: -5, bottom: '4%',
            height: '30%', background: 'rgba(242,107,31,.28)', borderRadius: 4, zIndex: 1,
          }} />
        </span>
      </h1>

      <p className="hindi" style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.55, margin: '14px 0 0' }}>
        {copy.sub}
      </p>

      {/* PRIMARY CTA — above the fold */}
      <button onClick={onCTA} className="btn btn-primary hindi" style={{ marginTop: 20, fontSize: 17 }}>
        {copy.cta} <Icons.ArrowRight s={18} />
      </button>
      <div className="hindi" style={{ marginTop: 9, textAlign: 'center', fontSize: 12, color: 'var(--ink-soft)', display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center' }}>
        <Icons.WhatsApp s={13} c="#25D366" /> {copy.ctaSub}
      </div>

      {/* Social proof row */}
      <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 12, color: 'var(--ink-soft)' }}>
        <div style={{ display: 'flex' }}>
          {['#FFB67A', '#9C5BF5', '#28C96A', '#3A7AFE'].map((c, i) => (
            <div key={i} style={{
              width: 24, height: 24, borderRadius: 99, background: c, border: '2px solid var(--paper)',
              marginLeft: i === 0 ? 0 : -9, fontSize: 10, color: '#fff', fontWeight: 800, display: 'grid', placeItems: 'center',
            }}>{['R', 'P', 'A', 'S'][i]}</div>
          ))}
        </div>
        <span><strong style={{ color: 'var(--ink)' }}>{count}+ students</strong> {copy.waitingCount}</span>
      </div>

      {/* Product demo */}
      <div style={{ marginTop: 22 }}>
        <AutoFillDemo formName="SSC CGL Form" />
      </div>

      {/* Time comparison */}
      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <div style={{ background: 'var(--card)', border: '1.5px solid #FCDCDC', borderRadius: 'var(--r-lg)', padding: 14 }}>
          <div className="hindi eyebrow" style={{ color: 'var(--red)' }}>{copy.timeBefore}</div>
          <div className="hindi" style={{ fontSize: 22, fontWeight: 800, marginTop: 6, lineHeight: 1, textDecoration: 'line-through', textDecorationColor: 'var(--red)', textDecorationThickness: 2 }}>{copy.timeBeforeNum}</div>
          <div style={{ fontSize: 11, color: 'var(--ink-faint)', marginTop: 6 }}>{copy.timeBeforeSub}</div>
        </div>
        <div style={{ background: 'linear-gradient(135deg, var(--saffron), var(--saffron-2))', color: '#fff', borderRadius: 'var(--r-lg)', padding: 14, boxShadow: 'var(--sh-saffron)' }}>
          <div className="hindi eyebrow" style={{ color: '#fff', display: 'inline-flex', gap: 4, alignItems: 'center' }}>
            <Icons.Bolt s={10} c="#fff" /> {copy.timeAfter}
          </div>
          <div className="hindi" style={{ fontSize: 22, fontWeight: 800, marginTop: 6, lineHeight: 1 }}>{copy.timeAfterNum}</div>
          <div style={{ fontSize: 11, marginTop: 6, opacity: .92 }}>{copy.timeAfterSub}</div>
        </div>
      </div>
    </section>
  );
}
