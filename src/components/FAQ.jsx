import { useState } from 'react';
import { Icons } from './Icons';

export function FAQ({ copy }) {
  const [open, setOpen] = useState(0);
  return (
    <section style={{ padding: '44px 18px 8px' }}>
      <h2 className="hindi h-sec reveal">{copy.faqTitle}</h2>
      <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {copy.faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="card reveal" style={{ overflow: 'hidden', transitionDelay: `${i * 50}ms` }}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="hindi"
                style={{
                  width: '100%', border: 'none', background: 'transparent', cursor: 'pointer',
                  padding: '15px 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 10, textAlign: 'left', fontSize: 14.5, fontWeight: 700, color: 'var(--ink)',
                }}
              >
                {f.q}
                <span style={{ flexShrink: 0, transition: 'transform .25s', transform: isOpen ? 'rotate(180deg)' : 'none', color: 'var(--saffron)' }}>
                  <Icons.Chevron s={18} />
                </span>
              </button>
              <div style={{ maxHeight: isOpen ? 200 : 0, overflow: 'hidden', transition: 'max-height .3s ease' }}>
                <div className="hindi" style={{ padding: '0 15px 15px', fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{f.a}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
