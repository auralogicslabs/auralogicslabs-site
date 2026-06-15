"use client";

import { useState } from 'react';
import { Zap, Shield, Brain, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const platforms = [
  {
    id: 'speed',
    icon: Zap,
    label: 'Speed Infrastructure',
    title: 'Static-speed delivery without changing a thing.',
    description:
      'Nexora Engine drops a universal cache layer into WordPress that serves pre-rendered HTML before PHP, plugins, or the database ever load. Any hosting. Any server. Any theme.',
    features: [
      { label: 'Static HTML delivery', note: 'Pre-rendered pages served directly from disk' },
      { label: 'Sub-50ms TTFB', note: 'No PHP execution, no DB queries per request' },
      { label: 'Universal server support', note: 'Apache, Nginx, LiteSpeed, IIS. all covered' },
      { label: 'Browser-level caching', note: 'Full Cache-Control and ETag header control' },
    ],
  },
  {
    id: 'security',
    icon: Shield,
    label: 'Ghost Protocol',
    title: 'Enterprise security with zero-footprint delivery.',
    description:
      'Ghost Protocol scrubs every captured page of WordPress fingerprints. REST endpoints, plugin paths, generator tags. before they ever reach a visitor. You look like a CDN-deployed Next.js app.',
    features: [
      { label: 'Namespace cloaking', note: 'WP plugin/theme paths rewritten in HTML' },
      { label: 'REST endpoint masking', note: 'wp-json and REST routes hidden from output' },
      { label: 'Header sanitization', note: 'X-Powered-By and Server replaced at response' },
      { label: 'Attack surface reduction', note: 'Fingerprint-free responses for every visitor' },
    ],
  },
  {
    id: 'automation',
    icon: Brain,
    label: 'Intelligent Automation',
    title: 'Self-managing cache that knows what changed.',
    description:
      'Nexora Engine listens to WordPress publish events and re-captures only the pages that changed. No manual flushes, no full-site rebuilds. just precise, instant invalidation.',
    features: [
      { label: 'Selective regeneration', note: 'Only changed pages are re-captured' },
      { label: 'Conflict detection', note: 'Auto-detects competing caching plugins' },
      { label: 'Asset validation', note: 'Static resources verified before serving' },
      { label: 'Auto-invalidation on publish', note: 'Cache cleared the moment you click Update' },
    ],
  },
];

export function PlatformOverviewSection() {
  const [activeId, setActiveId] = useState('speed');
  const current = platforms.find((p) => p.id === activeId)!;
  const CurrentIcon = current.icon;

  return (
    <section id="platform" className="bg-[#F8FAFC] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Platform
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            Infrastructure Layer For
            <br />
            Modern WordPress
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Three pillars that transform WordPress into a modern delivery
            platform. no rebuild required.
          </p>
        </motion.div>

        {/* Tab selectors */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {platforms.map((p) => {
            const TabIcon = p.icon;
            const isActive = activeId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-md shadow-slate-900/10'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-[#1A3FD8] hover:text-[#1A3FD8]'
                }`}
              >
                <TabIcon size={15} />
                {p.label}
              </button>
            );
          })}
        </div>

        {/* Animated tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-[5fr_7fr]"
          >
            {/* Left: title + description */}
            <div className="p-8 lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A3FD8] to-[#2563EB] shadow-md shadow-[#1A3FD8]/20">
                <CurrentIcon size={26} className="text-white" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-snug text-slate-950">
                {current.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{current.description}</p>
            </div>

            {/* Right: capabilities list */}
            <div className="border-t border-slate-100 p-8 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Capabilities
              </p>
              <ul className="mt-6 space-y-5">
                {current.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-[#1A3FD8]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        {f.label}
                      </p>
                      <p className="text-sm text-slate-500">{f.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
