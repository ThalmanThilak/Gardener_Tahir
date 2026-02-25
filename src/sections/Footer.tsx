import { Phone, Mail, MapPin, ExternalLink, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
    'Hausmeisterservice',
    'Hecken- & Strauchschnitt',
    'Rollrasen',
    'Baumfällung & Baumpflege',
    'Beet- & Pflanzenpflege',
    'Pflasterarbeiten',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/17MYZJEmQL/', label: 'Facebook', external: true },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@gartenlandschaftbau.khan?_r=1&_t=ZG-93ySx0PechF', label: 'TikTok', external: true },
    { icon: Instagram, href: 'https://www.instagram.com/gartenpflegekhan77/', label: 'Instagram', external: true },
    { icon: WhatsAppIcon, href: 'https://wa.me/4915204460180', label: 'WhatsApp', external: true },
  ];

  return (
    <footer className="bg-garden-forest border-t border-garden-mint/10" role="contentinfo">
      <div className="w-full px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
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
                <img
                  src="/images/GartenpflegeKhan_Logo.png"
                  alt="Gartenpflege Khan Logo"
                  className="h-24 lg:h-36 w-auto object-contain"
                />
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

            {/* Social Media */}
            <div>
              <h3 className="font-heading font-bold text-garden-mint mb-6">
                {t.footer.socialMedia}
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-garden-mint/10 rounded-xl text-garden-mist/80 hover:bg-garden-lime hover:text-garden-forest transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
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
