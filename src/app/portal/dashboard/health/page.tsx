"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Cpu, CheckCircle2, AlertTriangle, XCircle, Zap,
  RefreshCw, Download
} from "lucide-react";
import { useInfrastructure } from "@/context/InfrastructureStore";
import Link from "next/link";

export default function HealthPage() {
  const { sites, refreshInfrastructure } = useInfrastructure();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const healthy      = sites.filter(s => s.status === 'Healthy');
  const warning      = sites.filter(s => s.status === 'Warning');
  const disconnected = sites.filter(s => s.status === 'Disconnected');

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshInfrastructure();
    setIsRefreshing(false);
  };

  const statusCfg = {
    Healthy:      { color: 'text-emerald-600', bg: 'bg-emerald-500/10', dot: 'bg-emerald-500',                icon: CheckCircle2 },
    Warning:      { color: 'text-amber-600',   bg: 'bg-amber-500/10',   dot: 'bg-amber-500 animate-pulse',   icon: AlertTriangle },
    Disconnected: { color: 'text-red-600',     bg: 'bg-red-500/10',     dot: 'bg-red-500',                   icon: XCircle },
  } as const;

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
        <div>
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Monitoring</span>
          <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
            Site <span className="text-brand">Health.</span>
          </h1>
          <p className="text-text-muted text-[15px] font-medium mt-2 max-w-[540px]">
            Connection status, plugin version, and health scores for all your connected sites.
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-border rounded-xl text-[13px] font-bold text-obsidian hover:bg-surface-soft transition-all"
        >
          <RefreshCw size={15} className={isRefreshing ? "animate-spin" : ""} />
          Refresh Status
        </button>
      </div>

      {sites.length === 0 ? (
        <div className="bg-white border border-border rounded-[40px] p-16 text-center shadow-sm">
          <div className="h-16 w-16 bg-surface-soft rounded-[24px] flex items-center justify-center mx-auto mb-6">
            <Cpu size={30} className="text-text-muted" />
          </div>
          <h2 className="text-[20px] font-black text-obsidian mb-3">No sites connected</h2>
          <p className="text-text-muted text-[14px] font-medium max-w-[360px] mx-auto mb-8">
            Connect a WordPress site with Nexora Engine installed to see health data here.
          </p>
          <Link
            href="/portal/dashboard/downloads"
            className="inline-flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-black text-[14px] hover:scale-105 transition-transform shadow-lg shadow-brand/20"
          >
            <Download size={15} />
            Get the Plugin
          </Link>
        </div>
      ) : (
        <>
          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-5">
            {[
              { label: "Healthy",      value: healthy.length,      icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/5" },
              { label: "Warning",      value: warning.length,      icon: AlertTriangle,color: "text-amber-500",   bg: "bg-amber-500/5" },
              { label: "Disconnected", value: disconnected.length, icon: XCircle,      color: "text-red-500",     bg: "bg-red-500/5" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-border rounded-[28px] p-7 shadow-sm"
              >
                <div className={`h-10 w-10 ${stat.bg} rounded-xl flex items-center justify-center ${stat.color} mb-4`}>
                  <stat.icon size={20} />
                </div>
                <div className="text-[28px] font-black text-obsidian">{stat.value}</div>
                <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Site cards */}
          <div className="space-y-4">
            {sites.map((site, i) => {
              const cfg = statusCfg[site.status];
              const Icon = cfg.icon;
              return (
                <motion.div
                  key={site.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white border border-border rounded-[32px] p-8 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="relative shrink-0">
                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center border ${
                          site.isPluginActive ? 'bg-brand/5 border-brand/10' : 'bg-surface-soft border-border'
                        }`}>
                          <Cpu size={24} className={site.isPluginActive ? 'text-brand' : 'text-text-muted'} />
                        </div>
                        <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white ${cfg.dot}`} />
                      </div>
                      <div>
                        <div className="text-[16px] font-black text-obsidian flex items-center gap-2">
                          {site.name}
                          {site.isPluginActive && <Zap size={13} className="text-brand fill-brand" />}
                        </div>
                        <div className="text-[12px] text-text-muted font-medium mt-0.5">{site.url}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${cfg.bg} ${cfg.color}`}>
                        <Icon size={11} />
                        {site.status}
                      </span>
                      {site.isPluginActive && (
                        <>
                          <div className="text-center">
                            <div className="text-[15px] font-black text-obsidian">{site.metrics.ttfb}</div>
                            <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">TTFB</div>
                          </div>
                          <div className="text-center">
                            <div className="text-[15px] font-black text-obsidian">{site.metrics.health}%</div>
                            <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Health</div>
                          </div>
                        </>
                      )}
                      <div className="text-center">
                        <div className="text-[13px] font-bold text-obsidian">
                          {site.pluginVersion === 'Not Detected' ? '—' : `v${site.pluginVersion}`}
                        </div>
                        <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Plugin</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[13px] font-bold text-obsidian">{site.lastSync}</div>
                        <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Last Sync</div>
                      </div>
                    </div>
                  </div>

                  {site.isPluginActive ? (
                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-bold text-text-muted">Overall Health</span>
                        <span className="text-[11px] font-black text-obsidian">{site.metrics.health}%</span>
                      </div>
                      <div className="h-1.5 bg-surface-soft rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${site.metrics.health}%` }}
                          transition={{ duration: 0.9, delay: i * 0.1 }}
                          className={`h-full rounded-full ${
                            site.metrics.health >= 90 ? 'bg-emerald-500'
                            : site.metrics.health >= 60 ? 'bg-amber-500'
                            : 'bg-red-500'
                          }`}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5 pt-5 border-t border-border flex items-center justify-between gap-4">
                      <span className="text-[13px] text-amber-600 font-medium flex items-center gap-2">
                        <AlertTriangle size={14} />
                        Plugin not detected — install Nexora Engine to enable full health monitoring.
                      </span>
                      <Link href="/portal/dashboard/downloads" className="text-[12px] font-black text-brand hover:underline shrink-0">
                        Get Plugin
                      </Link>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
