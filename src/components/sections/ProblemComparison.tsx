"use client";

import { motion } from "motion/react";
import { Server, LayoutTemplate, Zap } from "lucide-react";

export function ProblemComparison() {
  const columns = [
    {
      title: "Traditional WordPress",
      label: "Status quo",
      color: "text-text-muted",
      borderColor: "border-transparent",
      bgClass: "bg-white",
      shadow: "shadow-card",
      icon: <Server className="absolute -bottom-6 -right-6 w-48 h-48 text-text-muted opacity-[0.03] pointer-events-none" strokeWidth={1} />,
      bullets: [
        "PHP rendered on every request",
        "800ms–3s TTFB on commodity hosting",
        "WordPress identity exposed in headers",
        "Plugin caching is partial mitigation",
        "Vulnerable to fingerprint-based scans",
      ],
    },
    {
      title: "Full Headless Rebuild",
      label: "High-cost alternative",
      color: "text-text-muted",
      borderColor: "border-transparent",
      bgClass: "bg-white",
      shadow: "shadow-card",
      icon: <LayoutTemplate className="absolute -bottom-6 -right-6 w-48 h-48 text-text-muted opacity-[0.03] pointer-events-none" strokeWidth={1} />,
      bullets: [
        "3–6 months engineering effort",
        "Loses Elementor, Gutenberg, every builder",
        "Ongoing DevOps overhead",
        "Forms, comments, dynamic features need rebuilding",
        "Vendor lock-in to Vercel / Netlify",
      ],
    },
    {
      title: "Nexora Engine",
      label: "Infrastructure layer",
      color: "text-brand",
      borderColor: "border-t-[3px] border-t-brand border-x border-b border-border",
      bgClass: "bg-brand-tint",
      shadow: "shadow-elevated",
      icon: <Zap className="absolute -bottom-6 -right-6 w-48 h-48 text-brand opacity-[0.04] pointer-events-none" strokeWidth={1} />,
      bullets: [
        "22ms TTFB on standard Nginx",
        "Zero rebuild — keeps your entire workflow",
        "One toggle, no DevOps",
        "Forms, WooCommerce automatically preserved",
        "Host-agnostic, no vendor lock-in",
      ],
    },
  ];

  return (
    <section className="bg-bg py-8 lg:py-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:48px_48px] opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[40px] font-semibold text-text-primary tracking-[-0.02em]">
            Three paths to modern WordPress delivery.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {columns.map((col, index) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-[12px] p-8 transition-transform duration-300 hover:-translate-y-1 ${col.bgClass} ${col.shadow} ${col.borderColor === 'border-transparent' ? 'border border-border' : col.borderColor}`}
            >
              {col.icon}
              <div className="relative z-10">
                <div className={`text-[14px] font-medium uppercase tracking-wider mb-2 ${col.color}`}>
                  {col.label}
                </div>
                <h3 className="text-[24px] font-semibold text-text-primary mb-6">
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-[16px] text-text-secondary leading-[1.6]">
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-text-muted flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
