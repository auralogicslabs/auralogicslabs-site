-- =============================================
-- Nexora Engine Portal — Database Schema
-- Run this in Supabase SQL Editor
-- =============================================

-- 1. USERS TABLE
CREATE TABLE IF NOT EXISTS portal_users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  password TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed SuperAdmin
INSERT INTO portal_users (id, email, name, role, password, email_verified, created_at)
VALUES (
  'super-01',
  'admin@auralogicslabs.com',
  'Auralogics SuperAdmin',
  'super_admin',
  'nexora_admin_2026',
  TRUE,
  '2026-01-01T00:00:00Z'
) ON CONFLICT (id) DO NOTHING;

-- 2. CONNECTED SITES TABLE
CREATE TABLE IF NOT EXISTS portal_sites (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES portal_users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  status TEXT DEFAULT 'Healthy',
  is_plugin_active BOOLEAN DEFAULT FALSE,
  environment TEXT DEFAULT 'Production',
  plugin_version TEXT DEFAULT 'Not Detected',
  last_sync TEXT DEFAULT 'Just now',
  token TEXT,
  connected_at TIMESTAMPTZ DEFAULT NOW(),
  metrics JSONB DEFAULT '{"ttfb":"N/A","score":0,"health":0}'
);

-- 3. SUPPORT TICKETS TABLE
CREATE TABLE IF NOT EXISTS portal_tickets (
  id TEXT PRIMARY KEY,
  site_id TEXT,
  site_name TEXT,
  user_id TEXT REFERENCES portal_users(id) ON DELETE SET NULL,
  user_name TEXT,
  user_email TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'Open',
  attachments JSONB DEFAULT '[]',
  replies JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE portal_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE portal_tickets ENABLE ROW LEVEL SECURITY;

-- 5. Policies — Allow all operations via anon key (portal manages its own auth)
CREATE POLICY "Allow all on portal_users" ON portal_users FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on portal_sites" ON portal_sites FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all on portal_tickets" ON portal_tickets FOR ALL USING (true) WITH CHECK (true);
