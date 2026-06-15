const sponsorRow1 = [
  { src: '/Logos/spk-logo-mobile.png', alt: 'Sparkasse' },
  { src: '/Logos/Lotto_Sachsen-Anhalt_Sponsor_des_SV-Halle.png', alt: 'Lotto Sachsen-Anhalt' },
  { src: '/Logos/ems_logo_mit_claim_4c.jpg', alt: 'EMS' },
];

const sponsorRow2 = [
  { src: '/Logos/Humanas-Logo.jpg', alt: 'Humanas' },
  { src: '/Logos/swb-logo.png', alt: 'SWB' },
  { src: '/Logos/Logo_WBG-Schonebeck_4c.jpg', alt: 'WBG Schönebeck' },
  { src: '/Logos/aft_logo.png', alt: 'AFT' },
];

export default function SponsorLogos() {
  return (
    <section className="py-10 md:py-14 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
          {sponsorRow1.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {sponsorRow2.map((logo) => (
            <div key={logo.alt} className="flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
