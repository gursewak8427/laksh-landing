import { Icons } from './Icons';

export function TopNav({ count, onCTA }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      background: 'rgba(250,250,247,.92)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(228,227,217,.7)',
      padding: '12px 16px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Icons.Logo s={32} />
        <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-.02em' }}>Laksh</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#5C6075', fontWeight: 600 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: '#28C96A', boxShadow: '0 0 0 3px rgba(40,201,106,.18)' }} />
          {count}+ joined
        </span>
      </div>
    </header>
  );
}
