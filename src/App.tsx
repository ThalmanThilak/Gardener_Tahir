import { useEffect, useRef, useState } from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';

// Components
import Navigation from './components/Navigation';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

// Sections
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
import AboutSection from './sections/AboutSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if user has already consented to cookies
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Small delay to show cookie consent after page load
      const timer = setTimeout(() => {
        setShowCookieConsent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCookieConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'true' : 'false');
    setShowCookieConsent(false);
  };

  return (
    <LanguageProvider>
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Zum Hauptinhalt springen
      </a>

      {/* Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main id="main-content" ref={mainRef} className="relative">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cookie Consent */}
      {showCookieConsent && (
        <CookieConsent onConsent={handleCookieConsent} />
      )}

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </LanguageProvider>
  );
}

export default App;
