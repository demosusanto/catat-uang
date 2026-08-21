import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
// import TickerBar from './components/TickerBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Why from './components/Why';
import Suitable from './components/Suitable';
import AppDownload from './components/AppDownload';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import PricingSection from './components/PricingSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialSection from './components/TestimonialSection';
import RedirectionPage from './components/RedirectionPage';

function App() {
  const [isRedirection, setIsRedirection] = useState(() => {
    return window.location.pathname.toLowerCase().includes('/redirection');
  });

  useEffect(() => {
    const handlePopState = () => {
      setIsRedirection(window.location.pathname.toLowerCase().includes('/redirection'));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (isRedirection) {
    return <RedirectionPage />;
  }

  return (
    <div className="app">
      <Navbar />
      {/* <TickerBar /> */}
      <main>
        <Hero />
        <Features />
        <Why />
        <Suitable />
        <AppDownload />
        <PricingSection />
        <BenefitsSection />
        <TestimonialSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default App;
