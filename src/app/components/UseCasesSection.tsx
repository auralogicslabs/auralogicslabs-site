"use client";

import { useState } from 'react';
import { Users, Building2, FileText, Code, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const useCases = [
  {
    id: 'agencies',
    icon: Users,
    title: 'Agencies',
    tagline: 'Modern delivery without rebuilding client workflows.',
    description:
      'Deliver enterprise-grade static performance to every client without hiring React specialists, configuring build pipelines, or migrating away from WordPress. Your team keeps working the way it always has.',
    benefits: [
      { label: 'Keep existing WordPress workflows', note: 'No new CMS, no new training' },
      { label: 'Enterprise performance out of the box', note: '22ms TTFB on any shared host' },
      { label: 'No React developers needed', note: 'Zero frontend rebuild required' },
      { label: 'Scalable across client accounts', note: 'One plugin, unlimited sites' },
    ],
    stat: { value: '10×', label: 'faster than standard WP hosting' },
  },
  {
    id: 'enterprises',
    icon: Building2,
    title: 'Enterprises',
    tagline: 'Secure infrastructure modernization at zero risk.',
    description:
      'Eliminate WordPress fingerprint exposure across all public endpoints while maintaining compliance requirements, existing editorial workflows, and zero-downtime operation. No migration, no risk.',
    benefits: [
      { label: 'Enterprise-grade security by default', note: 'Ghost Protocol on every response' },
      { label: 'Maintain compliance requirements', note: 'No data leaves WordPress' },
      { label: 'Zero downtime migration path', note: 'Toggle on/off without disruption' },
      { label: 'Reduce infrastructure costs', note: 'Fewer PHP processes = lower server load' },
    ],
    stat: { value: '0', label: 'WordPress fingerprints exposed' },
  },
  {
    id: 'publishers',
    icon: FileText,
    title: 'Publishers',
    tagline: 'Handle traffic spikes without expensive hosting.',
    description:
      'Static delivery means traffic spikes no longer translate to server overload. Your editorial team keeps their familiar Gutenberg or Elementor workflow — readers get consistent sub-second load times.',
    benefits: [
      { label: 'Handle traffic spikes effortlessly', note: 'Static files scale without extra servers' },
      { label: 'Dramatically lower hosting costs', note: 'No PHP workers burning under load' },
      { label: 'Improve SEO with Core Web Vitals', note: 'LCP 1.2s, CLS 0.02 — both Google green' },
      { label: 'Maintain editorial workflows', note: 'Publish → live in seconds, as always' },
    ],
    stat: { value: '−68%', label: 'improvement in LCP score' },
  },
  {
    id: 'developers',
    icon: Code,
    title: 'Developers',
    tagline: 'Headless-grade architecture, zero DevOps overhead.',
    description:
      'Get the delivery performance of a fully decoupled headless setup — REST masking, static HTML, CDN-ready headers — without maintaining build pipelines, Node servers, or separate frontend deployments.',
    benefits: [
      { label: 'Modern API-first architecture', note: 'REST, GraphQL, and WP hooks all supported' },
      { label: 'No complex build pipelines', note: 'No npm, no CI/CD for content updates' },
      { label: 'Full diagnostic tooling built in', note: 'JSON diagnostics endpoint included' },
      { label: 'Comprehensive hooks and filters', note: 'Extend every layer of the engine' },
    ],
    stat: { value: 'Zero', label: 'frontend infrastructure to maintain' },
  },
];

export function UseCasesSection() {
  const [activeId, setActiveId] = useState('agencies');
  const current = useCases.find((u) => u.id === activeId)!;
  const CurrentIcon = current.icon;

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Who It&apos;s For
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            Built For Every Team
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            From agencies to enterprise infrastructure teams — Nexora Engine
            fits the workflow you already have.
          </p>
        </motion.div>

        {/* Audience tab selector */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {useCases.map((u) => {
            const TabIcon = u.icon;
            const isActive = activeId === u.id;
            return (
              <button
                key={u.id}
                onClick={() => setActiveId(u.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-950 text-white shadow-md shadow-slate-900/10'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <TabIcon size={15} />
                {u.title}
              </button>
            );
          })}
        </div>

        {/* Animated panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:grid lg:grid-cols-[5fr_7fr]"
          >
            {/* Left: context + stat */}
            <div className="bg-[#F8FAFC] p-8 lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm shadow-slate-900/8 border border-slate-100">
                <CurrentIcon size={26} className="text-[#1A3FD8]" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-snug text-slate-950">
                {current.tagline}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{current.description}</p>

              {/* Stat callout */}
              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-3xl font-bold text-[#1A3FD8]">
                  {current.stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{current.stat.label}</p>
              </div>
            </div>

            {/* Right: benefits */}
            <div className="p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Key Benefits
              </p>
              <ul className="mt-6 space-y-5">
                {current.benefits.map((b) => (
                  <li key={b.label} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-[#1A3FD8]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-950">{b.label}</p>
                      <p className="text-sm text-slate-500">{b.note}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A3FD8] hover:gap-2.5 transition-all">
                  Learn how {current.title.toLowerCase()} use Nexora
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
