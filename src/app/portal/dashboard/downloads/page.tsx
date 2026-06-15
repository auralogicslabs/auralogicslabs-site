"use client";

import { motion } from "motion/react";
import {
  Download, Box, Zap, ShieldCheck, Activity,
  ArrowRight, RefreshCw, Package
} from "lucide-react";

const PLUGIN_VERSION = "2.0.0";
const DOWNLOAD_URL = "#"; // Replace with actual release URL

export default function DownloadsPage() {
  return (
    <div className="space-y-10">
      <div>
        <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Resources</span>
        <h1 className="text-[34px] font-black text-obsidian tracking-tighter leading-tight mt-1">
          Plugin <span className="text-brand">Downloads.</span>
        </h1>
        <p className="text-text-muted text-[15px] font-medium mt-2 max-w-[540px]">
          Download the latest version of Nexora Engine and install it on your WordPress site to unlock full portal features.
        </p>
      </div>

      {/* Main download card */}
      <div className="bg-[#050B25] rounded-[48px] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[150%] bg-brand/40 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 bg-brand/20 rounded-2xl flex items-center justify-center border border-brand/30">
                <Box size={26} className="text-brand" />
              </div>
              <div>
                <div className="text-[20px] font-black">Nexora Engine</div>
                <div className="text-white/40 text-[13px] font-medium">WordPress Performance Plugin</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-widest">
                v{PLUGIN_VERSION}. Latest
              </span>
              <span className="text-white/30 text-[12px] font-medium">Requires WordPress 5.8+, PHP 8.0+</span>
            </div>
            <p className="text-white/60 text-[14px] font-medium leading-relaxed mb-8 max-w-[480px]">
              The complete performance and caching plugin for WordPress. Includes TTFB monitoring, smart cache management, optimization scoring, and one-click portal connectivity.
            </p>
            <a
              href={DOWNLOAD_URL}
              className="inline-flex items-center gap-3 bg-brand text-white px-8 py-4 rounded-2xl font-black text-[15px] hover:scale-105 transition-transform shadow-xl shadow-brand/30"
            >
              <Download size={20} />
              Download v{PLUGIN_VERSION}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 shrink-0">
            {[
              { label: "Plugin Size",    value: "~2.1 MB" },
              { label: "WP Compatible", value: "5.8 → 6.8" },
              { label: "PHP Required",  value: "8.0+" },
              { label: "License",       value: "Premium" },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">{item.label}</div>
                <div className="text-[15px] font-black text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's included */}
      <div className="bg-white border border-border rounded-[40px] p-10 shadow-sm">
        <h2 className="text-[17px] font-black text-obsidian mb-8">What's included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: Activity,    title: "TTFB Monitoring",      desc: "Real-time Time to First Byte tracking with p50/p95 percentile breakdown." },
            { icon: Zap,         title: "Smart Cache Engine",   desc: "Automatic page cache with intelligent invalidation on content updates." },
            { icon: ShieldCheck, title: "Security Hardening",   desc: "Header optimization, login protection, and file permission hardening." },
            { icon: Package,     title: "Optimization Scoring", desc: "Composite score across cache, compression, and delivery settings." },
            { icon: ArrowRight,  title: "Redirect Manager",     desc: "Clean 301/302 redirect management without performance impact." },
            { icon: RefreshCw,   title: "Portal Connectivity",  desc: "One-click sync to this portal for centralized multi-site management." },
          ].map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 p-5 rounded-2xl hover:bg-surface-soft transition-colors"
            >
              <div className="h-10 w-10 bg-brand/5 rounded-xl flex items-center justify-center text-brand shrink-0">
                <feat.icon size={19} />
              </div>
              <div>
                <div className="text-[14px] font-black text-obsidian">{feat.title}</div>
                <div className="text-[12px] text-text-muted font-medium mt-0.5 leading-relaxed">{feat.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Installation guide */}
      <div className="bg-white border border-border rounded-[40px] p-10 shadow-sm">
        <h2 className="text-[17px] font-black text-obsidian mb-8">Installation Guide</h2>
        <div className="space-y-6">
          {[
            { step: "1", title: "Download the plugin",    detail: "Click the Download button above to get the latest .zip file." },
            { step: "2", title: "Upload to WordPress",    detail: "Go to Plugins → Add New → Upload Plugin in your WordPress admin and select the .zip." },
            { step: "3", title: "Activate the plugin",    detail: "Click Activate Plugin. Nexora Engine will run a quick setup check automatically." },
            { step: "4", title: "Connect to this portal", detail: 'In the Nexora Engine settings page, click "Connect to Portal" to sync with your dashboard.' },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className="h-9 w-9 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-black text-[14px] shrink-0 mt-0.5">
                {s.step}
              </div>
              <div>
                <div className="text-[15px] font-black text-obsidian">{s.title}</div>
                <div className="text-[13px] text-text-muted font-medium mt-0.5 leading-relaxed">{s.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
