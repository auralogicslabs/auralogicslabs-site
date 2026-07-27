'use client';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

const points = [
  'One vendor, one suite, one place to manage',
  'Everything coordinates instead of conflicting',
  'Shared design, shared data, consistent admin',
  'Free at the core, upgrade in place when you need more',
];

function ProductPreview() {
  return (
    <div className="relative">
      {/* soft floor shadow */}
      <div className="pointer-events-none absolute -inset-x-6 bottom-0 h-24 rounded-full bg-obsidian/5 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_70px_-24px_rgba(15,23,42,0.35)]">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="mx-auto rounded-md bg-white px-3 py-1 text-[11px] font-medium text-text-muted ring-1 ring-border">
            auralogicslabs.com
          </span>
        </div>

        {/* preview body (placeholder UI, swap for a real screenshot) */}
        <div className="grid grid-cols-[64px_1fr] bg-[#FBFCFE]">
          {/* mini sidebar */}
          <div className="flex flex-col items-center gap-3 border-r border-border py-5">
            <span className="h-7 w-7 rounded-lg bg-brand/15" />
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-4 w-4 rounded bg-slate-200" />
            ))}
          </div>

          {/* main area */}
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="h-4 w-28 rounded bg-slate-200" />
              <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
                Live
              </span>
            </div>

            {/* stat tiles */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { v: '22ms', l: 'Response' },
                { v: '100%', l: 'Uptime' },
                { v: 'A+', l: 'Health' },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-white p-3">
                  <div className="font-mono text-[16px] font-black text-obsidian">{s.v}</div>
                  <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-text-muted">{s.l}</div>
                </div>
              ))}
            </div>

            {/* mini chart */}
            <div className="mt-4 rounded-xl border border-border bg-white p-4">
              <div className="mb-3 h-3 w-24 rounded bg-slate-200" />
              <div className="flex h-24 items-end gap-2">
                {[42, 66, 54, 78, 60, 88, 72, 94].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: 'linear-gradient(180deg, #60A5FA, #1A3FD8)' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HouseAdvantage() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-24 sm:py-28">
      {/* very subtle texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.5]" style={{ backgroundImage: 'radial-gradient(circle, #E2E8F0 1px, transparent 1px)', backgroundSize: '46px 46px', maskImage: 'radial-gradient(120% 80% at 80% 0%, black, transparent 70%)', WebkitMaskImage: 'radial-gradient(120% 80% at 80% 0%, black, transparent 70%)' }} />

      <div className={cn(siteContainerClass, 'relative')}>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">The Auralogics approach</span>
            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-obsidian sm:text-[52px]">
              One platform.{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(120deg, #1A3FD8, #7C3AED)' }}>
                Not a pile of plugins.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-text-secondary">
              Most sites are stitched together from tools by different makers that never talk to each other. We
              build the opposite: one connected platform, designed as a whole, so every part works better for
              being part of it.
            </p>

            <ul className="mt-8 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] font-medium text-obsidian/80">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Check className="h-3 w-3 text-brand" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href="/products"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-brand-bright"
            >
              See what we build
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Product preview */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductPreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
