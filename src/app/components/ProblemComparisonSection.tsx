"use client";

import { X, Check, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemComparisonSection() {
  const comparisonData = [
    {
      feature: 'Performance',
      traditional: 'Slow PHP rendering',
      headless: 'Fast but complex',
      nexora: 'Static-speed, simple',
    },
    {
      feature: 'Complexity',
      traditional: 'Simple setup',
      headless: 'High DevOps overhead',
      nexora: 'One-click toggle',
    },
    {
      feature: 'Security',
      traditional: 'Exposed fingerprint',
      headless: 'Decoupled but costly',
      nexora: 'Ghost Protocol built-in',
    },
    {
      feature: 'Rebuild Required',
      traditional: 'None',
      headless: 'Complete frontend',
      nexora: 'None',
    },
    {
      feature: 'Editor Experience',
      traditional: 'Familiar',
      headless: 'API-only, complex',
      nexora: 'Unchanged',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-8">
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Comparison</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            WordPress for modern infrastructure.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            See why Nexora Engine is the fastest, safest, and most practical path for WordPress at enterprise scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl"
        >
          <div className="grid grid-cols-4 gap-px bg-slate-200">
            <div className="bg-slate-50 p-6">
              <p className="font-semibold text-slate-500">Feature</p>
            </div>
            <div className="bg-slate-50 p-6">
              <p className="font-semibold text-slate-500">Traditional WP</p>
            </div>
            <div className="bg-slate-50 p-6">
              <p className="font-semibold text-slate-500">Full Headless</p>
            </div>
            <div className="bg-gradient-to-br from-[#1A3FD8]/10 to-[#60A5FA]/10 p-6">
              <p className="font-semibold text-[#1A3FD8]">Nexora Engine</p>
            </div>
          </div>

          {comparisonData.map((row) => (
            <div key={row.feature} className="grid grid-cols-4 gap-px bg-slate-200">
              <div className="bg-white p-6">
                <p className="font-medium text-slate-950">{row.feature}</p>
              </div>
              <div className="bg-white p-6">
                <p className="text-sm text-slate-600">{row.traditional}</p>
              </div>
              <div className="bg-white p-6">
                <p className="text-sm text-slate-600">{row.headless}</p>
              </div>
              <div className="bg-gradient-to-br from-[#1A3FD8]/10 to-[#60A5FA]/10 p-6">
                <p className="text-sm font-medium text-[#1A3FD8]">{row.nexora}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
