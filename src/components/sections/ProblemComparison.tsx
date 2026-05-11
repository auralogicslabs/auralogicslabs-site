"use client";

import { motion } from "motion/react";
import { Server, LayoutTemplate, Zap, XCircle, AlertCircle, CheckCircle2, Plus, Sparkles } from "lucide-react";
import { useState } from "react";

export function ProblemComparison() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const columns = [
    {
      title: "Traditional WordPress",
      label: "LEGACY MODEL",
      color: "text-text-muted",
      borderColor: "border-border",
      bgClass: "bg-white",
      shadow: "shadow-sm",
      icon: Server,
      bulletIcon: AlertCircle,
      bulletColor: "text-amber",
      bullets: [
        "PHP rendered on every request",
        "800ms–3s TTFB on standard hosting",
        "Identity exposed in every header",
        "Plugin caching is only partial",
        "Vulnerable to fingerprint scans",
      ],
    },
    {
      title: "Full Headless Rebuild",
      label: "HIGH COST",
      color: "text-text-muted",
      borderColor: "border-border",
      bgClass: "bg-white",
      shadow: "shadow-sm",
      icon: LayoutTemplate,
      bulletIcon: XCircle,
      bulletColor: "text-text-muted",
      bullets: [
        "3–6 months engineering effort",
        "Loses Elementor & Gutenberg native flow",
        "Ongoing DevOps complexity",
        "Dynamic features often break",
        "Heavy vendor lock-in dependencies",
      ],
    },
    {
      title: "Nexora Engine",
      label: "INTELLIGENT PATH",
      color: "text-brand",
      borderColor: "border-brand/40",
      bgClass: "bg-[#050B25]",
      isDark: true,
      shadow: "shadow-2xl",
      icon: Zap,
      bulletIcon: CheckCircle2,
      bulletColor: "text-brand",
      isRecommended: true,
      bullets: [
        "22ms TTFB on standard delivery",
        "Zero rebuild — keeps your builders",
        "One toggle, zero infra overhead",
        "Forms & WooCommerce preserved",
        "Host-agnostic deployment",
      ],
    },
  ];

  return (
    <section className="bg-white py-24 px-8 lg:px-24 relative overflow-hidden border-y border-border">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
             <div className="h-px w-10 bg-brand" />
             <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Architectural Comparison</span>
             <div className="h-px w-10 bg-brand" />
          </div>
          <h2 className="text-[32px] md:text-[50px] font-extrabold text-obsidian tracking-[-0.05em] leading-tight">
            Three paths to modern delivery.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {columns.map((col, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && !isHovered;
            const Icon = col.icon;

            return (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative overflow-hidden rounded-[40px] p-10 transition-all duration-700 border ${
                  isHovered ? 'shadow-[0_64px_128px_rgba(2,6,23,0.15)] -translate-y-4' : 'shadow-sm'
                } ${isDimmed ? 'opacity-40 grayscale-[0.8] scale-[0.98]' : 'opacity-100'} ${
                  col.isDark ? 'bg-[#050B25] text-white border-brand/20' : 'bg-white border-border text-obsidian'
                }`}
              >
                {/* Background Pattern for Dark Card */}
                {col.isDark && (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,63,216,0.1),transparent)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(26,63,216,0.05),transparent)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:32px_32px]" />
                  </>
                )}
                
                {/* Recommended Badge */}
                {col.isRecommended && (
                  <div className="absolute top-10 right-10 flex items-center gap-2 bg-[#F39A09] px-5 py-2 rounded-full shadow-lg z-20">
                     <Sparkles className="h-4 w-4 text-white" />
                     <span className="text-[10px] font-bold text-white uppercase tracking-widest">Recommended</span>
                  </div>
                )}

                <div className="relative z-10">
                  <div className={`h-16 w-16 rounded-[20px] flex items-center justify-center mb-10 ${col.isDark ? 'bg-brand shadow-[0_0_40px_rgba(26,63,216,0.5)]' : 'bg-surface-soft border border-border'}`}>
                     <Icon className={`h-8 w-8 ${col.isDark ? 'text-white' : 'text-text-muted'}`} />
                  </div>

                  <div className={`text-[11px] font-bold uppercase tracking-[0.3em] mb-4 ${col.isDark ? 'text-brand' : 'text-text-muted'}`}>
                    {col.label}
                  </div>
                  <h3 className="text-[24px] font-bold mb-8 leading-tight tracking-tight">
                    {col.title}
                  </h3>
                  
                  <ul className="space-y-6">
                    {col.bullets.map((bullet, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start text-[14px] leading-[1.6]"
                      >
                        <col.bulletIcon className={`mr-4 mt-1.5 h-4 w-4 flex-shrink-0 ${col.bulletColor}`} />
                        <span className={`font-medium ${col.isDark ? 'text-white/60' : 'text-text-secondary'}`}>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {col.isRecommended && (
                    <div className="mt-12 pt-8 border-t border-white/10">
                       <button className="w-full flex items-center justify-center gap-3 bg-white text-[#050B25] py-4 rounded-2xl font-bold hover:bg-brand hover:text-white transition-all duration-300 shadow-xl">
                          Deploy Nexora
                          <Zap className="h-4 w-4" />
                       </button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
