import WettbewerbCallToAction from '../components/WettbewerbCallToAction';
import SponsorLogos from '../components/SponsorLogos';

export default function HauptwettbewerbePage() {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="relative h-[432px] sm:h-[576px] overflow-hidden">
        <img
          src="/galerie-2019/SoleCup_2019_(11).jpg"
          alt="Hauptwettbewerbe"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wide text-center px-4 drop-shadow-lg">
            Hauptwettbewerbe
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
            „Spitzensport hautnah und kompakt" im Stadion an der Magdeburger Straße. Traditionell werden als Hauptwettbewerbe alle 4 Wurf- und Stoßdisziplinen angeboten. Neben den nationalen Spitzenathleten wurden in den Jahren auch internationale Einzelstarter als die Wettbewerbe belebende Konkurrenz zum Meeting eingeladen. Nahezu alle deutschen Olympiasieger:innen, Weltmeister:innen oder Europameister:innen der letzten 30 Jahren haben ihre Visitenkarte <strong>bei den nunmehr 20 SoleCup-Veranstaltungen</strong> in Schönebeck abgegeben.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <p className="font-heading text-sm font-bold text-jungle uppercase tracking-widest mb-1">Disziplinen</p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide mb-6">
              SoleCup
            </h2>
            <div className="font-body text-gray-700 text-base leading-relaxed space-y-2">
              <p><span className="font-semibold">Männer:</span> Kugelstoßen, Diskus- und Hammerwerfen</p>
              <p><span className="font-semibold">Frauen:</span> Kugelstoßen, Diskus-, Hammer- und Speerwerfen</p>
              <p className="mt-4">
                Meldungen an:{' '}
                <a
                  href="mailto:ritschel@conomic.de"
                  className="text-jungle hover:underline"
                >
                  ritschel@conomic.de
                </a>
              </p>
            </div>
          </section>

          <section className="flex flex-col items-start md:items-end md:justify-end gap-2">
            <a
              href="/Starter-Hauptwettbewerbe_Stand-2026-06-12.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-heading font-bold text-jungle uppercase tracking-wide text-base hover:underline underline-offset-4 decoration-2 transition-colors duration-200"
            >
              &gt;&gt; Starter Hauptwettbewerbe
            </a>
            <a
              href="/Top-Ten-Liste_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-heading font-bold text-jungle uppercase tracking-wide text-base hover:underline underline-offset-4 decoration-2 transition-colors duration-200"
            >
              &gt;&gt; Top-Ten-Liste 2025
            </a>
          </section>
        </div>
      </div>

      <SponsorLogos />
      <WettbewerbCallToAction />
    </main>
  );
}
