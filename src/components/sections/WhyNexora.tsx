"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Workflow, RefreshCcw, Plus, Zap, Shield, ChevronRight } from "lucide-react";

export function WhyNexora() {
  const [isHeadless, setIsHeadless] = useState(true);

  return (
    <section id="why-nexora" className="bg-white py-24 px-8 lg:px-24 overflow-hidden relative border-y border-border">
      {/* Cinematic Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      {/* High-Fidelity Glows */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isHeadless ? 'headless' : 'legacy'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] blur-[150px] rounded-full -z-10 opacity-10 ${isHeadless ? 'bg-brand' : 'bg-amber'}`}
        />
      </AnimatePresence>

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Narrative Header (Pivoted to Left-Align) */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
               <div className="h-0.5 w-10 bg-brand" />
               <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">The Paradigm Shift</span>
            </div>
            
            <h2 className="text-[32px] md:text-[44px] lg:text-[54px] font-extrabold text-obsidian tracking-[-0.05em] leading-[1.1] mb-10">
              Modern WordPress <br /> 
              <span className="text-brand">engineered by</span> <br />
              Auralogics Labs.
            </h2>

            <div className="text-[17px] md:text-[19px] text-text-secondary leading-relaxed space-y-6 max-w-[540px] font-medium">
              <p>
                WordPress powers the web, but its architecture is trapped in the legacy era. At Auralogics Labs, we build the infrastructure that collapses the choice between speed and workflow.
              </p>
              <p className="text-obsidian font-bold">
                Nexora Engine is our flagship answer: Keep your builders, keep your plugins, but serve your users through an absolute static layer.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-10 border-t border-border pt-10">
              <div className="flex flex-col">
                <span className="text-brand font-bold text-[36px] font-display tracking-tight leading-none mb-2">Zero</span>
                <span className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em]">Code to rewrite</span>
              </div>
              <div className="flex flex-col">
                <span className="text-obsidian font-bold text-[36px] font-display tracking-tight leading-none mb-2">100%</span>
                <span className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em]">Platform Native</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Balancing Visual Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="perspective-1000"
          >
            <div className="relative bg-white border border-border rounded-[40px] shadow-[0_48px_96px_rgba(2,6,23,0.1)] p-10 overflow-hidden group">
              {/* Decorative Corner Architecture */}
              <Plus className="absolute top-8 left-8 h-4 w-4 text-border-strong opacity-40 group-hover:rotate-90 transition-transform duration-1000" />
              <Plus className="absolute bottom-8 right-8 h-4 w-4 text-border-strong opacity-40 group-hover:rotate-90 transition-transform duration-1000" />

              <div className="flex justify-between items-center mb-10 pb-6 border-b border-border">
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors duration-700 ${isHeadless ? 'bg-brand shadow-[0_0_20px_rgba(26,63,216,0.3)]' : 'bg-amber shadow-[0_0_20px_rgba(245,158,11,0.3)]'}`}>
                     <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[16px] font-extrabold text-obsidian tracking-tight">Nexora System</div>
                    <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Active Architecture</div>
                  </div>
                </div>
                
                {/* High-Fidelity Switch */}
                <button 
                  onClick={() => setIsHeadless(!isHeadless)}
                  className={`group relative w-16 h-8 rounded-full transition-all duration-700 p-1 ${isHeadless ? 'bg-obsidian' : 'bg-surface-soft border-2 border-border'}`}
                >
                  <motion.div 
                    className={`h-full aspect-square rounded-full shadow-md ${isHeadless ? 'bg-brand' : 'bg-white'}`}
                    animate={{ x: isHeadless ? 32 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </button>
              </div>

              {/* Visualization Stack */}
              <div className="space-y-8">
                <div className={`relative p-6 rounded-[24px] border transition-all duration-700 overflow-hidden ${isHeadless ? 'bg-obsidian text-white border-white/10' : 'bg-surface-soft border-border text-obsidian'}`}>
                   {isHeadless && <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] animate-shimmer" />}
                   
                   <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-4">
                         <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${isHeadless ? 'bg-brand/20 border border-brand/40' : 'bg-white border border-border'}`}>
                            <Shield className={`h-5 w-5 ${isHeadless ? 'text-brand' : 'text-text-muted'}`} />
                         </div>
                         <div>
                            <span className="block text-[10px] font-bold opacity-40 uppercase tracking-[0.2em] mb-0.5">Response Layer</span>
                            <span className="block text-[18px] font-bold tracking-tight">
                               {isHeadless ? 'NEXORA STEALTH' : 'LEGACY WP HEADER'}
                            </span>
                         </div>
                      </div>
                      <div className={`h-2.5 w-2.5 rounded-full animate-pulse ${isHeadless ? 'bg-brand' : 'bg-amber'}`} />
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-[24px] border border-border bg-white group-hover:border-brand/40 transition-all duration-500">
                    <span className="block text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-2">TTFB Latency</span>
                    <div className="text-[32px] font-bold text-obsidian leading-none tracking-tighter flex items-baseline gap-1">
                       {isHeadless ? '22' : '850'}
                       <span className="text-[12px] text-text-muted font-bold uppercase tracking-widest font-sans">ms</span>
                    </div>
                  </div>

                  <div className="p-6 rounded-[24px] border border-border bg-white group-hover:border-brand/40 transition-all duration-500">
                    <span className="block text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mb-2">Origin Load</span>
                    <div className="text-[32px] font-bold text-obsidian leading-none tracking-tighter flex items-baseline gap-1">
                       {isHeadless ? '0' : '90'}
                       <span className="text-[12px] text-text-muted font-bold uppercase tracking-widest font-sans">%</span>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-[24px] border flex items-center justify-between transition-all duration-700 ${isHeadless ? 'bg-brand/5 border-brand/20' : 'bg-surface-soft border-border'}`}>
                   <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${isHeadless ? 'bg-brand shadow-[0_0_15px_rgba(26,63,216,0.3)]' : 'bg-white border border-border'}`}>
                         <RefreshCcw className={`h-5 w-5 ${isHeadless ? 'animate-spin-slow text-white' : 'text-text-muted'}`} />
                      </div>
                      <div>
                         <span className="block font-bold text-obsidian text-[15px]">
                            {isHeadless ? 'Intelligent Cache Sync' : 'Dynamic PHP Rendering'}
                         </span>
                      </div>
                   </div>
                   <ChevronRight className={`h-5 w-5 transition-transform duration-500 ${isHeadless ? 'translate-x-0 text-brand' : 'opacity-0'}`} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
