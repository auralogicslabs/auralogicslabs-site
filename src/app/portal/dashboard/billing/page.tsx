"use client";

import { motion } from "motion/react";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Info,
  Zap,
  Globe,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import { useInfrastructure } from "@/context/InfrastructureStore";

export default function SubscriptionPage() {
  const { entitlement } = useInfrastructure();

  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "per site / mo",
      features: [
        "Real-time TTFB Monitoring",
        "Automatic Cache Purging",
        "Basic Health Diagnostics",
        "Plugin Update Sync",
      ],
      color: "border-border",
    },
    {
      name: "Growth",
      price: "$49",
      period: "up to 5 sites / mo",
      features: [
        "Everything in Starter",
        "Global Edge Caching",
        "Security Header Hardening",
        "Optimization Score Tracking",
        "Priority Support",
      ],
      color: "border-brand",
      popular: true,
    },
    {
      name: "Agency",
      price: "$149",
      period: "unlimited sites / mo",
      features: [
        "Everything in Growth",
        "Unlimited Site Management",
        "White-label Options",
        "Custom API Access",
        "Dedicated Account Manager",
      ],
      color: "border-obsidian",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Subscription</span>
        <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
          Plans & <span className="text-brand">Billing.</span>
        </h1>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 flex items-center gap-5 mt-5 max-w-[740px]">
          <div className="h-11 w-11 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
            <Info size={20} />
          </div>
          <div>
            <p className="text-[14px] font-bold text-amber-700 mb-0.5">Billing is managed through the WordPress plugin</p>
            <p className="text-[13px] text-amber-600/80 font-medium">
              All licensing and plan upgrades are handled securely inside the Nexora Engine plugin on your WordPress site. Portal features update automatically once your plan is verified.
            </p>
          </div>
        </div>
      </div>

      {/* Current Plan */}
      <div className="bg-white border border-border rounded-[28px] p-8 shadow-sm flex items-center justify-between gap-5">
        <div>
          <div className="text-[11px] font-black text-text-muted uppercase tracking-widest mb-1">Current Plan</div>
          <div className="text-[22px] font-black text-obsidian">{entitlement.plan}</div>
          <div className="text-[13px] font-medium text-text-muted mt-0.5 capitalize">{entitlement.status}</div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-4 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest ${
            entitlement.status === 'active' ? 'bg-emerald-500/10 text-emerald-600' :
            entitlement.status === 'trial' ? 'bg-amber-500/10 text-amber-600' :
            'bg-red-500/10 text-red-500'
          }`}>
            {entitlement.status === 'active' ? 'Active' : entitlement.status === 'trial' ? 'Trial' : 'Expired'}
          </span>
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
                Popular
              </div>
            )}

            <div className="mb-7">
              <h3 className="text-[19px] font-black text-obsidian mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-[30px] font-black text-obsidian tracking-tighter">{plan.price}</span>
                <span className="text-[13px] font-bold text-text-muted">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-3.5 mb-10 flex-1">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-[13px] font-medium text-text-muted leading-tight">{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-7 border-t border-border">
              <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest text-center mb-4">Manage via Plugin</p>
              <Link
                href="/portal/dashboard/sites"
                className={`block w-full py-4 rounded-2xl text-center text-[13px] font-black transition-all ${
                  plan.popular
                    ? 'bg-brand text-white hover:scale-105 shadow-xl shadow-brand/20'
                    : 'bg-surface-soft text-obsidian hover:bg-border'
                }`}
              >
                View My Sites
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enterprise */}
      <div className="bg-[#050B25] rounded-[48px] p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[150%] bg-brand/40 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3 mb-5">
              <Zap size={18} className="text-brand" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">Enterprise</span>
            </div>
            <h2 className="text-[26px] font-black mb-4 tracking-tight leading-tight">Managing 50+ sites?</h2>
            <p className="text-white/60 text-[15px] font-medium leading-relaxed mb-8">
              For agencies with large portfolios, we offer custom pricing, dedicated onboarding, and a direct line to our engineering team.
            </p>
            <Link
              href="/portal/dashboard/support"
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand text-white rounded-2xl font-black text-[14px] hover:scale-105 transition-transform shadow-xl shadow-brand/30"
            >
              <MessageSquare size={17} /> Talk to Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 shrink-0">
            {[
              { label: "Custom Pricing", icon: Layers },
              { label: "Unlimited Sites", icon: Globe },
              { label: "Priority Support", icon: MessageSquare },
              { label: "Dedicated Setup", icon: Zap },
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
