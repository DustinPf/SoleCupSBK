import WettbewerbCallToAction from '../components/WettbewerbCallToAction';
import SponsorLogos from '../components/SponsorLogos';

export default function AftCupPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="relative h-[432px] sm:h-[576px] overflow-hidden">
        <img
          src="/Zuschauer-Cups.png"
          alt="AFT Zuschauer-Cup"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wide text-center px-4 drop-shadow-lg">
            AFT Zuschauer-Cup
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        <section>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-wide mb-6">
            <span className="text-jungle">AFT</span>{' '}
            <span className="text-red-600">Schlagball-Cup</span>
          </h2>
          <div className="font-body text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Seit den 2. Schönebecker SoleCup sind Kugel-Cup und Schlagball-Cup fester Bestandteil der breitensportlichen Angebote des SoleCup. In diesem Jahr ist die{' '}
              <strong className="text-gray-900 font-extrabold">AFT Abdichtungs- und Fußbodentechnik GmbH</strong>{' '}
              Titelsponsor dieses Wettbewerbes.
            </p>
            <p>
              Der AFT Schlagball-Cup ist ein Angebot an die Grundschulen des Salzlandkreises; <strong>28</strong> Schulen wurden eingeladen. Der Wettbewerb findet am Mittwoch im Stadtwerke Sportpark ab 16.00 Uhr statt. Es ist ein Mannschaftswettbewerb bei dem von jeder Grundschule 3 Jungen und 3 Mädchen aus den Klassenstufen 1–4 starten. Jeder Teilnehmer hat 3 Versuche mit dem 80 Gramm Schlagball, von denen der weiteste Versuch in die Mannschaftswertung der Schule eingeht.
            </p>
            <p>
              Natürlich werden auch die besten 3 Mädchen und 3 Jungen je Klassenstufe mit einer Urkunde geehrt.
            </p>
            <p>
              Auf die besten 3 Schulen wartet <strong>mit</strong> je ein Pokal und eine Geldprämien für die außerschulische Sportarbeit.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900 mb-2">Die teilnehmenden Schulen 2026:</p>
              <ul className="list-none space-y-1 pl-0">
                <li>Grundschule &ldquo;Am Prinzeßchen&rdquo;</li>
                <li>Freie Schule Schönebeck</li>
                <li>Grundschule &ldquo;Am Lerchenfeld&rdquo;</li>
                <li>Grundschule &ldquo;Karl Liebknecht&rdquo;</li>
                <li>Grundschule &ldquo;Ludwig Schneider&rdquo;</li>
                <li>Grundschule Förderstedt</li>
                <li>Grundschule &ldquo;Ludwig Uhland&rdquo;</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-wide mb-6">
            <span className="text-jungle">AFT</span>{' '}
            <span className="text-red-600">Kugel-Cup</span>
          </h2>
          <div className="font-body text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Der Wettbewerb „100 stoßen Kugel" findet am Tag des SoleCups statt. Teilnehmer können alle Zuschauer und Gäste des SoleCups sein.
            </p>
            <p>
              Jede/r Teilnehmer/in hat drei Versuche, von denen der beste in die Wertung kommt. Die Weiten der besten 100 Kugelstoßer/innen werden zum Gesamtergebnis addiert. Bis zum Corona-Pandemie fand ein Städtewettkampf zwischen den Wurfmeetings von Schönebeck, Thum und Bad Köstritz statt, bei dem die Gesamtergebnisse des Wettbewerbes verglichen wurden.
            </p>
          </div>
        </section>
      </div>

      <SponsorLogos />
      <WettbewerbCallToAction />
    </main>
  );
}
