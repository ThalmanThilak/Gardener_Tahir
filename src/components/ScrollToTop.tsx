import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled past 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 p-4 bg-garden-forest text-garden-mint rounded-full shadow-garden-dark transition-all duration-500 hover:bg-garden-lime hover:text-garden-forest focus-ring ${
        isVisible
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 translate-y-4 invisible'
      }`}
      aria-label="Zum Seitenanfang scrollen"
      aria-hidden={!isVisible}
    >
      <ChevronUp className="w-6 h-6" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
