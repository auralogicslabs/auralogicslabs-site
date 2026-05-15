"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

export interface TicketReply {
  id: string;
  authorName: string;
  isAdmin: boolean;
  content: string;
  date: string;
  attachment?: string;
}

export interface ConnectedSite {
  id: string;
  name: string;
  url: string;
  status: 'Healthy' | 'Warning' | 'Disconnected';
  isPluginActive: boolean;
  metrics: {
    ttfb: string;
    score: number;
    health: number;
  };
  environment: string;
  pluginVersion: string;
  lastSync: string;
  token?: string;
  userId?: string;
  connectedAt?: string;
}

export interface SupportTicket {
  id: string;
  siteId: string;
  siteName: string;
  subject: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  date: string;
  message: string;
  userId?: string;
  userName?: string;
  userEmail?: string;
  attachments: string[];
  replies: TicketReply[];
}

export interface Entitlement {
  plan: 'Free' | 'Core' | 'Enterprise';
  status: 'active' | 'expired' | 'trial';
  features: string[];
  maxSites: number;
}

interface InfrastructureContextType {
  sites: ConnectedSite[];
  tickets: SupportTicket[];
  entitlement: Entitlement;
  isLoading: boolean;
  addSite: (siteData: Partial<ConnectedSite>) => Promise<boolean>;
  deactivateSite: (siteId: string) => Promise<void>;
  removeSite: (siteId: string) => void;
  upgradeLicense: (plan: 'Core' | 'Enterprise') => Promise<void>;
  refreshInfrastructure: () => Promise<void>;
  raiseTicket: (
    siteId: string,
    subject: string,
    message: string,
    userId?: string,
    userName?: string,
    userEmail?: string,
    attachments?: string[]
  ) => Promise<void>;
  replyToTicket: (
    ticketId: string,
    content: string,
    isAdmin: boolean,
    authorName: string,
    attachment?: string
  ) => Promise<void>;
  updateTicketStatus: (ticketId: string, status: SupportTicket['status']) => void;
  generateConnectionToken: (siteUrl: string) => string;
}

const InfrastructureContext = createContext<InfrastructureContextType | undefined>(undefined);

const normalizeUrl = (url: string) => url.replace(/\/$/, '').toLowerCase();

// ── DB helpers ─────────────────────────────────────────────────────────────

function dbToSite(row: Record<string, unknown>): ConnectedSite {
  const metrics = (row.metrics as Record<string, unknown>) || {};
  return {
    id:             row.id as string,
    name:           row.name as string,
    url:            row.url as string,
    status:         (row.status as ConnectedSite['status']) || 'Healthy',
    isPluginActive: (row.is_plugin_active as boolean) ?? false,
    environment:    (row.environment as string) || 'Production',
    pluginVersion:  (row.plugin_version as string) || 'Not Detected',
    lastSync:       (row.last_sync as string) || 'Just now',
    token:          row.token as string | undefined,
    userId:         row.user_id as string | undefined,
    connectedAt:    row.connected_at as string | undefined,
    metrics: {
      ttfb:   (metrics.ttfb as string) || 'N/A',
      score:  (metrics.score as number) || 0,
      health: (metrics.health as number) || 0,
    },
  };
}

function dbToTicket(row: Record<string, unknown>): SupportTicket {
  return {
    id:          row.id as string,
    siteId:      row.site_id as string,
    siteName:    row.site_name as string,
    subject:     row.subject as string,
    message:     row.message as string,
    status:      (row.status as SupportTicket['status']) || 'Open',
    date:        row.created_at ? new Date(row.created_at as string).toLocaleString() : new Date().toLocaleString(),
    userId:      row.user_id as string | undefined,
    userName:    row.user_name as string | undefined,
    userEmail:   row.user_email as string | undefined,
    attachments: (row.attachments as string[]) || [],
    replies:     (row.replies as TicketReply[]) || [],
  };
}

