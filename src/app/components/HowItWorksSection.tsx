"use client";

import { motion } from 'motion/react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Visitor Makes a Request',
      description:
        'The browser sends a standard HTTP GET request to your WordPress domain. No JavaScript, no SPA. just a plain request.',
    },
    {
      number: '02',
      title: 'Drop-In Intercepts Before WordPress Boots',
      description:
        'advanced-cache.php fires before plugins, theme, and database load. It resolves the URI to a pre-captured static file in under 1ms.',
    },
    {
      number: '03',
      title: 'Static Snapshot Streamed Directly',
      description:
        'Pre-rendered HTML is sent with ETag, Cache-Control, and Ghost Protocol security headers. WordPress never finishes booting.',
    },
    {
      number: '04',
      title: 'Smart Regeneration on Content Change',
      description:
        'When you publish or update in WordPress, only the changed pages are re-captured. Everything else stays cached and instantly available.',
    },
  ];

  return (
    <section id="architecture" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Architecture
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            From visitor request to static response. the full infrastructure
            flow in four steps.
          </p>
        </motion.div>

        <div className="mt-20 grid divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`group relative bg-white px-8 py-10 hover:bg-slate-50/70 transition-colors lg:px-10 ${
                index < 2 ? 'lg:border-b lg:border-slate-100' : ''
              }`}
            >
              {/* Large faded step number */}
              <span
                aria-hidden="true"
                className="pointer-events-none select-none text-[6rem] font-bold leading-none tracking-tighter text-slate-100 transition-colors group-hover:text-[#1A3FD8]/10"
              >
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{step.description}</p>

              {/* Accent bar on hover */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-[#1A3FD8] opacity-0 transition-opacity group-hover:opacity-100 rounded-r" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
