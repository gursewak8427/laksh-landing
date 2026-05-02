import { Icons } from './Icons';

const busScene = '/assets/bus-scene.png';

export function BusUseCase({ onCTA }) {
  return (
    <section style={{ padding: '40px 16px 8px' }}>
      <div style={{
        position: 'relative',
        borderRadius: 22,
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1A1F4D 0%, #2A3175 60%, #0E1130 100%)',
        color: 'white',
        padding: '24px 20px 22px',
        boxShadow: '0 20px 50px -16px rgba(14,17,48,.35)',
      }}>
        {/* Decorative blobs */}
        <div aria-hidden style={{
          position: 'absolute', top: -30, right: -40,
          width: 220, height: 220, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(242,107,31,.32) 0%, transparent 65%)',
        }} />
        <div aria-hidden style={{
          position: 'absolute', bottom: -50, left: -30,
          width: 180, height: 180, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,91,245,.25) 0%, transparent 65%)',
        }} />

        <div style={{ position: 'relative' }}>
          <div className="hindi" style={{
            display: 'inline-flex', gap: 6, alignItems: 'center',
            background: 'rgba(255,255,255,.1)',
            border: '1px solid rgba(255,255,255,.15)',
            padding: '5px 11px', borderRadius: 99,
            fontSize: 11, fontWeight: 700, letterSpacing: .3,
          }}>
            🚌 REAL SCENARIO
          </div>

          <h2 className="hindi" style={{
            fontSize: 24, fontWeight: 800,
            letterSpacing: '-.02em', lineHeight: 1.18,
            margin: '14px 0 0',
          }}>
            Bus mein ho. Form ki<br />last date <span style={{ color: '#FFB67A' }}>aaj raat hai.</span>
          </h2>

          {/* Bus scene photo */}
          <div style={{
            margin: '22px -4px 6px',
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            aspectRatio: '9 / 14',
            boxShadow: '0 24px 60px -20px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.06) inset',
          }}>
            <img
              src={busScene}
              alt="Student filling SSC CGL form on phone while in a moving bus"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div aria-hidden style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(14,17,48,.18) 0%, transparent 25%, transparent 75%, rgba(14,17,48,.45) 100%)',
              pointerEvents: 'none',
            }} />
          </div>

          <p className="hindi" style={{
            fontSize: 14,
            color: 'rgba(255,255,255,.78)',
            lineHeight: 1.55, margin: 0,
          }}>
            Laptop ka wait karoge? Cyber cafe dhundhoge? <strong style={{ color: 'white' }}>Bilkul nahi.</strong> Phone nikalo, Laksh kholo, ek click — form bhar gaya. Bus se utarte hi confirmation aa jayega.
          </p>

          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 7 }}>
            {[
              { e: '🚌', t: 'Bus, train, metro — kahin se bhi' },
              { e: '⏰', t: 'Last minute? Koi tension nahi' },
            ].map((x, i) => (
              <div key={i} className="hindi" style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, color: 'rgba(255,255,255,.85)' }}>
                <span style={{ fontSize: 16 }}>{x.e}</span>
                <span>{x.t}</span>
              </div>
            ))}
          </div>

          <button onClick={onCTA} className="hindi" style={{
            marginTop: 20,
            width: '100%',
            background: '#F26B1F',
            color: 'white',
            border: 'none',
            borderRadius: 14,
            padding: '14px 18px',
            fontSize: 15,
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 10px 24px -6px rgba(242,107,31,.5)',
            display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
          }}>
            Mujhe bhi chahiye <Icons.ArrowRight s={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
