import { useState, useEffect } from 'react';
import { COPY } from './constants/copy';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { HowItWorks } from './components/HowItWorks';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PrepareSection } from './components/PrepareSection';
import { BusUseCase } from './components/BusUseCase';
import { ExamsStrip } from './components/ExamsStrip';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { WaitlistModal, WAITLIST_BASE } from './components/WaitlistModal';
import { WelcomeDialog } from './components/WelcomeDialog';
import { trackPageViewed, trackCtaClicked, trackModalOpened, trackWelcomeShown, trackWelcomeAction } from './lib/analytics';

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);
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

  // Motivational welcome dialog — once per visitor, shortly after arrival
  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem('laksh_welcome_seen') === '1' ||
             JSON.parse(localStorage.getItem('laksh_waitlist') || '[]').length > 0;
    } catch { /* ignore */ }
    if (seen) return;
    const t = setTimeout(() => {
      setWelcomeOpen(true);
      trackWelcomeShown();
      try { localStorage.setItem('laksh_welcome_seen', '1'); } catch { /* ignore */ }
    }, 900);
    return () => clearTimeout(t);
  }, []);

  const closeWelcome = () => { trackWelcomeAction('dismiss'); setWelcomeOpen(false); };
  const welcomeJoin = () => {
    trackWelcomeAction('cta');
    setWelcomeOpen(false);
    open('welcome_dialog');
  };

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
        <PrepareSection copy={COPY} onCTA={() => open('prepare_section')} />
        <BusUseCase onCTA={() => open('bus_usecase')} />
        <ExamsStrip copy={COPY} />
        <FAQ copy={COPY} />
        <FinalCTA copy={COPY} onCTA={() => open('final_cta')} count={count} />
        <Footer copy={COPY} />
      </main>
      <StickyBottomBar copy={COPY} onCTA={() => open('sticky_bar')} visible={showSticky && !waitlistOpen && !welcomeOpen} />
      <WelcomeDialog open={welcomeOpen} count={count} onJoin={welcomeJoin} onClose={closeWelcome} />
      <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
    </div>
  );
}

export default App;
