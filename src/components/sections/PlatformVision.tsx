"use client";

import { motion } from "motion/react";
import { ArrowRight, Cloud, Shield, BarChart3, Activity, Brain, Network } from "lucide-react";

const roadmapPhases = [
  {
    quarter: "Q3 2026",
    status: "Coming next",
    dotClass: "bg-brand",
    labelClass: "text-brand",
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
    status: "In design",
    dotClass: "bg-border-strong",
    labelClass: "text-text-muted",
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
    status: "On the horizon",
    dotClass: "bg-border",
    labelClass: "text-text-muted",
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
          "Centralized management and cross-site performance intelligence for WordPress multisite networks.",
      },
    ],
  },
];

export function PlatformVision() {
  return (
    <section
      id="vision"
      className="bg-surface-soft py-24 px-6 lg:px-12 border-y border-border"
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            The roadmap to full infrastructure intelligence.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            Nexora Engine is the foundation. The platform expands from delivery
            into observability, security, and intelligence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-14">
          {roadmapPhases.map((phase, phaseIndex) => (
            <motion.div
              key={phase.quarter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: phaseIndex * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-12"
            >
              {/* Phase label */}
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:pt-1">
                <div
                  className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${phase.dotClass}`}
                />
                <div>
                  <p className={`text-[14px] font-bold ${phase.labelClass}`}>
                    {phase.quarter}
                  </p>
                  <p className="text-[12px] text-text-muted">{phase.status}</p>
                </div>
              </div>

              {/* Phase items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {phase.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: phaseIndex * 0.08 + i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="bg-white border border-border rounded-[12px] p-6 shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-9 w-9 rounded-md bg-surface border border-border flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-brand" />
                        </div>
                        <h3 className="text-[16px] font-semibold text-text-primary">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[14px] text-text-secondary leading-[1.6]">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <p className="text-[16px] text-text-secondary mb-6">
            Enterprise plans available on request.
          </p>
          <button className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-[16px] font-medium text-text-primary shadow-sm hover:bg-surface hover:text-brand transition-colors">
            Request Early Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
