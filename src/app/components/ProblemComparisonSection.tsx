"use client";

import { X, Check, Minus } from 'lucide-react';
import { motion } from 'motion/react';

type CellStatus = 'bad' | 'mixed' | 'good';

type Row = {
  feature: string;
  traditional: { text: string; status: CellStatus };
  headless: { text: string; status: CellStatus };
  nexora: { text: string; status: CellStatus };
};

const comparisonData: Row[] = [
  {
    feature: 'Page Performance',
    traditional: { text: 'Slow PHP rendering, 600–1800ms TTFB', status: 'bad' },
    headless: { text: 'Fast, but requires CDN + build pipeline', status: 'mixed' },
    nexora: { text: 'Static-speed, 22ms TTFB, any host', status: 'good' },
  },
  {
    feature: 'Setup Complexity',
    traditional: { text: 'Simple WordPress install', status: 'good' },
    headless: { text: 'High DevOps overhead, specialized team', status: 'bad' },
    nexora: { text: 'One-click toggle, zero configuration', status: 'good' },
  },
  {
    feature: 'Security Posture',
    traditional: { text: 'Full WP fingerprint exposed', status: 'bad' },
    headless: { text: 'Decoupled, but costly to maintain', status: 'mixed' },
    nexora: { text: 'Ghost Protocol — fingerprint hidden', status: 'good' },
  },
  {
    feature: 'Rebuild on Change',
    traditional: { text: 'None required', status: 'good' },
    headless: { text: 'Full frontend rebuild on every change', status: 'bad' },
    nexora: { text: 'Selective regeneration — affected pages only', status: 'good' },
  },
  {
    feature: 'Editor Experience',
    traditional: { text: 'Familiar WordPress admin', status: 'good' },
    headless: { text: 'API-only, requires content model rebuild', status: 'bad' },
    nexora: { text: 'Unchanged — Elementor, Gutenberg, all builders', status: 'good' },
  },
  {
    feature: 'Hosting Requirements',
    traditional: { text: 'Any shared/managed WP hosting', status: 'good' },
    headless: { text: 'Separate Node server + CDN required', status: 'bad' },
    nexora: { text: 'Any existing WP host — no changes needed', status: 'good' },
  },
];

function StatusIcon({ status }: { status: CellStatus }) {
  if (status === 'good')
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 flex-shrink-0">
        <Check size={12} className="text-emerald-700" strokeWidth={2.5} />
      </span>
    );
  if (status === 'bad')
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
        <X size={12} className="text-red-600" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
      <Minus size={12} className="text-amber-600" strokeWidth={2.5} />
    </span>
  );
}

export function ProblemComparisonSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-8">
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-[#1A3FD8]/8 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Comparison
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            WordPress for modern infrastructure.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            See why Nexora Engine is the fastest, safest, and most practical
            path for WordPress at enterprise scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl"
        >
          {/* Header row */}
          <div className="grid grid-cols-4 border-b border-slate-100">
            <div className="px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Feature
              </p>
            </div>
            <div className="border-l border-slate-100 px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Traditional WP
              </p>
            </div>
            <div className="border-l border-slate-100 px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Full Headless
              </p>
            </div>
            {/* Nexora column — highlighted */}
            <div className="border-l border-[#1A3FD8]/20 bg-[#1A3FD8]/5 px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1A3FD8]">
                Nexora Engine ✦
              </p>
            </div>
          </div>

          {/* Data rows */}
          {comparisonData.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/70`}
            >
              <div className="px-6 py-5">
                <p className="text-sm font-semibold text-slate-950">
                  {row.feature}
                </p>
              </div>
              <div className="border-l border-slate-100 px-6 py-5">
                <div className="flex items-start gap-2">
                  <StatusIcon status={row.traditional.status} />
                  <p className="text-sm leading-snug text-slate-500">
                    {row.traditional.text}
                  </p>
                </div>
              </div>
              <div className="border-l border-slate-100 px-6 py-5">
                <div className="flex items-start gap-2">
                  <StatusIcon status={row.headless.status} />
                  <p className="text-sm leading-snug text-slate-500">
                    {row.headless.text}
                  </p>
                </div>
              </div>
              {/* Nexora column */}
              <div className="border-l border-[#1A3FD8]/20 bg-[#1A3FD8]/5 px-6 py-5">
                <div className="flex items-start gap-2">
                  <StatusIcon status={row.nexora.status} />
                  <p className="text-sm font-medium leading-snug text-[#1A3FD8]">
                    {row.nexora.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
