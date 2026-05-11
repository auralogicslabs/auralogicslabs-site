"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, ShieldCheck, Workflow, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    id: "speed",
    icon: Zap,
    title: "Speed Infrastructure",
    description:
      "Pre-rendered HTML snapshots served before WordPress boots. A universal drop-in cache delivers static files on Apache, Nginx, LiteSpeed, and IIS — with ETag and Last-Modified negotiation, 304 handling, and zero PHP execution on hit.",
    stats: "22ms TTFB · 100% cache hit on static · CDN-ready",
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
      "WordPress fingerprints removed at every layer. Generator meta, REST discovery, version strings, body class signatures, and emoji scripts are stripped or renamed. The window.wp namespace is cloaked. Wappalyzer reports Nginx, not WordPress.",
    stats: "Headers · Body classes · REST · Inline scripts · Asset paths",
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
      "Snapshots regenerate automatically when content changes — debounced, validated, and conflict-aware. Asset references are verified against disk before publication. Competing caching plugins are detected and surfaced with resolution guidance.",
    stats: "30s debounce · Asset validation · Conflict detection",
    features: [
      { label: "30-second debounce on save_post", note: "Bulk edits coalesce into one capture" },
      { label: "Asset validation before serving", note: "Broken CSS/JS surfaces in admin diagnostics" },
      { label: "Conflict detection on install", note: "Identifies WP Rocket, W3TC, Hummingbird, and more" },
      { label: "Atomic writes with rollback safety", note: "Snapshot swap is all-or-nothing" },
    ],
  },
];

export function PlatformOverview() {
  const [activeId, setActiveId] = useState("speed");
  const current = pillars.find((p) => p.id === activeId)!;
  const CurrentIcon = current.icon;

  return (
    <section id="platform" className="bg-brand-tint/20 py-24 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Three layers. One infrastructure platform.
          </h2>
          <p className="max-w-[720px] text-[18px] text-text-secondary leading-[1.6] mb-8">
            Nexora Engine combines static delivery, identity cloaking, and
            intelligent automation into a single coherent delivery system.
          </p>

          {/* Tab selector */}
          <div className="flex flex-wrap gap-2">
            {pillars.map((p) => {
              const TabIcon = p.icon;
              const isActive = activeId === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-brand text-white shadow-sm"
                      : "bg-surface border border-border text-text-muted hover:border-brand/40 hover:text-brand"
                  }`}
                >
                  <TabIcon size={14} />
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] rounded-[12px] border border-border bg-white shadow-card overflow-hidden"
          >
            {/* Left: description + stat badge */}
            <div className="p-8 lg:p-10">
              <div className="h-12 w-12 rounded-md bg-surface-soft border border-border flex items-center justify-center mb-6">
                <CurrentIcon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-[24px] font-semibold text-text-primary mb-4">
                {current.title}
              </h3>
              <p className="text-[16px] text-text-secondary leading-[1.6] mb-6">
                {current.description}
              </p>
              <div className="rounded-md bg-surface border border-border px-4 py-3">
                <span className="font-mono text-[13px] font-medium text-text-muted">
                  {current.stats}
                </span>
              </div>
            </div>

            {/* Right: feature list */}
            <div className="border-t border-border p-8 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted mb-6">
                How it works
              </p>
              <ul className="space-y-5">
                {current.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 flex-shrink-0 text-brand"
                    />
                    <div>
                      <p className="text-[15px] font-semibold text-text-primary">
                        {f.label}
                      </p>
                      <p className="text-[14px] text-text-secondary">{f.note}</p>
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
