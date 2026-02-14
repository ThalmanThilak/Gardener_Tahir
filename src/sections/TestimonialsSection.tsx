import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonialsDE = [
  {
    id: 1,
    name: 'Peter Schneider',
    location: 'Hockenheim',
    rating: 5,
    text: 'Auf Gartenpflege Khan ist absolut Verlass. Der geplante Termin zur Fertigstellung wurde eingehalten, es gab keinerlei Verzögerungen. Die Pflastersteine und der Rollrasen wurden sauber und professionell verlegt. Wir fühlen uns pudelwohl in unserem neuen Garten.',
    service: 'Landschaftsbau & Rollrasen',
  },
  {
    id: 2,
    name: 'Liesel Wagner',
    location: 'Schwetzingen',
    rating: 5,
    text: 'Es ist nicht leicht, einen verlässlichen Fachmann zu finden, der auch kleinere Arbeiten sauber erledigt. Dazu gab es vorab noch eine ganz individuelle Beratung. Ich war sehr zufrieden. Fünf Sterne!',
    service: 'Gartenpflege',
  },
  {
    id: 3,
    name: 'Michael Braun',
    location: 'Oftersheim',
    rating: 5,
    text: 'Herr Tahir und sein Team haben unsere komplette Gartengestaltung übernommen. Von der Planung bis zur Ausführung alles perfekt. Die Hecken sind perfekt geschnitten und der Rasen sieht traumhaft aus. Sehr zu empfehlen!',
    service: 'Gartengestaltung',
  },
  {
    id: 4,
    name: 'Sabine Keller',
    location: 'Heidelberg',
    rating: 5,
    text: 'Schnelle Terminvergabe, faire Preise und eine hervorragende Arbeit. Meine Pflastersteine sehen nach der Reinigung wieder wie neu aus. Vielen Dank für den tollen Service!',
    service: 'Pflasterreinigung',
  },
];

const testimonialsEN = [
  {
    id: 1,
    name: 'Peter Schneider',
    location: 'Hockenheim',
    rating: 5,
    text: 'Gartenpflege Khan is absolutely reliable. The planned completion date was met, there were no delays whatsoever. The paving stones and turf were laid cleanly and professionally. We feel completely comfortable in our new garden.',
    service: 'Landscaping & Turf',
  },
  {
    id: 2,
    name: 'Liesel Wagner',
    location: 'Schwetzingen',
    rating: 5,
    text: 'It is not easy to find a reliable professional who also does smaller jobs cleanly. In addition, there was a completely individual consultation beforehand. I was very satisfied. Five stars!',
    service: 'Garden Care',
  },
  {
    id: 3,
    name: 'Michael Braun',
    location: 'Oftersheim',
    rating: 5,
    text: 'Mr. Tahir and his team took over our complete garden design. Everything perfect from planning to execution. The hedges are perfectly trimmed and the lawn looks fantastic. Highly recommended!',
    service: 'Garden Design',
  },
  {
    id: 4,
    name: 'Sabine Keller',
    location: 'Heidelberg',
    rating: 5,
    text: 'Quick appointment scheduling, fair prices, and excellent work. My paving stones look like new again after cleaning. Many thanks for the great service!',
    service: 'Paver Cleaning',
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { language, t } = useLanguage();

  const testimonials = language === 'de' ? testimonialsDE : testimonialsEN;

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

  // Auto-advance testimonials
  useEffect(() => {
    if (!isVisible || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible, isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-garden-mint overflow-hidden"
      aria-labelledby="testimonials-title"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-64 bg-garden-lime/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-garden-mist/30 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-2 bg-garden-lime/40 rounded-full text-sm font-medium text-garden-forest mb-4 font-mono uppercase tracking-wider">
              {t.testimonials.badge}
            </span>
            <h2
              id="testimonials-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-garden-forest mb-6"
            >
              {t.testimonials.title}
            </h2>
            <p className="text-lg text-garden-sage max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Main Testimonial Card */}
            <div className="relative bg-white rounded-4xl shadow-garden p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 lg:left-12">
                <div className="p-4 bg-garden-lime rounded-2xl shadow-lg">
                  <Quote className="w-6 h-6 text-garden-forest" aria-hidden="true" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="pt-4">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-500 ${
                      activeIndex === index
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                    }`}
                  >
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-garden-lime text-garden-lime"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Text */}
                    <blockquote className="text-xl lg:text-2xl text-garden-forest leading-relaxed mb-8">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="font-heading font-bold text-garden-forest">
                          {testimonial.name}
                        </p>
                        <p className="text-garden-sage text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-garden-mint rounded-full text-sm text-garden-forest font-medium">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="p-3 bg-white rounded-full shadow-garden hover:bg-garden-lime transition-colors focus-ring"
                aria-label="Vorheriges Testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-garden-forest" aria-hidden="true" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-garden-forest w-8'
                        : 'bg-garden-sage/30 hover:bg-garden-sage/50'
                    }`}
                    aria-label={`Testimonial ${index + 1} anzeigen`}
                    aria-current={activeIndex === index ? 'true' : undefined}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="p-3 bg-white rounded-full shadow-garden hover:bg-garden-lime transition-colors focus-ring"
                aria-label="Nächstes Testimonial"
              >
                <ChevronRight className="w-5 h-5 text-garden-forest" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className={`mt-16 flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-garden-lime text-garden-lime"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-garden-forest font-medium text-sm">
                3.6 {t.testimonials.rating}
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-sm">
              <span className="text-garden-forest font-bold">47+</span>
              <span className="text-garden-sage text-sm">{t.testimonials.reviews}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
