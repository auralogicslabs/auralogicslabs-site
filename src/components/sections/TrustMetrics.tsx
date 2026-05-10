"use client";

import { motion } from "motion/react";
import { trustMetrics } from "@/data/metrics";

export function TrustMetrics() {
  return (
    <section className="bg-surface py-12 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-border rounded-[12px] p-6 shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="font-mono text-[24px] font-medium text-text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-[14px] text-text-muted leading-[1.5]">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
