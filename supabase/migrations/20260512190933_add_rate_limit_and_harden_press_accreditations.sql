/*
  # Add rate limiting for press accreditation submissions

  1. New Tables
    - `press_accreditation_rate_limits`
      - `ip_hash` (text, primary key) – SHA-256 hash of the client IP
      - `window_start` (timestamptz) – start of the current sliding window
      - `request_count` (int) – number of requests in the window
      - `updated_at` (timestamptz) – last update timestamp

  2. Security
    - RLS enabled
    - No anon/authenticated access – only the edge function (service role) can read/write
    - No policies added, which means RLS denies all access by default

  3. Important Notes
    1. The edge function uses the service role internally, which bypasses RLS.
    2. Storing only a hash of the IP preserves privacy while still allowing rate limiting.
*/

CREATE TABLE IF NOT EXISTS press_accreditation_rate_limits (
  ip_hash       text PRIMARY KEY,
  window_start  timestamptz NOT NULL DEFAULT now(),
  request_count int NOT NULL DEFAULT 0,
  updated_at    timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE press_accreditation_rate_limits ENABLE ROW LEVEL SECURITY;
