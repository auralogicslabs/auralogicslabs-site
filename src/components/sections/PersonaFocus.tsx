"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Building2, Newspaper, Code2, CheckCircle2, ArrowRight, Plus, Copy, Check } from "lucide-react";

const useCases = [
  {
    id: "agencies",
    icon: Users,
    title: "Agencies",
    tagline: "Modern delivery without rebuilding client workflows.",
    description:
      "Ship enterprise-grade static performance across every client site without hiring React specialists or configuring CI/CD pipelines. Your team keeps working the way it always has.",
    benefits: [
      { label: "Keep existing WordPress workflows", note: "No new CMS, no new training required" },
      { label: "22ms TTFB on any shared host", note: "Static delivery works on budget hosting" },
      { label: "No React developers needed", note: "Zero frontend rebuild required" },
    ],
    stat: { value: "10×", label: "faster than standard rendering" },
  },
  {
    id: "enterprises",
    icon: Building2,
    title: "Enterprises",
    tagline: "Infrastructure modernization at zero migration risk.",
    description:
      "Eliminate WordPress fingerprint exposure across all public endpoints while maintaining compliance requirements, editorial workflows, and zero-downtime operation.",
    benefits: [
      { label: "Ghost Protocol on every response", note: "WP identity hidden at the header level" },
      { label: "Maintain compliance requirements", note: "No data leaves the WP environment" },
      { label: "Zero-downtime toggle on/off", note: "Revert in seconds if needed" },
    ],
    stat: { value: "Zero", label: "fingerprints exposed to the internet" },
  },
  {
    id: "publishers",
    icon: Newspaper,
    title: "Publishers",
    tagline: "Handle traffic spikes without scaling servers.",
    description:
      "Static delivery means traffic spikes no longer translate to server overload. Editorial teams keep their Gutenberg workflow — readers get sub-second load times.",
    benefits: [
      { label: "Traffic spikes handled at zero cost", note: "Static files need no PHP workers" },
      { label: "Core Web Vitals improvement", note: "LCP 1.2s, CLS 0.02 — both Google green" },
      { label: "Maintain editorial workflows", note: "Publish → live in seconds, as always" },
    ],
    stat: { value: "−68%", label: "LCP score improvement" },
  },
  {
    id: "developers",
    icon: Code2,
    title: "Engineers",
    tagline: "Headless-grade architecture, zero DevOps overhead.",
    description:
      "Get the delivery performance of a fully decoupled setup — REST masking, static HTML, CDN-ready headers — without maintaining build pipelines or separate deployments.",
    benefits: [
      { label: "REST, GraphQL, and WP hooks supported", note: "Full API-first architecture" },
      { label: "JSON diagnostic endpoint built in", note: "Pipe to Datadog, Grafana, or your own dash" },
      { label: "Programmatic regeneration", note: "via WP-CLI and filterable hooks" },
    ],
    stat: { value: "200", label: "lines of audited, self-contained PHP" },
  },
];

const fullJson = `{
  "verdict": "fast_path_dropin",
  "ttfb_ms": 22,
  "cache_status": "HIT",
  "drop_in": {
    "installed": true,
    "signature": "verified",
    "wp_cache": true
  },
  "snapshots": {
    "total": 33,
    "last_regen": "2026-05-08T08:06:30Z"
  },
  "server": "nginx/1.26.1"
}`;

