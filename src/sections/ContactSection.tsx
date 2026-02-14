import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Shield, Clock, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '01520 / 44 60 180',
    href: 'tel:+4915204460180',
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'gartenpflegekhan@gmail.com',
    href: 'mailto:gartenpflegekhan@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Fohlenweide 2, 68723 Oftersheim',
    href: 'https://maps.google.com/?q=Fohlenweide+2,68723+Oftersheim',
  },
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const formData = new FormData(e.currentTarget);
      const body = new URLSearchParams({
        'form-name': 'contact',
        'bot-field': '',
        name: (formData.get('name') as string) || '',
        email: (formData.get('email') as string) || '',
        phone: (formData.get('phone') as string) || '',
        address: (formData.get('address') as string) || '',
        message: (formData.get('message') as string) || '',
        referral: (formData.get('referral') as string) || '',
      }).toString();

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
        redirect: 'manual',
      });

      if (response.ok || response.type === 'opaqueredirect') {
        setFormStatus('success');
        formRef.current?.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const handleNewRequest = () => {
    setFormStatus('idle');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-garden-forest overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-garden-lime rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-garden-mint rounded-full blur-3xl" />
      </div>

      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-2 bg-garden-lime/20 rounded-full text-sm font-medium text-garden-lime mb-4 font-mono uppercase tracking-wider">
              {t.contact.badge}
            </span>
            <h2
              id="contact-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-garden-mint mb-6"
            >
              {t.contact.title}
            </h2>
            <p className="text-lg text-garden-mist max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-5 p-5 bg-garden-forest/50 backdrop-blur-sm rounded-3xl border border-garden-mint/10 hover:border-garden-lime/30 transition-all duration-300 group"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-garden-lime/20 rounded-2xl flex items-center justify-center group-hover:bg-garden-lime/30 transition-colors">
                        <Icon className="w-6 h-6 text-garden-lime" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-garden-mist/60 text-sm mb-1">{item.label}</p>
                        <p className="text-garden-mint font-medium group-hover:text-garden-lime transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="rounded-3xl overflow-hidden shadow-garden-dark border border-garden-mint/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2296.8779017533197!2d8.585829111475109!3d49.37218126429391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c76589d66aef%3A0xc484d5e98cb8e7dc!2sGartenpflege%20Tahir!5e1!3m2!1sen!2sde!4v1770893028753!5m2!1sen!2sde"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Gartenpflege Khan"
                  className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Shield, text: t.contact.trust.fixedPrice },
                  { icon: Clock, text: t.contact.trust.onTime },
                  { icon: CheckCircle, text: t.contact.trust.clean },
                ].map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.text}
                      className="flex items-center gap-2 px-4 py-2 bg-garden-lime/10 rounded-full"
                    >
                      <Icon className="w-4 h-4 text-garden-lime" aria-hidden="true" />
                      <span className="text-garden-mint text-sm">{badge.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="bg-white rounded-4xl p-8 lg:p-10 shadow-garden">
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
                    <div className="w-20 h-20 bg-garden-lime/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-garden-lime" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-garden-forest">
                      {t.contact.form.success.title}
                    </h3>
                    <p className="text-garden-sage max-w-sm">
                      {t.contact.form.success.message}
                    </p>
                    <button
                      type="button"
                      onClick={handleNewRequest}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      {t.contact.form.success.newRequest}
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                  >
                    <h3 className="text-2xl font-heading font-bold text-garden-forest mb-6">
                      {t.contact.form.title}
                    </h3>

                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-garden-forest mb-2">
                            {t.contact.form.name} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-garden-mint/30 border-2 border-transparent rounded-2xl text-garden-foreground placeholder:text-garden-sage/50 focus:border-garden-lime focus:bg-white focus:outline-none transition-all"
                            placeholder={t.contact.form.name}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-garden-forest mb-2">
                            {t.contact.form.email} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-garden-mint/30 border-2 border-transparent rounded-2xl text-garden-foreground placeholder:text-garden-sage/50 focus:border-garden-lime focus:bg-white focus:outline-none transition-all"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-garden-forest mb-2">
                            {t.contact.form.phone} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 bg-garden-mint/30 border-2 border-transparent rounded-2xl text-garden-foreground placeholder:text-garden-sage/50 focus:border-garden-lime focus:bg-white focus:outline-none transition-all"
                            placeholder="01520 / 44 60 180"
                          />
                        </div>
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-garden-forest mb-2">
                            {t.contact.form.address} <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            required
                            className="w-full px-4 py-3 bg-garden-mint/30 border-2 border-transparent rounded-2xl text-garden-foreground placeholder:text-garden-sage/50 focus:border-garden-lime focus:bg-white focus:outline-none transition-all"
                            placeholder={t.contact.form.address}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-garden-forest mb-2">
                          {t.contact.form.message}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-3 bg-garden-mint/30 border-2 border-transparent rounded-2xl text-garden-foreground placeholder:text-garden-sage/50 focus:border-garden-lime focus:bg-white focus:outline-none transition-all resize-none"
                          placeholder={t.contact.form.message}
                        />
                      </div>

                      <div>
                        <label htmlFor="referral" className="block text-sm font-medium text-garden-forest mb-2">
                          {t.contact.form.referral}
                        </label>
                        <select
                          id="referral"
                          name="referral"
                          className="w-full px-4 py-3 bg-garden-mint/30 border-2 border-transparent rounded-2xl text-garden-foreground focus:border-garden-lime focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="">{t.contact.form.referralOptions.select}</option>
                          <option value="google">{t.contact.form.referralOptions.google}</option>
                          <option value="empfehlung">{t.contact.form.referralOptions.recommendation}</option>
                          <option value="social">{t.contact.form.referralOptions.social}</option>
                          <option value="vorbeifahrt">{t.contact.form.referralOptions.passing}</option>
                          <option value="andere">{t.contact.form.referralOptions.other}</option>
                        </select>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="privacy"
                          name="privacy"
                          required
                          className="w-5 h-5 mt-0.5 rounded border-garden-sage/30 text-garden-lime focus:ring-garden-lime cursor-pointer"
                        />
                        <label htmlFor="privacy" className="text-sm text-garden-sage">
                          {t.contact.form.privacy}{' '}
                          <a
                            href="/datenschutz"
                            className="text-garden-foreground underline hover:text-garden-lime transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t.contact.form.privacyLink}
                          </a>{' '}
                          <span className="text-red-500">*</span>
                        </label>
                      </div>

                      {formStatus === 'error' && (
                        <p className="text-red-600 text-sm text-center bg-red-50 rounded-2xl p-3">
                          {t.contact.form.error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                            {t.contact.form.submitting}
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" aria-hidden="true" />
                            {t.contact.form.submit}
                          </>
                        )}
                      </button>

                      <p className="text-xs text-garden-sage text-center">
                        * {t.contact.form.required}
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
