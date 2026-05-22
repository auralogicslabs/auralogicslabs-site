"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative pt-32 pb-40 px-8 lg:px-24 overflow-hidden bg-obsidian flex justify-center rounded-tl-[40px] rounded-tr-[40px] -mt-10 z-10">

      {/* Architectural grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Deep center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-brand/15 blur-[160px] rounded-[100%] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/8 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="w-full max-w-[1600px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[860px] mx-auto"
        >
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.1] px-5 py-2 rounded-full mb-10">
            <Sparkles className="h-3.5 w-3.5 text-brand-soft" />
            <span className="text-[12px] font-bold text-white/60 uppercase tracking-[0.22em]">Get Started Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-[52px] md:text-[80px] lg:text-[96px] font-extrabold text-white leading-[0.95] tracking-[-0.05em] mb-10">
            Ready to make
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #818CF8 100%)" }}
            >
              the web faster?
            </span>
          </h2>

          {/* Subhead */}
          <p className="text-[18px] md:text-[22px] text-white/45 leading-[1.65] mb-14 font-medium max-w-[640px] mx-auto">
            Start with any of our products today. All plans include a 14-day free trial.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ y: -1 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/products/nexora-engine"
                className="inline-flex w-full items-center justify-center gap-3 rounded-[16px] bg-white text-obsidian px-10 py-5 text-[16px] font-black shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.9)] hover:bg-brand hover:text-white hover:shadow-[0_24px_64px_rgba(26,63,216,0.55)] transition-all duration-300 group"
              >
                Explore Nexora Engine
                <motion.div whileHover={{ x: 2 }}>
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ y: -1 }}
              className="w-full sm:w-auto"
            >
              <a
                href="mailto:hello@auralogicslabs.com?subject=Let's discuss infrastructure"
                className="inline-flex w-full items-center justify-center gap-3 rounded-[16px] border border-white/15 bg-white/[0.06] backdrop-blur-sm px-10 py-5 text-[16px] font-bold text-white hover:bg-white/[0.1] hover:border-white/30 transition-all duration-300 group"
              >
                <Mail className="h-4.5 w-4.5 opacity-60" style={{ width: 18, height: 18 }} />
                Contact Sales
              </a>
            </motion.div>
          </div>

          {/* Bottom message */}
          <p className="text-white/40 text-sm">
            All products are trusted by leading agencies, enterprises, and developers worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
