import { useState, useEffect } from 'react';
import { Icons } from './Icons';

const fields = [
  { l: 'Naam', v: 'Rohan Kumar Singh' },
  { l: "Father's Name", v: 'Rajesh Kumar Singh' },
  { l: 'Date of Birth', v: '14 / 08 / 2002' },
  { l: 'Aadhaar', v: '4521 8867 9034' },
  { l: 'Mobile', v: '98XXXXX421' },
  { l: 'Email', v: 'rohan.k@gmail.com' },
];

export function AutoFillDemo({ formName = 'SSC CGL Form' }) {
  const [filled, setFilled] = useState([]);
  const [active, setActive] = useState(-1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let idx = 0;
    let sec = 0;
    const secTimer = setInterval(() => {
      sec = sec > 12 ? 0 : sec + 1;
      setSeconds(sec);
    }, 400);

    let timers = [];
    const tick = () => {
      if (idx >= fields.length) {
        timers.push(setTimeout(() => {
          setFilled([]); setActive(-1); idx = 0; tick();
        }, 1700));
        return;
      }
      setActive(idx);
      timers.push(setTimeout(() => {
        setFilled((prev) => [...prev, idx]);
        setActive(-1);
        idx++;
        timers.push(setTimeout(tick, 480));
      }, 360));
    };
    timers.push(setTimeout(tick, 700));
    return () => { timers.forEach(clearTimeout); clearInterval(secTimer); };
  }, []);

  return (
    <div style={{
      background: 'var(--card)', borderRadius: 'var(--r-xl)', padding: 16,
      border: '1px solid var(--line)', boxShadow: 'var(--sh-lg)',
    }}>
      {/* Browser bar */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 14, padding: '0 2px' }}>
        <div style={{ width: 8, height: 8, borderRadius: 99, background: '#FF5F57' }} />
        <div style={{ width: 8, height: 8, borderRadius: 99, background: '#FEBC2E' }} />
        <div style={{ width: 8, height: 8, borderRadius: 99, background: '#28C940' }} />
        <div style={{ flex: 1, marginLeft: 8, background: 'var(--paper-2)', borderRadius: 7, padding: '5px 10px', fontSize: 10, color: 'var(--ink-faint)', fontFamily: 'monospace' }}>
          🔒 ssc.nic.in/apply
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: '-.01em' }}>{formName}</div>
          <div style={{ fontSize: 10, color: 'var(--ink-faint)', marginTop: 2 }}>Personal details</div>
        </div>
        <div className="pill" style={{ background: 'var(--ink)', color: '#fff', padding: '5px 10px', fontSize: 10, fontWeight: 700 }}>
          <Icons.Clock s={11} c="#fff" /> {seconds}s
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {fields.map((f, i) => {
          const isFilled = filled.includes(i);
          const isActive = active === i;
          return (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '92px 1fr', gap: 10, alignItems: 'center',
              padding: '8px 10px', borderRadius: 11,
              background: isActive ? '#FFE9D9' : isFilled ? '#FFF8F1' : 'var(--paper)',
              border: isActive ? '1.5px solid var(--saffron)' : isFilled ? '1.5px solid rgba(242,107,31,.30)' : '1.5px solid transparent',
              transition: 'all .2s',
            }}>
              <div style={{ fontSize: 10, color: 'var(--ink-faint)', fontWeight: 600 }}>{f.l}</div>
              <div style={{
                fontSize: 12, fontWeight: isFilled || isActive ? 700 : 500,
                color: isFilled || isActive ? 'var(--ink)' : '#C5C5BC',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6,
              }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {isFilled || isActive ? f.v : '—'}
                </span>
                {isFilled && <span style={{ flexShrink: 0, display: 'flex' }}><Icons.Check s={13} c="var(--green)" /></span>}
                {isActive && (
                  <span className="pill" style={{ flexShrink: 0, background: 'var(--saffron)', color: '#fff', fontSize: 9, padding: '2px 6px', fontWeight: 800 }}>
                    <Icons.Bolt s={9} c="#fff" /> AI
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 6, background: 'var(--paper-2)', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{
            width: `${(filled.length / fields.length) * 100}%`, height: '100%',
            background: 'linear-gradient(90deg, var(--saffron), #FFB67A)', borderRadius: 99, transition: 'width .3s ease',
          }} />
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink)' }}>{filled.length}/{fields.length}</div>
      </div>

      <div style={{ marginTop: 10, padding: '9px 10px', background: 'var(--paper-2)', borderRadius: 11, display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ width: 22, height: 22, borderRadius: 7, background: 'linear-gradient(135deg,var(--saffron),#FFB67A)', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 800, fontSize: 11 }}>L</div>
        <div className="hindi" style={{ fontSize: 11, color: 'var(--ink)', fontWeight: 600 }}>AI auto-fill running… 🤖</div>
        <div className="pill" style={{ marginLeft: 'auto', fontSize: 9, color: 'var(--green)', fontWeight: 800, letterSpacing: .4 }}>🔒 ENCRYPTED</div>
      </div>
    </div>
  );
}
