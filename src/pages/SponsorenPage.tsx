import Footer from '../components/Footer';
import { NavPage } from '../components/Navbar';

interface SponsorenPageProps {
  onNavigate?: (page: NavPage) => void;
  onImpressum?: () => void;
  onDatenschutz?: () => void;
}

interface Logo {
  src: string;
  alt: string;
  cls?: string;
  href?: string;
}

const premiumSponsors: Logo[] = [
  { src: '/Logos/spk-logo-mobile.png', alt: 'Salzlandsparkasse', href: 'https://www.salzlandsparkasse.de/de/home.html' },
  { src: '/Logos/Lotto_Sachsen-Anhalt_Sponsor_des_SV-Halle.png', alt: 'Lotto Sachsen-Anhalt', href: 'https://www.lottosachsenanhalt.de/' },
];

const hauptSponsors: Logo[] = [
  { src: '/Logos/ems_logo_mit_claim_4c.jpg', alt: 'EMS', href: 'https://www.e-ms.de/privatkunden' },
];

const coSponsors: Logo[] = [
  { src: '/Logos/swb-logo.png', alt: 'SWB', href: 'https://www.swb-schoenebeck.de/' },
  { src: '/Logos/Humanas-Logo.jpg', alt: 'Humanas', cls: 'h-14 sm:h-16', href: 'https://www.humanas.de/standorte/schoenebeck/' },
  { src: '/Logos/Logo_WBG-Schonebeck_4c.jpg', alt: 'WBG Schönebeck', href: 'https://www.wbgsbk.de/' },
  { src: '/Logos/aft_logo.png', alt: 'AFT', href: 'https://aft-abdichten.de/' },
];

const partnerSoleCup: Logo[] = [
  { src: '/Logos/volksstimme-logo.jpg', alt: 'Volksstimme', cls: 'h-14 sm:h-16', href: 'https://www.volksstimme.de/' },
  { src: '/Logos/duponia-logo.png', alt: 'Duponia', href: 'https://www.duphorn-franke.de/' },
];

const sponsorenFoerderer: Logo[] = [
  { src: '/Logos/AMEOS_Krankenhausgesellschaft_logo.png', alt: 'AMEOS Krankenhausgesellschaft', cls: 'h-10 sm:h-14', href: 'https://www.ameos.de/klinikum-schoenebeck/' },
  { src: '/Logos/druck_werbung_logo.png', alt: 'Druck und Werbung', cls: 'h-10 sm:h-12', href: 'https://www.siebdruck-werbung.de/start.php' },
  { src: '/Logos/BQI-logo.jpg', alt: 'BQI', cls: 'h-12 sm:h-16', href: 'https://bqi-sbk.de/' },
  { src: '/Logos/edeka_logo.png', alt: 'Edeka', cls: 'h-12 sm:h-16', href: 'https://www.edeka.de/maerkte/005618/' },
  { src: '/Logos/2015-EnergySystems-Logo_RGB.jpg', alt: 'Energy Systems', href: 'https://www.es-sbk.de/' },
  { src: '/Logos/IGZ-Logo.png', alt: 'IGZ', cls: 'h-12 sm:h-16', href: 'https://igz-inno-life.de/' },
  { src: '/Logos/KoerperundSeelePhysio.png', alt: 'Körper und Seele Physiotherapie', cls: 'h-10 sm:h-12', href: 'https://koerperundseele-sbk.de/' },
  { src: '/Logos/loebert_security_logo.png', alt: 'Lörbert und Söhne', href: 'https://security-loebert.de/' },
  { src: '/Logos/PGZ-Logo.png', alt: 'PGZ', href: 'https://www.pgz-gmbh.de/' },
  { src: '/Logos/sinatec_logo.png', alt: 'Sinatec', cls: 'h-10 sm:h-12', href: 'https://www.sinatec.de/' },
  { src: '/Logos/srs-logo.jpg', alt: 'SRS', href: 'https://www.srs-sys.de/' },
  { src: '/Logos/werkzeuge_schultze_logo.png', alt: 'Schultze Werkzeuge', href: 'https://werkzeug-schultze.de/' },
];

