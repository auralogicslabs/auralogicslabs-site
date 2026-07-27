'use client';
import { siteContainerClass } from '@/lib/site-layout';

import { motion } from 'motion/react';
import { Paintbrush, Cpu, Rocket, ArrowRight } from 'lucide-react';

const ACCENT = '#7C3AED';

const steps = [
  {
    icon: Paintbrush,
    n: '01',
    title: 'Design',
    body: 'Compose pages visually in a modern editor with 30+ widgets, layers, design tokens and AI Assist.',
  },
  {
    icon: Cpu,
    n: '02',
    title: 'Compile',
    body: 'On publish, the Structura Compiler turns your schema into production-grade HTML and inlined critical CSS.',
  },
  {
    icon: Rocket,
    n: '03',
    title: 'Serve',
    body: 'Visitors get a clean, zero-runtime page, and with Nexora Engine it’s served as static HTML.',
  },
];

export function ArchitectFlow() {
  return (
    <section className="py-20 sm:py-24">
      <div className={siteContainerClass}>
        <header className="mb-12 max-w-2xl">
          <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: ACCENT }}>
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-obsidian sm:text-4xl">
            Compile-on-publish, end to end
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">
            The convenience of a visual builder with the output of hand-written code, because the
            builder never reaches your visitors.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-card border border-border bg-bg p-6 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-lg"
                    style={{ background: `${ACCENT}12`, border: `1.5px solid ${ACCENT}25` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: ACCENT }} />
                  </div>
                  <span className="font-mono text-[26px] font-black text-border-strong">{s.n}</span>
                </div>
                <h3 className="mt-4 text-[18px] font-black text-obsidian">{s.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-text-secondary">{s.body}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3.5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-border-strong md:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
