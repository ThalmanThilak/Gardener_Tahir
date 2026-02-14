import { ArrowLeft, Sprout } from 'lucide-react';

const Impressum = () => {
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

      {/* Content */}
      <main className="py-16 lg:py-24">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-garden-forest mb-12">
              Impressum
            </h1>

            <div className="space-y-10">
              {/* Angaben gemäß § 5 TMG */}
              <section>
                <h2 className="text-xl font-heading font-bold text-garden-forest mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <p className="text-garden-sage leading-relaxed">
                    <strong className="text-garden-foreground block mb-2">Zahid Tahir</strong>
                    Gartenpflege Khan<br />
                    Fohlenweide 2<br />
                    68723 Oftersheim
                  </p>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-xl font-heading font-bold text-garden-forest mb-4">
                  Kontakt
                </h2>
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <p className="text-garden-sage leading-relaxed">
                    <strong className="text-garden-foreground">Telefon:</strong>{' '}
                    <a href="tel:+4915204460180" className="hover:text-garden-lime transition-colors">
                      01520 / 44 60 180
                    </a>
                    <br />
                    <strong className="text-garden-foreground">E-Mail:</strong>{' '}
                    <a href="mailto:gartenpflegekhan@gmail.com" className="hover:text-garden-lime transition-colors">
                      gartenpflegekhan@gmail.com
                    </a>
                  </p>
                </div>
              </section>

              {/* EU-Streitschlichtung */}
              <section>
                <h2 className="text-xl font-heading font-bold text-garden-forest mb-4">
                  EU-Streitschlichtung
                </h2>
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <p className="text-garden-sage leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-garden-foreground hover:text-garden-lime transition-colors underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </div>
              </section>

              {/* Verbraucherstreitbeilegung */}
              <section>
                <h2 className="text-xl font-heading font-bold text-garden-forest mb-4">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <p className="text-garden-sage leading-relaxed">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </section>

              {/* Haftung für Inhalte */}
              <section>
                <h2 className="text-xl font-heading font-bold text-garden-forest mb-4">
                  Haftung für Inhalte
                </h2>
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <p className="text-garden-sage leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
              </section>

              {/* Haftung für Links */}
              <section>
                <h2 className="text-xl font-heading font-bold text-garden-forest mb-4">
                  Haftung für Links
                </h2>
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <p className="text-garden-sage leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>
              </section>

              {/* Urheberrecht */}
              <section>
                <h2 className="text-xl font-heading font-bold text-garden-forest mb-4">
                  Urheberrecht
                </h2>
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <p className="text-garden-sage leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </section>

              {/* Quelle */}
              <section>
                <p className="text-garden-sage text-sm">
                  Quelle:{' '}
                  <a
                    href="https://www.e-recht24.de/impressum-generator.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-garden-foreground hover:text-garden-lime transition-colors underline"
                  >
                    https://www.e-recht24.de/impressum-generator.html
                  </a>
                </p>
              </section>
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

export default Impressum;
