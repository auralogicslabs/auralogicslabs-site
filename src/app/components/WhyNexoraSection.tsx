"use client";

import { AlertCircle, Code, Server, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyNexoraSection() {
  const problems = [
    {
      icon: Code,
      title: 'Headless Complexity',
      description: 'Full React migrations require complete rebuilds and specialized DevOps teams.',
    },
    {
      icon: Server,
      title: 'PHP Rendering Bottlenecks',
      description: 'Traditional WordPress struggles with performance under real-world traffic.',
    },
    {
      icon: Lock,
      title: 'Exposed Infrastructure',
      description: 'WordPress fingerprints and REST endpoints broadcast vulnerabilities.',
    },
    {
      icon: AlertCircle,
      title: 'Static Export Limitations',
      description: 'Current solutions require constant rebuilds and break dynamic features.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-24 lg:px-8">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#1A3FD8]/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-900/5">
              Why Nexora Engine
            </div>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Keep the WordPress editor and deploy modern delivery.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Replace infrastructure risk with a fast, secure, and familiar WordPress experience that works at enterprise scale.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.08 * index }}
                    className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-[#1A3FD8]">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-slate-950">{problem.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{problem.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.16)]">
              <div className="rounded-[1.75rem] border border-slate-100 bg-slate-950/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Live infrastructure panel</p>
                <div className="mt-6 space-y-4">
                  <div className="rounded-3xl bg-white p-5 shadow-sm shadow-slate-900/5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Editor</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">Classic WordPress</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 shadow-sm shadow-slate-900/5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Performance</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">Static on demand</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 p-5 shadow-sm shadow-slate-900/5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Security</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">Ghost fingerprint</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
