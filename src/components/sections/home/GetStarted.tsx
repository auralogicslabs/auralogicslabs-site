'use client';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Download, Upload, Rocket, Crown, ArrowUpRight } from 'lucide-react';

// The single-plugin journey: one package, free first, Pro unlocks in place.
const steps = [
  { n: '01', icon: Download, title: 'Download', body: 'Grab the free plugin from the download center, no account required.' },
  { n: '02', icon: Upload, title: 'Install', body: 'Upload and activate in WordPress like any plugin. Drop-in, no rebuild.' },
  { n: '03', icon: Rocket, title: 'Use free features', body: 'Everything in the free tier works immediately, on any host.' },
  { n: '04', icon: Crown, title: 'Upgrade to Pro', body: 'Turn on Pro in place via secure checkout. One plugin, no second package.' },
];

export function GetStarted() {
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      {/* Branded background: dot grid + soft brand glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(circle at 50% 8%, black, transparent 78%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 8%, black, transparent 78%)',
        }}
      />
      <div
        className="pointer-events-none absolute -top-20 right-[-60px] h-[440px] w-[440px] rounded-full blur-[150px]"
        style={{ background: 'rgba(26,63,216,0.10)' }}
      />
      <div className={cn(siteContainerClass, "relative")}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          {/* Left intro */}
          <div>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">How it works</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black leading-[1.05] tracking-tight text-obsidian">
              Get started in minutes.
            </h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-text-secondary">
              One plugin architecture, never separate free and pro packages. Start free, upgrade in place
              only when you need more.
            </p>
            <Link
              href="/downloads"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-brand-bright"
            >
              <Download className="h-4 w-4" />
              Download free
            </Link>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-card border border-border bg-bg p-6 shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-tint">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <span className="font-mono text-[22px] font-black text-border-strong">{s.n}</span>
                  </div>
                  <h3 className="mt-4 text-[16px] font-bold text-obsidian">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-text-secondary">{s.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/support"
            className="inline-flex items-center gap-1.5 text-[14px] font-bold text-brand hover:text-obsidian"
          >
            Questions? Visit support
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
