import WettbewerbCallToAction from '../components/WettbewerbCallToAction';
import SponsorLogos from '../components/SponsorLogos';

export default function StadtwerkeCupPage() {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="relative h-[432px] sm:h-[576px] overflow-hidden">
        <img
          src="/Leichtathletik-Vorfuerung.jpg"
          alt="Stadtwerke Schönebeck Zuschauer-Cup"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wide text-center px-4 drop-shadow-lg">
            Stadtwerke Schönebeck Zuschauer-Cup
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-10">
          <p className="font-heading text-sm font-bold text-jungle uppercase tracking-widest mb-1">Wertung</p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide mb-8">
            Gewinner Preise
          </h2>
          <h3 className="font-heading font-bold text-xl text-jungle uppercase tracking-wide mb-4">
            Die Wertung
          </h3>
          <p className="font-body text-gray-700 text-base sm:text-lg leading-relaxed">
            Der Zuschauer-Cup ist ein sportliches Angebot der Abteilungen von UNION 1861 Schönebeck an die Zuschauer. Im Rahmen des <strong>3.</strong> UNION-Sporttages bieten diese an ihren Ständen die Möglichkeit, sich sportlich zu betätigen und in die Sportart hinein zu schnuppern. Dabei geht es um die Teilnahme am Wettbewerb, nicht um das sportliche Ergebnis. Nach erfolgreichem Absolvieren von mindestens 4 Stationen kann der Zuschauer / die Zuschauerin die Teilnehmerkarte in einen Lostopf am Moderationsstand des Sporttages werfen. Drei lukrative Preise, gestiftet von den Stadtwerken Schönebeck, werden im Laufe des Abends durch Losentscheid vergeben. Die Verlosung findet vor der EMS-Fan-Tribüne statt.
          </p>
        </section>
      </div>

      <SponsorLogos />
      <WettbewerbCallToAction />
    </main>
  );
}
