"use client";

import { motion } from "motion/react";
import {
  Zap, Shield, Server, RefreshCcw, Globe, ArrowRight,
  Cpu, Lock, BarChart3, Clock,
} from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    icon: Zap,
    title: "22ms Time to First Byte",
    description:
      "Pre-built flat HTML returned at the server level before WordPress initialises. No waiting for PHP to boot.",
    metric: "22ms",
    metricLabel: "TTFB",
    accent: "#1A3FD8",
    bg: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    icon: Cpu,
    title: "Zero PHP on Cache Hit",
    description:
      "Cached pages bypass the entire WordPress execution stack. PHP, plugins, and database queries are all skipped.",
    metric: "0",
    metricLabel: "PHP calls",
    accent: "#059669",
    bg: "#F0FDF4",
    border: "#A7F3D0",
  },
  {
    icon: Server,
    title: "Every Server. Every Host.",
    description:
      "Apache, Nginx, LiteSpeed, IIS. Nexora Engine generates the correct rewrite rules for your exact stack automatically.",
    metric: "4+",
    metricLabel: "Server types",
    accent: "#7C3AED",
    bg: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    icon: RefreshCcw,
    title: "Smart Cache Invalidation",
    description:
      "When you publish or edit content, only the affected pages are invalidated and rebuilt. Everything else stays cached.",
    metric: "Auto",
    metricLabel: "Invalidation",
    accent: "#F59E0B",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
  {
    icon: Shield,
    title: "Stealth Delivery Mode",
    description:
      "Strips its own presence from response headers by default. Visitors and bots see a clean, native-looking server.",
    metric: "100%",
    metricLabel: "Header stealth",
    accent: "#0D9488",
    bg: "#F0FDFA",
    border: "#99F6E4",
  },
  {
    icon: Lock,
    title: "Non-Destructive by Design",
    description:
      "Static files sit alongside your live WordPress install. One toggle disables the mirror and your site runs as normal.",
    metric: "1-click",
    metricLabel: "Rollback",
    accent: "#DC2626",
    bg: "#FEF2F2",
    border: "#FECACA",
  },
];

const bottomItems = [
  { icon: Globe,     label: "Works on shared hosting",    color: "#1A3FD8" },
  { icon: Clock,     label: "Active in under 2 minutes",  color: "#059669" },
  { icon: BarChart3, label: "No DevOps required",         color: "#7C3AED" },
  { icon: Shield,    label: "Free tier: forever free",   color: "#F59E0B" },
];

export function EngineCapabilities() {
  return (
    <section className="bg-white py-32 px-8 lg:px-24 border-b border-border relative overflow-hidden rounded-tl-[40px] rounded-tr-[40px] -mt-10 z-10">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-0.5 w-8 bg-brand rounded-full" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">Engine Capabilities</span>
            </div>
            <h2 className="text-[38px] md:text-[54px] font-extrabold text-obsidian tracking-tight leading-[1.05] mb-4">
              Six reasons developers<br className="hidden md:block" /> choose Nexora Engine.
            </h2>
            <p className="text-[17px] text-text-secondary font-medium leading-[1.65]">
              Not caching tricks. Not a CDN overlay. Genuine static delivery built
              into the request path of your existing WordPress site.
            </p>
          </div>
          <Link
            href="/products/nexora-engine"
            className="flex-shrink-0 self-end inline-flex items-center gap-2 rounded-[14px] bg-obsidian text-white px-7 py-4 text-[14px] font-black hover:bg-brand transition-all duration-300 group shadow-[0_8px_28px_rgba(2,6,23,0.2)]"
          >
            Full feature breakdown
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[24px] border border-border bg-white p-8 flex flex-col gap-6 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(2,6,23,0.08)] transition-all duration-300 cursor-default relative overflow-hidden"
              >
                {/* Accent top bar. animates in on viewport entry */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-0 right-0 h-[3px] origin-left rounded-t-[24px]"
                  style={{ background: cap.accent }}
                />

                {/* Icon + metric */}
                <div className="flex items-start justify-between">
                  <div
                    className="h-13 w-13 rounded-2xl flex items-center justify-center"
                    style={{
                      background: cap.bg,
                      border: `1.5px solid ${cap.border}`,
                      width: 52,
                      height: 52,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: cap.accent }} />
                  </div>
                  <div className="text-right">
                    <div
                      className="font-mono text-[28px] font-bold leading-none tracking-tight"
                      style={{ color: cap.accent }}
                    >
                      {cap.metric}
                    </div>
                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] mt-1">
                      {cap.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-[17px] font-extrabold text-obsidian tracking-tight mb-2.5 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary leading-[1.68] font-medium">
                    {cap.description}
                  </p>
                </div>

                {/* Hover accent line at bottom */}
                <div
                  className="h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full opacity-30"
                  style={{ background: cap.accent }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom summary bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {bottomItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-surface-soft border border-border hover:border-border-strong hover:bg-white transition-all duration-300"
              >
                <div
                  className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}22` }}
                >
                  <Icon className="h-4 w-4" style={{ color: item.color }} />
                </div>
                <span className="text-[13px] font-bold text-obsidian leading-snug">{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
