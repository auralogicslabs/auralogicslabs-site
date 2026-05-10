"use client";

import { Zap, Shield, Layers, Eye, Database, Gauge } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const trustBadges = [
    { icon: Gauge, text: '22ms TTFB' },
    { icon: Layers, text: 'Elementor Compatible' },
    { icon: Database, text: 'Any Hosting' },
    { icon: Eye, text: 'Ghost Protocol' },
    { icon: Zap, text: 'Static Delivery' },
    { icon: Shield, text: 'Zero Rebuilds' },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#1A3FD8]/10 blur-3xl sm:left-[10%] sm:translate-x-0" />
      <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-[#60A5FA]/15 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1D4ED8] shadow-sm shadow-[#1A3FD8]/10">
              Enterprise WordPress infrastructure
            </div>

            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Launch WordPress infrastructure
              <br />
              with static-speed delivery.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Nexora Engine transforms your familiar WordPress backend into a modern edge platform with fast static delivery, hidden fingerprint security, and seamless editor continuity.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800">
                Start Free
              </button>
              <button className="rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-300 hover:bg-slate-50">
                Watch Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.08 * index }}
                    className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    <Icon size={16} className="text-[#1A3FD8]" />
                    <span>{badge.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950/5 p-8 shadow-2xl shadow-slate-900/10">
              <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white shadow-xl">
                <div className="flex items-center justify-between rounded-3xl bg-slate-900/90 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Delivery status</p>
                    <p className="mt-2 text-sm font-semibold">Live snapshot</p>
                  </div>
                  <div className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    99.99% uptime
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl bg-slate-900/90 p-5">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                      <span>Cache layer</span>
                      <span>Edge snapshot</span>
                    </div>
                    <p className="mt-4 text-xl font-semibold text-white">Instant static delivery</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Hosting</p>
                      <p className="mt-3 text-lg font-semibold text-white">Any provider</p>
                    </div>
                    <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Workflow</p>
                      <p className="mt-3 text-lg font-semibold text-white">No rebuilds</p>
                    </div>
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
