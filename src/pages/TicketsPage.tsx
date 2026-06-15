import { Ticket, UtensilsCrossed } from 'lucide-react';
import SponsorLogos from '../components/SponsorLogos';

export default function TicketsPage() {
  return (
    <main className="min-h-screen bg-ivory">

      <div className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="/Leichtathletik.jpg"
          alt="Leichtathletik"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1
            className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-wide text-tangerine"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4)' }}
          >
            FREIER EINTRITT!
          </h1>
          <p
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest text-tangerine mt-3"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4)' }}
          >
            20.06.2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="space-y-16">

          <section>
            <div className="flex items-end gap-3 mb-6">
              <Ticket className="w-6 h-6 text-tangerine shrink-0 mb-0.5" />
              <div>
                <p className="font-heading font-bold text-sm text-jungle uppercase tracking-widest mb-0.5">Eintritt</p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 uppercase tracking-wide">
                  Preise
                </h2>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <p className="font-body text-gray-700 leading-relaxed">
                Dank der treuen Sponsoren des Schönebecker SoleCup, die ihr Engagement erweiterten, können die Zuschauer bei freiem Eintritt die auf hohem Niveau stattfindenden Wettkämpfe verfolgen.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-end gap-3 mb-6">
              <UtensilsCrossed className="w-6 h-6 text-tangerine shrink-0 mb-0.5" />
              <div>
                <p className="font-heading font-bold text-sm text-jungle uppercase tracking-widest mb-0.5">Verpflegung</p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 uppercase tracking-wide">
                  Catering
                </h2>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-4">
              <p className="font-body text-gray-700 leading-relaxed">
                Für das leibliche Wohl ist wie immer gesorgt. Silke Heise, Inhaberin der Stadiongaststätte von UNION 1861 e.V. und ihr Team kümmern sich um das Zuschauercatering mit <strong>Veltins</strong> Bier und anderen Getränken. Das SK1- Barbecue-Team der PGH Fleisch- und Wurstwaren GmbH übernimmt die Versorgung mit Gegrilltem. <strong>Mit dabei 2026 auch die Team Ewald GmbH, die das Angebot mit Wraps und für die Kinder Nudeln mit Tomatensoße ergänzt.</strong>
              </p>
              <p className="font-body text-gray-700 leading-relaxed">
                Die Teams sind darauf eingestellt, dass in den Pausen zwischen den Wettbewerben der Ansturm der Zuschauer besonders groß ist.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-end gap-3 mb-6">
              <UtensilsCrossed className="w-6 h-6 text-tangerine shrink-0 mb-0.5" />
              <div>
                <p className="font-heading font-bold text-sm text-jungle uppercase tracking-widest mb-0.5">Versorgung</p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 uppercase tracking-wide">
                  Getränkeversorgung
                </h2>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <p className="font-body text-gray-700 leading-relaxed">
                Für die Sportler*innen und Helfer*innen stehen kostenlos alkoholfreie Getränke, gesponsert von der Duphorn &amp; Franke GmbH &amp; Co. KG (Duponia) aus Calbe zur Verfügung.
              </p>
            </div>
          </section>

        </div>
      </div>
      <div className="mt-20">
        <SponsorLogos />
      </div>
    </main>
  );
}
