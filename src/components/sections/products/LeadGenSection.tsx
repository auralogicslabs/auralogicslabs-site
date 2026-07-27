'use client';

import { motion } from 'motion/react';
import { Mail, Bell, Sparkles } from 'lucide-react';
import { LeadCaptureForm } from '@/components/marketing/LeadCaptureForm';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/lib/utils';

const perks = [
  { icon: Bell, label: 'Release notes the day they ship' },
  { icon: Sparkles, label: 'Early access to new Pro features' },
  { icon: Mail, label: 'Practical WordPress performance tips' },
];

/** HubSpot-style inline lead capture for the products hub. */
export function LeadGenSection() {
  return (
    <section className="bg-obsidian py-20 text-white">
      <div className={siteContainerClass}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-panel border border-white/10 bg-white/[0.03] p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -top-24 right-0 h-[360px] w-[440px] rounded-full blur-[160px]" style={{ background: 'rgba(26,63,216,0.22)' }} />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            {/* Copy */}
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.3em] text-brand-soft">
                <Bell className="h-4 w-4" /> Stay in the loop
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">
                Get product updates &amp; early access.
              </h2>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/60">
                Join the list for release notes, WordPress performance tips, and first access to new Pro
                features across the Nexora suite.
              </p>
              <ul className="mt-6 space-y-2.5">
                {perks.map((p) => {
                  const Icon = p.icon;
                  return (
                    <li key={p.label} className="flex items-center gap-2.5 text-[14px] text-white/70">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/[0.06]">
                        <Icon className="h-3.5 w-3.5 text-brand-soft" />
                      </span>
                      {p.label}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Form */}
            <div className={cn('rounded-card border border-white/10 bg-white/[0.02] p-6 sm:p-8')}>
              <p className="mb-4 text-[13px] font-bold uppercase tracking-wide text-white/40">Subscribe free</p>
              <LeadCaptureForm source="products-page" variant="dark" cta="Subscribe" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
