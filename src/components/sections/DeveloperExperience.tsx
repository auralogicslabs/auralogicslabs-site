"use client";

import { motion } from "motion/react";

export function DeveloperExperience() {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Terminal JSON */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0F172A] border border-[#1E293B] rounded-[12px] p-6 shadow-elevated overflow-x-auto"
          >
            <pre className="font-mono text-[13px] leading-[1.6] text-[#E2E8F0]">
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
  `}<span className="text-[#94A3B8]">{`}`}</span>{`,
  `}<span className="text-brand-soft">"server"</span>{`: `}<span className="text-[#16A34A]">"nginx/1.26.1"</span>{`
`}<span className="text-[#94A3B8]">{`}`}</span>
            </pre>
          </motion.div>

          {/* Right - Bullets */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="space-y-6">
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span><strong className="text-text-primary font-semibold">Single-URL diagnostic endpoint</strong> — full system health in 30 seconds</span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span><strong className="text-text-primary font-semibold">Structured JSON output</strong> — pipe to Datadog, Grafana, or your own dash</span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span><strong className="text-text-primary font-semibold">REST API</strong> for snapshot state and manifest queries</span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span><strong className="text-text-primary font-semibold">Programmatic regeneration</strong> via WP-CLI commands</span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span><strong className="text-text-primary font-semibold">Filterable hooks</strong> for custom invalidation logic</span>
              </li>
              <li className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                <span className="mr-4 mt-2 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                <span><strong className="text-text-primary font-semibold">Self-contained drop-in</strong> — under 200 lines of audited PHP</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
