import { useState, useEffect, useRef } from 'react';
import { Menu, X, Facebook, Instagram, Radio, Timer, ChevronDown } from 'lucide-react';

export type NavPage = 'ueber-uns' | 'aktuelles' | 'news' | 'wettbewerbe' | 'hauptwettbewerbe' | 'nachwuchswettbewerbe' | 'stadtwerke-cup' | 'aft-cup' | 'sponsoren' | 'tickets' | 'presse';

const navLinks: { label: string; page: NavPage; dropdown?: { label: string; page: NavPage; external?: boolean; href?: string }[] }[] = [
  { label: 'Über uns', page: 'ueber-uns' },
  {
    label: 'Aktuelles', page: 'aktuelles', dropdown: [
      { label: 'Zeitplan', page: 'aktuelles', href: '/Zeitplan-2026.pdf' },
      { label: 'Timetable', page: 'aktuelles', href: '/Timetable-2026.pdf' },
      { label: 'Ausschreibung', page: 'aktuelles', href: '/SoleCup-Ausschreibung-deutsch.pdf' },
      { label: 'Announcement', page: 'aktuelles', href: '/SoleCup-Ausschreibung-englisch-final.pdf' },
      { label: 'News', page: 'news' },
      { label: 'Presse', page: 'presse' },
    ]
  },
  {
    label: 'Wettbewerbe', page: 'wettbewerbe', dropdown: [
      { label: 'Hauptwettbewerbe', page: 'hauptwettbewerbe' },
      { label: 'Nachwuchswettbewerbe', page: 'nachwuchswettbewerbe' },
      { label: 'Stadtwerke Schönebeck Zuschauer-Cup', page: 'stadtwerke-cup' },
      { label: 'AFT Zuschauer-Cup', page: 'aft-cup' },
    ]
  },
  { label: 'Sponsoren', page: 'sponsoren' },
  { label: 'Tickets', page: 'tickets' },
];

interface NavbarProps {
  onHome?: () => void;
  onNavigate?: (page: NavPage) => void;
  activePage?: NavPage | null;
}

