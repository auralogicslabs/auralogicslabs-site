"use client";

import { motion } from "motion/react";
import { ArrowRight, Plus, Zap, Shield, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface px-8 py-24 lg:py-40 lg:px-24">
      {/* Premium Background Beautification */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:48px_48px] opacity-30 pointer-events-none" />
      
      {/* Animated Mesh Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-brand/5 via-amber/5 to-transparent blur-[120px] -z-10" />
      
      {/* Abstract Architectural Shapes */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--color-brand)" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,87,-15.7,85.2,-0.9C83.4,13.8,76.4,27.7,67.3,40.1C58.1,52.5,46.9,63.4,33.8,70.1C20.7,76.7,5.7,79.1,-9.5,77.5C-24.7,75.9,-40.1,70.2,-53.4,60.8C-66.6,51.3,-77.7,38.1,-82.7,23.2C-87.7,8.3,-86.6,-8.2,-81,-23.4C-75.3,-38.7,-65.2,-52.5,-52.1,-60C-39.1,-67.5,-23,-68.6,-8.2,-74.3C6.6,-80,21.3,-83.6,31.3,-83.7C41.3,-83.8,46.7,-80.4,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <Plus className="absolute top-12 left-12 text-border-strong w-4 h-4" />
      <Plus className="absolute top-12 right-12 text-border-strong w-4 h-4" />
      <Plus className="absolute bottom-12 left-12 text-border-strong w-4 h-4" />
      <Plus className="absolute bottom-12 right-12 text-border-strong w-4 h-4" />

      <div className="w-full max-w-[1700px] mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-8 bg-surface-soft border border-border px-4 py-2 rounded-full shadow-sm">
              <div className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-obsidian tracking-[0.2em] uppercase">Status: Infrastructure Primed</span>
            </div>
            
            <h1 className="text-[56px] md:text-[80px] lg:text-[100px] font-bold text-obsidian leading-[0.95] tracking-[-0.05em] mb-10">
              Modern headless <br className="hidden md:block" /> WordPress <br className="hidden md:block" /> delivery.
            </h1>
            
            <p className="text-[20px] md:text-[24px] text-text-secondary leading-[1.5] max-w-[640px] mb-12 font-medium">
              Nexora Engine transforms standard WordPress sites into high-performance, fingerprint-free static platforms. 22ms TTFB. Zero rebuild required.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto group relative inline-flex items-center justify-center rounded-xl bg-obsidian px-10 py-5 text-[18px] font-bold text-white shadow-[0_24px_48px_rgba(2,6,23,0.3)] hover:shadow-[0_32px_64px_rgba(2,6,23,0.4)] hover:-translate-y-1 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-border bg-white/50 backdrop-blur-sm px-10 py-5 text-[18px] font-bold text-obsidian hover:bg-white hover:border-obsidian/20 transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Premium Illustration / Metrics */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main Visual Card */}
            <div className="bg-white border border-border rounded-[48px] p-10 shadow-[0_64px_128px_rgba(2,6,23,0.12)] relative z-10 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand via-amber to-brand opacity-20" />
               <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-obsidian rounded-xl flex items-center justify-center">
                       <Zap className="text-brand h-5 w-5" />
                    </div>
                    <span className="font-bold text-obsidian tracking-tight">ENGINE CORE v2.4</span>
                  </div>
                  <div className="flex items-center gap-2 text-success font-bold text-[13px]">
                     <div className="h-2 w-2 rounded-full bg-success" />
                     SECURE
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="p-6 rounded-3xl bg-surface-soft border border-border flex items-center justify-between group hover:border-brand transition-colors duration-500">
                     <div className="flex items-center gap-4">
                        <Activity className="text-brand h-6 w-6" />
                        <div>
                           <span className="block text-[11px] font-bold text-text-muted uppercase tracking-widest mb-1">Response Time</span>
                           <span className="block text-[24px] font-bold text-obsidian font-mono">22ms</span>
                        </div>
                     </div>
                     <span className="text-success text-[12px] font-bold bg-success/10 px-2 py-1 rounded-md">−94%</span>
                  </div>

                  <div className="p-6 rounded-3xl bg-surface-soft border border-border flex items-center justify-between group hover:border-brand transition-colors duration-500">
                     <div className="flex items-center gap-4">
                        <Shield className="text-brand h-6 w-6" />
                        <div>
                           <span className="block text-[11px] font-bold text-text-muted uppercase tracking-widest mb-1">Fingerprint Removal</span>
                           <span className="block text-[24px] font-bold text-obsidian font-mono">100%</span>
                        </div>
                     </div>
                     <span className="text-brand text-[12px] font-bold bg-brand/10 px-2 py-1 rounded-md">CLOAKED</span>
                  </div>
               </div>

               <div className="mt-12 flex items-center justify-center">
                  <div className="flex -space-x-4">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="h-12 w-12 rounded-full border-4 border-white bg-surface-soft overflow-hidden">
                           <div className="h-full w-full bg-gradient-to-br from-brand/20 to-brand/40" />
                        </div>
                     ))}
                     <div className="h-12 w-12 rounded-full border-4 border-white bg-obsidian flex items-center justify-center text-[13px] font-bold text-white">
                        +2k
                     </div>
                  </div>
               </div>
               <p className="mt-6 text-center text-[13px] text-text-muted font-medium">Joined by 2,000+ infrastructure teams</p>
            </div>

            {/* Decorative Grid Behind */}
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:32px_32px] opacity-40 -z-10 rounded-[60px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
