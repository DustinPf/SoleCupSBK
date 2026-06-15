/*
  # Create news_articles table

  1. New Tables
    - `news_articles`
      - `id` (uuid, primary key)
      - `title` (text) – headline of the article
      - `source` (text) – publisher / source name (e.g. "Schönebecker Volksstimme")
      - `published_at` (date) – publication date displayed to readers
      - `year` (int4, generated) – derived from published_at for easy year-filtering
      - `body` (text) – full article text (plain paragraphs separated by newlines)
      - `image_url` (text, nullable) – optional cover image
      - `created_at` (timestamptz) – record creation timestamp

  2. Indexes
    - Index on `year` column for fast year-based filtering
    - Index on `published_at DESC` for default sort order

  3. Security
    - RLS enabled; all articles are publicly readable (news is public content)
    - No write access for anonymous/authenticated users via RLS (admin writes via service role)
*/

CREATE TABLE IF NOT EXISTS news_articles (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title        text NOT NULL DEFAULT '',
  source       text NOT NULL DEFAULT '',
  published_at date NOT NULL,
  year         int4 GENERATED ALWAYS AS (EXTRACT(year FROM published_at)::int4) STORED,
  body         text NOT NULL DEFAULT '',
  image_url    text,
  created_at   timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS news_articles_year_idx ON news_articles (year);
CREATE INDEX IF NOT EXISTS news_articles_published_at_idx ON news_articles (published_at DESC);

ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read news articles"
  ON news_articles
  FOR SELECT
  TO anon, authenticated
  USING (true);
