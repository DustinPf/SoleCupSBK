export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-4 w-full">
        <p className="font-heading text-sm font-bold text-red-600 uppercase tracking-widest mb-1">Rechtliche Informationen</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide">
          Datenschutz
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Geltungsbereich
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Diese Datenschutzerklärung informiert die Nutzer dieser Website gemäß der Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz (BDSG) sowie dem Digitale-Dienste-Gesetz (DDG) über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten durch den Websitebetreiber: Förderverein der Leichtathleten von UNION 1861 Schönebeck e.V., Lindenstraße 4, 39218 Schönebeck.
          </p>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-3">
            Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Vorschriften. Bedenken Sie, dass die Datenübertragung im Internet grundsätzlich mit Sicherheitslücken behaftet sein kann. Ein vollumfänglicher Schutz vor dem Zugriff durch Dritte ist nicht realisierbar.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Verantwortlicher
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
            Verantwortlicher im Sinne der DSGVO ist:
          </p>
          <div className="font-body text-gray-700 text-base leading-relaxed space-y-1 pl-4 border-l-4 border-jungle">
            <p className="font-semibold">Förderverein der Leichtathleten von UNION 1861 Schönebeck e.V.</p>
            <p>Hans Weber (Vorsitzender)</p>
            <p>Lindenstraße 4, 39218 Schönebeck</p>
            <p>
              Telefon:{' '}
              <a href="tel:+491717258603" className="text-jungle hover:underline font-medium">
                0171 72 58 603
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:hans.weber@union1861.de" className="text-jungle hover:underline font-medium">
                hans.weber@union1861.de
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Rechtsgrundlagen der Verarbeitung
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Zur Erfüllung einer rechtlichen Verpflichtung dient Art. 6 Abs. 1 lit. c DSGVO. Ist die Verarbeitung zur Wahrung berechtigter Interessen erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person das erstgenannte Interesse nicht, dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Zugriffsdaten / Server-Logfiles
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
            Der Hosting-Anbieter erhebt Daten über Zugriffe auf die Seite und speichert diese als „Server-Logfiles" ab. Folgende Daten werden so protokolliert:
          </p>
          <ul className="font-body text-gray-700 text-base leading-relaxed space-y-2 pl-4">
            {[
              'Besuchte Website',
              'Uhrzeit zum Zeitpunkt des Zugriffes',
              'Menge der gesendeten Daten in Byte',
              'Quelle/Verweis, von welchem Sie auf die Seite gelangten',
              'Verwendeter Browser',
              'Verwendetes Betriebssystem',
              'Verwendete IP-Adresse',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-jungle shrink-0 mt-0.5">&#10148;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-4">
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung und Sicherheit der Website). Die erhobenen Daten dienen statistischen Auswertungen sowie der Verbesserung und Absicherung der Website.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Umgang mit Kontaktdaten
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Nehmen Sie mit dem Websitebetreiber über die angebotenen Kontaktmöglichkeiten (E-Mail, Telefon, Formular) Verbindung auf, werden Ihre Angaben zur Bearbeitung und Beantwortung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. Art. 6 Abs. 1 lit. f DSGVO. Ohne Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Externe Dienste und Drittanbieter
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-lg text-gray-900 uppercase tracking-wide mb-3">
                Schriftarten (lokal gehostet)
              </h3>
              <p className="font-body text-gray-700 text-base leading-relaxed">
                Diese Website verwendet die Schriftarten „Inter" und „Oswald". Diese werden ausschließlich lokal vom Server dieser Website ausgeliefert. Es findet keine Verbindung zu Google-Servern (z.&nbsp;B. Google Fonts) oder anderen Drittanbietern statt. Ihre IP-Adresse wird in diesem Zusammenhang nicht an Dritte übertragen.
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-gray-900 uppercase tracking-wide mb-3">
                Supabase (Inhalts-Datenbank für News-Artikel)
              </h3>
              <p className="font-body text-gray-700 text-base leading-relaxed">
                Zur Anzeige redaktioneller Inhalte (Nachrichten-Artikel) ruft diese Website öffentlich zugängliche Inhalte über Supabase ab, einen Dienst der Supabase Inc., 970 Toa Payoh North, #07-04, Singapore 318992. Beim Laden der entsprechenden Seiten wird Ihre IP-Adresse technisch an Supabase übertragen, um die Inhalte ausliefern zu können. Über das Formular werden keine personenbezogenen Daten an Supabase übermittelt.
              </p>
              <p className="font-body text-gray-700 text-base leading-relaxed mt-3">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen Bereitstellung der Inhalte). Hinweis zur Drittlandübermittlung: Eine Übermittlung in Drittländer (u.&nbsp;a. Singapur und USA) ist nicht ausgeschlossen. Rechtsgrundlage für eine solche Drittlandübermittlung sind die Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen:{' '}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jungle hover:underline font-medium"
                >
                  supabase.com/privacy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-gray-900 uppercase tracking-wide mb-3">
                StackBlitz / bolt.new (Entwicklungsplattform)
              </h3>
              <p className="font-body text-gray-700 text-base leading-relaxed">
                Diese Website wurde mit bolt.new, einem Dienst der StackBlitz, Inc., 548 Market St, PMB 36456, San Francisco, CA 94104, USA, entwickelt. Bolt.new wird ausschließlich als Entwicklungswerkzeug eingesetzt. Im Produktivbetrieb werden keine Inhalte, Skripte oder Ressourcen von bolt.new oder StackBlitz von der veröffentlichten Website nachgeladen; es findet daher im regulären Besuch der Website keine Datenübertragung an StackBlitz statt.
              </p>
              <p className="font-body text-gray-700 text-base leading-relaxed mt-3">
                Nach den Standardbedingungen von StackBlitz/bolt.new können während der Entwicklung technische Zugriffsdaten (u.&nbsp;a. IP-Adresse, Browsertyp, Nutzungszeitpunkte) des Betreibers verarbeitet werden; eine Datenübermittlung in die USA ist dabei nicht ausgeschlossen. Rechtsgrundlage für eine solche Drittlandübermittlung sind die Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO. Weitere Informationen:{' '}
                <a
                  href="https://stackblitz.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-jungle hover:underline font-medium"
                >
                  stackblitz.com/privacy-policy
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg text-gray-900 uppercase tracking-wide mb-3">
                IONOS (Hosting)
              </h3>
              <p className="font-body text-gray-700 text-base leading-relaxed">
                Das Hosting dieser Website erfolgt bei der IONOS SE, Elgendorfer Straße 57, 56410 Montabaur, Deutschland. Beim Besuch der Website werden durch IONOS technische Zugriffsdaten (u.&nbsp;a. IP-Adresse, Datum und Uhrzeit, Browsertyp, Betriebssystem) verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mit IONOS besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO. Die Datenverarbeitung erfolgt innerhalb der Europäischen Union.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Auftragsverarbeitung (Art. 28 DSGVO)
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
            Soweit personenbezogene Daten durch Dienstleister in unserem Auftrag verarbeitet werden, haben wir mit diesen Anbietern Verträge zur Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO geschlossen. Die Auftragsverarbeiter sind vertraglich verpflichtet, die Vorgaben der DSGVO einzuhalten und ein angemessenes Schutzniveau zu gewährleisten. Zu den von uns eingesetzten Auftragsverarbeitern zählen insbesondere:
          </p>
          <ul className="font-body text-gray-700 text-base leading-relaxed space-y-2 pl-4">
            {[
              'IONOS SE (Hosting der Website, Deutschland) – AVV vorhanden',
              'Supabase Inc. (Bereitstellung öffentlicher Inhalte, Singapur/USA) – Standardvertragsklauseln',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-jungle shrink-0 mt-0.5">&#10148;</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Datenübermittlung in Drittländer
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Durch die Nutzung von Supabase (Bereitstellung öffentlicher Inhalte) kann es zu einer Übermittlung personenbezogener Daten – insbesondere Ihrer IP-Adresse – in Drittländer außerhalb des Europäischen Wirtschaftsraums (EWR), namentlich nach Singapur und in die USA, kommen. Diese Länder verfügen nicht grundsätzlich über ein mit der EU vergleichbares Datenschutzniveau.
          </p>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-3">
            Rechtsgrundlage für die Übermittlung sind, soweit kein Angemessenheitsbeschluss der EU-Kommission besteht, die Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO sowie ergänzende technische und organisatorische Schutzmaßnahmen.
          </p>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-3">
            Trotz dieser Maßnahmen kann insbesondere in den USA nicht vollständig ausgeschlossen werden, dass staatliche Stellen auf die übermittelten Daten zugreifen. Eine Einwilligung in die Drittlandübermittlung holen wir – soweit erforderlich – jeweils gesondert und ausdrücklich vor der konkreten Verarbeitung ein (z.&nbsp;B. über eine aktive Checkbox im betreffenden Formular oder über ein Consent-Banner). Ohne eine solche ausdrückliche Einwilligung stützen wir die Übermittlung ausschließlich auf die oben genannten Rechtsgrundlagen (Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO).
          </p>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-3">
            Sie können eine einmal erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt vom Widerruf unberührt (Art. 7 Abs. 3 DSGVO).
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Cookies und Tracking
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Diese Website setzt keine Cookies zu Tracking-, Analyse- oder Marketingzwecken ein. Es werden keine Analysedienste (z.&nbsp;B. Google Analytics, Matomo) und keine eingebetteten Inhalte Dritter (z.&nbsp;B. YouTube, Google Maps, Social-Media-Plug-ins) verwendet, die eigenständig Cookies setzen würden.
          </p>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-3">
            Sollten künftig Cookies oder Drittinhalte eingebunden werden, die nicht technisch notwendig sind, erfolgt dies ausschließlich auf Grundlage Ihrer vorherigen Einwilligung gemäß § 25 Abs. 1 TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz) in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO über ein entsprechendes Consent-Banner.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Automatisierte Entscheidungsfindung
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Eine automatisierte Entscheidungsfindung oder ein Profiling gemäß Art. 22 DSGVO findet nicht statt.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Rechte der betroffenen Person
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
            Ihnen stehen nach der DSGVO folgende Rechte zu:
          </p>
          <ul className="font-body text-gray-700 text-base leading-relaxed space-y-2 pl-4">
            {[
              'Recht auf Auskunft (Art. 15 DSGVO)',
              'Recht auf Berichtigung (Art. 16 DSGVO)',
              'Recht auf Löschung (Art. 17 DSGVO)',
              'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
              'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
              'Recht auf Widerspruch (Art. 21 DSGVO)',
              'Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)',
              'Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-jungle shrink-0 mt-0.5">&#10148;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-4">
            Zuständige Aufsichtsbehörde ist der Landesbeauftragte für den Datenschutz Sachsen-Anhalt, Leiterstraße 9, 39104 Magdeburg.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Ansprechpartner für Datenschutz
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten sowie zum Widerruf erteilter Einwilligungen wenden Sie sich bitte an:
          </p>
          <div className="font-body text-gray-700 text-base leading-relaxed space-y-1 pl-4 border-l-4 border-jungle">
            <p className="font-semibold">Hans Weber</p>
            <p>Lindenstraße 4, 39218 Schönebeck</p>
            <p>
              Telefon:{' '}
              <a href="tel:+491717258603" className="text-jungle hover:underline font-medium">
                0171 72 58 603
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:hans.weber@union1861.de" className="text-jungle hover:underline font-medium">
                hans.weber@union1861.de
              </a>
            </p>
          </div>
        </section>

        <section>
          <p className="font-body text-gray-500 text-sm leading-relaxed">
            Stand dieser Datenschutzerklärung: Mai 2026. Der Websitebetreiber behält sich vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslagen oder Änderungen des Dienstes anzupassen.
          </p>
        </section>
      </div>
    </main>
  );
}
