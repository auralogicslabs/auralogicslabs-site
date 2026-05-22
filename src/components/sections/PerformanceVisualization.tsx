"use client";

import { motion } from "motion/react";
import { CheckCircle2, Plus, ArrowUpRight, Activity, Zap, Database, Globe, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function PerformanceVisualization() {
  const bars = [15, 25, 45, 85, 95, 80, 60, 45, 30, 20, 15, 12, 10, 8, 6, 5, 4, 3, 2];

  return (
    <section className="bg-white py-16 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Centered Header with Full Narrative Data */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
             <div className="h-0.5 w-12 bg-[#F39A09]" />
             <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-[0.3em]">Infrastructure Telemetry</span>
             <div className="h-0.5 w-12 bg-[#F39A09]" />
          </div>
          <h2 className="text-[32px] md:text-[50px] lg:text-[62px] font-extrabold text-obsidian tracking-[-0.05em] leading-[1.05] mb-10">
            Real infrastructure telemetry.
          </h2>
          <p className="max-w-[720px] mx-auto text-[17px] text-text-secondary leading-relaxed font-medium">
            Production-grade benchmarks from a WordPress instance running Nexora Engine on standard delivery infrastructure. High-fidelity performance at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Visual Card: TTFB Distribution - Screenshot Style with Full Data */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-[#050B25] border border-brand/20 rounded-[60px] p-12 lg:p-16 shadow-[0_80px_160px_rgba(2,6,23,0.3)] relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,63,216,0.1),transparent)] pointer-events-none" />
             <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />
             
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-20">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-brand animate-pulse shadow-[0_0_15px_rgba(26,63,216,0.8)]" />
                    <span className="text-brand font-mono text-[11px] font-bold tracking-[0.3em] uppercase">Edge Performance Analysis</span>
                  </div>
                  <h3 className="text-white text-[32px] font-extrabold tracking-tight">Time to First Byte (TTFB)</h3>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[32px] px-10 py-6 backdrop-blur-xl">
                  <span className="block text-white/30 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Global Aggregate</span>
                  <div className="flex items-baseline gap-2">
                     <span className="text-white text-[44px] font-extrabold font-display leading-none">22.4</span>
                     <span className="text-brand font-bold text-[18px]">ms</span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="h-[240px] flex items-end gap-1.5 relative group/chart mb-16">
                {bars.map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 relative group/bar"
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: `${height}%`, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={`w-full h-full rounded-t-2xl transition-all duration-700 ${
                      i < 6 ? 'bg-brand shadow-[0_0_30px_rgba(26,63,216,0.3)]' : i < 10 ? 'bg-brand/40' : 'bg-white/10'
                    }`} />
                    
                    {i === 4 && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#F39A09] text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-lg z-20">
                        98th Percentile
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-12">
                <div className="flex gap-16">
                   <div className="flex flex-col">
                     <span className="text-white/50 text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Audited Requests</span>
                     <span className="text-white font-extrabold font-mono text-[20px]">1,024,842</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-white/50 text-[11px] font-bold uppercase tracking-[0.3em] mb-3">Telemetry Period</span>
                     <span className="text-white font-extrabold font-mono text-[20px]">Last 24H</span>
                   </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-brand shadow-[0_0_10px_rgba(26,63,216,0.5)]" />
                    <span className="text-white font-bold text-[12px] uppercase tracking-widest">Nexora</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="h-3 w-3 rounded-full bg-white/40" />
                     <span className="text-white/70 font-bold text-[12px] uppercase tracking-widest">Standard WP</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Cards: Screenshot Style with Original Data */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            
            {/* Cache Efficiency Card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand rounded-[60px] p-12 shadow-[0_64px_128px_rgba(26,63,216,0.2)] relative overflow-hidden group h-full flex flex-col justify-between min-h-[300px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
              
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-[24px] bg-white/20 backdrop-blur-xl flex items-center justify-center mb-10 border border-white/20">
                   <Database className="text-white h-8 w-8" />
                </div>
                <h4 className="text-white text-[24px] font-extrabold mb-4 tracking-tight">Cache Efficiency</h4>
                <p className="text-white text-[15px] font-medium leading-relaxed">System-wide HIT ratio across global enterprise delivery nodes.</p>
              </div>
              
              <div className="mt-12 relative z-10">
                <div className="flex items-baseline gap-2 mb-4">
                   <span className="text-white text-[80px] font-extrabold font-display leading-none tracking-tighter block">98.2</span>
                   <span className="text-white/60 font-bold text-[24px]">%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "98.2%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                  />
                </div>
              </div>
            </motion.div>

            {/* Identity Masking Card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-border rounded-[60px] p-12 shadow-sm relative overflow-hidden h-full group hover:shadow-[0_64px_128px_rgba(2,6,23,0.08)] transition-all duration-700 flex flex-col justify-between min-h-[300px]"
            >
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-[24px] bg-[#050B25] flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                   <Globe className="text-brand h-8 w-8" />
                </div>
                <h4 className="text-obsidian text-[24px] font-extrabold mb-4 tracking-tight">Identity Masking</h4>
                <div className="space-y-6 font-mono text-[14px] font-bold">
                  <div className="flex items-center justify-between text-text-muted border-b border-border pb-4">
                    <span className="uppercase tracking-widest text-[11px]">Server Layer</span>
                    <span className="text-obsidian">NGINX/CDN_EDGE</span>
                  </div>
                  <div className="flex items-center justify-between text-text-muted border-b border-border pb-4">
                    <span className="uppercase tracking-widest text-[11px]">Stack Signature</span>
                    <span className="text-obsidian">NEXT_GEN_INFRA</span>
                  </div>
                  <div className="flex items-center justify-between text-text-muted">
                    <span className="uppercase tracking-widest text-[11px]">WP Discovery</span>
                    <span className="text-emerald-500 flex items-center gap-2">
                       <Plus size={14} /> ZERO_RESULTS
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                 <button className="flex items-center gap-3 text-brand font-extrabold text-[16px] group/btn">
                    View Global Latency Map
                    <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                 </button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