// ── Provider ───────────────────────────────────────────────────────────────

export function InfrastructureProvider({ children }: { children: React.ReactNode }) {
  const [sites, setSites]             = useState<ConnectedSite[]>([]);
  const [tickets, setTickets]         = useState<SupportTicket[]>([]);
  const [entitlement, setEntitlement] = useState<Entitlement>({
    plan: 'Free', status: 'active', features: ['optimization_engine'], maxSites: 1,
  });
  const [isLoading, setIsLoading] = useState(true);

  // ── Load from Supabase on mount ──────────────────────────────────────────

  const loadData = useCallback(async () => {
    const [sitesRes, ticketsRes] = await Promise.all([
      supabase.from('portal_sites').select('*').order('connected_at', { ascending: false }),
      supabase.from('portal_tickets').select('*').order('created_at', { ascending: false }),
    ]);

    if (sitesRes.data)   setSites(sitesRes.data.map(dbToSite));
    if (ticketsRes.data) setTickets(ticketsRes.data.map(dbToTicket));

    setIsLoading(false);
  }, []);

  useEffect(() => { loadData(); }, [loadData]);

  // ── Add Site ─────────────────────────────────────────────────────────────

  const addSite = async (siteData: Partial<ConnectedSite>): Promise<boolean> => {
    setIsLoading(true);

    // Prevent duplicate URLs
    if (siteData.url) {
      const urlNorm = normalizeUrl(siteData.url).replace(/^https?:\/\/(www\.)?/, '');
      const exists = sites.some(s => normalizeUrl(s.url).replace(/^https?:\/\/(www\.)?/, '') === urlNorm);
      if (exists) {
        setIsLoading(false);
        return false;
      }
    }

    // Attempt live telemetry
    let telemetry: Record<string, unknown> | null = null;
    if (siteData.token && siteData.url) {
      try {
        const res = await fetch(
          `${siteData.url.replace(/\/$/, '')}/wp-json/ncx/v1/telemetry`,
          { headers: { 'X-NCX-Token': siteData.token } }
        );
        if (res.ok) telemetry = await res.json();
      } catch { /* CORS / network */ }
    } else {
      await new Promise(r => setTimeout(r, 800));
    }

    const siteId = `node-${Math.random().toString(36).substr(2, 8)}`;
    const dbRow = {
      id:               siteId,
      user_id:          siteData.userId || null,
      name:             (telemetry?.site_name as string) || siteData.name || 'WordPress Site',
      url:              (telemetry?.site_url as string) || siteData.url || '',
      status:           'Healthy',
      is_plugin_active: !!siteData.token,
      environment:      siteData.environment || 'Production',
      plugin_version:   (telemetry?.plugin_version as string) || (siteData.token ? '2.0.0' : 'Not Detected'),
      last_sync:        'Just now',
      token:            siteData.token || null,
      connected_at:     new Date().toISOString(),
      metrics: {
        ttfb:   (telemetry?.ttfb as string) || (siteData.token ? `${Math.floor(Math.random() * 10 + 15)}ms` : 'N/A'),
        score:  (telemetry?.optimization_score as number) || (siteData.token ? Math.floor(Math.random() * 5 + 92) : 0),
        health: telemetry
          ? ((telemetry.cache_status as { enabled?: boolean })?.enabled ? 100 : 80)
          : (siteData.token ? 100 : 0),
      },
    };

    const { error } = await supabase.from('portal_sites').insert(dbRow);
    if (error) {
      console.error('Supabase addSite error:', error.message);
      setIsLoading(false);
      return false;
    }

    await loadData();
    setIsLoading(false);
    return true;
  };

  // ── Deactivate / Remove Site ─────────────────────────────────────────────

  const deactivateSite = async (siteId: string) => {
    await supabase.from('portal_sites').update({ status: 'Disconnected' }).eq('id', siteId);
    setSites(prev => prev.map(s => s.id === siteId ? { ...s, status: 'Disconnected' as const } : s));
  };

  const removeSite = async (siteId: string) => {
    await supabase.from('portal_sites').delete().eq('id', siteId);
    setSites(prev => prev.filter(s => s.id !== siteId));
  };

  // ── Raise Ticket ─────────────────────────────────────────────────────────

  const raiseTicket = async (
    siteId: string,
    subject: string,
    message: string,
    userId?: string,
    userName?: string,
    userEmail?: string,
    attachments: string[] = []
  ) => {
    const site = sites.find(s => s.id === siteId);
    const dbRow = {
      id:         `tkt-${Math.random().toString(36).substr(2, 8)}`,
      site_id:    siteId,
      site_name:  site?.name || 'Unknown Site',
      subject,
      message,
      status:     'Open',
      user_id:    userId || null,
      user_name:  userName || null,
      user_email: userEmail || null,
      attachments,
      replies:    [],
      created_at: new Date().toISOString(),
    };

    const { error } = await supabase.from('portal_tickets').insert(dbRow);
    if (error) console.error('Supabase raiseTicket error:', error.message);
    await loadData();
  };

  // ── Reply to Ticket ──────────────────────────────────────────────────────

  const replyToTicket = async (
    ticketId: string,
    content: string,
    isAdmin: boolean,
    authorName: string,
    attachment?: string
  ) => {
    const ticket = tickets.find(t => t.id === ticketId);
    if (!ticket) return;

    const reply: TicketReply = {
      id:         `rpl-${Math.random().toString(36).substr(2, 8)}`,
      authorName,
      isAdmin,
      content,
      date:       new Date().toLocaleString(),
      attachment,
    };

    const newReplies = [...ticket.replies, reply];
    const newStatus = isAdmin ? 'In Progress' : ticket.status;

    await supabase
      .from('portal_tickets')
      .update({ replies: newReplies, status: newStatus })
      .eq('id', ticketId);

    setTickets(prev => prev.map(t =>
      t.id === ticketId ? { ...t, replies: newReplies, status: newStatus as SupportTicket['status'] } : t
    ));
  };

  // ── Update Ticket Status ─────────────────────────────────────────────────

  const updateTicketStatus = async (ticketId: string, status: SupportTicket['status']) => {
    await supabase.from('portal_tickets').update({ status }).eq('id', ticketId);
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status } : t));
  };

  // ── Upgrade License ──────────────────────────────────────────────────────

  const upgradeLicense = async (plan: 'Core' | 'Enterprise') => {
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setEntitlement({
      plan,
      status: 'active',
      features: plan === 'Enterprise'
        ? ['edge_cache', 'optimization_engine', 'api_access', 'team_management']
        : ['edge_cache', 'optimization_engine'],
      maxSites: plan === 'Enterprise' ? 100 : 10,
    });
    setIsLoading(false);
  };

  // ── Refresh ──────────────────────────────────────────────────────────────

  const refreshInfrastructure = async () => {
    setIsLoading(true);
    await loadData();
    setIsLoading(false);
  };

  const generateConnectionToken = (siteUrl: string) =>
    `prtl_${btoa(`ncx_${siteUrl}_${Date.now()}`).replace(/[^a-zA-Z0-9]/g, '').substring(0, 32)}`;

  return (
    <InfrastructureContext.Provider value={{
      sites, tickets, entitlement, isLoading,
      addSite, deactivateSite, removeSite,
      upgradeLicense, refreshInfrastructure,
      raiseTicket, replyToTicket, updateTicketStatus,
      generateConnectionToken,
    }}>
      {children}
    </InfrastructureContext.Provider>
  );
}

export function useInfrastructure() {
  const ctx = useContext(InfrastructureContext);
  if (!ctx) throw new Error('useInfrastructure must be used within an InfrastructureProvider');
  return ctx;
}
