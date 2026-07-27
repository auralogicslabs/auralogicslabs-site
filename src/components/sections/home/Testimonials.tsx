'use client';
import { siteContainerClass } from '@/lib/site-layout';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

/**
 * PLACEHOLDER testimonials, replace `items` with real customer reviews before
 * launch (and remove "(placeholder)" from the eyebrow). Names/roles below are
 * intentionally generic so nothing reads as a real endorsement until you fill it.
 */
const items = [
  {
    quote:
      'Add a real customer quote here, what changed for them after installing the plugin, in their own words.',
    name: 'Reviewer name',
    role: 'Role · Company',
    initials: 'RN',
  },
  {
    quote:
      'A second short, specific testimonial works best, a concrete result or the moment it clicked for them.',
    name: 'Reviewer name',
    role: 'Role · Company',
    initials: 'RN',
  },
  {
    quote:
      'Keep quotes to 1–2 sentences so the wall of social proof stays scannable and punchy.',
    name: 'Reviewer name',
    role: 'Role · Company',
    initials: 'RN',
  },
];

export function Testimonials() {
  return (
    <section className="bg-bg py-24">
      <div className={siteContainerClass}>
        <div className="text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">
            Testimonials (placeholder)
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-obsidian">
            Loved by WordPress builders
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col rounded-card border border-border bg-bg p-6 shadow-card"
            >
              <div className="flex gap-0.5 text-amber">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-text-secondary">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-soft text-[13px] font-bold text-text-muted">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-[14px] font-bold text-obsidian">{t.name}</span>
                  <span className="block text-[12px] text-text-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
