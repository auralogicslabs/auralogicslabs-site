"use client";

import { useState } from 'react';
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
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  { id: 'performance', label: 'Performance' },
  { id: 'security', label: 'Security' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'operations', label: 'Operations' },
];

const features = [
  // Performance
  {
    icon: Zap,
    title: 'Lightning Static Delivery',
    description: 'Sub-50ms response times with browser-cached static HTML files — no PHP on the hot path.',
    category: 'performance',
  },
  {
    icon: Navigation,
    title: 'SPA Navigation',
    description: 'Instant client-side page transitions using prefetched static snapshots.',
    category: 'performance',
  },
  {
    icon: RefreshCw,
    title: 'Smart Regeneration',
    description: 'Only changed pages are re-captured on publish. No full-site rebuilds.',
    category: 'performance',
  },
  {
    icon: Globe,
    title: 'Edge-ready Delivery',
    description: 'Static snapshots are CDN-compatible out of the box for global distribution.',
    category: 'performance',
  },
  {
    icon: Settings,
    title: 'Flexible Delivery Modes',
    description: 'Static, hybrid, and dynamic rendering options — switch without touching your theme.',
    category: 'performance',
  },
  // Security
  {
    icon: Eye,
    title: 'Ghost Protocol',
    description: 'Complete WordPress fingerprint removal from every served response.',
    category: 'security',
  },
  {
    icon: ShieldCheck,
    title: 'Stealth Security Layer',
    description: 'Enterprise-grade protection with sanitized headers, masked REST endpoints, and cloaked paths.',
    category: 'security',
  },
  {
    icon: AlertTriangle,
    title: 'Conflict Detection',
    description: 'Automatic identification of plugin incompatibilities before they cause issues.',
    category: 'security',
  },
  // Ecosystem
  {
    icon: Puzzle,
    title: 'Universal Hosting Support',
    description: 'Works on Apache, Nginx, LiteSpeed, and IIS without any server config changes.',
    category: 'ecosystem',
  },
  {
    icon: Layers,
    title: 'Elementor Compatible',
    description: 'Full support for Elementor Pro, including custom CSS priming before capture.',
    category: 'ecosystem',
  },
  {
    icon: FileText,
    title: 'Gutenberg Support',
    description: 'Native WordPress block editor integration — capture works with any block layout.',
    category: 'ecosystem',
  },
  {
    icon: Code,
    title: 'API-first Architecture',
    description: 'WP REST, GraphQL, and custom hook integrations for developer-driven workflows.',
    category: 'ecosystem',
  },
  // Operations
  {
    icon: MousePointer,
    title: 'One-Click Setup',
    description: 'Toggle SSG from the admin dashboard. Zero config, zero server changes required.',
    category: 'operations',
  },
  {
    icon: Activity,
    title: 'Live Diagnostics',
    description: 'Real-time delivery status, TTFB readings, and capture health shown in the admin.',
    category: 'operations',
  },
  {
    icon: CheckCircle2,
    title: 'Asset Validation',
    description: 'Automatic post-capture verification of all static resources and linked assets.',
    category: 'operations',
  },
  {
    icon: BarChart3,
    title: 'Infrastructure Monitoring',
    description: 'Observability-grade tracking for delivery performance, cache ratios, and errors.',
    category: 'operations',
  },
];

export function FeaturesGridSection() {
  const [activeCategory, setActiveCategory] = useState('performance');

  const filtered = features.filter((f) => f.category === activeCategory);

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
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Capabilities
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            Enterprise Features
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            A complete infrastructure platform built for modern WordPress
            delivery at scale.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#1A3FD8] text-white shadow-md shadow-[#1A3FD8]/25'
                    : 'border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Feature cards — animate on category change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-[#1A3FD8] hover:shadow-md transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF6FF]">
                    <Icon size={20} className="text-[#1A3FD8]" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-950">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Feature count indicator */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400">
            Showing {filtered.length} of {features.length} total capabilities
          </p>
        </div>
      </div>
    </section>
  );
}
