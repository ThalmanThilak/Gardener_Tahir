import { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const heroImages = [
  '/images/Hero1.jpeg',
  '/images/Hero2.jpeg',
  '/images/Hero3.jpeg',
  '/images/Hero4.jpeg',
  '/images/Hero5.jpeg',
  '/images/Hero6.jpeg',
  '/images/Hero7.jpeg',
  '/images/Hero8.jpeg',
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Entrance animation on load
    const content = contentRef.current;

    if (content) {
      // Content animation
      const contentElements = content.querySelectorAll('.animate-item');
      contentElements.forEach((el) => {
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(30px)';
      });

      // Trigger animations
      requestAnimationFrame(() => {
        // Content items staggered
        contentElements.forEach((el, index) => {
          setTimeout(() => {
            (el as HTMLElement).style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
            (el as HTMLElement).style.opacity = '1';
            (el as HTMLElement).style.transform = 'translateY(0)';
          }, 300 + index * 100);
        });
      });
    }
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-garden-mint overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-20 right-20 w-96 h-96 bg-garden-lime/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-garden-mist/40 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full min-h-screen flex items-center">
        <div className="w-full px-6 lg:px-12 py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-[1800px] mx-auto">
            {/* Image Column - Carousel */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] lg:aspect-[4/5] max-h-[70vh] rounded-4xl overflow-hidden shadow-garden">
                {/* Carousel Images */}
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${t.hero.title1} ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                  />
                ))}
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-garden-forest/20 to-transparent" aria-hidden="true" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPreviousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-garden-forest" />
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-garden-forest" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white w-6' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div
              ref={contentRef}
              className="order-1 lg:order-2 lg:pl-8"
            >
              {/* Tagline */}
              <div className="animate-item mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-garden-lime/40 rounded-full text-sm font-medium text-garden-forest">
                  <span className="w-2 h-2 bg-garden-forest rounded-full animate-pulse" />
                  {t.hero.badge}
                </span>
              </div>

              {/* Main Headline */}
              <h1
                id="hero-title"
                className="animate-item mb-6"
              >
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-garden-forest leading-[1.1] tracking-tight">
                  {t.hero.title1}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="animate-item text-lg lg:text-xl text-garden-sage max-w-xl leading-relaxed mb-8">
                {t.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="animate-item flex flex-wrap gap-4 mb-10">
                <button
                  onClick={scrollToContact}
                  className="btn-primary flex items-center gap-2 group"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
                <button
                  onClick={scrollToServices}
                  className="btn-secondary"
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="animate-item flex flex-wrap items-center gap-6 text-sm text-garden-sage">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-garden-lime/40 rounded-full flex items-center justify-center">
                    <span className="font-bold text-garden-forest">10+</span>
                  </div>
                  <span>{t.hero.stats.years}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-garden-lime/40 rounded-full flex items-center justify-center">
                    <span className="font-bold text-garden-forest">800+</span>
                  </div>
                  <span>{t.hero.stats.customers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-garden-lime/40 rounded-full flex items-center justify-center">
                    <span className="font-bold text-garden-forest">3.6</span>
                  </div>
                  <span>{t.hero.stats.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-garden-sage animate-bounce">
        <span className="text-xs font-mono uppercase tracking-widest">{t.hero.scrollIndicator}</span>
        <div className="w-6 h-10 border-2 border-garden-sage/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-garden-sage rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
