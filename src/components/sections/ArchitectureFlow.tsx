"use client";

import { motion } from "motion/react";

export function ArchitectureFlow() {
  return (
    <section id="architecture" className="bg-surface-soft py-24 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Headless architecture without infrastructure complexity.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            Five layers between your editor and your visitor — each one observable, each one configurable, each one optional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center overflow-x-auto py-8"
        >
          <div className="min-w-[800px] w-full max-w-[1024px] relative bg-white border border-border rounded-[12px] p-12 shadow-elevated">
            {/* SVG Diagram connecting the nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="archFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-brand)" />
                  <stop offset="100%" stopColor="var(--color-brand-soft)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 150 120 L 850 120"
                fill="none"
                stroke="url(#archFlow)"
                strokeWidth="3"
                strokeDasharray="700"
                initial={{ strokeDashoffset: 700 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
              />
              <motion.path
                d="M 500 120 L 500 240"
                fill="none"
                stroke="var(--color-brand-soft)"
                strokeWidth="2"
                strokeDasharray="120"
                initial={{ strokeDashoffset: 120 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 1 }}
              />
            </svg>

            <div className="relative z-10 flex justify-between items-start mb-24">
              <div className="w-[180px] bg-white border border-border rounded-md p-4 text-center shadow-sm">
                <div className="font-semibold text-text-primary text-[14px]">WordPress Backend</div>
                <div className="text-text-muted text-[12px] mt-1">(Editor + Builder)</div>
              </div>
              <div className="w-[180px] bg-white border border-border rounded-md p-4 text-center shadow-sm">
                <div className="font-semibold text-text-primary text-[14px]">Nexora Capture Layer</div>
                <div className="text-text-muted text-[12px] mt-1">(HMAC-signed + sanitized)</div>
              </div>
              <div className="w-[180px] bg-white border border-border rounded-md p-4 text-center shadow-sm">
                <div className="font-semibold text-text-primary text-[14px]">Snapshot Storage</div>
                <div className="text-text-muted text-[12px] mt-1">(Static HTML/CSS)</div>
              </div>
              <div className="w-[180px] bg-white border border-border rounded-md p-4 text-center shadow-sm">
                <div className="font-semibold text-text-primary text-[14px]">Delivery Engine</div>
                <div className="text-text-muted text-[12px] mt-1">(Drop-in or proxy)</div>
              </div>
            </div>

            <div className="relative z-10 flex justify-center">
              <div className="w-[240px] bg-white border-2 border-brand rounded-md p-4 text-center shadow-elevated">
                <div className="font-semibold text-text-primary text-[16px]">Visitor Browser</div>
                <div className="text-text-muted text-[12px] mt-1">(SPA navigation)</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
