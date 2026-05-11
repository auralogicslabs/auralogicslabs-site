"use client";

import { motion } from "motion/react";
import { Server, LayoutTemplate, Zap, XCircle, AlertCircle, CheckCircle2, Plus } from "lucide-react";
import { useState } from "react";

export function ProblemComparison() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const columns = [
    {
      title: "Traditional WordPress",
      label: "Status quo",
      color: "text-text-muted",
      borderColor: "border-border",
      bgClass: "bg-white",
      shadow: "shadow-sm",
      icon: <Server className="absolute -bottom-6 -right-6 w-48 h-48 text-text-muted opacity-[0.03] pointer-events-none" strokeWidth={1} />,
      bulletIcon: AlertCircle,
      bulletColor: "text-text-muted",
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
      borderColor: "border-border",
      bgClass: "bg-white",
      shadow: "shadow-sm",
      icon: <LayoutTemplate className="absolute -bottom-6 -right-6 w-48 h-48 text-text-muted opacity-[0.03] pointer-events-none" strokeWidth={1} />,
      bulletIcon: XCircle,
      bulletColor: "text-text-muted",
      bullets: [
        "3–6 months engineering effort",
        "Loses Elementor, Gutenberg, every builder",
        "Ongoing DevOps overhead",
        "Forms, comments, and dynamic features break",
        "Heavy vendor lock-in to Vercel / Netlify",
      ],
    },
    {
      title: "Nexora Engine",
      label: "The Intelligent Path",
      color: "text-brand",
      borderColor: "border-brand/40",
      bgClass: "bg-brand-tint/30",
      shadow: "shadow-elevated",
      icon: <Zap className="absolute -bottom-6 -right-6 w-48 h-48 text-brand opacity-[0.05] pointer-events-none" strokeWidth={1} />,
      bulletIcon: CheckCircle2,
      bulletColor: "text-brand",
      isRecommended: true,
      bullets: [
        "22ms TTFB on standard Nginx",
        "Zero rebuild — keeps your entire workflow",
        "One toggle, zero infrastructure overhead",
        "Forms and WooCommerce preserved",
        "Host-agnostic with zero vendor lock-in",
      ],
    },
  ];

  return (
    <section className="bg-bg py-32 px-8 lg:px-24 relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[12px] font-bold uppercase tracking-wider rounded-full mb-6">
            Structural Comparison
          </span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] leading-tight">
            Three paths to modern <br className="hidden md:block" /> WordPress delivery.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {columns.map((col, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && !isHovered;

            return (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-[32px] p-12 transition-all duration-500 border ${
                  isHovered ? 'shadow-2xl -translate-y-2' : col.shadow
                } ${isDimmed ? 'opacity-40 grayscale-[0.5] scale-[0.98]' : 'opacity-100'} ${
                  col.isRecommended && !isDimmed ? 'border-brand/40 ring-1 ring-brand/10' : 'border-border'
                } ${col.bgClass}`}
              >
                {col.icon}
                <Plus className="absolute top-6 left-6 h-4 w-4 text-border-strong opacity-40" />

                {col.isRecommended && (
                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-obsidian text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    Recommended
                  </div>
                )}

                <div className="relative z-10">
                  <div className={`text-[12px] font-bold uppercase tracking-[0.2em] mb-4 ${col.color}`}>
                    {col.label}
                  </div>
                  <h3 className="text-[28px] font-bold text-obsidian mb-10 leading-tight">
                    {col.title}
                  </h3>
                  
                  <ul className="space-y-6">
                    {col.bullets.map((bullet, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                        className="flex items-start text-[16px] text-text-secondary leading-[1.6]"
                      >
                        <col.bulletIcon className={`mr-4 mt-1 h-5 w-5 flex-shrink-0 ${col.bulletColor}`} />
                        <span className="font-medium">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
