import { ArrowLeft, Sprout } from 'lucide-react';

const Datenschutz = () => {
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
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-garden-forest mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-garden-sage mb-12">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. 
              Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen.
            </p>

            <div className="space-y-10">
              {/* 1. Datenschutz auf einen Blick */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-garden-forest mb-6">
                  1. Datenschutz auf einen Blick
                </h2>
                
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden mb-6">
                  <h3 className="text-lg font-heading font-bold text-garden-forest mb-4">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-garden-sage leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <h3 className="text-lg font-heading font-bold text-garden-forest mb-4">
                    Datenerfassung auf dieser Website
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-garden-foreground mb-2">
                        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                      </p>
                      <p className="text-garden-sage leading-relaxed">
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-garden-foreground mb-2">
                        Wie erfassen wir Ihre Daten?
                      </p>
                      <p className="text-garden-sage leading-relaxed">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                      </p>
                      <p className="text-garden-sage leading-relaxed mt-2">
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-garden-foreground mb-2">
                        Wofür nutzen wir Ihre Daten?
                      </p>
                      <p className="text-garden-sage leading-relaxed">
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-garden-foreground mb-2">
                        Welche Rechte haben Sie bezüglich Ihrer Daten?
                      </p>
                      <p className="text-garden-sage leading-relaxed">
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Hosting */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-garden-forest mb-6">
                  2. Hosting
                </h2>
                
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <h3 className="text-lg font-heading font-bold text-garden-forest mb-4">
                    Externes Hosting
                  </h3>
                  <p className="text-garden-sage leading-relaxed">
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Wir setzen folgenden Hoster ein:
                  </p>
                  <p className="text-garden-foreground font-medium mt-2">
                    Netlify, Inc.<br />
                    2325 3rd Street, Suite 296<br />
                    San Francisco, CA 94107<br />
                    USA
                  </p>
                </div>
              </section>

              {/* 3. Allgemeine Hinweise */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-garden-forest mb-6">
                  3. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden mb-6">
                  <h3 className="text-lg font-heading font-bold text-garden-forest mb-4">
                    Datenschutz
                  </h3>
                  <p className="text-garden-sage leading-relaxed">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <h3 className="text-lg font-heading font-bold text-garden-forest mb-4">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p className="text-garden-sage leading-relaxed">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="text-garden-foreground font-medium mt-4">
                    Zahid Tahir<br />
                    Fohlenweide 2<br />
                    68723 Oftersheim
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
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
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>
              </section>

              {/* 4. Datenerfassung */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-garden-forest mb-6">
                  4. Datenerfassung auf dieser Website
                </h2>
                
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden mb-6">
                  <h3 className="text-lg font-heading font-bold text-garden-forest mb-4">
                    Cookies
                  </h3>
                  <p className="text-garden-sage leading-relaxed">
                    Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Teilweise können auch Cookies von Drittunternehmen auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite betreten (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die Nutzung bestimmter Dienstleistungen des Drittunternehmens.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden. Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <h3 className="text-lg font-heading font-bold text-garden-forest mb-4">
                    Kontaktformular
                  </h3>
                  <p className="text-garden-sage leading-relaxed">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                  </p>
                  <p className="text-garden-sage leading-relaxed mt-4">
                    Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>
              </section>

              {/* 5. Ihre Rechte */}
              <section>
                <h2 className="text-2xl font-heading font-bold text-garden-forest mb-6">
                  5. Ihre Rechte
                </h2>
                
                <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-garden">
                  <p className="text-garden-sage leading-relaxed mb-4">
                    Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                  </p>
                  <ul className="space-y-2 text-garden-sage">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-garden-lime rounded-full mt-2 flex-shrink-0" />
                      <span>Recht auf Auskunft (Art. 15 DSGVO)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-garden-lime rounded-full mt-2 flex-shrink-0" />
                      <span>Recht auf Berichtigung (Art. 16 DSGVO)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-garden-lime rounded-full mt-2 flex-shrink-0" />
                      <span>Recht auf Löschung (Art. 17 DSGVO)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-garden-lime rounded-full mt-2 flex-shrink-0" />
                      <span>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-garden-lime rounded-full mt-2 flex-shrink-0" />
                      <span>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-garden-lime rounded-full mt-2 flex-shrink-0" />
                      <span>Widerspruchsrecht (Art. 21 DSGVO)</span>
                    </li>
                  </ul>
                  <p className="text-garden-sage leading-relaxed mt-6">
                    Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
                  </p>
                </div>
              </section>

              {/* Quelle */}
              <section>
                <p className="text-garden-sage text-sm">
                  Quelle:{' '}
                  <a
                    href="https://www.e-recht24.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-garden-foreground hover:text-garden-lime transition-colors underline"
                  >
                    https://www.e-recht24.de
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

export default Datenschutz;
