"use client";

import { Server, LayoutTemplate, Zap, XCircle, AlertCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FullWidthSection, SectionHeader, ScrollReveal, InnerCard } from "@/components/ui/SectionShell";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";

const paths = [
  {
    title: "Traditional WordPress",
    label: "Legacy path",
    icon: Server,
    bulletIcon: AlertCircle,
    bulletColor: "text-amber",
    bullets: ["PHP on every request", "Fragile optimization stacks", "Exposed identity headers"],
  },
  {
    title: "Full Headless Rebuild",
    label: "High-cost path",
    icon: LayoutTemplate,
    bulletIcon: XCircle,
    bulletColor: "text-text-muted",
    bullets: ["Months of engineering", "Loses builder workflows", "Ongoing DevOps burden"],
  },
  {
    title: "Auralogics Platform",
    label: "Intelligent path",
    icon: Zap,
    bulletIcon: CheckCircle2,
    bulletColor: "text-brand",
    recommended: true,
    bullets: ["Static-speed, zero rebuild", "One-click activation", "WooCommerce preserved"],
  },
];

export function ProblemComparison() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <FullWidthSection tone="soft">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-16 md:mb-20">
        <SectionHeader
          eyebrow="Why We Exist"
          title="WordPress deserves modern infrastructure."
          description="Most teams are stuck choosing between slow legacy stacks or expensive headless rebuilds. We built a third path."
        />
        <ScrollReveal direction="right">
          <ProductScreenshot
            variant="problem"
            label="legacy vs platform"
            sublabel="Architecture comparison visual"
            accent="#64748B"
            parallax={false}
          />
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {paths.map((col, i) => {
          const Icon = col.icon;
          const BulletIcon = col.bulletIcon;
          const isActive = hovered === i;
          const dimmed = hovered !== null && !isActive;

          return (
            <ScrollReveal key={col.title} delay={i * 0.08}>
              <div
                className={`h-full transition-all duration-300 ${isActive ? "-translate-y-1" : ""} ${dimmed ? "opacity-55" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <InnerCard
                  accent={col.recommended ? "#1A3FD8" : undefined}
                  className={`h-full ${isActive ? "shadow-lg" : ""}`}
                >
                <div className={`p-7 md:p-8 h-full flex flex-col ${col.recommended ? "bg-[#050B25] text-white rounded-[24px] md:rounded-[32px]" : ""}`}>
                  {col.recommended && (
                    <div className="flex items-center gap-1.5 bg-[#F39A09] text-obsidian px-3 py-1 rounded-full w-fit mb-5 text-[10px] font-black uppercase tracking-widest">
                      <Sparkles className="h-3 w-3" />
                      Recommended
                    </div>
                  )}

                  <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-5 ${col.recommended ? "bg-brand/20 border border-brand/30" : "bg-surface-soft border border-border"}`}
                  >
                    <Icon className={`h-6 w-6 ${col.recommended ? "text-brand-soft" : "text-text-muted"}`} />
                  </div>

                  <span className={`text-[10px] font-black uppercase tracking-[0.28em] mb-2 block ${col.recommended ? "text-brand-soft" : "text-text-muted"}`}>
                    {col.label}
                  </span>
                  <h3 className={`text-[20px] font-bold mb-6 tracking-tight ${col.recommended ? "text-white" : "text-obsidian"}`}>
                    {col.title}
                  </h3>

                  <ul className="space-y-3.5 mb-8 flex-1">
                    {col.bullets.map((bullet) => (
                      <li key={bullet} className={`flex items-start gap-3 text-[14px] font-medium ${col.recommended ? "text-white/75" : "text-text-secondary"}`}>
                        <BulletIcon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${col.recommended ? "text-brand-soft" : col.bulletColor}`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {col.recommended && (
                    <Link
                      href="/products/nexora-engine"
                      className="inline-flex items-center gap-2 rounded-full bg-[#F39A09] text-obsidian px-6 py-3 text-[13px] font-black hover:bg-[#ffb347] transition-colors w-fit"
                    >
                      Explore Platform
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </InnerCard>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </FullWidthSection>
  );
}
