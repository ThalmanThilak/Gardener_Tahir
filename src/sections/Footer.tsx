import { Sprout, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.process, id: 'process' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.contact, id: 'contact' },
  ];

  const serviceLinks = [
    'Gartenpflege',
    'Hecken- & Baumschnitt',
    'Rollrasen',
    'Baumfällung',
    'Pflasterarbeiten',
    'Zauninstallation',
  ];

  return (
    <footer className="bg-garden-forest border-t border-garden-mint/10" role="contentinfo">
      <div className="w-full px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 mb-6"
                aria-label="Gartenpflege Khan - Zur Startseite"
              >
                <div className="p-3 bg-garden-lime rounded-2xl">
                  <Sprout className="w-6 h-6 text-garden-forest" aria-hidden="true" />
                </div>
                <span className="font-heading font-bold text-lg text-garden-mint tracking-wider uppercase">
                  Gartenpflege Khan
                </span>
              </a>
              <p className="text-garden-mist/80 leading-relaxed mb-6 max-w-md">
                {t.footer.description}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+4915204460180"
                  className="flex items-center gap-3 text-garden-mist/80 hover:text-garden-lime transition-colors"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>01520 / 44 60 180</span>
                </a>
                <a
                  href="mailto:gartenpflegekhan@gmail.com"
                  className="flex items-center gap-3 text-garden-mist/80 hover:text-garden-lime transition-colors"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <span>gartenpflegekhan@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-garden-mist/80">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  <span>Fohlenweide 2, 68723 Oftersheim</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-heading font-bold text-garden-mint mb-6">
                {t.footer.quickLinks}
              </h3>
              <nav aria-label="Footer Navigation">
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="text-garden-mist/80 hover:text-garden-lime transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-garden-mint mb-6">
                {t.footer.services}
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-garden-mist/80 hover:text-garden-lime transition-colors"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-garden-mint/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <p className="text-garden-mist/60 text-sm text-center md:text-left">
                © {currentYear} Gartenpflege Khan. {t.footer.copyright}
              </p>

              {/* Legal Links */}
              <nav aria-label="Rechtliche Links">
                <ul className="flex flex-wrap items-center justify-center gap-6">
                  <li>
                    <a
                      href="/impressum"
                      className="text-garden-mist/60 hover:text-garden-lime text-sm transition-colors inline-flex items-center gap-1"
                    >
                      {t.footer.legal.imprint}
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/datenschutz"
                      className="text-garden-mist/60 hover:text-garden-lime text-sm transition-colors inline-flex items-center gap-1"
                    >
                      {t.footer.legal.privacy}
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/jobs"
                      className="text-garden-mist/60 hover:text-garden-lime text-sm transition-colors inline-flex items-center gap-1"
                    >
                      {t.footer.legal.jobs}
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
