import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { galleryImages } from '../data/galleryData';

const INTERVAL = 5000;

interface ImageSliderProps {
  year: number;
}

export default function ImageSlider({ year }: ImageSliderProps) {
  const sliderImages = galleryImages[year] ?? galleryImages[2025];
  const TOTAL = sliderImages.length;

  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(((index % TOTAL) + TOTAL) % TOTAL);
  }, [TOTAL]);

  const prev = useCallback(() => setCurrent((c) => ((c - 1) + TOTAL) % TOTAL), [TOTAL]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % TOTAL), [TOTAL]);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TOTAL);
    }, INTERVAL);
  }, [TOTAL]);

  useEffect(() => {
    if (isPlaying) {
      startInterval();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, startInterval]);

  useEffect(() => {
    setCurrent(0);
  }, [year]);

  const togglePlay = () => {
    setIsPlaying((p) => !p);
  };

  const desktopThumbnailIndices = [
    ((current - 2) + TOTAL) % TOTAL,
    ((current - 1) + TOTAL) % TOTAL,
    current,
    (current + 1) % TOTAL,
    (current + 2) % TOTAL,
  ];

  const mobileThumbnailIndices = [
    ((current - 1) + TOTAL) % TOTAL,
    current,
    (current + 1) % TOTAL,
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          role="region"
          aria-label={`Bildergalerie SoleCup ${year}`}
          aria-roledescription="Diashow"
          className="relative group"
        >
          <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
            {`Bild ${current + 1} von ${TOTAL}`}
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[16/9]">
            {sliderImages.map((img, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-600 ease-in-out"
                style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}

            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full transition-all duration-200 hover:scale-110"
              style={{ background: 'rgba(100,100,100,0.7)' }}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" style={{ color: 'rgba(255,255,255,0.8)' }} />
            </button>

            <button
              onClick={next}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full transition-all duration-200 hover:scale-110"
              style={{ background: 'rgba(100,100,100,0.7)' }}
              aria-label="Naechstes Bild"
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" style={{ color: 'rgba(255,255,255,0.8)' }} />
            </button>

            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20">
              <button
                onClick={togglePlay}
                className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(100,100,100,0.7)' }}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-6 sm:h-6" style={{ color: 'rgba(255,255,255,0.8)' }} />
                ) : (
                  <Play className="w-4 h-4 sm:w-6 sm:h-6 ml-0.5" style={{ color: 'rgba(255,255,255,0.8)' }} />
                )}
              </button>
            </div>
          </div>

          <div className="hidden sm:flex justify-center gap-3 mt-4" role="group" aria-label="Miniaturansichten">
            {desktopThumbnailIndices.map((imgIndex, pos) => (
              <button
                key={`${imgIndex}-${pos}`}
                onClick={() => goTo(imgIndex)}
                aria-label={`Bild ${imgIndex + 1} von ${TOTAL} anzeigen`}
                aria-current={pos === 2 ? 'true' : undefined}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 flex-shrink-0 ${
                  pos === 2
                    ? 'w-28 h-20 sm:w-36 sm:h-24 ring-2 ring-jungle scale-105'
                    : 'w-16 h-12 sm:w-24 sm:h-16 opacity-50 hover:opacity-80'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle`}
              >
                <img
                  src={sliderImages[imgIndex].src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          <div className="flex sm:hidden justify-center items-center gap-2 mt-3" role="group" aria-label="Miniaturansichten">
            {mobileThumbnailIndices.map((imgIndex, pos) => (
              <button
                key={`${imgIndex}-${pos}`}
                onClick={() => goTo(imgIndex)}
                aria-label={`Bild ${imgIndex + 1} von ${TOTAL} anzeigen`}
                aria-current={pos === 1 ? 'true' : undefined}
                className={`relative overflow-hidden rounded-md transition-all duration-300 flex-shrink-0 ${
                  pos === 1
                    ? 'ring-2 ring-jungle'
                    : 'opacity-50'
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle`}
                style={{
                  width: pos === 1 ? '44%' : '24%',
                  height: pos === 1 ? '72px' : '52px',
                }}
              >
                <img
                  src={sliderImages[imgIndex].src}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
