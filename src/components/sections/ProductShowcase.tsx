"use client";

import { ArrowRight, Zap, ImageIcon, BarChart3, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import {
  FullWidthSection,
  SectionHeader,
  ScrollReveal,
  InnerCard,
} from "@/components/ui/SectionShell";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";

const products = [
  {
    name: "Nexora Engine",
    tagline: "Adaptive runtime delivery",
    href: "/products/nexora-engine",
    icon: Zap,
    variant: "engine" as const,
    accent: "#1A3FD8",
    status: "Live",
    span: "lg:col-span-2 lg:row-span-2",
    featured: true,
    headline: "Static-speed WordPress without the rebuild.",
  },
  {
    name: "Nexora Media",
    tagline: "Edge media optimization",
    href: "/products/nexora-media",
    icon: ImageIcon,
    variant: "media" as const,
    accent: "#7C3AED",
    status: "Live",
    span: "",
    featured: false,
    headline: "Faster images, globally.",
  },
  {
    name: "Insights Hub",
    tagline: "Performance intelligence",
    href: "/products/nexora-insights",
    icon: BarChart3,
    variant: "insights" as const,
    accent: "#0D9488",
    status: "Soon",
    span: "",
    featured: false,
    muted: true,
    headline: "Monitor what matters.",
  },
  {
    name: "Auralogics Portal",
    tagline: "Fleet command center",
    href: "/portal",
    icon: LayoutDashboard,
    variant: "portal" as const,
    accent: "#F39A09",
    status: "Live",
    span: "lg:col-span-2",
    featured: false,
    headline: "Manage every site in one place.",
  },
];

export function ProductShowcase() {
  return (
    <FullWidthSection id="products" tone="white">
      <SectionHeader
        align="center"
        eyebrow="The Platform"
        title="Everything your WordPress stack needs."
        description="Four products, one ecosystem — runtime, media, intelligence, and control designed to work together."
        className="mb-14 md:mb-20"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {products.map((p, i) => {
          const Icon = p.icon;
          return (
            <ScrollReveal key={p.name} delay={i * 0.08} className={p.span}>
              <Link href={p.href} className="group block h-full">
                <InnerCard
                  accent={p.accent}
                  className={`h-full flex flex-col transition-all duration-300 hover:shadow-[0_24px_64px_rgba(2,6,23,0.1)] hover:-translate-y-0.5 ${p.muted ? "opacity-90" : ""}`}
                >
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${p.accent}12`, border: `1px solid ${p.accent}25` }}
                        >
                          <Icon className="h-5 w-5" style={{ color: p.accent }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-0.5">
                            <h3 className="text-[18px] md:text-[20px] font-extrabold text-obsidian tracking-tight group-hover:text-brand transition-colors">
                              {p.name}
                            </h3>
                            <span
                              className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                              style={{
                                color: p.status === "Soon" ? "#D97706" : p.accent,
                                background: p.status === "Soon" ? "#FEF3C7" : `${p.accent}12`,
                              }}
                            >
                              {p.status}
                            </span>
                          </div>
                          <p className="text-[12px] font-bold uppercase tracking-wider text-text-muted">{p.tagline}</p>
                        </div>
                      </div>
                      <ArrowRight
                        className="h-5 w-5 flex-shrink-0 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                        style={{ color: p.accent }}
                      />
                    </div>

                    <p className="text-[15px] md:text-[16px] text-text-secondary font-medium leading-relaxed mb-5 flex-1">
                      {p.headline}
                    </p>

                    <ProductScreenshot
                      variant={p.variant}
                      label={`portal.auralogicslabs.com · ${p.name}`}
                      sublabel={`${p.name} preview`}
                      accent={p.accent}
                      parallax={false}
                      className={p.featured ? "" : "scale-[0.98] origin-top"}
                    />
                  </div>
                </InnerCard>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </FullWidthSection>
  );
}
