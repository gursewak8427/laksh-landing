import { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { supabase } from '../lib/supabase';

function inputStyle(hasError) {
  return {
    width: '100%',
    border: hasError ? '1.5px solid #D93B3B' : '1.5px solid #E4E3D9',
    borderRadius: 12,
    padding: '11px 14px',
    fontSize: 14,
    fontWeight: 500,
    color: '#0E1130',
    fontFamily: 'inherit',
    outline: 'none',
    background: 'white',
    boxSizing: 'border-box',
  };
}

function Field({ label, hint, error, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: '#0E1130', letterSpacing: .2 }}>{label}</span>
      {children}
      {error && <span style={{ fontSize: 11, color: '#D93B3B', fontWeight: 600 }}>{error}</span>}
      {!error && hint && <span style={{ fontSize: 11, color: '#9A9DAE' }}>{hint}</span>}
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

  useEffect(() => {
    if (open) {
      setStep('form');
      setErrors({});
      try {
        const list = JSON.parse(localStorage.getItem('laksh_waitlist') || '[]');
        setCount(list.length);
      } catch (e) { setCount(0); }
    }
  }, [open]);

  if (!open) return null;

  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    const e = {};
    if (!name.trim() || name.trim().length < 2) e.name = 'Please enter your name';
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) e.phone = 'Enter a valid 10-digit mobile';
    if (!exam) e.exam = 'Pick one';
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    const entry = { name: name.trim(), phone: phone.replace(/\D/g, ''), exam };

    const { error } = await supabase.from('waitlist').insert(entry);

    // Always persist locally as backup regardless of Supabase result
    try {
      const list = JSON.parse(localStorage.getItem('laksh_waitlist') || '[]');
      list.push({ ...entry, ts: Date.now() });
      localStorage.setItem('laksh_waitlist', JSON.stringify(list));
      setCount(list.length);
    } catch (_) {}

    if (error) console.error('Supabase insert error:', error.message);

    setSubmitting(false);
    setStep('success');
  };

  const exams = ['SSC', 'Railway (RRB)', 'Police', 'Banking', 'Defence', 'Other'];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(14,17,48,.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'grid',
        placeItems: 'center',
        zIndex: 200,
        padding: 16,
        animation: 'fadeIn .25s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 460,
          background: 'white',
          borderRadius: 24,
          padding: '28px 28px 24px',
          position: 'relative',
          boxShadow: '0 30px 80px -20px rgba(14,17,48,.5)',
          animation: 'modalIn .35s cubic-bezier(.2,.9,.3,1.2)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{ position: 'absolute', top: 14, right: 14, width: 36, height: 36, borderRadius: '50%', border: 'none', background: '#F4F4EE', display: 'grid', placeItems: 'center', cursor: 'pointer', color: '#0E1130' }}
        >
          <Icons.X s={16} />
        </button>

        {step === 'form' && (
          <>
            <div style={{ display: 'inline-flex', gap: 6, alignItems: 'center', background: '#FFF1E6', color: '#C24600', fontSize: 11, fontWeight: 700, padding: '5px 10px', borderRadius: 99, letterSpacing: .4 }}>
              <Icons.Sparkle s={12} c="#F26B1F" /> EARLY ACCESS
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0E1130', margin: '12px 0 6px', letterSpacing: '-.02em', lineHeight: 1.15 }}>
              Join the Laksh waitlist
            </h2>
            <p style={{ fontSize: 14, color: '#5C6075', margin: 0, lineHeight: 1.5 }}>
              Be the first to know when the app launches. We'll WhatsApp you the link — no spam, ever.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 22 }}>
              <Field label="Your name" error={errors.name}>
                <input
                  type="text"
                  placeholder="Rohan Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={inputStyle(errors.name)}
                />
              </Field>

              <Field label="Mobile number" error={errors.phone} hint="We'll send the launch link on WhatsApp">
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ ...inputStyle(false), width: 64, display: 'grid', placeItems: 'center', background: '#F4F4EE', fontWeight: 700, color: '#0E1130' }}>+91</div>
                  <input
                    type="tel"
                    inputMode="numeric"
                    placeholder="98XXXXXXXX"
                    maxLength="10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    style={{ ...inputStyle(errors.phone), flex: 1 }}
                  />
                </div>
              </Field>

              <Field label="Which exam are you preparing for?" error={errors.exam}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {exams.map((x) => (
                    <button
                      key={x}
                      type="button"
                      onClick={() => setExam(x)}
                      style={{
                        border: exam === x ? '1.5px solid #F26B1F' : '1.5px solid #E4E3D9',
                        background: exam === x ? '#FFF1E6' : 'white',
                        color: exam === x ? '#C24600' : '#5C6075',
                        padding: '8px 14px',
                        borderRadius: 99,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                      }}
                    >
                      {x}
                    </button>
                  ))}
                </div>
              </Field>
            </div>

            <button
              onClick={submit}
              style={{
                marginTop: 20,
                width: '100%',
                background: '#F26B1F',
                color: 'white',
                border: 'none',
                borderRadius: 14,
                padding: '14px 18px',
                fontSize: 15,
                fontWeight: 700,
                cursor: submitting ? 'default' : 'pointer',
                fontFamily: 'inherit',
                background: submitting ? '#F59B6A' : '#F26B1F',
                boxShadow: '0 8px 20px -6px rgba(242,107,31,.5)',
                display: 'flex',
                gap: 8,
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background .2s',
              }}
            >
              {submitting ? 'Saving…' : <> Reserve my spot <Icons.ArrowRight s={16} /></>}
            </button>

            <div style={{ marginTop: 12, fontSize: 11, color: '#9A9DAE', textAlign: 'center' }}>
              By joining, you agree to receive the launch link via WhatsApp.
            </div>
          </>
        )}

        {step === 'success' && (
          <div style={{ textAlign: 'center', padding: '12px 0 8px' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#E6F8EE', display: 'grid', placeItems: 'center', margin: '0 auto 14px' }}>
              <Icons.Check s={36} c="#28C96A" />
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0E1130', margin: '0 0 8px', letterSpacing: '-.02em' }}>You're on the list! 🎉</h2>
            <p style={{ fontSize: 14, color: '#5C6075', margin: '0 auto', maxWidth: 340, lineHeight: 1.5 }}>
              We'll WhatsApp <strong style={{ color: '#0E1130' }}>+91 {phone}</strong> the moment Laksh launches. Aap waitlist par #{247 + count} pe ho.
            </p>

            <div style={{ marginTop: 20, padding: '14px 16px', background: '#FAFAF7', borderRadius: 14, textAlign: 'left' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#7A7E94', letterSpacing: .4 }}>WHILE YOU WAIT</div>
              <div style={{ fontSize: 13, color: '#0E1130', marginTop: 6, lineHeight: 1.5 }}>
                Tell a friend who's also tired of filling forms. Forward Laksh on WhatsApp — they'll thank you later.
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                marginTop: 18,
                width: '100%',
                background: '#0E1130',
                color: 'white',
                border: 'none',
                borderRadius: 14,
                padding: '13px 18px',
                fontSize: 14,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
