import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sprout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.process, id: 'process' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-garden-mint/95 backdrop-blur-md shadow-garden py-3'
            : 'bg-transparent py-6'
        }`}
        role="navigation"
        aria-label="Hauptnavigation"
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
              aria-label="Gartenpflege Khan - Zur Startseite"
            >
              <div className={`p-2 rounded-xl transition-colors duration-300 ${
                isScrolled ? 'bg-garden-lime' : 'bg-garden-lime/90'
              }`}>
                <Sprout className="w-6 h-6 text-garden-forest" aria-hidden="true" />
              </div>
              <span className={`font-heading font-bold text-sm tracking-wider uppercase transition-colors duration-300 ${
                isScrolled ? 'text-garden-forest' : 'text-garden-forest'
              }`}>
                Gartenpflege Khan
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium text-sm tracking-wide transition-colors duration-300 hover:text-garden-sage focus-ring rounded px-2 py-1 ${
                    isScrolled ? 'text-garden-forest' : 'text-garden-forest'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Language Toggle */}
              <div className="border-l border-garden-forest/20 pl-6">
                <LanguageToggle />
              </div>
              
              {/* CTA Button */}
              <a
                href="tel:+4915204460180"
                className="btn-primary text-sm py-3 px-6 flex items-center gap-2"
                aria-label="Jetzt anrufen"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span className="hidden xl:inline">{t.nav.cta}</span>
                <span className="xl:hidden">Anrufen</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <LanguageToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors duration-300 focus-ring ${
                  isScrolled ? 'text-garden-forest' : 'text-garden-forest'
                }`}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-garden-forest/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-garden-mint shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <nav className="flex-1" aria-label="Mobile Navigation">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <li
                    key={link.id}
                    className="opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="w-full text-left py-4 px-4 text-xl font-heading font-bold text-garden-forest hover:bg-garden-lime/30 rounded-2xl transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile CTA */}
            <div className="pt-6 border-t border-garden-forest/10">
              <a
                href="tel:+4915204460180"
                className="btn-primary w-full justify-center flex items-center gap-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>01520 / 44 60 180</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
