import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const MEDIUM_OPTIONS = ['Print', 'Radio', 'TV', 'Foto', 'Agentur'];
const RECIPIENT = 'hans.weber@union1861.de';

interface FormData {
  institution: string;
  name: string;
  street: string;
  city: string;
  zip: string;
  email: string;
  phone: string;
  media: string[];
  pressCard: string;
  count: string;
  notes: string;
  consent: boolean;
}

const initialData: FormData = {
  institution: '',
  name: '',
  street: '',
  city: '',
  zip: '',
  email: '',
  phone: '',
  media: [],
  pressCard: '',
  count: '',
  notes: '',
  consent: false,
};

function buildMailBody(form: FormData): string {
  return [
    'Anmeldung zur Presseakkreditierung',
    '',
    `Presseinstitution: ${form.institution || '-'}`,
    `Name: ${form.name}`,
    `Straße, Nummer: ${form.street}`,
    `Stadt: ${form.city}`,
    `Postleitzahl: ${form.zip}`,
    `E-Mail-Adresse: ${form.email}`,
    `Telefon/Mobil: ${form.phone}`,
    `Medium: ${form.media.join(', ') || '-'}`,
    `Presseausweis vorhanden: ${form.pressCard}`,
    `Anzahl Pressevertreter: ${form.count}`,
    `Notizen: ${form.notes || '-'}`,
    `Einwilligung zur Datenverarbeitung: ${form.consent ? 'Ja' : 'Nein'}`,
  ].join('\n');
}

