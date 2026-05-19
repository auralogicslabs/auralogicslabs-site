"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  RefreshCcw,
  Database,
  Globe,
  Cpu,
  Play,
  Settings,
  BarChart3,
  Lock,
  Eye,
  EyeOff,
  Activity,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Layout
} from "lucide-react";

export default function DemoPage() {
  const [ghostMode, setGhostMode] = useState(true);
  const [ssgActive, setSsgActive] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [activeTab, setActiveTab] = useState("speed");

  const simulateSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header />

      <main className="pt-40 pb-32 px-8 lg:px-24">
        <div className="w-full max-w-[1700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
             <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-6 py-2 rounded-full mb-8">
                <Play size={14} className="text-brand" />
                <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Live Infrastructure Simulator</span>
             </div>
             <h1 className="text-[48px] md:text-[72px] font-extrabold text-obsidian tracking-tighter leading-none mb-8">
               Experience the <br /> <span className="text-brand">Nexora Engine.</span>
             </h1>
             <p className="text-[20px] text-text-secondary max-w-[700px] mx-auto font-medium leading-relaxed">
               Interact with the Nexora control layer. See how HMAC-signed snapshots and the Ghost Protocol transform your WordPress environment in real-time.
             </p>
          </motion.div>

          {/* THE SIMULATOR CONTAINER */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">

             {/* LEFT: THE PLUGIN INTERFACE (MOCK WORDPRESS) */}
             <div className="lg:col-span-4 bg-white border border-border rounded-[48px] shadow-[0_48px_96px_rgba(0,0,0,0.08)] overflow-hidden">
                <div className="bg-[#1e1e2d] px-8 py-4 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <Layout size={16} className="text-white/40" />
                      <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">WP-ADMIN / NEXORA</span>
                   </div>
                   <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                      <div className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                      <div className="h-2 w-2 rounded-full bg-[#27c93f]" />
                   </div>
                </div>

                <div className="p-10 space-y-10">
                   {/* Sync Status */}
                   <div className="flex items-center justify-between p-6 rounded-3xl bg-surface-soft border border-border group">
                      <div>
                         <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Portal Sync</div>
                         <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${isSyncing ? 'bg-brand animate-pulse' : 'bg-emerald-500'}`} />
                            <span className="text-[14px] font-bold text-obsidian">{isSyncing ? 'Syncing...' : 'Connected'}</span>
                         </div>
                      </div>
                      <button
                        onClick={simulateSync}
                        className="h-10 w-10 rounded-xl bg-white border border-border flex items-center justify-center hover:border-brand transition-colors"
                      >
                         <RefreshCcw size={16} className={isSyncing ? 'animate-spin' : ''} />
                      </button>
                   </div>

                   {/* Toggle 1: SSG */}
                   <div className="space-y-4">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${ssgActive ? 'bg-brand/10 text-brand' : 'bg-surface-soft text-text-muted'}`}>
                               <Zap size={20} />
                            </div>
                            <span className="text-[16px] font-bold text-obsidian">SSG Engine</span>
                         </div>
                         <button
                           onClick={() => setSsgActive(!ssgActive)}
                           className={`w-12 h-6 rounded-full transition-colors relative ${ssgActive ? 'bg-brand' : 'bg-border'}`}
                         >
                            <motion.div
                              animate={{ x: ssgActive ? 24 : 4 }}
                              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                            />
                         </button>
                      </div>
                      <p className="text-[12px] text-text-muted font-medium ml-14">Capturing pre-rendered HTML snapshots on save_post.</p>
                   </div>

                   {/* Toggle 2: Ghost Protocol */}
                   <div className="space-y-4">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${ghostMode ? 'bg-amber-500/10 text-amber-500' : 'bg-surface-soft text-text-muted'}`}>
                               {ghostMode ? <ShieldCheck size={20} /> : <Lock size={20} />}
                            </div>
                            <span className="text-[16px] font-bold text-obsidian">Ghost Protocol</span>
                         </div>
                         <button
                           onClick={() => setGhostMode(!ghostMode)}
                           className={`w-12 h-6 rounded-full transition-colors relative ${ghostMode ? 'bg-amber-500' : 'bg-border'}`}
                         >
                            <motion.div
                              animate={{ x: ghostMode ? 24 : 4 }}
                              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                            />
                         </button>
                      </div>
                      <p className="text-[12px] text-text-muted font-medium ml-14">Cloaking WordPress fingerprints from public headers.</p>
                   </div>

                   <div className="pt-6 border-t border-border">
                      <Link href="/nexora-engine/docs/getting-started" className="w-full bg-obsidian text-white py-4 rounded-2xl font-bold text-[14px] flex items-center justify-center gap-3 hover:bg-brand transition-colors">
                         <Terminal size={16} />
                         View Getting Started Guide
                      </Link>
                   </div>
                </div>
             </div>

             {/* RIGHT: THE REAL-TIME OUTPUT (MOTHERSHIP VIEW) */}
             <div className="lg:col-span-8 space-y-12">

                {/* Result Comparison */}
                <div className="bg-white border border-border rounded-[48px] p-12 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-5">
                      <Activity size={160} className="text-brand" />
                   </div>

                   <div className="relative z-10">
                      <h3 className="text-[24px] font-extrabold text-obsidian mb-10 tracking-tight">Real-Time Infrastructure Impact</h3>

                      <div className="grid md:grid-cols-2 gap-10">
                         {/* Performance Box */}
                         <div className="space-y-8">
                            <div className="flex items-center gap-3">
                               <Zap size={18} className="text-brand" />
                               <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest">Delivery Latency</span>
                            </div>

                            <div className="flex items-baseline gap-4">
                               <AnimatePresence mode="wait">
                                  <motion.span
                                    key={ssgActive ? 'fast' : 'slow'}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-[54px] font-extrabold tracking-tighter leading-none ${ssgActive ? 'text-brand' : 'text-obsidian opacity-20'}`}
                                  >
                                     {ssgActive ? '22ms' : '850ms'}
                                  </motion.span>
                               </AnimatePresence>
                               <span className="text-[14px] font-bold text-text-muted">{ssgActive ? 'SSG Snapshot' : 'PHP Rendering'}</span>
                            </div>

                            <div className="h-2 w-full bg-surface-soft rounded-full overflow-hidden">
                               <motion.div
                                 animate={{ width: ssgActive ? '100%' : '5%' }}
                                 className="h-full bg-brand"
                               />
                            </div>
                         </div>

                         {/* Security Box */}
                         <div className="space-y-8">
                            <div className="flex items-center gap-3">
                               <ShieldCheck size={18} className="text-amber-500" />
                               <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest">Security Signature</span>
                            </div>

                            <div className="flex items-baseline gap-4">
                               <AnimatePresence mode="wait">
                                  <motion.span
                                    key={ghostMode ? 'stealth' : 'exposed'}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`text-[54px] font-extrabold tracking-tighter leading-none ${ghostMode ? 'text-amber-500' : 'text-[#FF4D4D]'}`}
                                  >
                                     {ghostMode ? 'Cloaked' : 'Exposed'}
                                  </motion.span>
                               </AnimatePresence>
                            </div>

                            <div className="space-y-3">
                               {[
                                 { label: 'WP_VERSION', status: ghostMode },
                                 { label: 'REST_ENDPOINT', status: ghostMode },
                                 { label: 'BODY_CLASSES', status: ghostMode }
                               ].map((sig) => (
                                 <div key={sig.label} className="flex items-center justify-between text-[11px] font-bold">
                                    <span className="text-text-muted uppercase tracking-widest">{sig.label}</span>
                                    {sig.status ? (
                                      <span className="text-amber-500 flex items-center gap-1">
                                         <EyeOff size={12} />
                                         REMOVED
                                      </span>
                                    ) : (
                                      <span className="text-[#FF4D4D] flex items-center gap-1">
                                         <Eye size={12} />
                                         DETECTED
                                      </span>
                                    )}
                                 </div>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Portal CTA */}
                <div className="bg-[#050B25] rounded-[48px] p-12 text-white shadow-2xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(26,63,216,0.2),transparent)]" />
                   <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
                      <div>
                         <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-6">
                            <Globe size={12} className="text-brand" />
                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">Global Command Console</span>
                         </div>
                         <h4 className="text-[24px] font-bold mb-4 tracking-tight">Your Infrastructure, Unified.</h4>
                         <p className="text-white/40 text-[15px] font-medium leading-relaxed max-w-[400px]">
                           Every node you connect surfaces in your Command Portal. Manage performance across your entire fleet from one place.
                         </p>
                      </div>
                      <div className="flex gap-4">
                         <Link
                           href="/portal"
                           className="bg-brand text-white px-10 py-5 rounded-2xl font-bold text-[15px] shadow-xl hover:scale-105 transition-transform"
                         >
                            Open Portal
                         </Link>
                         <Link
                           href="/nexora-engine/docs"
                           className="border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-[15px] hover:bg-white/10 transition-colors"
                         >
                            Technical Docs
                         </Link>
                      </div>
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
