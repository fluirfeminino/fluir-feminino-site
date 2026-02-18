import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import WhatYouGet from './components/WhatYouGet';
import Bonuses from './components/Bonuses';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import CountdownBanner from './components/CountdownBanner';

function App() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    const offerElement = document.getElementById('offer');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <CountdownBanner />
      <Hero onCTAClick={scrollToOffer} />
      <PainPoints />
      <Solution />
      <WhatYouGet />
      <Bonuses />
      <BeforeAfter />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
      <Footer />
      <FloatingCTA show={showFloatingCTA} onClick={scrollToOffer} />
    </div>
  );
}

export default App;
