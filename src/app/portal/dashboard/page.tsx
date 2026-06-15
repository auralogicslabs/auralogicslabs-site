"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Zap, Globe, Activity, CheckCircle2, Clock, ExternalLink,
  ArrowRight, Trash2, MoreVertical, MessageSquare, RefreshCw,
  Users, Mail, Download, BarChart3, Loader2
} from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useInfrastructure } from "@/context/InfrastructureStore";
import Link from "next/link";

function DashboardInner() {
  const searchParams = useSearchParams();
  const { user, pendingSite, setPendingSite, allUsers } = useAuth();
  const { sites, refreshInfrastructure, deactivateSite, addSite } = useInfrastructure();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showHandshakeSuccess, setShowHandshakeSuccess] = useState(false);
  const [lastConnectedSite, setLastConnectedSite] = useState<string | null>(null);
  const [hasProcessedParams, setHasProcessedParams] = useState(false);

  // Capture pending site from search params if redirected directly
  useEffect(() => {
    if (hasProcessedParams) return;

    const siteUrl  = searchParams.get('site_url');
    const siteName = searchParams.get('site_name');
    const ncxToken = searchParams.get('ncx_token');

    if (siteUrl) {
      // Always clean the URL immediately. even if pendingSite is already set from
      // portal/page.tsx. so params don't re-trigger the banner on refresh.
      setHasProcessedParams(true);
      window.history.replaceState({}, '', window.location.pathname);

      if (!pendingSite) {
        setPendingSite({ url: siteUrl, name: siteName || siteUrl, token: ncxToken || undefined });
      }
    }
  }, [searchParams, pendingSite, setPendingSite, hasProcessedParams]);

  const isSuperAdmin = user?.role === 'super_admin';

  const handleConnectPending = async () => {
    if (!pendingSite?.url) return;
    setIsRefreshing(true);
    const siteUrl = pendingSite.url;
    const success = await addSite({
      url: siteUrl,
      name: pendingSite.name,
      token: pendingSite.token,
      isPluginActive: !!pendingSite.token,
      userId: user?.id,
    });
    // Clear the banner first, then show success. prevents both showing simultaneously
    setPendingSite(null);
    setShowHandshakeSuccess(true);
    setLastConnectedSite(siteUrl);
    if (!success) {
      // Site already existed. still report as connected
    }
    setIsRefreshing(false);
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshInfrastructure();
    setIsRefreshing(false);
  };

  const HandshakeBanner = () => (
    <AnimatePresence>
      {pendingSite && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-brand rounded-[28px] p-8 text-white shadow-xl shadow-brand/20 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                <Globe size={28} className="animate-pulse" />
              </div>
              <div>
                <div className="text-[20px] font-black tracking-tight">Authorize Node Connection?</div>
                <div className="text-white/70 text-[14px] font-medium mt-1">
                  You are connecting <span className="text-white font-bold">{pendingSite.name}</span> to your Nexora Cloud account.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setPendingSite(null)}
                className="flex-1 md:flex-none px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-[13px] font-bold transition-all"
              >
                Ignore
              </button>
              <button
                onClick={handleConnectPending}
                disabled={isRefreshing}
                className="flex-1 md:flex-none px-8 py-3 bg-white text-brand rounded-xl text-[13px] font-black flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
              >
                {isRefreshing ? <RefreshCw size={16} className="animate-spin" /> : <Zap size={16} />}
                Confirm Connection
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const SuccessBanner = () => (
    <AnimatePresence>
      {showHandshakeSuccess && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-emerald-500 rounded-[28px] p-7 text-white shadow-xl shadow-emerald-500/20 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-5">
              <div className="h-12 w-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="text-[17px] font-black">Site connected successfully.</div>
                <div className="text-white/70 text-[13px] font-medium mt-0.5">
                  Click &quot;Return to WordPress&quot; to complete setup in your plugin.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowHandshakeSuccess(false)}
                className="px-5 py-2.5 bg-white/15 hover:bg-white/25 rounded-xl text-[13px] font-bold transition-all"
              >
                Dismiss
              </button>
              <a
                href={`${lastConnectedSite || '#'}/wp-admin/admin.php?page=ncx-updates&ncx_connected=1`}
                className="px-7 py-2.5 bg-white text-emerald-600 rounded-xl text-[13px] font-black flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Return to WordPress <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // ── Super Admin Dashboard ────────────────────────────────────────────────
  if (isSuperAdmin) {
    const regularUsers = allUsers.filter(u => u.role !== 'super_admin');
    const verified = regularUsers.filter(u => u.emailVerified).length;
    const pendingCount = regularUsers.filter(u => !u.emailVerified).length;
    const recent = [...regularUsers]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 6);

    const fmt = (iso: string) =>
      new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

    return (
      <div className="space-y-10">
        <HandshakeBanner />
        <SuccessBanner />
        <div>
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Platform Overview</span>
          <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
            Admin <span className="text-brand">Dashboard.</span>
          </h1>
          <p className="text-text-muted text-[15px] font-medium mt-2">
            User and registration activity across the platform.
          </p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
          {[
            { label: "Registered Users", value: regularUsers.length, icon: Users, color: "text-brand", bg: "bg-brand/5" },
            { label: "Verified Accounts", value: verified, icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/5" },
            { label: "Pending Verification", value: pendingCount, icon: Mail, color: "text-amber-500", bg: "bg-amber-500/5" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-border rounded-[28px] p-7 shadow-sm"
            >
              <div className={`h-10 w-10 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color} mb-4`}>
                <stat.icon size={20} />
              </div>
              <div className="text-[30px] font-black text-obsidian tracking-tight">{stat.value}</div>
              <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white border border-border rounded-[40px] overflow-hidden shadow-sm">
          <div className="px-10 py-7 border-b border-border flex items-center justify-between">
            <div>
              <h2 className="text-[17px] font-black text-obsidian">Recent Registrations</h2>
              <p className="text-[13px] text-text-muted font-medium mt-0.5">Latest users to create an account</p>
            </div>
            <Link
              href="/portal/dashboard/admin/users"
              className="text-[12px] font-bold text-brand hover:underline flex items-center gap-1.5"
            >
              View All <ArrowRight size={13} />
            </Link>
          </div>

          {recent.length === 0 ? (
            <div className="px-10 py-16 text-center">
              <Users size={32} className="mx-auto mb-3 text-border" />
              <p className="text-[14px] font-bold text-obsidian">No registrations yet</p>
              <p className="text-[13px] text-text-muted font-medium mt-1">
                Users will appear here once they register via the signup flow.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {recent.map((u, i) => (
                <motion.div
                  key={u.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-10 py-5 flex items-center justify-between hover:bg-surface-soft/30 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-brand/5 flex items-center justify-center text-brand font-black text-[14px] border border-brand/10">
                      {u.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-[14px] font-black text-obsidian">{u.name}</div>
                      <div className="text-[12px] text-text-muted font-medium">{u.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] text-text-muted font-medium hidden md:block">{fmt(u.createdAt)}</span>
                    {u.emailVerified ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                        <CheckCircle2 size={10} /> Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 text-[10px] font-black uppercase tracking-widest">
                        <Clock size={10} /> Pending
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href="/portal/dashboard/admin/users"
            className="bg-white border border-border rounded-[28px] p-7 hover:shadow-lg transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-brand/5 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                <Users size={22} />
              </div>
              <div>
                <div className="text-[15px] font-black text-obsidian">User Management</div>
                <div className="text-[12px] text-text-muted font-medium">View and manage all accounts</div>
              </div>
            </div>
            <ArrowRight size={17} className="text-text-muted group-hover:text-brand transition-colors" />
          </Link>
          <Link
            href="/portal/dashboard/sites"
            className="bg-white border border-border rounded-[28px] p-7 hover:shadow-lg transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-obsidian/5 rounded-2xl flex items-center justify-center text-obsidian group-hover:bg-obsidian group-hover:text-white transition-all">
                <Globe size={22} />
              </div>
              <div>
                <div className="text-[15px] font-black text-obsidian">Connected Sites</div>
                <div className="text-[12px] text-text-muted font-medium">All WordPress sites in the platform</div>
              </div>
            </div>
            <ArrowRight size={17} className="text-text-muted group-hover:text-brand transition-colors" />
          </Link>
        </div>
      </div>
    );
  }

  // ── Regular User Dashboard ───────────────────────────────────────────────
  const activeSites = sites.filter(s => s.isPluginActive);
  const avgTTFB = activeSites.length > 0
    ? Math.round(activeSites.reduce((acc, s) => acc + (parseInt(s.metrics.ttfb) || 0), 0) / activeSites.length)
    : 0;
  const avgScore = activeSites.length > 0
    ? Math.round(activeSites.reduce((acc, s) => acc + s.metrics.score, 0) / activeSites.length)
    : 0;

  return (
    <div className="space-y-10">
      <HandshakeBanner />
      <SuccessBanner />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
        <div>
          <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight">
            Welcome, <span className="text-brand">{user?.name?.split(' ')[0]}.</span>
          </h1>
          <p className="text-text-muted text-[15px] font-medium mt-1.5">
            {sites.length > 0
              ? `You have ${sites.length} site${sites.length > 1 ? 's' : ''} connected to Nexora Engine.`
              : "Connect your WordPress site to get started."}
          </p>
        </div>
        {sites.length > 0 && (
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="px-5 py-2.5 bg-white border border-border rounded-xl text-[13px] font-bold text-obsidian flex items-center gap-2 hover:bg-surface-soft transition-all"
            >
              <RefreshCw size={15} className={isRefreshing ? "animate-spin" : ""} />
              Sync
            </button>
            <Link
              href="/portal/dashboard/support"
              className="px-5 py-2.5 bg-obsidian text-white rounded-xl text-[13px] font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <MessageSquare size={15} />
              Support
            </Link>
          </div>
        )}
      </div>

      {/* Empty state */}
      {sites.length === 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white border border-border rounded-[40px] p-12 shadow-sm">
            <h2 className="text-[22px] font-black text-obsidian mb-3 tracking-tight">
              Get started with Nexora Engine
            </h2>
            <p className="text-text-muted text-[15px] font-medium mb-10 leading-relaxed">
              Connect your WordPress site to start monitoring performance, managing cache, and tracking optimization scores in real time.
            </p>
            <div className="space-y-7 mb-10">
              {[
                { step: "1", title: "Download the plugin", desc: "Get the latest Nexora Engine .zip from the Downloads page." },
                { step: "2", title: "Install on WordPress", desc: "Go to Plugins → Add New → Upload Plugin, then activate." },
                { step: "3", title: "Connect to portal", desc: 'In plugin settings, click "Connect to Portal". You\'ll be redirected here automatically.' },
              ].map(s => (
                <div key={s.step} className="flex items-start gap-5">
                  <div className="h-9 w-9 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-black text-[14px] shrink-0 mt-0.5">
                    {s.step}
                  </div>
                  <div>
                    <div className="text-[15px] font-black text-obsidian">{s.title}</div>
                    <div className="text-[13px] text-text-muted font-medium mt-0.5">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/portal/dashboard/downloads"
              className="inline-flex items-center gap-2.5 bg-brand text-white px-7 py-3.5 rounded-xl font-black text-[14px] hover:scale-105 transition-transform shadow-lg shadow-brand/20"
            >
              <Download size={17} />
              Download Nexora Engine
            </Link>
          </div>
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-obsidian rounded-[32px] p-8 text-white">
              <Zap size={26} className="text-brand mb-5" />
              <div className="text-[17px] font-black mb-4">What you unlock</div>
              <ul className="space-y-3">
                {[
                  "Real-time TTFB monitoring",
                  "Automatic cache management",
                  "Optimization score tracking",
                  "Plugin version control",
                  "Priority support access",
                ].map(f => (
                  <li key={f} className="flex items-center gap-3 text-[13px] font-medium text-white/70">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/portal/dashboard/support"
              className="bg-white border border-border rounded-[28px] p-6 flex items-center justify-between hover:shadow-lg transition-all group"
            >
              <div>
                <div className="text-[15px] font-black text-obsidian mb-0.5">Need help?</div>
                <div className="text-[12px] text-text-muted font-medium">Open a support ticket.</div>
              </div>
              <MessageSquare size={20} className="text-text-muted group-hover:text-brand transition-colors" />
            </Link>
          </div>
        </div>
      )}

      {/* Sites present */}
      {sites.length > 0 && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
            {[
              { label: "Connected Sites", value: sites.length, icon: Globe, color: "text-brand", bg: "bg-brand/5" },
              { label: "Plugin Active", value: activeSites.length, icon: Zap, color: "text-emerald-500", bg: "bg-emerald-500/5" },
              { label: "Avg TTFB", value: avgTTFB > 0 ? `${avgTTFB}ms` : "—", icon: Activity, color: "text-obsidian", bg: "bg-obsidian/5" },
              { label: "Avg Score", value: avgScore > 0 ? `${avgScore}/100` : "—", icon: BarChart3, color: "text-amber-500", bg: "bg-amber-500/5" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-border rounded-[28px] p-7 shadow-sm"
              >
                <div className={`h-10 w-10 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color} mb-4`}>
                  <stat.icon size={20} />
                </div>
                <div className="text-[28px] font-black text-obsidian tracking-tight">{stat.value}</div>
                <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Sites list */}
          <div className="bg-white border border-border rounded-[40px] overflow-hidden shadow-sm">
            <div className="px-10 py-7 border-b border-border flex items-center justify-between">
              <div>
                <h2 className="text-[17px] font-black text-obsidian">Your Sites</h2>
                <p className="text-[13px] text-text-muted font-medium mt-0.5">Nexora Engine-connected WordPress sites</p>
              </div>
              <Link
                href="/portal/dashboard/sites"
                className="text-[12px] font-bold text-brand hover:underline flex items-center gap-1.5"
              >
                Manage All <ArrowRight size={13} />
              </Link>
            </div>
            <div className="divide-y divide-border">
              {sites.map((site, i) => (
                <motion.div
                  key={site.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-10 py-5 flex items-center justify-between hover:bg-surface-soft/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center border ${
                      site.isPluginActive ? 'bg-brand/5 border-brand/10' : 'bg-surface-soft border-border'
                    }`}>
                      <Globe size={19} className={site.isPluginActive ? 'text-brand' : 'text-text-muted'} />
                    </div>
                    <div>
                      <div className="text-[14px] font-black text-obsidian flex items-center gap-2">
                        {site.name}
                        {site.isPluginActive && <Zap size={12} className="text-brand fill-brand" />}
                      </div>
                      <div className="text-[12px] text-text-muted font-medium">{site.url}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {site.isPluginActive ? (
                      <>
                        <div className="text-right hidden md:block">
                          <div className="text-[13px] font-black text-obsidian">{site.metrics.ttfb}</div>
                          <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">TTFB</div>
                        </div>
                        <div className="text-right hidden md:block">
                          <div className="text-[13px] font-black text-obsidian">{site.metrics.score}/100</div>
                          <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Score</div>
                        </div>
                      </>
                    ) : (
                      <span className="text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full hidden md:block">
                        Plugin not active
                      </span>
                    )}
                    <div className="relative">
                      <button
                        onClick={e => { e.stopPropagation(); setActiveMenu(activeMenu === site.id ? null : site.id); }}
                        className="p-2 text-text-muted hover:text-obsidian rounded-lg hover:bg-surface-soft transition-colors"
                      >
                        <MoreVertical size={17} />
                      </button>
                      <AnimatePresence>
                        {activeMenu === site.id && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 8 }}
                            className="absolute right-0 mt-1 w-44 bg-white border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
                          >
                            <div className="p-1.5 space-y-0.5">
                              <a
                                href={site.url}
                                target="_blank"
                                className="flex items-center gap-3 px-3.5 py-2.5 text-[13px] font-bold text-obsidian hover:bg-surface-soft rounded-xl transition-all"
                              >
                                <ExternalLink size={13} className="text-brand" /> Visit Site
                              </a>
                              <Link
                                href="/portal/dashboard/support"
                                className="flex items-center gap-3 px-3.5 py-2.5 text-[13px] font-bold text-obsidian hover:bg-surface-soft rounded-xl transition-all"
                              >
                                <MessageSquare size={13} className="text-brand" /> Get Support
                              </Link>
                              <div className="h-px bg-border mx-2 my-1" />
                              <button
                                onClick={() => { deactivateSite(site.id); setActiveMenu(null); }}
                                className="w-full flex items-center gap-3 px-3.5 py-2.5 text-[13px] font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all"
                              >
                                <Trash2 size={13} /> Disconnect
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: "Performance", sub: "View analytics", icon: BarChart3, href: "/portal/dashboard/performance", color: "text-brand", bg: "bg-brand/5", hover: "group-hover:bg-brand group-hover:text-white" },
              { label: "Site Health", sub: "Check status", icon: Activity, href: "/portal/dashboard/health", color: "text-emerald-500", bg: "bg-emerald-500/5", hover: "group-hover:bg-emerald-500 group-hover:text-white" },
              { label: "Support", sub: "Get help", icon: MessageSquare, href: "/portal/dashboard/support", color: "text-obsidian", bg: "bg-obsidian/5", hover: "group-hover:bg-obsidian group-hover:text-white" },
            ].map(action => (
              <Link
                key={action.label}
                href={action.href}
                className="bg-white border border-border rounded-[28px] p-7 hover:shadow-lg transition-all group flex items-center gap-4"
              >
                <div className={`h-12 w-12 ${action.bg} rounded-2xl flex items-center justify-center ${action.color} ${action.hover} transition-all`}>
                  <action.icon size={22} />
                </div>
                <div>
                  <div className="text-[15px] font-black text-obsidian">{action.label}</div>
                  <div className="text-[12px] text-text-muted font-medium">{action.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      {activeMenu && <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)} />}
    </div>
  );
}

function DashboardLoading() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <Loader2 className="h-8 w-8 text-brand animate-spin" />
    </div>
  );
}

export default function DashboardOverview() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardInner />
    </Suspense>
  );
}