export function PersonaFocus() {
  const [activeId, setActiveId] = useState("agencies");
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const current = useCases.find((u) => u.id === activeId)!;
  const CurrentIcon = current.icon;

  useEffect(() => {
    if (activeId !== "developers") return;
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(fullJson.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullJson.length) {
        clearInterval(intervalId);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [activeId]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderCode = () => {
    if (displayedText.length < fullJson.length) {
      return <span className="text-[#E2E8F0]">{displayedText}<span className="animate-pulse">_</span></span>;
    }
    return (
      <>
        <span className="text-[#94A3B8]">{`{`}</span>{`
  `}<span className="text-brand-soft">"verdict"</span>{`: `}<span className="text-[#16A34A]">"fast_path_dropin"</span>{`,
  `}<span className="text-brand-soft">"ttfb_ms"</span>{`: `}<span className="text-[#F59E0B]">22</span>{`,
  `}<span className="text-brand-soft">"cache_status"</span>{`: `}<span className="text-[#16A34A]">"HIT"</span>{`,
  `}<span className="text-brand-soft">"drop_in"</span>{`: `}<span className="text-[#94A3B8]">{`{`}</span>{`
    `}<span className="text-brand-soft">"installed"</span>{`: `}<span className="text-[#F59E0B]">true</span>{`,
    `}<span className="text-brand-soft">"signature"</span>{`: `}<span className="text-[#16A34A]">"verified"</span>{`,
    `}<span className="text-brand-soft">"wp_cache"</span>{`: `}<span className="text-[#F59E0B]">true</span>{`
  `}<span className="text-[#94A3B8]">{`}`}</span>{`,
  `}<span className="text-brand-soft">"snapshots"</span>{`: `}<span className="text-[#94A3B8]">{`{`}</span>{`
    `}<span className="text-brand-soft">"total"</span>{`: `}<span className="text-[#F59E0B]">33</span>{`,
    `}<span className="text-brand-soft">"last_regen"</span>{`: `}<span className="text-[#16A34A]">"2026-05-08T08:06:30Z"</span>{`
  `}<span className="text-[#94A3B8]">{`}`}</span>{`,
  `}<span className="text-brand-soft">"server"</span>{`: `}<span className="text-[#16A34A]">"nginx/1.26.1"</span>{`
`}<span className="text-[#94A3B8]">{`}`}</span>
      </>
    );
  };

  return (
    <section className="bg-surface-soft py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Architectural Traits */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-12"
        >
          <div className="max-w-[800px]">
            <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[12px] font-bold uppercase tracking-wider rounded-full mb-6">
              Persona Focus
            </span>
            <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] leading-tight">
              Built for the teams modernizing <br className="hidden md:block" /> WordPress at scale.
            </h2>
          </div>

          {/* Persona Tab selector - Using the Obsidian Style */}
          <div className="flex flex-wrap gap-2.5 bg-white border border-border p-2 rounded-2xl shadow-sm h-fit">
            {useCases.map((u) => {
              const TabIcon = u.icon;
              const isActive = activeId === u.id;
              return (
                <button
                  key={u.id}
                  onClick={() => setActiveId(u.id)}
                  className={`inline-flex items-center gap-3 rounded-xl px-5 py-3 text-[14px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-obsidian text-white shadow-xl"
                      : "text-text-muted hover:text-obsidian hover:bg-surface-soft"
                  }`}
                >
                  <TabIcon size={16} />
                  {u.title}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Animated panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 rounded-[40px] border border-border bg-white shadow-2xl overflow-hidden min-h-[600px] group"
          >
            {/* Left: Illustration / Terminal (7 cols) */}
            <div className="lg:col-span-7 bg-surface-soft/50 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-border relative overflow-hidden flex items-center justify-center">
              <Plus className="absolute top-8 left-8 h-6 w-6 text-border-strong opacity-40 group-hover:rotate-90 transition-transform duration-700" />
              
              <AnimatePresence mode="wait">
                {activeId === "developers" ? (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full bg-[#0F172A] border border-[#1E293B] rounded-3xl shadow-2xl overflow-hidden relative"
                  >
                    <div className="flex items-center gap-2 px-6 py-4 border-b border-[#1E293B] bg-[#0B1120]">
                      <div className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
                      <div className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
                      <div className="h-3 w-3 rounded-full bg-[#10B981]/80" />
                      <div className="ml-4 font-mono text-[11px] text-[#64748B] tracking-wider uppercase">GET /wp-json/nexora/v1/diagnostic</div>
                    </div>
                    <button onClick={handleCopy} className="absolute top-16 right-6 p-2 rounded-lg bg-[#1E293B] text-[#94A3B8] hover:text-white transition-colors">
                      {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                    </button>
                    <div className="p-10 font-mono text-[14px] leading-relaxed">
                      <pre className="whitespace-pre-wrap">{renderCode()}</pre>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-[500px]"
                  >
                    <div className="relative aspect-square">
                       <div className="absolute inset-0 bg-brand/5 rounded-full animate-pulse blur-3xl" />
                       <div className="relative h-full w-full rounded-full border-2 border-dashed border-brand/20 flex items-center justify-center p-12">
                          <div className="h-full w-full rounded-full bg-white border border-border shadow-2xl flex items-center justify-center p-16">
                             <CurrentIcon className="w-full h-full text-brand" strokeWidth={1} />
                          </div>
                       </div>
                       {/* Floating Stat Chip */}
                       <div className="absolute bottom-10 right-0 bg-obsidian text-white p-8 rounded-3xl shadow-2xl">
                          <span className="block text-[44px] font-bold tracking-tighter mb-1">{current.stat.value}</span>
                          <span className="block text-[12px] font-bold text-white/50 uppercase tracking-widest">{current.stat.label}</span>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Benefits Content (5 cols) */}
            <div className="lg:col-span-5 p-10 lg:p-16 flex flex-col justify-center">
              <h3 className="text-[32px] font-bold text-obsidian mb-6 tracking-tight leading-snug">
                {current.tagline}
              </h3>
              <p className="text-[18px] text-text-secondary leading-[1.7] mb-12 font-medium">
                {current.description}
              </p>

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-8">
                Key Strategic Benefits
              </p>
              <ul className="space-y-8">
                {current.benefits.map((b) => (
                  <li key={b.label} className="flex items-start gap-5 group/item">
                    <div className="mt-1 h-6 w-6 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand transition-colors duration-300">
                      <CheckCircle2 size={14} className="text-brand group-hover/item:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-obsidian mb-1">
                        {b.label}
                      </p>
                      <p className="text-[15px] text-text-muted font-medium">{b.note}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-16 pt-10 border-t border-border">
                <button className="inline-flex items-center gap-3 text-[16px] font-bold text-brand hover:gap-5 transition-all duration-300">
                  Explore {current.title} use cases
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
