import { useEffect, useRef, useState } from 'react';
import { Scissors, Layers, TreePine, Flower2, Hammer, Droplets, Fence, Shovel, ArrowRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const serviceIcons = {
  hecken: Scissors,
  rollrasen: Layers,
  baumfaellung: TreePine,
  anpflanzung: Flower2,
  pflaster: Hammer,
  reinigung: Droplets,
  zaun: Fence,
  gartenarbeiten: Shovel,
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const { t } = useLanguage();

  const serviceKeys = Object.keys(t.services.items) as Array<keyof typeof t.services.items>;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  const selectedServiceData = selectedService ? t.services.items[selectedService as keyof typeof t.services.items] : null;
  const SelectedIcon = selectedService ? serviceIcons[selectedService as keyof typeof serviceIcons] : null;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-garden-mint"
      aria-labelledby="services-title"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-4 py-2 bg-garden-lime/40 rounded-full text-sm font-medium text-garden-forest mb-4 font-mono uppercase tracking-wider">
              {t.services.badge}
            </span>
            <h2
              id="services-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-garden-forest mb-6"
            >
              {t.services.title}
            </h2>
            <p className="text-lg text-garden-sage max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {serviceKeys.map((key, index) => {
              const service = t.services.items[key];
              const Icon = serviceIcons[key];
              const isVisible = visibleCards.has(index);

              return (
                <div
                  key={key}
                  data-index={index}
                  className={`service-card group cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedService(key)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedService(key)}
                  aria-label={`${service.title}: ${service.shortDesc}`}
                >
                  <div className="card-garden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={`/images/service-${key}.jpg`}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-garden-forest/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
                        <Icon className="w-5 h-5 text-garden-forest" aria-hidden="true" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-heading font-bold text-garden-forest mb-2 group-hover:text-garden-forest/80 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-garden-sage text-sm leading-relaxed mb-4 flex-1">
                        {service.shortDesc}
                      </p>
                      <div className="flex items-center gap-2 text-garden-forest font-medium text-sm group-hover:gap-3 transition-all">
                        <span>{t.services.modal.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="text-garden-sage mb-4">
              {t.services.cta}
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              {t.services.cta}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && selectedServiceData && SelectedIcon && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-garden-forest/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
            aria-hidden="true"
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-4xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-garden-lime transition-colors focus-ring"
              aria-label={t.services.modal.close}
            >
              <X className="w-5 h-5 text-garden-forest" aria-hidden="true" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-video">
              <img
                src={`/images/service-${selectedService}.jpg`}
                alt={selectedServiceData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-garden-forest/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-garden-lime rounded-xl">
                    <SelectedIcon className="w-6 h-6 text-garden-forest" aria-hidden="true" />
                  </div>
                  <h3
                    id="modal-title"
                    className="text-2xl lg:text-3xl font-heading font-bold text-white"
                  >
                    {selectedServiceData.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 lg:p-8">
              <p className="text-garden-sage leading-relaxed mb-6">
                {selectedServiceData.fullDesc}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-heading font-bold text-garden-forest mb-4">
                  {t.services.modal.featuresTitle}
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {selectedServiceData.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-garden-mint/50 rounded-xl"
                    >
                      <div className="w-2 h-2 bg-garden-lime rounded-full flex-shrink-0" />
                      <span className="text-garden-forest text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedService(null);
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="btn-primary flex items-center gap-2"
                >
                  {t.services.modal.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="btn-secondary"
                >
                  {t.services.modal.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
