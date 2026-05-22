"use client";

import { motion } from "motion/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Terminal, Database, Shield, Zap, Search, Code2, Globe2, BookOpen, Layers, CheckCircle2, ChevronRight, Activity, Lock, Cpu, Server, Wifi } from "lucide-react";
import Link from "next/link";

const docCategories = [
  {
    title: "Core Architecture",
    icon: Database,
    items: ["Static Site Generator (SSG)", "Drop-In Cache Layer", "HMAC Signed Loopback", "Atomic Publication"]
  },
  {
    title: "Ghost Protocol",
    icon: Shield,
    items: ["Header Masking", "Fingerprint Stripping", "Namespace Cloaking", "Path Normalization"]
  },
  {
    title: "Registry & API",
    icon: Code2,
    items: ["REST Endpoint Reference", "WP-CLI Command Suite", "JSON Diagnostic Schema", "Webhook Integrations"]
  },
  {
    title: "Deployment",
    icon: Globe2,
    items: ["Server Requirements", "Conflict Resolution", "CDN Integration", "Rollback Safety"]
  }
];

const technicalSpecs = [
  {
    title: "Loopback Orchestration",
    description: "The mechanism that powers our SSG. When a publish event occurs, Nexora initiates an internal loopback request cryptographically signed with an HMAC-SHA256 signature. This ensures the Mothership can verify the request origin before capturing the DOM.",
    code: "$ ncx verify --loopback-signature"
  },
  {
    title: "advanced-cache.php Drop-In",
    description: "Operating at the PHP-FPM bootstrap layer, our drop-in intercepts requests before WordPress core loads. It verifies the existence of a valid static snapshot on disk and serves it with 22ms latency, bypassing the database entirely.",
    code: "define('WP_CACHE', true);"
  },
  {
    title: "Ghost Protocol Cloaking",
    description: "Beyond simple header removal, Nexora re-maps the internal WordPress namespace. Global variables like 'window.wp' are cloaked to 'window.ncx', and '/wp-content/' asset paths are obfuscated to prevent automated crawler detection.",
    code: "Header set X-Powered-By 'Nexora Engine'"
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header />
      
      <main className="pt-40 pb-32 px-8 lg:px-24">
        <div className="w-full max-w-[1600px] mx-auto">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 flex flex-col lg:flex-row items-end justify-between gap-12"
          >
             <div className="max-w-[800px]">
                <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-6 py-2 rounded-full mb-8">
                   <BookOpen size={14} className="text-brand" />
                   <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Engineering Reference</span>
                </div>
                <h1 className="text-[48px] md:text-[72px] font-extrabold text-obsidian tracking-tighter leading-none mb-8">
                  Infrastructure <br /> <span className="text-brand">Registry.</span>
                </h1>
                <p className="text-[20px] text-text-secondary font-medium leading-relaxed">
                  Comprehensive technical specifications for the Nexora Engine, covering SSG capture logic, Ghost Protocol implementation, and deployment protocols.
                </p>
             </div>
             
             <div className="flex gap-4">
                <button className="bg-obsidian text-white px-8 py-4 rounded-xl font-bold text-[14px] flex items-center gap-3">
                   <Terminal size={16} />
                   Download SDK
                </button>
             </div>
          </motion.div>

          {/* Grid Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {docCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-border rounded-[40px] p-10 hover:shadow-[0_48px_96px_rgba(0,0,0,0.05)] transition-all duration-500 group"
              >
                <div className="h-14 w-14 rounded-2xl bg-surface-soft border border-border flex items-center justify-center mb-8 group-hover:bg-brand group-hover:border-brand/40 transition-all duration-500">
                   <cat.icon size={24} className="text-text-muted group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[20px] font-extrabold text-obsidian mb-6 tracking-tight">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[14px] font-bold text-text-muted hover:text-brand transition-colors flex items-center gap-3 group/link">
                         <div className="h-1 w-1 rounded-full bg-border-strong group-hover/link:bg-brand" />
                         {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Technical Deep Dive Section */}
          <div className="grid lg:grid-cols-12 gap-16 mb-32 pt-24 border-t border-border">
             <div className="lg:col-span-4">
                <h2 className="text-[32px] font-extrabold text-obsidian tracking-tight mb-6">Deep-Dive <br />Protocols.</h2>
                <p className="text-text-secondary font-medium leading-relaxed mb-10">
                   Nexora Engine is more than a caching layer. It's a fundamental architectural shift in how WordPress delivery is orchestrated.
                </p>
                <div className="space-y-6">
                   {[
                     { icon: Server, label: 'Origin Isolation' },
                     { icon: Wifi, label: 'Zero-Edge Latency' },
                     { icon: Activity, label: 'Atomic Rollbacks' }
                   ].map((t) => (
                     <div key={t.label} className="flex items-center gap-4 text-obsidian font-bold text-[14px]">
                        <div className="h-8 w-8 rounded-lg bg-surface-soft flex items-center justify-center">
                           <t.icon size={16} className="text-brand" />
                        </div>
                        {t.label}
                     </div>
                   ))}
                </div>
             </div>

             <div className="lg:col-span-8 space-y-8">
                {technicalSpecs.map((spec, i) => (
                  <div key={spec.title} className="bg-white border border-border rounded-[40px] p-10 lg:p-12 shadow-sm">
                     <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                        <h4 className="text-[20px] font-extrabold text-obsidian tracking-tight flex items-center gap-4">
                           <div className="h-2 w-2 rounded-full bg-brand" />
                           {spec.title}
                        </h4>
                        <div className="bg-surface-soft px-4 py-1.5 rounded-lg font-mono text-[11px] font-bold text-text-muted">
                           {spec.code}
                        </div>
                     </div>
                     <p className="text-[16px] text-text-secondary leading-relaxed font-medium">
                        {spec.description}
                     </p>
                  </div>
                ))}
             </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-[#050B25] border border-brand/20 rounded-[48px] p-12 lg:p-20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-10">
                <Layers className="text-brand" size={120} />
             </div>
             <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                   <h2 className="text-white text-[32px] md:text-[44px] font-extrabold mb-8 tracking-tight leading-tight">
                     Ready to <br /> <span className="text-brand">Initialize?</span>
                   </h2>
                   <p className="text-white/60 text-[18px] font-medium leading-relaxed mb-10">
                     Start with an infrastructure audit to see the impact of Nexora on your current site.
                   </p>
                   <Link href="/#audit" className="bg-brand text-white px-10 py-5 rounded-2xl font-extrabold text-[16px] shadow-xl hover:scale-105 transition-transform inline-flex items-center gap-3">
                      Start Infrastructure Audit
                      <Zap size={18} />
                   </Link>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-3xl p-10 font-mono">
                   <div className="text-brand-soft/40 text-[12px] mb-4">CLI_INIT_PROTOCOL:</div>
                   <div className="space-y-3">
                      <div className="text-white/60 text-[14px]"><span className="text-white">$</span> ncx init <span className="text-brand">--core</span></div>
                      <div className="text-white/40 text-[13px]">Probing for advanced-cache.php...</div>
                      <div className="text-emerald-400 text-[13px]">OK :: SSG snapshot engine primed.</div>
                      <div className="text-white/60 text-[14px]"><span className="text-white">$</span> ncx capture <span className="text-brand">--all</span></div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
