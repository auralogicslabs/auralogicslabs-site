"use client";

import { Download, Sliders, Rocket, Zap, ArrowRight, Check } from "lucide-react";
import { FullWidthSection, ScrollReveal } from "@/components/ui/SectionShell";
import Link from "next/link";

const steps = [
  {
    num: "01",
    icon: Download,
    title: "Install",
    desc: "Add any Nexora product to WordPress like a normal plugin: any host, any builder, zero migration.",
    color: "#1A3FD8",
    detail: "Works on Apache, Nginx, LiteSpeed, IIS and every managed host. No server access required.",
  },
  {
    num: "02",
    icon: Sliders,
    title: "Activate",
    desc: "Flip it on from the dashboard. Connect your own Google keys where needed, with no configuration to wrestle with.",
    color: "#7C3AED",
    detail: "Engine captures its first snapshot in seconds; Pulse runs its first scan; editors keep publishing as normal.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "It just runs",
    desc: "Speed, SEO intelligence, and media optimization work quietly in the background while your CMS stays intact.",
    color: "#F39A09",
    detail: "22ms TTFB, real indexing diagnostics, and ↓70% image payload. WooCommerce and forms fully preserved.",
  },
];

export function FeatureTeaser() {
  return (
    <FullWidthSection tone="soft" className="overflow-hidden">
        {/* Centered heading */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F39A09]" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#B45309]">
                How It Works
              </span>
            </div>
            <h2
              className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.06] tracking-[-0.04em] mb-4"
              style={{ color: "#0D1B3E" }}
            >
              Three steps.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #F39A09 0%, #D97706 100%)" }}
              >
                Then it runs itself.
              </span>
            </h2>
            <p className="text-[17px] font-medium leading-relaxed text-text-secondary">
              Every Nexora product installs like a normal plugin. no migration, no rebuild, no DevOps. Your site transforms in minutes, not months.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 horizontal step cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-14">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="relative h-full p-7 md:p-8 rounded-2xl border border-border bg-white overflow-hidden group hover:border-border-strong hover:shadow-[0_24px_60px_rgba(2,6,23,0.08)] hover:-translate-y-1 transition-all duration-300">
                  {/* Large step number in background */}
                  <span
                    className="absolute top-3 right-5 text-[72px] font-black leading-none select-none"
                    style={{ color: `${step.color}12` }}
                  >
                    {step.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: `${step.color}14`, border: `1.5px solid ${step.color}30` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <h4 className="text-[20px] md:text-[22px] font-bold mb-2 relative z-10 text-obsidian">
                    {step.title}
                  </h4>
                  <p className="text-[14px] md:text-[15px] leading-relaxed mb-5 relative z-10 text-text-secondary">
                    {step.desc}
                  </p>
                  <p className="text-[12px] leading-relaxed relative z-10 border-t border-border pt-4 text-text-muted">
                    {step.detail}
                  </p>

                  {/* Step indicator bar */}
                  <div className="mt-5 flex items-center gap-2.5 relative z-10">
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.3em]"
                      style={{ color: step.color }}
                    >
                      Step {step.num}
                    </span>
                    <div className="flex-1 h-px" style={{ background: `${step.color}30` }} />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Reassurance strip. what stays untouched */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl md:rounded-3xl border border-border bg-white shadow-[0_8px_40px_rgba(2,6,23,0.05)] px-6 py-6 md:px-10 md:py-8 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="flex-shrink-0">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#B45309] mb-1.5">Nothing to relearn</p>
              <p className="text-[18px] md:text-[20px] font-extrabold text-obsidian leading-tight max-w-[280px]">
                Your stack stays exactly as it is.
              </p>
            </div>
            <div className="hidden lg:block w-px self-stretch bg-border" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
              {[
                "Elementor & Gutenberg",
                "WooCommerce checkout",
                "Your plugins & theme",
                "Editorial workflow",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 bg-emerald-100 border border-emerald-300">
                    <Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />
                  </span>
                  <span className="text-[13px] font-semibold text-text-secondary leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Centered CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-[#F39A09] text-obsidian px-8 py-3.5 text-[14px] font-black hover:bg-[#ffb347] transition-colors group shadow-[0_8px_28px_rgba(243,154,9,0.3)]"
            >
              <Zap className="h-4 w-4" />
              Explore the platform
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/products/nexora-engine"
              className="inline-flex items-center gap-2 rounded-full border-2 border-obsidian/10 bg-white text-obsidian px-8 py-3.5 text-[14px] font-bold hover:border-brand hover:text-brand transition-colors"
            >
              Start with Nexora Engine
            </Link>
          </div>
        </ScrollReveal>
    </FullWidthSection>
  );
}
