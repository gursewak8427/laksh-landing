import { useState, useEffect } from 'react';
import { COPY } from './constants/copy';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BusUseCase } from './components/BusUseCase';
import { ExamsStrip } from './components/ExamsStrip';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { WaitlistModal } from './components/WaitlistModal';

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [count, setCount] = useState(247);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem('laksh_waitlist') || '[]');
      setCount(247 + list.length);
    } catch (e) {}

    const onScroll = () => setShowSticky(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [waitlistOpen]);

  const open = () => setWaitlistOpen(true);

  return (
    <div className="page">
      <TopNav count={count} onCTA={open} />
      <main>
        <Hero copy={COPY} onCTA={open} count={count} />
        <ProblemSection copy={COPY} />
        <FeaturesSection copy={COPY} />
        <BusUseCase onCTA={open} />
        <ExamsStrip copy={COPY} />
        <FinalCTA copy={COPY} onCTA={open} count={count} />
      </main>
      <Footer copy={COPY} />
      <StickyBottomBar copy={COPY} onCTA={open} visible={showSticky && !waitlistOpen} />
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}

export default App;
