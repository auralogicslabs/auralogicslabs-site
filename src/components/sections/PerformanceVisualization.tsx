"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export function PerformanceVisualization() {
  const [inView, setInView] = useState(false);
  const bars = [20, 40, 80, 90, 70, 50, 30, 20, 15, 10, 8, 5, 4, 3, 3, 2, 2, 1, 1];

  return (
    <section className="bg-bg py-24 px-6 lg:px-12 border-y border-border relative overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onViewportEnter={() => setInView(true)}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Real infrastructure performance.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            A measured snapshot from a production WordPress site running on managed Nginx, behind no CDN.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
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
              {/* Animated SVG Bar Chart */}
              <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" className="opacity-80">
                {bars.map((height, i) => (
                  <motion.rect
                    key={i}
                    x={i * 4}
                    y={100 - height}
                    width="3"
                    height={height}
                    fill={i < 6 ? "var(--color-brand)" : i < 9 ? "var(--color-brand-soft)" : "var(--color-border-strong)"}
                    initial={{ height: 0, y: 100 }}
                    animate={inView ? { height: height, y: 100 - height } : { height: 0, y: 100 }}
                    transition={{ duration: 0.6, delay: 0.2 + (i * 0.02), ease: "easeOut" }}
                    className="hover:opacity-60 transition-opacity cursor-pointer"
                  >
                    <title>{`${20 + i * 2}ms - ${height * 10} requests`}</title>
                  </motion.rect>
                ))}
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
            className="bg-brand-tint border border-brand/20 rounded-[12px] p-6 shadow-card hover:shadow-hover transition-all flex items-center justify-center relative min-h-[200px]"
          >
            <svg viewBox="0 0 36 36" className="w-32 h-32">
              <path
                className="text-white drop-shadow-sm"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="currentColor" strokeWidth="3"
              />
              <motion.path
                className="text-brand"
                strokeDasharray="100, 100"
                initial={{ strokeDashoffset: 100 }}
                animate={inView ? { strokeDashoffset: 4 } : { strokeDashoffset: 100 }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="text-[28px] font-semibold text-text-primary"
              >
                96%
              </motion.span>
              <span className="text-[12px] font-medium text-brand">Cache hit rate</span>
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
              {[
                { path: "/about-us", time: "2 min ago", size: "78 KB" },
                { path: "/services", time: "12 min ago", size: "92 KB" },
                { path: "/contact-us", time: "1h ago", size: "56 KB" },
                { path: "/insights/post-32", time: "3h ago", size: "84 KB" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                  className="flex items-center text-text-secondary group hover:bg-surface-soft p-1 rounded-sm -mx-1 transition-colors"
                >
                  <CheckCircle2 className="h-4 w-4 text-success mr-2 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-text-primary transition-colors">{item.path}</span>
                  <span className="mx-2 text-border-strong">•</span>
                  <span className="text-text-muted">{item.time}</span>
                  <span className="mx-2 text-border-strong">•</span>
                  <span className="text-text-muted">{item.size}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
