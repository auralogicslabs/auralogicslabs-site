"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg px-6 py-16 lg:py-24 lg:px-12">
      <div className="mx-auto max-w-[1280px] grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-brand font-semibold mb-6 block">
              Infrastructure Intelligence Platform
            </span>
            <h1 className="text-[44px] md:text-[56px] lg:text-[72px] font-semibold text-text-primary leading-[1.05] tracking-[-0.04em] mb-6">
              WordPress in the back.<br />Next.js in the front.
            </h1>
            <p className="text-[18px] text-text-secondary leading-[1.6] max-w-[540px] mb-8">
              Nexora Engine is the infrastructure delivery layer that transforms WordPress sites into static-speed, fingerprint-free, headless-grade platforms — without rebuilding a single line of code.
            </p>
            <p className="text-[14px] text-text-muted mb-8">
              One toggle. Any host. Twenty-two milliseconds.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 mt-4">
              <button className="group inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-[16px] font-medium text-white shadow-sm hover:bg-brand-bright transition-colors">
                Start Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-[16px] font-medium text-text-primary shadow-sm hover:bg-surface-soft hover:text-text-primary transition-colors">
                View Live Demo
              </button>
            </div>

            <div className="mt-8 pt-8 flex flex-wrap items-center gap-4 text-[13px] font-mono text-text-muted">
              <span>22ms TTFB</span>
              <span className="text-border-strong">•</span>
              <span>Universal Compatibility</span>
              <span className="text-border-strong">•</span>
              <span>Ghost Protocol</span>
              <span className="text-border-strong">•</span>
              <span>Zero Rebuild</span>
              <span className="text-border-strong">•</span>
              <span>Static Delivery</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Illustration */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square border border-border bg-surface rounded-[12px] shadow-elevated flex items-center justify-center overflow-hidden"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
            
            {/* 22ms Chip */}
            <div className="absolute top-6 right-6 bg-white border border-border px-3 py-1.5 rounded-full shadow-sm z-10 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="font-mono text-[13px] font-medium text-text-primary">22ms TTFB</span>
            </div>

            {/* Architecture SVG Simulation */}
            <svg viewBox="0 0 400 400" className="w-full h-full p-8 relative z-0">
              <defs>
                <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-brand)" />
                  <stop offset="100%" stopColor="var(--color-brand-soft)" />
                </linearGradient>
              </defs>
              <rect x="50" y="150" width="80" height="100" rx="8" fill="white" stroke="var(--color-border)" strokeWidth="2" />
              <rect x="270" y="150" width="80" height="100" rx="8" fill="white" stroke="var(--color-border)" strokeWidth="2" />
              
              <motion.path
                d="M 130 200 C 200 200, 200 200, 270 200"
                fill="none"
                stroke="url(#flow)"
                strokeWidth="3"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
