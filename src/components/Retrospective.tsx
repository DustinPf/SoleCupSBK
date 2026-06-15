import { History } from 'lucide-react';
import LazyImage from './LazyImage';

const retroYears = [
  { year: 2018, image: '/galerie-2018/SoleCup_2018_(3).jpg' },
  { year: 2017, image: '/galerie-2017/SoleCup_2017_(2).jpg' },
  { year: 2016, image: '/galerie-2016/Fischer_Jubel.jpg' },
  { year: 2015, image: '/galerie-2015/SoleCup_2015_(4).jpg' },
  { year: 2014, image: '/galerie-2014/Radio_Nation_hello-2.jpg' },
];

interface RetrospectiveProps {
  onOpenRetro: (year: number) => void;
}

export default function Retrospective({ onOpenRetro }: RetrospectiveProps) {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <History className="w-6 h-6 text-jungle" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-tangerine uppercase tracking-wide">
            Rückblicke
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {retroYears.map(({ year, image }) => (
            <button
              key={year}
              type="button"
              onClick={() => onOpenRetro(year)}
              aria-label={`Rückblick ${year} ansehen`}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-white text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle focus-visible:ring-offset-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <LazyImage
                  src={image}
                  alt=""
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <span className="font-heading text-4xl text-white tracking-wide" aria-hidden="true">
                  {year}
                </span>
                <span className="text-white/70 font-body text-sm group-hover:text-white transition-colors duration-300" aria-hidden="true">
                  Rückblick ansehen
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