export default function Navbar({ onHome, onNavigate, activePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<NavPage | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<NavPage | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isAktuellesActive = activePage === 'aktuelles' || activePage === 'news' || activePage === 'presse';
  const isWettbewerbeActive = activePage === 'wettbewerbe' || activePage === 'hauptwettbewerbe' || activePage === 'nachwuchswettbewerbe' || activePage === 'stadtwerke-cup' || activePage === 'aft-cup';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-jungle transition-shadow duration-300 overflow-visible ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          <a
            href={onHome ? undefined : '/'}
            onClick={onHome ? (e) => { e.preventDefault(); onHome(); } : undefined}
            className="relative z-50 flex items-center h-full shrink-0 cursor-pointer"
          >
            <img
              src="/Logos/SoleCup/SoleCup.png"
              alt="SoleCup Logo"
              className="h-[9.5rem] sm:h-[10rem] md:h-[11rem] lg:h-[12rem] xl:h-[13rem] w-auto drop-shadow-lg"
            />
          </a>

          <div className="hidden lg:flex items-center justify-center flex-1" ref={dropdownRef}>
            <div className="flex items-center gap-7">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  const isActive = link.page === 'aktuelles' ? isAktuellesActive : link.page === 'wettbewerbe' ? isWettbewerbeActive : activePage === link.page;
                  return (
                    <div key={link.page} className="relative">
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.page ? null : link.page)}
                        aria-expanded={openDropdown === link.page}
                        aria-haspopup="true"
                        className={`flex items-center gap-1 text-white/90 hover:text-white font-heading font-bold text-base tracking-wide uppercase transition-all duration-200 hover:underline underline-offset-4 decoration-2 ${isActive ? 'underline text-white' : ''}`}
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.page ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>

                      <div
                        role="menu"
                        aria-label={link.label}
                        className={`absolute top-full left-0 mt-3 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top ${link.page === 'wettbewerbe' ? 'w-72' : link.page === 'aktuelles' ? 'w-52' : 'w-44'} ${
                          openDropdown === link.page ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
                        }`}
                      >
                        {link.dropdown.map((item) => (
                          item.href ? (
                            <a
                              key={item.label}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              role="menuitem"
                              onClick={() => {
                                setOpenDropdown(null);
                                setIsOpen(false);
                              }}
                              className="block w-full text-left px-5 py-3 font-heading font-bold text-sm uppercase tracking-wide transition-colors duration-150 border-b border-gray-100 last:border-0 text-gray-700 hover:bg-jungle/5 hover:text-jungle"
                            >
                              {item.label}
                            </a>
                          ) : (
                            <button
                              key={item.page}
                              role="menuitem"
                              onClick={() => {
                                onNavigate?.(item.page);
                                setOpenDropdown(null);
                                setIsOpen(false);
                              }}
                              className={`w-full text-left px-5 py-3 font-heading font-bold text-sm uppercase tracking-wide transition-colors duration-150 border-b border-gray-100 last:border-0 ${
                                activePage === item.page
                                  ? 'bg-jungle/10 text-jungle'
                                  : 'text-gray-700 hover:bg-jungle/5 hover:text-jungle'
                              }`}
                            >
                              {item.label}
                            </button>
                          )
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={link.page}
                    onClick={() => { onNavigate?.(link.page); setIsOpen(false); setOpenDropdown(null); }}
                    className={`text-white/90 hover:text-white font-heading font-bold text-base tracking-wide uppercase transition-all duration-200 hover:underline underline-offset-4 decoration-2 ${activePage === link.page ? 'underline text-white' : ''}`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href="https://ergebnisse.leichtathletik.de/Competitions/Details/19776"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/100 hover:text-white text-xs font-heading font-semibold uppercase tracking-wide transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              <Radio className="w-3.5 h-3.5" />
              Livestream
            </a>
            <a
              href="https://www.cosa-software.de/Veranstaltungen/2025012/"
              className="flex items-center gap-1.5 text-white/100 hover:text-white text-xs font-heading font-semibold uppercase tracking-wide transition-all duration-200 hover:underline underline-offset-4 decoration-2"
            >
              <Timer className="w-3.5 h-3.5" />
              Ergebnis-Ticker
            </a>

            <div className="w-px h-5 bg-white/20 mx-1" />

            <img
              src="/Logos/Contitnental_Tour-2026.png"
              alt="World Athletics A World Ranking Competition"
              className="h-8 w-auto"
            />

            <div className="w-px h-5 bg-white/20 mx-1" />

            <a
              href="https://www.facebook.com/SchoenebeckerSoleCup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.instagram.com/unionsolecup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 -mr-2 ml-auto"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pb-6 pt-2 space-y-1 bg-jungle border-t border-white/10">
          {navLinks.map((link) => {
            if (link.dropdown) {
              const isActive = link.page === 'aktuelles' ? isAktuellesActive : link.page === 'wettbewerbe' ? isWettbewerbeActive : activePage === link.page;
              return (
                <div key={link.page}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === link.page ? null : link.page)}
                    aria-expanded={mobileExpanded === link.page}
                    aria-haspopup="true"
                    className={`w-full text-left flex items-center justify-between py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-heading font-bold text-base tracking-wide uppercase transition-all duration-200 ${isActive ? 'text-white bg-white/10' : ''}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === link.page ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === link.page ? 'max-h-80' : 'max-h-0'}`}>
                    {link.dropdown.map((item) => (
                      item.href ? (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                          className="w-full text-left block py-2.5 px-8 text-white/80 hover:text-white hover:bg-white/10 rounded-lg font-heading font-semibold text-sm tracking-wide uppercase transition-all duration-200"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <button
                          key={item.page}
                          onClick={() => { onNavigate?.(item.page); setIsOpen(false); setMobileExpanded(null); }}
                          className={`w-full text-left block py-2.5 px-8 text-white/80 hover:text-white hover:bg-white/10 rounded-lg font-heading font-semibold text-sm tracking-wide uppercase transition-all duration-200 ${activePage === item.page ? 'text-white bg-white/10' : ''}`}
                        >
                          {item.label}
                        </button>
                      )
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.page}
                onClick={() => { onNavigate?.(link.page); setIsOpen(false); }}
                className={`w-full text-left block py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-heading font-bold text-base tracking-wide uppercase transition-all duration-200 hover:underline underline-offset-4 decoration-2 ${activePage === link.page ? 'underline text-white bg-white/10' : ''}`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="border-t border-white/10 mt-3 pt-3 space-y-1">
            <a
              href="https://ergebnisse.leichtathletik.de/Competitions/Details/19776"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-heading font-semibold text-sm uppercase tracking-wide transition-all duration-200"
            >
              <Radio className="w-4 h-4" />
              Livestream
            </a>
            <a
              href="#ergebnis-ticker"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-3 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg font-heading font-semibold text-sm uppercase tracking-wide transition-all duration-200"
            >
              <Timer className="w-4 h-4" />
              Ergebnis-Ticker
            </a>
          </div>

          <div className="border-t border-white/10 mt-3 pt-3 flex items-center gap-4 px-4">
            <a
              href="https://www.facebook.com/SchoenebeckerSoleCup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/unionsolecup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-black/20 z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
