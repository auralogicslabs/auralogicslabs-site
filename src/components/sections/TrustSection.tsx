"use client";

import {
  Users, ShoppingCart, Network, LayoutTemplate, Building2, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { FullWidthSection, ScrollReveal, InnerCard } from "@/components/ui/SectionShell";

const audiences = [
  { icon: Users, title: "Agencies", desc: "Deliver static-speed performance to every client site without touching their stack or retraining their editors.", href: "/products/nexora-engine", color: "#1A3FD8" },
  { icon: ShoppingCart, title: "WooCommerce", desc: "Product pages load in 22ms. Cart, checkout, and dynamic pricing all work exactly as before. No rewrites needed.", href: "/products/nexora-engine", color: "#059669" },
  { icon: Network, title: "Multisite", desc: "Manage performance, SEO health, and image optimization across every site in your network from one command center.", href: "/portal", color: "#7C3AED" },
  { icon: LayoutTemplate, title: "Elementor", desc: "Every template, widget, and global style stays intact. Flip one toggle and your Elementor site serves at static speed.", href: "/products/nexora-engine", color: "#F39A09" },
  { icon: Building2, title: "Enterprise", desc: "Infrastructure-grade performance without the infrastructure project. No DevOps overhead, no editorial disruption.", href: "mailto:hello@auralogicslabs.com?subject=Enterprise", color: "#0D9488" },
];

const stack = ["Apache", "Nginx", "LiteSpeed", "IIS", "OpenLiteSpeed", "cPanel"];

export function TrustSection() {
  return (
    <FullWidthSection tone="white" className="overflow-hidden">
      {/* Centered heading. no screenshot, no 2-col; text is the focus */}
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-5 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-brand">Built For</span>
          </div>
          <h2
            className="text-[34px] md:text-[48px] font-extrabold leading-[1.06] tracking-[-0.04em] mb-4"
            style={{ color: "#0D1B3E" }}
          >
            Works the way{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #1A3FD8 0%, #6366F1 100%)" }}
            >
              your team already builds.
            </span>
          </h2>
          <p className="text-[17px] text-slate-500 font-medium leading-relaxed">
            No migration projects. No new tools to learn. Drop Nexora into your existing WordPress stack and it just works, for every team type and every site setup.
          </p>
        </div>
      </ScrollReveal>

      {/* Audience cards */}
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
                <h3
                  className="text-[15px] font-bold mb-1.5"
                  style={{ color: "#0D1B3E" }}
                >
                  {a.title}
                </h3>
                <p className="text-[13px] text-slate-500 leading-relaxed mb-3">{a.desc}</p>
                <span
                  className="inline-flex items-center gap-1 text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: a.color }}
                >
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

      {/* Stack compatibility */}
      <ScrollReveal delay={0.2}>
        <InnerCard className="px-6 py-8 text-center">
          <p
            className="text-[11px] font-black uppercase tracking-[0.28em] mb-5"
            style={{ color: "#94A3B8" }}
          >
            Works with your stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold bg-[#F4F7FB] border border-slate-200/80"
                style={{ color: "#475569" }}
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
