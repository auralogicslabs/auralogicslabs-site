"use client";

import { Gauge, Zap, Cpu, RefreshCw, Server, Navigation, Layers, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export function TrustMetricsSection() {
  const metrics = [
    { icon: Gauge, label: '22ms TTFB', description: 'Lightning-fast delivery' },
    { icon: Zap, label: 'Static Delivery', description: 'Browser-cached speed' },
    { icon: Cpu, label: 'Zero PHP Rendering', description: 'No server processing' },
    { icon: RefreshCw, label: 'Smart Regeneration', description: 'Intelligent updates' },
    { icon: Server, label: 'Any Hosting', description: 'Universal compatibility' },
    { icon: Navigation, label: 'SPA Navigation', description: 'Instant page transitions' },
    { icon: Layers, label: 'Elementor Compatible', description: 'Works with your builder' },
    { icon: Eye, label: 'Ghost Protocol', description: 'Hidden fingerprint' },
  ];

  return (
    <section className="bg-[#F8FAFC] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-xl border border-[#E2E8F0] bg-white p-6 hover:border-[#1A3FD8] hover:shadow-lg transition-all"
              >
                <Icon size={28} className="text-[#1A3FD8] group-hover:scale-110 transition-transform" />
                <h3 className="mt-4 font-semibold text-[#0F172A]">{metric.label}</h3>
                <p className="mt-1 text-sm text-[#64748B]">{metric.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
