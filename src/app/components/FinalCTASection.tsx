"use client";

import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#1A3FD8] via-[#2563EB] to-[#60A5FA] px-6 py-24 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-slate-950/10 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
            Build modern infrastructure
            <br />
            on WordPress.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Transform any WordPress installation into a high-performance delivery platform with Nexora Engine and ship faster across the edge.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#1A3FD8] shadow-2xl shadow-slate-950/10 transition hover:bg-slate-50">
              Start free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20">
              Request early access
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-sm">One-click setup</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-300" />
              <span className="text-sm">Works on any hosting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
