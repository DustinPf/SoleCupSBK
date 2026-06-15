import { Camera } from 'lucide-react';
import LazyImage from './LazyImage';

const galleryYears = [
  {
    year: 2025,
    image: '/galerie-2025/Walter2.jpg',
    hasGallery: true,
  },
  {
    year: 2024,
    image: '/galerie-2024/SoleCup_2024_(17).jpg',
    hasGallery: true,
  },
  {
    year: 2023,
    image: '/galerie-2023/SoleCup_2023_(4).jpg',
    hasGallery: true,
  },
  {
    year: 2022,
    image: '/galerie-2022/SoleCup_2022_(2).jpg',
    hasGallery: true,
  },
  {
    year: 2021,
    image: '/galerie-2021/SoleCup_2021_(36).jpg',
    hasGallery: true,
  },
  {
    year: 2020,
    image: '/galerie-2020/SoleCup_2020.jpg',
    hasGallery: false,
    isPandemic: true,
  },
  {
    year: 2019,
    image: '/galerie-2019/SoleCup_2019_(16).jpg',
    hasGallery: true,
  },
];

interface GalleryProps {
  onOpenGallery: (year: number) => void;
  onOpenPandemic: (year: number) => void;
}

export default function Gallery({ onOpenGallery, onOpenPandemic }: GalleryProps) {
  return (
    <section id="aktuelles" className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Camera className="w-6 h-6 text-jungle" />
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-tangerine uppercase tracking-wide">
            Bilder Galerie
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryYears.map(({ year, image, hasGallery, isPandemic }) => {
            const isInteractive = hasGallery || isPandemic;
            const label = hasGallery
              ? `Galerie ${year} ansehen`
              : isPandemic
              ? `Mehr erfahren über SoleCup ${year}`
              : undefined;
            return isInteractive ? (
              <button
                key={year}
                type="button"
                onClick={() => {
                  if (hasGallery) onOpenGallery(year);
                  else if (isPandemic) onOpenPandemic(year);
                }}
                aria-label={label}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 bg-white text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle focus-visible:ring-offset-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={image}
                    alt=""
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <span className="font-heading text-4xl text-white tracking-wide" aria-hidden="true">
                    {year}
                  </span>
                  <span className="text-white/70 font-body text-sm group-hover:text-white transition-colors duration-300" aria-hidden="true">
                    {hasGallery ? 'Galerie ansehen' : 'Mehr erfahren'}
                  </span>
                </div>
              </button>
            ) : (
              <div
                key={year}
                className="group relative overflow-hidden rounded-2xl shadow-md bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={image}
                    alt={`SoleCup ${year}`}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <span className="font-heading text-4xl text-white tracking-wide">
                    {year}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
