"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell
} from "recharts";
import {
  Zap, Activity, BarChart3, CheckCircle2, AlertTriangle, Download, RefreshCw
} from "lucide-react";
import { useInfrastructure } from "@/context/InfrastructureStore";
import Link from "next/link";

export default function PerformancePage() {
  const { sites, refreshInfrastructure } = useInfrastructure();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const activeSites = sites.filter(s => s.isPluginActive);

  const ttfbData = activeSites.map(s => ({
    name: s.name.length > 14 ? s.name.slice(0, 14) + '…' : s.name,
    ttfb: parseInt(s.metrics.ttfb) || 0,
    full: s.name,
  }));

  const scoreData = activeSites.map(s => ({
    name: s.name.length > 14 ? s.name.slice(0, 14) + '…' : s.name,
    score: s.metrics.score,
    full: s.name,
  }));

  const avgTTFB = activeSites.length
    ? Math.round(activeSites.reduce((a, s) => a + (parseInt(s.metrics.ttfb) || 0), 0) / activeSites.length)
    : 0;
  const avgScore = activeSites.length
    ? Math.round(activeSites.reduce((a, s) => a + s.metrics.score, 0) / activeSites.length)
    : 0;
  const bestTTFB = activeSites.length
    ? Math.min(...activeSites.map(s => parseInt(s.metrics.ttfb) || 999))
    : 0;

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshInfrastructure();
    setIsRefreshing(false);
  };

  const ttfbColor = (v: number) => v < 100 ? '#10B981' : v < 200 ? '#1A3FD8' : '#F59E0B';
  const scoreColor = (v: number) => v >= 90 ? '#10B981' : v >= 70 ? '#1A3FD8' : '#F59E0B';

  const CustomTooltip = ({ active, payload, unit }: any) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="bg-white border border-border rounded-2xl px-4 py-3 shadow-xl">
        <div className="text-[12px] font-black text-obsidian mb-0.5">{payload[0].payload.full}</div>
        <div className="text-[20px] font-black text-brand">{payload[0].value}{unit}</div>
      </div>
    );
  };

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
        <div>
          <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Analytics</span>
          <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
            Performance <span className="text-brand">Analytics.</span>
          </h1>
          <p className="text-text-muted text-[15px] font-medium mt-2 max-w-[560px]">
            Speed and optimization data pulled live from the Nexora Engine plugin on your sites.
          </p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-border rounded-xl text-[13px] font-bold text-obsidian hover:bg-surface-soft transition-all"
        >
          <RefreshCw size={15} className={isRefreshing ? "animate-spin" : ""} />
          Refresh
        </button>
      </div>

      {activeSites.length === 0 ? (
        <div className="bg-white border border-border rounded-[40px] p-16 text-center shadow-sm">
          <div className="h-16 w-16 bg-amber-500/10 rounded-[24px] flex items-center justify-center mx-auto mb-6">
            <AlertTriangle size={30} className="text-amber-500" />
          </div>
          <h2 className="text-[20px] font-black text-obsidian mb-3">No active plugin data</h2>
          <p className="text-text-muted text-[14px] font-medium max-w-[380px] mx-auto mb-8 leading-relaxed">
            Performance analytics require Nexora Engine to be installed and active on a connected WordPress site.
          </p>
          <Link
            href="/portal/dashboard/downloads"
            className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-xl font-black text-[14px] hover:scale-105 transition-transform shadow-lg shadow-brand/20"
          >
            <Download size={16} />
            Download Plugin
          </Link>
        </div>
      ) : (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
            {[
              { label: "Avg TTFB",    value: `${avgTTFB}ms`,     icon: Zap,          color: "text-brand",        bg: "bg-brand/5" },
              { label: "Best TTFB",   value: `${bestTTFB}ms`,    icon: Activity,     color: "text-emerald-500",  bg: "bg-emerald-500/5" },
              { label: "Avg Score",   value: `${avgScore}/100`,  icon: BarChart3,    color: "text-amber-500",    bg: "bg-amber-500/5" },
              { label: "Plugin Active", value: activeSites.length, icon: CheckCircle2, color: "text-obsidian",   bg: "bg-obsidian/5" },
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

          {/* TTFB Chart */}
          <div className="bg-white border border-border rounded-[40px] p-10 shadow-sm">
            <h2 className="text-[17px] font-black text-obsidian mb-1">Time to First Byte (TTFB)</h2>
            <p className="text-[13px] text-text-muted font-medium mb-8">
              Lower is better. Nexora Engine targets sub-100ms delivery.
            </p>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ttfbData} barSize={Math.min(52, Math.floor(320 / Math.max(ttfbData.length, 1)))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 700, fill: '#64748B' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} unit="ms" />
                  <Tooltip content={<CustomTooltip unit="ms" />} cursor={{ fill: '#F8FAFF' }} />
                  <Bar dataKey="ttfb" radius={[8, 8, 0, 0]}>
                    {ttfbData.map((entry, i) => (
                      <Cell key={i} fill={ttfbColor(entry.ttfb)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-border">
              {[
                { dot: 'bg-emerald-500', label: '< 100ms — Excellent' },
                { dot: 'bg-brand',       label: '100–200ms — Good' },
                { dot: 'bg-amber-500',   label: '> 200ms — Needs improvement' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-sm ${item.dot}`} />
                  <span className="text-[11px] font-bold text-text-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Score Chart */}
          <div className="bg-white border border-border rounded-[40px] p-10 shadow-sm">
            <h2 className="text-[17px] font-black text-obsidian mb-1">Optimization Score</h2>
            <p className="text-[13px] text-text-muted font-medium mb-8">
              Composite score across cache, compression, and delivery configuration.
            </p>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scoreData} barSize={Math.min(52, Math.floor(320 / Math.max(scoreData.length, 1)))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 700, fill: '#64748B' }} axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip unit="/100" />} cursor={{ fill: '#F8FAFF' }} />
                  <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                    {scoreData.map((entry, i) => (
                      <Cell key={i} fill={scoreColor(entry.score)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Per-site breakdown */}
          <div>
            <h2 className="text-[17px] font-black text-obsidian mb-5">Site Breakdown</h2>
            <div className="space-y-4">
              {activeSites.map((site, i) => {
                const tv = parseInt(site.metrics.ttfb) || 0;
                return (
                  <motion.div
                    key={site.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white border border-border rounded-[28px] p-8 shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-brand/5 rounded-2xl flex items-center justify-center border border-brand/10">
                          <Activity size={20} className="text-brand" />
                        </div>
                        <div>
                          <div className="text-[15px] font-black text-obsidian">{site.name}</div>
                          <div className="text-[12px] text-text-muted font-medium">{site.url}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="text-center">
                          <div className="text-[20px] font-black" style={{ color: ttfbColor(tv) }}>{site.metrics.ttfb}</div>
                          <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">TTFB</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[20px] font-black" style={{ color: scoreColor(site.metrics.score) }}>{site.metrics.score}/100</div>
                          <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Score</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[20px] font-black text-obsidian">{site.metrics.health}%</div>
                          <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Health</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[11px] font-bold text-text-muted">Optimization Progress</span>
                        <span className="text-[11px] font-black text-obsidian">{site.metrics.score}%</span>
                      </div>
                      <div className="h-2 bg-surface-soft rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${site.metrics.score}%` }}
                          transition={{ duration: 0.9, delay: i * 0.1 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: scoreColor(site.metrics.score) }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
