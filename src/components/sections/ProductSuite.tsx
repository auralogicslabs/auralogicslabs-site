"use client";

import { motion } from "motion/react";
import { ArrowRight, Zap, ImageIcon, Stethoscope, CheckCircle2, Server, Play, ShieldAlert, Cpu } from "lucide-react";
import Link from "next/link";
import React from "react";

// Standard mouse movement handler for 120fps styling (no state updates)
const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
};

export function ProductSuite() {
  return (
    <section
      id="products"
      className="bg-white py-32 px-8 lg:px-24 border-b border-border relative overflow-hidden"
    >
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Subtle brand glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-brand/4 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-0.5 w-8 bg-brand rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">Product Suite</span>
          </div>
          <h2 className="text-[38px] md:text-[54px] font-extrabold text-obsidian tracking-[-0.04em] leading-[1.05] mb-5">
            The Nexora Stack.
          </h2>
          <p className="text-[17px] text-text-secondary font-medium max-w-[540px] leading-[1.65]">
            Three focused products. One mission — close the gap between how WordPress performs today and how it should.
          </p>
        </motion.div>

        {/* Grid: Engine (3 cols) + Media/Insights stacked (2 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:min-h-[620px]">

          {/* ─── Nexora Engine — Flagship (3 columns) ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleCardMouseMove}
            className="lg:col-span-3 rounded-[32px] bg-obsidian text-white p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group border border-white/5 transition-all duration-300"
          >
            {/* Ambient gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/20 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-16 -left-8 w-[320px] h-[320px] bg-amber/8 blur-[110px] rounded-full pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Mouse tracking spotlight border overlay */}
            <div
              className="absolute inset-0 rounded-[32px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                border: "1.5px solid transparent",
                backgroundImage: `linear-gradient(#020617, #020617), radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(96, 165, 250, 0.35) 0%, rgba(192, 132, 252, 0.15) 50%, transparent 100%)`,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            />

            <div className="relative z-10">
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-10">
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-12 rounded-[14px] bg-brand/20 border border-brand/30 flex items-center justify-center shadow-[0_0_24px_rgba(26,63,216,0.35)] flex-shrink-0">
                    <Zap className="h-5.5 w-5.5 text-brand-soft" style={{ width: 22, height: 22 }} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-[0.38em] text-white/35 mb-0.5">Flagship</div>
                    <div className="text-[11px] font-semibold text-white/50">Static Infrastructure</div>
                  </div>
                </div>
                <span className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/12 border border-emerald-500/22 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available Now
                </span>
              </div>

              {/* Name */}
              <h3 className="text-[38px] md:text-[46px] font-extrabold tracking-[-0.04em] leading-none mb-2">
                Nexora Engine
              </h3>
              <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] mb-7">
                The performance layer WordPress never had.
              </p>

              {/* Body */}
              <p className="text-white/60 text-[16px] md:text-[17px] leading-[1.72] font-medium max-w-[540px] mb-8">
                Pre-renders every page into flat HTML — served to visitors before
                WordPress boots. Drop-in install. No headless migration, no new
                frontend, no DevOps overhead.
              </p>

              {/* Advanced Mini-Dashboard Mockup */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {/* Left side: Terminal Output */}
                <div className="flex flex-col bg-[#070b14] border border-white/5 rounded-xl p-4 font-mono text-[11px] text-white/60 min-h-[120px] justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-1.5 flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/40" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-brand-soft">auralogicslabs-site:~$</span>
                      <span className="text-white">nexora compile --prod</span>
                    </div>
                    <div className="text-white/40 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
                      Initializing compiler hooks...
                    </div>
                    <div className="text-emerald-400 font-bold">✓ 45 pages pre-rendered (0.34s)</div>
                    <div className="text-white/30 text-[10px]">Serving fully cached pages via static edge</div>
                  </div>
                  <div className="border-t border-white/5 pt-2 mt-2 flex items-center justify-between text-[9px] text-white/30 uppercase tracking-widest">
                    <span>Engine Status</span>
                    <span className="text-emerald-400 font-bold animate-pulse">● Active</span>
                  </div>
                </div>

                {/* Right side: Realtime Stats */}
                <div className="flex flex-col justify-between p-4 bg-white/[0.01] border border-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Live Compression</span>
                    <span className="font-mono text-[12px] font-bold text-emerald-400">100% Hit Rate</span>
                  </div>

                  {/* Cache delivery animation flow */}
                  <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-lg p-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <Server className="h-3.5 w-3.5 text-brand-soft" />
                      <span className="font-mono text-[10px] text-white/50 truncate max-w-[90px]">/product-page</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[11px] font-bold text-emerald-400">18ms</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
                      <div className="text-[14px] font-mono font-bold text-white">0ms</div>
                      <div className="text-[8px] text-white/30 uppercase font-black">DB Queries</div>
                    </div>
                    <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
                      <div className="text-[14px] font-mono font-bold text-brand-soft">22ms</div>
                      <div className="text-[8px] text-white/30 uppercase font-black">Avg TTFB</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["Zero PHP on cache hit", "Drop-in install", "Smart invalidation", "Any host"].map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/[0.09] text-[12px] font-semibold text-white/55"
                  >
                    <CheckCircle2 className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom row */}
            <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              {/* Metrics strip */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { v: "22ms", l: "TTFB" },
                  { v: "100%", l: "Cache" },
                  { v: "Zero", l: "PHP" },
                ].map((m) => (
                  <div key={m.l} className="bg-white/[0.05] border border-white/[0.07] rounded-xl px-3 py-2.5">
                    <div className="font-mono text-[20px] lg:text-[22px] font-bold text-white tracking-tight leading-none mb-1">
                      {m.v}
                    </div>
                    <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">{m.l}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/products/nexora-engine"
                className="flex-shrink-0 inline-flex items-center gap-2.5 rounded-2xl bg-white text-obsidian px-7 py-3.5 text-[14px] font-bold hover:bg-brand hover:text-white transition-all duration-300 group/btn shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                Explore Engine
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ─── Right column: Media + Insights stacked (2 columns) ─── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Nexora Media Card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleCardMouseMove}
              className="flex-1 rounded-[28px] bg-surface-soft border border-border p-8 flex flex-col justify-between hover:border-emerald-200 hover:shadow-elevated transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

              {/* Mouse tracking spotlight overlay */}
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  border: "1.5px solid transparent",
                  backgroundImage: `linear-gradient(#f8fafc, #f8fafc), radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(16, 185, 129, 0.18) 0%, rgba(96, 165, 250, 0.08) 50%, transparent 100%)`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-[12px] bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="h-4.5 w-4.5 text-emerald-600" style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.32em] text-text-muted mb-0.5">Add-on</div>
                      <div className="text-[10px] font-semibold text-text-secondary">Media Intelligence</div>
                    </div>
                  </div>
                  <span className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-border text-[9px] font-bold text-text-muted uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Available
                  </span>
                </div>

                <h3 className="text-[22px] font-extrabold text-obsidian tracking-tight leading-tight mb-1.5">
                  Nexora Media
                </h3>
                <p className="text-[11px] font-bold text-text-muted uppercase tracking-[0.15em] mb-4">
                  Modern image delivery, without the rebuild.
                </p>
                <p className="text-text-secondary text-[14px] leading-[1.65] font-medium mb-6">
                  AVIF &amp; WebP on upload. Async background queue, non-destructive originals, adaptive sizing. Runs standalone or alongside Engine.
                </p>

                {/* Animated Processing Queue Illustration */}
                <div className="p-4 rounded-xl bg-white border border-border/80 flex items-center justify-between gap-2 shadow-[0_4px_12px_rgba(15,23,42,0.03)] my-5 overflow-hidden">
                  {/* JPG node */}
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center font-bold text-[9px] text-red-500 shadow-sm">
                      JPG
                    </div>
                    <span className="text-[8px] font-bold text-text-muted font-mono mt-1">4.2 MB</span>
                  </div>

                  {/* Flow pipeline line 1 */}
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-red-100 to-brand-soft/30 relative overflow-hidden">
                    <span className="absolute inset-y-0 w-2 bg-brand-soft/80 animate-[streamHorizontal_2s_linear_infinite]" style={{ left: "0%" }} />
                  </div>

                  {/* Compression Gateway */}
                  <div className="flex flex-col items-center relative px-2">
                    <div className="h-9 w-9 rounded-full bg-brand-tint border border-brand/20 flex items-center justify-center shadow-inner animate-[pulseGlow_3s_infinite]">
                      <Cpu className="h-4 w-4 text-brand animate-spin" style={{ animationDuration: "12s" }} />
                    </div>
                    <span className="text-[8px] font-black text-brand uppercase tracking-wider mt-1">Optimize</span>
                  </div>

                  {/* Flow pipeline line 2 */}
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-brand-soft/30 to-emerald-100 relative overflow-hidden">
                    <span className="absolute inset-y-0 w-2 bg-emerald-400/80 animate-[streamHorizontal_2s_linear_infinite]" style={{ left: "0%" }} />
                  </div>

                  {/* AVIF node */}
                  <div className="flex flex-col items-center">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center font-bold text-[9px] text-emerald-600 shadow-sm relative">
                      AVIF
                      <span className="absolute -top-1.5 -right-2 px-1 bg-emerald-500 text-white text-[7px] font-extrabold rounded-full">
                        ↓80%
                      </span>
                    </div>
                    <span className="text-[8px] font-bold text-emerald-600 font-mono mt-1">840 KB</span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["↓70% images", "AVIF + WebP", "Async queue"].map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-white border border-border rounded-lg text-[11px] font-bold text-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/products/nexora-media"
                className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-emerald-600 hover:text-obsidian transition-colors group/link relative z-10"
              >
                View Nexora Media
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Nexora Insights Card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onMouseMove={handleCardMouseMove}
              className="flex-1 rounded-[28px] bg-surface-soft border border-[#13716A]/30 p-8 flex flex-col justify-between hover:border-[#13716A]/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#13716A]/5 blur-[80px] rounded-full pointer-events-none" />

              {/* Mouse tracking spotlight overlay */}
              <div
                className="absolute inset-0 rounded-[28px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  border: "1.5px solid transparent",
                  backgroundImage: `linear-gradient(#f8fafc, #f8fafc), radial-gradient(180px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(19, 113, 106, 0.15) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-[12px] bg-[#13716A]/10 border border-[#13716A]/20 flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="h-4.5 w-4.5 text-[#13716A]" style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black uppercase tracking-[0.32em] text-text-muted mb-0.5">Available Free</div>
                      <div className="text-[10px] font-semibold text-text-secondary">SEO Operations Console</div>
                    </div>
                  </div>
                  <span className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[9px] font-bold text-emerald-600 uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>

                <h3 className="text-[22px] font-extrabold text-obsidian tracking-tight leading-tight mb-1.5">
                  Nexora Pulse
                </h3>
                <p className="text-[11px] font-bold text-text-muted uppercase tracking-[0.15em] mb-4">
                  Diagnose. Fix. Rank.
                </p>
                <p className="text-text-secondary text-[14px] leading-[1.65] font-medium mb-6">
                  Index Doctor, internal link graph, Core Web Vitals, and duplicate detection — one SEO console inside wp-admin. Finds exactly why Google isn't ranking your pages, using your own Search Console data.
                </p>

                {/* Edge Analytics Latency Vector Mock Graph */}
                <div className="p-4 rounded-xl bg-white border border-border/80 shadow-[0_4px_12px_rgba(15,23,42,0.03)] my-5 flex flex-col justify-between min-h-[90px]">
                  <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-wider text-text-muted mb-2">
                    <span>Index Coverage Trend</span>
                    <span className="text-[#13716A]">142 indexed · 31 not</span>
                  </div>
                  <div className="relative h-10 w-full">
                    {/* SVG graphic graph */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="latencyGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.2)" />
                          <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
                        </linearGradient>
                      </defs>
                      {/* WP Latency (Amber / Spiky) */}
                      <path d="M 0,32 Q 30,10 60,35 T 120,5 T 180,30 T 200,28" fill="url(#latencyGrad)" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Indexed baseline (Teal / Flat) */}
                      <line x1="0" y1="36" x2="200" y2="36" stroke="#13716A" strokeWidth="2.5" strokeDasharray="3 3" />
                    </svg>
                    {/* Floating pill tags */}
                    <span className="absolute right-2 top-0 px-1.5 py-0.5 rounded bg-amber/10 border border-amber/20 text-[7px] font-bold text-amber font-mono">Not indexed (31)</span>
                    <span className="absolute left-2 bottom-0 px-1.5 py-0.5 rounded bg-[#13716A]/10 border border-[#13716A]/20 text-[7px] font-bold text-[#13716A] font-mono">Indexed & ranking (142)</span>
                  </div>
                </div>
              </div>

              <Link
                href="/products/nexora-pulse"
                className="mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-[#13716A] hover:text-obsidian transition-colors group/link relative z-10"
              >
                Explore Nexora Pulse
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
