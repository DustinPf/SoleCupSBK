/*
  # Lock down public schema access for anon and authenticated

  1. Removed Permissive Policies
    - Drop the always-true `INSERT` policy on `press_accreditations`. The press
      form now submits via the `send-press-accreditation` edge function which
      uses the service role.
    - Drop the public read policy on `news_articles`. News articles are now
      served via the `get-news-articles` edge function.

  2. Revoked Grants
    - Revoke ALL privileges on `press_accreditations`,
      `press_accreditation_rate_limits`, and `news_articles` from the `anon`
      and `authenticated` roles. Service-role access remains for the edge
      functions.
    - Revoke EXECUTE on `consume_press_rate_limit` from PUBLIC, anon and
      authenticated.

  3. Dropped Object
    - Drop legacy unused table `accreditation_rate_limits`.

  4. Important Notes
    1. After this migration, no client may call any of these tables directly
       via PostgREST or GraphQL. All access must go through the edge functions.
    2. RLS deny policies remain as defense-in-depth.
*/

-- Drop legacy table
DROP TABLE IF EXISTS public.accreditation_rate_limits;

-- Drop permissive policies
DROP POLICY IF EXISTS "Anyone can submit press accreditation" ON public.press_accreditations;
DROP POLICY IF EXISTS "news_articles_select_public" ON public.news_articles;

-- Revoke grants from anon and authenticated
REVOKE ALL ON TABLE public.press_accreditations FROM anon, authenticated;
REVOKE ALL ON TABLE public.press_accreditation_rate_limits FROM anon, authenticated;
REVOKE ALL ON TABLE public.news_articles FROM anon, authenticated;

-- Revoke RPC execute from PUBLIC and roles (service_role retains access)
REVOKE EXECUTE ON FUNCTION public.consume_press_rate_limit(text, int, int) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.consume_press_rate_limit(text, int, int) FROM anon;
REVOKE EXECUTE ON FUNCTION public.consume_press_rate_limit(text, int, int) FROM authenticated;
