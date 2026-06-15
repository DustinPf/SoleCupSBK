/*
  # Harden RLS policies and add atomic rate-limit RPC

  1. Explicit Deny Policies
    - `press_accreditation_rate_limits`: block all access for anon and authenticated.
      Access remains possible via service role only (used by edge function).
    - `accreditation_rate_limits` (legacy, unused): same deny policies to silence
      Supabase security advisor.
    - `press_accreditations`: already allows anon INSERT. Explicitly deny SELECT,
      UPDATE, DELETE for anon and authenticated.
    - `news_articles`: already allows anon SELECT. Explicitly deny INSERT, UPDATE,
      DELETE for anon and authenticated.

  2. New Function
    - `public.consume_press_rate_limit(p_ip_hash text, p_max int, p_window_ms int)`
      - SECURITY DEFINER with fixed `search_path`.
      - Atomically upserts rate-limit row, resets counter when window expired,
        increments otherwise. Returns true if request is allowed, false if over
        limit. Also purges rate-limit rows older than 24 hours.

  3. Important Notes
    1. Deny policies use `USING (false)` / `WITH CHECK (false)` to make intent
       explicit for the Supabase security advisor.
    2. The RPC runs as owner, bypassing RLS on the rate-limit table for its
       single purpose, and is granted only to `service_role` for edge function use.
*/

-- press_accreditation_rate_limits explicit deny policies
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='press_accreditation_rate_limits' AND policyname='Deny all anon access') THEN
    CREATE POLICY "Deny all anon access" ON public.press_accreditation_rate_limits AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='press_accreditation_rate_limits' AND policyname='Deny all authenticated access') THEN
    CREATE POLICY "Deny all authenticated access" ON public.press_accreditation_rate_limits AS RESTRICTIVE FOR ALL TO authenticated USING (false) WITH CHECK (false);
  END IF;
END $$;

-- legacy accreditation_rate_limits: deny all (table unused; kept for safety)
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='accreditation_rate_limits' AND policyname='Deny all anon access') THEN
    CREATE POLICY "Deny all anon access" ON public.accreditation_rate_limits AS RESTRICTIVE FOR ALL TO anon USING (false) WITH CHECK (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='accreditation_rate_limits' AND policyname='Deny all authenticated access') THEN
    CREATE POLICY "Deny all authenticated access" ON public.accreditation_rate_limits AS RESTRICTIVE FOR ALL TO authenticated USING (false) WITH CHECK (false);
  END IF;
END $$;

-- press_accreditations explicit deny for read/update/delete
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='press_accreditations' AND policyname='Deny select to anon') THEN
    CREATE POLICY "Deny select to anon" ON public.press_accreditations AS RESTRICTIVE FOR SELECT TO anon USING (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='press_accreditations' AND policyname='Deny select to authenticated') THEN
    CREATE POLICY "Deny select to authenticated" ON public.press_accreditations AS RESTRICTIVE FOR SELECT TO authenticated USING (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='press_accreditations' AND policyname='Deny update to anon') THEN
    CREATE POLICY "Deny update to anon" ON public.press_accreditations AS RESTRICTIVE FOR UPDATE TO anon USING (false) WITH CHECK (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='press_accreditations' AND policyname='Deny update to authenticated') THEN
    CREATE POLICY "Deny update to authenticated" ON public.press_accreditations AS RESTRICTIVE FOR UPDATE TO authenticated USING (false) WITH CHECK (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='press_accreditations' AND policyname='Deny delete to anon') THEN
    CREATE POLICY "Deny delete to anon" ON public.press_accreditations AS RESTRICTIVE FOR DELETE TO anon USING (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='press_accreditations' AND policyname='Deny delete to authenticated') THEN
    CREATE POLICY "Deny delete to authenticated" ON public.press_accreditations AS RESTRICTIVE FOR DELETE TO authenticated USING (false);
  END IF;
END $$;

-- news_articles explicit deny for write
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='news_articles' AND policyname='Deny insert to anon') THEN
    CREATE POLICY "Deny insert to anon" ON public.news_articles AS RESTRICTIVE FOR INSERT TO anon WITH CHECK (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='news_articles' AND policyname='Deny insert to authenticated') THEN
    CREATE POLICY "Deny insert to authenticated" ON public.news_articles AS RESTRICTIVE FOR INSERT TO authenticated WITH CHECK (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='news_articles' AND policyname='Deny update to anon') THEN
    CREATE POLICY "Deny update to anon" ON public.news_articles AS RESTRICTIVE FOR UPDATE TO anon USING (false) WITH CHECK (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='news_articles' AND policyname='Deny update to authenticated') THEN
    CREATE POLICY "Deny update to authenticated" ON public.news_articles AS RESTRICTIVE FOR UPDATE TO authenticated USING (false) WITH CHECK (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='news_articles' AND policyname='Deny delete to anon') THEN
    CREATE POLICY "Deny delete to anon" ON public.news_articles AS RESTRICTIVE FOR DELETE TO anon USING (false);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='public' AND tablename='news_articles' AND policyname='Deny delete to authenticated') THEN
    CREATE POLICY "Deny delete to authenticated" ON public.news_articles AS RESTRICTIVE FOR DELETE TO authenticated USING (false);
  END IF;
END $$;

-- Atomic rate-limit RPC
CREATE OR REPLACE FUNCTION public.consume_press_rate_limit(
  p_ip_hash text,
  p_max int,
  p_window_ms int
) RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_now timestamptz := now();
  v_cutoff timestamptz := v_now - make_interval(secs => p_window_ms / 1000.0);
  v_allowed boolean;
BEGIN
  DELETE FROM public.press_accreditation_rate_limits
  WHERE updated_at < v_now - interval '24 hours';

  INSERT INTO public.press_accreditation_rate_limits AS rl (ip_hash, window_start, request_count, updated_at)
  VALUES (p_ip_hash, v_now, 1, v_now)
  ON CONFLICT (ip_hash) DO UPDATE
    SET request_count = CASE
        WHEN rl.window_start < v_cutoff THEN 1
        ELSE rl.request_count + 1
      END,
      window_start = CASE
        WHEN rl.window_start < v_cutoff THEN v_now
        ELSE rl.window_start
      END,
      updated_at = v_now
  RETURNING (request_count <= p_max) INTO v_allowed;

  RETURN v_allowed;
END;
$$;

REVOKE ALL ON FUNCTION public.consume_press_rate_limit(text, int, int) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.consume_press_rate_limit(text, int, int) TO service_role;
