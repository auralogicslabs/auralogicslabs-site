"use client";

import {
  Users, ShoppingCart, Network, LayoutTemplate, Building2, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { FullWidthSection, SectionHeader, ScrollReveal, InnerCard } from "@/components/ui/SectionShell";
import { ProductScreenshot } from "@/components/ui/ProductScreenshot";

const audiences = [
  { icon: Users, title: "Agencies", desc: "Ship modern delivery across every client.", href: "/products/nexora-engine", color: "#1A3FD8" },
  { icon: ShoppingCart, title: "WooCommerce", desc: "Instant product pages, dynamic checkout.", href: "/products/nexora-engine", color: "#059669" },
  { icon: Network, title: "Multisite", desc: "Orchestrate your entire network.", href: "/portal", color: "#7C3AED" },
  { icon: LayoutTemplate, title: "Elementor", desc: "Keep your builder. Gain static speed.", href: "/products/nexora-engine", color: "#F39A09" },
  { icon: Building2, title: "Enterprise", desc: "Modernize without migration projects.", href: "mailto:hello@auralogicslabs.com?subject=Enterprise", color: "#0D9488" },
];

const stack = ["Apache", "Nginx", "LiteSpeed", "IIS", "OpenLiteSpeed", "cPanel"];

export function TrustSection() {
  return (
    <FullWidthSection tone="white">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-16">
        <SectionHeader
          eyebrow="Built For"
          title="Teams modernizing WordPress at scale."
          description="Agencies, stores, publishers, and enterprise — infrastructure that adapts to how you already work."
        />
        <ScrollReveal direction="right">
          <ProductScreenshot
            variant="portal"
            label="portal.auralogicslabs.com · Fleet"
            sublabel="Fleet management screenshot"
            accent="#1A3FD8"
            parallax={false}
          />
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-14">
        {audiences.map((a, i) => {
          const Icon = a.icon;
          const inner = (
            <ScrollReveal delay={i * 0.06} className="h-full">
              <InnerCard accent={a.color} className="h-full p-5 group hover:-translate-y-0.5 transition-transform duration-300">
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${a.color}12`, border: `1px solid ${a.color}25` }}
                >
                  <Icon className="h-[18px] w-[18px]" style={{ color: a.color }} />
                </div>
                <h3 className="text-[15px] font-bold text-obsidian mb-1.5">{a.title}</h3>
                <p className="text-[13px] text-text-secondary leading-relaxed mb-3">{a.desc}</p>
                <span className="inline-flex items-center gap-1 text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: a.color }}>
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </InnerCard>
            </ScrollReveal>
          );

          return a.href.startsWith("mailto:") ? (
            <a key={a.title} href={a.href} className="block h-full">{inner}</a>
          ) : (
            <Link key={a.title} href={a.href} className="block h-full">{inner}</Link>
          );
        })}
      </div>

      <ScrollReveal delay={0.2}>
        <InnerCard className="px-6 py-8 text-center">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-text-muted mb-5">Works with your stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold text-text-secondary bg-[#F4F7FB] border border-border/60"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {s}
              </span>
            ))}
          </div>
        </InnerCard>
      </ScrollReveal>
    </FullWidthSection>
  );
}
