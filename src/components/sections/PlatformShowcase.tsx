"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Zap, Stethoscope, ImageIcon, LayoutDashboard, ArrowRight, Check,
  CheckCircle2, AlertTriangle, TrendingDown, Activity, Server,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

// ──────────────────────────────────────────────────────────────
// Product definitions. the single source of truth for this section.
// Each product owns its accent, copy, value props, and a bespoke UI
// vignette rendered as real interface (no placeholder screenshots).
// ──────────────────────────────────────────────────────────────

type ProductKey = "engine" | "pulse" | "media" | "portal";

interface Product {
  key: ProductKey;
  name: string;
  icon: typeof Zap;
  accent: string;
  accentSoft: string;
  status: "Live" | "Free";
  tagline: string;
  headline: string;
  description: string;
  points: string[];
  href: string;
  cta: string;
}

const PRODUCTS: Product[] = [
  {
    key: "engine",
    name: "Nexora Engine",
    icon: Zap,
    accent: "#1A3FD8",
    accentSoft: "#60A5FA",
    status: "Live",
    tagline: "Adaptive runtime delivery",
    headline: "Static-speed WordPress, without the rebuild.",
    description:
      "Pre-renders every page into flat HTML served before PHP boots, keeping Elementor, WooCommerce, and your whole plugin stack exactly as they are.",
    points: [
      "~22ms TTFB versus 800ms+ on a traditional stack",
      "Zero PHP execution on a cache hit",
      "Runs on Apache, Nginx, LiteSpeed, and IIS",
    ],
    href: "/products/nexora-engine",
    cta: "Explore Nexora Engine",
  },
  {
    key: "pulse",
    name: "Nexora Pulse",
    icon: Stethoscope,
    accent: "#13716A",
    accentSoft: "#2DD4BF",
    status: "Free",
    tagline: "SEO operations console",
    headline: "Know exactly why Google won't rank you.",
    description:
      "One free SEO console for WordPress. The Index Doctor reads real Search Console verdicts to explain why pages aren't indexed, then finds the pattern across them.",
    points: [
      "Index Doctor: real Search Console verdicts",
      "Internal link graph with orphan detection",
      "Core Web Vitals from PageSpeed & real users",
    ],
    href: "/products/nexora-pulse",
    cta: "Explore Nexora Pulse",
  },
  {
    key: "media",
    name: "Nexora Media",
    icon: ImageIcon,
    accent: "#7C3AED",
    accentSoft: "#A78BFA",
    status: "Live",
    tagline: "Edge media optimization",
    headline: "Every image, optimized automatically.",
    description:
      "Background AVIF and WebP conversion with adaptive responsive sizing that cuts image payload by up to 70%, without touching your media library.",
    points: [
      "AVIF / WebP conversion in the background",
      "Adaptive responsive sizing on demand",
      "Up to 70% smaller image payload",
    ],
    href: "/products/nexora-media",
    cta: "Explore Nexora Media",
  },
  {
    key: "portal",
    name: "Auralogics Portal",
    icon: LayoutDashboard,
    accent: "#F39A09",
    accentSoft: "#FBBF24",
    status: "Live",
    tagline: "Fleet command center",
    headline: "Run every site from one command center.",
    description:
      "A single control plane for your entire WordPress fleet: licenses, deployments, runtime configuration, and team access, with audit logs and one-click rollback.",
    points: [
      "Unified dashboard across every connected site",
      "Team roles, audit log, and access control",
      "One-click rollback on any deployment",
    ],
    href: "/portal",
    cta: "Open the Portal",
  },
];

// ──────────────────────────────────────────────────────────────
// Per-product UI vignettes. small, real interface compositions.
// These read as genuine product surfaces, not stock screenshots.
// ──────────────────────────────────────────────────────────────

