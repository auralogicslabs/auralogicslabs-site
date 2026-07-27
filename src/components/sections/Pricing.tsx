"use client";
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';

import { motion } from "motion/react";
import { Check, Zap, Shield, Globe, Cpu, Sparkles, ArrowRight, ShieldCheck, Lock, Activity, Terminal, Database, Code2, Layers, Search, Globe2, AlertCircle } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    tagline: "Nexora Engine",
    price: "0",
    period: "/forever",
    lifetime: null as string | null,
    description: "Full static delivery and Ghost Protocol security. No credit card, no time limit, no stripped features. Available on the WordPress.org plugin directory.",
    features: [
      "Static HTML Delivery (SSG)",
      "advanced-cache.php Drop-In",
      "SPA Navigation Between Pages",
      "Ghost Protocol (Core Fingerprint Hiding)",
      "Elementor & Gutenberg Compatible",
      "Delivery Diagnostics Dashboard",
      "Cache-Hit Tracking & Basic Analytics",
      "Security Hardening (Enum, XML-RPC, Rate Limit)"
    ],
    button: "Get It Free on WordPress.org",
    href: "https://wordpress.org/plugins/nexora-engine",
    external: true,
    pro: false
  },
  {
    name: "Pro",
    tagline: "Nexora Engine Pro",
    price: "49",
    period: "/year",
    lifetime: "149",
    description: "Everything in Free plus advanced cloaking, automatic rebuilds, real-user Core Web Vitals, SEO intelligence, CDN purge, and agency white-labeling. Includes a 14-day free trial, no card required.",
    features: [
      "Everything in Free",
      "Advanced Ghost Protocol (Full Cloaking)",
      "Auto-Rebuild on Publish & Update",
      "Core Web Vitals Tracking (LCP / INP / CLS)",
      "SEO Intelligence & On-Page Scoring",
      "Redirect Manager (301/302)",
      "Edge CDN Purge (Cloudflare & Bunny)",
      "PDF Infrastructure Reports",
      "White-Label Admin Branding",
      "Multisite Fleet Orchestration",
      "Priority Support"
    ],
    button: "Start 14-Day Free Trial",
    href: "https://checkout.freemius.com/plugin/29612/plan/48706/",
    external: true,
    pro: true
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-32 border-y border-border relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      <div className={cn(siteContainerClass, "relative z-10")}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-6 py-2 rounded-full mb-8">
             <Sparkles size={14} className="text-brand" />
             <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Simple Pricing</span>
          </div>
          <h2 className="text-[40px] md:text-[64px] font-extrabold text-obsidian tracking-tighter leading-none mb-8">
            Start free. <span className="text-brand">Scale when you&apos;re ready.</span>
          </h2>
          <p className="text-[18px] text-text-muted max-w-[700px] mx-auto font-medium">
            No hidden fees. No lock-in. The free tier is genuinely free, not a stripped demo. Upgrade to Pro when you need advanced automation, redirects, or agency white-labeling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-[840px] mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-[48px] p-12 flex flex-col h-full border transition-all duration-500 ${
                plan.pro
                  ? 'bg-[#050B25] border-brand/20 shadow-[0_48px_96px_rgba(26,63,216,0.15)] md:-translate-y-4'
                  : 'bg-white border-border'
              }`}
            >
              {plan.pro && (
                <div className="absolute top-8 right-8 flex items-center gap-2 bg-brand/15 border border-brand/25 px-4 py-1.5 rounded-full">
                   <Sparkles size={12} className="text-brand-soft" />
                   <span className="text-[9px] font-extrabold text-brand-soft uppercase tracking-[0.1em]">14-Day Free Trial</span>
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

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                   <span className={`text-[14px] font-bold ${plan.pro ? 'text-white/40' : 'text-text-muted'}`}>$</span>
                   <span className={`text-[56px] font-extrabold tracking-tighter ${plan.pro ? 'text-white' : 'text-obsidian'}`}>{plan.price}</span>
                   <span className={`text-[16px] font-bold ${plan.pro ? 'text-white/40' : 'text-text-muted'}`}>{plan.period}</span>
                </div>
                {plan.lifetime && (
                   <p className={`mt-2 text-[13px] font-bold ${plan.pro ? 'text-white/50' : 'text-text-muted'}`}>
                     or <span className={plan.pro ? 'text-brand-soft' : 'text-brand'}>${plan.lifetime}</span> one-time lifetime license
                   </p>
                )}
              </div>

              <p className={`text-[15px] font-medium leading-relaxed mb-10 ${plan.pro ? 'text-white/60' : 'text-text-muted'}`}>
                {plan.description}
              </p>

              <div className="space-y-4 mb-12 flex-1">
                <div className={`text-[10px] font-extrabold uppercase tracking-[0.2em] mb-6 ${plan.pro ? 'text-white/30' : 'text-text-muted/50'}`}>
                   What&apos;s Included
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

              <Link
                href={plan.href}
                {...(plan.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`w-full py-4 rounded-full font-extrabold text-[15px] transition-all duration-300 flex items-center justify-center gap-3 ${
                  plan.pro
                    ? 'bg-brand text-white hover:bg-brand-soft shadow-xl'
                    : 'bg-surface-soft text-obsidian border border-border hover:bg-white hover:shadow-md'
                }`}
              >
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
              <p className="text-[14px] text-text-muted font-medium">Replace Nexora branding with your agency identity. Full control over the plugin name, logo, and admin dashboard visuals across every client site. Included in the Pro plan.</p>
           </div>
           <Link href="https://checkout.freemius.com/plugin/29612/plan/48706/" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap bg-white text-brand px-8 py-4 rounded-full font-extrabold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              Get Pro
           </Link>
        </div>
      </div>
    </section>
  );
}
