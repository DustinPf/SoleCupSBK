export default function Sponsor() {
  return (
    <section id="sponsoren" className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl shadow-md">
            <img
              src="/Wrobel-Jubel.jpg"
              alt="SoleCup Sponsoring"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-2/5">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-tangerine uppercase tracking-wide mb-6">
              Werden Sie Sponsor vom SoleCup
            </h2>
            <p className="font-body text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Unterstützen Sie das traditionsreiche Wurfmeeting in Schönebeck
              und profitieren Sie von einer starken Partnerschaft mit
              regionaler und überregionaler Sichtbarkeit. Gemeinsam fördern
              wir den Leichtathletik-Nachwuchs und begeistern tausende
              Zuschauer.
            </p>
            <button
              className="relative px-8 py-3.5 rounded-full text-white font-heading text-lg tracking-wide uppercase shadow-lg hover:shadow-xl overflow-hidden"
              style={{
                background: 'linear-gradient(120deg, #14A14A 50%, #E3230C 50%)',
              }}
            >
              <span
                className="absolute -inset-x-[30%] inset-y-0 bg-jungle translate-x-[-120%] skew-x-[-30deg] hover-target transition-transform duration-500 ease-out"
                aria-hidden="true"
              />
              <span className="relative z-10">Sponsor werden</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
