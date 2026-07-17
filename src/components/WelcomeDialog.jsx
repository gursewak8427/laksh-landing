import { Icons } from './Icons';

export function WelcomeDialog({ open, count, onJoin, onClose }) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(16,19,46,.55)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        display: 'grid', placeItems: 'center', padding: 18,
        animation: 'fadeIn .25s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 400, background: 'var(--paper)',
          borderRadius: 'var(--r-xl)', padding: '26px 22px 22px', position: 'relative',
          boxShadow: 'var(--sh-lg)', textAlign: 'center',
          animation: 'modalIn .4s cubic-bezier(.2,.9,.3,1.1)', overflow: 'hidden',
        }}
      >
        {/* ambient glow */}
        <div aria-hidden style={{
          position: 'absolute', top: -70, right: -60, width: 200, height: 200, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(242,107,31,.22), transparent 65%)', pointerEvents: 'none',
        }} />

        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: 12, right: 12, width: 34, height: 34, borderRadius: '50%',
          border: 'none', background: 'var(--paper-2)', display: 'grid', placeItems: 'center', cursor: 'pointer', color: 'var(--ink)', zIndex: 2,
        }}><Icons.X s={15} /></button>

        <div style={{ position: 'relative' }}>
          <div style={{
            width: 60, height: 60, margin: '4px auto 0', borderRadius: 18, background: '#fff',
            display: 'grid', placeItems: 'center', boxShadow: '0 10px 26px -8px rgba(16,19,46,.25)',
          }}>
            <img src="/logo-sm.png" alt="Laksh" width={44} height={44} style={{ display: 'block' }} />
          </div>

          <div className="pill" style={{
            marginTop: 16, background: 'var(--saffron-tint)', color: 'var(--saffron-deep)',
            fontSize: 11, fontWeight: 800, padding: '5px 12px', letterSpacing: .5,
          }}>WELCOME 👋</div>

          <h2 style={{ fontSize: 24, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em', lineHeight: 1.18, margin: '12px 0 0' }}>
            Your dream govt job<br />deserves a fair shot.
          </h2>

          <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.55, margin: '10px auto 0', maxWidth: 320 }}>
            Every year, lakhs of aspirants lose a whole year to missed forms and small mistakes. Laksh makes sure that never happens to you — fill any form in minutes, never miss a deadline.
          </p>

          {/* social proof */}
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            <div style={{ display: 'flex' }}>
              {['#FFB67A', '#9C5BF5', '#28C96A', '#3A7AFE'].map((c, i) => (
                <div key={i} style={{
                  width: 24, height: 24, borderRadius: 99, background: c, border: '2px solid var(--paper)',
                  marginLeft: i === 0 ? 0 : -9, fontSize: 10, color: '#fff', fontWeight: 800, display: 'grid', placeItems: 'center',
                }}>{['R', 'P', 'A', 'S'][i]}</div>
              ))}
            </div>
            <span style={{ fontSize: 12.5, color: 'var(--ink-soft)' }}>
              <strong style={{ color: 'var(--ink)' }}>{count}+ aspirants</strong> already joined
            </span>
          </div>

          <button onClick={onJoin} className="btn btn-primary" style={{ marginTop: 20 }}>
            Join the Waitlist <Icons.ArrowRight s={18} />
          </button>

          <button onClick={onClose} style={{
            marginTop: 10, width: '100%', background: 'transparent', border: 'none',
            color: 'var(--ink-soft)', fontSize: 13, fontWeight: 600, cursor: 'pointer', padding: '6px',
          }}>I’ll look around first</button>
        </div>
      </div>
    </div>
  );
}
