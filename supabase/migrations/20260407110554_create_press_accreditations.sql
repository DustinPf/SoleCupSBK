/*
  # Create press_accreditations table

  1. New Tables
    - `press_accreditations`
      - `id` (uuid, primary key)
      - `institution` (text, optional)
      - `name` (text, required)
      - `street` (text, required)
      - `city` (text, required)
      - `zip` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `media` (text[], required - list of selected media types)
      - `press_card` (text, required - 'Ja' or 'Nein')
      - `count` (integer, required - number of press representatives)
      - `notes` (text, optional)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS
    - Allow anonymous INSERT (public form submission)
    - No SELECT policy for public (admin access only via service role)
*/

CREATE TABLE IF NOT EXISTS press_accreditations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution text DEFAULT '',
  name text NOT NULL,
  street text NOT NULL,
  city text NOT NULL,
  zip text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  media text[] NOT NULL DEFAULT '{}',
  press_card text NOT NULL,
  count integer NOT NULL DEFAULT 1,
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE press_accreditations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit press accreditation"
  ON press_accreditations
  FOR INSERT
  TO anon
  WITH CHECK (true);
