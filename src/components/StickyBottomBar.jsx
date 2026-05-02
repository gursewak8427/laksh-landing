import { Icons } from './Icons';

export function StickyBottomBar({ copy, onCTA, visible }) {
  if (!visible) return null;
  return (
    <div style={{ position: 'sticky', bottom: 0, background: 'linear-gradient(to top, #FAFAF7 70%, rgba(250,250,247,0))', padding: '20px 16px max(20px, env(safe-area-inset-bottom))', zIndex: 40 }}>
      <button onClick={onCTA} className="hindi" style={{ width: '100%', background: '#F26B1F', color: 'white', border: 'none', borderRadius: 14, padding: '15px 18px', fontSize: 15, fontWeight: 800, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, boxShadow: '0 10px 30px -6px rgba(242,107,31,.6)' }}>
        {copy.cta} <Icons.ArrowRight s={16} />
      </button>
    </div>
  );
}
