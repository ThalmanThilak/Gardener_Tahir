import { ArrowLeft, Sprout, CheckCircle, MapPin, Clock, Euro, Phone, Mail, ArrowRight } from 'lucide-react';

const benefits = [
  'Faire Bezahlung mit Gehaltserhöhung nach 6 Monaten',
  'Freundlicher Umgang im Team',
  'Gute Werkzeuge und moderne Ausrüstung',
  'Regelmäßige Arbeitszeiten',
  'Möglichkeit zur Weiterbildung',
  'Langfristige Perspektive',
];

const requirements = [
  'Erfahrung im Garten- und Landschaftsbau (gelernt oder ungelernt)',
  'Führerschein von Vorteil',
  'Zuverlässigkeit und Pünktlichkeit',
  'Freude an der Arbeit im Freien',
  'Teamfähigkeit',
  'Deutschkenntnisse zur Kommunikation',
];

const Jobs = () => {
  return (
    <div className="min-h-screen bg-garden-mint">
      {/* Header */}
      <header className="bg-garden-forest py-6">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1800px] mx-auto flex items-center justify-between">
            <a
              href="/"
              className="inline-flex items-center gap-3 text-garden-mint hover:text-garden-lime transition-colors"
            >
              <div className="p-2 bg-garden-lime rounded-xl">
                <Sprout className="w-5 h-5 text-garden-forest" />
              </div>
              <span className="font-heading font-bold tracking-wider uppercase">
                Gartenpflege Khan
              </span>
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-garden-mint hover:text-garden-lime transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-garden-forest py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-garden-lime/20 rounded-full text-sm font-medium text-garden-lime mb-6 font-mono uppercase tracking-wider">
              Wir stellen ein
            </span>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-garden-mint mb-6">
              Wir suchen dich!
            </h1>
            <p className="text-xl text-garden-mist max-w-2xl mx-auto">
              Mitarbeiter im Garten- und Landschaftsbau
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Job Details */}
              <div className="space-y-10">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-heading font-bold text-garden-forest mb-4">
                    Keine Lust auf Bürostuhl?
                  </h2>
                  <p className="text-garden-sage leading-relaxed text-lg">
                    Eher auf ehrliche Arbeit im Garten und rund um das Haus? Dir sind Sonne 
                    und Regen lieber als muffige Buden? Dann bist du bei uns genau richtig.
                  </p>
                </section>

                {/* About Us */}
                <section>
                  <h2 className="text-2xl font-heading font-bold text-garden-forest mb-4">
                    Über uns
                  </h2>
                  <p className="text-garden-sage leading-relaxed">
                    Seit 2015 sind wir ein verlässlicher Partner bei den Themen Gartenbau 
                    und Landschaftsbau. Neugestaltungen, Pflanzenarbeiten, Verlegung von 
                    Rollrasen oder Kunstrasen, Pflasterverlegung und -reinigung. Unser 
                    Anspruch ist die beste Qualität.
                  </p>
                </section>

                {/* What We Offer */}
                <section>
                  <h2 className="text-2xl font-heading font-bold text-garden-forest mb-6">
                    Das bieten wir
                  </h2>
                  <ul className="space-y-4">
                    {benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm"
                      >
                        <CheckCircle className="w-6 h-6 text-garden-lime flex-shrink-0" />
                        <span className="text-garden-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* What We Expect */}
                <section>
                  <h2 className="text-2xl font-heading font-bold text-garden-forest mb-6">
                    Das erwarten wir
                  </h2>
                  <ul className="space-y-4">
                    {requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm"
                      >
                        <div className="w-6 h-6 rounded-full bg-garden-forest/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-garden-forest text-sm font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-garden-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Right Column - Job Info & Application */}
              <div className="space-y-8">
                {/* Job Info Card */}
                <div className="bg-garden-forest rounded-3xl p-8 text-garden-mint">
                  <h3 className="text-xl font-heading font-bold mb-6">
                    Stelleninformationen
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-garden-lime/20 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-garden-lime" />
                      </div>
                      <div>
                        <p className="text-garden-mist/60 text-sm">Ort</p>
                        <p>Oftersheim & Umgebung</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-garden-lime/20 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-garden-lime" />
                      </div>
                      <div>
                        <p className="text-garden-mist/60 text-sm">Arbeitszeit</p>
                        <p>Vollzeit oder Teilzeit</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-garden-lime/20 rounded-xl flex items-center justify-center">
                        <Euro className="w-6 h-6 text-garden-lime" />
                      </div>
                      <div>
                        <p className="text-garden-mist/60 text-sm">Vergütung</p>
                        <p>Faire Bezahlung + Steigerung</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application CTA */}
                <div className="bg-white rounded-3xl p-8 shadow-garden">
                  <h3 className="text-xl font-heading font-bold text-garden-forest mb-4">
                    Interessiert?
                  </h3>
                  <p className="text-garden-sage mb-6">
                    Dann rufen Sie uns an oder schreiben Sie uns eine E-Mail. 
                    Wir freuen uns auf Sie!
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+4915204460180"
                      className="flex items-center gap-4 p-4 bg-garden-mint rounded-2xl hover:bg-garden-lime/30 transition-colors"
                    >
                      <Phone className="w-6 h-6 text-garden-forest" />
                      <div>
                        <p className="text-garden-sage text-sm">Telefon</p>
                        <p className="text-garden-foreground font-medium">01520 / 44 60 180</p>
                      </div>
                    </a>
                    <a
                      href="mailto:gartenpflegekhan@gmail.com"
                      className="flex items-center gap-4 p-4 bg-garden-mint rounded-2xl hover:bg-garden-lime/30 transition-colors"
                    >
                      <Mail className="w-6 h-6 text-garden-forest" />
                      <div>
                        <p className="text-garden-sage text-sm">E-Mail</p>
                        <p className="text-garden-foreground font-medium">gartenpflegekhan@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Quick Apply */}
                <div className="bg-garden-lime rounded-3xl p-8">
                  <h3 className="text-xl font-heading font-bold text-garden-forest mb-4">
                    Direkt bewerben
                  </h3>
                  <p className="text-garden-forest/80 mb-6">
                    Rufen Sie uns einfach an oder senden Sie uns eine kurze E-Mail 
                    mit Ihren Kontaktdaten. Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                  <a
                    href="tel:+4915204460180"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-garden-forest py-8 border-t border-garden-mint/10">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-[1800px] mx-auto text-center">
            <p className="text-garden-mist/60 text-sm">
              © {new Date().getFullYear()} Gartenpflege Khan. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Jobs;
