"use client";

import { motion } from "motion/react";
import {
  ChevronRight,
  BarChart3,
  ArrowRight,
  Zap,
  Globe,
  MousePointerClick,
  TrendingUp,
  Clock,
  CheckCircle2,
  BellRing,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const upcomingFeatures = [
  {
    icon: Zap,
    title: "Static Delivery Analytics",
    description:
      "Measures actual cache-hit rates, TTFB distributions, and PHP bypass counts, not estimates.",
    accent: "#1A3FD8",
  },
  {
    icon: Globe,
    title: "Geo & Device Breakdown",
    description:
      "See which regions and devices benefit most from your static mirror. Prioritise optimisation intelligently.",
    accent: "#059669",
  },
  {
    icon: MousePointerClick,
    title: "Core Web Vitals Tracking",
    description:
      "LCP, CLS, and INP trends over time, directly correlated with Nexora Engine build events.",
    accent: "#7C3AED",
  },
  {
    icon: TrendingUp,
    title: "Image Savings Dashboard",
    description:
      "When paired with Nexora Media: bytes saved per page, format adoption rate, and responsive variant usage.",
    accent: "#D97706",
  },
  {
    icon: Clock,
    title: "Build Impact Reports",
    description:
      "Before/after performance snapshots for every rebuild, so you know exactly what each deployment achieved.",
    accent: "#059669",
  },
  {
    icon: BarChart3,
    title: "Visitor Intelligence",
    description:
      "Privacy-first behaviour analytics designed for static sites, no cookies required, no GDPR headaches.",
    accent: "#1A3FD8",
  },
];

export function InsightsComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden bg-white">
        {/* Dot matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1A3FD8_1px,transparent_0)] bg-[size:40px_40px] opacity-[0.055] pointer-events-none" />

        {/* Atmosphere */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand/[0.06] rounded-full blur-[140px]" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px]"
            style={{ background: "rgba(245,158,11,0.1)" }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-8 lg:px-24 relative z-10 flex flex-col items-center text-center">

          {/* Product pill */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="inline-flex items-center gap-3 bg-white/90 border border-border px-5 py-2 rounded-full shadow-sm mb-10"
          >
            <div className="h-7 w-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
              <BarChart3 className="h-3.5 w-3.5 text-amber-500" />
            </div>
            <span className="text-[11px] font-bold text-obsidian uppercase tracking-[0.22em]">Nexora Insights</span>
            <span className="text-border-strong mx-1">·</span>
            <span className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.16em]">Analytics Intelligence</span>
            <span className="text-border-strong mx-1">·</span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">Q3 2026</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[48px] md:text-[68px] lg:text-[80px] font-extrabold text-obsidian leading-[0.92] tracking-[-0.05em] mb-8 max-w-[900px]"
          >
            Analytics that understand{" "}
            <br className="hidden md:block" />
            <span className="text-amber-500">your static site.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="text-[17px] md:text-[19px] text-text-secondary max-w-[580px] leading-[1.7] mb-10 font-medium"
          >
            Deep performance intelligence built for Nexora Engine. Real cache-hit rates,
            Core Web Vitals trends, and image savings, all in one dashboard.
          </motion.p>

          {/* Checkmarks */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12 text-[13px] font-bold text-text-secondary"
          >
            {[
              "Cookie-free, privacy-first",
              "Static delivery aware",
              "Core Web Vitals tracking",
              "Nexora Engine + Media integration",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
                {t}
              </div>
            ))}
          </motion.div>

          {/* Notify form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="w-full max-w-[480px] mb-14"
          >
            {submitted ? (
              <div className="flex items-center justify-center gap-3 rounded-2xl bg-amber-50 border border-amber-200 px-8 py-5">
                <BellRing className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <p className="text-[15px] font-bold text-obsidian">
                  You're on the list. We'll notify you at launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNotify} className="flex gap-3">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 rounded-2xl border border-border bg-white px-5 py-4 text-[15px] font-medium text-obsidian placeholder:text-text-muted focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-2xl bg-obsidian px-6 py-4 text-[14px] font-bold text-white shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 group flex items-center gap-2"
                >
                  <BellRing className="h-4 w-4" />
                  Notify me
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
            <p className="text-[11px] text-text-muted font-medium mt-3 text-center uppercase tracking-wider">
              Early access · No spam · Unsubscribe any time
            </p>
          </motion.div>

          {/* Timeline pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-amber-50 border border-amber-200"
          >
            <Clock className="h-4 w-4 text-amber-500" />
            <span className="text-[12px] font-bold text-amber-700 uppercase tracking-[0.18em]">
              Estimated launch. Q3 2026
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Feature preview grid ── */}
      <section className="bg-surface-soft/50 py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

        <div className="w-full max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 w-10 bg-amber-500" />
              <span className="font-mono text-[10px] font-bold text-amber-600 uppercase tracking-[0.3em]">What's Coming</span>
            </div>
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-obsidian tracking-tight mb-4">
              Built for the way Nexora works.
            </h2>
            <p className="text-[17px] text-text-secondary font-medium max-w-[540px] leading-[1.6]">
              Not a generic analytics plugin. Nexora Insights is purpose-built
              to measure the performance gains that static delivery actually creates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="rounded-[28px] border border-border bg-white p-8 flex flex-col gap-5 hover:border-border-strong hover:shadow-elevated transition-all duration-300 relative overflow-hidden"
                >
                  {/* Coming soon watermark */}
                  <div className="absolute top-4 right-5 text-[9px] font-bold text-text-muted/50 uppercase tracking-[0.25em]">
                    Coming soon
                  </div>

                  <div
                    className="h-11 w-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${f.accent}12`,
                      border: `1px solid ${f.accent}22`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: f.accent }} />
                  </div>

                  <div>
                    <h3 className="text-[18px] font-extrabold text-obsidian tracking-tight mb-2">
                      {f.title}
                    </h3>
                    <p className="text-[14px] text-text-secondary leading-[1.65] font-medium">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Integration CTA strip ── */}
      <section className="bg-white py-24 px-8 lg:px-24 border-b border-border">
        <div className="w-full max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Engine link */}
            <div className="rounded-[24px] bg-obsidian p-8 flex flex-col justify-between gap-6 group hover:shadow-elevated transition-all duration-300">
              <div>
                <div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/12 flex items-center justify-center mb-5">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-[20px] font-extrabold text-white tracking-tight mb-2">
                  Nexora Engine
                </h3>
                <p className="text-[14px] text-white/60 font-medium leading-[1.6]">
                  The static infrastructure Nexora Insights is built to measure.
                  Already delivering 22ms TTFB to WordPress sites.
                </p>
              </div>
              <Link
                href="/products/nexora-engine"
                className="self-start inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white px-5 py-2.5 text-[13px] font-bold transition-colors group"
              >
                Explore Nexora Engine
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Media link */}
            <div className="rounded-[24px] bg-surface-soft border border-border p-8 flex flex-col justify-between gap-6 group hover:border-border-strong hover:shadow-elevated transition-all duration-300">
              <div>
                <div className="h-11 w-11 rounded-2xl bg-brand/8 border border-brand/15 flex items-center justify-center mb-5">
                  <BarChart3 className="h-5 w-5 text-brand" />
                </div>
                <h3 className="text-[20px] font-extrabold text-obsidian tracking-tight mb-2">
                  Nexora Media
                </h3>
                <p className="text-[14px] text-text-secondary font-medium leading-[1.6]">
                  Image savings data flows directly into Insights: see AVIF/WebP
                  adoption and bandwidth saved per page.
                </p>
              </div>
              <Link
                href="/products/nexora-media"
                className="self-start inline-flex items-center gap-2 rounded-xl bg-white hover:bg-white border border-border text-obsidian px-5 py-2.5 text-[13px] font-bold transition-colors hover:border-border-strong group"
              >
                Explore Nexora Media
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
