'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { DraftingCompass, BookOpen, Zap, Check } from 'lucide-react';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';

const ACCENT = '#7C3AED';

export function ArchitectHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-soft/40 pt-32 pb-20">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full blur-[170px]"
        style={{ background: 'rgba(124,58,237,0.14)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(circle, #CBD5E1 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage: 'radial-gradient(circle at 30% 0%, black, transparent 70%)',
        }}
      />

      <div className={cn(siteContainerClass, "relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2")}>
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-lg"
              style={{ background: `${ACCENT}14`, border: `1.5px solid ${ACCENT}30` }}
            >
              <DraftingCompass className="h-5 w-5" style={{ color: ACCENT }} />
            </div>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
              style={{ color: ACCENT, background: `${ACCENT}10`, borderColor: `${ACCENT}30` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              Beta · v0.10.0
            </span>
          </div>

          <h1 className="mt-7 text-[44px] font-black leading-[1.02] tracking-[-0.03em] text-obsidian sm:text-[56px]">
            Design visually.{' '}
            <span style={{ color: ACCENT }}>Publish production-grade.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-text-secondary">
            Nexora Architect is an intelligent visual website operating system with a
            compile-on-publish architecture. Build in a modern editor, Architect compiles your
            pages to clean HTML and CSS with zero runtime frontend.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Architect has no public release yet, so the CTA collects interest
                rather than linking a download that does not exist. */}
            <Link
              href="/contact?product=nexora-architect"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: ACCENT }}
            >
              <DraftingCompass className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
              Request Beta Access
            </Link>
            <Link
              href="/docs/nexora-architect"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-6 py-3 text-[15px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
            >
              <BookOpen className="h-4 w-4" />
              Documentation
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-2.5 text-[13px] font-semibold text-text-secondary">
            {['Zero runtime frontend', 'Schema-driven', 'Engine-ready'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4" style={{ color: ACCENT }} />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visual: editor → compiled output */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-panel border border-border bg-bg shadow-float">
            {/* Window chrome */}
            <div className="flex items-center gap-2 border-b border-border bg-surface-soft/70 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
              <span className="ml-3 text-[12px] font-semibold text-text-muted">Architect, Home</span>
            </div>
            <div className="grid grid-cols-[1fr_1.1fr]">
              {/* Schema / layers */}
              <div className="border-r border-border p-4">
                <div className="text-[10px] font-black uppercase tracking-wider text-text-muted">Layers</div>
                <div className="mt-3 space-y-2">
                  {['Section · Hero', 'Heading H1', 'Paragraph', 'Button · CTA', 'Section · Features'].map((l, i) => (
                    <motion.div
                      key={l}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-2 rounded-md px-2.5 py-2 text-[11px] font-semibold text-text-secondary"
                      style={{ background: i === 0 ? `${ACCENT}10` : 'transparent', border: `1px solid ${i === 0 ? `${ACCENT}25` : 'transparent'}` }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                      {l}
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Compiled output */}
              <div className="bg-[#0b1020] p-4 font-mono text-[10.5px] leading-relaxed text-white/55">
                <div className="mb-2 flex items-center justify-between text-[9px] uppercase tracking-widest text-white/30">
                  <span>Compiled output</span>
                  <span className="font-bold text-emerald-400">0 KB JS</span>
                </div>
                <div className="space-y-0.5">
                  <div><span className="text-white/30">&lt;section</span> <span style={{ color: '#A78BFA' }}>class</span>=<span className="text-emerald-300">&quot;hero&quot;</span><span className="text-white/30">&gt;</span></div>
                  <div className="pl-3"><span className="text-white/30">&lt;h1&gt;</span>Design visually<span className="text-white/30">&lt;/h1&gt;</span></div>
                  <div className="pl-3"><span className="text-white/30">&lt;a</span> <span style={{ color: '#A78BFA' }}>class</span>=<span className="text-emerald-300">&quot;btn&quot;</span><span className="text-white/30">&gt;</span>Get started<span className="text-white/30">&lt;/a&gt;</span></div>
                  <div><span className="text-white/30">&lt;/section&gt;</span></div>
                  <div className="mt-2 border-t border-white/5 pt-2 text-[9px] text-white/30">critical.css · 3.1 KB inlined</div>
                </div>
              </div>
            </div>
            {/* Compile bar */}
            <div className="flex items-center justify-between border-t border-border bg-surface-soft/70 px-4 py-3">
              <span className="flex items-center gap-2 text-[12px] font-bold text-obsidian">
                <Zap className="h-3.5 w-3.5" style={{ color: ACCENT }} />
                Compile on publish
              </span>
              <span className="font-mono text-[11px] font-bold text-emerald-600">✓ built in 0.21s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
