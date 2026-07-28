"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Zap, Stethoscope, ImageIcon, LayoutDashboard, ArrowRight } from "lucide-react";
import { siteContainerClass } from "@/lib/site-layout";

const pillars = [
  {
    id: "deliver",
    label: "Deliver",
    headline: "Static-speed WordPress without a rebuild.",
    items: [
      { name: "Nexora Engine", href: "/products/nexora-engine", icon: Zap, accent: "#1A3FD8" },
      { name: "Nexora Architect", href: "/products/nexora-architect", icon: LayoutDashboard, accent: "#7C3AED" },
    ],
  },
  {
    id: "optimize",
    label: "Optimize",
    headline: "SEO and media performance in one operating layer.",
    items: [
      { name: "Nexora Pulse", href: "/products/nexora-pulse", icon: Stethoscope, accent: "#13716A" },
      { name: "Nexora Media", href: "/products/nexora-media", icon: ImageIcon, accent: "#7C3AED" },
    ],
  },
  {
    id: "manage",
    label: "Manage",
    headline: "Fleet visibility, downloads, and support in one place.",
    items: [
      { name: "Downloads", href: "/downloads", icon: LayoutDashboard, accent: "#1A3FD8" },
      { name: "Support", href: "/support", icon: Stethoscope, accent: "#059669" },
    ],
  },
];

export function SuitePillars() {
  return (
    <section className="border-b border-border bg-white py-16 md:py-20">
      <div className={siteContainerClass}>
        <div className="mb-10 md:mb-12 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-black uppercase tracking-[0.28em] text-brand">Create · Optimize · Manage</span>
          <h2 className="mt-4 text-[30px] md:text-[40px] font-extrabold tracking-[-0.03em] text-obsidian leading-[1.08]">
            One suite for the full WordPress lifecycle.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[24px] border border-border bg-[#F8FAFF] p-6 md:p-7"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.24em] text-text-muted">{pillar.label}</span>
              <h3 className="mt-2 text-[18px] font-bold text-obsidian leading-snug mb-5">{pillar.headline}</h3>
              <div className="space-y-2">
                {pillar.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-3 rounded-xl border border-border/70 bg-white px-3.5 py-3 transition-all hover:border-border hover:shadow-sm"
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{ background: `${item.accent}12`, border: `1px solid ${item.accent}28` }}
                      >
                        <Icon className="h-4 w-4" style={{ color: item.accent }} />
                      </span>
                      <span className="flex-1 text-[14px] font-semibold text-obsidian">{item.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-text-muted opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
