import { useState } from 'react';
import { X, Cookie, Shield, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CookieConsentProps {
  onConsent: (accepted: boolean) => void;
}

const CookieConsent = ({ onConsent }: CookieConsentProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const { t } = useLanguage();

  const handleAccept = () => {
    onConsent(true);
  };

  const handleDecline = () => {
    onConsent(false);
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-garden-forest/10 overflow-hidden">
        {!showDetails ? (
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 bg-garden-lime/30 rounded-2xl">
                <Cookie className="w-6 h-6 text-garden-forest" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  id="cookie-title"
                  className="text-lg font-heading font-bold text-garden-forest mb-2"
                >
                  {t.cookie.title}
                </h3>
                <p className="text-garden-sage text-sm leading-relaxed mb-4">
                  {t.cookie.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="btn-primary text-sm py-2.5 px-5"
                  >
                    {t.cookie.acceptAll}
                  </button>
                  <button
                    onClick={handleDecline}
                    className="btn-secondary text-sm py-2.5 px-5"
                  >
                    {t.cookie.necessaryOnly}
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-garden-sage hover:text-garden-forest text-sm font-medium underline underline-offset-4 transition-colors"
                  >
                    {t.cookie.learnMore}
                  </button>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="flex-shrink-0 p-2 text-garden-sage hover:text-garden-forest transition-colors"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-heading font-bold text-garden-forest">
                {t.cookie.settings.title}
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="p-2 text-garden-sage hover:text-garden-forest transition-colors"
                aria-label="Zurück"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Essential Cookies */}
              <div className="flex items-start gap-4 p-4 bg-garden-mint/50 rounded-2xl">
                <div className="flex-shrink-0 p-2 bg-garden-lime/50 rounded-xl">
                  <Shield className="w-5 h-5 text-garden-forest" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-garden-foreground">{t.cookie.settings.essential}</h4>
                    <span className="text-xs font-medium text-garden-sage bg-garden-forest/10 px-2 py-1 rounded-full">
                      Immer aktiv
                    </span>
                  </div>
                  <p className="text-sm text-garden-sage">
                    {t.cookie.settings.essentialDesc}
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-4 p-4 bg-garden-mint/50 rounded-2xl">
                <div className="flex-shrink-0 p-2 bg-garden-forest/10 rounded-xl">
                  <Info className="w-5 h-5 text-garden-forest" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-garden-foreground">{t.cookie.settings.analytics}</h4>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked
                        disabled
                      />
                      <div className="w-11 h-6 bg-garden-forest/20 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-garden-lime rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-garden-forest"></div>
                    </label>
                  </div>
                  <p className="text-sm text-garden-sage">
                    {t.cookie.settings.analyticsDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleAccept}
                className="btn-primary text-sm py-2.5 px-5"
              >
                {t.cookie.settings.save}
              </button>
              <button
                onClick={() => setShowDetails(false)}
                className="text-garden-sage hover:text-garden-forest text-sm font-medium transition-colors"
              >
                {t.cookie.settings.back}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
