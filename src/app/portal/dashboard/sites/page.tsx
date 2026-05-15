"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Globe,
  Search,
  Plus,
  MoreVertical,
  ExternalLink,
  RefreshCw,
  Zap,
  ShieldCheck,
  Cpu,
  Clock,
  CheckCircle2,
  Trash2,
  Activity
} from "lucide-react";
import { useState } from "react";
import { useInfrastructure } from "@/context/InfrastructureStore";
import { ConnectionModal } from "@/components/portal/ConnectionModal";
import Link from "next/link";

export default function SitesPage() {
  const { sites, refreshInfrastructure, deactivateSite } = useInfrastructure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const uniqueSites = Array.from(new Map(sites.map(s => [s.url.replace(/\/$/, '').toLowerCase(), s])).values());

  const filteredSites = uniqueSites.filter(site =>
    site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshInfrastructure();
    setIsRefreshing(false);
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">WordPress Sites</span>
          <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
            Connected <span className="text-brand">Sites.</span>
          </h1>
          <p className="text-text-muted text-[15px] font-medium mt-2 max-w-[540px]">
            Manage and monitor all your WordPress sites connected to Nexora Engine.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-obsidian text-white px-7 py-3.5 rounded-xl font-bold text-[14px] flex items-center gap-3 shadow-xl hover:scale-105 transition-transform"
        >
          <Plus size={17} />
          Connect New Site
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-brand transition-colors" size={16} />
          <input
            type="text"
            placeholder="Search by site name or URL…"
            className="w-full bg-white border border-border rounded-xl pl-12 pr-4 py-3 text-[14px] font-medium focus:ring-1 focus:ring-brand outline-none transition-all"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="px-5 py-3 border border-border bg-white rounded-xl text-[13px] font-bold text-obsidian flex items-center gap-2 hover:bg-surface-soft transition-all"
        >
          <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
          {isRefreshing ? "Syncing…" : "Refresh"}
        </button>
      </div>

      {/* Sites Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
        {filteredSites.map((site, i) => (
          <motion.div
            key={site.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white border border-border rounded-[40px] p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 bg-obsidian/5 rounded-2xl flex items-center justify-center group-hover:bg-brand/10 transition-colors border border-transparent group-hover:border-brand/20">
                  <Globe size={26} className="text-obsidian group-hover:text-brand transition-colors" />
                </div>
                <div>
                  <h3 className="text-[19px] font-black text-obsidian mb-0.5">{site.name}</h3>
                  <div className="flex items-center gap-2 text-[13px] text-text-muted font-medium">
                    {site.url}
                    <a href={site.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-brand" />
                    </a>
                  </div>
                </div>
              </div>
              <div className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border flex items-center gap-2 ${
                site.status === 'Healthy'
                  ? 'bg-emerald-500/5 text-emerald-600 border-emerald-500/10'
                  : site.status === 'Disconnected'
                    ? 'bg-red-500/5 text-red-500 border-red-500/20'
                    : 'bg-amber-500/5 text-amber-500 border-amber-500/10'
              }`}>
                <div className={`h-1.5 w-1.5 rounded-full ${
                  site.status === 'Healthy' ? 'bg-emerald-500' :
                  site.status === 'Disconnected' ? 'bg-red-500' :
                  'bg-amber-500 animate-pulse'
                }`} />
                {site.status}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 py-6 border-y border-border mb-7">
              <div className="space-y-1">
                <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">Score</div>
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-brand" />
                  <span className="text-[16px] font-black text-obsidian">{site.metrics.score}/100</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">TTFB</div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-text-muted" />
                  <span className="text-[16px] font-black text-obsidian">{site.metrics.ttfb}</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">Plugin</div>
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-text-muted" />
                  <span className="text-[14px] font-black text-obsidian">
                    {site.pluginVersion === 'Not Detected' ? '—' : `v${site.pluginVersion}`}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full bg-brand/10 border-2 border-white flex items-center justify-center">
                    <ShieldCheck size={13} className="text-brand" />
                  </div>
                  <div className="h-8 w-8 rounded-full bg-emerald-500/10 border-2 border-white flex items-center justify-center">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                  </div>
                </div>
                <span className="text-[11px] font-bold text-text-muted">Last sync: {site.lastSync}</span>
              </div>
              <div className="flex items-center gap-2 relative">
                <Link
                  href="/portal/dashboard/health"
                  className="px-5 py-2.5 bg-surface-soft hover:bg-obsidian hover:text-white rounded-xl text-[12px] font-bold transition-all"
                >
                  View Health
                </Link>

                <button
                  onClick={() => setActiveMenu(activeMenu === site.id ? null : site.id)}
                  className={`p-2.5 rounded-xl transition-all ${
                    activeMenu === site.id ? 'bg-brand text-white' : 'hover:bg-surface-soft text-text-muted'
                  }`}
                >
                  <MoreVertical size={19} />
                </button>

                <AnimatePresence>
                  {activeMenu === site.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute right-0 bottom-full mb-2 w-48 bg-white border border-border rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="p-2 space-y-1">
                        <Link href="/portal/dashboard/performance" className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-obsidian hover:bg-surface-soft rounded-xl transition-all">
                          <Zap size={14} className="text-brand" /> Performance
                        </Link>
                        <Link href="/portal/dashboard/health" className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-obsidian hover:bg-surface-soft rounded-xl transition-all">
                          <Activity size={14} className="text-brand" /> Site Health
                        </Link>
                        <div className="h-px bg-border mx-2 my-1" />
                        <button
                          onClick={() => { deactivateSite(site.id); setActiveMenu(null); }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 size={14} /> Disconnect
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add Site Placeholder */}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="border-2 border-dashed border-border rounded-[40px] p-12 flex flex-col items-center justify-center gap-6 group hover:border-brand/40 hover:bg-brand/5 transition-all min-h-[300px]"
        >
          <div className="h-16 w-16 rounded-full bg-surface-soft flex items-center justify-center group-hover:bg-brand/10 transition-colors">
            <Plus size={30} className="text-text-muted group-hover:text-brand transition-colors" />
          </div>
          <div className="text-center">
            <h3 className="text-[17px] font-black text-obsidian mb-1">Add Another Site</h3>
            <p className="text-[13px] text-text-muted font-medium">Connect a new WordPress site to monitor and manage.</p>
          </div>
        </motion.button>
      </div>

      {filteredSites.length === 0 && searchTerm && (
        <div className="text-center py-12">
          <p className="text-[15px] font-bold text-obsidian">No sites match "{searchTerm}"</p>
          <p className="text-[13px] text-text-muted mt-1">Try a different search term.</p>
        </div>
      )}

      {activeMenu && (
        <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)} />
      )}

      <ConnectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
