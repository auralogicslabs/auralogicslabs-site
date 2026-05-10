"use client";

import { motion } from "motion/react";
import { platformVision } from "@/data/metrics";
import { ArrowRight } from "lucide-react";

export function PlatformVision() {
  return (
    <section id="vision" className="bg-surface-soft py-24 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            The roadmap to full infrastructure intelligence.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            Nexora Engine is the foundation. The platform expands from delivery into observability, security, and intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {platformVision.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-border rounded-[12px] p-6 shadow-card flex flex-col justify-between h-[140px]"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-[18px] font-semibold text-text-primary">{item.title}</h3>
                <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-[11px] font-semibold text-text-muted">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="text-[16px] text-text-secondary mb-6">Enterprise plans available on request.</p>
          <button className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-[16px] font-medium text-text-primary shadow-sm hover:bg-surface hover:text-text-primary transition-colors">
            Request Early Access
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
