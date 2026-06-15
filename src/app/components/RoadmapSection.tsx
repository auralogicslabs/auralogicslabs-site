"use client";

import { Cloud, Shield, BarChart3, Activity, Brain, Lock, Gauge, Network } from 'lucide-react';
import { motion } from 'motion/react';

const roadmap = [
  {
    quarter: 'Q3 2026',
    label: 'Coming next',
    accent: 'bg-[#1A3FD8]',
    textAccent: 'text-[#1A3FD8]',
    borderAccent: 'border-[#1A3FD8]',
    items: [
      {
        icon: Cloud,
        title: 'Nexora Cloud',
        description:
          'Managed infrastructure delivery platform with a global edge network. zero self-hosting required.',
      },
      {
        icon: Shield,
        title: 'Nexora Shield',
        description:
          'Advanced WAF integration, DDoS protection, and enterprise-grade threat intelligence layer.',
      },
    ],
  },
  {
    quarter: 'Q4 2026',
    label: 'In design',
    accent: 'bg-slate-400',
    textAccent: 'text-slate-600',
    borderAccent: 'border-slate-300',
    items: [
      {
        icon: BarChart3,
        title: 'Nexora Analytics',
        description:
          'Real-time performance analytics, visitor insights, and delivery intelligence dashboard.',
      },
      {
        icon: Activity,
        title: 'Infrastructure Monitoring',
        description:
          'Enterprise observability with configurable alerts, full access logs, and performance trend tracking.',
      },
    ],
  },
  {
    quarter: '2027',
    label: 'On the horizon',
    accent: 'bg-slate-200',
    textAccent: 'text-slate-500',
    borderAccent: 'border-slate-200',
    items: [
      {
        icon: Brain,
        title: 'AI Intelligence Layer',
        description: 'ML-powered predictive caching, auto-optimization, and anomaly detection.',
      },
      {
        icon: Lock,
        title: 'Enterprise Security',
        description: 'SOC 2 compliance, audit logging, role-based access, and advanced SSO support.',
      },
      {
        icon: Gauge,
        title: 'Observability Platform',
        description: 'Custom metrics, real-time dashboards, and infrastructure-wide telemetry.',
      },
      {
        icon: Network,
        title: 'Multisite Intelligence',
        description: 'Centralized management and cross-site performance intelligence for WordPress multisite.',
      },
    ],
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Roadmap
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            The Future of Modern
            <br />
            WordPress Infrastructure
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Our vision for what Nexora Engine becomes. beyond the plugin.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 space-y-0">
          {roadmap.map((phase, phaseIndex) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: phaseIndex * 0.1 }}
              className="relative grid gap-8 pb-14 lg:grid-cols-[200px_1fr]"
            >
              {/* Timeline spine */}
              {phaseIndex < roadmap.length - 1 && (
                <div className="absolute left-[11px] top-8 hidden h-full w-px bg-slate-100 lg:left-[99px] lg:block" />
              )}

              {/* Quarter label */}
              <div className="flex items-start gap-4 lg:flex-col lg:gap-3">
                <div className={`mt-1 h-3 w-3 flex-shrink-0 rounded-full ${phase.accent} ring-4 ring-white`} />
                <div>
                  <p className={`text-sm font-bold ${phase.textAccent}`}>
                    {phase.quarter}
                  </p>
                  <p className="text-xs text-slate-400">{phase.label}</p>
                </div>
              </div>

              {/* Items */}
              <div className="grid gap-4 sm:grid-cols-2">
                {phase.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: phaseIndex * 0.08 + i * 0.06 }}
                      className={`rounded-xl border bg-white p-6 transition-all hover:shadow-md ${phase.borderAccent}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50">
                          <Icon size={18} className={phase.textAccent} />
                        </div>
                        <h3 className="font-semibold text-slate-950">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-center"
        >
          <p className="text-sm text-slate-400">
            Enterprise plans and early access partnerships coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
