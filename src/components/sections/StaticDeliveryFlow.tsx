"use client";

import { motion } from "motion/react";
import { ArrowRight, Zap, Globe, Database, Code2, CheckCircle2, X } from "lucide-react";
import Link from "next/link";

/* ── Animated pipeline node ── */
function PipeNode({
  icon: Icon,
  label,
  color,
  glow,
  delay,
  strikethrough,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
  glow?: boolean;
  delay: number;
  strikethrough?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2 relative"
    >
      <div
        className="h-14 w-14 rounded-2xl flex items-center justify-center relative"
        style={{
          background: `${color}18`,
          border: `1.5px solid ${color}35`,
          boxShadow: glow ? `0 0 24px ${color}40` : "none",
        }}
      >
        <Icon className="h-6 w-6" style={{ color }} />
        {strikethrough && (
          <div className="absolute inset-0 flex items-center justify-center">
            <X className="h-10 w-10 text-red-500/70" strokeWidth={2.5} />
          </div>
        )}
      </div>
      <span
        className="text-[11px] font-bold text-center leading-tight max-w-[72px]"
        style={{ color: strikethrough ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.6)" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/* ── Animated connector line between nodes ── */
function Connector({ delay, strike }: { delay: number; strike?: boolean }) {
  return (
    <div className="flex-1 flex items-center justify-center px-2 pb-6">
      <div className="relative w-full h-[2px]">
        <div className="absolute inset-0 bg-white/8 rounded-full" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay, ease: "easeInOut" }}
          className="absolute inset-0 origin-left rounded-full"
          style={{ background: strike ? "rgba(239,68,68,0.4)" : "rgba(26,63,216,0.5)" }}
        />
        {!strike && (
          <motion.div
            initial={{ left: "0%" }}
            whileInView={{ left: "100%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, delay: delay + 0.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
            className="absolute top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-brand"
            style={{ boxShadow: "0 0 8px rgba(26,63,216,0.8)" }}
          />
        )}
      </div>
    </div>
  );
}

export function StaticDeliveryFlow() {
  return (
    <section className="bg-obsidian pt-28 pb-24 px-8 lg:px-24 relative overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-brand/7 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[400px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-[680px] mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-0.5 w-8 bg-brand rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">How It Works</span>
            <div className="h-0.5 w-8 bg-brand rounded-full" />
          </div>
          <h2 className="text-[36px] md:text-[54px] font-extrabold text-white tracking-tight leading-[1.05] mb-5">
            The request never touches<br className="hidden md:block" /> PHP. Ever.
          </h2>
          <p className="text-[17px] text-white/45 font-medium leading-[1.72]">
            Two request paths. One delivers a page in 22ms.
            The other makes your visitor wait while your server does the same work it always does.
          </p>
        </motion.div>

        {/* ── Pipeline visual ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">

          {/* Legacy pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] border border-red-500/15 bg-gradient-to-br from-red-500/5 to-transparent p-8 relative overflow-hidden"
          >
            {/* Label */}
            <div className="flex items-center gap-2.5 mb-8">
              <div className="h-2 w-2 rounded-full bg-red-400" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-red-400/70">Without Nexora</span>
            </div>

            {/* Pipeline nodes */}
            <div className="flex items-start">
              <PipeNode icon={Globe}    label="Request"  color="#94A3B8" delay={0.1} />
              <Connector delay={0.2} strike />
              <PipeNode icon={Code2}    label="PHP Boots" color="#F97316" delay={0.3} />
              <Connector delay={0.4} strike />
              <PipeNode icon={Database} label="DB Query"  color="#F97316" delay={0.5} />
              <Connector delay={0.6} strike />
              <PipeNode icon={Code2}    label="Render"    color="#F97316" delay={0.7} />
              <Connector delay={0.8} strike />
              <PipeNode icon={Globe}    label="Response"  color="#94A3B8" delay={0.9} />
            </div>

            {/* Speed callout */}
            <div className="mt-8 flex items-end justify-between">
              <p className="text-[14px] text-white/35 font-medium leading-relaxed max-w-[260px]">
                Every visit re-runs the full stack. PHP, database, template. no matter how many times that page was loaded before.
              </p>
              <div className="text-right flex-shrink-0">
                <div className="font-mono text-[42px] font-bold text-red-400 leading-none">850ms</div>
                <div className="text-[10px] text-red-400/50 font-bold uppercase tracking-wider mt-1">avg TTFB</div>
              </div>
            </div>
          </motion.div>

          {/* Nexora pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[28px] border border-brand/25 bg-gradient-to-br from-brand/8 to-emerald-500/4 p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand/12 blur-[100px] rounded-full pointer-events-none" />

            {/* Label */}
            <div className="flex items-center gap-2.5 mb-8 relative z-10">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.28em] text-emerald-400/70">With Nexora Engine</span>
            </div>

            {/* Pipeline nodes */}
            <div className="flex items-start relative z-10">
              <PipeNode icon={Globe}         label="Request"  color="#94A3B8" delay={0.15} />
              <Connector delay={0.25} />
              <PipeNode icon={Zap}           label="Nexora"   color="#1A3FD8" glow delay={0.35} />
              <Connector delay={0.45} />
              <PipeNode icon={CheckCircle2}  label="Served"   color="#059669" glow delay={0.55} />
              {/* Struck-through ghost nodes */}
              <div className="flex items-start opacity-20 ml-4">
                <PipeNode icon={Database} label="DB" color="#F97316" delay={0} strikethrough />
                <div className="w-4" />
                <PipeNode icon={Code2}    label="PHP" color="#F97316" delay={0} strikethrough />
              </div>
            </div>

            {/* Speed callout */}
            <div className="mt-8 flex items-end justify-between relative z-10">
              <p className="text-[14px] text-white/45 font-medium leading-relaxed max-w-[260px]">
                Nexora intercepts the request before WordPress even starts. Pre-built HTML goes straight from disk to browser.
              </p>
              <div className="text-right flex-shrink-0">
                <div className="font-mono text-[42px] font-bold text-emerald-400 leading-none">22ms</div>
                <div className="text-[10px] text-emerald-400/50 font-bold uppercase tracking-wider mt-1">avg TTFB</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-7 rounded-[24px] bg-white/[0.04] border border-white/8 mb-0"
        >
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="h-11 w-11 rounded-2xl bg-brand/20 border border-brand/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(26,63,216,0.3)]">
              <Zap className="h-5 w-5 text-brand-soft" />
            </div>
            <div>
              <p className="text-[16px] font-extrabold text-white mb-0.5">Drop-in install. Zero infrastructure changes.</p>
              <p className="text-[13px] text-white/38 font-medium">Apache · Nginx · LiteSpeed · IIS. No CDN contract. No DevOps.</p>
            </div>
          </div>
          <Link
            href="/products/nexora-engine"
            className="flex-shrink-0 inline-flex items-center gap-2.5 rounded-[14px] bg-brand px-7 py-4 text-[14px] font-black text-white hover:bg-brand-bright transition-colors group shadow-[0_0_32px_rgba(26,63,216,0.5),0_4px_16px_rgba(26,63,216,0.3)]"
          >
            Explore Nexora Engine
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
