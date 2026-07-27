'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { getAllProducts } from '@/data/products';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';
import { ScreenshotFrame } from '@/components/marketing/ScreenshotFrame';

// Only the shipping products, shown with their real admin UI.
const products = getAllProducts().filter((p) => p.releases.length > 0);

export function SuiteShowcase() {
  return (
    <section className="bg-bg py-24 sm:py-28">
      <div className={siteContainerClass}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">The suite</span>
          <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-obsidian sm:text-[50px]">
            Focused tools that are genuinely nice to use.
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-text-secondary">
            We are new, but our plugins are not toys. Each one solves a real, specific problem and is built to
            be a pleasure to use day to day. Here is what each one actually does.
          </p>
        </motion.div>

        {/* Alternating product rows */}
        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {products.map((p, i) => {
            const Icon = p.icon;
            const flip = i % 2 === 1;
            const points = (p.keyBenefits ?? []).slice(0, 3).map((b) => b.title);
            return (
              <div key={p.slug} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Copy */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className={cn(flip && 'lg:order-2')}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${p.accent}14`, border: `1.5px solid ${p.accent}2e` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: p.accent }} />
                    </span>
                    <span className="text-[12px] font-black uppercase tracking-[0.2em]" style={{ color: p.accent }}>
                      {p.category}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[28px] font-black tracking-tight text-obsidian sm:text-[34px]">{p.name}</h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-text-secondary">{p.tagline}</p>
                  <ul className="mt-6 space-y-3">
                    {points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-[15px] font-medium text-obsidian/80">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{ background: `${p.accent}18` }}>
                          <Check className="h-3 w-3" style={{ color: p.accent }} strokeWidth={3} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${p.slug}`}
                    className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
                    style={{ background: p.accent }}
                  >
                    Explore {p.name}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                {/* Screenshot */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={cn(flip && 'lg:order-1')}
                >
                  <ScreenshotFrame src={`/screenshots/${p.slug}.png`} alt={`${p.name} dashboard`} accent={p.accent} label={p.name} icon={p.icon} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
