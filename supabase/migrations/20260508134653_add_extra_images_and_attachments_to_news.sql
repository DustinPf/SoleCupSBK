/*
  # Add extra images and attachments to news articles

  1. Modified Tables
    - `news_articles`
      - `extra_images` (jsonb) - Array of additional image objects with url and caption
      - `attachments` (jsonb) - Array of attachment objects with url and label (for PDFs etc.)
      - `image_caption` (text) - Caption for the main image

  2. Important Notes
    - Uses IF NOT EXISTS pattern for safety
    - Default values prevent null handling issues
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'news_articles' AND column_name = 'extra_images'
  ) THEN
    ALTER TABLE news_articles ADD COLUMN extra_images jsonb DEFAULT '[]'::jsonb;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'news_articles' AND column_name = 'attachments'
  ) THEN
    ALTER TABLE news_articles ADD COLUMN attachments jsonb DEFAULT '[]'::jsonb;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'news_articles' AND column_name = 'image_caption'
  ) THEN
    ALTER TABLE news_articles ADD COLUMN image_caption text DEFAULT '';
  END IF;
END $$;