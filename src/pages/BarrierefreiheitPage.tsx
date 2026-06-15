export default function BarrierefreiheitPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-4 w-full">
        <p className="font-heading text-sm font-bold text-red-600 uppercase tracking-widest mb-1">
          Rechtliche Informationen
        </p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide">
          Erklärung zur Barrierefreiheit
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <section>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Der Förderverein der Leichtathleten von UNION 1861 Schönebeck e.V. ist bemüht, seine Website{' '}
            <a
              href="https://www.schoenebecker-solecup.de"
              className="text-jungle hover:underline font-medium"
            >
              www.schoenebecker-solecup.de
            </a>{' '}
            möglichst barrierefrei zugänglich zu machen.
          </p>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-4">
            Diese Erklärung erfolgt freiwillig, da der Verein keine öffentliche Stelle im Sinne des Behindertengleichstellungsgesetz Sachsen-Anhalt ist und somit keiner gesetzlichen Verpflichtung zur vollständigen Umsetzung der Anforderungen der Barrierefreie-Informationstechnik-Verordnung unterliegt.
          </p>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-4">
            Dennoch orientiert sich der Verein an den Anforderungen der BITV 2.0 sowie an den internationalen Richtlinien der Web Content Accessibility Guidelines (WCAG) 2.1 (Level AA), um die Zugänglichkeit der Inhalte kontinuierlich zu verbessern.
          </p>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-4">
            Die Website fällt nach derzeitiger Einschätzung nicht in den Anwendungsbereich des Barrierefreiheitsstärkungsgesetzes (BFSG), da über die Website keine entgeltlichen elektronischen Dienstleistungen oder Produkte für Verbraucher angeboten werden.
          </p>
        </section>

        <div className="border-t border-gray-200" />

        <section>
          <p className="font-heading text-sm font-bold text-jungle uppercase tracking-widest mb-2">
            Status
          </p>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Stand der Vereinbarkeit mit den Anforderungen
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Diese Website ist mit den Anforderungen der BITV 2.0 sowie der
            harmonisierten europäischen Norm EN 301 549 (Version 3.2.1) und den
            Web Content Accessibility Guidelines (WCAG) 2.1 Level AA{' '}
            <span className="font-semibold">teilweise vereinbar</span>. Die nachstehend
            aufgeführten Inhalte sind aus den angegebenen Gründen nicht barrierefrei.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Nicht barrierefreie Inhalte
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
            Die Nichtvereinbarkeit mit BITV 2.0 bzw. den WCAG 2.1 AA betrifft
            insbesondere folgende Inhalte:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body text-gray-700 text-base leading-relaxed">
            <li>
              <span className="font-semibold">PDF-Dokumente:</span> Einige auf der
              Seite verlinkte PDF-Dateien (z. B. Ergebnislisten vergangener Jahre)
              sind nicht oder nur eingeschränkt barrierefrei. Sie enthalten keine
              vollständigen Strukturinformationen (Tags), alternativen Texte oder
              Lesereihenfolgen. Eine Überarbeitung bzw. Ersatz durch barrierefreie
              HTML-Fassungen erfolgt sukzessive.
            </li>
            <li>
              <span className="font-semibold">Bildergalerien:</span> Einzelne
              historische Bilder in den Fotogalerien verfügen über generische
              Alternativtexte. Für diese Inhalte lassen sich nachträglich nur
              begrenzt aussagekräftige Bildbeschreibungen erstellen.
            </li>
            <li>
              <span className="font-semibold">Eingebettete Inhalte Dritter:</span>{' '}
              Für Inhalte, die von externen Anbietern eingebunden werden (z. B.
              Live-Stream, Ergebnis-Ticker, Social-Media-Verlinkungen), kann die Barrierefreiheit nicht vollumfänglich gewährleistet werden.
            </li>
            <li>
              <span className="font-semibold">Videos:</span> Sofern Videoinhalte
              eingebunden sind, verfügen diese derzeit nicht durchgängig über
              Untertitel oder Audiodeskription.
            </li>
          </ul>
          <p className="font-body text-gray-700 text-base leading-relaxed mt-4">
            Eine unverhältnismäßige Belastung im Sinne des § 3 Abs. 4 BITV 2.0 wird
            bei Inhalten geltend gemacht, deren vollständige Anpassung mit
            unverhältnismäßig hohem Aufwand verbunden wäre (insbesondere bei
            archivierten PDF-Dokumenten sowie bei historischen Bildbeständen).
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Maßnahmen zur Sicherstellung der Barrierefreiheit
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
            Zur Gewährleistung der Barrierefreiheit wurden unter anderem folgende
            technische und redaktionelle Maßnahmen umgesetzt:
          </p>
          <ul className="list-disc pl-6 space-y-2 font-body text-gray-700 text-base leading-relaxed">
            <li>Semantisch korrekte HTML5-Strukturierung aller Seiten</li>
            <li>Landmark-Rollen (header, main, nav, footer) zur einfachen Orientierung mit Screenreadern</li>
            <li>"Zum Hauptinhalt springen"-Link für Tastaturnutzer am Seitenanfang</li>
            <li>Sichtbare Fokusmarkierungen für alle interaktiven Elemente</li>
            <li>Vollständige Bedienbarkeit per Tastatur ohne Maus</li>
            <li>Alternativtexte (alt-Attribute) für informative Grafiken</li>
            <li>Beschreibende Verknüpfungen (aria-label) für Bedienelemente ohne Textbeschriftung</li>
            <li>Responsive Gestaltung für Bildschirmgrößen von Mobilgeräten bis Desktop</li>
            <li>Ausreichende Farbkontraste gemäß WCAG 2.1 AA (Mindestverhältnis 4,5:1 für Text)</li>
            <li>Skalierbare Schriftgrößen bis mindestens 200 % ohne Funktionsverlust</li>
            <li>Kein ausschließlicher Einsatz von Farbe zur Informationsvermittlung</li>
            <li>Reduzierte Bewegung (prefers-reduced-motion) wird respektiert</li>
            <li>Formulare mit zugänglichen Label-Feld-Verknüpfungen und Fehlermeldungen</li>
            <li>Eindeutige und aussagekräftige Seitentitel sowie Überschriftenhierarchie</li>
            <li>Angabe der Sprache über das HTML-lang-Attribut</li>
          </ul>
        </section>

        <div className="border-t border-gray-200" />

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Erstellung dieser Erklärung zur Barrierefreiheit
          </h2>
          <div className="font-body text-gray-700 text-base leading-relaxed space-y-2">
            <p>
              Diese Erklärung wurde auf Basis einer Selbstbewertung am{' '}
              <span className="font-semibold">16. April 2026</span> erstellt und
              zuletzt am <span className="font-semibold">16. April 2026</span>{' '}
              überprüft.
            </p>
            <p>
              Die Bewertung der Vereinbarkeit der Website mit den Anforderungen
              der BITV 2.0 beruht auf einer von dem Anbieter durchgeführten
              Selbstbewertung unter Berücksichtigung des BITV-Prüfschritte-Katalogs
              sowie automatisierter Prüfwerkzeuge.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Barrieren melden: Kontakt zum Feedback-Mechanismus
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
            Sind Ihnen Mängel beim barrierefreien Zugang zu Inhalten dieser
            Website aufgefallen? Möchten Sie uns diese mitteilen oder Informationen
            zu Inhalten anfordern, die nicht barrierefrei veröffentlicht wurden?
            Dann nehmen Sie bitte Kontakt zu uns auf:
          </p>
          <div className="font-body text-gray-700 text-base leading-relaxed space-y-1">
            <p className="font-semibold">
              Förderverein der Leichtathleten von UNION 1861 Schönebeck e.V.
            </p>
            <p>Hans Weber (Vorsitzender)</p>
            <p>Lindenstraße 4, 39218 Schönebeck</p>
            <p>
              Telefon:{' '}
              <a
                href="tel:+491717258603"
                className="text-jungle hover:underline font-medium"
              >
                0171 72 58 603
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:hans.weber@union1861.de"
                className="text-jungle hover:underline font-medium"
              >
                hans.weber@union1861.de
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Durchsetzungsverfahren / Schlichtungsstelle
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed mb-4">
            Falls auch nach Ihrem Hinweis an den oben genannten Kontakt keine
            zufriedenstellende Lösung gefunden wurde, können Sie sich an die
            Überwachungsstelle des Landes Sachsen-Anhalt für die Barrierefreiheit
            von Informationstechnik wenden bzw. ein Schlichtungsverfahren nach
            § 16 Behindertengleichstellungsgesetz (BGG) bei der
            Schlichtungsstelle nach dem Behindertengleichstellungsgesetz
            beantragen. Die Schlichtungsstelle hat die Aufgabe, Konflikte für
            Menschen mit Behinderungen zu lösen. 
            Das Schlichtungsverfahren ist kostenlos. Es muss kein
            Rechtsbeistand eingeschaltet werden.
          </p>

          <h3 className="font-heading font-bold text-lg text-gray-900 uppercase tracking-wide mt-6 mb-2">
            Überwachungsstelle des Landes Sachsen-Anhalt
          </h3>
          <div className="font-body text-gray-700 text-base leading-relaxed space-y-1">
            <p>Landesbeauftragter für Menschen mit Behinderungen in Sachsen-Anhalt</p>
            <p>Ministerium für Arbeit, Soziales, Gesundheit und Gleichstellung</p>
            <p>Turmschanzenstraße 25, 39114 Magdeburg</p>
            <p>
              Telefon:{' '}
              <a
                href="tel:+493915676985"
                className="text-jungle hover:underline font-medium"
              >
                0391 567-6985
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:behindertenbeauftragter@ms.sachsen-anhalt.de"
                className="text-jungle hover:underline font-medium"
              >
                behindertenbeauftragter@ms.sachsen-anhalt.de
              </a>
            </p>
            <p>
              Internet:{' '}
              <a
                href="https://behindertenbeauftragter.sachsen-anhalt.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-jungle hover:underline font-medium"
              >
                behindertenbeauftragter.sachsen-anhalt.de
              </a>
            </p>
          </div>

          <h3 className="font-heading font-bold text-lg text-gray-900 uppercase tracking-wide mt-6 mb-2">
            Schlichtungsstelle nach dem Behindertengleichstellungsgesetz
          </h3>
          <div className="font-body text-gray-700 text-base leading-relaxed space-y-1">
            <p>bei dem Beauftragten der Bundesregierung für die Belange von Menschen mit Behinderungen</p>
            <p>Mauerstraße 53, 10117 Berlin</p>
            <p>
              Telefon:{' '}
              <a
                href="tel:+4930185272805"
                className="text-jungle hover:underline font-medium"
              >
                030 18 527-2805
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:info@schlichtungsstelle-bgg.de"
                className="text-jungle hover:underline font-medium"
              >
                info@schlichtungsstelle-bgg.de
              </a>
            </p>
            <p>
              Internet:{' '}
              <a
                href="https://www.schlichtungsstelle-bgg.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-jungle hover:underline font-medium"
              >
                www.schlichtungsstelle-bgg.de
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
