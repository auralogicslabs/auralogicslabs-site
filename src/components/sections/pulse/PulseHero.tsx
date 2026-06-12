"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Stethoscope, Download } from "lucide-react";
import Link from "next/link";

const TEAL = "#13716A";

export function PulseHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden bg-white">
      {/* Dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#13716A_1px,transparent_0)] bg-[size:40px_40px] opacity-[0.06] pointer-events-none" />

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px]" style={{ background: "rgba(19,113,106,0.08)" }} />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: "rgba(249,115,22,0.10)" }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.1, 0.16, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
          <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(19,113,106,0.10)", border: "1px solid rgba(19,113,106,0.18)" }}>
            <Stethoscope className="h-3.5 w-3.5" style={{ color: TEAL }} />
          </div>
          <span className="text-[11px] font-bold text-obsidian uppercase tracking-[0.22em]">Nexora Pulse</span>
          <span className="text-border-strong mx-1">·</span>
          <span className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.16em]">SEO Operations Console</span>
          <span className="text-border-strong mx-1">·</span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Free Plugin</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[68px] lg:text-[82px] font-extrabold text-obsidian leading-[0.92] tracking-[-0.055em] mb-8 max-w-[960px]"
        >
          Stop guessing why <br className="hidden md:block" />
          <span style={{ color: TEAL }}>Google won&apos;t rank you.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-[17px] md:text-[19px] text-text-secondary max-w-[640px] leading-[1.7] mb-12 font-medium"
        >
          Nexora Pulse is the SEO operations console for WordPress. One dashboard to diagnose
          indexing problems, fix on-page issues, map your internal links, and track Core Web Vitals —
          powered by your own Search Console and PageSpeed data. Free, no upsell walls.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Link
            href="https://wordpress.org/plugins/nexora-pulse/"
            className="rounded-2xl px-10 py-4.5 text-[16px] font-bold text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group flex items-center gap-3"
            style={{ background: TEAL }}
          >
            <Download className="h-5 w-5" />
            Get it free on WordPress.org
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#features"
            className="rounded-2xl border-2 border-border bg-white px-10 py-4.5 text-[16px] font-bold text-obsidian hover:bg-surface-soft transition-all duration-300 flex items-center gap-3 group"
          >
            <Stethoscope className="h-4 w-4" style={{ color: TEAL }} />
            See what it does
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Inline metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { v: "1 console", l: "Whole SEO stack" },
            { v: "Index Doctor", l: "Real GSC verdicts" },
            { v: "Core Web Vitals", l: "Live PageSpeed data" },
            { v: "$0", l: "Free · your own API keys" },
          ].map((m) => (
            <div key={m.l} className="flex items-baseline gap-2">
              <span className="font-mono text-[20px] font-bold text-obsidian tracking-tight">{m.v}</span>
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-[0.16em]">{m.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
