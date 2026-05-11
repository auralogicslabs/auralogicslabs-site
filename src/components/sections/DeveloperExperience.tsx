"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const diagnosticViews = [
  {
    id: "delivery",
    label: "Delivery",
    content: (
      <>
        <span className="text-[#94A3B8]">{`{`}</span>{`
  `}<span className="text-brand-soft">"verdict"</span>{`: `}<span className="text-[#16A34A]">"fast_path_dropin"</span>{`,
  `}<span className="text-brand-soft">"ttfb_ms"</span>{`: `}<span className="text-[#F59E0B]">22</span>{`,
  `}<span className="text-brand-soft">"cache_status"</span>{`: `}<span className="text-[#16A34A]">"HIT"</span>{`,
  `}<span className="text-brand-soft">"drop_in"</span>{`: `}<span className="text-[#94A3B8]">{`{`}</span>{`
    `}<span className="text-brand-soft">"installed"</span>{`: `}<span className="text-[#F59E0B]">true</span>{`,
    `}<span className="text-brand-soft">"signature"</span>{`: `}<span className="text-[#16A34A]">"verified"</span>{`,
    `}<span className="text-brand-soft">"wp_cache"</span>{`: `}<span className="text-[#F59E0B]">true</span>{`
  `}<span className="text-[#94A3B8]">{`}`}</span>{`,
  `}<span className="text-brand-soft">"snapshots"</span>{`: `}<span className="text-[#94A3B8]">{`{`}</span>{`
    `}<span className="text-brand-soft">"total"</span>{`: `}<span className="text-[#F59E0B]">33</span>{`,
    `}<span className="text-brand-soft">"warnings"</span>{`: `}<span className="text-[#F59E0B]">0</span>{`,
    `}<span className="text-brand-soft">"last_regen"</span>{`: `}<span className="text-[#16A34A]">"2026-05-08T08:06:30Z"</span>{`
  `}<span className="text-[#94A3B8]">{`}`}</span>{`
`}<span className="text-[#94A3B8]">{`}`}</span>
      </>
    ),
  },
  {
    id: "security",
    label: "Ghost Protocol",
    content: (
      <>
        <span className="text-[#94A3B8]">{`{`}</span>{`
  `}<span className="text-brand-soft">"ghost_protocol"</span>{`: `}<span className="text-[#16A34A]">"enabled"</span>{`,
  `}<span className="text-brand-soft">"fingerprint_exposed"</span>{`: `}<span className="text-[#F59E0B]">false</span>{`,
  `}<span className="text-brand-soft">"wp_generator_tag"</span>{`: `}<span className="text-[#16A34A]">"removed"</span>{`,
  `}<span className="text-brand-soft">"rest_discovery"</span>{`: `}<span className="text-[#16A34A]">"stripped"</span>{`,
  `}<span className="text-brand-soft">"headers"</span>{`: `}<span className="text-[#94A3B8]">{`{`}</span>{`
    `}<span className="text-brand-soft">"server"</span>{`: `}<span className="text-[#16A34A]">"nginx"</span>{`,
    `}<span className="text-brand-soft">"x-powered-by"</span>{`: `}<span className="text-[#16A34A]">"Next.js"</span>{`,
    `}<span className="text-brand-soft">"x-nexora-cache"</span>{`: `}<span className="text-[#16A34A]">"HIT"</span>{`
  `}<span className="text-[#94A3B8]">{`}`}</span>{`,
  `}<span className="text-brand-soft">"wappalyzer_reports"</span>{`: `}<span className="text-[#16A34A]">"nginx, not WordPress"</span>{`
`}<span className="text-[#94A3B8]">{`}`}</span>
      </>
    ),
  },
  {
    id: "performance",
    label: "Performance",
    content: (
      <>
        <span className="text-[#94A3B8]">{`{`}</span>{`
  `}<span className="text-brand-soft">"vitals"</span>{`: `}<span className="text-[#94A3B8]">{`{`}</span>{`
    `}<span className="text-brand-soft">"ttfb"</span>{`: `}<span className="text-[#16A34A]">"22ms"</span>{`,
    `}<span className="text-brand-soft">"fcp"</span>{`: `}<span className="text-[#16A34A]">"0.8s"</span>{`,
    `}<span className="text-brand-soft">"lcp"</span>{`: `}<span className="text-[#16A34A]">"1.2s"</span>{`,
    `}<span className="text-brand-soft">"cls"</span>{`: `}<span className="text-[#F59E0B]">0.02</span>{`
  `}<span className="text-[#94A3B8]">{`}`}</span>{`,
  `}<span className="text-brand-soft">"php_requests_per_visit"</span>{`: `}<span className="text-[#F59E0B]">0</span>{`,
  `}<span className="text-brand-soft">"cache_hit_rate"</span>{`: `}<span className="text-[#16A34A]">"99.8%"</span>{`,
  `}<span className="text-brand-soft">"static_delivery"</span>{`: `}<span className="text-[#F59E0B]">true</span>{`,
  `}<span className="text-brand-soft">"edge_ready"</span>{`: `}<span className="text-[#F59E0B]">true</span>{`
`}<span className="text-[#94A3B8]">{`}`}</span>
      </>
    ),
  },
];

export function DeveloperExperience() {
  const [activeView, setActiveView] = useState("delivery");

  return (
    <section id="developers" className="bg-bg py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Built for the engineers who maintain it.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Interactive terminal */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0F172A] border border-[#1E293B] rounded-[12px] shadow-elevated overflow-hidden"
          >
            {/* Terminal title bar with tab switcher */}
            <div className="flex items-center justify-between border-b border-[#1E293B] px-5 py-3">
              <span className="font-mono text-[12px] text-[#475569]">
                nexora-diagnostics.json
              </span>
              <div className="flex gap-1">
                {diagnosticViews.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    className={`rounded px-2.5 py-1 text-[11px] font-medium transition-colors ${
                      activeView === view.id
                        ? "bg-[#1E293B] text-[#E2E8F0]"
                        : "text-[#475569] hover:text-[#94A3B8]"
                    }`}
                  >
                    {view.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Animated JSON output */}
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeView}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="overflow-x-auto px-6 py-5 font-mono text-[13px] leading-[1.7] text-[#E2E8F0]"
              >
                {diagnosticViews.find((v) => v.id === activeView)?.content}
              </motion.pre>
            </AnimatePresence>
          </motion.div>

          {/* Right — Bullets */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="space-y-6">
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong className="text-text-primary font-semibold">
                    Single-URL diagnostic endpoint
                  </strong>{" "}
                  — full system health in 30 seconds
                </span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong className="text-text-primary font-semibold">
                    Structured JSON output
                  </strong>{" "}
                  — pipe to Datadog, Grafana, or your own dash
                </span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong className="text-text-primary font-semibold">
                    REST API
                  </strong>{" "}
                  for snapshot state and manifest queries
                </span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong className="text-text-primary font-semibold">
                    Programmatic regeneration
                  </strong>{" "}
                  via WP-CLI commands
                </span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong className="text-text-primary font-semibold">
                    Filterable hooks
                  </strong>{" "}
                  for custom invalidation logic
                </span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span>
                  <strong className="text-text-primary font-semibold">
                    Self-contained drop-in
                  </strong>{" "}
                  — under 200 lines of audited PHP
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
