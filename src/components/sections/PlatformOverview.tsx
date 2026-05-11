"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, ShieldCheck, Workflow, CheckCircle2, Plus, Terminal, Activity } from "lucide-react";

const pillars = [
  {
    id: "speed",
    icon: Zap,
    title: "Speed Infrastructure",
    description:
      "Pre-rendered HTML snapshots served before WordPress boots. A universal drop-in cache delivers static files on Apache, Nginx, LiteSpeed, and IIS — with zero PHP execution on hit.",
    stats: "22ms TTFB · 100% cache hit · CDN-ready",
    features: [
      { label: "Static HTML served before PHP boots", note: "advanced-cache.php drop-in fires first" },
      { label: "ETag + 304 negotiation built in", note: "Browser cache fully utilized" },
      { label: "Universal server support", note: "Apache, Nginx, LiteSpeed, IIS — all covered" },
      { label: "Zero PHP execution on cache hit", note: "WP, plugins, and DB never load" },
    ],
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Ghost Protocol",
    description:
      "WordPress fingerprints removed at every layer. Generator meta, REST discovery, and body class signatures are stripped or renamed. Wappalyzer reports Nginx, not WordPress.",
    stats: "Headers · Body classes · REST · Asset paths",
    features: [
      { label: "Generator meta and version strings stripped", note: "No WP version disclosed in HTML" },
      { label: "REST API discovery removed from <head>", note: "wp-json link tag eliminated" },
      { label: "window.wp cloaked to window.ncx", note: "JS namespace invisible to fingerprinters" },
      { label: "Response headers rewritten", note: "Server: nginx, X-Powered-By: Next.js" },
    ],
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "Snapshots regenerate automatically when content changes — debounced, validated, and conflict-aware. Asset references are verified against disk before publication.",
    stats: "30s debounce · Asset validation · Conflict detection",
    features: [
      { label: "30-second debounce on save_post", note: "Bulk edits coalesce into one capture" },
      { label: "Asset validation before serving", note: "Broken CSS/JS surfaces in admin diagnostics" },
      { label: "Conflict detection on install", note: "Identifies WP Rocket, W3TC, and more" },
      { label: "Atomic writes with rollback safety", note: "Snapshot swap is all-or-nothing" },
    ],
  },
];

export function PlatformOverview() {
  const [activeId, setActiveId] = useState("speed");
  const current = pillars.find((p) => p.id === activeId)!;
  const CurrentIcon = current.icon;

  return (
    <section id="platform" className="bg-white py-24 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16"
        >
          <div className="max-w-[720px]">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-0.5 w-12 bg-[#F39A09]" />
               <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Engineering Foundation</span>
            </div>
            <h2 className="text-[32px] md:text-[50px] font-extrabold text-obsidian tracking-[-0.05em] leading-tight mb-8">
              Three layers. <br /> One infrastructure platform.
            </h2>
            <p className="text-[16px] text-text-secondary leading-[1.6] font-medium">
              Nexora Engine combines static delivery, identity cloaking, and
              intelligent automation into a single coherent delivery system.
            </p>
          </div>

          {/* Standardized Tab Selector */}
          <div className="flex flex-wrap gap-3 bg-surface-soft/50 border border-border p-3 rounded-[32px] backdrop-blur-xl h-fit">
            {pillars.map((p) => {
              const TabIcon = p.icon;
              const isActive = activeId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-[14px] font-bold transition-all duration-500 ${
                    isActive
                      ? "bg-[#050B25] text-white shadow-xl scale-105"
                      : "text-text-muted hover:text-obsidian hover:bg-white"
                  }`}
                >
                  <TabIcon size={16} className={isActive ? 'text-brand' : ''} />
                  {p.title}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Animated content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] rounded-[48px] border border-border bg-white shadow-[0_48px_96px_rgba(2,6,23,0.08)] overflow-hidden group"
          >
            {/* Left: Description + Stat Badge */}
            <div className="p-10 lg:p-20 relative overflow-hidden flex flex-col justify-center">
               <Plus className="absolute top-8 left-8 h-6 w-6 text-border-strong opacity-40 group-hover:rotate-90 transition-transform duration-1000" />
               <div className="relative z-10">
                <div className="h-16 w-16 rounded-[24px] bg-brand/5 border border-brand/10 flex items-center justify-center mb-10 group-hover:bg-[#050B25] group-hover:border-brand/40 transition-all duration-500">
                  <CurrentIcon className="h-8 w-8 text-brand group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-[24px] font-bold text-obsidian mb-6 tracking-tight">
                  {current.title}
                </h3>
                <p className="text-[15px] text-text-secondary leading-[1.7] mb-10 font-medium max-w-[440px]">
                  {current.description}
                </p>
                <div className="rounded-2xl bg-[#050B25] text-white px-8 py-5 inline-block font-mono text-[11px] font-bold tracking-widest border border-brand/20 shadow-xl">
                  {current.stats}
                </div>
               </div>
            </div>

            {/* Right: Feature List + Empty Space Utilization */}
            <div className="border-t border-border p-10 lg:border-l lg:border-t-0 lg:p-20 bg-surface-soft/30 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand mb-12">
                  Technical Capabilities
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {current.features.map((f) => (
                    <li key={f.label} className="flex items-start gap-5 group/item">
                      <div className="mt-1 h-6 w-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-success transition-all duration-300">
                        <CheckCircle2 size={12} className="text-success group-hover/item:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-obsidian mb-1">
                          {f.label}
                        </p>
                        <p className="text-[13px] text-text-muted font-medium leading-relaxed">{f.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Space Utilization: Quick Infrastructure Audit Component */}
              <div className="mt-20 pt-10 border-t border-border/50">
                 <div className="bg-white border border-border rounded-3xl p-8 flex items-center justify-between shadow-sm hover:shadow-xl transition-all duration-700 group/audit">
                    <div className="flex items-center gap-6">
                       <div className="h-12 w-12 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center group-hover/audit:bg-[#050B25] group-hover/audit:border-brand transition-all duration-500">
                          <Terminal size={20} className="text-brand group-hover/audit:text-white transition-colors" />
                       </div>
                       <div>
                          <div className="text-[14px] font-bold text-obsidian mb-0.5">Automated Integrity Audit</div>
                          <div className="text-[11px] text-text-muted font-medium">Verify system layers against Auralogics standards.</div>
                       </div>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 bg-surface-soft hover:bg-obsidian hover:text-white rounded-xl text-[12px] font-bold transition-all duration-500">
                       <Activity size={14} className="text-brand" />
                       Run Audit
                    </button>
                 </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
