import { useState, useEffect } from 'react';
import { COPY } from './constants/copy';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { HowItWorks } from './components/HowItWorks';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BusUseCase } from './components/BusUseCase';
import { ExamsStrip } from './components/ExamsStrip';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { WaitlistModal, WAITLIST_BASE } from './components/WaitlistModal';
import { trackPageViewed, trackCtaClicked, trackModalOpened } from './lib/analytics';

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [count, setCount] = useState(WAITLIST_BASE);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    trackPageViewed();
    try {
      const list = JSON.parse(localStorage.getItem('laksh_waitlist') || '[]');
      setCount(WAITLIST_BASE + list.length);
    } catch { /* ignore */ }

    const onScroll = () => setShowSticky(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [waitlistOpen]);

  // Scroll-reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const open = (location = 'unknown') => {
    trackCtaClicked(location);
    trackModalOpened();
    setWaitlistOpen(true);
  };

  return (
    <div className="page">
      <TopNav count={count} onCTA={() => open('nav')} />
      <main>
        <Hero copy={COPY} onCTA={() => open('hero')} count={count} />
        <TrustStrip copy={COPY} />
        <HowItWorks copy={COPY} />
        <ProblemSection copy={COPY} />
        <FeaturesSection copy={COPY} />
        <BusUseCase onCTA={() => open('bus_usecase')} />
        <ExamsStrip copy={COPY} />
        <FAQ copy={COPY} />
        <FinalCTA copy={COPY} onCTA={() => open('final_cta')} count={count} />
        <Footer copy={COPY} />
      </main>
      <StickyBottomBar copy={COPY} onCTA={() => open('sticky_bar')} visible={showSticky && !waitlistOpen} />
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}

export default App;
