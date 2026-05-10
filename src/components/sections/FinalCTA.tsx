"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-32 px-6 lg:px-12 border-t border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,var(--color-brand-tint)_0%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-[1280px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Build modern infrastructure on WordPress.
          </h2>
          <p className="mx-auto max-w-[600px] text-[18px] text-text-secondary leading-[1.6] mb-10">
            Nexora Engine is in private access. We're working with a small group of agencies and infrastructure teams ahead of the open release.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <button className="group inline-flex items-center justify-center rounded-md bg-brand px-6 py-3 text-[16px] font-medium text-white shadow-sm hover:bg-brand-bright transition-colors">
              Start Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-border bg-white px-6 py-3 text-[16px] font-medium text-text-primary shadow-sm hover:bg-surface-soft transition-colors">
              Request Early Access
            </button>
          </div>

          <p className="text-[14px] text-text-muted">
            No credit card. No agent on the phone. Toggle to start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
