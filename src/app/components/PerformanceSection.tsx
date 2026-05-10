"use client";

import { Activity, Gauge, Server, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function PerformanceSection() {
  const metrics = [
    { label: 'TTFB', value: '22ms', change: '-85%', status: 'excellent' },
    { label: 'FCP', value: '0.8s', change: '-72%', status: 'excellent' },
    { label: 'LCP', value: '1.2s', change: '-68%', status: 'excellent' },
    { label: 'CLS', value: '0.02', change: '-90%', status: 'excellent' },
  ];

  const headers = [
    { key: 'X-Powered-By', value: 'Hidden', status: 'protected' },
    { key: 'Server', value: 'Masked', status: 'protected' },
    { key: 'Cache-Control', value: 'max-age=31536000', status: 'active' },
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
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] lg:text-5xl">
            Real Infrastructure Performance
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            Observability-grade metrics and security headers
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-4">
              <Activity size={24} className="text-[#1A3FD8]" />
              <h3 className="font-semibold text-[#0F172A]">Core Web Vitals</h3>
            </div>
            <div className="mt-6 space-y-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#64748B]">{metric.label}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-semibold text-[#1A3FD8]">{metric.value}</p>
                    <p className="text-xs text-[#16A34A]">{metric.change} improvement</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-4">
              <Server size={24} className="text-[#1A3FD8]" />
              <h3 className="font-semibold text-[#0F172A]">Response Headers</h3>
            </div>
            <div className="mt-6 space-y-3">
              {headers.map((header) => (
                <div key={header.key} className="rounded-lg bg-[#F8FAFC] p-4 font-mono text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">{header.key}:</span>
                    <span className="text-[#1A3FD8] font-medium">{header.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm"
        >
          <div className="flex items-center gap-3 border-b border-[#E2E8F0] pb-4">
            <Gauge size={24} className="text-[#1A3FD8]" />
            <h3 className="font-semibold text-[#0F172A]">Delivery Metrics</h3>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-semibold text-[#1A3FD8]">99.8%</p>
              <p className="mt-2 text-sm text-[#64748B]">Cache Hit Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold text-[#16A34A]">100%</p>
              <p className="mt-2 text-sm text-[#64748B]">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold text-[#F59E0B]">0</p>
              <p className="mt-2 text-sm text-[#64748B]">PHP Requests</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
