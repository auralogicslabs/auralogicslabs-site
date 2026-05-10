"use client";

import { motion } from "motion/react";

export function WhyNexora() {
  return (
    <section className="bg-bg py-16 lg:py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-[32px] md:text-[40px] font-semibold text-text-primary tracking-[-0.02em] mb-6">
            Modern WordPress shouldn't require rebuilding everything.
          </h2>
          <div className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6] space-y-6">
            <p>
              WordPress runs 43% of the web. It also renders every page through PHP, exposes its identity in every response header, and forces teams choosing modern delivery into a binary: rebuild the entire frontend in React, or accept the limitations.
            </p>
            <p>
              Nexora Engine collapses that choice. It captures your existing WordPress output as static snapshots, serves them through a server-agnostic delivery layer, and removes the WordPress fingerprint — without touching a single template, theme, or workflow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
