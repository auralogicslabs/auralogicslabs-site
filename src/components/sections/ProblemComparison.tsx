"use client";

import { Server, LayoutTemplate, Zap, XCircle, AlertCircle, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FullWidthSection, ScrollReveal, InnerCard } from "@/components/ui/SectionShell";

const paths = [
  {
    title: "Traditional WordPress",
    label: "Legacy path",
    icon: Server,
    bulletIcon: AlertCircle,
    bullets: ["PHP on every request", "Fragile optimization stacks", "Exposed identity headers"],
    accent: "#F59E0B",
  },
  {
    title: "Full Headless Rebuild",
    label: "High-cost path",
    icon: LayoutTemplate,
    bulletIcon: XCircle,
    bullets: ["Months of engineering", "Loses builder workflows", "Ongoing DevOps burden"],
    accent: "#94A3B8",
  },
  {
    title: "Auralogics Platform",
    label: "Intelligent path",
    icon: Zap,
    bulletIcon: CheckCircle2,
    recommended: true,
    bullets: ["Static-speed, zero rebuild", "One-click activation", "WooCommerce preserved"],
    accent: "#1A3FD8",
  },
];

export function ProblemComparison() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <FullWidthSection tone="soft" className="overflow-hidden">
      {/* Centered heading. deliberately different from FeatureTeaser's 2-col */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-brand">
              Why We Exist
            </span>
          </div>
          <h2
            className="text-[34px] md:text-[48px] font-extrabold leading-[1.06] tracking-[-0.04em] mb-4"
            style={{ color: "#0D1B3E" }}
          >
            Slow WordPress or a full rebuild.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3FD8 0%, #6366F1 100%)" }}
            >
              Neither is the answer.
            </span>
          </h2>
          <p className="text-[17px] text-slate-500 font-medium leading-relaxed">
            Every team hits the same wall. Either your PHP stack is too slow, or going headless means months of rebuilding things that already work. We built a way around both.
          </p>
        </div>
      </ScrollReveal>

      {/* Comparison cards */}
      <div className="grid md:grid-cols-3 gap-5">
        {paths.map((col, i) => {
          const Icon = col.icon;
          const BulletIcon = col.bulletIcon;
          const isActive = hovered === i;
          const dimmed = hovered !== null && !isActive;

          return (
            <ScrollReveal key={col.title} delay={i * 0.08}>
              <div
                className={`h-full transition-all duration-300 ${isActive ? "-translate-y-1.5" : ""} ${dimmed ? "opacity-50" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <InnerCard
                  accent={col.recommended ? "#1A3FD8" : undefined}
                  className={`h-full ${isActive ? "shadow-lg" : ""}`}
                >
                  <div
                    className={`p-7 md:p-8 h-full flex flex-col ${
                      col.recommended ? "rounded-[24px] md:rounded-[32px]" : ""
                    }`}
                    style={
                      col.recommended
                        ? { background: "linear-gradient(145deg, #060D24 0%, #0A1535 100%)" }
                        : {}
                    }
                  >
                    {col.recommended && (
                      <div className="flex items-center gap-1.5 bg-[#F39A09] text-obsidian px-3 py-1 rounded-full w-fit mb-5 text-[10px] font-black uppercase tracking-widest">
                        <Sparkles className="h-3 w-3" />
                        Recommended
                      </div>
                    )}

                    <div
                      className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-5 ${
                        col.recommended ? "" : "bg-surface-soft border border-border"
                      }`}
                      style={
                        col.recommended
                          ? { background: "rgba(26,63,216,0.2)", border: "1px solid rgba(26,63,216,0.3)" }
                          : {}
                      }
                    >
                      <Icon
                        className="h-6 w-6"
                        style={{ color: col.recommended ? "#60A5FA" : col.accent }}
                      />
                    </div>

                    <span
                      className="text-[10px] font-black uppercase tracking-[0.28em] mb-2 block"
                      style={{ color: col.recommended ? "#93C5FD" : "#94A3B8" }}
                    >
                      {col.label}
                    </span>
                    <h3
                      className="text-[20px] font-bold mb-6 tracking-tight"
                      style={{ color: col.recommended ? "rgba(255,255,255,0.92)" : "#0D1B3E" }}
                    >
                      {col.title}
                    </h3>

                    <ul className="space-y-3.5 mb-8 flex-1">
                      {col.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-[14px] font-medium"
                          style={{ color: col.recommended ? "rgba(255,255,255,0.65)" : "#64748B" }}
                        >
                          <BulletIcon
                            className="h-4 w-4 mt-0.5 flex-shrink-0"
                            style={{
                              color: col.recommended
                                ? "#60A5FA"
                                : i === 0
                                ? "#F59E0B"
                                : "#94A3B8",
                            }}
                          />
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
