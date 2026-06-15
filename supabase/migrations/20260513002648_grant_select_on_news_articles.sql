/*
  # Restore public read access for news_articles

  1. Changes
    - GRANT SELECT on `news_articles` to `anon` and `authenticated`
    - The previous lockdown migration revoked all grants, which prevented the
      website from displaying any news articles even though the RLS SELECT
      policy allows reading.

  2. Security
    - RLS remains enabled with the existing policy "Anyone can read news articles"
      restricting access to SELECT only.
    - INSERT/UPDATE/DELETE remain blocked by deny policies AND missing privileges,
      so this change only enables reading.
*/

GRANT SELECT ON public.news_articles TO anon, authenticated;