const DEFAULT_SIZE = 'h-12 sm:h-16';
const LARGE_SIZE = 'h-20 sm:h-24';

interface CategoryTitlePart {
  text: string;
  color: string;
}

function CategoryUnderline() {
  return (
    <div
      className="mt-2 mb-5 bg-gray-900 rounded-sm"
      style={{ width: '80px', height: '3px' }}
    />
  );
}

function LogoItem({ logo, large }: { logo: Logo; large: boolean }) {
  const imgEl = (
    <img
      src={logo.src}
      alt={logo.alt}
      className={`${logo.cls ?? (large ? LARGE_SIZE : DEFAULT_SIZE)} w-auto object-contain transition-opacity duration-200 ${logo.href ? 'group-hover:opacity-80' : ''}`}
      loading="lazy"
    />
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center"
        aria-label={logo.alt}
      >
        {imgEl}
      </a>
    );
  }

  return (
    <div className="flex items-center justify-center">
      {imgEl}
    </div>
  );
}

function SponsorCategory({
  titleParts,
  logos,
  large = false,
}: {
  titleParts: CategoryTitlePart[];
  logos: Logo[];
  large?: boolean;
}) {
  return (
    <div className="mb-10">
      <h3 className="font-heading font-bold text-2xl sm:text-3xl uppercase tracking-wide">
        {titleParts.map((part, i) => (
          <span key={i} className={part.color}>{part.text}</span>
        ))}
      </h3>
      <CategoryUnderline />
      <div className="flex flex-wrap items-center gap-8">
        {logos.map((logo) => (
          <LogoItem key={logo.alt} logo={logo} large={large} />
        ))}
      </div>
    </div>
  );
}

