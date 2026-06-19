"use client";

import { motion } from "motion/react";
import { ImageIcon, Cpu, Layers, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: ImageIcon,
    title: "Format Intelligence",
    description:
      "Detects browser capability and serves AVIF, WebP, or JPEG/PNG automatically. No srcset configuration required. Just install and activate.",
    tags: ["AVIF", "WebP", "Auto-detect", "Fallback"],
    accent: "#1A3FD8",
  },
  {
    icon: Cpu,
    title: "Background Queue",
    description:
      "Existing library images are queued for optimization via WP-Cron. New uploads are processed immediately. The editor is never blocked.",
    tags: ["WP-Cron", "Non-blocking", "Batch processing"],
    accent: "#059669",
  },
  {
    icon: Layers,
    title: "Adaptive Sizing",
    description:
      "Generates responsive variants at configurable breakpoints. CSS background images are rewritten to serve the correct size per viewport.",
    tags: ["Responsive", "CSS backgrounds", "Custom widths"],
    accent: "#7C3AED",
  },
  {
    icon: Zap,
    title: "Nexora Engine Sync",
    description:
      "When both are active, static pages are captured after media is optimized. Your mirror serves compressed images from the very first request.",
    tags: ["Engine bridge", "Static mirror", "Automatic sync"],
    accent: "#D97706",
    featured: true,
  },
];

const steps = [
  { n: "01", title: "Upload", body: "Add images to your WordPress media library as normal." },
  { n: "02", title: "Optimize", body: "Background queue converts to AVIF/WebP, strips EXIF, generates responsive variants." },
  { n: "03", title: "Serve", body: "Visitors receive the smallest format their browser supports. Automatically." },
];

export function MediaFeatures() {
  return (
    <>
      {/* ── How it works ── */}
      <section className="bg-surface-soft/50 py-24 px-8 lg:px-24 border-y border-border">
        <div className="w-full max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-0.5 w-10 bg-brand" />
              <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">How It Works</span>
              <div className="h-0.5 w-10 bg-brand" />
            </div>
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-obsidian tracking-tight mb-4">
              Install. Activate. Done.
            </h2>
            <p className="text-[17px] text-text-secondary font-medium max-w-[480px] mx-auto leading-[1.6]">
              No configuration required. Optimization starts automatically.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white border border-border rounded-[24px] p-8 relative overflow-hidden"
              >
                <div className="absolute top-5 right-6 font-mono text-[56px] font-black text-border/60 leading-none select-none">
                  {s.n}
                </div>
                <h3 className="text-[22px] font-extrabold text-obsidian tracking-tight mb-3 relative z-10">
                  {s.title}
                </h3>
                <p className="text-[15px] text-text-secondary leading-[1.65] font-medium relative z-10">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature grid ── */}
      <section className="bg-white py-32 px-8 lg:px-24 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

        <div className="w-full max-w-[1600px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 w-10 bg-brand" />
              <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Capabilities</span>
            </div>
            <h2 className="text-[36px] md:text-[48px] font-extrabold text-obsidian tracking-tight mb-4">
              Automatic AVIF/WebP. No CDN, no config, no developer.
            </h2>
            <p className="text-[17px] text-text-secondary font-medium max-w-[540px] leading-[1.6]">
              Built for real WordPress workflows. Optimization runs in the background so editors never notice it. Visitors always get the lightest possible image.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`rounded-[28px] border p-9 flex flex-col gap-6 group hover:shadow-elevated transition-all duration-300 ${
                    f.featured
                      ? "bg-obsidian border-obsidian text-white"
                      : "bg-white border-border hover:border-border-strong"
                  }`}
                >
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: f.featured ? "rgba(255,255,255,0.1)" : `${f.accent}14`,
                      border: `1px solid ${f.featured ? "rgba(255,255,255,0.12)" : `${f.accent}25`}`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: f.featured ? "#fff" : f.accent }} />
                  </div>

                  <div>
                    {f.featured && (
                      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] font-bold text-white/70 uppercase tracking-wider">
                        <Zap className="h-3 w-3" />
                        Engine Integration
                      </div>
                    )}
                    <h3 className={`text-[22px] font-extrabold tracking-tight mb-3 ${f.featured ? "text-white" : "text-obsidian"}`}>
                      {f.title}
                    </h3>
                    <p className={`text-[15px] leading-[1.65] font-medium ${f.featured ? "text-white/65" : "text-text-secondary"}`}>
                      {f.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                          f.featured
                            ? "bg-white/10 text-white/70 border border-white/12"
                            : "bg-surface-soft text-text-muted border border-border"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Standalone note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 p-8 rounded-[24px] bg-surface-soft border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ImageIcon className="h-5 w-5 text-brand" />
                <strong className="text-[16px] font-bold text-obsidian">Standalone. No Nexora Engine required.</strong>
              </div>
              <p className="text-[14px] text-text-secondary font-medium leading-[1.6] max-w-[560px]">
                Nexora Media is an independent plugin that works on any WordPress site. The Engine integration is a bonus, not a dependency.
              </p>
            </div>
            <Link
              href="/products/nexora-engine"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-full bg-obsidian text-white px-6 py-3 text-[13px] font-bold hover:bg-brand hover:-translate-y-0.5 transition-all duration-200 group"
            >
              Explore Nexora Engine
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
