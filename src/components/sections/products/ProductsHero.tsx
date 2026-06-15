"use client";

import { motion } from "motion/react";
import { Layers } from "lucide-react";

export function ProductsHero() {
  return (
    <section className="relative pt-44 pb-16 px-8 lg:px-24 overflow-hidden bg-white">
      {/* Dot matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1A3FD8_1px,transparent_0)] bg-[size:40px_40px] opacity-[0.05] pointer-events-none" />
      {/* Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-brand/[0.06] rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-[1100px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-white/90 border border-border px-5 py-2 rounded-full shadow-sm mb-8"
        >
          <div className="h-7 w-7 rounded-lg bg-brand/10 border border-brand/15 flex items-center justify-center">
            <Layers className="h-3.5 w-3.5 text-brand" />
          </div>
          <span className="text-[11px] font-bold text-obsidian uppercase tracking-[0.22em]">Product Suite</span>
          <span className="text-border-strong mx-1">·</span>
          <span className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.16em]">Auralogics Labs</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-[44px] md:text-[60px] lg:text-[72px] font-extrabold text-obsidian leading-[0.95] tracking-[-0.05em] mb-7 max-w-[900px] mx-auto"
        >
          Invisible infrastructure <br className="hidden md:block" />
          for <span className="text-brand">modern WordPress.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="text-[17px] md:text-[19px] text-text-secondary max-w-[640px] mx-auto leading-[1.7] font-medium"
        >
          A focused suite of products that make WordPress faster, more visible, and easier to operate.
          Each one is a drop-in tool that respects your existing stack. Use them on their own or together.
        </motion.p>
      </div>
    </section>
  );
}
