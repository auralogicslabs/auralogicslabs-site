"use client";

import { motion } from "motion/react";
import {
  Zap,
  Shield,
  RefreshCcw,
  ImageIcon,
  LayoutDashboard,
  BarChart3,
  Globe,
} from "lucide-react";
import { ScrollReveal, SectionCurve } from "@/components/ui/SectionShell";

const leftFeatures = [
  {
    icon: Zap,
    title: "Static HTML Delivery",
    description:
      "Pre-rendered pages served from disk before PHP, plugins, or the database ever load — 22ms average TTFB.",
    color: "#1A3FD8",
  },
  {
    icon: Shield,
    title: "Ghost Protocol",
    description:
      "WordPress fingerprints stripped from every response. Paths masked, headers sanitized, attack surface reduced.",
    color: "#059669",
  },
  {
    icon: RefreshCcw,
    title: "Smart Capture Pipeline",
    description:
      "Snapshots refresh automatically on save with debounced capture. Editors keep working — visitors always get the latest.",
    color: "#7C3AED",
  },
];

const rightFeatures = [
  {
    icon: ImageIcon,
    title: "Edge Media Optimization",
    description:
      "AVIF and WebP delivered automatically. ↓70% average image payload without manual srcset configuration.",
    color: "#7C3AED",
  },
  {
    icon: LayoutDashboard,
    title: "Fleet Orchestration",
    description:
      "Connect, deploy, and monitor every site from the Auralogics Portal — one command center for your entire stack.",
    color: "#F39A09",
  },
  {
    icon: BarChart3,
    title: "Performance Intelligence",
    description:
      "Core Web Vitals, cache analytics, and build impact reports — all tied directly to your static delivery layer.",
    color: "#0D9488",
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
          style={{ background: `${color}12`, border: `1.5px solid ${color}30` }}
        >
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <div className={`flex-1 min-w-0 ${isRight ? "md:items-end" : "md:items-start"}`}>
          <h3 className="text-[17px] md:text-[18px] font-bold text-obsidian tracking-tight mb-2">{title}</h3>
          <p className="text-[14px] md:text-[15px] text-text-secondary leading-relaxed font-medium">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function PlatformHubVisual() {
  const orbit = [
    { label: "Engine", color: "#1A3FD8", x: "50%", y: "8%" },
    { label: "Media", color: "#7C3AED", x: "88%", y: "38%" },
    { label: "Insights", color: "#0D9488", x: "72%", y: "82%" },
    { label: "Portal", color: "#F39A09", x: "28%", y: "82%" },
    { label: "Edge", color: "#60A5FA", x: "12%", y: "38%" },
  ];

  return (
    <ScrollReveal delay={0.15} className="relative mx-auto w-full max-w-[360px] lg:max-w-[400px] xl:max-w-[420px]">
      <div
        className="absolute inset-0 rounded-full blur-[60px] opacity-50 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(26,63,216,0.35) 0%, transparent 70%)" }}
      />

      <div
        className="relative aspect-square rounded-[40px] md:rounded-[48px] overflow-hidden border border-border/60 bg-[#050B25] shadow-[0_40px_100px_rgba(2,6,23,0.25)]"
        style={{ boxShadow: "0 40px 100px rgba(2,6,23,0.22), 0 0 0 1px rgba(255,255,255,0.06)" }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.4) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute h-[72%] w-[72%] rounded-full border border-brand/20" />
          <div className="absolute h-[52%] w-[52%] rounded-full border border-white/8" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            className="absolute h-[72%] w-[72%]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-brand shadow-[0_0_12px_rgba(26,63,216,0.8)]" />
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
          <div className="h-16 w-16 md:h-[72px] md:w-[72px] rounded-[22px] bg-brand/20 border border-brand/35 flex items-center justify-center shadow-[0_0_40px_rgba(26,63,216,0.35)]">
            <Zap className="h-8 w-8 text-brand-soft" />
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35 mb-1">Nexora Platform</p>
            <p className="text-[13px] font-bold text-white/80">Runtime · Media · Control</p>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 grid grid-cols-3 gap-px bg-white/5 border-t border-white/8">
          {[
            { v: "22ms", l: "TTFB", c: "#60A5FA" },
            { v: "100%", l: "Static", c: "#34D399" },
            { v: "↓70%", l: "Payload", c: "#C084FC" },
          ].map((m) => (
            <div key={m.l} className="py-3 text-center bg-[#050B25]/90">
              <p className="font-mono text-[14px] font-black" style={{ color: m.c }}>{m.v}</p>
              <p className="text-[8px] text-white/30 uppercase tracking-wider mt-0.5">{m.l}</p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-white rounded-full border border-border/70 shadow-[0_8px_32px_rgba(2,6,23,0.12)] px-4 py-2 whitespace-nowrap"
      >
        <Globe className="h-3.5 w-3.5 text-emerald-500" />
        <span className="text-[11px] font-bold text-obsidian">your-site.com</span>
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[11px] font-black text-emerald-600">Nexora active</span>
      </motion.div>
    </ScrollReveal>
  );
}

export function PlatformFeatures() {
  return (
    <section id="how-it-works" className="relative bg-obsidian overflow-hidden">
      <div
        className="relative bg-white pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32 md:[border-bottom-left-radius:50%_160px] md:[border-bottom-right-radius:50%_160px] lg:[border-bottom-left-radius:50%_220px] lg:[border-bottom-right-radius:50%_220px]"
        style={{
          borderBottomLeftRadius: "50% 100px",
          borderBottomRightRadius: "50% 100px",
        }}
      >
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14 md:mb-20 lg:mb-24"
          >
            <span className="inline-flex items-center rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.28em] text-brand mb-5">
              How It Works
            </span>
            <h2 className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold text-obsidian leading-[1.06] tracking-[-0.04em] max-w-[820px] mx-auto">
              Infrastructure that runs{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3FD8 0%, #7C3AED 100%)" }}
              >
                behind the scenes.
              </span>
            </h2>
            <p className="mt-5 text-[17px] md:text-[18px] text-text-secondary font-medium leading-relaxed max-w-[580px] mx-auto">
              Install once. Nexora handles capture, optimization, and delivery — your team keeps building in WordPress.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 xl:gap-12 items-center">
            <div className="space-y-10 md:space-y-12 lg:space-y-14 order-2 lg:order-1 lg:max-w-[360px] xl:max-w-[400px] lg:ml-auto w-full">
              {leftFeatures.map((f, i) => (
                <FeatureCallout key={f.title} {...f} align="right" delay={i * 0.08} />
              ))}
            </div>

            <div className="order-1 lg:order-2 py-4 lg:py-0 px-4 lg:px-6">
              <PlatformHubVisual />
            </div>

            <div className="space-y-10 md:space-y-12 lg:space-y-14 order-3 lg:max-w-[360px] xl:max-w-[400px] lg:mr-auto w-full">
              {rightFeatures.map((f, i) => (
                <FeatureCallout key={f.title} {...f} align="left" delay={0.24 + i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-6 md:h-10 bg-obsidian" aria-hidden />
      <SectionCurve from="dark" to="soft" />
    </section>
  );
}
