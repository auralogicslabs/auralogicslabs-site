"use client";

import { motion } from "motion/react";
import { ArrowRight, Cloud, Shield, BarChart3, Activity, Brain, Network, Plus } from "lucide-react";
import Link from "next/link";

const roadmapPhases = [
  {
    quarter: "Q3 2026",
    status: "COMING NEXT",
    isCurrent: true,
    items: [
      {
        icon: Cloud,
        title: "Nexora Cloud",
        description:
          "Managed infrastructure delivery platform with a global edge network — zero self-hosting required.",
      },
      {
        icon: Shield,
        title: "Nexora Shield",
        description:
          "Enterprise WAF, DDoS protection, and threat-intelligence layer integrated into the delivery stack.",
      },
    ],
  },
  {
    quarter: "Q4 2026",
    status: "IN DESIGN",
    isCurrent: false,
    items: [
      {
        icon: BarChart3,
        title: "Nexora Analytics",
        description:
          "Real-time performance analytics, visitor insights, and delivery intelligence dashboard.",
      },
      {
        icon: Activity,
        title: "Infrastructure Monitoring",
        description:
          "Configurable alerts, full access logs, and performance trend tracking across all snapshots.",
      },
    ],
  },
  {
    quarter: "2027",
    status: "LONG TERM",
    isCurrent: false,
    items: [
      {
        icon: Brain,
        title: "AI Intelligence Layer",
        description:
          "ML-powered predictive caching, auto-optimization, and infrastructure anomaly detection.",
      },
      {
        icon: Network,
        title: "Multisite Intelligence",
        description:
          "Centralized management and cross-site performance intelligence for Enterprise networks.",
      },
    ],
  },
];

export function PlatformVision() {
  return (
    <section
      id="vision"
      className="bg-white py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden"
    >
      {/* Background Architectural Traits */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[12px] font-bold uppercase tracking-wider rounded-full mb-6">
            Future Manifest
          </span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] leading-tight mb-8">
            The roadmap to full <br className="hidden md:block" /> infrastructure intelligence.
          </h2>
          <p className="max-w-[720px] text-[18px] text-text-secondary leading-[1.6] font-medium">
            Nexora Engine is the foundation. The platform expands from core delivery
            into global observability, edge security, and AI-driven intelligence.
          </p>
        </motion.div>

        {/* Timeline Stack */}
        <div className="space-y-12">
          {roadmapPhases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: phaseIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Timeline Indicator Column */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-start gap-4 pt-2">
                <div className={`px-4 py-2 rounded-xl border font-mono text-[13px] font-bold tracking-wider ${
                  phase.isCurrent 
                    ? "bg-obsidian text-white border-obsidian shadow-xl" 
                    : "bg-surface-soft text-text-muted border-border"
                }`}>
                  {phase.quarter}
                </div>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${phase.isCurrent ? "bg-brand animate-pulse" : "bg-border-strong"}`} />
                  <span className="text-[11px] font-bold text-text-muted uppercase tracking-[0.2em]">{phase.status}</span>
                </div>
              </div>

              {/* Phase items Column */}
              <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8">
                {phase.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -8 }}
                      className="bg-white border border-border rounded-[32px] p-8 lg:p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                    >
                      <Plus className="absolute top-6 right-6 h-4 w-4 text-border-strong opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex items-start gap-6 mb-8">
                        <div className="h-14 w-14 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                          <Icon className="h-6 w-6 text-brand group-hover:text-white transition-colors duration-500" />
                        </div>
                        <div>
                          <h3 className="text-[22px] font-bold text-obsidian mb-2 tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-[15px] text-text-secondary leading-[1.6] font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[48px] bg-obsidian text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/20 blur-[100px] -z-10" />
          
          <div>
            <h3 className="text-[32px] font-bold mb-4 tracking-tight">Ready for enterprise scale?</h3>
            <p className="text-white/60 text-[18px] font-medium max-w-[500px]">Our engineering team provides custom infrastructure design for high-traffic networks.</p>
          </div>
          
          <Link href="mailto:hello@auralogicslabs.com" className="whitespace-nowrap inline-flex items-center justify-center rounded-2xl bg-white px-10 py-5 text-[18px] font-bold text-obsidian shadow-xl hover:-translate-y-1 transition-all duration-300">
            Request Early Access
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
