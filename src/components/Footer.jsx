import { Icons } from './Icons';

export function Footer({ copy }) {
  return (
    <footer style={{ padding: '20px 16px 32px', textAlign: 'center' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <Icons.Logo s={22} />
        <div style={{ fontSize: 13, fontWeight: 800 }}>Laksh</div>
      </div>
      <div className="hindi" style={{ fontSize: 11, color: '#9A9DAE' }}>{copy.footer}</div>
    </footer>
  );
}
