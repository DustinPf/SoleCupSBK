import { Radio, Timer } from 'lucide-react';
import { NavPage } from './Navbar';

const navLinks: { label: string; page: NavPage }[] = [
  { label: 'Über uns', page: 'ueber-uns' },
  { label: 'Aktuelles', page: 'aktuelles' },
  { label: 'Wettbewerbe', page: 'wettbewerbe' },
  { label: 'Sponsoren', page: 'sponsoren' },
  { label: 'Tickets', page: 'tickets' },
];

interface FooterProps {
  onNavigate?: (page: NavPage) => void;
  onImpressum?: () => void;
  onDatenschutz?: () => void;
  onBarrierefreiheit?: () => void;
}

export default function Footer({ onNavigate, onImpressum, onDatenschutz, onBarrierefreiheit }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/Logos/SoleCup/Logo_Solecup.png"
                alt="SoleCup"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="font-body text-sm text-gray-400 leading-relaxed space-y-1">
              <p className="text-white font-medium">
                Förderverein der Leichtathleten
              </p>
              <p>von UNION 1861 Schönebeck e.V.</p>
              <p>Lindenstraße 4</p>
              <p>39218 Schönebeck</p>
              <div className="pt-4">
                <p className="text-white font-medium">Ansprechpartner:</p>
                <p>Hans Weber</p>
                <p>
                  <a
                    href="tel:+491717258603"
                    className="hover:text-jungle transition-colors duration-200"
                  >
                    +49 171 7258603
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:hans.weber@union1861.de"
                    className="hover:text-jungle transition-colors duration-200"
                  >
                    hans.weber@union1861.de
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h3 className="font-heading text-lg uppercase tracking-wide mb-6">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNavigate?.(link.page)}
                  className="font-body text-sm text-gray-400 hover:text-jungle transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-2">
              <a
                href="https://www.facebook.com/SchoenebeckerSoleCup/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-jungle transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.883v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/unionsolecup/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-jungle transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-6 mb-5">
              <a
                href="https://ergebnisse.leichtathletik.de/Competitions/Details/19776"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-tangerine font-heading font-bold text-xl uppercase tracking-wide hover:opacity-80 transition-opacity duration-200"
              >
                <Radio className="w-5 h-5" />
                Live-Stream
              </a>
              <a
                href="https://www.cosa-software.de/Veranstaltungen/2025012/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-tangerine font-heading font-bold text-xl uppercase tracking-wide hover:opacity-80 transition-opacity duration-200"
              >
                <Timer className="w-5 h-5" />
                Ergebnis-Ticker
              </a>
            </div>
            <h3 className="font-heading text-lg uppercase tracking-wide mb-4">
              Förderer des Schönebecker Solecups
            </h3>
            <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
              {[
                '/Logos/foerderer1.png',
                '/Logos/foerderer2.png',
                '/Logos/foerderer3.png',
                '/Logos/foerderer4.png',
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square flex items-center justify-center bg-white/5 rounded p-1"
                >
                  <img
                    src={src}
                    alt={`Förderer ${i + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-end h-16 w-full">
              <img
                src="/Logos/World_Athletics_Continental_Tour_Bronze_Extreme_Horizontal_Full_Colour_DarkBG_CMYK.jpg"
                alt="World Athletics Continental Tour Bronze"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-500">
            &copy; 2026, Förderverein der Leichtathleten von UNION 1861
            Schönebeck e.V.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onImpressum}
              className="font-body text-xs text-gray-500 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-jungle rounded transition-colors duration-200"
            >
              Impressum
            </button>
            <button
              type="button"
              onClick={onDatenschutz}
              className="font-body text-xs text-gray-500 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-jungle rounded transition-colors duration-200"
            >
              Datenschutz
            </button>
            <button
              type="button"
              onClick={onBarrierefreiheit}
              className="font-body text-xs text-gray-500 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-jungle rounded transition-colors duration-200"
            >
              Barrierefreiheit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
