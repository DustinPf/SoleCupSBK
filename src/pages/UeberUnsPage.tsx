import { MapPin, Navigation, Hotel, Phone, Mail, Globe, BookText } from 'lucide-react';
import SponsorLogos from '../components/SponsorLogos';

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-ivory pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-black uppercase tracking-wide mb-2">
          Über uns
        </h1>
        <div className="w-40 h-1 bg-tangerine rounded-full mb-12" />

        <div className="space-y-20">

          <section>
            <div className="flex items-end gap-3 mb-6">
              <BookText className="w-6 h-6 text-tangerine shrink-0 mb-0.5" />
              <div>
                <p className="font-heading font-bold text-sm text-jungle uppercase tracking-widest mb-0.5">Geschichte</p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 uppercase tracking-wide">
                  Schönebecker SoleCup &ndash; Seit 2005
                </h2>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-4">
              <p className="font-body text-gray-700 leading-relaxed">
                Der Schönebecker SoleCup präsentiert jedes Jahr die nationale und internationale Wurfelite. Als Spezialmeeting für alle Wurfdisziplinen fand der SoleCup erstmals 2005 statt. Seither hat sich das Meeting unter dem Motto „Spitzensport hautnah und kompakt" zu einem bedeutenden Normwettkampf für das DLV-Wurfteam entwickelt.
              </p>
              <p className="font-body text-gray-700 leading-relaxed">
                Jahr für Jahr stellen die Werfer in Schönebeck neue Bestleistungen auf und belohnen das begeisterte Publikum im Stadion mit Weltklasseweiten. Die Nachwuchswettbewerbe runden das Veranstaltungsangebot des Schönebecker SoleCup ab und haben Tradition.
              </p>
            </div>
          </section>

          <section>
            <div className="flex items-end gap-3 mb-6">
              <MapPin className="w-6 h-6 text-tangerine shrink-0 mb-0.5" />
              <div>
                <p className="font-heading font-bold text-sm text-jungle uppercase tracking-wide tracking-widest mb-0.5">Wettkampfstätte</p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 uppercase tracking-wide">
                  Stadtwerke Sportpark Schönebeck
                </h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
              <div>
                <p className="font-body text-gray-700 leading-relaxed">
                  Das Stadion wurde 1998/1999 grundlegend rekonstruiert. Eine Leichtathletik-Arena-400m-Rundlaufbahn (Kampfbahn Typ B), die vollständig wettkampffähig ist, ist dort ebenso zu finden, wie ein mittig gelegenes Rasenfußballfeld sowie Wurf- und Sprunganlagen. Vorhanden sind weitere Fußballfelder.
                </p>
                <p className="font-body text-gray-700 leading-relaxed mt-4">
                  Ergänzt wurde das Ensemble mit einem in Eigeninitiative der Abteilung Leichtathletik und mit Unterstützung deren Sponsoren geschaffenen Wurfplatz, der internationale Ansprüche erfüllt. Für die Disziplinen Kugel, Diskus und Hammer sind hier optimale Bedingungen vorzufinden, ebenso für das Speerwerfen im Stadion. Im Rahmen der Anerkennung des Weltrekordes im Diskuswerfen der U20 männlich, mit 71,37 m am 10.06.2022 erzielt durch Mika Sosna (TSG Bergedorf), wurde durch World Athletics die Korrektheit des Wurfplatzes bestätigt.
                </p>
                <p className="font-body text-gray-700 leading-relaxed mt-4">
                  Das Stadion ist in der <strong>Stadionstraße</strong> in 39218 Schönebeck zu finden. Zentral gelegen und mit zahlreichen Parkmöglichkeiten in der Umgebung bietet es für Zuschauer*innen, die mit dem PKW anreisen, gute Voraussetzungen.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-heading font-bold text-base text-jungle uppercase tracking-wide mb-3">Adresse</h4>
                <address className="font-body text-gray-700 not-italic leading-relaxed">
                  Stadtwerke Sportpark Schönebeck<br />
                  Stadionstraße (Postadresse: Magdeburger Straße 176)<br />
                  39218 Schönebeck (Elbe)
                </address>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Navigation className="w-4 h-4 text-tangerine shrink-0" />
                  <h4 className="font-heading font-bold text-base text-jungle uppercase tracking-wide">Anfahrt mit dem Auto</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-heading font-bold text-sm text-gray-500 uppercase tracking-wide mb-1">Aus Richtung A14</p>
                    <ul className="font-body text-gray-700 leading-relaxed space-y-1 list-none">
                      <li className="flex gap-2">
                        <span className="text-gray-900 shrink-0">-</span>
                        B246a Richtung Schönebeck, erste große Kreuzung <strong>links in Richtung Bad Salzelmen</strong> und zur Magdeburger Straße
                      </li>
                      <li className="flex gap-2">
                        <span className="text-gray-900 shrink-0">-</span>
                        Stadion liegt auf der rechten Seite (auf Höhe des Friedhofes), <strong>Zugang/Zufahrt über die an der dortigen Ampel nach rechts verlaufende Stadionstraße</strong>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-gray-500 uppercase tracking-wide mb-1">Aus Richtung Magdeburg</p>
                    <ul className="font-body text-gray-700 leading-relaxed space-y-1 list-none">
                      <li className="flex gap-2">
                        <span className="text-gray-900 shrink-0">-</span>
                        Magdeburger Straße Richtung <strong>Bad Salzelmen</strong> (beide Kreisverkehr geradeaus)
                      </li>
                      <li className="flex gap-2">
                        <span className="text-gray-900 shrink-0">-</span>
                        Stadion liegt auf der linken Seite (auf Höhe des Friedhofes), <strong>Zugang/Zufahrt über die an der dortigen Ampel nach links verlaufende Stadionstraße</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-end gap-3 mb-6">
              <Hotel className="w-6 h-6 text-tangerine shrink-0 mb-0.5" />
              <div>
                <p className="font-heading font-bold text-sm text-jungle uppercase tracking-wide tracking-widest mb-0.5">Unterkunft</p>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-gray-900 uppercase tracking-wide">
                  Hotel Domicil Schönebeck
                </h2>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
              <p className="font-body text-gray-700 leading-relaxed">
                Das Hotel Domicil Schönebeck, zentral zwischen Elbufer und Kurpark Bad Salzelmen gelegen, ist nur 15 Autominuten vom Flughafen Magdeburg und dem Zentrum der Landeshauptstadt sowie 45 Autominuten vom Flughafen Halle/Leipzig entfernt. Sie erreichen uns bequem über die A2, Autobahnkreuz Magdeburg-West, und die A14, Abfahrt Schönebeck.
              </p>
              <p className="font-body text-gray-700 leading-relaxed">
                In Schönebeck folgen Sie einfach der Ausschilderung des Hotelwegweisers. Bahnreisenden Starter*innen bieten wir einen kostenlosen Shuttle-Service vom Bahnhof Schönebeck.
              </p>

              <div className="border-t border-gray-100 pt-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-bold text-base text-jungle uppercase tracking-wide mb-3">Adresse</h4>
                  <address className="font-body text-gray-700 not-italic leading-relaxed">
                    Hotel Domicil Schönebeck<br />
                    Friedrichstraße 98a<br />
                    39218 Schönebeck
                  </address>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-jungle uppercase tracking-wide mb-3">Kontakt</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-body text-gray-700">
                      <Phone className="w-4 h-4 text-tangerine shrink-0" />
                      <span>03928 / 7123</span>
                    </div>
                    <div className="flex items-center gap-2 font-body text-gray-700">
                      <Mail className="w-4 h-4 text-tangerine shrink-0" />
                      <span>info@hotel-domicil-schoenebeck.de</span>
                    </div>
                    <div className="flex items-center gap-2 font-body text-gray-700">
                      <Globe className="w-4 h-4 text-tangerine shrink-0" />
                      <span>www.hotel-domicil-schoenebeck.de</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
      <div className="mt-16">
        <SponsorLogos />
      </div>
    </main>
  );
}
