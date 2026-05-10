"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function PerformanceVisualization() {
  return (
    <section className="bg-bg py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Real infrastructure performance.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            A measured snapshot from a production WordPress site running on managed Nginx, behind no CDN.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Panel 1 - TTFB Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-border rounded-[12px] p-6 shadow-card hover:shadow-hover transition-all flex flex-col"
          >
            <div className="text-[14px] font-medium text-text-primary mb-6">TTFB · Last 1,000 requests</div>
            <div className="flex-grow flex items-end gap-[2px] h-[160px] mb-4 relative">
              {/* Fake SVG Bar Chart */}
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" className="opacity-80">
                <rect x="0" y="80" width="3" height="20" fill="var(--color-brand-soft)" />
                <rect x="4" y="60" width="3" height="40" fill="var(--color-brand)" />
                <rect x="8" y="20" width="3" height="80" fill="var(--color-brand)" />
                <rect x="12" y="10" width="3" height="90" fill="var(--color-brand)" />
                <rect x="16" y="30" width="3" height="70" fill="var(--color-brand)" />
                <rect x="20" y="50" width="3" height="50" fill="var(--color-brand)" />
                <rect x="24" y="70" width="3" height="30" fill="var(--color-brand-soft)" />
                <rect x="28" y="80" width="3" height="20" fill="var(--color-brand-soft)" />
                <rect x="32" y="85" width="3" height="15" fill="var(--color-brand-soft)" />
                <rect x="36" y="90" width="3" height="10" fill="var(--color-border-strong)" />
                <rect x="40" y="92" width="3" height="8" fill="var(--color-border-strong)" />
                <rect x="44" y="95" width="3" height="5" fill="var(--color-border-strong)" />
                <rect x="48" y="96" width="3" height="4" fill="var(--color-border-strong)" />
                <rect x="52" y="97" width="3" height="3" fill="var(--color-border-strong)" />
                <rect x="56" y="97" width="3" height="3" fill="var(--color-border-strong)" />
                <rect x="60" y="98" width="3" height="2" fill="var(--color-border-strong)" />
                <rect x="64" y="98" width="3" height="2" fill="var(--color-border-strong)" />
                <rect x="68" y="99" width="3" height="1" fill="var(--color-border-strong)" />
                <rect x="72" y="99" width="3" height="1" fill="var(--color-border-strong)" />
              </svg>
              {/* Markers */}
              <div className="absolute top-0 bottom-0 left-[12%] border-l border-dashed border-text-primary z-10">
                <div className="absolute top-[-20px] left-[-10px] text-[11px] font-mono font-medium text-text-primary">22ms</div>
              </div>
              <div className="absolute top-0 bottom-0 left-[40%] border-l border-dashed border-text-muted z-10">
                <div className="absolute top-[-20px] left-[-10px] text-[11px] font-mono text-text-muted">38ms</div>
              </div>
              <div className="absolute top-0 bottom-0 left-[70%] border-l border-dashed border-text-muted z-10">
                <div className="absolute top-[-20px] left-[-10px] text-[11px] font-mono text-text-muted">67ms</div>
              </div>
            </div>
          </motion.div>

          {/* Panel 2 - Headers */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0F172A] border border-[#1E293B] rounded-[12px] p-6 shadow-card hover:shadow-hover transition-all text-[#E2E8F0] font-mono text-[13px] leading-[1.6]"
          >
            <div className="text-brand-soft font-semibold mb-4">HTTP/2 200</div>
            <div><span className="text-[#94A3B8]">content-type:</span> text/html; charset=UTF-8</div>
            <div><span className="text-[#94A3B8]">cache-control:</span> public, max-age=300, stale-while-revalidate=86400</div>
            <div><span className="text-[#94A3B8]">etag:</span> "ncx-a3f1b2c4d5e6f7a8"</div>
            <div><span className="text-[#94A3B8]">x-nexora-cache:</span> <span className="text-success">HIT</span></div>
            <div><span className="text-[#94A3B8]">x-nextjs-cache:</span> <span className="text-success">HIT</span></div>
            <div><span className="text-[#94A3B8]">x-powered-by:</span> Next.js</div>
            <div><span className="text-[#94A3B8]">server:</span> nginx</div>
          </motion.div>

          {/* Panel 3 - Hit Ratio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-border rounded-[12px] p-6 shadow-card hover:shadow-hover transition-all flex items-center justify-center relative min-h-[200px]"
          >
            <svg viewBox="0 0 36 36" className="w-32 h-32">
              <path
                className="text-border"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="currentColor" strokeWidth="3"
              />
              <path
                className="text-brand"
                strokeDasharray="96, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="currentColor" strokeWidth="3"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-[28px] font-semibold text-text-primary">96%</span>
              <span className="text-[12px] text-text-muted">Cache hit rate</span>
            </div>
          </motion.div>

          {/* Panel 4 - Snapshot Health */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-border rounded-[12px] p-6 shadow-card hover:shadow-hover transition-all"
          >
            <div className="text-[14px] font-medium text-text-primary mb-4">Recent Captures</div>
            <ul className="space-y-4 text-[13px] font-mono">
              <li className="flex items-center text-text-secondary">
                <CheckCircle2 className="h-4 w-4 text-success mr-2" />
                <span>/about-us</span>
                <span className="mx-2 text-border-strong">•</span>
                <span className="text-text-muted">2 min ago</span>
                <span className="mx-2 text-border-strong">•</span>
                <span className="text-text-muted">78 KB</span>
              </li>
              <li className="flex items-center text-text-secondary">
                <CheckCircle2 className="h-4 w-4 text-success mr-2" />
                <span>/services</span>
                <span className="mx-2 text-border-strong">•</span>
                <span className="text-text-muted">12 min ago</span>
                <span className="mx-2 text-border-strong">•</span>
                <span className="text-text-muted">92 KB</span>
              </li>
              <li className="flex items-center text-text-secondary">
                <CheckCircle2 className="h-4 w-4 text-success mr-2" />
                <span>/contact-us</span>
                <span className="mx-2 text-border-strong">•</span>
                <span className="text-text-muted">1h ago</span>
                <span className="mx-2 text-border-strong">•</span>
                <span className="text-text-muted">56 KB</span>
              </li>
              <li className="flex items-center text-text-secondary">
                <CheckCircle2 className="h-4 w-4 text-success mr-2" />
                <span>/insights/post-32</span>
                <span className="mx-2 text-border-strong">•</span>
                <span className="text-text-muted">3h ago</span>
                <span className="mx-2 text-border-strong">•</span>
                <span className="text-text-muted">84 KB</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
