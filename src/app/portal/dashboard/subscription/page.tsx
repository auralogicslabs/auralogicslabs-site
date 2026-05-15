"use client";

import { motion } from "motion/react";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Info,
  Zap,
  Globe,
  MessageSquare,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { useInfrastructure } from "@/context/InfrastructureStore";

export default function SubscriptionPage() {
  const { sites } = useInfrastructure();
  
  const hasActiveLicense = sites.some(s => s.isPluginActive);
  const activePlan = hasActiveLicense ? "Nexora Engine Pro" : "Nexora Engine Core";

  const plans = [
    {
      name: "Engine Core",
      tagline: "Essential static engine",
      price: "$0",
      period: "forever",
      description: "Ideal for single-site developers and community users.",
      features: [
        "SSG — Static Site Generator",
        "advanced-cache.php Drop-In",
        "Ghost Protocol (Basic)",
        "SPA Navigation (Normalizer)",
        "Basic Scoring (4 Modules)",
        "Diagnostics Dashboard",
      ],
      color: "border-border",
      button: "Download Core",
    },
    {
      name: "Engine Pro",
      tagline: "Advanced automation",
      price: "$99",
      period: "per year",
      description: "For high-traffic publishers and professional developers.",
      features: [
        "Everything in Core",
        "AI Suggestion Engine",
        "Next.js Export API",
        "GSC Integration (Analytics)",
        "Broken Link Checker",
        "White Label (Agency Mode)",
        "Priority Engineering Support",
      ],
      color: "border-brand",
      popular: true,
      button: "Get Pro License",
    },
    {
      name: "Cloud Enterprise",
      tagline: "Managed infrastructure",
      price: "Custom",
      period: "contact sales",
      description: "For agencies and high-scale networks (Roadmap Q3).",
      features: [
        "Nexora Cloud CDN",
        "Nexora Shield (WAF/DDoS)",
        "Multisite Intelligence Layer",
        "SLA Support (Guaranteed)",
        "Dedicated Infrastructure",
        "Custom Onboarding",
      ],
      color: "border-obsidian",
      button: "Contact Sales",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-2">
           <Sparkles size={14} className="text-brand" />
           <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Subscription Center</span>
        </div>
        <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight">
          Manage Your <span className="text-brand">License.</span>
        </h1>
        <p className="text-text-muted text-[15px] font-medium mt-2 max-w-[500px]">
          Nexora Engine licensing is per-site. Manage your tier and module access directly from your dashboard.
        </p>

        <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 flex items-center gap-5 mt-8 max-w-[740px]">
          <div className="h-11 w-11 bg-brand/10 rounded-xl flex items-center justify-center text-brand shrink-0">
            <ShieldCheck size={20} />
          </div>
          <div>
            <p className="text-[14px] font-bold text-obsidian mb-0.5">Verification through WordPress Plugin</p>
            <p className="text-[13px] text-text-muted font-medium">
              Licensing and plan upgrades are handled securely inside the Nexora Engine plugin on your site. Once connected, your portal tier updates instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Current License Status */}
      <div className="bg-white border border-border rounded-[32px] p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 w-full md:w-auto">
          <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 ${hasActiveLicense ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-surface-soft text-text-muted'}`}>
             <Zap size={24} />
          </div>
          <div>
            <div className="text-[11px] font-black text-text-muted uppercase tracking-widest mb-1">Active Intelligence Layer</div>
            <div className="text-[22px] font-black text-obsidian">{activePlan}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className={`flex-1 md:flex-none text-center px-6 py-3 rounded-xl text-[12px] font-black uppercase tracking-widest border ${
            hasActiveLicense 
              ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' 
              : 'bg-surface-soft text-text-muted border-border'
          }`}>
            {hasActiveLicense ? 'License Verified' : 'Standard Access'}
          </span>
          <Link href="/portal/dashboard/sites" className="flex-1 md:flex-none text-center px-6 py-3 bg-obsidian text-white rounded-xl text-[12px] font-black hover:bg-brand transition-all">
             Check Sites
          </Link>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`bg-white border-2 ${plan.color} rounded-[40px] p-10 relative overflow-hidden flex flex-col shadow-sm`}
          >
            {plan.popular && (
              <div className="absolute top-8 right-[-35px] bg-brand text-white text-[10px] font-black uppercase tracking-widest px-12 py-1 rotate-45 shadow-lg">
                Recommended
              </div>
            )}

            <div className="mb-7">
              <h3 className="text-[19px] font-black text-obsidian mb-1">{plan.name}</h3>
              <p className="text-[11px] font-bold text-brand uppercase tracking-widest mb-4">{plan.tagline}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-[30px] font-black text-obsidian tracking-tighter">{plan.price}</span>
                <span className="text-[13px] font-bold text-text-muted">{plan.period}</span>
              </div>
            </div>

            <p className="text-text-muted text-[13px] font-medium leading-relaxed mb-8">
               {plan.description}
            </p>

            <ul className="space-y-3.5 mb-10 flex-1">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-[13px] font-medium text-text-muted leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-7 border-t border-border">
              <button
                className={`block w-full py-4 rounded-2xl text-center text-[13px] font-black transition-all ${
                  plan.popular
                    ? 'bg-brand text-white hover:scale-105 shadow-xl shadow-brand/20'
                    : 'bg-surface-soft text-obsidian hover:bg-border'
                }`}
              >
                {plan.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Roadmap / Enterprise */}
      <div className="bg-[#050B25] rounded-[48px] p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-brand)_1px,transparent_0)] bg-[size:40px_40px] opacity-10 pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3 mb-5">
              <Zap size={18} className="text-brand" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">Agency Mode</span>
            </div>
            <h2 className="text-[26px] font-black mb-4 tracking-tight leading-tight">Need White-Label and Multi-site oversight?</h2>
            <p className="text-white/60 text-[15px] font-medium leading-relaxed mb-8">
              Unlock agency-level features including white-label dashboards, client access logs, and dedicated multisite orchestration.
            </p>
            <Link
              href="/portal/dashboard/support"
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand text-white rounded-2xl font-black text-[14px] hover:scale-105 transition-transform shadow-xl shadow-brand/30"
            >
              <MessageSquare size={17} /> Talk to Sales <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 shrink-0">
            {[
              { label: "White Label", icon: Layers },
              { label: "Unlimited Sites", icon: Globe },
              { label: "SLA Support", icon: MessageSquare },
              { label: "Cloud Infra", icon: Zap },
            ].map((feat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 w-[140px]">
                <feat.icon size={19} className="text-brand" />
                <span className="text-[10px] font-black uppercase tracking-widest text-center text-white/70">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
