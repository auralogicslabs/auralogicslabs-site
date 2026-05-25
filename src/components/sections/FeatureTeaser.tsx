"use client";

import { Download, Sliders, Rocket, Zap, ArrowRight } from "lucide-react";
import { FullWidthSection, SectionHeader, ScrollReveal, SectionCurve } from "@/components/ui/SectionShell";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";
import Link from "next/link";

const steps = [
  { num: "01", icon: Download, title: "Install", desc: "Drop Nexora into WordPress. Any host, any builder.", color: "#60A5FA" },
  { num: "02", icon: Sliders, title: "Activate", desc: "Toggle static delivery. Zero configuration required.", color: "#A78BFA" },
  { num: "03", icon: Rocket, title: "Deliver", desc: "Pages served at the edge. Editors keep working.", color: "#F39A09" },
];

export function FeatureTeaser() {
  return (
    <>
      <SectionCurve from="soft" to="dark" />
      <FullWidthSection tone="dark">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <SectionHeader
              dark
              eyebrow="The Experience"
              title={
                <>
                  Install. Activate.{" "}
                  <span className="text-[#F39A09]">Frontend magic.</span>
                </>
              }
              description="No migration. No rebuild. No DevOps — your site transforms in minutes, not months."
              className="mb-12"
            />

            <div className="space-y-0 relative">
              <div className="absolute left-[27px] top-8 bottom-8 w-px bg-white/10 hidden sm:block" />

              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal key={step.num} delay={i * 0.1}>
                    <div className="flex gap-5 py-5 border-b border-white/[0.06] last:border-0">
                      <div
                        className="h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 font-black text-sm relative z-10"
                        style={{ background: `${step.color}18`, color: step.color, border: `1.5px solid ${step.color}35` }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-4 w-4" style={{ color: step.color }} />
                          <h4 className="text-[18px] font-bold text-white">{step.title}</h4>
                        </div>
                        <p className="text-[15px] text-white/45 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.3} className="mt-10">
              <Link
                href="/products/nexora-engine"
                className="inline-flex items-center gap-2 rounded-full bg-[#F39A09] text-obsidian px-7 py-3.5 text-[15px] font-black hover:bg-[#ffb347] transition-colors group"
              >
                <Zap className="h-4 w-4" />
                See Nexora Engine
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.15}>
            <ProductScreenshot
              variant="workflow"
              label="your-site.com · Nexora active"
              sublabel="Workflow screenshot"
              accent="#F39A09"
              parallax={false}
            />
          </ScrollReveal>
        </div>
      </FullWidthSection>
      <SectionCurve from="dark" to="white" />
    </>
  );
}
