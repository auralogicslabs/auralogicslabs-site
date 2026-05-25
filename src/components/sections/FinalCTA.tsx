"use client";

import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { FullWidthSection, ScrollReveal } from "@/components/ui/SectionShell";

export function FinalCTA() {
  return (
    <FullWidthSection
      tone="brand"
      compact
      className="relative overflow-hidden"
      innerClassName="relative z-10 text-center py-20 md:py-24"
    >
      {/* Amber accent glow — reference-style */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#F39A09]/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-white/10 blur-[80px] rounded-full pointer-events-none" />

      <ScrollReveal>
        <span className="inline-block text-[11px] font-black uppercase tracking-[0.32em] text-white/70 mb-5">
          Get Started
        </span>
        <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-extrabold text-white leading-[1.04] tracking-[-0.04em] mb-5 max-w-[720px] mx-auto">
          Ready to modernize your WordPress infrastructure?
        </h2>
        <p className="text-[17px] text-white/65 leading-relaxed mb-10 font-medium max-w-[460px] mx-auto">
          Explore the platform or talk to our team about your stack.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-[#F39A09] text-obsidian px-9 py-4 text-[15px] font-black hover:bg-[#ffb347] transition-colors group"
          >
            View Products
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="mailto:hello@auralogicslabs.com?subject=Infrastructure inquiry"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 text-white px-9 py-4 text-[15px] font-bold hover:bg-white/15 transition-colors"
          >
            <Mail className="h-4 w-4 opacity-70" />
            Talk to us
          </a>
        </div>
      </ScrollReveal>
    </FullWidthSection>
  );
}
