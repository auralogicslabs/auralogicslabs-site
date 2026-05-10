"use client";

import {
  Zap,
  Eye,
  Navigation,
  MousePointer,
  RefreshCw,
  Activity,
  ShieldCheck,
  Puzzle,
  AlertTriangle,
  Layers,
  FileText,
  Code,
  Globe,
  CheckCircle2,
  Settings,
  BarChart3,
} from 'lucide-react';
import { motion } from 'motion/react';

export function FeaturesGridSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Static Delivery',
      description: 'Sub-50ms response times with browser-cached static files.',
    },
    {
      icon: Eye,
      title: 'Ghost Protocol',
      description: 'Complete WordPress fingerprint hiding and stealth security.',
    },
    {
      icon: Navigation,
      title: 'SPA Navigation',
      description: 'Instant page transitions with client-side routing.',
    },
    {
      icon: MousePointer,
      title: 'One Click Setup',
      description: 'Toggle activation with zero configuration required.',
    },
    {
      icon: RefreshCw,
      title: 'Smart Regeneration',
      description: 'Intelligent snapshot updates only when content changes.',
    },
    {
      icon: Activity,
      title: 'Live Diagnostics',
      description: 'Real-time monitoring and performance insights.',
    },
    {
      icon: ShieldCheck,
      title: 'Stealth Security Layer',
      description: 'Enterprise-grade protection without exposing infrastructure.',
    },
    {
      icon: Puzzle,
      title: 'Universal Compatibility',
      description: 'Works with any hosting provider and server configuration.',
    },
    {
      icon: AlertTriangle,
      title: 'Conflict Detection',
      description: 'Automatic identification of plugin incompatibilities.',
    },
    {
      icon: Layers,
      title: 'Elementor Compatibility',
      description: 'Full support for Elementor page builder workflows.',
    },
    {
      icon: FileText,
      title: 'Gutenberg Support',
      description: 'Native WordPress block editor integration.',
    },
    {
      icon: Code,
      title: 'API-first Architecture',
      description: 'Modern REST and GraphQL ready infrastructure.',
    },
    {
      icon: Globe,
      title: 'Edge-ready Delivery',
      description: 'Optimized for CDN and edge network distribution.',
    },
    {
      icon: CheckCircle2,
      title: 'Asset Validation',
      description: 'Automatic verification of static resources.',
    },
    {
      icon: Settings,
      title: 'Delivery Modes',
      description: 'Flexible static, hybrid, and dynamic rendering options.',
    },
    {
      icon: BarChart3,
      title: 'Infrastructure Monitoring',
      description: 'Comprehensive observability and performance tracking.',
    },
  ];

  return (
    <section id="features" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] lg:text-5xl">
            Enterprise Features
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            Complete infrastructure platform built for modern WordPress delivery.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                className="group rounded-xl border border-[#E2E8F0] bg-white p-6 hover:border-[#1A3FD8] hover:bg-[#F8FAFC] hover:shadow-md transition-all"
              >
                <Icon size={24} className="text-[#1A3FD8] group-hover:scale-110 transition-transform" />
                <h3 className="mt-4 font-semibold text-[#0F172A]">{feature.title}</h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
