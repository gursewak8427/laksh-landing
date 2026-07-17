import { Icons } from './Icons';

export function TopNav({ count, onCTA }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      background: 'rgba(251,250,246,.85)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(236,234,224,.8)',
    }}>
      <div className="wrap" style={{
        padding: '11px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <Icons.Logo s={38} />
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.02em' }}>Laksh</div>
        </div>
        <button onClick={onCTA} className="hindi" style={{
          border: 'none', background: 'var(--ink)', color: '#fff',
          fontSize: 12, fontWeight: 700, padding: '8px 14px', borderRadius: 99, cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span className="dot-live" style={{ background: '#7CFAB6' }} /> Join
        </button>
      </div>
    </header>
  );
}
