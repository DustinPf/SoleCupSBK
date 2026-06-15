import { useState, useEffect } from 'react';
import Navbar, { NavPage } from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Retrospective from './components/Retrospective';
import Sponsor from './components/Sponsor';
import CallToAction from './components/CallToAction';
import GalleryPage from './components/GalleryPage';
import PandemicPage from './components/PandemicPage';
import RetrospektivePage from './components/RetrospektivePage';
import Footer from './components/Footer';
import UeberUnsPage from './pages/UeberUnsPage';
import WettbewerbePage from './pages/WettbewerbePage';
import HauptwettbewerbePage from './pages/HauptwettbewerbePage';
import NachwuchswettbewerbePage from './pages/NachwuchswettbewerbePage';
import StadtwerkeCupPage from './pages/StadtwerkeCupPage';
import AftCupPage from './pages/AftCupPage';
import SponsorenPage from './pages/SponsorenPage';
import TicketsPage from './pages/TicketsPage';
import PressePage from './pages/PressePage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import BarrierefreiheitPage from './pages/BarrierefreiheitPage';
import NewsPage from './pages/NewsPage';

type View =
  | { type: 'home' }
  | { type: 'gallery'; year: number }
  | { type: 'pandemic'; year: number }
  | { type: 'retro'; year: number }
  | { type: 'page'; page: NavPage }
  | { type: 'impressum' }
  | { type: 'datenschutz' }
  | { type: 'barrierefreiheit' };

const PAGE_PATHS: Record<NavPage, string> = {
  'ueber-uns': '/ueber-uns',
  'aktuelles': '/aktuelles',
  'news': '/aktuelles/news',
  'wettbewerbe': '/wettbewerbe',
  'hauptwettbewerbe': '/wettbewerbe/hauptwettbewerbe',
  'nachwuchswettbewerbe': '/wettbewerbe/nachwuchswettbewerbe',
  'stadtwerke-cup': '/wettbewerbe/stadtwerke-cup',
  'aft-cup': '/wettbewerbe/aft-cup',
  'sponsoren': '/sponsoren',
  'tickets': '/tickets',
  'presse': '/presse',
};

function pathToView(path: string): View {
  if (path === '/' || path === '') return { type: 'home' };
  if (path === '/impressum') return { type: 'impressum' };
  if (path === '/datenschutz') return { type: 'datenschutz' };
  if (path === '/barrierefreiheit') return { type: 'barrierefreiheit' };

  const galleryMatch = path.match(/^\/galerie\/(\d{4})$/);
  if (galleryMatch) return { type: 'gallery', year: parseInt(galleryMatch[1]) };

  const pandemicMatch = path.match(/^\/pandemie\/(\d{4})$/);
  if (pandemicMatch) return { type: 'pandemic', year: parseInt(pandemicMatch[1]) };

  const retroMatch = path.match(/^\/rueckblick\/(\d{4})$/);
  if (retroMatch) return { type: 'retro', year: parseInt(retroMatch[1]) };

  for (const [page, pagePath] of Object.entries(PAGE_PATHS)) {
    if (path === pagePath) return { type: 'page', page: page as NavPage };
  }

  return { type: 'home' };
}

function viewToPath(view: View): string {
  switch (view.type) {
    case 'home': return '/';
    case 'gallery': return `/galerie/${view.year}`;
    case 'pandemic': return `/pandemie/${view.year}`;
    case 'retro': return `/rueckblick/${view.year}`;
    case 'page': return PAGE_PATHS[view.page];
    case 'impressum': return '/impressum';
    case 'datenschutz': return '/datenschutz';
    case 'barrierefreiheit': return '/barrierefreiheit';
  }
}

