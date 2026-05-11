"use client";

import { motion } from "motion/react";
import { CheckCircle2, Plus, ArrowUpRight, Activity, Zap, Database, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function PerformanceVisualization() {
  const bars = [15, 25, 45, 85, 95, 80, 60, 45, 30, 20, 15, 12, 10, 8, 6, 5, 4, 3, 2];

  return (
    <section className="bg-white py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Architectural Traits */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[12px] font-bold uppercase tracking-wider rounded-full mb-6">
            Telemetry Dashboard
          </span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] leading-tight mb-8">
            Real infrastructure performance.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6] font-medium">
            Production-grade benchmarks from a WordPress instance running Nexora Engine on standard Nginx infrastructure. No external CDN interference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Visual: TTFB Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-obsidian rounded-[32px] p-10 lg:p-16 shadow-[0_48px_96px_rgba(2,6,23,0.15)] relative overflow-hidden border border-white/5 group"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <Activity className="w-64 h-64 text-brand" strokeWidth={1} />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-2 w-2 rounded-full bg-brand animate-pulse" />
                    <span className="text-brand font-mono text-[13px] font-bold tracking-widest uppercase">Live Latency Distribution</span>
                  </div>
                  <h3 className="text-white text-[28px] font-bold tracking-tight">Time to First Byte (TTFB)</h3>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-md">
                  <span className="block text-white/40 text-[11px] font-bold uppercase tracking-widest mb-1">Global Mean</span>
                  <span className="text-white text-[24px] font-bold font-mono">22.4ms</span>
                </div>
              </div>

              <div className="h-[300px] flex items-end gap-1 relative group/chart">
                {bars.map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 relative group/bar"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.04), ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className={`w-full h-full rounded-t-lg transition-all duration-500 ${
                      i < 6 ? 'bg-brand' : i < 10 ? 'bg-brand/40' : 'bg-white/10 group-hover/chart:bg-white/20'
                    }`} />
                    {i === 4 && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
                        96th Percentile
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-8">
                <div className="flex gap-10">
                   <div className="flex flex-col">
                     <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Requests</span>
                     <span className="text-white font-bold font-mono">1,024,842</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Duration</span>
                     <span className="text-white font-bold font-mono">24 Hours</span>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand" />
                    <span className="text-white/60 text-[11px] font-bold uppercase tracking-wider">Nexora</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="text-white/60 text-[11px] font-bold uppercase tracking-wider">Standard WP</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Cards Stack */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Cache Efficiency Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand rounded-[32px] p-10 shadow-xl relative overflow-hidden group h-full"
            >
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <Database className="text-white h-6 w-6" />
                  </div>
                  <h4 className="text-white text-[22px] font-bold mb-2">Cache Efficiency</h4>
                  <p className="text-white/70 text-[15px] font-medium leading-relaxed">System-wide HIT ratio across all authenticated sessions.</p>
                </div>
                <div className="mt-10">
                  <span className="text-white text-[64px] font-bold font-display leading-none tracking-tighter block">98.2%</span>
                  <div className="mt-4 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "98.2%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-white"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Protocol Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-border rounded-[32px] p-10 shadow-sm relative overflow-hidden h-full group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-2xl bg-obsidian flex items-center justify-center mb-6">
                  <Globe className="text-brand h-6 w-6" />
                </div>
                <h4 className="text-obsidian text-[22px] font-bold mb-4">Edge Identity</h4>
                <div className="space-y-4 font-mono text-[13px] font-bold">
                  <div className="flex items-center justify-between text-text-secondary border-b border-border pb-3">
                    <span>SERVER</span>
                    <span className="text-obsidian">nginx/1.24.0</span>
                  </div>
                  <div className="flex items-center justify-between text-text-secondary border-b border-border pb-3">
                    <span>POWERED-BY</span>
                    <span className="text-obsidian">Next.js</span>
                  </div>
                  <div className="flex items-center justify-between text-text-secondary">
                    <span>CACHE</span>
                    <span className="text-success uppercase">Hit (Static)</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
