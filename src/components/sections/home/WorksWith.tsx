'use client';
import { siteContainerClass } from '@/lib/site-layout';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// Real compatibilities across the suite. Grouped for the branching layout.
const groups = [
  { label: 'Builders', items: ['Elementor', 'Gutenberg', 'Divi', 'WPBakery', 'Bricks'] },
  { label: 'Servers', items: ['Apache', 'Nginx', 'LiteSpeed', 'IIS'] },
  { label: 'Commerce & CDN', items: ['WooCommerce', 'Cloudflare', 'BunnyCDN', 'WP-CLI'] },
];

export function WorksWith() {
  return (
    <section className="bg-bg py-24">
      <div className={siteContainerClass}>
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-obsidian">Works with your stack</h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-text-secondary">
            They respect the WordPress you already run, and work with every major builder, server and host.
          </p>
        </div>

        {/* Central node */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-bg shadow-card">
            <img src="/nexora.svg" alt="Nexora" className="h-8 w-8" />
          </div>
          <div className="h-8 w-px bg-border" />
        </div>

        {/* Branches */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-card border border-border bg-bg p-6 shadow-card"
            >
              <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-text-muted">{g.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-border bg-surface-soft px-3 py-1.5 text-[13px] font-semibold text-obsidian"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products/nexora-engine#features"
            className="inline-flex items-center gap-1.5 text-[14px] font-bold text-brand hover:text-obsidian"
          >
            See full compatibility
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
