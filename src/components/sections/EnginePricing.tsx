"use client";
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';

import { motion } from "motion/react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const WP_ORG_URL = "https://wordpress.org/plugins/nexora-engine";
const CHECKOUT_URL = "https://checkout.freemius.com/plugin/29612/plan/48706/";

const freeFeatures = [
  "Static HTML delivery (SSG) + drop-in cache",
  "SPA navigation between static pages",
  "Ghost Protocol core fingerprint hiding",
  "Elementor & Gutenberg compatible",
  "Delivery diagnostics dashboard",
  "Cache-hit tracking & basic analytics",
  "Security hardening (enum, XML-RPC, rate limit)",
];

const proFeatures = [
  "Everything in Free",
  "Advanced Ghost Protocol full cloaking",
  "Auto-rebuild on publish & update",
  "Core Web Vitals tracking (LCP / INP / CLS)",
  "SEO intelligence & on-page scoring",
  "Redirect manager + edge CDN purge",
  "White-label admin & multisite fleet",
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function EnginePricing() {
  return (
    <section id="pricing" className="bg-surface py-32 border-y border-border relative overflow-hidden">
      {/* Ambient brand glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand/5 blur-[200px] rounded-full pointer-events-none" />

      <div className={cn(siteContainerClass, "relative z-10")}>
        {/* Header */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[12px] font-bold uppercase tracking-wider rounded-full mb-6">
            Pricing
          </span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] mb-6">
            Start free. Scale when you&apos;re ready.
          </h2>
          <p className="mx-auto max-w-[640px] text-[18px] text-text-secondary leading-[1.6]">
            The free tier is genuinely free: full static delivery and core Ghost
            Protocol, live on the WordPress.org directory. Upgrade to Pro for
            advanced cloaking, automatic rebuilds, and agency features.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-stretch max-w-[880px] mx-auto">
          {/* FREE */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[32px] bg-white border border-border p-10 flex flex-col shadow-[0_20px_50px_rgba(2,6,23,0.05)]"
          >
            <div className="mb-8">
              <h3 className="text-[24px] font-bold text-obsidian tracking-tight">Free</h3>
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-brand mt-1">Nexora Engine</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[16px] font-bold text-text-muted">$</span>
                <span className="text-[56px] font-extrabold text-obsidian tracking-tighter leading-none">0</span>
                <span className="text-[16px] font-bold text-text-muted">/forever</span>
              </div>
              <p className="mt-2 text-[13px] font-semibold text-text-muted">No card. No time limit. No stripped demo.</p>
            </div>

            <ul className="space-y-3.5 mb-10 flex-1">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-brand/5 text-brand flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[14px] font-semibold text-text-secondary leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={WP_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full font-extrabold text-[15px] flex items-center justify-center gap-2.5 bg-surface-soft text-obsidian border border-border hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              Get It Free on WordPress.org
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* PRO */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[32px] bg-obsidian border border-brand/25 p-10 flex flex-col overflow-hidden shadow-[0_40px_90px_rgba(26,63,216,0.22)] md:-translate-y-3"
          >
            {/* Atmospheric orbs */}
            <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-brand/20 blur-[110px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-[200px] h-[200px] bg-brand-soft/10 blur-[90px] rounded-full pointer-events-none" />

            {/* Trial badge */}
            <div className="absolute top-8 right-8 flex items-center gap-1.5 bg-brand/15 border border-brand/30 px-3.5 py-1.5 rounded-full">
              <Sparkles size={12} className="text-brand-soft" />
              <span className="text-[9px] font-extrabold text-brand-soft uppercase tracking-[0.15em]">14-Day Free Trial</span>
            </div>

            <div className="relative z-10 mb-8">
              <h3 className="text-[24px] font-bold text-white tracking-tight">Pro</h3>
              <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-brand-soft mt-1">Nexora Engine Pro</p>
            </div>

            <div className="relative z-10 mb-8">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[16px] font-bold text-white/40">$</span>
                <span className="text-[56px] font-extrabold text-white tracking-tighter leading-none">49</span>
                <span className="text-[16px] font-bold text-white/40">/year</span>
              </div>
              <p className="mt-2 text-[13px] font-bold text-white/60">
                or <span className="text-brand-soft">$149</span> one-time lifetime license
              </p>
            </div>

            <ul className="relative z-10 space-y-3.5 mb-10 flex-1">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-brand/25 text-brand-soft flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[14px] font-semibold text-white/80 leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full py-4 rounded-full font-extrabold text-[15px] flex items-center justify-center gap-2.5 bg-brand text-white hover:bg-brand-bright shadow-[0_0_32px_rgba(26,63,216,0.4)] transition-all duration-300 group"
            >
              Start 14-Day Free Trial
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Reassurance line */}
        <motion.p
          {...reveal}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-[14px] font-semibold text-text-muted mt-12"
        >
          14-day Pro trial requires no credit card. Cancel anytime. Free version stays free.
        </motion.p>
      </div>
    </section>
  );
}