function EngineVignette() {
  const bars = [
    { l: "Traditional WordPress", v: "852ms", w: 100, c: "#F59E0B", muted: true },
    { l: "With page cache", v: "310ms", w: 38, c: "#94A3B8", muted: true },
    { l: "Nexora Engine", v: "22ms", w: 6, c: "#60A5FA", muted: false },
  ];
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 mb-1">Time to First Byte</p>
          <p className="text-[15px] font-bold text-white/85">Response latency comparison</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: "rgba(96,165,250,0.12)", color: "#60A5FA" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA] animate-pulse" /> Cache hit
        </span>
      </div>

      <div className="space-y-5 flex-1 flex flex-col justify-center">
        {bars.map((b, i) => (
          <div key={b.l}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[12px] font-semibold ${b.muted ? "text-white/40" : "text-white/85"}`}>{b.l}</span>
              <span className="font-mono text-[13px] font-bold" style={{ color: b.c }}>{b.v}</span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${b.w}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ background: b.muted ? `${b.c}55` : `linear-gradient(90deg, ${b.c}, #1A3FD8)` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/[0.07]">
        {[
          { v: "100%", l: "Static hits" },
          { v: "0", l: "PHP on hit" },
          { v: "All", l: "Hosts" },
        ].map((s) => (
          <div key={s.l}>
            <p className="font-mono text-[18px] font-black text-white/90 leading-none">{s.v}</p>
            <p className="text-[9px] text-white/35 uppercase tracking-wider mt-1.5">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PulseVignette() {
  const verdicts = [
    { icon: CheckCircle2, l: "Indexed", v: 142, c: "#22C55E" },
    { icon: AlertTriangle, l: "Crawled, not indexed", v: 9, c: "#F59E0B" },
    { icon: AlertTriangle, l: "Discovered, not indexed", v: 4, c: "#EF4444" },
  ];
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 mb-1">Index Doctor</p>
          <p className="text-[15px] font-bold text-white/85">173 URLs inspected</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: "rgba(45,212,191,0.12)", color: "#2DD4BF" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF] animate-pulse" /> Live
        </span>
      </div>

      <div className="space-y-2.5 mb-5">
        {verdicts.map((vd, i) => (
          <motion.div
            key={vd.l}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className="flex items-center gap-3 rounded-xl px-3.5 py-3 border"
            style={{ background: `${vd.c}0c`, borderColor: `${vd.c}26` }}
          >
            <vd.icon className="h-4 w-4 flex-shrink-0" style={{ color: vd.c }} />
            <span className="text-[12px] font-semibold text-white/70 flex-1">{vd.l}</span>
            <span className="font-mono text-[15px] font-black" style={{ color: vd.c }}>{vd.v}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-auto rounded-xl p-4 border" style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.2)" }}>
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-red-400 mb-1">Pattern detected</p>
            <p className="text-[13px] font-bold text-white/85 leading-snug">9 of 13 not-indexed pages are under 300 words.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MediaVignette() {
  const files = [
    { name: "hero-banner.jpg", from: "1.4 MB", to: "180 KB", saved: "87%" },
    { name: "product-01.png", from: "920 KB", to: "142 KB", saved: "85%" },
    { name: "gallery-03.jpg", from: "2.1 MB", to: "310 KB", saved: "85%" },
  ];
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 mb-1">Media Optimizer</p>
          <p className="text-[15px] font-bold text-white/85">Background conversion queue</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: "rgba(167,139,250,0.12)", color: "#A78BFA" }}>
          AVIF
        </span>
      </div>

      <div className="space-y-2.5 flex-1">
        {files.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            className="rounded-xl px-3.5 py-3 border border-white/[0.07]"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <p className="text-[11px] font-mono text-white/40 mb-2 truncate">{f.name}</p>
            <div className="flex items-center gap-2.5">
              <span className="text-[12px] font-mono text-white/35 line-through">{f.from}</span>
              <ArrowRight className="h-3 w-3 text-white/25" />
              <span className="text-[12px] font-mono font-bold text-emerald-400">{f.to}</span>
              <span className="ml-auto text-[10px] font-black px-2 py-0.5 rounded-md" style={{ background: "rgba(167,139,250,0.16)", color: "#C4B5FD" }}>↓{f.saved}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-lg px-3.5 py-2.5 border" style={{ background: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.2)" }}>
        <TrendingDown className="h-3.5 w-3.5 text-emerald-400" />
        <span className="text-[11px] font-semibold text-emerald-300/90">847 images optimized · originals preserved</span>
      </div>
    </div>
  );
}

function PortalVignette() {
  const sites = [
    { name: "acme-store.com", engine: true, pulse: true, media: true },
    { name: "editorial.blog", engine: true, pulse: true, media: false },
    { name: "client-portal.io", engine: true, pulse: false, media: true },
    { name: "saas-landing.app", engine: true, pulse: true, media: true },
  ];
  return (
    <div className="p-6 sm:p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 mb-1">Fleet Overview</p>
          <p className="text-[15px] font-bold text-white/85">12 sites connected</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: "rgba(251,191,36,0.12)", color: "#FBBF24" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> All healthy
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-3 gap-y-1 mb-3 px-3.5">
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/30">Site</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/30 w-12 text-center">Engine</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/30 w-12 text-center">Pulse</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/30 w-12 text-center">Media</span>
      </div>

      <div className="space-y-2 flex-1">
        {sites.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="grid grid-cols-[1fr_auto_auto_auto] gap-x-3 items-center rounded-xl px-3.5 py-2.5 border border-white/[0.07]"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <span className="text-[12px] font-mono text-white/55 truncate">{s.name}</span>
            {[s.engine, s.pulse, s.media].map((on, j) => (
              <span key={j} className="w-12 flex justify-center">
                {on ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={3} />
                ) : (
                  <span className="h-1 w-3 rounded-full bg-white/12" />
                )}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const VIGNETTES: Record<ProductKey, React.FC> = {
  engine: EngineVignette,
  pulse: PulseVignette,
  media: MediaVignette,
  portal: PortalVignette,
};

// ──────────────────────────────────────────────────────────────
// Main section
// ──────────────────────────────────────────────────────────────

export function PlatformShowcase() {
  const [active, setActive] = useState<ProductKey>("engine");
  const product = PRODUCTS.find((p) => p.key === active)!;
  const Vignette = VIGNETTES[active];

  return (
    <section id="platform" className="relative overflow-hidden py-24 md:py-32 lg:py-36" style={{ background: "#050B25" }}>
      {/* Ambient field */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[760px] h-[560px] rounded-full blur-[230px] opacity-25" style={{ background: "radial-gradient(circle, #1A3FD8 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[620px] h-[520px] rounded-full blur-[230px] opacity-[0.14]" style={{ background: `radial-gradient(circle, ${product.accent} 0%, transparent 70%)`, transition: "background 0.6s ease" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      </div>

      {/* Oversized N-mark watermark. brand anchor */}
      <div className="absolute -right-32 -top-16 w-[560px] h-[560px] opacity-[0.05] pointer-events-none select-none hidden lg:block rotate-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/nexora.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[760px] mb-14 md:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full pl-1.5 pr-4 py-1.5 mb-6 border border-white/10" style={{ background: "rgba(255,255,255,0.04)" }}>
            <span className="h-6 w-6 rounded-full bg-white flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nexora.svg" alt="Nexora" className="h-4 w-4 object-contain" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/70">The Platform</span>
          </div>
          <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-extrabold leading-[1.02] tracking-[-0.045em] text-white mb-5">
            Four products.{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)" }}>
              One platform.
            </span>
          </h2>
          <p className="text-[17px] md:text-[19px] leading-[1.65] font-medium text-white/45 max-w-[620px]">
            Each Nexora product is a focused, drop-in tool that respects your existing WordPress stack.
            Together they form a single platform for speed, visibility, and control.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {PRODUCTS.map((p) => {
            const isActive = p.key === active;
            const Icon = p.icon;
            return (
              <button
                key={p.key}
                onClick={() => setActive(p.key)}
                className="group relative flex items-center gap-2.5 rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 border"
                style={{
                  background: isActive ? `${p.accent}1f` : "rgba(255,255,255,0.03)",
                  borderColor: isActive ? `${p.accent}66` : "rgba(255,255,255,0.08)",
                }}
              >
                <span
                  className="h-7 w-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ background: isActive ? p.accent : "rgba(255,255,255,0.06)" }}
                >
                  <Icon className="h-4 w-4" style={{ color: isActive ? "#fff" : "rgba(255,255,255,0.45)" }} />
                </span>
                <span className="text-left">
                  <span className={`block text-[13px] font-bold leading-tight transition-colors ${isActive ? "text-white" : "text-white/55 group-hover:text-white/80"}`}>
                    {p.name}
                  </span>
                  <span className="hidden sm:block text-[10px] font-semibold leading-tight" style={{ color: isActive ? p.accentSoft : "rgba(255,255,255,0.3)" }}>
                    {p.tagline}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Showcase frame */}
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8 items-stretch">
          {/* Left. bespoke UI vignette inside a branded window */}
          <div
            className="relative rounded-[24px] md:rounded-[28px] overflow-hidden border min-h-[420px] flex flex-col"
            style={{ background: "linear-gradient(160deg, #0C1736 0%, #080E26 100%)", borderColor: `${product.accent}33` }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-white/[0.07] flex-shrink-0" style={{ background: "rgba(255,255,255,0.02)" }}>
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/[0.08]" style={{ background: "rgba(255,255,255,0.03)" }}>
                  <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: product.accentSoft }} />
                  <span className="text-[10px] font-mono text-white/35">
                    {product.key === "portal" ? "portal.auralogicslabs.com" : "your-site.com/wp-admin"} · {product.name}
                  </span>
                </div>
              </div>
            </div>
            {/* Vignette body. animated per tab */}
            <div className="relative flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Vignette />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right. narrative panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[24px] md:rounded-[28px] border border-white/[0.08] p-7 sm:p-9 flex flex-col"
              style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)" }}
            >
              {/* Accent top bar */}
              <div className="absolute top-0 left-7 right-7 h-px" style={{ background: `linear-gradient(90deg, ${product.accent}, transparent)` }} />

              <div className="flex items-center gap-3 mb-6">
                <span className="h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${product.accent}1f`, border: `1.5px solid ${product.accent}40` }}>
                  <product.icon className="h-6 w-6" style={{ color: product.accentSoft }} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-extrabold text-white tracking-tight">{product.name}</span>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: product.accentSoft }}>{product.tagline}</span>
                </div>
              </div>

              <h3 className="text-[24px] sm:text-[28px] font-extrabold text-white leading-[1.12] tracking-[-0.03em] mb-3.5">
                {product.headline}
              </h3>
              <p className="text-[15px] text-white/50 leading-[1.65] font-medium mb-7">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                {product.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${product.accent}22`, border: `1px solid ${product.accent}3a` }}>
                      <Check className="h-3 w-3" style={{ color: product.accentSoft }} strokeWidth={3} />
                    </span>
                    <span className="text-[14px] font-semibold text-white/75 leading-snug">{pt}</span>
                  </div>
                ))}
              </div>

              <Link
                href={product.href}
                className="mt-auto inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 w-fit group"
                style={{ background: product.accent, boxShadow: `0 12px 32px ${product.accent}40` }}
              >
                {product.cta}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Platform footer strip. proof, not fluff */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 lg:mt-8 grid grid-cols-2 md:grid-cols-4 gap-px rounded-[24px] overflow-hidden border border-white/[0.07]"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {[
            { icon: Server, v: "22ms", l: "Average TTFB" },
            { icon: Activity, v: "Free", l: "SEO console" },
            { icon: ImageIcon, v: "↓70%", l: "Image payload" },
            { icon: ShieldCheck, v: "Drop-in", l: "No rebuild" },
          ].map((s) => (
            <div key={s.l} className="flex items-center gap-3.5 px-5 py-5" style={{ background: "#070D24" }}>
              <span className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.05)" }}>
                <s.icon className="h-4 w-4 text-white/50" />
              </span>
              <div>
                <p className="font-mono text-[18px] font-black text-white/90 leading-none">{s.v}</p>
                <p className="text-[10px] text-white/35 uppercase tracking-wider mt-1">{s.l}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
