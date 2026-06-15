import { useState, useEffect } from 'react';
import { Calendar, Newspaper, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SponsorLogos from '../components/SponsorLogos';

interface ExtraImage {
  url: string;
  caption?: string;
}

interface Attachment {
  url: string;
  label: string;
}

interface NewsArticle {
  id: string;
  title: string;
  source: string;
  published_at: string;
  year: number;
  body: string;
  image_url: string | null;
  image_caption: string | null;
  extra_images: ExtraImage[] | null;
  attachments: Attachment[] | null;
}

const YEARS = [2026, 2025, 2024, 2023, 2022];

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
}

function ArticleCard({ article }: { article: NewsArticle }) {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = article.body.split(/\n+/).filter(Boolean);
  const preview = paragraphs.slice(0, 3);
  const rest = paragraphs.slice(3);
  const extraImages = article.extra_images ?? [];
  const attachments = article.attachments ?? [];

  return (
    <article
      className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      aria-labelledby={`news-title-${article.id}`}
    >
      {article.image_url && (
        <figure className="m-0">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={article.image_url}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {article.image_caption && (
            <figcaption className="px-8 sm:px-12 pt-4 text-sm font-body text-gray-500 italic">
              {article.image_caption}
            </figcaption>
          )}
        </figure>
      )}

      <div className="px-8 py-12 sm:px-12 sm:py-16">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="inline-flex items-center gap-2 text-sm font-body font-semibold text-tangerine bg-tangerine/10 px-4 py-2 rounded-full">
            <Newspaper className="w-4 h-4" aria-hidden="true" />
            {article.source}
          </span>
          <time
            dateTime={article.published_at}
            className="inline-flex items-center gap-2 text-sm font-body text-gray-500"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            {formatDate(article.published_at)}
          </time>
        </div>

        <h2
          id={`news-title-${article.id}`}
          className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 uppercase tracking-wide mb-8 leading-[1.65]"
        >
          {article.title}
        </h2>

        <div className="font-body text-gray-700 text-lg leading-relaxed space-y-6">
          {preview.map((p, i) => (
            <p key={i}>
              {p}
            </p>
          ))}

          {rest.length > 0 && (
            <>
              <div
                className={`space-y-6 overflow-hidden transition-all duration-500 ${
                  expanded ? 'max-h-[9999px]' : 'max-h-0'
                }`}
                aria-hidden={!expanded}
              >
                {rest.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                aria-controls={`article-body-${article.id}`}
                className="inline-flex items-center gap-2 mt-4 text-jungle font-body font-semibold text-base hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-jungle focus-visible:ring-offset-2 rounded transition-colors duration-200"
              >
                {expanded ? (
                  <>
                    Weniger lesen
                    <ChevronUp className="w-5 h-5" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Weiterlesen
                    <ChevronDown className="w-5 h-5" aria-hidden="true" />
                  </>
                )}
              </button>
            </>
          )}
        </div>

        {extraImages.length > 0 && (
          <div className={`mt-8 gap-4 ${extraImages.length >= 2 ? 'grid grid-cols-1 sm:grid-cols-2' : ''}`}>
            {extraImages.map((img, i) => (
              <figure key={i} className="m-0">
                <div className="rounded-xl overflow-hidden">
                  <img src={img.url} alt="" className="w-full h-auto object-cover" />
                </div>
                {img.caption && (
                  <figcaption className="mt-2 text-sm font-body text-gray-500 italic">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        {attachments.length > 0 && (
          <div className="mt-8 space-y-3">
            {attachments.map((att, i) => (
              <a
                key={i}
                href={att.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-jungle/5 border border-jungle/20 text-jungle font-body font-semibold text-sm hover:bg-jungle/10 transition-colors duration-200 mr-3"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                {att.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function NewsPage() {
  const [activeYear, setActiveYear] = useState<number>(2025);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [yearCounts, setYearCounts] = useState<Record<number, number>>({});

  useEffect(() => {
    async function fetchCounts() {
      const { data } = await supabase
        .from('news_articles')
        .select('year');
      if (data) {
        const counts: Record<number, number> = {};
        data.forEach(({ year }) => {
          counts[year] = (counts[year] ?? 0) + 1;
        });
        setYearCounts(counts);
        const latest = YEARS.find((y) => (counts[y] ?? 0) > 0);
        if (latest) setActiveYear(latest);
      }
    }
    fetchCounts();
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(null);
    supabase
      .from('news_articles')
      .select('*')
      .eq('year', activeYear)
      .order('published_at', { ascending: false })
      .then(({ data, error: err }) => {
        if (err) {
          setError('Artikel konnten nicht geladen werden.');
        } else {
          setArticles(data ?? []);
        }
        setLoading(false);
      });
  }, [activeYear]);

  return (
    <main className="min-h-screen bg-ivory pt-24 pb-16" id="main-content">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-heading text-sm font-bold text-tangerine uppercase tracking-widest mb-1">
          Aktuelles
        </p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 uppercase tracking-wide mb-2">
          News
        </h1>
        <div className="w-20 h-1 bg-jungle rounded-full mb-10" />

        {/* Year tabs */}
        <nav aria-label="Nach Jahr filtern" className="mb-10">
          <ul className="flex flex-wrap gap-2" role="list">
            {YEARS.map((year) => {
              const count = yearCounts[year] ?? 0;
              const isActive = year === activeYear;
              return (
                <li key={year}>
                  <button
                    type="button"
                    onClick={() => setActiveYear(year)}
                    aria-pressed={isActive}
                    aria-label={`${year}${count > 0 ? `, ${count} Artikel` : ', keine Artikel'}`}
                    className={`relative px-5 py-2 rounded-full font-heading font-bold text-sm uppercase tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-jungle focus-visible:ring-offset-2 ${
                      isActive
                        ? 'bg-jungle text-white shadow-md'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-jungle hover:text-jungle'
                    }`}
                  >
                    {year}
                    {count > 0 && (
                      <span
                        className={`ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                        }`}
                        aria-hidden="true"
                      >
                        {count}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Articles */}
        <section aria-live="polite" aria-busy={loading}>
          {loading && (
            <div className="flex justify-center items-center py-24">
              <span className="sr-only">Artikel werden geladen…</span>
              <div
                className="w-10 h-10 border-4 border-jungle border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
              />
            </div>
          )}

          {error && !loading && (
            <p role="alert" className="font-body text-tangerine text-base py-12 text-center">
              {error}
            </p>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-24">
              <Newspaper
                className="w-12 h-12 text-gray-300 mx-auto mb-4"
                aria-hidden="true"
              />
              <p className="font-heading font-bold text-xl text-gray-400 uppercase tracking-wide">
                Keine Artikel für {activeYear}
              </p>
              <p className="font-body text-gray-400 text-sm mt-2">
                Noch keine Neuigkeiten in diesem Jahr veröffentlicht.
              </p>
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <div className="space-y-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </div>

      <div className="mt-20">
        <SponsorLogos />
      </div>
    </main>
  );
}
