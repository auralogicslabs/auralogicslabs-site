"use client";

import { motion } from "motion/react";
import { 
  Globe, Search, RefreshCw, Activity, 
  ExternalLink, Shield, Server, Layout
} from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useInfrastructure } from "@/context/InfrastructureStore";
import { useRouter } from "next/navigation";

export default function FleetManagementPage() {
  const { user, allUsers } = useAuth();
  const { sites, refreshInfrastructure } = useInfrastructure();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (user?.role !== 'super_admin') router.push('/portal/dashboard');
  }, [user, router]);

  if (user?.role !== 'super_admin') return null;

  const filtered = sites.filter(s => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return s.name.toLowerCase().includes(q) || s.url.toLowerCase().includes(q);
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshInfrastructure();
    setIsRefreshing(false);
  };

  const getOwnerName = (userId?: string) => {
    if (!userId) return "System";
    return allUsers.find(u => u.id === userId)?.name || "Unknown Owner";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
        <div>
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Fleet Oversight</span>
          <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
            Global <span className="text-brand">Fleet.</span>
          </h1>
          <p className="text-text-muted text-[15px] font-medium mt-2 max-w-[480px]">
            Real-time monitoring of every Nexora node across the entire user base.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search nodes by URL…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="bg-white border border-border rounded-xl py-3 pl-10 pr-4 text-[13px] font-bold text-obsidian w-[240px] focus:ring-brand focus:border-brand outline-none"
            />
          </div>
          <button
            onClick={handleRefresh}
            className="p-3 bg-white border border-border rounded-xl text-text-muted hover:text-obsidian hover:bg-surface-soft transition-all"
          >
            <RefreshCw size={17} className={isRefreshing ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Nodes", value: sites.length, icon: Server, color: "text-brand" },
          { label: "Fleet Health", value: "98.4%", icon: Activity, color: "text-emerald-500" },
          { label: "Global Traffic", value: "24.2M", icon: Globe, color: "text-obsidian" },
          { label: "Hardened", value: sites.filter(s => s.status === 'Healthy').length, icon: Shield, color: "text-brand" },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-border rounded-[32px] p-7 shadow-sm">
            <div className={`h-10 w-10 bg-surface-soft rounded-xl flex items-center justify-center ${stat.color} mb-4`}>
              <stat.icon size={20} />
            </div>
            <div className="text-[28px] font-black text-obsidian tracking-tight">{stat.value}</div>
            <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Fleet Table */}
      <div className="bg-white border border-border rounded-[40px] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-soft/50 border-b border-border">
              <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">Node Identity</th>
              <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">Owner</th>
              <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">Status</th>
              <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">Orchestration</th>
              <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest">TTFB</th>
              <th className="px-8 py-5 text-[11px] font-black text-text-muted uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((site, i) => (
              <motion.tr
                key={site.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-border last:border-0 hover:bg-surface-soft/20 transition-colors"
              >
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-obsidian/5 flex items-center justify-center text-obsidian shrink-0">
                      <Layout size={18} />
                    </div>
                    <div>
                      <div className="text-[14px] font-black text-obsidian">{site.name}</div>
                      <div className="text-[12px] text-text-muted font-medium font-mono">{site.url}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <div className="text-[13px] font-bold text-obsidian">{getOwnerName(site.userId)}</div>
                  <div className="text-[11px] text-text-muted uppercase tracking-tighter">ID: {site.userId?.substring(0, 8) || 'SYSTEM'}</div>
                </td>
                <td className="px-8 py-6">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    site.status === 'Healthy' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'
                  }`}>
                    <Activity size={10} className={site.status === 'Healthy' ? 'animate-pulse' : ''} />
                    {site.status}
                  </div>
                </td>
                <td className="px-8 py-6">
                   <div className="text-[12px] font-black text-obsidian">{site.environment}</div>
                   <div className="text-[11px] text-text-muted font-bold">NCX Core {site.pluginVersion}</div>
                </td>
                <td className="px-8 py-6 font-mono text-[13px] font-bold text-brand">
                  {site.metrics.ttfb}
                </td>
                <td className="px-8 py-6 text-right">
                  <a 
                    href={site.url} 
                    target="_blank" 
                    className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-border bg-white text-text-muted hover:text-brand hover:border-brand/30 transition-all"
                  >
                    <ExternalLink size={16} />
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
