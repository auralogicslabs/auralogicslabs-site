"use client";

import { Cloud, Shield, BarChart3, Activity, Brain, Lock, Gauge, Network } from 'lucide-react';
import { motion } from 'motion/react';

export function RoadmapSection() {
  const roadmapItems = [
    {
      icon: Cloud,
      title: 'Nexora Cloud',
      description: 'Managed infrastructure delivery platform with global edge network.',
      status: 'Q3 2026',
    },
    {
      icon: Shield,
      title: 'Nexora Shield',
      description: 'Advanced security layer with DDoS protection and WAF integration.',
      status: 'Q3 2026',
    },
    {
      icon: BarChart3,
      title: 'Nexora Analytics',
      description: 'Real-time performance analytics and visitor insights platform.',
      status: 'Q4 2026',
    },
    {
      icon: Activity,
      title: 'Infrastructure Monitoring',
      description: 'Enterprise observability with alerts, logs, and performance tracking.',
      status: 'Q4 2026',
    },
    {
      icon: Brain,
      title: 'AI Intelligence Layer',
      description: 'Machine learning-powered optimization and predictive caching.',
      status: '2027',
    },
    {
      icon: Lock,
      title: 'Enterprise Security',
      description: 'SOC 2 compliance, audit logging, and advanced access controls.',
      status: '2027',
    },
    {
      icon: Gauge,
      title: 'Observability Platform',
      description: 'Complete infrastructure monitoring with custom metrics and dashboards.',
      status: '2027',
    },
    {
      icon: Network,
      title: 'Multisite Intelligence',
      description: 'Advanced multisite support with centralized management.',
      status: '2027',
    },
  ];

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
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] lg:text-5xl">
            The Future Of Modern WordPress Infrastructure
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            Our vision for the next generation of WordPress infrastructure platforms
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 hover:border-[#1A3FD8] hover:shadow-md transition-all"
              >
                <Icon size={24} className="text-[#1A3FD8]" />
                <h3 className="mt-4 font-semibold text-[#0F172A]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{item.description}</p>
                <div className="mt-4 inline-flex items-center rounded-full bg-[#1A3FD8]/10 px-3 py-1 text-xs font-medium text-[#1A3FD8]">
                  {item.status}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium text-[#475569]">
            Enterprise plans coming soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
