import { ArrowLeft } from 'lucide-react';

interface PandemicPageProps {
  year: number;
  onBack: () => void;
}

export default function PandemicPage({ year, onBack }: PandemicPageProps) {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-jungle hover:text-jungle/80 font-heading font-bold uppercase tracking-wide transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            Zurück zur Startseite
          </button>

          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl aspect-[16/7] mb-12">
            <img
              src="/galerie-2020/SoleCup_2020.jpg"
              alt="SoleCup 2020"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="font-heading text-6xl sm:text-7xl text-white tracking-wide drop-shadow-lg">
                {year}
              </span>
            </div>
          </div>

          <p className="font-body text-xl text-gray-700 max-w-2xl">
            Der SoleCup ist in diesem Jahr leider pandemiebedingt ausgefallen.
          </p>
        </div>
      </div>
    </div>
  );
}
