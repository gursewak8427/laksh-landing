import { Icons } from './Icons';

export function Footer({ copy }) {
  return (
    <footer style={{ padding: '18px 18px 30px', textAlign: 'center' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <Icons.Logo s={22} />
        <div style={{ fontSize: 14, fontWeight: 800 }}>Laksh</div>
      </div>
      <div className="hindi" style={{ fontSize: 11.5, color: 'var(--ink-faint)' }}>{copy.footer}</div>
    </footer>
  );
}
