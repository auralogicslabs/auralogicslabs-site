"use client";

import { motion } from "motion/react";
import { Download, ArrowRight, Stethoscope } from "lucide-react";
import Link from "next/link";

const TEAL = "#13716A";

export function PulseFinalCTA() {
  return (
    <section className="relative py-32 px-8 lg:px-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0E4D4D 0%, #13716A 100%)" }}>
      {/* Atmosphere */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: "rgba(249,115,22,0.18)", transform: "translate(120px,-120px)" }} />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full blur-[120px]" style={{ background: "rgba(31,142,132,0.3)", transform: "translate(-100px,100px)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[size:40px_40px] opacity-[0.04] pointer-events-none" />

      <div className="w-full max-w-[820px] mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex h-16 w-16 items-center justify-center rounded-3xl mb-8"
          style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}
        >
          <Stethoscope className="h-8 w-8 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-white tracking-[-0.045em] leading-[1.0] mb-6"
        >
          Run your first scan today.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[18px] md:text-[20px] text-teal-50/90 font-medium leading-[1.6] max-w-[600px] mx-auto mb-12"
        >
          Install Nexora Pulse, connect Search Console, and within minutes you'll know exactly
          which pages Google is ignoring. and why. Free, forever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="https://wordpress.org/plugins/nexora-pulse/"
            className="rounded-full bg-white px-9 py-4 text-[15px] font-bold shadow-xl hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200 group flex items-center gap-3"
            style={{ color: TEAL }}
          >
            <Download className="h-5 w-5" />
            Get it free on WordPress.org
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/products/nexora-engine"
            className="rounded-full border-2 border-white/30 bg-white/5 px-9 py-4 text-[15px] font-bold text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-3"
          >
            Explore Nexora Engine
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