export default function PressAccreditationForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [opened, setOpened] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const missingFields: string[] = [];
  if (!form.name.trim()) missingFields.push('Name');
  if (!form.street.trim()) missingFields.push('Straße, Nummer');
  if (!form.city.trim()) missingFields.push('Stadt');
  if (!form.zip.trim()) missingFields.push('Postleitzahl');
  if (!form.email.trim()) missingFields.push('E-Mail-Adresse');
  if (!form.phone.trim()) missingFields.push('Telefon/Mobil');
  if (form.media.length === 0) missingFields.push('Medium');
  if (!form.pressCard) missingFields.push('Presseausweis vorhanden?');
  if (!form.count.trim()) missingFields.push('Anzahl Pressevertreter');
  if (!form.consent) missingFields.push('Einwilligung zur Datenverarbeitung');

  const isValid = missingFields.length === 0;

  const handleText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleMedium = (value: string) => {
    setForm((prev) => ({
      ...prev,
      media: prev.media.includes(value)
        ? prev.media.filter((m) => m !== value)
        : [...prev.media, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isValid) return;

    const subject = encodeURIComponent('Anmeldung zur Presseakkreditierung');
    const body = encodeURIComponent(buildMailBody(form));
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  const inputClass =
    'w-full px-4 py-2.5 border border-gray-300 rounded-lg font-body text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jungle/40 focus:border-jungle transition-colors duration-150 bg-white';

  return (
    <section className="mt-12">
      <h2 className="font-heading font-bold text-2xl text-tangerine uppercase tracking-wide mb-1">
        Anmeldung zur Presseakkreditierung
      </h2>
      <p className="font-body text-gray-600 mb-1">
        Die Akkreditierung der Pressevertreter erfolgt über das folgende Kontaktformular. Beim Absenden wird Ihr E-Mail-Programm mit einer vorbereiteten Nachricht an {RECIPIENT} geöffnet.
      </p>
      <p className="font-body text-sm text-gray-500 mb-6">* Pflichtfelder</p>

      {opened && (
        <div role="alert" className="flex items-start gap-3 bg-green-50 border border-green-200 text-green-800 rounded-lg px-5 py-4 mb-6 font-body">
          <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold">Ihr E-Mail-Programm wurde geöffnet.</p>
            <p className="text-sm mt-1">
              Bitte senden Sie die vorbereitete E-Mail an {RECIPIENT} ab. Sollte sich kein Programm geöffnet haben, schreiben Sie uns bitte direkt an diese Adresse.
            </p>
          </div>
        </div>
      )}

      {submitted && !isValid && (
        <div role="alert" className="flex items-start gap-3 bg-amber-50 border border-amber-300 text-amber-900 rounded-lg px-5 py-4 mb-6 font-body">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-semibold mb-1">Bitte füllen Sie alle Pflichtfelder aus:</p>
            <ul className="list-disc list-inside space-y-0.5 text-sm">
              {missingFields.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="institution" className="block font-body text-sm font-medium text-gray-700 mb-1">
            Presseinstitution
          </label>
          <input
            id="institution"
            type="text"
            name="institution"
            value={form.institution}
            onChange={handleText}
            placeholder="Presseinstitution"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="name" className="block font-body text-sm font-medium text-gray-700 mb-1">
            Name <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleText}
            placeholder="Name"
            required
            aria-required="true"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="street" className="block font-body text-sm font-medium text-gray-700 mb-1">
            Straße, Nummer <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span>
          </label>
          <input
            id="street"
            type="text"
            name="street"
            value={form.street}
            onChange={handleText}
            placeholder="Straße, Nummer"
            required
            aria-required="true"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="city" className="block font-body text-sm font-medium text-gray-700 mb-1">
              Stadt <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span>
            </label>
            <input
              id="city"
              type="text"
              name="city"
              value={form.city}
              onChange={handleText}
              placeholder="Stadt"
              required
              aria-required="true"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="zip" className="block font-body text-sm font-medium text-gray-700 mb-1">
              Postleitzahl <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span>
            </label>
            <input
              id="zip"
              type="text"
              name="zip"
              value={form.zip}
              onChange={handleText}
              placeholder="Postleitzahl"
              required
              aria-required="true"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block font-body text-sm font-medium text-gray-700 mb-1">
            E-Mail-Adresse <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleText}
            placeholder="E-Mail-Adresse"
            required
            aria-required="true"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-body text-sm font-medium text-gray-700 mb-1">
            Telefon/Mobil <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleText}
            placeholder="Telefon/Mobil"
            required
            aria-required="true"
            className={inputClass}
          />
        </div>

        <fieldset aria-required="true">
          <legend className="font-body text-gray-700 font-medium mb-3">
            Medium <span className="text-gray-500 font-normal">(Mehrfachauswahl möglich)</span> <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span>
          </legend>
          <div className="flex flex-wrap gap-3">
            {MEDIUM_OPTIONS.map((opt) => {
              const checked = form.media.includes(opt);
              return (
                <label
                  key={opt}
                  className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border font-body text-sm transition-all duration-150 select-none ${
                    checked
                      ? 'bg-jungle text-white border-jungle'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-jungle'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={checked}
                    onChange={() => toggleMedium(opt)}
                  />
                  {opt}
                </label>
              );
            })}
          </div>
        </fieldset>

        <fieldset aria-required="true">
          <legend className="font-body text-gray-700 font-medium mb-3">
            Presseausweis vorhanden? <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span>
          </legend>
          <div className="flex gap-6">
            {['Ja', 'Nein'].map((opt) => (
              <label key={opt} className="flex items-center gap-2 cursor-pointer font-body text-gray-700 select-none">
                <input
                  type="radio"
                  name="pressCard"
                  value={opt}
                  checked={form.pressCard === opt}
                  onChange={() => setForm((prev) => ({ ...prev, pressCard: opt }))}
                  required
                  className="w-4 h-4 accent-jungle"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="count" className="block font-body text-sm font-medium text-gray-700 mb-1">
            Anzahl Pressevertreter <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span>
          </label>
          <input
            id="count"
            type="number"
            name="count"
            value={form.count}
            onChange={handleText}
            placeholder="Anzahl Pressevertreter"
            required
            aria-required="true"
            min="1"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="notes" className="block font-body text-sm font-medium text-gray-700 mb-1">
            Notizen
          </label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleText}
            placeholder="Notizen"
            rows={4}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className={`flex items-start gap-3 p-4 rounded-lg border transition-colors duration-150 ${
          submitted && !form.consent ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-gray-50'
        }`}>
          <input
            id="consent"
            type="checkbox"
            checked={form.consent}
            onChange={(e) => setForm((prev) => ({ ...prev, consent: e.target.checked }))}
            className="mt-0.5 w-4 h-4 accent-jungle shrink-0 cursor-pointer"
          />
          <label htmlFor="consent" className="font-body text-sm text-gray-700 cursor-pointer leading-relaxed">
            Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung der Akkreditierungsanfrage elektronisch erhoben und gespeichert werden. <span aria-hidden="true">*</span>
          </label>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-jungle text-white font-heading font-bold uppercase tracking-wide px-8 py-3 rounded-lg hover:bg-jungle/90 transition-colors duration-200"
        >
          <Send className="w-4 h-4" />
          E-Mail vorbereiten
        </button>
      </form>
    </section>
  );
}
