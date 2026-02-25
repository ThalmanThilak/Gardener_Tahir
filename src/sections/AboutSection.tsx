import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Award, Users, Clock, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const serviceAreas = [
  'Rhein-Neckar-Kreis',
  'Mannheim',
  'Landkreis Karlsruhe',
  'Schwetzingen',
  'Oftersheim',
  'Plankstadt',
  'Brühl',
  'Ketsch',
  'Hockenheim',
  'Reilingen',
  'Neulußheim',
  'Altlußheim',
  'Karlsruhe',
  'Bruchsal',
  'Waghäusel',
  'Kirrlach',
  'Bad Schönborn',
  'Östringen',
  'Krönau',
  'Mühlhausen',
  'Philippsburg',
  'Heidelberg',
  'Leimen',
  'Sandhausen',
  'Wieblingen',
  'Edingen-Neckarhausen',
  'Seckenheim',
  'Ludwigshafen',
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-garden-mint"
      aria-labelledby="about-title"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-2 bg-garden-lime/40 rounded-full text-sm font-medium text-garden-forest mb-4 font-mono uppercase tracking-wider">
              {t.about.badge}
            </span>
            <h2
              id="about-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-garden-forest mb-6"
            >
              {t.about.title}
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Image & Stats */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-4xl overflow-hidden shadow-garden">
                <img
                  src="/images/Khan_about_Team.png"
                  alt="Gartenpflege Khan Team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-garden-forest/30 to-transparent" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '10+', label: t.about.stats.years, icon: Clock },
                  { value: '800+', label: t.about.stats.customers, icon: Users },
                  { value: '100%', label: t.about.stats.quality, icon: Award },
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="text-center p-4 lg:p-6 bg-white rounded-3xl shadow-garden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="inline-flex p-3 bg-garden-lime/30 rounded-2xl mb-3">
                        <Icon className="w-5 h-5 text-garden-forest" aria-hidden="true" />
                      </div>
                      <p className="text-2xl lg:text-3xl font-heading font-bold text-garden-forest mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs lg:text-sm text-garden-sage">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-garden-sage leading-relaxed">
                  {t.about.intro1}
                </p>
                <p className="text-garden-sage leading-relaxed">
                  {t.about.intro2}
                </p>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-xl font-heading font-bold text-garden-forest mb-4">
                  {t.about.valuesTitle}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {t.about.values.map((value, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-garden-lime flex-shrink-0" aria-hidden="true" />
                      <span className="text-garden-forest text-sm font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-xl font-heading font-bold text-garden-forest mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  {t.about.serviceAreaTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-garden-forest/5 text-garden-forest text-sm rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-garden-sage text-sm">
                  {t.about.serviceAreaNote}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Centered Contact Info */}
        <div className={`mt-12 lg:mt-20 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="w-full max-w-lg p-6 bg-garden-forest rounded-3xl text-garden-mint">
            <h3 className="text-lg font-heading font-bold mb-4">
              {t.about.contactTitle}
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+4915204460180"
                className="flex items-center gap-3 text-garden-mist hover:text-garden-lime transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>01520 / 44 60 180</span>
              </a>
              <a
                href="mailto:gartenpflegekhan@gmail.com"
                className="flex items-center gap-3 text-garden-mist hover:text-garden-lime transition-colors"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>gartenpflegekhan@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-garden-mist">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>Fohlenweide 2, 68723 Oftersheim</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
