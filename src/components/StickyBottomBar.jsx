import { Icons } from './Icons';

export function StickyBottomBar({ copy, onCTA, visible }) {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 40,
      display: 'flex', justifyContent: 'center',
      padding: '18px 18px max(18px, env(safe-area-inset-bottom))',
      background: 'linear-gradient(to top, var(--paper) 62%, rgba(251,250,246,0))',
      transform: visible ? 'translateY(0)' : 'translateY(120%)',
      transition: 'transform .35s cubic-bezier(.2,.8,.3,1)',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      <button onClick={onCTA} className="btn btn-primary hindi" style={{ maxWidth: 'var(--wrap)', fontSize: 15 }}>
        {copy.cta} <Icons.ArrowRight s={16} />
      </button>
    </div>
  );
}
