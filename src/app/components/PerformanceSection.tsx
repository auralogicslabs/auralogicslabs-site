"use client";

import { useRef } from 'react';
import { Activity, Gauge, Server } from 'lucide-react';
import { motion, useInView } from 'motion/react';

type Metric = {
  label: string;
  value: string;
  change: string;
  /** 0–100, represents how good the score is (used for bar width) */
  score: number;
};

function MetricBar({ metric, delay }: { metric: Metric; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-semibold text-slate-700">{metric.label}</p>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-semibold text-[#1A3FD8]">{metric.value}</p>
          <p className="text-xs font-medium text-emerald-600">{metric.change}</p>
        </div>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#1A3FD8] to-[#60A5FA]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${metric.score}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export function PerformanceSection() {
  const metrics: Metric[] = [
    { label: 'TTFB. Time to First Byte', value: '22ms', change: '−85%', score: 98 },
    { label: 'FCP. First Contentful Paint', value: '0.8s', change: '−72%', score: 95 },
    { label: 'LCP. Largest Contentful Paint', value: '1.2s', change: '−68%', score: 90 },
    { label: 'CLS. Cumulative Layout Shift', value: '0.02', change: '−90%', score: 98 },
  ];

  const headers = [
    { key: 'X-Powered-By', value: 'Next.js', status: 'protected' },
    { key: 'Server', value: 'Vercel', status: 'protected' },
    { key: 'Cache-Control', value: 'public, max-age=300, stale-while-revalidate=86400', status: 'active' },
    { key: 'X-Nexora-Cache', value: 'HIT', status: 'active' },
  ];

  return (
    <section className="bg-[#F8FAFC] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Observability
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            Real Infrastructure Performance
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Verified Core Web Vitals and response headers from a live
            Nexora Engine deployment.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Core Web Vitals with animated bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <Activity size={22} className="text-[#1A3FD8]" />
              <h3 className="font-semibold text-slate-950">Core Web Vitals</h3>
              <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                All Passing
              </span>
            </div>
            <div className="mt-6 space-y-6">
              {metrics.map((metric, i) => (
                <MetricBar key={metric.label} metric={metric} delay={0.15 + i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Response headers */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <Server size={22} className="text-[#1A3FD8]" />
              <h3 className="font-semibold text-slate-950">Live Response Headers</h3>
            </div>
            <div className="mt-6 space-y-3 font-mono text-sm">
              {headers.map((header) => (
                <div
                  key={header.key}
                  className="flex flex-col gap-0.5 rounded-lg bg-slate-50 px-4 py-3"
                >
                  <span className="text-xs text-slate-400">{header.key}</span>
                  <span
                    className={`font-medium truncate ${
                      header.status === 'protected'
                        ? 'text-emerald-700'
                        : 'text-[#1A3FD8]'
                    }`}
                  >
                    {header.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Delivery metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid sm:grid-cols-3 sm:divide-x sm:divide-slate-100"
        >
          {[
            { value: '99.8%', label: 'Cache Hit Rate', color: 'text-[#1A3FD8]' },
            { value: '100%', label: 'Uptime', color: 'text-emerald-600' },
            { value: '0', label: 'PHP Requests Per Visit', color: 'text-amber-600' },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-4 px-8 py-6">
              <Gauge size={20} className="flex-shrink-0 text-slate-300" />
              <div>
                <p className={`text-2xl font-semibold tabular-nums ${item.color}`}>
                  {item.value}
                </p>
                <p className="text-sm text-slate-500">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
