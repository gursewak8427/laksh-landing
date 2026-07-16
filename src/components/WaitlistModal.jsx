import { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { supabase } from '../lib/supabase';
import { identifyUser, trackWaitlistSubmitted, trackWaitlistError } from '../lib/analytics';

// Seed number so the counter never reads "0". Replace with a live Supabase
// count when you want real social proof. Kept in one place on purpose.
export const WAITLIST_BASE = 247;

const EXAMS = ['SSC', 'Railway (RRB)', 'Police', 'Banking', 'Defence', 'Other'];

function inputStyle(hasError) {
  return {
    width: '100%',
    border: `1.5px solid ${hasError ? 'var(--red)' : 'var(--line)'}`,
    borderRadius: 12, padding: '13px 14px', fontSize: 16, fontWeight: 500,
    color: 'var(--ink)', fontFamily: 'inherit', outline: 'none', background: '#fff', boxSizing: 'border-box',
  };
}

function Field({ label, hint, error, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', letterSpacing: .2 }}>{label}</span>
      {children}
      {error && <span style={{ fontSize: 11, color: 'var(--red)', fontWeight: 600 }}>{error}</span>}
      {!error && hint && <span style={{ fontSize: 11, color: 'var(--ink-faint)' }}>{hint}</span>}
    </label>
  );
}

export function WaitlistModal({ open, onClose }) {
  const [step, setStep] = useState('form');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [exam, setExam] = useState('');
  const [errors, setErrors] = useState({});
  const [count, setCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setStep('form');
      setErrors({});
      try {
        const list = JSON.parse(localStorage.getItem('laksh_waitlist') || '[]');
        setCount(list.length);
      } catch { setCount(0); }
    }
  }, [open]);

  if (!open) return null;

  const submit = async () => {
    const e = {};
    if (!name.trim() || name.trim().length < 2) e.name = 'Apna naam likho';
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) e.phone = 'Valid 10-digit mobile daalo';
    if (!exam) e.exam = 'Ek exam chuno';
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    const entry = { name: name.trim(), phone: phone.replace(/\D/g, ''), exam };

    const { error } = await supabase.from('waitlist').insert(entry);

    // Local backup regardless of Supabase result
    try {
      const list = JSON.parse(localStorage.getItem('laksh_waitlist') || '[]');
      list.push({ ...entry, ts: Date.now() });
      localStorage.setItem('laksh_waitlist', JSON.stringify(list));
      setCount(list.length);
    } catch { /* ignore */ }

    if (error) {
      console.error('Supabase insert error:', error.message);
      trackWaitlistError(error.message);
    } else {
      identifyUser(entry.phone, entry.name, entry.exam);
      trackWaitlistSubmitted(entry.name, entry.exam);
    }

    setSubmitting(false);
    setStep('success');
  };

  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'rgba(16,19,46,.55)',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      display: 'grid', placeItems: 'end center', zIndex: 200, padding: 0, animation: 'fadeIn .25s ease',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: '100%', maxWidth: 'var(--wrap)', background: 'var(--paper)',
        borderRadius: '24px 24px 0 0', padding: '26px 22px max(24px, env(safe-area-inset-bottom))',
        position: 'relative', boxShadow: '0 -20px 60px -20px rgba(16,19,46,.5)',
        animation: 'modalIn .35s cubic-bezier(.2,.9,.3,1.1)',
      }}>
        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: 14, right: 14, width: 36, height: 36, borderRadius: '50%',
          border: 'none', background: 'var(--paper-2)', display: 'grid', placeItems: 'center', cursor: 'pointer', color: 'var(--ink)',
        }}><Icons.X s={16} /></button>

        {step === 'form' && (
          <>
            <div className="pill" style={{ background: 'var(--saffron-tint)', color: 'var(--saffron-deep)', fontSize: 11, fontWeight: 800, padding: '5px 10px', letterSpacing: .4 }}>
              <Icons.Sparkle s={12} c="var(--saffron)" /> EARLY ACCESS
            </div>
            <h2 className="hindi" style={{ fontSize: 25, fontWeight: 800, color: 'var(--ink)', margin: '12px 0 6px', letterSpacing: '-.02em', lineHeight: 1.15 }}>
              Laksh waitlist join karo
            </h2>
            <p className="hindi" style={{ fontSize: 14, color: 'var(--ink-soft)', margin: 0, lineHeight: 1.5 }}>
              Launch hote hi WhatsApp pe link milega — no spam, kabhi nahi.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 20 }}>
              <Field label="Tumhara naam" error={errors.name}>
                <input type="text" placeholder="Rohan Kumar" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle(errors.name)} className="hindi" />
              </Field>

              <Field label="Mobile number" error={errors.phone} hint="Launch link isi number pe WhatsApp hoga">
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ ...inputStyle(false), width: 62, display: 'grid', placeItems: 'center', background: 'var(--paper-2)', fontWeight: 700 }}>+91</div>
                  <input type="tel" inputMode="numeric" placeholder="98XXXXXXXX" maxLength="10" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} style={{ ...inputStyle(errors.phone), flex: 1 }} />
                </div>
              </Field>

              <Field label="Kaunsi exam ki tayari?" error={errors.exam}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {EXAMS.map((x) => (
                    <button key={x} type="button" onClick={() => setExam(x)} className="hindi" style={{
                      border: `1.5px solid ${exam === x ? 'var(--saffron)' : 'var(--line)'}`,
                      background: exam === x ? 'var(--saffron-tint)' : '#fff',
                      color: exam === x ? 'var(--saffron-deep)' : 'var(--ink-soft)',
                      padding: '9px 14px', borderRadius: 99, fontSize: 13, fontWeight: 600, cursor: 'pointer', minHeight: 40,
                    }}>{x}</button>
                  ))}
                </div>
              </Field>
            </div>

            <button onClick={submit} disabled={submitting} className="btn btn-primary hindi" style={{ marginTop: 20, opacity: submitting ? .8 : 1 }}>
              {submitting ? 'Saving…' : <>Join Waitlist <Icons.ArrowRight s={16} /></>}
            </button>
            <div className="hindi" style={{ marginTop: 10, fontSize: 11, color: 'var(--ink-faint)', textAlign: 'center' }}>
              Join karke tum launch link WhatsApp pe receive karne ke liye agree karte ho.
            </div>
          </>
        )}

        {step === 'success' && (
          <div style={{ textAlign: 'center', padding: '8px 0 4px' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--green-tint)', display: 'grid', placeItems: 'center', margin: '0 auto 14px' }}>
              <Icons.Check s={36} c="var(--green)" />
            </div>
            <h2 className="hindi" style={{ fontSize: 25, fontWeight: 800, color: 'var(--ink)', margin: '0 0 8px', letterSpacing: '-.02em' }}>You're on the list! 🎉</h2>
            <p className="hindi" style={{ fontSize: 14, color: 'var(--ink-soft)', margin: '0 auto', maxWidth: 340, lineHeight: 1.5 }}>
              Launch hote hi <strong style={{ color: 'var(--ink)' }}>+91 {phone}</strong> pe link bhej denge. Tum waitlist par #{WAITLIST_BASE + count} pe ho.
            </p>
            <div style={{ marginTop: 20, padding: '14px 16px', background: 'var(--card)', border: '1px solid var(--line)', borderRadius: 14, textAlign: 'left' }}>
              <div className="hindi" style={{ fontSize: 11, fontWeight: 800, color: 'var(--ink-soft)', letterSpacing: .4 }}>JAB TAK WAIT KARO</div>
              <div className="hindi" style={{ fontSize: 13, color: 'var(--ink)', marginTop: 6, lineHeight: 1.5 }}>
                Kisi dost ko batao jo forms bharne se pareshaan hai. Laksh WhatsApp pe forward karo — woh baad mein thank you bolega.
              </div>
            </div>
            <button onClick={onClose} className="btn btn-dark hindi" style={{ marginTop: 16 }}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}
