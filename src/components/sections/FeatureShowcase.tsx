"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Zap, ImageIcon, BarChart3, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

/* ─────────────────────────────────────────────────
   Reusable browser-chrome screenshot placeholder
───────────────────────────────────────────────── */
function ScreenshotMock({
  label,
  sublabel,
  accent,
  icon: Icon,
  pill,
  mockRows,
}: {
  label: string;
  sublabel: string;
  accent: string;
  icon: React.ElementType;
  pill: string;
  mockRows?: { color: string; width: string }[][];
}) {
  return (
    <div
      className="relative w-full rounded-[20px] overflow-hidden border border-border"
      style={{
        boxShadow:
          "0 40px 100px rgba(2,6,23,0.13), 0 12px 32px rgba(2,6,23,0.07)",
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#F8FAFC] border-b border-border">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-white border border-border rounded-lg px-3 py-1.5 flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-full flex-shrink-0"
              style={{ background: accent, opacity: 0.7 }}
            />
            <span className="text-[11px] font-mono text-text-muted truncate">
              your-site.com/wp-admin · Nexora {pill}
            </span>
          </div>
        </div>
        {/* Simulated nav pills */}
        <div className="hidden sm:flex items-center gap-1">
          <div className="h-2 w-8 rounded-full bg-border/60" />
          <div className="h-2 w-6 rounded-full bg-border/40" />
        </div>
      </div>

      {/* Mock admin UI skeleton */}
      <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EEF2FF] relative overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.4,
          }}
        />

        {/* Simulated sidebar + main area */}
        <div className="flex" style={{ minHeight: 260 }}>
          {/* Sidebar skeleton */}
          <div className="w-[180px] flex-shrink-0 border-r border-border/50 bg-white/60 p-4 flex flex-col gap-3 hidden sm:flex">
            <div
              className="h-8 w-8 rounded-lg mb-2"
              style={{ background: `${accent}20`, border: `1px solid ${accent}30` }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Icon className="h-4 w-4" style={{ color: accent }} />
              </div>
            </div>
            {[80, 60, 70, 50, 65].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-3 w-3 rounded bg-border/60 flex-shrink-0" />
                <div
                  className="h-2.5 rounded-full bg-border/50"
                  style={{ width: `${w}%` }}
                />
              </div>
            ))}
          </div>

          {/* Main content skeleton */}
          <div className="flex-1 p-5 flex flex-col gap-4">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="h-6 w-24 rounded-full"
                  style={{
                    background: `${accent}18`,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  <div className="flex items-center justify-center h-full gap-1">
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: accent }}
                    />
                    <div
                      className="h-1.5 w-10 rounded-full"
                      style={{ background: `${accent}60` }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="h-7 w-20 rounded-xl text-[10px] font-bold flex items-center justify-center"
                style={{
                  background: accent,
                  color: "#fff",
                }}
              >
                Active
              </div>
            </div>

            {/* Stat cards row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "22ms", lbl: "TTFB", c: accent },
                { val: "100%", lbl: "Cache hit", c: "#059669" },
                { val: "↓70%", lbl: "Payload", c: "#7C3AED" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-border/50 p-3 flex flex-col gap-1"
                >
                  <span
                    className="font-mono text-[18px] font-bold leading-none"
                    style={{ color: stat.c }}
                  >
                    {stat.val}
                  </span>
                  <span className="text-[9px] text-text-muted font-bold uppercase tracking-wide">
                    {stat.lbl}
                  </span>
                </div>
              ))}
            </div>

            {/* Row skeletons */}
            {(mockRows ?? [
              [
                { color: `${accent}25`, width: "40%" },
                { color: "#E2E8F0", width: "25%" },
                { color: "#D1FAE5", width: "18%" },
              ],
              [
                { color: "#E2E8F0", width: "55%" },
                { color: "#E2E8F0", width: "20%" },
                { color: "#E2E8F0", width: "15%" },
              ],
              [
                { color: "#E2E8F0", width: "35%" },
                { color: "#E2E8F0", width: "30%" },
                { color: "#FEF3C7", width: "20%" },
              ],
            ]).map((row, ri) => (
              <div key={ri} className="flex items-center gap-3 rounded-lg bg-white/70 px-3 py-2.5 border border-border/30">
                <div className="h-2 w-2 rounded-full bg-border/50 flex-shrink-0" />
                {row.map((cell, ci) => (
                  <div
                    key={ci}
                    className="h-2 rounded-full"
                    style={{ background: cell.color, width: cell.width }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder label overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/90 to-transparent flex flex-col items-center justify-end pb-5">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dashed text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              borderColor: `${accent}50`,
              color: `${accent}90`,
              background: `${accent}08`,
            }}
          >
            <Icon className="h-3 w-3" />
            {label}
          </div>
          <p className="text-[10px] text-text-muted mt-1.5 text-center">
            {sublabel}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Individual feature showcase blocks
───────────────────────────────────────────────── */

interface ShowcaseBlockProps {
  eyebrow: string;
  eyebrowColor: string;
  headline: React.ReactNode;
  subheadline: string;
  bullets: { label: string; desc: string; color: string }[];
  cta: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  screenshotLabel: string;
  screenshotSublabel: string;
  screenshotAccent: string;
  screenshotIcon: React.ElementType;
  screenshotPill: string;
  flip?: boolean;
  bg?: string;
  roundedTop?: boolean;
}

function ShowcaseBlock({
  eyebrow,
  eyebrowColor,
  headline,
  subheadline,
  bullets,
  cta,
  ctaSecondary,
  screenshotLabel,
  screenshotSublabel,
  screenshotAccent,
  screenshotIcon: ScreenshotIcon,
  screenshotPill,
  flip = false,
  bg = "bg-white",
  roundedTop = false,
}: ShowcaseBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div
      ref={ref}
      className={`relative py-28 px-8 lg:px-24 border-b border-border overflow-hidden ${bg} ${roundedTop ? "rounded-tl-[40px] rounded-tr-[40px] -mt-10 z-10 relative" : ""}`}
    >
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          [flip ? "right" : "left"]: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `${screenshotAccent}08`,
          filter: "blur(120px)",
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
            flip ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: flip ? 32 : -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 rounded-full" style={{ background: eyebrowColor }} />
              <span
                className="text-[11px] font-black uppercase tracking-[0.3em]"
                style={{ color: eyebrowColor }}
              >
                {eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[34px] md:text-[46px] font-extrabold text-obsidian tracking-tight leading-[1.05]">
              {headline}
            </h2>

            {/* Subhead */}
            <p className="text-[17px] text-text-secondary font-medium leading-[1.7] max-w-[480px]">
              {subheadline}
            </p>

            {/* Feature bullets */}
            <div className="flex flex-col gap-4">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3.5"
                >
                  <div
                    className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${b.color}15`, border: `1px solid ${b.color}30` }}
                  >
                    <CheckCircle2 className="h-3 w-3" style={{ color: b.color }} />
                  </div>
                  <div>
                    <span className="text-[14px] font-extrabold text-obsidian tracking-tight">{b.label}</span>
                    <span className="text-[14px] text-text-secondary font-medium"> — {b.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-2">
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2.5 rounded-[14px] px-8 py-4 text-[14px] font-black text-white transition-all duration-300 hover:-translate-y-0.5 group"
                style={{
                  background: eyebrowColor,
                  boxShadow: `0 8px 32px ${eyebrowColor}55, 0 2px 8px ${eyebrowColor}30`,
                }}
              >
                {cta.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="inline-flex items-center gap-2 rounded-[14px] px-7 py-4 text-[14px] font-bold text-obsidian border-2 border-obsidian/12 hover:border-obsidian/30 hover:bg-surface-soft transition-all duration-300 group"
                >
                  {ctaSecondary.label}
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </motion.div>

          {/* Screenshot column */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: flip ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <ScreenshotMock
              label={screenshotLabel}
              sublabel={screenshotSublabel}
              accent={screenshotAccent}
              icon={ScreenshotIcon}
              pill={screenshotPill}
            />

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl border border-border shadow-elevated px-4 py-3 flex items-center gap-3"
            >
              <div
                className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${screenshotAccent}12`, border: `1px solid ${screenshotAccent}25` }}
              >
                <ScreenshotIcon className="h-4 w-4" style={{ color: screenshotAccent }} />
              </div>
              <div>
                <div className="font-mono text-[20px] font-bold leading-none" style={{ color: screenshotAccent }}>
                  22ms
                </div>
                <div className="text-[10px] text-text-muted font-bold uppercase tracking-wide mt-0.5">
                  Avg. TTFB
                </div>
              </div>
            </motion.div>

            {/* Second floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl border border-border shadow-elevated px-4 py-2.5 flex items-center gap-2"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[12px] font-bold text-obsidian">Cache active</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Insights "Coming Soon" showcase block
   (no screenshot — email capture + preview grid)
───────────────────────────────────────────────── */
function InsightsShowcase() {
  return (
    <div className="relative py-28 px-8 lg:px-24 border-b border-border overflow-hidden bg-surface-soft/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber/6 blur-[140px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-7"
          >
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 rounded-full bg-amber" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-amber">
                Nexora Insights
              </span>
            </div>

            <div className="relative">
              <h2 className="text-[34px] md:text-[46px] font-extrabold text-obsidian tracking-tight leading-[1.05]">
                Know exactly what your cache is doing.{" "}
                <span className="text-amber">Always.</span>
              </h2>
              <div className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full bg-amber/10 border border-amber/25">
                <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                <span className="text-[11px] font-bold text-amber uppercase tracking-[0.2em]">Coming Q3 2026</span>
              </div>
            </div>

            <p className="text-[17px] text-text-secondary font-medium leading-[1.7] max-w-[480px]">
              Real-time cache hit rates, TTFB trends, and per-page performance breakdowns — all inside your WordPress admin. No external dashboards.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { label: "Per-page TTFB tracking", desc: "see exactly which pages are slowest", color: "#F59E0B" },
                { label: "Cache coverage map", desc: "visual overview of what's cached and what's not", color: "#F59E0B" },
                { label: "Rebuild event log", desc: "every invalidation with timestamps and triggers", color: "#D97706" },
              ].map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3.5"
                >
                  <div className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 bg-amber/15 border border-amber/30">
                    <CheckCircle2 className="h-3 w-3 text-amber" />
                  </div>
                  <div>
                    <span className="text-[14px] font-extrabold text-obsidian tracking-tight">{b.label}</span>
                    <span className="text-[14px] text-text-secondary font-medium"> — {b.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/products/nexora-insights"
              className="inline-flex items-center gap-2.5 rounded-2xl px-7 py-3.5 text-[14px] font-bold text-obsidian border-2 border-amber/40 bg-amber/8 hover:bg-amber/15 hover:border-amber/60 transition-all duration-300 group w-fit"
            >
              <BarChart3 className="h-4 w-4 text-amber" />
              Learn more about Insights
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Preview grid placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Mock analytics dashboard */}
            <div
              className="relative w-full rounded-[20px] overflow-hidden border border-border"
              style={{
                boxShadow: "0 40px 100px rgba(2,6,23,0.10), 0 12px 32px rgba(2,6,23,0.06)",
              }}
            >
              {/* Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#F8FAFC] border-b border-border">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                  <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white border border-border rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-amber/70 flex-shrink-0" />
                    <span className="text-[11px] font-mono text-text-muted">your-site.com/wp-admin · Nexora Insights</span>
                  </div>
                </div>
              </div>

              {/* Dashboard body */}
              <div className="bg-gradient-to-br from-[#FFFBF0] to-[#FEF3C7]/40 p-5 flex flex-col gap-4">
                {/* Sparkline chart placeholder */}
                <div className="rounded-xl bg-white border border-border/50 p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="h-2.5 w-28 rounded-full bg-amber/30" />
                    <div className="h-2 w-16 rounded-full bg-border/50" />
                  </div>
                  {/* Fake sparkline bars */}
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 55, 45, 70, 60, 80, 65, 90, 75, 85, 78, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        style={{
                          height: `${h}%`,
                          background:
                            h >= 80
                              ? "#F59E0B"
                              : h >= 65
                              ? "#FCD34D"
                              : "#FDE68A",
                          opacity: 0.85,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Stat row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "98.2%", lbl: "Cache rate", color: "#F59E0B" },
                    { val: "24ms", lbl: "Avg TTFB", color: "#059669" },
                    { val: "1.4k", lbl: "Pages cached", color: "#7C3AED" },
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl bg-white border border-border/50 p-3">
                      <div className="font-mono text-[18px] font-bold leading-none" style={{ color: s.color }}>
                        {s.val}
                      </div>
                      <div className="text-[9px] text-text-muted font-bold uppercase tracking-wide mt-1">
                        {s.lbl}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row list */}
                {[70, 50, 80].map((w, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-white/80 px-3 py-2.5 border border-border/30">
                    <div className="h-2 w-2 rounded-full bg-amber/50 flex-shrink-0" />
                    <div className="h-2 rounded-full bg-border/40" style={{ width: `${w}%` }} />
                    <div className="h-2 rounded-full bg-amber/25 ml-auto" style={{ width: "15%" }} />
                  </div>
                ))}

                {/* Coming soon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[2px]">
                  <div className="flex flex-col items-center gap-3 text-center px-8">
                    <div className="h-12 w-12 rounded-2xl bg-amber/15 border border-amber/30 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-amber" />
                    </div>
                    <div className="text-[15px] font-extrabold text-obsidian">Insights Dashboard</div>
                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em]">Preview — Q3 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   Main export
───────────────────────────────────────────────── */
export function FeatureShowcase() {
  return (
    <>
      {/* ── Block 1: Nexora Engine ─────────────────── */}
      <ShowcaseBlock
        eyebrow="Nexora Engine"
        eyebrowColor="#1A3FD8"
        headline={
          <>
            Install once.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3FD8 0%, #7C3AED 100%)" }}
            >
              Serve forever at 22ms.
            </span>
          </>
        }
        subheadline="One plugin transforms your WordPress site into a static-first machine. PHP boots for editors — visitors get pre-built HTML served straight from disk. No CDN contract. No DevOps."
        bullets={[
          { label: "Zero PHP on cache hit", desc: "the entire execution stack is bypassed on every visit", color: "#1A3FD8" },
          { label: "Drop-in install", desc: "active in under 2 minutes, any host, any server type", color: "#059669" },
          { label: "Smart invalidation", desc: "only edited pages rebuild — everything else stays cached", color: "#7C3AED" },
        ]}
        cta={{ label: "Get Started Free", href: "/nexora-engine/docs/getting-started" }}
        ctaSecondary={{ label: "See all features", href: "/products/nexora-engine" }}
        screenshotLabel="Engine Admin Screenshot"
        screenshotSublabel="Replace with Nexora Engine dashboard screenshot"
        screenshotAccent="#1A3FD8"
        screenshotIcon={Zap}
        screenshotPill="Engine"
        flip={false}
        bg="bg-white"
        roundedTop={true}
      />

      {/* ── Block 2: Nexora Media ──────────────────── */}
      <ShowcaseBlock
        eyebrow="Nexora Media"
        eyebrowColor="#059669"
        headline={
          <>
            Every image{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #059669 0%, #0D9488 100%)" }}
            >
              optimized before
            </span>{" "}
            anyone visits.
          </>
        }
        subheadline="AVIF and WebP conversion happens automatically on upload. No manual exports, no third-party service, no recurring bill. Smaller images. Faster pages. Forever."
        bullets={[
          { label: "AVIF + WebP on upload", desc: "converted immediately, served in the right format per browser", color: "#059669" },
          { label: "Non-destructive", desc: "originals are always preserved — convert back in one click", color: "#0D9488" },
          { label: "Async processing", desc: "uploads complete instantly, conversion happens in the background", color: "#059669" },
        ]}
        cta={{ label: "Explore Nexora Media", href: "/products/nexora-media" }}
        screenshotLabel="Media Admin Screenshot"
        screenshotSublabel="Replace with Nexora Media dashboard screenshot"
        screenshotAccent="#059669"
        screenshotIcon={ImageIcon}
        screenshotPill="Media"
        flip={true}
        bg="bg-surface-soft/40"
      />

      {/* ── Block 3: Nexora Insights ──────────────── */}
      <InsightsShowcase />
    </>
  );
}
