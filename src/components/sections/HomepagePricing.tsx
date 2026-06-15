"use client";

import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Zap, Code2, Building2, Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

// Standard mouse movement handler for 120fps styling (no state updates)
const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
};

const tiers = [
  {
    icon: Code2,
    name: "Free",
    price: "$0",
    period: "forever",
    tagline: "For developers & small sites",
    color: "#64748B",
    featured: false,
    features: [
      "Full static delivery engine",
      "Manual cache rebuild",
      "All server types supported",
      "Up to 500 cached pages",
      "Single site",
    ],
    cta: "Download Free",
    ctaHref: "/nexora-engine/docs/getting-started",
  },
  {
    icon: Zap,
    name: "Pro",
    price: "$19",
    period: "/ month",
    tagline: "For production sites & teams",
    color: "#1A3FD8",
    featured: true,
    features: [
      "Automatic cache invalidation",
      "Unlimited cached pages",
      "Priority rebuild queue",
      "Stealth delivery mode",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Get Pro License",
    ctaHref: "/portal",
  },
  {
    icon: Building2,
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    tagline: "For agencies & high-traffic sites",
    color: "#7C3AED",
    featured: false,
    features: [
      "Everything in Pro",
      "Unlimited sites",
      "White-label option",
      "SLA guarantee",
      "Dedicated onboarding",
      "Custom integrations",
    ],
    cta: "Contact Us",
    ctaHref: "mailto:hello@auralogicslabs.com?subject=Enterprise Inquiry",
  },
];

export function HomepagePricing() {
  return (
    <section id="pricing" className="bg-white py-32 px-8 lg:px-24 border-b border-border relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.13]"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand/4 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-0.5 w-8 bg-brand rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">Pricing</span>
            <div className="h-0.5 w-8 bg-brand rounded-full" />
          </div>
          <h2 className="text-[38px] md:text-[54px] font-extrabold text-obsidian tracking-tight leading-[1.05] mb-4">
            Engineered for transparency.
          </h2>
          <p className="text-[17px] text-text-secondary font-medium max-w-[480px] mx-auto leading-[1.65]">
            No credit card required. The free tier is genuinely full-featured, not a trial.
          </p>
        </motion.div>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            
            // Render standard tier cards (Free & Enterprise) with premium light glassmorphism and cursor tracking spotlights
            if (!tier.featured) {
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onMouseMove={handleCardMouseMove}
                  className="rounded-[32px] p-9 bg-white border border-border/80 shadow-card hover:border-brand-soft/30 hover:shadow-hover transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Subtle light tracking spotlight */}
                  <div
                    className="absolute inset-0 rounded-[32px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      border: "1.5px solid transparent",
                      backgroundImage: `linear-gradient(#ffffff, #ffffff), radial-gradient(200px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(26, 63, 216, 0.1) 0%, rgba(96, 165, 250, 0.03) 60%, transparent 100%)`,
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }}
                  />

                  <div className="relative z-10 flex-1">
                    {/* Icon + name */}
                    <div className="flex items-center gap-3.5 mb-7">
                      <div
                        className="h-11 w-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `${tier.color}08`,
                          border: `1.5px solid ${tier.color}15`,
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: tier.color }} />
                      </div>
                      <div>
                        <div className="text-[19px] font-extrabold tracking-tight text-obsidian">
                          {tier.name}
                        </div>
                        <div className="text-[11px] font-medium text-text-muted">
                          {tier.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-7">
                      <span className="font-mono text-[48px] font-bold leading-none tracking-tight text-obsidian">
                        {tier.price}
                      </span>
                      <span className="text-[14px] font-medium text-text-muted">
                        {tier.period}
                      </span>
                    </div>

                    <div className="h-px bg-border/80 mb-7" />

                    {/* Features list */}
                    <ul className="space-y-3.5 mb-8">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-soft" style={{ color: tier.color }} />
                          <span className="text-[14px] font-semibold text-text-secondary">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={tier.ctaHref}
                    className="relative z-10 w-full flex items-center justify-center gap-2.5 rounded-[14px] px-6 py-4 text-[14px] font-black bg-white border-2 border-border text-obsidian hover:bg-surface-soft hover:border-obsidian/25 shadow-[0_4px_14px_rgba(2,6,23,0.04)] transition-all duration-300 group"
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            }

            // Render Featured PRO tier with rotating neon light-sweep borders
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseMove={handleCardMouseMove}
                className="relative overflow-hidden rounded-[32px] p-[2.5px] scale-[1.02] shadow-[0_30px_70px_rgba(2,6,23,0.3)] flex flex-col justify-between group"
              >
                {/* Rotating neon light sweep stream behind the card */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-brand via-brand-soft to-purple-500 animate-[spin_5s_linear_infinite] opacity-80 blur-[0.5px]"
                  style={{
                    width: "250%",
                    height: "250%",
                    top: "-75%",
                    left: "-75%",
                    transformOrigin: "center center",
                  }}
                />

                {/* Inner obsidian dark base */}
                <div className="relative z-10 bg-obsidian rounded-[30px] p-9 w-full h-full flex flex-col justify-between overflow-hidden">
                  
                  {/* Atmospheric particle flow / orbs inside the card */}
                  <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-brand/22 blur-[100px] rounded-full pointer-events-none" />
                  <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] bg-purple-500/12 blur-[80px] rounded-full pointer-events-none" />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-[0.03]"
                    style={{
                      backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* Mouse-tracking border and background overlay */}
                  <div
                    className="absolute inset-0 rounded-[30px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      border: "1.5px solid transparent",
                      backgroundImage: `linear-gradient(#020617, #020617), radial-gradient(220px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(96, 165, 250, 0.45) 0%, rgba(192, 132, 252, 0.2) 60%, transparent 100%)`,
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }}
                  />

                  {/* Most popular badge with pulsing shadow */}
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand text-white text-[9px] font-black uppercase tracking-[0.28em] shadow-[0_0_20px_rgba(26,63,216,0.6)] animate-pulse">
                    <Sparkles className="h-2.5 w-2.5" />
                    Most popular
                  </div>

                  <div className="relative z-10 flex-1">
                    {/* Icon + name */}
                    <div className="flex items-center gap-3.5 mb-7">
                      <div className="h-11 w-11 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/8 border border-white/12">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-[19px] font-extrabold tracking-tight text-white">
                          {tier.name}
                        </div>
                        <div className="text-[11px] font-medium text-white/40">
                          {tier.tagline}
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-7">
                      <span className="font-mono text-[48px] font-bold leading-none tracking-tight text-white">
                        {tier.price}
                      </span>
                      <span className="text-[14px] font-medium text-white/38">
                        {tier.period}
                      </span>
                    </div>

                    <div className="h-px bg-white/8 mb-7" />

                    {/* Features list */}
                    <ul className="space-y-3.5 mb-8">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand-soft" />
                          <span className="text-[14px] font-semibold text-white/70">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={tier.ctaHref}
                    className="relative z-10 w-full flex items-center justify-center gap-2.5 rounded-[14px] px-6 py-4 text-[14px] font-black bg-brand text-white hover:bg-brand-bright shadow-[0_0_32px_rgba(26,63,216,0.35)] transition-all duration-300 group"
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full pricing link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/products/nexora-engine#pricing"
            className="inline-flex items-center gap-2 text-[14px] font-bold text-brand hover:text-obsidian transition-colors group"
          >
            View full feature comparison on the Nexora Engine page
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
