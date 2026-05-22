"use client";

import { motion } from "motion/react";
import { Check, Zap, Shield, Globe, Cpu, Sparkles, ArrowRight, ShieldCheck, Lock, Activity, Terminal, Database, Code2, Layers, Search, Globe2, AlertCircle } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    tagline: "Nexora Engine",
    price: "0",
    description: "Essential static engine for single-site developers and community users.",
    features: [
      "SSG — Static Site Generator",
      "advanced-cache.php Drop-In",
      "Ghost Protocol (Basic)",
      "SPA Navigation (Normalizer)",
      "Basic Scoring (4 Modules)",
      "Diagnostics Dashboard",
      "Basic WP-CLI Commands",
      "REST Page Payload API"
    ],
    button: "Download Free",
    href: "/nexora-engine/docs/getting-started",
    pro: false,
    enterprise: false
  },
  {
    name: "Pro",
    tagline: "Nexora Engine Pro",
    price: "99",
    description: "Advanced automation and analytics for high-traffic publishers and developers.",
    features: [
      "Everything in Free",
      "Hybrid Rendering Mode",
      "GSC Integration (Analytics)",
      "Broken Link Checker",
      "XML Sitemap Generator",
      "Redirect Manager (301/302)",
      "Change Tracker (Score Diffs)",
      "AI Suggestion Engine",
      "Alert System + Webhooks",
      "White Label (Agency Mode)",
      "Full WP-CLI Suite",
      "Priority Engineering Support"
    ],
    button: "Get Pro License",
    href: "/portal",
    pro: true,
    enterprise: false
  },
  {
    name: "Enterprise",
    tagline: "Nexora Cloud (Roadmap)",
    price: "Custom",
    description: "Managed global infrastructure and dedicated security for large networks.",
    features: [
      "Everything in Pro",
      "Nexora Cloud CDN (Q3 2026)",
      "Nexora Shield (WAF/DDoS)",
      "Multisite Intelligence Layer",
      "Real-time Access Logs",
      "SLA Support (Guaranteed)",
      "Dedicated Infrastructure",
      "Custom Onboarding",
      "AI Auto-Optimization"
    ],
    button: "Contact Sales",
    href: "mailto:hello@auralogicslabs.com",
    pro: false,
    enterprise: true
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-6 py-2 rounded-full mb-8">
             <Sparkles size={14} className="text-brand" />
             <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Value Orchestration</span>
          </div>
          <h2 className="text-[40px] md:text-[64px] font-extrabold text-obsidian tracking-tighter leading-none mb-8">
            Engineered for <span className="text-brand">transparency.</span>
          </h2>
          <p className="text-[18px] text-text-muted max-w-[700px] mx-auto font-medium">
            Strict adherence to technical logic. Choose the tier that matches your infrastructure requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-[48px] p-12 flex flex-col h-full border transition-all duration-500 ${
                plan.pro 
                  ? 'bg-[#050B25] border-brand/20 shadow-[0_48px_96px_rgba(26,63,216,0.15)] lg:-translate-y-4' 
                  : plan.enterprise 
                  ? 'bg-surface-soft border-border' 
                  : 'bg-white border-border'
              }`}
            >
              {plan.enterprise && (
                <div className="absolute top-8 right-8 flex items-center gap-2 bg-obsidian/5 border border-obsidian/10 px-4 py-1.5 rounded-full">
                   <Globe2 size={12} className="text-text-muted" />
                   <span className="text-[9px] font-extrabold text-text-muted uppercase tracking-[0.1em]">Roadmap Q3</span>
                </div>
              )}

              <div className="mb-10">
                <h3 className={`text-[28px] font-extrabold mb-2 ${plan.pro ? 'text-white' : 'text-obsidian'}`}>
                  {plan.name}
                </h3>
                <p className={`text-[13px] font-bold uppercase tracking-[0.2em] ${plan.pro ? 'text-brand-soft' : 'text-brand'}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                 {plan.price !== "Custom" && <span className={`text-[14px] font-bold ${plan.pro ? 'text-white/40' : 'text-text-muted'}`}>$</span>}
                 <span className={`text-[56px] font-extrabold tracking-tighter ${plan.pro ? 'text-white' : 'text-obsidian'}`}>{plan.price}</span>
                 {plan.price !== "Custom" && <span className={`text-[16px] font-bold ${plan.pro ? 'text-white/40' : 'text-text-muted'}`}>/yr</span>}
              </div>

              <p className={`text-[15px] font-medium leading-relaxed mb-10 ${plan.pro ? 'text-white/60' : 'text-text-muted'}`}>
                {plan.description}
              </p>

              <div className="space-y-4 mb-12 flex-1">
                <div className={`text-[10px] font-extrabold uppercase tracking-[0.2em] mb-6 ${plan.pro ? 'text-white/30' : 'text-text-muted/50'}`}>
                   Module Access
                </div>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4 group">
                    <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.pro ? 'bg-brand/20 text-brand' : 'bg-brand/5 text-brand'}`}>
                       <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={`text-[14px] font-bold leading-tight ${plan.pro ? 'text-white/80' : 'text-obsidian'}`}>
                       {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link href={plan.href} className={`w-full py-5 rounded-2xl font-extrabold text-[15px] transition-all duration-300 flex items-center justify-center gap-3 ${
                plan.pro
                  ? 'bg-brand text-white hover:bg-brand-soft shadow-xl'
                  : plan.enterprise
                  ? 'bg-obsidian text-white hover:bg-brand'
                  : 'bg-surface-soft text-obsidian border border-border hover:bg-white hover:shadow-md'
              }`}>
                {plan.button}
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 max-w-[900px] mx-auto bg-brand/5 border border-brand/10 rounded-[40px] p-10 flex flex-col md:flex-row items-center gap-10">
           <div className="h-16 w-16 bg-white border border-brand/10 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0">
              <ShieldCheck className="text-brand" size={32} />
           </div>
           <div className="flex-1">
              <h4 className="text-[18px] font-extrabold text-obsidian mb-2">Agency White Label Orchestration</h4>
              <p className="text-[14px] text-text-muted font-medium">Replace Nexora branding with your agency identity. Full control over client-facing emails, logs, and dashboard visuals. Included in Pro and Enterprise tiers.</p>
           </div>
           <Link href="/portal" className="whitespace-nowrap bg-white text-brand px-8 py-4 rounded-xl font-extrabold shadow-sm hover:scale-105 transition-transform">
              Learn about White Label
           </Link>
        </div>
      </div>
    </section>
  );
}
