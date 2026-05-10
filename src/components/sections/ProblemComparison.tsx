"use client";

import { motion } from "motion/react";

export function ProblemComparison() {
  const columns = [
    {
      title: "Traditional WordPress",
      label: "Status quo",
      color: "text-text-muted",
      borderColor: "border-transparent",
      bgClass: "bg-white",
      shadow: "shadow-card",
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
      bullets: [
        "22ms TTFB on standard Nginx",
        "Zero rebuild — keeps your entire WordPress workflow",
        "One toggle, no DevOps",
        "Forms, WooCommerce, dynamic features preserved",
        "Host-agnostic, no vendor lock-in",
      ],
    },
  ];

  return (
    <section className="bg-bg py-8 lg:py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
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
              className={`rounded-[12px] p-8 ${col.bgClass} ${col.shadow} ${col.borderColor === 'border-transparent' ? 'border border-border' : col.borderColor}`}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
