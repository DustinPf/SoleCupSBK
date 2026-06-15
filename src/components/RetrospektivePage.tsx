import { ArrowLeft, History } from 'lucide-react';
import ImageSlider from './ImageSlider';

interface RetrospektivePageProps {
  year: number;
  onBack: () => void;
}

const retroContent: Record<number, { lead: string; body: React.ReactNode }> = {
  2018: {
    lead: 'Auch wenn die Temperaturen …',
    body: (
      <>
        <p>… am Freitag zum 13. SoleCup mit knapp 16 Grad zu Wünschen übrig ließen, lieferten die Athleten dennoch starke Ergebnisse.</p>
        <p>Die 1.600 Zuschauer im Stadion an der Magdeburger Straße sahen insgesamt 12 Normerfüllungen der DLV-Kaderathleten. Den Auftakt machte im Diskuswurf der Männer das Siegertrio um Christoph Harting (67,59m), Martin Wierig (66,98m) und David Wrobel (65,98m). Alle drei Werfer freuten sich über einen sehr gelungenen Saisoneinstieg. Auch die Frauen zogen im Anschluss nach. Siegerin Claudine Vita bewies erneut ihre gute Form und verdrängte mit 63,92m Anna Rüh (60,65m) und Nadine Müller (60,44m) auf die Plätze.</p>
        <p>Im Speerwurf der Männer glückte Johannes Vetter (86,96m) im Duell mit Thomas Röhler die Revanche für den Ausgang beim Diamond League Meeting in Doha. Beide zeigten einen souveränen Wettkampf in Schönebeck und überboten mehrfach den bisher gültigen Meetingrekord von Matthias de Zordo aus dem Jahr 2010 von 84,38m.</p>
        <p>Zeitgleich mit dem Speerwerfren lief auch der Hammerwurfwettbewerb der Frauen. Hier meldete sich Kathrin Klaas zum Saisonstart mit 70,38m eindrucksvoll im Wettkampfgeschehen zurück. Anschließend verkündete sie im Gespräch mit der Presse, dass nach der Saison und der Heim-EM in Berlin für sie wohl Schluss sein wird.</p>
        <p>Zu später Stunde und durch Leuchtballons in Szene gesetzt, fanden die Kugelstoßwettkämpfe statt. Die Besucher, die sich um den Kugelstoßring versammelt hatten, bejubelten starke Siegerweiten ihrer Favoriten David Storl (21,10m) und Christina Schwanitz (19,13m). Mit den Leistungen setzten beide einen ersten guten Wert für die laufende Saison und auf dem Weg zur Heim-WM. Den möchte auch Sara Gambetta antreten und bestätigte mit 18,08m nach ihrem Sieg im Vorjahr erneut ihre Stellung in der deutschen Kugelstoß-Konkurrenz.</p>
      </>
    ),
  },
  2017: {
    lead: 'Zum Schönebecker SoleCup …',
    body: (
      <>
        <p>… am vergangenen Freitag präsentierten sich die Athleten wiedermal in Topform. Mit zahlreichen Normweiten und einem neuen Meetingrekord fällt die Bilanz mehr als positiv aus.</p>
        <p>Für den Höhepunkt sorgten am späten Abend die Kugelstoßer. Angeheizt vom begeisterten Publikum stiegen zu erst die Frauen und im Anschluss die Männer in den Ring. Als Neuerung für die Kugelstoßer fand der Wettkampf erstmals unter Kunstlicht statt. Dafür erhellten vier Leuchtballons die Anlage im Stadion an der Magdeburger Straße.</p>
        <p>Der Wettkampf der Frauen gestaltete sich zunächst offen, bis Sara Gambetta (SC DHfK Leipzig) im fünften Versuch erstmals der Stoß über 18 Meter gelang. Damit sicherte sie sich neben dem Tagessieg, als erste DLV-Kugelstoßerin auch die WM-Norm für London.</p>
        <p>Für den glänzenden Abschluss sorgte Tomás Stanek aus Tschechien. Erstmals knackte der tschechische Kugelstoßer in Schönebeck die 22-Meter-Marke. Mit 22,01m im vierten Versuch darf sich Tomás Stanek gleich doppelt in die Rekordlisten eintragen, denn neben dem neuen Meetingrekord bedeutet die Weite auch Landesrekord in Tschechien. Auch der zweitplatzierte David Storl (SC DHfK Leipzig) durfte mit seiner Leistung zufrieden sein. Erstmals in dieser Saison übertraf der Sachse zum SoleCup die 21 Meter und zeigte damit seine ansteigende Form.</p>
        <p>Ausgeglichene Wettbewerbe sahen die Besucher zuvor bereits im Diskuswurf. Im Wettbewerb der Frauen setzte sich Nadine Müller (SV Halle) mit 64,31m durch vor Claudine Vita (SC Neubrandenburg) und Shanice Craft (MTG Mannheim). Die Drittplatzierte, die in Schönebeck ihren Saisoneinstieg gab, erfüllte wie bereits die fünf weiteren deutschen Topwerferinnen die WM-Norm. Den Diskuswurf der Männer entschied nach 2011, 2012 und 2015 erneut Lokalmatador Martin Wierig (SC Magdeburg) mit 63,97m für sich. Dahinter ging Platz zwei an Markus Münch (SC Potsdam) und Platz drei an David Wrobel (SC Magdeburg).</p>
      </>
    ),
  },
  2016: {
    lead: 'Besucherrekord beim SoleCup',
    body: (
      <>
        <p>Vor begeisterter Kulisse und mit neuem Besucherrekord wurden die deutschen Olympiateilnehmer feierlich nach Rio de Janeiro verabschiedet. 2.000 Zuschauer erlebten am 29. Juli 2016 die Wurfwettkämpfe beim Schönebecker SoleCup hautnah im Stadion. Bei ihrem letzten Leistungstest eine Woche vor der Eröffnungsfeier der Olympischen Spiele präsentierten sich die Athleten in Topform.</p>
        <p>Eröffnet wurde der SoleCup von den Diskuswerfern. Als Weltranglistendritter der Saison demonstrierte Robert Harting sein Können und sicherte sich mit 66,95m im letzten Versuch den Sieg. Dahinter behauptete Daniel Jasinski mit 64,40m den zweiten Platz vor dem Magdeburger Martin Wierig.</p>
        <p>In Olympiaform präsentierte sich Diskuswerferin Julia Fischer vom SCC Berlin. Mit dem zweitbesten Wurf ihrer Karriere auf 67,47m war sie an diesem Tag unschlagbar. Auch wenn ihr die Weltmeisterin von 2009, Dani Samuels aus Australien, mit ihrem letzten Wurf auf 67,02m nochmal gefährlich nah kam. Nadine Müller vom SV Halle, die sich auf Platz drei hinter der Australierin einreihte, stellte mit 66,84m ihre Jahresbestleistung auf.</p>
        <p>Mit allen fünf nominierten DLV-Werfern am Start, zeigte sich der Kugelstoßwettbewerb hochklassig besetzt. Auch in diesem Jahr gewann Europameister David Storl den Wettkampf der Männer und unterstrich mit 21,23m seine ansteigende Formkurve nach Verletzungssorgen zu Saisonbeginn. Tobias Dahm vom VfL Sindelfingen wurde wie im Vorjahr Zweiter vor Dennis Lewke vom SC Magdeburg.</p>
        <p>Im Kugelstoßen der Frauen traf das deutsche Trio zum SoleCup auf Vizeweltmeisterin Lijiao Gong und ihre Trainingspartnerin Yang Gao aus China. Welt- und Europameisterin Christina Schwanitz legte stark vor, wurde aber letztlich von Lijiao Gong mit 19,73m um knappe zwei Zentimeter geschlagen. Dritte wurde Yang Gao aus China mit 18,73m.</p>
        <p>Zum Abschluss des SoleCup zeigten sich die Hammerwerfer in Schönebeck. In ihrer letzten Saison ließ Betty Heidler den Hammer nochmal auf starke 73,21m fliegen. Damit siegte sie deutlich vor ihren Vereinskolleginnen von der LG Eintracht Frankfurt Kathrin Klaas und Carolin Paesler.</p>
        <p>Im Hammerwerfen der Männer wiederholte Tristan Schwandke vom TV Hindelang seinen Vorjahressieg. Mit 68,39m setzte er gleich im ersten Versuch die Tagesbestweite. An diese Weite kam auch der Leverkusener Paul Hützen nicht mehr ran und musste sich als Zweiter geschlagen geben. Platz drei belegte der Münchner Simon Lang.</p>
        <p>Alle Resultate und Weiten können über die Ergebnisliste eingesehen werden:</p>
        <p>
          <a
            href="/2016-07-29-Erg_SoleCup.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jungle hover:text-jungle/80 font-semibold underline underline-offset-2 transition-colors duration-200"
          >
            &raquo; Ergebnisse SoleCup 2016
          </a>
        </p>
      </>
    ),
  },
  2015: {
    lead: 'Der SoleCup am 26. Juli 2015…',
    body: (
      <>
        <p>… war für die Organisatoren, Helfer, Sponsoren sowie die Stadt und den Landkreis eine besondere Veranstaltung. Seit 10 Jahren findet das Wurfmeeting in Schönebeck nun statt und Jahr für Jahr zeigen die besten deutschen Werfer hier ihr Leistungsvermögen in besonderer Atmosphäre. In diesem Jahr sogar mit neuem Besucherrekord. 1.800 Zuschauer und Gäste haben die Wettbewerbe hautnah im Stadion miterlebt und begeistert verfolgt. Belohnt wurden Sie dafür mit zahlreichen Bestleistungen, zehn Normerfüllungen für die Weltmeisterschaft Ende August und einem neuen beeindruckenden Meetingrekord im Kugelstoßen durch David Storl.</p>
        <p>Den Auftakt beim 10. Jubiläum machte die Männerkonkurrenz im Hammerwurf. In besonders guter Form zeigte sich Tristan Schwandke vom TV Hindelang. Mit 69,12m setzte er sich vor Sven Möhsner und Paul Hützen vom TSV Bayer 04 Leverkusen durch.</p>
        <p>Erstmals seit 2011 zeigten sich beim SoleCup auch wieder die Speerwerfer. Andreas Hofmann von der MTG 1899 Mannheim setzte im entscheidenden 6. Wurf mit 83,27m nicht nur die Siegerweite, sondern übertraf gleichzeitig auch die vom DLV gesetzte WM-Norm.</p>
        <p>Für Lokalmatador Martin Wierig stand beim SoleCup ebenfalls noch die Normerfüllung für die WM auf dem Plan. Gleich im 1. Versuch gelang dem Diskusass ein deutlicher Wurf über die geforderten 65,00m, die er im weiteren Verlauf des Wettkampfs auch mit einer stabilen Serie und seiner Siegerweite von 65,94m bestätigte. Im Kugelstoßen der Frauen entwickelte sich ein spannender Zweikampf zwischen der WM-Dritten aus China, Lijiao Gong und Europameisterin Christina Schwanitz. Mit einer makellosen Serie über 20-Meter bewies Schwanitz erneut Ihre Weltklasse und schlug die Chinesin mit einer Siegerweite von 20,36m.</p>
        <p>Im Diskuswurf der Frauen zeigten sich bis auf Nadine Müller alle aktuellen Kaderathletinnen des DLV in Schönebeck. Mit einer Topweite von 65,09m setzte Julia Fischer vom SCC Berlin bereits im ersten Versuch die Tagesbestweite. Sie siegte vor der Neubrandenburgerin Anna Rüh und der Drittplatzierten Kristin Pudenz vom SC Potsdam.</p>
        <p>Für besondere Spannung im Kugelstoßen der Männer sorgte erneut Welt- und Europameister David Storl. Im Vorjahr kratzte er mit 21,90m knapp an der 22-Meter-Marke. Mit herausragenden 21,94m überbot er auch 2015 seine Bestmarke aus dem Vorjahr und stellte einen neuen Meetingrekord auf.</p>
        <p>Die Hammerwerferinnen durften den SoleCup 2015 mit ihrem Wettkampf beschließen. Als klare Favoritin siegte Deutschlands Rekordhalterin Betty Heidler mit einer starken Weite von 75,41m.</p>
        <p>Alle Resultate und Weiten können über die Ergebnisliste eingesehen werden:</p>
        <p>
          <a
            href="/Ergebnis_SoleCup2015.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jungle hover:text-jungle/80 font-semibold underline underline-offset-2 transition-colors duration-200"
          >
            &raquo;&raquo; Ergebnisse SoleCup 2015
          </a>
        </p>
      </>
    ),
  },
  2014: {
    lead: 'Der 9. Schönebecker SoleCup',
    body: (
      <>
        <p>… war wieder ein voller Erfolg. Über 1.000 Zuschauer waren hautnah mit dabei als David Storl die Kugel auf eine neue persönliche Bestweite von 21,90 Metern wuchtete. Damit setzte er, aus vollem Training kommend, nicht nur einen neuen beeindruckenden Meetingrekord, sondern auch das zweitbeste Ergebnis in der Liste der Weltjahresbestleistungen.</p>
        <p>Die ganz besondere Atmosphäre bei den Wettbewerben in Schönebeck treibt die Athleten immer wieder zu Topleistungen an. Auch Robert Harting konnte seine gute Form und die Leistung von der Team-EM in Braunschweig bestätigen. Mit einer Weite von 67,29 Metern beendete der Berliner den Diskus-Wettbewerb als Sieger vor Lokalmatador und Deutschlands Nummer zwei Martin Wierig und Markus Münch vom SC Potsdam.</p>
        <p>In den weiteren Disziplinen konnten ebenfalls Favoritensiege erzielt werden. Im Hammerwurf setzten sich demnach Alexander Ziegler und Kathrin Klaas durch und im Diskus der Frauen die deutsche Nummer eins Nadine Müller. Beim Kugelstoßen der Frauen siegte die Weltranglisten-Dritte Lijao Gong aus China.</p>
        <p>Alle Resultate und Weiten können über die Ergebnisliste eingesehen werden:</p>
        <p>
          <a
            href="/Ergebnisliste_SoleCup2014.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jungle hover:text-jungle/80 font-semibold underline underline-offset-2 transition-colors duration-200"
          >
            &raquo;&raquo; Ergebnisse SoleCup 2014
          </a>
        </p>
        <p>Wie in den letzten Jahren bereits erprobt, konnten auch in diesem Jahr wieder die Besucher selbst zur Kugel greifen. Erstmals seit der Zuschauerwettbewerb als Städtevergleichskampf stattfindet, konnten die Schönebecker in diesem Jahr den Wettbewerb für sich entscheiden. Die Besucher und Helfer des SoleCup haben mit einer Gesamtweite der Top 100 von 962,44 m die Köstritzer um ganze 60 m überboten.</p>
        <p>Aber nicht nur sportlich ging es zum SoleCup in Schönebeck zu. Auch ein großes zusätzliches Angebot und neue moderne Geräte unterhielten und begeisterten die zahlreichen Zuschauer. Wie bereits zum Febro Schlagball-Cup kam auch an diesem Tag wieder die mit Kamera ausgestattete Drohne von Christian Dobisch zum Einsatz. Während und auch nach den Wettkämpfen wurden so spannende Aufnahmen aus der Vogelperspektive erzielt.</p>
        <p>Als weiteres Gimmick gab es in diesem Jahr auch einen kleinen technischen Helfer in Form eines ferngesteuerten Modelautos, das die Disken von Robert Harting, Nadine Müller und Co wieder zum Ring zurückbrachte.</p>
        <p>Daneben gab es noch weitere Aktionen wie das Zuschauerquiz des Reisebüros MeineReiseoase bei dem zwei Reisegutscheine verlost wurden oder auch die Tombola zum Erhalt der Laufbahn im Stadion. Jan Kralitschka, der Bachelor aus der gleichnamigen Fernseh-Show und Original-Schönebecker, hat dabei einen ordentlichen Job gemacht und viele Lose an die Besucher verkauft. Die konnten damit zum einen etwas Gutes tun und sicherten sich zum anderen eine Chance auf die attraktiven Preise im Gesamtwert von über 10.000&nbsp;€. Die wurden nämlich am Abend bei der After-Sports Party von Radio Brocken On Tour gezogen und an die Gewinner ausgeteilt. Noch lange nach den Wettbewerben versammelten sich die Gäste der Veranstaltung vor der Radio Brocken Bühne und ließen gemeinsam mit Moderator Holger Tapper und zu Klängen der Coverbands RadioNation und SpiceParade den Abend in bester Stimmung ausklingen.</p>
      </>
    ),
  },
};

export default function RetrospektivePage({ year, onBack }: RetrospektivePageProps) {
  const content = retroContent[year];

  return (
    <div className="min-h-screen bg-ivory">
      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-jungle hover:text-jungle/80 font-heading font-bold uppercase tracking-wide transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            Zurück
          </button>

          <div className="flex items-center gap-3 mb-2">
            <History className="w-6 h-6 text-jungle" />
            <p className="font-heading font-bold text-sm text-jungle uppercase tracking-widest">Rückblick</p>
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-gray-900 uppercase tracking-wide mb-10">
            SoleCup {year}
          </h1>

          {content && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-2">
              <p className="font-heading font-bold text-xl sm:text-2xl text-tangerine mb-6">
                {content.lead}
              </p>
              <div className="font-body text-gray-700 leading-relaxed space-y-4">
                {content.body}
              </div>
            </div>
          )}

          <ImageSlider year={year} />
        </div>
      </div>
    </div>
  );
}
