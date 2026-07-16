import { Icons } from './Icons';

const busScene = '/assets/bus-scene.png';

export function BusUseCase({ onCTA }) {
  return (
    <section style={{ padding: '44px 18px 8px' }}>
      <div className="reveal" style={{
        position: 'relative', borderRadius: 'var(--r-xl)', overflow: 'hidden',
        background: 'linear-gradient(135deg, #1A1F4D 0%, #2A3175 55%, #10132E 100%)',
        color: '#fff', padding: '24px 20px 22px', boxShadow: 'var(--sh-lg)',
      }}>
        <div aria-hidden style={{ position: 'absolute', top: -30, right: -40, width: 220, height: 220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,107,31,.32) 0%, transparent 65%)' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: -50, left: -30, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(156,91,245,.25) 0%, transparent 65%)' }} />

        <div style={{ position: 'relative' }}>
          <div className="hindi pill" style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', padding: '5px 11px', fontSize: 11, fontWeight: 700 }}>
            🚌 REAL SCENARIO
          </div>

          <h2 className="hindi" style={{ fontSize: 25, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.18, margin: '14px 0 0' }}>
            Bus mein ho. Form ki<br />last date <span style={{ color: '#FFB67A' }}>aaj raat hai.</span>
          </h2>

          <div style={{ margin: '20px -4px 6px', position: 'relative', borderRadius: 'var(--r-lg)', overflow: 'hidden', aspectRatio: '9 / 12', boxShadow: '0 24px 60px -20px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.06) inset' }}>
            <img src={busScene} alt="Student filling SSC form on phone in a moving bus" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(16,19,46,.18) 0%, transparent 25%, transparent 70%, rgba(16,19,46,.5) 100%)' }} />
          </div>

          <p className="hindi" style={{ fontSize: 14, color: 'rgba(255,255,255,.8)', lineHeight: 1.55, margin: 0 }}>
            Laptop ka wait karoge? Cyber cafe dhundhoge? <strong style={{ color: '#fff' }}>Bilkul nahi.</strong> Phone nikalo, Laksh kholo, ek click — form bhar gaya. Bus se utarte hi confirmation aa jayega.
          </p>

          <button onClick={onCTA} className="btn btn-primary hindi" style={{ marginTop: 18, fontSize: 15 }}>
            Mujhe bhi chahiye <Icons.ArrowRight s={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
