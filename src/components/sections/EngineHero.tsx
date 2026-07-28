"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Code2, Zap, Play } from "lucide-react";
import { siteContainerClass } from "@/lib/site-layout";
import { cn } from "@/app/components/ui/utils";
import { Button } from "@/components/ui/Button";

export function EngineHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden bg-white">

      {/* Dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1A3FD8_1px,transparent_0)] bg-[size:40px_40px] opacity-[0.06] pointer-events-none" />

      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand/[0.07] rounded-full blur-[140px]" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: "rgba(243,154,9,0.12)" }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.12, 0.18, 0.12] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className={cn(siteContainerClass, "relative z-10 flex flex-col items-center text-center")}>

        {/* Product pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-3 bg-white/90 border border-border px-5 py-2 rounded-full shadow-sm mb-10"
        >
          <div className="h-7 w-7 rounded-lg bg-brand/10 border border-brand/15 flex items-center justify-center">
            <Zap className="h-3.5 w-3.5 text-brand" />
          </div>
          <span className="text-[11px] font-bold text-obsidian uppercase tracking-[0.22em]">Nexora Engine</span>
          <span className="text-border-strong mx-1">·</span>
          <span className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.16em]">Static &amp; Invisible Infrastructure</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[48px] md:text-[68px] lg:text-[82px] font-extrabold text-obsidian leading-[0.95] tracking-[-0.04em] mb-8 max-w-[960px]"
        >
          Make WordPress fast <br className="hidden md:block" />
          <span className="text-brand">&mdash; and invisible.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="text-[17px] md:text-[19px] text-text-secondary max-w-[640px] leading-[1.7] mb-12 font-medium"
        >
          Static-speed delivery plus Ghost Protocol: pages are pre-rendered to flat HTML
          served before PHP boots, and your WordPress fingerprint is stripped so scanners and
          bots like Wappalyzer can&apos;t tell it&apos;s WordPress. No headless rebuild, no DevOps.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Button href="https://wordpress.org/plugins/nexora-engine" variant="primary" size="lg" className="group" target="_blank" rel="noopener noreferrer">
            <Code2 className="h-5 w-5" />
            Get It Free
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
          <Button href="#pricing" variant="secondary" size="lg" className="group">
            <Zap className="h-4 w-4 text-brand" />
            See Pro Pricing
            <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
          <Button href="/nexora-engine/demo" variant="ghost" size="lg" className="group">
            <Play className="h-4 w-4 text-brand" />
            Live Demo
          </Button>
        </motion.div>

        {/* Inline metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { v: "Invisible", l: "Wappalyzer can't detect WordPress" },
            { v: "22ms", l: "TTFB on cache hit" },
            { v: "0", l: "PHP on cache hit" },
            { v: "All hosts", l: "Apache · Nginx · LiteSpeed · IIS" },
          ].map((m) => (
            <div key={m.l} className="flex items-baseline gap-2">
              <span className="font-mono text-[22px] font-bold text-obsidian tracking-tight">{m.v}</span>
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-[0.16em]">{m.l}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
