import { useEffect, useRef, useState } from 'react';
import { MessageSquare, FileText, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const stepIcons = [MessageSquare, FileText, CheckCircle];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  const stepKeys = ['beratung', 'angebot', 'ausfuehrung'] as const;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-advance steps
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepKeys.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-garden-forest overflow-hidden"
      aria-labelledby="process-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-garden-mint" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-2 bg-garden-lime/20 rounded-full text-sm font-medium text-garden-lime mb-4 font-mono uppercase tracking-wider">
              {t.process.badge}
            </span>
            <h2
              id="process-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-garden-mint mb-6"
            >
              {t.process.title}
            </h2>
            <p className="text-lg text-garden-mist max-w-2xl mx-auto">
              {t.process.subtitle}
            </p>
          </div>

          {/* Process Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative aspect-[4/3] rounded-4xl overflow-hidden shadow-garden-dark">
                {stepKeys.map((key, index) => (
                  <img
                    key={key}
                    src={`/images/process-${key}.jpg`}
                    alt={t.process.steps[key].title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      activeStep === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-garden-forest/40 to-transparent" />
              </div>
              
              {/* Step Indicator */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-garden">
                {stepKeys.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-garden-forest w-8'
                        : 'bg-garden-sage/30 hover:bg-garden-sage/50'
                    }`}
                    aria-label={`Schritt ${index + 1} anzeigen`}
                    aria-current={activeStep === index ? 'true' : undefined}
                  />
                ))}
              </div>
            </div>

            {/* Steps Side */}
            <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              {stepKeys.map((key, index) => {
                const step = t.process.steps[key];
                const Icon = stepIcons[index];
                const isActive = activeStep === index;

                return (
                  <div
                    key={key}
                    className={`relative p-6 lg:p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                      isActive
                        ? 'bg-white shadow-garden scale-[1.02]'
                        : 'bg-garden-forest/50 hover:bg-garden-forest/70'
                    }`}
                    onClick={() => setActiveStep(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveStep(index)}
                  >
                    <div className="flex items-start gap-5">
                      {/* Number */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-bold text-xl transition-colors ${
                        isActive
                          ? 'bg-garden-lime text-garden-forest'
                          : 'bg-garden-mint/10 text-garden-mist'
                      }`}>
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`font-mono text-sm ${isActive ? 'text-garden-sage' : 'text-garden-mist/60'}`}>
                            {t.process.steps.beratung.number === '01' ? `Schritt ${step.number}` : `Step ${step.number}`}
                          </span>
                        </div>
                        <h3 className={`text-xl lg:text-2xl font-heading font-bold mb-2 transition-colors ${
                          isActive ? 'text-garden-forest' : 'text-garden-mint'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm lg:text-base leading-relaxed transition-colors ${
                          isActive ? 'text-garden-sage' : 'text-garden-mist/70'
                        }`}>
                          {step.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className={`flex-shrink-0 self-center transition-all ${
                        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}>
                        <ArrowRight className="w-5 h-5 text-garden-forest" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  {t.process.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className={`mt-20 pt-12 border-t border-garden-mint/10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl lg:text-5xl font-heading font-bold text-garden-lime mb-2">100%</p>
                <p className="text-garden-mist">{t.process.trust.satisfaction}</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-heading font-bold text-garden-lime mb-2">0€</p>
                <p className="text-garden-mist">{t.process.trust.freeConsultation}</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-heading font-bold text-garden-lime mb-2">24h</p>
                <p className="text-garden-mist">{t.process.trust.fastResponse}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