function App() {
  const [view, setView] = useState<View>(() => pathToView(window.location.pathname));

  const navigate = (nextView: View) => {
    const path = viewToPath(nextView);
    window.history.pushState(null, '', path);
    setView(nextView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onPop = () => {
      setView(pathToView(window.location.pathname));
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const goHome = () => navigate({ type: 'home' });
  const openGallery = (year: number) => navigate({ type: 'gallery', year });
  const openPandemic = (year: number) => navigate({ type: 'pandemic', year });
  const openRetro = (year: number) => navigate({ type: 'retro', year });
  const openImpressum = () => navigate({ type: 'impressum' });
  const openDatenschutz = () => navigate({ type: 'datenschutz' });
  const openBarrierefreiheit = () => navigate({ type: 'barrierefreiheit' });
  const navigatePage = (page: NavPage) => navigate({ type: 'page', page });

  const activePage = view.type === 'page' ? view.page : null;

  const renderPage = (page: NavPage) => {
    switch (page) {
      case 'ueber-uns': return <UeberUnsPage />;
      case 'aktuelles': return <NewsPage />;
      case 'news': return <NewsPage />;
      case 'wettbewerbe': return <WettbewerbePage />;
      case 'hauptwettbewerbe': return <HauptwettbewerbePage />;
      case 'nachwuchswettbewerbe': return <NachwuchswettbewerbePage />;
      case 'stadtwerke-cup': return <StadtwerkeCupPage />;
      case 'aft-cup': return <AftCupPage />;
      case 'sponsoren': return <SponsorenPage onNavigate={navigatePage} onImpressum={openImpressum} onDatenschutz={openDatenschutz} />;
      case 'tickets': return <TicketsPage />;
      case 'presse': return <PressePage />;
    }
  };

  const skipLink = (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:bg-white focus:text-jungle focus:font-heading focus:font-bold focus:px-4 focus:py-2 focus:rounded focus:shadow-lg"
    >
      Zum Hauptinhalt springen
    </a>
  );

  if (view.type === 'impressum') {
    return (
      <>
        {skipLink}
        <Navbar onHome={goHome} onNavigate={navigatePage} activePage={null} />
        <main id="main-content">
          <ImpressumPage />
        </main>
        <Footer onImpressum={openImpressum} onDatenschutz={openDatenschutz} onBarrierefreiheit={openBarrierefreiheit} onNavigate={navigatePage} />
      </>
    );
  }

  if (view.type === 'datenschutz') {
    return (
      <>
        {skipLink}
        <Navbar onHome={goHome} onNavigate={navigatePage} activePage={null} />
        <main id="main-content">
          <DatenschutzPage />
        </main>
        <Footer onImpressum={openImpressum} onDatenschutz={openDatenschutz} onBarrierefreiheit={openBarrierefreiheit} onNavigate={navigatePage} />
      </>
    );
  }

  if (view.type === 'barrierefreiheit') {
    return (
      <>
        {skipLink}
        <Navbar onHome={goHome} onNavigate={navigatePage} activePage={null} />
        <main id="main-content">
          <BarrierefreiheitPage />
        </main>
        <Footer onImpressum={openImpressum} onDatenschutz={openDatenschutz} onBarrierefreiheit={openBarrierefreiheit} onNavigate={navigatePage} />
      </>
    );
  }

  if (view.type === 'gallery') {
    return (
      <>
        {skipLink}
        <Navbar onHome={goHome} onNavigate={navigatePage} activePage={null} />
        <main id="main-content">
          <GalleryPage year={view.year} onBack={goHome} />
        </main>
        <Footer onImpressum={openImpressum} onDatenschutz={openDatenschutz} onBarrierefreiheit={openBarrierefreiheit} onNavigate={navigatePage} />
      </>
    );
  }

  if (view.type === 'pandemic') {
    return (
      <>
        {skipLink}
        <Navbar onHome={goHome} onNavigate={navigatePage} activePage={null} />
        <main id="main-content">
          <PandemicPage year={view.year} onBack={goHome} />
        </main>
        <Footer onImpressum={openImpressum} onDatenschutz={openDatenschutz} onBarrierefreiheit={openBarrierefreiheit} onNavigate={navigatePage} />
      </>
    );
  }

  if (view.type === 'retro') {
    return (
      <>
        {skipLink}
        <Navbar onHome={goHome} onNavigate={navigatePage} activePage={null} />
        <main id="main-content">
          <RetrospektivePage year={view.year} onBack={goHome} />
        </main>
        <Footer onImpressum={openImpressum} onDatenschutz={openDatenschutz} onBarrierefreiheit={openBarrierefreiheit} onNavigate={navigatePage} />
      </>
    );
  }

  if (view.type === 'page') {
    return (
      <>
        {skipLink}
        <Navbar onHome={goHome} onNavigate={navigatePage} activePage={activePage} />
        <main id="main-content">
          {renderPage(view.page)}
        </main>
        <Footer onImpressum={openImpressum} onDatenschutz={openDatenschutz} onBarrierefreiheit={openBarrierefreiheit} onNavigate={navigatePage} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      {skipLink}
      <Navbar onHome={goHome} onNavigate={navigatePage} activePage={null} />
      <main id="main-content">
        <Hero />
        <Gallery onOpenGallery={openGallery} onOpenPandemic={openPandemic} />
        <Retrospective onOpenRetro={openRetro} />
        <Sponsor />
        <CallToAction />
      </main>
      <Footer onImpressum={openImpressum} onDatenschutz={openDatenschutz} onBarrierefreiheit={openBarrierefreiheit} onNavigate={navigatePage} />
    </div>
  );
}

export default App;
