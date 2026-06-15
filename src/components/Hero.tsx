import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const TARGET_MS = Date.UTC(2026, 5, 20, 7, 30, 0);

type Remaining = { days: number; hours: number; minutes: number; seconds: number; done: boolean };

function getRemaining(): Remaining {
  const diff = TARGET_MS - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds, done: false };
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

const numShadow = '0 0 40px rgba(0,0,0,0.9), 2px 4px 20px rgba(0,0,0,0.95), 0 0 80px rgba(0,0,0,0.6)';
const labelShadow = '0 0 16px rgba(0,0,0,0.95), 1px 2px 8px rgba(0,0,0,1)';

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[4rem] sm:min-w-[5.5rem] lg:min-w-[7rem]">
      <span
        className="font-heading text-6xl sm:text-7xl lg:text-9xl text-white tabular-nums leading-none"
        style={{ textShadow: numShadow }}
      >
        {pad(value)}
      </span>
      <span
        className="font-heading text-xs sm:text-sm lg:text-base text-white/95 uppercase tracking-[0.25em] mt-2 lg:mt-3"
        style={{ textShadow: labelShadow }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const [remaining, setRemaining] = useState<Remaining>(() => getRemaining());

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining(getRemaining());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Schoenebecker-SoleCup_Hero.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1020&dpr=2"
          alt="Schoenebecker SoleCup Meeting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">

        {/* Date + Countdown row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6 sm:mb-8 sm:-ml-40">

          {/* Date block */}
          <div className="font-heading tracking-tight leading-[0.9]">
            <div
              className="text-tangerine text-6xl sm:text-7xl lg:text-9xl"
              style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5)' }}
            >20.06.2026</div>
            <div
              className="text-jungle text-5xl sm:text-6xl lg:text-8xl"
              style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.7), 0 2px 6px rgba(0,0,0,0.5)' }}
            >Ab 9:30 Uhr</div>
          </div>

          {/* Countdown block */}
          <div
            className="mt-8 lg:mt-0 lg:text-right"
            role="timer"
            aria-live="polite"
            aria-label={`Countdown: ${remaining.days} Tage, ${remaining.hours} Stunden, ${remaining.minutes} Minuten, ${remaining.seconds} Sekunden`}
          >
            <div className="flex items-center lg:justify-end gap-2 mb-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-tangerine opacity-80 animate-ping" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-tangerine" />
              </span>
              <span
                className="font-heading text-sm lg:text-base text-white uppercase tracking-[0.25em]"
                style={{ textShadow: labelShadow }}
              >
                {remaining.done ? 'Live' : 'Countdown'}
              </span>
            </div>

            {remaining.done ? (
              <div
                className="font-heading text-5xl lg:text-7xl text-tangerine uppercase tracking-wide"
                style={{ textShadow: numShadow }}
              >
                Es ist soweit!
              </div>
            ) : (
              <div className="flex items-end justify-start lg:justify-end gap-2 sm:gap-3 lg:gap-4">
                <CountdownUnit value={remaining.days} label="Tage" />
                <span
                  className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white/60 leading-none pb-8 sm:pb-9 lg:pb-12"
                  aria-hidden="true"
                >:</span>
                <CountdownUnit value={remaining.hours} label="Std" />
                <span
                  className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white/60 leading-none pb-8 sm:pb-9 lg:pb-12"
                  aria-hidden="true"
                >:</span>
                <CountdownUnit value={remaining.minutes} label="Min" />
                <span
                  className="font-heading text-5xl sm:text-6xl lg:text-8xl text-white/60 leading-none pb-8 sm:pb-9 lg:pb-12"
                  aria-hidden="true"
                >:</span>
                <CountdownUnit value={remaining.seconds} label="Sek" />
              </div>
            )}
          </div>
        </div>

        <p className="font-body text-white text-base sm:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-6 sm:mb-4 sm:-ml-40" style={{ textShadow: '1px 2px 8px rgba(0,0,0,0.8)' }}>
          Das traditionsreiche Wurfmeeting in Schönebeck &ndash; wo Athleten aus ganzer
          Welt ihre Bestleistungen im Diskus, Hammer, Speer und
          Kugelstoßen zeigen.
        </p>
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
          <img
            src="/Logos/Contitnental_Tour-2026.png"
            alt="Continental Tour 2026 Logo"
            className="h-24 sm:h-40 lg:h-80 w-auto object-contain drop-shadow-lg"
          />
          <img
            src="/Logos/World_Athletics_Continental_Tour_Bronzepg.jpg"
            alt="World Athletics Continental Tour Bronze Logo"
            className="h-24 sm:h-40 lg:h-80 w-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>

      <a
        href="#aktuelles"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
