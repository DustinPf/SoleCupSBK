import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowLeft, Camera, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { galleryImages } from '../data/galleryData';

const PRELOAD_COUNT = 3;
const INTERVAL = 5000;

interface GalleryPageProps {
  year: number;
  onBack: () => void;
}

export default function GalleryPage({ year, onBack }: GalleryPageProps) {
  const images = galleryImages[year] ?? [];
  const TOTAL = images.length;

  const [current, setCurrent] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState(new Set([0, 1, 2]));
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateLoadedIndexes = useCallback((index: number) => {
    const toLoad = new Set<number>();
    for (let i = -PRELOAD_COUNT; i <= PRELOAD_COUNT; i++) {
      toLoad.add(((index + i) % TOTAL + TOTAL) % TOTAL);
    }
    setLoadedIndexes(toLoad);
  }, [TOTAL]);

  const goTo = useCallback((index: number) => {
    const normalized = ((index % TOTAL) + TOTAL) % TOTAL;
    setCurrent(normalized);
    updateLoadedIndexes(normalized);
  }, [TOTAL, updateLoadedIndexes]);

  const prev = useCallback(() => {
    const newIndex = ((current - 1) % TOTAL + TOTAL) % TOTAL;
    goTo(newIndex);
  }, [current, TOTAL, goTo]);

  const next = useCallback(() => {
    const newIndex = (current + 1) % TOTAL;
    goTo(newIndex);
  }, [current, TOTAL, goTo]);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => {
        const nextIdx = (c + 1) % TOTAL;
        updateLoadedIndexes(nextIdx);
        return nextIdx;
      });
    }, INTERVAL);
  }, [TOTAL, updateLoadedIndexes]);

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
    updateLoadedIndexes(0);
  }, [year, updateLoadedIndexes]);

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
    <div className="min-h-screen bg-ivory">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-jungle hover:text-jungle/80 font-heading font-bold uppercase tracking-wide transition-colors duration-200 mb-8 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle rounded"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
            Zurück
          </button>

          <div className="flex items-center gap-3 mb-2">
            <Camera className="w-6 h-6 text-jungle" />
            <p className="font-heading font-bold text-sm text-jungle uppercase tracking-widest">Bildergalerie</p>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl text-gray-900 uppercase tracking-wide mb-2">
            SoleCup {year}
          </h1>
          <p className="font-body text-sm text-gray-500 mb-10">{images.length} Fotos</p>

          <div
            role="region"
            aria-label={`Bildergalerie SoleCup ${year}`}
            aria-roledescription="Diashow"
            className="relative group"
          >
            <div
              id="gallery-slide-status"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className="sr-only"
            >
              {`Bild ${current + 1} von ${TOTAL}`}
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[16/9] bg-gray-900">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="absolute inset-0 transition-opacity duration-600 ease-in-out"
                  style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
                >
                  {loadedIndexes.has(i) ? (
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 animate-pulse" />
                  )}
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

              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-white/50 font-body text-xs sm:text-sm" aria-hidden="true">
                {current + 1} / {TOTAL}
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
                  } bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle`}
                >
                  {loadedIndexes.has(imgIndex) ? (
                    <img
                      src={images[imgIndex].src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 animate-pulse" />
                  )}
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
                  } bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jungle`}
                  style={{
                    width: pos === 1 ? '44%' : '24%',
                    height: pos === 1 ? '72px' : '52px',
                  }}
                >
                  {loadedIndexes.has(imgIndex) ? (
                    <img
                      src={images[imgIndex].src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