export default function SponsorenPage({ onNavigate, onImpressum, onDatenschutz }: SponsorenPageProps) {
  return (
    <main className="min-h-screen bg-ivory">
      <div className="w-full overflow-hidden">
        <img
          src="/Wrobel-Jubel.jpg"
          alt="SoleCup Sponsoren Hero"
          className="w-full h-64 sm:h-80 lg:h-[420px] object-cover object-top"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide mb-6 leading-tight">
            <span className="text-tangerine">FÖRDERER</span>{' '}
            <span className="text-jungle">VOM SOLECUP</span>
          </h2>
          <div className="max-w-4xl font-body text-gray-700 text-base sm:text-lg leading-relaxed space-y-3 mb-8">
            <p>
              Sie sind genauso sportlich begeistert wie wir? Perfekt! Unterstützen Sie uns und fördern Sie dieses Sport-Event in Ihrer Region. Sie können uns helfen mit zum Beispiel:
            </p>
            <ul className="space-y-1 pl-2">
              <li>– Helfenden Händen</li>
              <li>– Bei der Organisation</li>
              <li>– Mit Geldspenden</li>
              <li>– Oder Sachspenden</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 max-w-md">
            <p className="font-heading font-bold text-gray-900 text-base uppercase tracking-wide mb-3">Unser Spendenkonto lautet:</p>
            <div className="font-body text-gray-700 text-sm sm:text-base space-y-1">
              <p><span className="font-semibold text-gray-900 inline-block w-12">IBAN:</span> DE73 8005 5500 0201 0525 71</p>
              <p><span className="font-semibold text-gray-900 inline-block w-12">BIC:</span> NOLADE21SES</p>
              <p className="pt-1 text-jungle font-medium">Salzlandsparkasse</p>
            </div>
          </div>
          <p className="font-heading text-xl text-gray-800 font-bold mt-6">Wir sagen vielen Dank!</p>
        </div>

        <div className="mb-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start mb-12">
            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-md flex-shrink-0">
              <img
                src="/SoleCup_Werde-Sponsor.jpg"
                alt="Sponsoring beim SoleCup"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide mb-6 leading-tight">
                <span className="text-tangerine block">SPONSORING</span>
                <span className="text-jungle block">BEIM SOLECUP</span>
              </h2>
              <p className="font-body text-gray-700 text-base sm:text-lg leading-relaxed">
                Der SoleCup in Schönebeck ist der sportliche Leuchtturm für den gesamten Salzlandkreis mit jahrelanger Tradition und großem Bekanntheitsgrad! Wir würden uns freuen Sie als Unternehmen aus dem Salzlandkreis als weiteren Sponsor beim Wurfmeeting des Jahres begrüßen zu können!
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-10 space-y-2">
            <SponsorCategory
              titleParts={[
                { text: 'PREMIUM ', color: 'text-tangerine' },
                { text: 'SPONSOREN:', color: 'text-jungle' },
              ]}
              logos={premiumSponsors}
              large
            />
            <div className="border-t border-gray-100 pt-8">
              <SponsorCategory
                titleParts={[
                  { text: 'HAUPT ', color: 'text-tangerine' },
                  { text: 'SPONSOREN:', color: 'text-jungle' },
                ]}
                logos={hauptSponsors}
                large
              />
            </div>
            <div className="border-t border-gray-100 pt-8">
              <SponsorCategory
                titleParts={[
                  { text: 'CO', color: 'text-tangerine' },
                  { text: '-', color: 'text-gray-900' },
                  { text: 'SPONSOREN:', color: 'text-jungle' },
                ]}
                logos={coSponsors}
              />
            </div>
            <div className="border-t border-gray-100 pt-8">
              <SponsorCategory
                titleParts={[
                  { text: 'PARTNER ', color: 'text-tangerine' },
                  { text: 'SOLECUP:', color: 'text-jungle' },
                ]}
                logos={partnerSoleCup}
              />
            </div>
            <div className="border-t border-gray-100 pt-8">
              <SponsorCategory
                titleParts={[
                  { text: 'SPONSOREN ', color: 'text-tangerine' },
                  { text: '& ', color: 'text-gray-900' },
                  { text: 'FÖRDERER:', color: 'text-jungle' },
                ]}
                logos={sponsorenFoerderer}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide mb-8 leading-tight">
            <span className="text-tangerine">REGION</span>{' '}
            <span className="text-jungle">SCHÖNEBECK</span>
          </h2>
          <div className="font-body text-gray-700 text-base sm:text-lg leading-relaxed space-y-5 max-w-4xl">
            <p>
              Die „Salzstadt Schönebeck" wurde im Jahr 1223 erstmals unter ihrem damaligen Namen „Sconebeke" urkundlich erwähnt. Die Stadt liegt unmittelbar vor den Toren der Landeshauptstadt Magdeburg.
            </p>
            <p>
              Als Sportstadt hat die Stadt Schönebeck (Elbe) aktuell 28 Sportvereine, die ein breites Sportangebot für knapp 4.500 Mitglieder anbieten.
            </p>
            <p>
              Mit ihren zahlreichen Wälder und Seen zum Wandern und Radfahren bietet Schönebeck (Elbe) mit 31 Sportplätzen, Sporthallen und anderen Sporträumen gute Bedingungen zum organisierten und selbstbestimmten Sporttreiben.
            </p>
            <p>
              Die wunderschöne Stadt Schönebeck ist seit vielen Jahren Bundesleistungsstützpunkt im Wurfbereich und der Leichtathletikverein Union 1861 Schönebeck e.V. ist seit Jahrzehnten als sehr aktiver Wettkampf-Ausstatter mit einem soliden Kampfrichterstamm bekannt. Außerdem ist die Nähe zum Olympiastützpunkt der Landeshauptstadt Magdeburg perfekt für alle Athleten.
            </p>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} onImpressum={onImpressum} onDatenschutz={onDatenschutz} />
    </main>
  );
}
