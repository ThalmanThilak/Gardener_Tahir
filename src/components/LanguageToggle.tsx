import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-garden-forest/10 rounded-full p-1">
      <button
        onClick={() => setLanguage('de')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'de'
            ? 'bg-garden-forest text-white shadow-md'
            : 'text-garden-forest hover:bg-garden-forest/10'
        }`}
        aria-label="Deutsch"
        aria-pressed={language === 'de'}
      >
        {t.language.de}
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-garden-forest text-white shadow-md'
            : 'text-garden-forest hover:bg-garden-forest/10'
        }`}
        aria-label="English"
        aria-pressed={language === 'en'}
      >
        {t.language.en}
      </button>
    </div>
  );
};

export const LanguageToggleWithIcon = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 bg-garden-forest/10 hover:bg-garden-forest/20 rounded-full transition-all duration-300"
      aria-label={`Switch to ${language === 'de' ? 'English' : 'German'}`}
    >
      <Globe className="w-4 h-4 text-garden-forest" />
      <span className="text-sm font-medium text-garden-foreground">
        {language === 'de' ? t.language.de : t.language.en}
      </span>
    </button>
  );
};

export default LanguageToggle;
