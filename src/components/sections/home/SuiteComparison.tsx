'use client';

import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { siteContainerClass } from '@/lib/site-layout';

const rows = [
  { aspect: 'Vendors and billing', old: 'Several vendors, several bills', ours: 'One vendor, one bill' },
  { aspect: 'Do the tools cooperate', old: 'Often conflict with each other', ours: 'Built to coordinate' },
  { aspect: 'Data and scoring', old: 'Siloed in each plugin', ours: 'Shared across the suite' },
  { aspect: 'Where you manage it', old: 'A separate tab per plugin', ours: 'One dashboard for everything' },
  { aspect: 'Setup and admin', old: 'Different in every plugin', ours: 'Drop-in and consistent' },
  { aspect: 'Cost to get started', old: 'Adds up quickly', ours: 'Free at the core' },
];

export function SuiteComparison() {
  return (
    <section className="bg-bg py-24 sm:py-28">
      <div className={siteContainerClass}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">The difference</span>
          <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-obsidian sm:text-[50px]">
            A suite, not a stack of tabs.
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-text-secondary">
            The same jobs, done by one platform instead of a handful of tools that were never meant to meet.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-border shadow-card"
        >
          {/* header */}
          <div className="grid grid-cols-[1.3fr_1fr_1fr] bg-surface">
            <div className="px-5 py-4 sm:px-6" />
            <div className="border-l border-border px-5 py-4 text-center text-[13px] font-black uppercase tracking-wide text-text-muted sm:px-6">
              Separate plugins
            </div>
            <div className="border-l border-border px-5 py-4 text-center text-[13px] font-black uppercase tracking-wide text-brand sm:px-6">
              The Nexora suite
            </div>
          </div>

          {/* rows */}
          {rows.map((r, i) => (
            <div key={r.aspect} className={`grid grid-cols-[1.3fr_1fr_1fr] ${i % 2 ? 'bg-surface/40' : 'bg-white'}`}>
              <div className="border-t border-border px-5 py-4 text-[14.5px] font-semibold text-obsidian sm:px-6">{r.aspect}</div>
              <div className="flex items-center gap-2 border-l border-t border-border px-5 py-4 sm:px-6">
                <X className="h-4 w-4 flex-shrink-0 text-slate-400" />
                <span className="text-[13.5px] text-text-secondary">{r.old}</span>
              </div>
              <div className="flex items-center gap-2 border-l border-t border-border px-5 py-4 sm:px-6" style={{ background: 'rgba(26,63,216,0.03)' }}>
                <Check className="h-4 w-4 flex-shrink-0 text-brand" strokeWidth={3} />
                <span className="text-[13.5px] font-medium text-obsidian">{r.ours}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
