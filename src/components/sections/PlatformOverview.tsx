"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, ShieldCheck, Workflow, CheckCircle2, Plus } from "lucide-react";

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
    <section id="platform" className="bg-white py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[12px] font-bold uppercase tracking-wider rounded-full mb-6">
            Foundation
          </span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] leading-tight mb-8">
            Three layers. One infrastructure platform.
          </h2>
          <p className="max-w-[720px] text-[18px] text-text-secondary leading-[1.6] mb-12 font-medium">
            Nexora Engine combines static delivery, identity cloaking, and
            intelligent automation into a single coherent delivery system.
          </p>

          {/* Tab selector */}
          <div className="flex flex-wrap gap-3 bg-surface-soft/50 p-2 rounded-2xl border border-border w-fit">
            {pillars.map((p) => {
              const TabIcon = p.icon;
              const isActive = activeId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 text-[14px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-obsidian text-white shadow-xl"
                      : "text-text-muted hover:text-obsidian hover:bg-white"
                  }`}
                >
                  <TabIcon size={16} />
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
            className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] rounded-[32px] border border-border bg-white shadow-2xl overflow-hidden group"
          >
            {/* Left: description + stat badge */}
            <div className="p-10 lg:p-16 relative overflow-hidden">
               <Plus className="absolute top-6 left-6 h-5 w-5 text-border-strong opacity-40" />
               <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center mb-10 group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                  <CurrentIcon className="h-8 w-8 text-brand group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-[32px] font-bold text-obsidian mb-6 tracking-tight">
                  {current.title}
                </h3>
                <p className="text-[18px] text-text-secondary leading-[1.7] mb-10">
                  {current.description}
                </p>
                <div className="rounded-xl bg-obsidian text-white px-5 py-4 inline-block font-mono text-[13px] font-bold tracking-wider">
                  {current.stats}
                </div>
               </div>
            </div>

            {/* Right: feature list */}
            <div className="border-t border-border p-10 lg:border-l lg:border-t-0 lg:p-16 bg-surface-soft/30">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-10">
                Technical Capabilities
              </p>
              <ul className="space-y-8">
                {current.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-5">
                    <div className="mt-1 h-6 w-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-success" />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-obsidian mb-1">
                        {f.label}
                      </p>
                      <p className="text-[15px] text-text-muted font-medium">{f.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
