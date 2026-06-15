import { CalendarDays } from 'lucide-react';

export default function WettbewerbCallToAction() {
  return (
    <section className="py-12 md:py-20 bg-ivory border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-tangerine uppercase tracking-wide mb-8">
            Sei beim nächsten Wurfmeeting dabei!
          </h2>
          <p className="font-body text-gray-600 text-lg sm:text-xl leading-relaxed mb-2">
            Diskus, Hammer, Speer und Kugelstoßen &ndash;
          </p>
          <p className="font-body text-gray-600 text-lg sm:text-xl leading-relaxed mb-2">
            das Wurfmeeting des Jahres!
          </p>
          <p className="font-body text-gray-600 text-lg sm:text-xl leading-relaxed mb-10">
            Hier in Ihrer Region in Sachsen-Anhalt.
          </p>
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-md px-8 py-5">
            <CalendarDays className="w-7 h-7 text-tangerine flex-shrink-0" />
            <span className="font-heading text-2xl sm:text-3xl text-gray-900 tracking-wide">
              20.06.2026 ab 9:30 Uhr
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
