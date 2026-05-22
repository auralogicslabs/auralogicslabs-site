"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Building2, Newspaper, Code2, CheckCircle2, ArrowRight } from "lucide-react";

const useCases = [
  {
    id: "agencies",
    icon: Users,
    title: "For agencies",
    tagline: "Modern delivery without rebuilding client workflows.",
    description:
      "Ship enterprise-grade static performance across every client site without hiring React specialists, configuring CI/CD pipelines, or migrating away from WordPress. Your team keeps working the way it always has.",
    benefits: [
      { label: "Keep existing WordPress workflows", note: "No new CMS, no new training required" },
      { label: "22ms TTFB on any shared host", note: "Static delivery works on budget hosting" },
      { label: "No React developers needed", note: "Zero frontend rebuild required" },
      { label: "One plugin, unlimited sites", note: "Consistent delivery across all client accounts" },
    ],
    stat: { value: "10×", label: "faster than standard WordPress rendering" },
  },
  {
    id: "enterprises",
    icon: Building2,
    title: "For enterprises",
    tagline: "Infrastructure modernization at zero migration risk.",
    description:
      "Eliminate WordPress fingerprint exposure across all public endpoints while maintaining compliance requirements, editorial workflows, and zero-downtime operation — no multi-quarter headless rebuild required.",
    benefits: [
      { label: "Ghost Protocol on every response", note: "WP identity hidden at the header level" },
      { label: "Maintain compliance requirements", note: "No data leaves the WordPress environment" },
      { label: "Zero-downtime toggle on/off", note: "Revert in seconds if needed" },
      { label: "Reduce infrastructure costs", note: "Fewer PHP workers = lower server load" },
    ],
    stat: { value: "0", label: "WordPress fingerprints exposed to the internet" },
  },
  {
    id: "publishers",
    icon: Newspaper,
    title: "For publishers",
    tagline: "Handle traffic spikes without scaling servers.",
    description:
      "Static delivery means traffic spikes no longer translate to server overload or slow TTFB. Editorial teams keep their Gutenberg or Elementor workflow — readers get consistent sub-second load times.",
    benefits: [
      { label: "Traffic spikes handled with no extra cost", note: "Static files need no PHP workers" },
      { label: "Dramatically lower hosting costs", note: "No PHP processes burning under load" },
      { label: "Core Web Vitals improvement", note: "LCP 1.2s, CLS 0.02 — both Google green" },
      { label: "Maintain editorial workflows", note: "Publish → live in seconds, as always" },
    ],
    stat: { value: "−68%", label: "improvement in LCP score on live production" },
  },
  {
    id: "developers",
    icon: Code2,
    title: "For developers",
    tagline: "Headless-grade architecture, zero DevOps overhead.",
    description:
      "Get the delivery performance of a fully decoupled headless setup — REST masking, static HTML, CDN-ready headers — without maintaining build pipelines, Node servers, or separate frontend deployments.",
    benefits: [
      { label: "REST, GraphQL, and WP hooks all supported", note: "Full API-first architecture" },
      { label: "No npm, no CI/CD for content updates", note: "Zero build pipeline needed" },
      { label: "JSON diagnostic endpoint built in", note: "Pipe to Datadog, Grafana, or your own dash" },
      { label: "Extend every layer with hooks and filters", note: "Full developer control over delivery" },
    ],
    stat: { value: "Zero", label: "frontend infrastructure to maintain or monitor" },
  },
];

export function UseCases() {
  const [activeId, setActiveId] = useState("agencies");
  const current = useCases.find((u) => u.id === activeId)!;
  const CurrentIcon = current.icon;

  return (
    <section className="bg-surface py-24 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6 max-w-[800px]">
            Built for the teams modernizing WordPress at scale.
          </h2>

          {/* Audience tab selector */}
          <div className="flex flex-wrap gap-2">
            {useCases.map((u) => {
              const TabIcon = u.icon;
              const isActive = activeId === u.id;
              return (
                <button
                  key={u.id}
                  onClick={() => setActiveId(u.id)}
                  className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-brand text-white shadow-sm"
                      : "bg-white border border-border text-text-muted hover:border-brand/40 hover:text-brand"
                  }`}
                >
                  <TabIcon size={14} />
                  {u.title.replace("For ", "")}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Animated panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] rounded-[12px] border border-border bg-white shadow-card overflow-hidden"
          >
            {/* Left: context + stat */}
            <div className="bg-surface p-8 lg:p-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="h-12 w-12 rounded-md bg-white border border-border shadow-sm flex items-center justify-center mb-6"
              >
                <CurrentIcon className="h-6 w-6 text-brand" />
              </motion.div>
              <h3 className="text-[22px] font-semibold text-text-primary leading-snug mb-4">
                {current.tagline}
              </h3>
              <p className="text-[16px] text-text-secondary leading-[1.6]">
                {current.description}
              </p>
              {/* Stat callout */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-8 rounded-[10px] border border-border bg-white p-5 hover:border-brand/30 hover:shadow-md transition-all duration-300"
              >
                <p className="text-[32px] font-bold text-brand tracking-tight">
                  {current.stat.value}
                </p>
                <p className="text-[14px] text-text-muted mt-1">
                  {current.stat.label}
                </p>
              </motion.div>
            </div>

            {/* Right: benefits */}
            <div className="p-8 lg:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted mb-6">
                Key Benefits
              </p>
              <ul className="space-y-5">
                {current.benefits.map((b, idx) => (
                  <motion.li
                    key={b.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 flex-shrink-0 text-brand group-hover:text-brand transition-colors"
                      />
                    </motion.div>
                    <div>
                      <p className="text-[15px] font-semibold text-text-primary group-hover:text-brand transition-colors duration-300">
                        {b.label}
                      </p>
                      <p className="text-[14px] text-text-secondary">{b.note}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border">
                <motion.button
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand hover:text-brand transition-all duration-150"
                >
                  Explore {current.title.toLowerCase()} use cases
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
