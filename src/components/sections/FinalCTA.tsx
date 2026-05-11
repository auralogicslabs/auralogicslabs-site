"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Plus } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-40 px-8 lg:px-24 overflow-hidden bg-surface-soft border-t border-border flex justify-center">
      {/* Dense Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#CBD5E1_1px,transparent_1px),linear-gradient(to_bottom,#CBD5E1_1px,transparent_1px)] bg-[size:64px_64px] opacity-30 pointer-events-none" />
      
      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand/10 blur-[120px] rounded-[100%]" />

      <div className="w-full max-w-[1700px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[900px] mx-auto"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-border px-5 py-2 rounded-full shadow-sm mb-10">
            <Sparkles className="h-4 w-4 text-brand" />
            <span className="text-[12px] font-bold text-obsidian uppercase tracking-[0.2em]">Ready to scale?</span>
          </div>

          <h2 className="text-[48px] md:text-[80px] font-bold text-obsidian leading-[1] tracking-[-0.05em] mb-12">
            The web you have, <br /> but 10x faster.
          </h2>
          
          <p className="text-[20px] md:text-[24px] text-text-secondary leading-[1.6] mb-16 font-medium max-w-[700px] mx-auto">
            Join the engineering teams modernizing WordPress with Nexora Engine. Start your 14-day free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.location.href = '/portal'}
              className="w-full sm:w-auto rounded-2xl bg-obsidian px-12 py-6 text-[20px] font-bold text-white shadow-[0_32px_64px_rgba(2,6,23,0.3)] hover:shadow-[0_48px_96px_rgba(2,6,23,0.4)] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              Start Your Trial
              <ArrowRight className="ml-3 h-6 w-6 inline-block transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:hello@auralogicslabs.com'}
              className="w-full sm:w-auto rounded-2xl border-2 border-border bg-white/50 backdrop-blur-sm px-12 py-6 text-[20px] font-bold text-obsidian hover:bg-white hover:border-obsidian/20 transition-all duration-300"
            >
              Talk to Engineering
            </button>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-12 grayscale opacity-40">
             <div className="flex items-center gap-2 font-mono font-bold text-[14px]">
                <Plus className="h-4 w-4" /> 22MS TTFB
             </div>
             <div className="flex items-center gap-2 font-mono font-bold text-[14px]">
                <Plus className="h-4 w-4" /> ZERO REBUILD
             </div>
             <div className="flex items-center gap-2 font-mono font-bold text-[14px]">
                <Plus className="h-4 w-4" /> 100% CLOAKED
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
