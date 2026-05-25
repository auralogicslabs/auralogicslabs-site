"use client";

import { Download, Sliders, Rocket, Zap, ArrowRight } from "lucide-react";
import { FullWidthSection, ScrollReveal } from "@/components/ui/SectionShell";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import Link from "next/link";

const steps = [
  {
    num: "01",
    icon: Download,
    title: "Install",
    desc: "Drop Nexora into WordPress. Any host, any builder — zero migration, zero rebuild required.",
    color: "#60A5FA",
    detail: "One plugin. Works on Apache, Nginx, LiteSpeed and every managed host.",
  },
  {
    num: "02",
    icon: Sliders,
    title: "Activate",
    desc: "Toggle static delivery from the dashboard. Zero configuration. Zero server access needed.",
    color: "#A78BFA",
    detail: "First static snapshot captured within seconds. Editors keep publishing as normal.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Deliver",
    desc: "Pages served at the edge at static speed. Your CMS stays intact — visitors never wait.",
    color: "#F39A09",
    detail: "22ms average TTFB. Dynamic sections, forms and WooCommerce are fully preserved.",
  },
];

export function FeatureTeaser() {
  return (
    <FullWidthSection tone="ink">
        {/* Centered heading — full-width layout, deliberately opposite to ProblemComparison's col-2 */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 lg:mb-20">
            <div
              className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full border border-amber-400/20"
              style={{ background: "rgba(243,154,9,0.1)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F39A09]" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#F39A09]/80">
                The Experience
              </span>
            </div>
            <h2
              className="text-[34px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.06] tracking-[-0.04em] mb-4"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              Install. Activate.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #F39A09 0%, #FCD34D 100%)" }}
              >
                Frontend magic.
              </span>
            </h2>
            <p className="text-[17px] font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.40)" }}>
              No migration. No rebuild. No DevOps — your site transforms in minutes, not months.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 horizontal step cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-14">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div
                  className="relative p-7 md:p-8 rounded-2xl border border-white/[0.07] overflow-hidden group hover:border-white/[0.12] transition-all duration-300"
                  style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)" }}
                >
                  {/* Large step number in background */}
                  <span
                    className="absolute top-3 right-5 text-[72px] font-black leading-none select-none"
                    style={{ color: `${step.color}10` }}
                  >
                    {step.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                    style={{ background: `${step.color}18`, border: `1.5px solid ${step.color}35` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <h4
                    className="text-[20px] md:text-[22px] font-bold mb-2 relative z-10"
                    style={{ color: "rgba(255,255,255,0.92)" }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-[14px] md:text-[15px] leading-relaxed mb-5 relative z-10"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    {step.desc}
                  </p>
                  <p
                    className="text-[12px] leading-relaxed relative z-10 border-t border-white/[0.06] pt-4"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    {step.detail}
                  </p>

                  {/* Step indicator bar */}
                  <div className="mt-5 flex items-center gap-2.5 relative z-10">
                    <span
                      className="text-[9px] font-black uppercase tracking-[0.3em]"
                      style={{ color: `${step.color}90` }}
                    >
                      Step {step.num}
                    </span>
                    <div className="flex-1 h-px" style={{ background: `${step.color}25` }} />
                  </div>

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top left, ${step.color}0A 0%, transparent 60%)` }}
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Large screenshot visual */}
        <ScrollReveal delay={0.2}>
          <ProductScreenshot
            variant="workflow"
            label="your-site.com · Nexora active"
            sublabel="Live workflow screenshot"
            accent="#F39A09"
            parallax={false}
          />
        </ScrollReveal>

        {/* Centered CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products/nexora-engine"
              className="inline-flex items-center gap-2 rounded-full bg-[#F39A09] text-obsidian px-8 py-3.5 text-[14px] font-black hover:bg-[#ffb347] transition-colors group shadow-[0_8px_28px_rgba(243,154,9,0.3)]"
            >
              <Zap className="h-4 w-4" />
              See Nexora Engine
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-8 py-3.5 text-[14px] font-semibold hover:bg-white/10 transition-colors"
            >
              View all products
            </Link>
          </div>
        </ScrollReveal>
    </FullWidthSection>
  );
}
