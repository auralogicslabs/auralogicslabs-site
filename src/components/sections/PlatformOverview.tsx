"use client";

import { motion } from "motion/react";
import { Zap, ShieldCheck, Workflow } from "lucide-react";

export function PlatformOverview() {
  const pillars = [
    {
      icon: Zap,
      title: "Speed Infrastructure",
      description: "Pre-rendered HTML snapshots served before WordPress boots. A universal drop-in cache delivers static files on Apache, Nginx, LiteSpeed, and IIS — with ETag and Last-Modified negotiation, 304 handling, and zero PHP execution on hit.",
      stats: "22ms TTFB · 100% cache hit on static · CDN-ready",
    },
    {
      icon: ShieldCheck,
      title: "Ghost Protocol",
      description: "WordPress fingerprints removed at every layer. Generator meta, REST discovery, version strings, body class signatures, and emoji scripts are stripped or renamed. The window.wp namespace is cloaked. Wappalyzer reports Nginx, not WordPress.",
      stats: "Headers · Body classes · REST · Inline scripts · Asset paths",
    },
    {
      icon: Workflow,
      title: "Intelligent Automation",
      description: "Snapshots regenerate automatically when content changes — debounced, validated, and conflict-aware. Asset references are verified against disk before publication. Competing caching plugins are detected and surfaced with resolution guidance.",
      stats: "30s debounce · Asset validation · Conflict detection",
    },
  ];

  return (
    <section id="platform" className="bg-bg py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Three layers. One infrastructure platform.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            Nexora Engine combines static delivery, identity cloaking, and intelligent automation into a single coherent delivery system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-border rounded-[12px] p-8 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-250 flex flex-col"
            >
              <div className="h-12 w-12 rounded-md bg-surface-soft border border-border flex items-center justify-center mb-6">
                <pillar.icon className="h-6 w-6 text-brand" />
              </div>
              <h3 className="text-[24px] font-semibold text-text-primary mb-4">
                {pillar.title}
              </h3>
              <p className="text-[16px] text-text-secondary leading-[1.6] mb-8 flex-grow">
                {pillar.description}
              </p>
              <div className="pt-6 border-t border-border">
                <span className="font-mono text-[13px] font-medium text-text-muted">
                  {pillar.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
