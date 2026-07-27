'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ShieldHalf, ArrowRight, Bell, Check, Flame, ScanLine, Lock } from 'lucide-react';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';

const ACCENT = '#DC2626';

export function ShieldHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#0a0a12] pt-32 pb-20 text-white">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/4 h-[520px] w-[560px] rounded-full blur-[180px]"
        style={{ background: 'rgba(220,38,38,0.22)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
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
              style={{ background: `${ACCENT}22`, border: `1.5px solid ${ACCENT}45` }}
            >
              <ShieldHalf className="h-5 w-5" style={{ color: '#FCA5A5' }} />
            </div>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
              style={{ color: '#FCA5A5', background: `${ACCENT}18`, borderColor: `${ACCENT}40` }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#FCA5A5' }} />
              Launching soon
            </span>
          </div>

          <h1 className="mt-7 text-[44px] font-black leading-[1.02] tracking-[-0.03em] sm:text-[56px]">
            Security by Design <span style={{ color: '#FCA5A5' }}>for WordPress.</span>
          </h1>
          <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-white/65">
            Nexora Shield is a complete WordPress security, firewall and compliance platform, for
            classic WordPress, headless sites, Nexora Engine and enterprise compliance. Block attacks,
            scan for threats, harden everything, and prove it with a live security score.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: ACCENT }}
            >
              <Bell className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
              Notify me at launch
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Explore the suite
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-2.5 text-[13px] font-semibold text-white/65">
            {['Firewall + WAF', 'Malware & vulnerability scan', 'Headless-aware'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <Check className="h-4 w-4" style={{ color: '#FCA5A5' }} />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visual: security score panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-panel border border-white/10 bg-white/[0.03] p-6 shadow-float backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/40">Security score</span>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-400">
                Protected
              </span>
            </div>

            {/* Score gauge */}
            <div className="mt-5 flex items-center gap-5">
              <div className="relative h-28 w-28 flex-shrink-0">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                  <motion.circle
                    cx="60" cy="60" r="52" fill="none" stroke="#34D399" strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - 0.94) }}
                    transition={{ duration: 1.1, delay: 0.4, ease: 'easeOut' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-mono text-[28px] font-black">94</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">/ 100</span>
                </div>
              </div>
              <div className="flex-1 space-y-2.5">
                {[
                  { icon: Flame, label: 'Firewall blocking', value: '1,284 today', color: '#FCA5A5' },
                  { icon: Lock, label: 'Brute-force stopped', value: '37 attempts', color: '#FCD34D' },
                  { icon: ScanLine, label: 'Last malware scan', value: 'Clean', color: '#34D399' },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
                    <span className="flex items-center gap-2 text-[11px] font-semibold text-white/60">
                      <r.icon className="h-3.5 w-3.5" style={{ color: r.color }} />
                      {r.label}
                    </span>
                    <span className="font-mono text-[11px] font-bold" style={{ color: r.color }}>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                { v: 'WAF', l: 'Active' },
                { v: '2FA', l: 'Enforced' },
                { v: 'Audit', l: 'Logging' },
              ].map((m) => (
                <div key={m.v} className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 text-center">
                  <div className="text-[13px] font-black text-white">{m.v}</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-white/35">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
