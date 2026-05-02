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

export function AutoFillDemo({ formName }) {
  const [filled, setFilled] = useState([]);
  const [active, setActive] = useState(-1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let idx = 0;
    let sec = 0;
    const secTimer = setInterval(() => {
      sec += 1;
      setSeconds(sec);
      if (sec > 12) sec = 0;
    }, 400);

    const tick = () => {
      if (idx >= fields.length) {
        setTimeout(() => {
          setFilled([]);
          setActive(-1);
          idx = 0;
          tick();
        }, 1600);
        return;
      }
      setActive(idx);
      setTimeout(() => {
        setFilled(prev => [...prev, idx]);
        setActive(-1);
        idx++;
        setTimeout(tick, 500);
      }, 380);
    };
    const t = setTimeout(tick, 700);
    return () => { clearTimeout(t); clearInterval(secTimer); };
  }, []);

  return (
    <div style={{
      background: 'white',
      borderRadius: 24,
      padding: 18,
      border: '1px solid #EFEEE6',
      boxShadow: '0 24px 50px -16px rgba(14,17,48,.18), 0 6px 16px -8px rgba(14,17,48,.08)',
    }}>
      {/* Browser bar */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 14, padding: '0 2px' }}>
        <div style={{ width: 7, height: 7, borderRadius: 99, background: '#FF5F57' }} />
        <div style={{ width: 7, height: 7, borderRadius: 99, background: '#FEBC2E' }} />
        <div style={{ width: 7, height: 7, borderRadius: 99, background: '#28C940' }} />
        <div style={{ flex: 1, marginLeft: 8, background: '#F4F4EE', borderRadius: 6, padding: '4px 10px', fontSize: 10, color: '#7A7E94', fontFamily: 'monospace' }}>
          ssc.nic.in/apply
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: '-.01em' }}>{formName}</div>
          <div style={{ fontSize: 10, color: '#7A7E94', marginTop: 2 }}>Personal details</div>
        </div>
        <div style={{ background: '#0E1130', color: 'white', padding: '5px 10px', borderRadius: 99, fontSize: 10, fontWeight: 700, display: 'inline-flex', gap: 5, alignItems: 'center' }}>
          <Icons.Clock s={11} c="white" /> {seconds}s
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {fields.map((f, i) => {
          const isFilled = filled.includes(i);
          const isActive = active === i;
          return (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '88px 1fr',
              gap: 10,
              alignItems: 'center',
              padding: '7px 10px',
              borderRadius: 10,
              background: isActive ? '#FFE9D9' : isFilled ? '#FFF8F1' : '#FAFAF7',
              border: isActive ? '1.5px solid #F26B1F' : isFilled ? '1.5px solid rgba(242,107,31,.35)' : '1.5px solid transparent',
              transition: 'all .2s',
            }}>
              <div style={{ fontSize: 10, color: '#7A7E94', fontWeight: 600 }}>{f.l}</div>
              <div style={{
                fontSize: 12,
                fontWeight: isFilled || isActive ? 700 : 500,
                color: isFilled || isActive ? '#0E1130' : '#C5C5BC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 6,
              }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {isFilled || isActive ? f.v : '—'}
                </span>
                {isFilled && (
                  <span style={{ flexShrink: 0, color: '#28C96A', display: 'flex' }}>
                    <Icons.Check s={13} c="#28C96A" />
                  </span>
                )}
                {isActive && (
                  <span style={{
                    flexShrink: 0,
                    background: '#F26B1F',
                    color: 'white',
                    fontSize: 9,
                    padding: '2px 6px',
                    borderRadius: 5,
                    fontWeight: 800,
                    display: 'inline-flex',
                    gap: 3,
                    alignItems: 'center',
                  }}>
                    <Icons.Bolt s={9} c="white" /> AI
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 6, background: '#F4F4EE', borderRadius: 99, overflow: 'hidden' }}>
          <div style={{
            width: `${(filled.length / fields.length) * 100}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #F26B1F, #FFB67A)',
            borderRadius: 99,
            transition: 'width .3s ease',
          }} />
        </div>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#0E1130' }}>
          {filled.length}/{fields.length}
        </div>
      </div>

      <div style={{ marginTop: 10, padding: '8px 10px', background: '#F4F4EE', borderRadius: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
        <div style={{ width: 22, height: 22, borderRadius: 7, background: 'linear-gradient(135deg,#F26B1F,#FFB67A)', display: 'grid', placeItems: 'center', color: 'white', fontWeight: 800, fontSize: 11 }}>L</div>
        <div className="hindi" style={{ fontSize: 11, color: '#0E1130', fontWeight: 600 }}>AI auto-fill running… 🤖</div>
        <div style={{ marginLeft: 'auto', fontSize: 9, color: '#28C96A', fontWeight: 800, letterSpacing: .4 }}>🔒 ENCRYPTED</div>
      </div>
    </div>
  );
}
