"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Building2, Newspaper, Code2, CheckCircle2, ArrowRight, Plus, Copy, Check, Sparkles, Globe, Shield, Zap, Fingerprint } from "lucide-react";
import Link from "next/link";

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
    visual: "network",
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
    visual: "shield",
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
    visual: "pulse",
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
    stat: { value: "22ms", label: "latency reduction benchmark" },
    visual: "terminal",
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
  const [displayedText, setDisplayedText] = useState("");
  const current = useCases.find((u) => u.id === activeId)!;

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

  const renderCode = () => {
    if (displayedText.length < fullJson.length) {
      return <span className="text-white/60">{displayedText}<span className="animate-pulse">_</span></span>;
    }
    return (
      <>
        <span className="text-white/40">{`{`}</span>{`
  `}<span className="text-brand-soft">"verdict"</span>{`: `}<span className="text-emerald-400">"fast_path_dropin"</span>{`,
  `}<span className="text-brand-soft">"ttfb_ms"</span>{`: `}<span className="text-[#F39A09]">22</span>{`,
  `}<span className="text-brand-soft">"cache_status"</span>{`: `}<span className="text-emerald-400">"HIT"</span>{`,
  `}<span className="text-brand-soft">"drop_in"</span>{`: `}<span className="text-white/40">{`{`}</span>{`
    `}<span className="text-brand-soft">"installed"</span>{`: `}<span className="text-[#F39A09]">true</span>{`,
    `}<span className="text-brand-soft">"signature"</span>{`: `}<span className="text-emerald-400">"verified"</span>{`,
    `}<span className="text-brand-soft">"wp_cache"</span>{`: `}<span className="text-[#F39A09]">true</span>{`
  `}<span className="text-white/40">{`}`}</span>{`,
  `}<span className="text-brand-soft">"snapshots"</span>{`: `}<span className="text-white/40">{`{`}</span>{`
    `}<span className="text-brand-soft">"total"</span>{`: `}<span className="text-[#F39A09]">33</span>{`,
    `}<span className="text-brand-soft">"last_regen"</span>{`: `}<span className="text-emerald-400">"2026-05-08T08:06:30Z"</span>{`
  `}<span className="text-white/40">{`}`}</span>{`,
  `}<span className="text-brand-soft">"server"</span>{`: `}<span className="text-emerald-400">"nginx/1.26.1"</span>{`
`}<span className="text-white/40">{`}`}</span>
      </>
    );
  };

  return (
    <section className="bg-white py-24 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-16"
        >
          <div className="max-w-[800px]">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-12 bg-brand" />
                <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-[0.3em]">Operational Perspectives</span>
             </div>
            <h2 className="text-[32px] md:text-[50px] lg:text-[62px] font-extrabold text-obsidian tracking-[-0.05em] leading-[1.05]">
              Built for the teams <br /> 
              modernizing WordPress.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 bg-surface-soft/50 border border-border p-3 rounded-[32px] backdrop-blur-xl h-fit">
            {useCases.map((u) => {
              const TabIcon = u.icon;
              const isActive = activeId === u.id;
              return (
                <button
                  key={u.id}
                  onClick={() => setActiveId(u.id)}
                  className={`inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-[15px] font-bold transition-all duration-500 ${
                    isActive
                      ? "bg-[#050B25] text-white shadow-xl scale-105"
                      : "text-text-muted hover:text-obsidian hover:bg-white"
                  }`}
                >
                  <TabIcon size={18} className={isActive ? 'text-[#F39A09]' : ''} />
                  {u.title}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* --- REFINED SPLIT ARCHITECTURAL VARIATION --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 rounded-[60px] border border-border bg-white shadow-[0_80px_160px_rgba(2,6,23,0.12)] overflow-hidden min-h-[700px]"
          >
            {/* Left: Atmospheric Visual Panel (Midnight / Blue) */}
            <div className="lg:col-span-7 bg-[#020617] p-12 lg:p-24 relative overflow-hidden flex flex-col items-center justify-center border-r border-white/5">
              
              {/* Vibrant Atmospheric Mesh */}
              <div className="absolute inset-0 opacity-40">
                 <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-brand/30 blur-[120px] rounded-full animate-pulse" />
                 <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-[#F39A09]/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]" />
              </div>

              {/* Premium Grain */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Cfilter id='noiseFilter'%3%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3%3C/filter%3%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3%3C/svg%3")` }} />
              
              <AnimatePresence mode="wait">
                {activeId === "developers" ? (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full bg-[#0A0F2D]/80 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-2xl overflow-hidden relative z-20"
                  >
                    <div className="flex items-center justify-between px-8 py-5 border-b border-white/5 bg-white/[0.02]">
                      <div className="flex gap-2">
                         <div className="h-3 w-3 rounded-full bg-white/10" />
                         <div className="h-3 w-3 rounded-full bg-white/10" />
                         <div className="h-3 w-3 rounded-full bg-white/10" />
                      </div>
                      <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold">Diagnostic_Endpoint.json</span>
                    </div>
                    <div className="p-12 font-mono text-[15px] leading-relaxed">
                      <pre className="whitespace-pre-wrap">{renderCode()}</pre>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="relative w-full flex flex-col items-center justify-center z-20"
                  >
                     <div className="relative mb-16">
                        <motion.div 
                           animate={{ y: [0, -15, 0] }}
                           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                           className="h-72 w-72 rounded-[64px] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-[0_48px_96px_rgba(0,0,0,0.5)] flex items-center justify-center relative"
                        >
                           {activeId === 'agencies' && <Globe className="h-24 w-24 text-white" strokeWidth={0.5} />}
                           {activeId === 'enterprises' && <Shield className="h-24 w-24 text-white" strokeWidth={0.5} />}
                           {activeId === 'publishers' && <Zap className="h-24 w-24 text-white" strokeWidth={0.5} />}
                           
                           <div className="absolute -top-4 -right-4 h-14 w-14 bg-[#F39A09] rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                              <Plus className="text-white h-7 w-7" />
                           </div>
                        </motion.div>
                     </div>

                     <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[48px] shadow-2xl w-full max-w-[400px] relative overflow-hidden">
                        <Sparkles className="text-[#F39A09] h-6 w-6 mb-6" />
                        <div className="flex items-baseline gap-3 mb-2">
                           <span className="text-[64px] font-extrabold text-white tracking-tighter leading-none">{current.stat.value}</span>
                        </div>
                        <span className="text-[12px] font-bold text-white/80 uppercase tracking-[0.4em]">{current.stat.label}</span>
                        
                        <div className="mt-8 flex gap-2">
                           {[1,2,3,4].map(i => <div key={i} className={`h-1.5 w-8 rounded-full ${i === 1 ? 'bg-[#F39A09]' : 'bg-white/10'}`} />)}
                        </div>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Narrative Content (Sophisticated Light Gray / Soft Blue) */}
            <div className="lg:col-span-5 p-12 lg:p-24 flex flex-col justify-center bg-[#F8FAFF] relative z-10">
                <h3 className="text-[32px] font-extrabold text-obsidian mb-8 tracking-tight leading-[1.1]">
                {current.tagline}
              </h3>
              <p className="text-[17px] text-text-secondary leading-relaxed mb-12 font-medium">
                {current.description}
              </p>

              <div className="space-y-10">
                {current.benefits.map((b) => (
                  <div key={b.label} className="flex items-start gap-6">
                    <div className="mt-1 h-8 w-8 rounded-xl bg-white border border-brand/10 shadow-sm flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={16} className="text-brand" />
                    </div>
                    <div>
                      <p className="text-[17px] font-extrabold text-obsidian mb-1 tracking-tight">
                        {b.label}
                      </p>
                      <p className="text-[14px] text-text-muted font-medium leading-relaxed">{b.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-10 border-t border-brand/10">
                <Link href="/nexora-engine/docs" className="group inline-flex items-center gap-4 text-[18px] font-extrabold text-brand hover:text-obsidian transition-colors duration-300">
                  Engineering Docs
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-500" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
