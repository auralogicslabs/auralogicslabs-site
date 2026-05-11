"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Workflow, RefreshCcw, Plus } from "lucide-react";

export function WhyNexora() {
  const [isHeadless, setIsHeadless] = useState(true);

  return (
    <section className="bg-white py-32 px-8 lg:px-24 overflow-hidden relative">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-widest mb-6 block">The Problem & Solution</span>
            <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] leading-[1.05] mb-8">
              Modern WordPress shouldn't require a <span className="text-brand">complete rebuild.</span>
            </h2>
            <div className="text-[18px] text-text-secondary leading-[1.6] space-y-6 max-w-[540px]">
              <p>
                WordPress runs 43% of the web. It also renders every page through PHP, exposes its identity in every response header, and forces teams into a binary choice: rebuild the entire frontend in React, or accept standard performance limitations.
              </p>
              <p>
                Nexora Engine collapses that choice. It captures your existing WordPress output as static snapshots and serves them through an intelligent delivery layer — without touching a single line of your existing builder workflow.
              </p>
            </div>

            <div className="mt-12 flex gap-12 border-t border-border pt-10">
              <div className="flex flex-col">
                <span className="text-brand font-bold text-[32px] font-display tracking-tight leading-none mb-2">0 lines</span>
                <span className="text-[13px] font-bold text-text-muted uppercase tracking-wider">code to rewrite</span>
              </div>
              <div className="flex flex-col">
                <span className="text-obsidian font-bold text-[32px] font-display tracking-tight leading-none mb-2">100%</span>
                <span className="text-[13px] font-bold text-text-muted uppercase tracking-wider">builder native</span>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Ambient Background Glow */}
            <div className={`absolute inset-0 blur-[100px] rounded-full opacity-10 transition-colors duration-1000 ${isHeadless ? 'bg-brand' : 'bg-amber'}`} />
            
            <div className="relative bg-white border border-border rounded-[24px] shadow-2xl p-10 overflow-hidden group">
              {/* Decorative Corner Traits */}
              <Plus className="absolute top-6 left-6 h-4 w-4 text-border-strong opacity-40" />
              <Plus className="absolute bottom-6 right-6 h-4 w-4 text-border-strong opacity-40" />

              <div className="flex justify-between items-center mb-10 pb-6 border-b border-border">
                <div>
                  <div className="text-[15px] font-bold text-obsidian mb-1">Architecture Toggle</div>
                  <div className="text-[12px] text-text-muted font-medium">Toggle to compare delivery impact</div>
                </div>
                
                {/* The Toggle */}
                <button 
                  onClick={() => setIsHeadless(!isHeadless)}
                  className={`relative w-16 h-8 rounded-full transition-all duration-500 focus:outline-none ring-offset-4 ring-offset-white focus:ring-2 focus:ring-brand ${isHeadless ? 'bg-obsidian' : 'bg-surface-soft border-2 border-border'}`}
                >
                  <motion.div 
                    className="absolute top-1 left-1 bg-white rounded-full h-6 w-6 shadow-md"
                    animate={{ x: isHeadless ? 32 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </button>
              </div>

              {/* Status Display */}
              <div className="space-y-8">
                <div className={`flex items-center justify-between p-5 rounded-xl border transition-all duration-500 ${isHeadless ? 'bg-brand/5 border-brand/20' : 'bg-amber/5 border-amber/20'}`}>
                  <div className="flex items-center gap-4">
                    <Workflow className={`h-6 w-6 ${isHeadless ? 'text-brand' : 'text-amber'}`} />
                    <span className="font-bold text-[16px] text-obsidian">Delivery Pipeline</span>
                  </div>
                  <span className={`font-mono text-[11px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-widest ${isHeadless ? 'bg-brand text-white' : 'bg-amber text-white'}`}>
                    {isHeadless ? 'STATIC EDGE' : 'TRADITIONAL PHP'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl border border-border bg-surface-soft/30 transition-all duration-500">
                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-3">TTFB Performance</div>
                    <div className="font-display text-[36px] font-bold text-obsidian flex items-baseline gap-1 leading-none">
                      {isHeadless ? '22' : '850'}
                      <span className="text-[16px] text-text-muted font-sans font-bold">ms</span>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-surface-soft/30 transition-all duration-500">
                    <div className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-3">Origin Server Load</div>
                    <div className="font-display text-[36px] font-bold text-obsidian flex items-baseline gap-1 leading-none">
                      {isHeadless ? '0' : 'High'}
                      {isHeadless && <span className="text-[16px] text-text-muted font-sans font-bold">%</span>}
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-xl border text-[14px] flex items-start gap-4 transition-all duration-500 ${isHeadless ? 'bg-brand/5 border-brand/20 text-text-primary' : 'bg-surface-soft border-border text-text-secondary'}`}>
                  <RefreshCcw className={`h-5 w-5 mt-0.5 ${isHeadless ? 'animate-spin-slow text-brand' : 'text-text-muted'}`} />
                  <div>
                    <strong className="block mb-1 text-obsidian">{isHeadless ? 'Intelligent Snapshotting Active' : 'Traditional Rendering'}</strong>
                    <p className="leading-[1.5] text-text-secondary">
                      {isHeadless ? 'Infrastructure intercepting traffic at the edge. WordPress never boots.' : 'Every visitor triggers a full PHP render cycle and database execution.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
