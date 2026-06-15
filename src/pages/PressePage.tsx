import SponsorLogos from '../components/SponsorLogos';
import PressAccreditationForm from '../components/PressAccreditationForm';

export default function PressePage() {
  return (
    <main className="min-h-screen bg-ivory pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-jungle uppercase tracking-wide mb-2">
          Presse
        </h1>
        <div className="w-28 h-1 bg-tangerine rounded-full mb-12" />

        <div className="space-y-10">
          <section>
            <h2 className="font-heading font-bold text-2xl text-tangerine uppercase tracking-wide mb-4">
              Akkreditierung und Richtlinien
            </h2>
            <p className="font-body text-gray-700 leading-relaxed">
              Alle notwendigen Informationen für Pressevertreter sind in den Richtlinien für die Pressebetreuung enthalten:
            </p>
          </section>

          <section>
            <h3 className="font-heading font-bold text-xl text-jungle uppercase tracking-wide mb-3">
              Akkreditierung
            </h3>
            <ul className="font-body text-gray-700 leading-relaxed space-y-2 list-none">
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Vorrang haben Mitglieder des VDS (Verband Deutscher Sport-Journalisten), dazu kommen regionale und lokale Berichterstatter.
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Akkreditierungsschluss ist der <strong>19. Juni 2026</strong>, 23:59 Uhr.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading font-bold text-xl text-jungle uppercase tracking-wide mb-3">
              Innenraum-Fotografen
            </h3>
            <ul className="font-body text-gray-700 leading-relaxed space-y-2 list-none">
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Begrenzte Anzahl für 15 Fotografen.
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Vor der Veranstaltung gibt es eine Besprechung mit der Wettkampfleitung.
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Ausgabe der Presse-Weste gegen einen Pfand von 5 €.
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Es müssen alle no-go-Zonen berücksichtigt werden.
              </li>
              <li className="flex gap-2 ml-6">
                <span className="text-gray-400 shrink-0">-</span>
                Ab der Ziellinie gibt es eine 20 m no-go-Zone.
              </li>
              <li className="flex gap-2 ml-6">
                <span className="text-gray-400 shrink-0">-</span>
                Die Ergebnistafeln dürfen nicht verdeckt werden.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading font-bold text-xl text-jungle uppercase tracking-wide mb-3">
              TV
            </h3>
            <ul className="font-body text-gray-700 leading-relaxed space-y-2 list-none">
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Vor der Veranstaltung gibt es eine Besprechung mit der Wettkampfleitung.
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Ausgabe der Presse-Weste gegen einen Pfand von 5 €.
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Es müssen alle no-go-Zonen berücksichtigt werden.
              </li>
              <li className="flex gap-2 ml-6">
                <span className="text-gray-400 shrink-0">-</span>
                Die Ergebnistafeln dürfen nicht verdeckt werden.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading font-bold text-xl text-jungle uppercase tracking-wide mb-3">
              Pressebetreuung
            </h3>
            <ul className="font-body text-gray-700 leading-relaxed space-y-2 list-none">
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Im „Kleinen Sportheim" am Stadion erfolgen die Presseinformationen.
              </li>
              <li className="flex gap-2">
                <span className="text-gray-500 shrink-0">-</span>
                Ein Regal mit allen Starterlisten und Ergebnissen wird ständig aktualisiert.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-heading font-bold text-xl text-jungle uppercase tracking-wide mb-3">
              Mixed – Zone
            </h3>
            <p className="font-body text-gray-700 leading-relaxed">
              Die Athleten (Plätze 1–3) kommen direkt nach dem Wettbewerb für die Presse in die Mixed-Zone, in unmittelbarer Nähe der Siegerehrung.
            </p>
          </section>

          <PressAccreditationForm />
        </div>
      </div>
      <div className="mt-16">
        <SponsorLogos />
      </div>
    </main>
  );
}
