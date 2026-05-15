"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'agency' | 'super_admin';
  isDemo?: boolean;
  createdAt: string;
  emailVerified: boolean;
  password?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, secret: string) => Promise<boolean>;
  signup: (email: string, name: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  verifyEmail: (email: string) => void;
  isDemoMode: boolean;
  allUsers: User[];
  refreshUsers: () => void;
  pendingSite: { url: string; name: string; token?: string } | null;
  setPendingSite: (site: { url: string; name: string; token?: string } | null) => void;
  adminAddUser: (data: { email: string; name: string; role: User['role']; emailVerified?: boolean; password?: string }) => Promise<{ success: boolean; error?: string }>;
  updateUser: (userId: string, updates: Partial<User>) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_KEY = 'ncx_auth_session';

export const SUPER_ADMIN: User = {
  id: 'super-01',
  email: 'admin@auralogicslabs.com',
  name: 'Auralogics SuperAdmin',
  role: 'super_admin',
  createdAt: '2026-01-01T00:00:00.000Z',
  emailVerified: true,
};

// ── Supabase helpers ───────────────────────────────────────────────────────

function dbToUser(row: Record<string, unknown>): User {
  return {
    id:            row.id as string,
    email:         row.email as string,
    name:          row.name as string,
    role:          row.role as User['role'],
    createdAt:     (row.created_at as string) || new Date().toISOString(),
    emailVerified: (row.email_verified as boolean) ?? false,
    password:      row.password as string | undefined,
  };
}

async function fetchAllUsers(): Promise<User[]> {
  const { data, error } = await supabase.from('portal_users').select('*').order('created_at', { ascending: true });
  if (error) { console.error('Supabase fetchAllUsers error:', error.message); return []; }
  return (data || []).map(dbToUser);
}

// ── Provider ───────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser]         = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [pendingSite, setPendingSiteState] = useState<{ url: string; name: string; token?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // ── Init: recover session from localStorage, load all users from Supabase
  useEffect(() => {
    const init = async () => {
      // 1. Recover local session
      let localUser: User | null = null;
      try {
        const raw = localStorage.getItem(SESSION_KEY);
        if (raw) localUser = JSON.parse(raw) as User;
      } catch {
        localStorage.removeItem(SESSION_KEY);
      }

      // 2. Load all users from cloud
      const users = await fetchAllUsers();
      setAllUsers(users);

      // 3. Verify session against cloud database
      if (localUser && !localUser.isDemo) {
        const exists = users.find(u => u.id === localUser?.id);
        
        // SuperAdmin hardcode exception
        const isHardcodedSuper = localUser.email === SUPER_ADMIN.email;

        if (!exists && !isHardcodedSuper) {
          console.warn("Session invalid: User no longer exists in database. Logging out...");
          setUser(null);
          localStorage.removeItem(SESSION_KEY);
        } else {
          setUser(localUser);
        }
      } else if (localUser?.isDemo) {
        setUser(localUser);
      }

      setIsLoading(false);
    };
    init();
  }, []);

  const refreshUsers = useCallback(async () => {
    const users = await fetchAllUsers();
    setAllUsers(users);
  }, []);

  // ── Login ────────────────────────────────────────────────────────────────

  const login = useCallback(async (email: string, secret: string): Promise<boolean> => {
    setIsLoading(true);

    // Super Admin shortcut
    if (email === SUPER_ADMIN.email && secret === 'nexora_admin_2026') {
      setUser(SUPER_ADMIN);
      localStorage.setItem(SESSION_KEY, JSON.stringify(SUPER_ADMIN));
      setIsLoading(false);
      return true;
    }

    // Demo mode
    if (email.toLowerCase() === 'demo' && secret.toLowerCase() === 'demo') {
      const demo: User = {
        id: 'demo-01', email: 'demo@auralogicslabs.com', name: 'Nexora Demo',
        role: 'admin', isDemo: true, createdAt: new Date().toISOString(), emailVerified: true,
      };
      setUser(demo);
      localStorage.setItem(SESSION_KEY, JSON.stringify(demo));
      setIsLoading(false);
      return true;
    }

    // Check Supabase
    const { data, error } = await supabase
      .from('portal_users')
      .select('*')
      .eq('email', email)
      .eq('password', secret)
      .single();

    if (error || !data) {
      setIsLoading(false);
      return false;
    }

    const found = dbToUser(data);
    setUser(found);
    localStorage.setItem(SESSION_KEY, JSON.stringify(found));
    setIsLoading(false);
    return true;
  }, []);

  // ── Signup ───────────────────────────────────────────────────────────────

  const signup = useCallback(async (
    email: string, name: string, password: string
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);

    // Check if already exists
    const { data: existing } = await supabase
      .from('portal_users')
      .select('id')
      .eq('email', email)
      .maybeSingle();

    if (existing) {
      setIsLoading(false);
      return { success: false, error: 'An account with this email already exists.' };
    }

    const newUser: Record<string, unknown> = {
      id:             `usr-${Math.random().toString(36).substr(2, 8)}`,
      email,
      name,
      role:           'admin',
      password,
      email_verified: false,
      created_at:     new Date().toISOString(),
    };

    const { error } = await supabase.from('portal_users').insert(newUser);
    if (error) {
      console.error('Supabase signup error:', error.message);
      setIsLoading(false);
      return { success: false, error: error.message };
    }

    const created = dbToUser(newUser);
    setUser(created);
    localStorage.setItem(SESSION_KEY, JSON.stringify(created));
    await refreshUsers();
    setIsLoading(false);
    return { success: true };
  }, [refreshUsers]);

  // ── Verify Email ─────────────────────────────────────────────────────────

  const verifyEmail = useCallback(async (email: string) => {
    setIsLoading(true);
    await supabase.from('portal_users').update({ email_verified: true }).eq('email', email);
    
    const { data } = await supabase.from('portal_users').select('*').eq('email', email).maybeSingle();
    if (data) {
      const verified = dbToUser(data);
      setUser(verified);
      localStorage.setItem(SESSION_KEY, JSON.stringify(verified));
    }
    await refreshUsers();
    setIsLoading(false);
  }, [refreshUsers]);

  // ── Logout ───────────────────────────────────────────────────────────────

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
    router.push('/portal');
  }, [router]);

  // ── Admin CRUD ───────────────────────────────────────────────────────────

  const adminAddUser = useCallback(async (data: {
    email: string; name: string; role: User['role']; emailVerified?: boolean; password?: string;
  }): Promise<{ success: boolean; error?: string }> => {
    const { data: existing } = await supabase
      .from('portal_users')
      .select('id')
      .eq('email', data.email)
      .maybeSingle();

    if (existing) {
      return { success: false, error: 'An account with this email already exists.' };
    }

    const newUser = {
      id:             `usr-${Math.random().toString(36).substr(2, 8)}`,
      email:          data.email,
      name:           data.name,
      role:           data.role,
      email_verified: data.emailVerified ?? false,
      password:       data.password || 'nexora_user_2026',
      created_at:     new Date().toISOString(),
    };

    const { error } = await supabase.from('portal_users').insert(newUser);
    if (error) return { success: false, error: error.message };

    await refreshUsers();
    return { success: true };
  }, [refreshUsers]);

  const updateUser = useCallback(async (userId: string, updates: Partial<User>) => {
    const dbUpdates: Record<string, unknown> = {};
    if (updates.name !== undefined)          dbUpdates.name = updates.name;
    if (updates.email !== undefined)         dbUpdates.email = updates.email;
    if (updates.role !== undefined)          dbUpdates.role = updates.role;
    if (updates.emailVerified !== undefined) dbUpdates.email_verified = updates.emailVerified;
    if (updates.password !== undefined)      dbUpdates.password = updates.password;

    await supabase.from('portal_users').update(dbUpdates).eq('id', userId);

    if (user?.id === userId) {
      const { data } = await supabase.from('portal_users').select('*').eq('id', userId).single();
      if (data) {
        const updated = dbToUser(data);
        setUser(updated);
        localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      }
    }
    await refreshUsers();
  }, [user, refreshUsers]);

  const deleteUser = useCallback(async (userId: string) => {
    await supabase.from('portal_users').delete().eq('id', userId);
    await refreshUsers();
  }, [refreshUsers]);

  const setPendingSite = useCallback(
    (site: { url: string; name: string; token?: string } | null) => setPendingSiteState(site),
    []
  );

  return (
    <AuthContext.Provider value={{
      user, isAuthenticated: !!user, isLoading,
      login, signup, logout, verifyEmail,
      isDemoMode: user?.isDemo ?? false,
      allUsers, refreshUsers,
      pendingSite, setPendingSite,
      adminAddUser, updateUser, deleteUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
