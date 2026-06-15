import WettbewerbCallToAction from '../components/WettbewerbCallToAction';
import SponsorLogos from '../components/SponsorLogos';

export default function NachwuchswettbewerbePage() {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="relative h-[432px] sm:h-[576px] overflow-hidden">
        <img
          src="/galerie-2019/SoleCup_2019_(2).jpg"
          alt="Nachwuchswettbewerbe"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wide text-center px-4 drop-shadow-lg">
            Nachwuchswettbewerbe
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <p className="font-heading text-sm font-bold text-jungle uppercase tracking-widest mb-1">Spitzensport</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide mb-6">
            Hautnah und kompakt
          </h2>
          <p className="font-body text-gray-700 text-base sm:text-lg leading-relaxed">
            Die Talente von Morgen! Die Nachwuchswettbewerbe runden das Veranstaltungsangebot des Schönebecker SoleCup ab und haben Tradition. Gemeinsam mit den Spitzensportlern kämpfen die Nachwuchsathleten aus den Disziplingruppen der Wurfwettbewerbe beim Schönebecker SoleCup um Bestleistungen und Qualifikationsnormen für die internationalen Meisterschaften. Beim SoleCup haben die Athleten ab der U20 die Chance, sich dem breiten Publikum zu präsentieren und profitieren wie die „Großen" von der besonderen Atmosphäre und den hervorragenden Wettkampfbedingungen in Schönebeck.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <p className="font-heading text-sm font-bold text-jungle uppercase tracking-widest mb-1">Disziplinen</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide mb-6">
              SoleCup
            </h2>
            <div className="font-body text-gray-700 text-base leading-relaxed space-y-2">
              <p>Kugelstoßen, Diskus- und Speerwerfen:</p>
              <p>Männl./ Weibl. Jugend U20</p>
              <p className="mt-4">
                Meldungen an:{' '}
                <a
                  href="mailto:Hans.Weber@union1861.de"
                  className="text-jungle hover:underline"
                >
                  Hans.Weber@union1861.de
                </a>
              </p>
            </div>
          </section>

          <section className="flex items-start md:items-end md:justify-end">
            <a
              href="/Starter-Nachwuchswettbewerbe_Stand-2026-06-12.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-heading font-bold text-jungle uppercase tracking-wide text-base hover:underline underline-offset-4 decoration-2 transition-colors duration-200"
            >
              &gt;&gt; Starter Nachwuchswettbewerbe
            </a>
          </section>
        </div>
      </div>

      <SponsorLogos />
      <WettbewerbCallToAction />
    </main>
  );
}
