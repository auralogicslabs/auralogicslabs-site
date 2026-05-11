"use client";

import { useState } from 'react';
import { Terminal, Code2, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const diagnosticTabs = [
  {
    id: 'status',
    label: 'Delivery Status',
    json: `{
  "cache_status": "HIT",
  "ttfb_ms": 22,
  "snapshot_version": "1.2.3",
  "last_regeneration": "2026-05-10T14:32:00Z",
  "drop_in": "active",
  "wp_boots": false
}`,
  },
  {
    id: 'security',
    label: 'Ghost Protocol',
    json: `{
  "ghost_protocol": "enabled",
  "fingerprint_exposed": false,
  "wp_generator_tag": "removed",
  "rest_endpoint": "masked",
  "headers_sanitized": {
    "X-Powered-By": "Next.js",
    "Server": "Vercel"
  }
}`,
  },
  {
    id: 'performance',
    label: 'Performance',
    json: `{
  "static_delivery": true,
  "edge_ready": true,
  "php_requests_per_visit": 0,
  "cache_hit_rate": "99.8%",
  "vitals": {
    "ttfb": "22ms",
    "fcp": "0.8s",
    "lcp": "1.2s",
    "cls": 0.02
  }
}`,
  },
];

export function DeveloperExperienceSection() {
  const [activeTab, setActiveTab] = useState('status');
  const current = diagnosticTabs.find((t) => t.id === activeTab)!;

  return (
    <section id="developers" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Developer Experience
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            Built For Developers, Agencies,
            <br />
            And Infrastructure Teams
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Comprehensive tooling and real-time diagnostics for modern
            WordPress delivery workflows.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Interactive diagnostic terminal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-[#0F172A] shadow-xl overflow-hidden"
          >
            {/* Terminal title bar */}
            <div className="flex items-center justify-between border-b border-slate-700/60 px-5 py-3">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-[#60A5FA]" />
                <span className="font-mono text-xs text-slate-400">
                  nexora-diagnostics.json
                </span>
              </div>
              {/* Tab pills inside terminal */}
              <div className="flex gap-1">
                {diagnosticTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* JSON output */}
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-x-auto px-6 py-5 font-mono text-sm leading-relaxed text-slate-300"
              >
                {current.json}
              </motion.pre>
            </AnimatePresence>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-[#1A3FD8] hover:shadow-md transition-all group">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF6FF]">
                  <Code2 size={20} className="text-[#1A3FD8]" />
                </div>
                <h3 className="font-semibold text-slate-950">
                  Developer-Friendly APIs
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                RESTful APIs, WP action hooks, and filters for custom
                integrations. Full control over delivery, caching, and security
                layers without touching the core.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-[#1A3FD8] hover:shadow-md transition-all group">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF6FF]">
                  <Activity size={20} className="text-[#1A3FD8]" />
                </div>
                <h3 className="font-semibold text-slate-950">
                  Live Diagnostics Dashboard
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Real-time delivery status, TTFB readings, Ghost Protocol
                verification, and per-page capture health — all visible in the
                WordPress admin panel.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 hover:border-[#1A3FD8] hover:shadow-md transition-all group">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EFF6FF]">
                  <Terminal size={20} className="text-[#1A3FD8]" />
                </div>
                <h3 className="font-semibold text-slate-950">
                  Diagnostics JSON Endpoint
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                Structured JSON diagnostics available via a signed admin
                endpoint — pipe it into your monitoring stack, CI checks, or
                Slack alerts with no extra tooling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
