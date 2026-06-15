"use client";

import { motion } from "motion/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  BookOpen, Download, Settings, Zap, CheckCircle2,
  ChevronRight, Terminal, Shield, Cpu, ArrowRight,
  Package, Play, HelpCircle, MessageSquare,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Install the Plugin",
    description: "Download Nexora Engine from the WordPress plugin directory or upload the ZIP directly from your dashboard.",
    code: "Plugins → Add New → Search 'Nexora Engine' → Install Now → Activate",
    icon: Package,
  },
  {
    number: "02",
    title: "Run the Setup Wizard",
    description: "On first activation, the Setup Wizard automatically launches. It detects your server type (Apache, Nginx, LiteSpeed), runs a pre-flight compatibility check, and configures the cache layer in under two minutes.",
    code: "Nexora Engine → Setup Wizard → Follow 5 steps",
    icon: Settings,
  },
  {
    number: "03",
    title: "Enable Static Site Generation",
    description: "Toggle SSG on in the Build Control panel. Nexora uses HMAC-signed loopback requests to capture authenticated renders of every page, with no headless browser required.",
    code: "Nexora Engine → Build Control → Enable SSG → Generate All Pages",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Activate Ghost Protocol (Pro)",
    description: "Enable Stealth Proxy to cloak WordPress fingerprints. Asset paths are remapped, X-Powered-By headers are stripped, and window.wp is masked to window.ncx, making the site invisible to scanners.",
    code: "Nexora Engine → Headless Mode → Enable Ghost Protocol",
    icon: Shield,
  },
  {
    number: "05",
    title: "Verify & Monitor",
    description: "Run the built-in diagnostic to confirm your cache layer is active. The Neural Pulse dashboard shows live cache hit ratio, TTFB, and Core Web Vitals from real visitors.",
    code: "Nexora Engine → Tools → Run Diagnostic → Check Dashboard",
    icon: Zap,
  },
];

const requirements = [
  { label: "WordPress", value: "5.8 or higher" },
  { label: "PHP", value: "7.4+ (8.1 recommended)" },
  { label: "Web server", value: "Apache, Nginx, or LiteSpeed" },
  { label: "Writable uploads dir", value: "wp-content/uploads/" },
  { label: "WP_CACHE constant", value: "Auto-enabled by wizard" },
  { label: "Loopback requests", value: "Must be allowed" },
];

const nextSteps = [
  {
    icon: Play,
    title: "Video Tutorials",
    desc: "Watch step-by-step walkthroughs of every feature.",
    href: "/nexora-engine/tutorials",
    cta: "Watch Now",
  },
  {
    icon: MessageSquare,
    title: "Feature Requests",
    desc: "Tell us what you'd like to see in the next release.",
    href: "/nexora-engine/feature-request",
    cta: "Submit Idea",
  },
  {
    icon: HelpCircle,
    title: "Support",
    desc: "Stuck on something? Open a ticket and we'll respond fast.",
    href: "/nexora-engine/support",
    cta: "Get Help",
  },
];

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header />

      <main className="pt-40 pb-32 px-8 lg:px-24">
        <div className="w-full max-w-[1600px] mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] font-bold text-text-muted mb-12 uppercase tracking-widest">
            <Link href="/docs" className="hover:text-brand transition-colors">Docs</Link>
            <ChevronRight size={14} className="opacity-40" />
            <span className="text-obsidian">Getting Started</span>
          </div>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 max-w-[860px]"
          >
            <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-6 py-2 rounded-full mb-8">
              <BookOpen size={14} className="text-brand" />
              <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Quick Start Guide</span>
            </div>
            <h1 className="text-[48px] md:text-[72px] font-extrabold text-obsidian tracking-tighter leading-none mb-8">
              From Zero to <br /><span className="text-brand">22ms TTFB.</span>
            </h1>
            <p className="text-[20px] text-text-secondary font-medium leading-relaxed max-w-[640px]">
              Install Nexora Engine, run the wizard, and your WordPress site is serving static pages at edge speed. in under five minutes.
            </p>
          </motion.div>

          {/* Requirements bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-border rounded-[32px] p-8 mb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {requirements.map((req) => (
              <div key={req.label}>
                <p className="text-[11px] font-bold text-text-muted uppercase tracking-widest mb-1">{req.label}</p>
                <p className="text-[14px] font-bold text-obsidian">{req.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Steps */}
          <div className="space-y-8 mb-32">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="bg-white border border-border rounded-[40px] p-10 lg:p-12 grid lg:grid-cols-12 gap-10 items-start hover:shadow-[0_24px_48px_rgba(0,0,0,0.05)] transition-shadow duration-500"
              >
                {/* Step number + icon */}
                <div className="lg:col-span-1 flex flex-row lg:flex-col items-center lg:items-start gap-4">
                  <span className="font-mono text-[11px] font-bold text-text-muted uppercase tracking-[0.3em]">{step.number}</span>
                  <div className="h-12 w-12 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center">
                    <step.icon size={22} className="text-brand" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                  <h3 className="text-[22px] font-extrabold text-obsidian tracking-tight mb-4">{step.title}</h3>
                  <p className="text-[16px] text-text-secondary font-medium leading-relaxed">{step.description}</p>
                </div>

                {/* Code */}
                <div className="lg:col-span-4 bg-obsidian rounded-2xl px-6 py-5 font-mono">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-red-500/60" />
                    <div className="h-2 w-2 rounded-full bg-amber-500/60" />
                    <div className="h-2 w-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <p className="text-emerald-400 text-[13px] leading-relaxed">{step.code}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#050B25] border border-brand/20 rounded-[48px] p-12 lg:p-16 mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-brand/10 border border-brand/20 px-5 py-2 rounded-full mb-8">
                  <CheckCircle2 size={14} className="text-brand-soft" />
                  <span className="font-mono text-[10px] font-bold text-brand-soft uppercase tracking-[0.3em]">Post-Install Checklist</span>
                </div>
                <h2 className="text-white text-[36px] font-extrabold tracking-tight mb-6">
                  Confirm Everything <br /><span className="text-brand">Is Running.</span>
                </h2>
                <p className="text-white/60 text-[16px] font-medium leading-relaxed">
                  After setup, verify these checkpoints to make sure Nexora is operating at full capacity on your server.
                </p>
              </div>
              <ul className="space-y-5">
                {[
                  "advanced-cache.php drop-in installed in wp-content/",
                  "WP_CACHE is set to true in wp-config.php",
                  "Diagnostic shows ✅ FAST PATH for anonymous probe",
                  "At least one page visible in Build Control queue",
                  "Cache Hit Ratio > 0% in Dashboard (after first anonymous visit)",
                  "X-Nexora-Cache: HIT header visible in DevTools",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="flex items-start gap-4 text-white/80 text-[15px] font-medium"
                  >
                    <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Next steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {nextSteps.map((ns, i) => (
              <motion.div
                key={ns.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.07 }}
              >
                <Link
                  href={ns.href}
                  className="group block bg-white border border-border rounded-[32px] p-10 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-2xl bg-surface-soft border border-border flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand/40 transition-all duration-300">
                    <ns.icon size={22} className="text-text-muted group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[18px] font-extrabold text-obsidian tracking-tight mb-3">{ns.title}</h3>
                  <p className="text-[14px] text-text-secondary font-medium mb-6 leading-relaxed">{ns.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold text-brand group-hover:gap-3 transition-all">
                    {ns.cta} <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
