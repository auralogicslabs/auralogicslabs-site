"use client";

import { motion } from "motion/react";
import {
  Zap, Shield, RefreshCcw, ImageIcon, LayoutDashboard, Stethoscope, Globe,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/SectionShell";

const leftFeatures = [
  {
    icon: Zap,
    title: "Static HTML Delivery",
    description:
      "Pre-rendered pages served from disk before PHP, plugins, or the database ever load. Average TTFB: 22ms.",
    color: "#60A5FA",
  },
  {
    icon: Shield,
    title: "Ghost Protocol",
    description:
      "WordPress fingerprints stripped from every response. Paths masked, headers sanitized, attack surface reduced.",
    color: "#34D399",
  },
  {
    icon: RefreshCcw,
    title: "Smart Capture Pipeline",
    description:
      "Snapshots refresh automatically on save with debounced capture. Editors keep working. Visitors always get the latest.",
    color: "#A78BFA",
  },
];

const rightFeatures = [
  {
    icon: ImageIcon,
    title: "Edge Media Optimization",
    description:
      "AVIF and WebP delivered automatically. ↓70% average image payload without manual srcset configuration.",
    color: "#A78BFA",
  },
  {
    icon: LayoutDashboard,
    title: "Fleet Orchestration",
    description:
      "Connect, deploy, and monitor every site from the Auralogics Portal. Your command center for the entire stack.",
    color: "#FCD34D",
  },
  {
    icon: Stethoscope,
    title: "SEO Operations Console",
    description:
      "Nexora Pulse diagnoses why Google won't index your pages, maps internal links, and tracks Core Web Vitals. Free, using your own Search Console data.",
    color: "#5EEAD4",
  },
];

function FeatureCallout({
  icon: Icon,
  title,
  description,
  color,
  align,
  delay,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  description: string;
  color: string;
  align: "left" | "right";
  delay: number;
}) {
  const isRight = align === "right";
  return (
    <ScrollReveal delay={delay}>
      <div
        className={`group flex gap-4 md:gap-5 ${
          isRight ? "md:flex-row-reverse md:text-right" : "md:flex-row md:text-left"
        }`}
      >
        <div
          className="h-11 w-11 md:h-12 md:w-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
          style={{ background: `${color}18`, border: `1.5px solid ${color}40` }}
        >
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[16px] md:text-[17px] font-bold tracking-tight mb-1.5"
            style={{ color: "rgba(255,255,255,0.88)" }}>
            {title}
          </h3>
          <p className="text-[13px] md:text-[14px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.38)" }}>
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function PlatformHubVisual() {
  const orbit = [
    { label: "Engine", color: "#60A5FA", x: "50%", y: "8%" },
    { label: "Media", color: "#A78BFA", x: "88%", y: "38%" },
    { label: "Pulse", color: "#5EEAD4", x: "72%", y: "82%" },
    { label: "Portal", color: "#FCD34D", x: "28%", y: "82%" },
    { label: "Edge", color: "#6EE7B7", x: "12%", y: "38%" },
  ];

  return (
    <ScrollReveal delay={0.15} className="relative w-full max-w-full">
      <div
        className="absolute inset-0 rounded-full blur-[80px] opacity-50 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(96,165,250,0.2) 0%, transparent 70%)" }}
      />
      <div
        className="relative aspect-square rounded-[40px] md:rounded-[48px] overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0B1535 0%, #0A1128 100%)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)",
        }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute h-[72%] w-[72%] rounded-full border border-white/[0.07]" />
          <div className="absolute h-[52%] w-[52%] rounded-full border border-white/[0.05]" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            className="absolute h-[72%] w-[72%]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.9)]" />
          </motion.div>
        </div>
        {orbit.map((node) => (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider border backdrop-blur-sm"
            style={{
              left: node.x,
              top: node.y,
              color: node.color,
              background: `${node.color}18`,
              borderColor: `${node.color}35`,
            }}
          >
            {node.label}
          </div>
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="h-16 w-16 rounded-[22px] bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shadow-[0_0_40px_rgba(96,165,250,0.3)]">
            <Zap className="h-8 w-8 text-blue-300" />
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-1">Nexora Platform</p>
            <p className="text-[13px] font-bold text-white/65">Speed · SEO · Media · Control</p>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 grid grid-cols-3 gap-px border-t border-white/[0.07]"
          style={{ background: "rgba(255,255,255,0.03)" }}>
          {[
            { v: "22ms", l: "TTFB", c: "#60A5FA" },
            { v: "100%", l: "Static", c: "#34D399" },
            { v: "↓70%", l: "Payload", c: "#C084FC" },
          ].map((m) => (
            <div key={m.l} className="py-3 text-center" style={{ background: "rgba(10,17,40,0.9)" }}>
              <p className="font-mono text-[14px] font-black" style={{ color: m.c }}>{m.v}</p>
              <p className="text-[8px] text-white/25 uppercase tracking-wider mt-0.5">{m.l}</p>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 backdrop-blur-md rounded-full border border-white/15 px-4 py-2 whitespace-nowrap"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <Globe className="h-3.5 w-3.5 text-emerald-400" />
        <span className="text-[11px] font-bold text-white/75">your-site.com</span>
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-black text-emerald-400">Nexora active</span>
      </motion.div>
    </ScrollReveal>
  );
}

export function PlatformFeatures() {
  return (
    <section
      id="under-the-hood"
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
      style={{ background: "linear-gradient(180deg, #030714 0%, #06102A 45%, #030714 100%)" }}
    >
        {/* Top hairline — separates this band from The Platform above */}
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.35), transparent)" }} />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/3 w-[700px] h-[600px] rounded-full blur-[220px] opacity-25"
            style={{ background: "radial-gradient(circle, #1A3FD8 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[600px] h-[500px] rounded-full blur-[220px] opacity-15"
            style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16 md:mb-24 lg:mb-28"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.28em] text-blue-300 mb-5 border border-blue-400/20"
              style={{ background: "rgba(96,165,250,0.1)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Under The Hood
            </span>
            <h2
              className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.06] tracking-[-0.04em] max-w-[820px] mx-auto mb-5"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              Six capabilities.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)" }}
              >
                Zero rebuilds. Your WordPress intact.
              </span>
            </h2>
            <p
              className="text-[17px] md:text-[18px] leading-relaxed max-w-[580px] mx-auto font-medium"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Static delivery, security hardening, media optimization, SEO diagnostics, and fleet control. All working together while your editors keep publishing and your plugins keep running.
            </p>
          </motion.div>

          {/* Feature grid — left features | center hub | right features */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px_1fr] xl:grid-cols-[1fr_460px_1fr] gap-12 lg:gap-8 xl:gap-10 items-center">
            <div className="flex flex-col gap-10 lg:gap-12 order-2 lg:order-1 lg:max-w-[380px] xl:max-w-[420px] lg:ml-auto w-full">
              {leftFeatures.map((f, i) => (
                <FeatureCallout key={f.title} {...f} align="right" delay={i * 0.08} />
              ))}
            </div>
            <div className="order-1 lg:order-2 flex justify-center py-4 lg:py-0">
              <PlatformHubVisual />
            </div>
            <div className="flex flex-col gap-10 lg:gap-12 order-3 lg:max-w-[380px] xl:max-w-[420px] lg:mr-auto w-full">
              {rightFeatures.map((f, i) => (
                <FeatureCallout key={f.title} {...f} align="left" delay={0.24 + i * 0.08} />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
