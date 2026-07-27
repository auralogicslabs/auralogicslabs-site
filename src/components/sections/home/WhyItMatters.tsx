'use client';
import { siteContainerClass } from '@/lib/site-layout';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Suite-level proof points. These reflect real capabilities, adjust copy as the
// suite evolves. (Swap in audited numbers when you have them.)
const stats = [
  { v: '22ms', l: 'TTFB on any host with Nexora Engine' },
  { v: '0', l: 'DB queries on a cache hit' },
  { v: 'Free', l: 'GPL core, upgrade only when you need Pro' },
  { v: '5 min', l: 'From install to your first static page' },
];

export function WhyItMatters() {
  return (
    <section className="bg-bg py-24">
      <div className={siteContainerClass}>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-4xl sm:text-5xl font-black tracking-tight text-obsidian"
        >
          Why it matters now.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-2 gap-y-10 rounded-panel border border-border bg-bg p-10 shadow-elevated sm:gap-y-0 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`px-4 text-center ${i > 0 ? 'lg:border-l lg:border-border' : ''}`}
            >
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-obsidian">{s.v}</div>
              <p className="mx-auto mt-2 max-w-[180px] text-[13px] leading-snug text-text-secondary">{s.l}</p>
            </div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-brand-bright"
          >
            Explore the products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
