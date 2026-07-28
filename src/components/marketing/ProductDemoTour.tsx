"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { siteContainerClass } from "@/lib/site-layout";
import { cn } from "@/app/components/ui/utils";

export type DemoStep = {
  /** Short tab label, e.g. "Dashboard". */
  label: string;
  /** Headline shown beside/above the screenshot. */
  title: string;
  /** One or two sentences describing what this screen does. */
  description: string;
  /** Path under /public, e.g. /screenshots/docs/nexora-pulse/screenshot-1.png */
  image: string;
  alt: string;
};

export type ProductDemoTourProps = {
  productName: string;
  /** Hex accent used for the active tab, glow, and progress. */
  accent: string;
  eyebrow?: string;
  headline: string;
  subhead: string;
  steps: DemoStep[];
  /** Primary CTA (e.g. wp.org). */
  primaryCta: { label: string; href: string; external?: boolean };
  /** Secondary CTA (e.g. docs). */
  secondaryCta?: { label: string; href: string };
};

export function ProductDemoTour({
  productName,
  accent,
  eyebrow = "Interactive Tour",
  headline,
  subhead,
  steps,
  primaryCta,
  secondaryCta,
}: ProductDemoTourProps) {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="pt-36 pb-28 bg-bg">
      <div className={siteContainerClass}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div
            className="mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
            style={{ background: `${accent}12`, border: `1px solid ${accent}2e` }}
          >
            <Play size={13} style={{ color: accent }} />
            <span className="text-[10px] font-black uppercase tracking-[0.28em]" style={{ color: accent }}>
              {eyebrow}
            </span>
          </div>
          <h1 className="text-[40px] md:text-[60px] font-extrabold tracking-[-0.04em] leading-[1.03] text-obsidian">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-text-secondary font-medium">
            {subhead}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full px-4 py-2 text-[13px] font-bold transition-all duration-200",
                  isActive
                    ? "text-white shadow-sm"
                    : "text-text-secondary bg-white border border-border hover:border-brand/40 hover:text-obsidian"
                )}
                style={isActive ? { background: accent } : undefined}
              >
                <span className="mr-1.5 font-mono text-[11px] opacity-60">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Stage */}
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Screenshot in browser chrome */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Ambient accent glow */}
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] opacity-60 blur-[80px]"
                style={{ background: `${accent}1f` }}
              />
              <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_40px_90px_rgba(2,6,23,0.14)]">
                {/* Window chrome */}
                <div className="flex items-center gap-2 border-b border-border bg-surface-soft/70 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                  <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                  <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                  <div className="ml-3 hidden flex-1 sm:block">
                    <div className="mx-auto max-w-[280px] rounded-md bg-white/70 px-3 py-1 text-center text-[11px] font-semibold text-text-muted">
                      wp-admin / {productName.toLowerCase().replace(/\s+/g, "-")}
                    </div>
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={step.image}
                    src={step.image}
                    alt={step.alt}
                    loading="eager"
                    initial={{ opacity: 0, scale: 0.995 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="block w-full"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Caption panel */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: accent }}>
                  {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-[26px] font-extrabold tracking-tight text-obsidian leading-[1.15]">
                  {step.title}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-text-secondary font-medium">
                  {step.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Prev / next */}
            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActive((i) => (i - 1 + steps.length) % steps.length)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-obsidian transition-colors hover:border-brand/40"
                aria-label="Previous screen"
              >
                <ArrowRight size={18} className="rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => setActive((i) => (i + 1) % steps.length)}
                className="inline-flex h-11 items-center gap-2 rounded-full px-5 text-[14px] font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: accent }}
              >
                Next screen
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA band */}
        <div className="mt-20 overflow-hidden rounded-[32px] border border-border bg-obsidian p-10 md:p-12">
          <div className="relative flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
            <div
              className="pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full blur-[90px]"
              style={{ background: `${accent}40` }}
            />
            <div className="relative z-10">
              <h3 className="text-[24px] font-extrabold tracking-tight text-white">
                Ready to try {productName} on your own site?
              </h3>
              <p className="mt-2 text-[15px] font-medium text-white/50">
                Everything you just saw runs inside your WordPress admin. No sandbox account needed.
              </p>
            </div>
            <div className="relative z-10 flex flex-shrink-0 flex-wrap justify-center gap-3">
              <Link
                href={primaryCta.href}
                {...(primaryCta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                style={{ background: accent }}
              >
                {primaryCta.label}
                <ArrowRight size={17} />
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
