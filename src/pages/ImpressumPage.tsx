export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-4 w-full">
        <p className="font-heading text-sm font-bold text-red-600 uppercase tracking-widest mb-1">Rechtliche Informationen</p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide">
          Impressum
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <section>
          <p className="font-heading text-sm font-bold text-jungle uppercase tracking-widest mb-2">§ 5 DDG</p>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Anbieter und Verantwortlicher
          </h2>
          <div className="font-body text-gray-700 text-base leading-relaxed space-y-1">
            <p className="font-semibold">Förderverein der Leichtathleten von UNION 1861 Schönebeck e.V.</p>
            <p>Vorsitzender: Hans Weber</p>
            <p>Lindenstraße 4, 39218 Schönebeck</p>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Vorstand
          </h2>
          <div className="font-body text-gray-700 text-base leading-relaxed space-y-1">
            <p>Vorstand BGB §26: Hans Weber, Dirk Braune, Lars Göhlich, Thomas Gürke</p>
            <p>
              Telefon:{' '}
              <a href="tel:+491717258603" className="text-jungle hover:underline font-medium">
                0171 72 58 603
              </a>
            </p>
            <p>Fax: (03928) 76085</p>
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
            Registereintrag
          </h2>
          <div className="font-body text-gray-700 text-base leading-relaxed space-y-1">
            <p>Amtsgericht Stendal unter VR 5565</p>
            <p>Umsatzsteuer-ID gemäß § 27a UStG: DE356229257</p>
            <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Hans Weber</p>
            <p>Adresse: Lindenstraße 4, 39218 Schönebeck</p>
          </div>
        </section>

        <div className="border-t border-gray-200" />

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Haftungsausschluss
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Obwohl die auf den Seiten des Schönebecker SoleCup enthaltenen Informationen durch den Verantwortlichen sorgfältig geprüft worden sind, kann der Inhaber nicht die Haftung für deren Richtigkeit, Vollständigkeit oder Aktualität übernehmen. Die Übernahme der Informationen erfolgt auf eigene Gefahr.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Verweise und Links
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Bei direkten oder indirekten Verweisen auf fremde Webseiten („Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der gelinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl text-gray-900 uppercase tracking-wide mb-4">
            Copyright
          </h2>
          <p className="font-body text-gray-700 text-base leading-relaxed">
            Sämtliche auf den Seiten des Schönebecker SoleCup befindlichen Texte, Grafiken, Gestaltungen sind urheberrechtlich geschützt. Ohne die Zustimmung des Inhabers erfolgte Verwendung, Veröffentlichung, Vervielfältigung oder Weitergabe wird sowohl strafrechtlich als auch zivilrechtlich verfolgt.
          </p>
        </section>
      </div>
    </main>
  );
}
