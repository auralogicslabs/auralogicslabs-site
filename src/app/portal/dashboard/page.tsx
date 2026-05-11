"use client";

import { motion } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  Globe, 
  Activity, 
  Plus, 
  ArrowUpRight, 
  MoreVertical, 
  CheckCircle2, 
  Clock,
  Database,
  Terminal,
  Cpu,
  Lock,
  Search,
  ExternalLink,
  Sparkles,
  Mail
} from "lucide-react";
import { useState } from "react";

export default function DashboardOverview() {
  const [showClaimForm, setShowClaimForm] = useState(false);

  const stats = [
    { label: "Global TTFB", value: "22ms", trend: "-95%", icon: Zap, color: "text-brand", bg: "bg-brand/5" },
    { label: "Cache Hit Rate", value: "99.2%", trend: "+2.4%", icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/5" },
    { label: "Ghost Protocol", value: "Active", trend: "Stealth", icon: ShieldCheck, color: "text-amber-500", bg: "bg-amber-500/5" },
    { label: "Active Snapshots", value: "1,242", trend: "Atomic", icon: Database, color: "text-obsidian", bg: "bg-obsidian/5" },
  ];

  const recentSites = [
    { name: "Main Corporate Portal", url: "https://site-a.com", status: "Healthy", score: 98, ttfb: "18ms" },
    { name: "Documentation Node", url: "https://docs.site-b.io", status: "Healthy", score: 100, ttfb: "12ms" },
    { name: "Staging Infrastructure", url: "https://dev.infra-c.net", status: "Updating", score: 94, ttfb: "45ms" },
  ];

  return (
    <div className="space-y-12">
      {/* Demo Mode Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-brand text-white px-8 py-3 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl"
      >
         <div className="flex items-center gap-4">
            <Sparkles size={18} className="animate-pulse" />
            <span className="text-[13px] font-bold tracking-tight">You are viewing the <span className="uppercase tracking-widest font-black">Live Demo Node</span>. All metrics reflect the actual performance of the Auralogics Lab staging environment.</span>
         </div>
         <button 
           onClick={() => setShowClaimForm(true)}
           className="bg-white text-brand px-6 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
         >
            Connect Your Site
         </button>
      </motion.div>

      {/* Header Summary */}
      <div className="flex justify-between items-end">
         <div>
            <h1 className="text-[32px] font-extrabold text-obsidian tracking-tight mb-2">Infrastructure Overview</h1>
            <p className="text-text-muted text-[15px] font-medium">Real-time delivery status across your connected WordPress nodes.</p>
         </div>
         <button 
           onClick={() => setShowClaimForm(true)}
           className="bg-obsidian text-white px-8 py-3.5 rounded-xl font-bold text-[14px] flex items-center gap-3 shadow-lg hover:scale-105 transition-transform"
         >
            <Plus size={18} />
            Connect New Node
         </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-border rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className={`h-12 w-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <stat.icon className={stat.color} size={24} />
            </div>
            <div className="flex items-center justify-between mb-2">
               <span className="text-[12px] font-bold text-text-muted uppercase tracking-widest">{stat.label}</span>
               <span className={`text-[11px] font-extrabold ${stat.trend.startsWith('+') || stat.trend.startsWith('-') ? 'text-emerald-500' : 'text-brand'}`}>
                  {stat.trend}
               </span>
            </div>
            <div className="text-[32px] font-extrabold text-obsidian tracking-tighter">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid: Sites + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
         {/* Sites Explorer */}
         <div className="lg:col-span-8 bg-white border border-border rounded-[40px] p-10 shadow-sm">
            <div className="flex justify-between items-center mb-10">
               <h2 className="text-[20px] font-extrabold text-obsidian tracking-tight">Active Infrastructure Nodes</h2>
               <div className="flex gap-2">
                  <button className="px-4 py-2 bg-surface-soft border border-border rounded-lg text-[12px] font-bold text-obsidian hover:bg-white transition-all">All Nodes</button>
                  <button className="px-4 py-2 text-[12px] font-bold text-text-muted hover:text-obsidian transition-all">Anomalies</button>
               </div>
            </div>

            <div className="space-y-4">
               {recentSites.map((site) => (
                 <div key={site.url} className="flex items-center justify-between p-6 rounded-[24px] border border-transparent hover:border-border hover:bg-surface-soft/50 transition-all group">
                    <div className="flex items-center gap-6">
                       <div className="h-12 w-12 rounded-xl bg-obsidian/5 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                          <Globe size={20} className="text-obsidian group-hover:text-brand transition-colors" />
                       </div>
                       <div>
                          <div className="text-[15px] font-bold text-obsidian mb-0.5">{site.name}</div>
                          <div className="text-[12px] text-text-muted font-medium flex items-center gap-2">
                             {site.url}
                             <ExternalLink size={10} />
                          </div>
                       </div>
                    </div>

                    <div className="flex items-center gap-12">
                       <div className="text-right">
                          <div className="text-[13px] font-bold text-obsidian">{site.ttfb}</div>
                          <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">TTFB</div>
                       </div>
                       <div className="text-right">
                          <div className="text-[13px] font-bold text-emerald-500">{site.score}%</div>
                          <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest">Score</div>
                       </div>
                       <div className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${
                          site.status === 'Healthy' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                       }`}>
                          {site.status}
                       </div>
                       <button className="p-2 text-text-muted hover:text-obsidian transition-colors">
                          <MoreVertical size={18} />
                       </button>
                    </div>
                 </div>
               ))}
            </div>

            <button className="w-full mt-8 py-4 border-t border-border text-[13px] font-bold text-text-muted hover:text-brand transition-colors flex items-center justify-center gap-2">
               Explore entire fleet (12 sites)
               <ArrowUpRight size={14} />
            </button>
         </div>

         {/* Technical Activity */}
         <div className="lg:col-span-4 space-y-10">
            <div className="bg-[#050B25] rounded-[40px] p-10 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Terminal size={80} />
               </div>
               <div className="relative z-10">
                  <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                     <Lock className="text-brand-soft" size={20} />
                  </div>
                  <h3 className="text-[18px] font-bold mb-4 tracking-tight">Ghost Protocol Active.</h3>
                  <p className="text-white/40 text-[14px] leading-relaxed mb-8 font-medium">Your WordPress fingerprints are currently cloaked on all production nodes. No vulnerabilities exposed.</p>
                  <button 
                    onClick={() => setShowClaimForm(true)}
                    className="w-full bg-brand text-white py-4 rounded-xl text-[13px] font-bold hover:scale-[1.02] transition-transform"
                  >
                     View Security Audit
                  </button>
               </div>
            </div>

            <div className="bg-white border border-border rounded-[40px] p-10 shadow-sm">
               <h3 className="text-[18px] font-bold text-obsidian mb-8 tracking-tight">System Events</h3>
               <div className="space-y-8">
                  {[
                    { label: "Snapshot Generated", time: "12 mins ago", icon: Database },
                    { label: "Conflict Resolved", time: "1 hr ago", icon: CheckCircle2 },
                    { label: "API Sync Pulse", time: "3 hrs ago", icon: Activity },
                  ].map((event, i) => (
                    <div key={i} className="flex gap-4">
                       <div className="mt-1 h-2 w-2 rounded-full bg-brand flex-shrink-0" />
                       <div>
                          <div className="text-[14px] font-bold text-obsidian mb-1">{event.label}</div>
                          <div className="text-[12px] text-text-muted font-medium flex items-center gap-2">
                             <Clock size={12} />
                             {event.time}
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Lead Capture Modal (Claim Site) */}
      {showClaimForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-8">
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             onClick={() => setShowClaimForm(false)}
             className="absolute inset-0 bg-obsidian/60 backdrop-blur-xl" 
           />
           <motion.div
             initial={{ opacity: 0, scale: 0.9, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             className="relative w-full max-w-[500px] bg-white rounded-[48px] p-12 lg:p-16 shadow-2xl overflow-hidden"
           >
              <div className="absolute top-0 right-0 p-10 opacity-5">
                 <Globe size={120} />
              </div>
              
              <div className="relative z-10 text-center">
                 <div className="h-20 w-20 bg-brand/10 rounded-[32px] flex items-center justify-center mx-auto mb-8">
                    <Sparkles size={36} className="text-brand" />
                 </div>
                 <h3 className="text-[28px] font-extrabold text-obsidian mb-4 tracking-tight">Connect Your Own Site.</h3>
                 <p className="text-text-muted text-[15px] font-medium leading-relaxed mb-10">Connect your WordPress infrastructure to the Auralogics command portal. We will send the integration protocol to your email.</p>
                 
                 <form className="space-y-6">
                    <div className="bg-surface-soft border border-border rounded-2xl p-4 px-6 flex items-center gap-4">
                       <Mail size={18} className="text-text-muted" />
                       <input 
                         type="email" 
                         placeholder="hello@company.com"
                         className="w-full bg-transparent border-none text-[16px] font-bold text-obsidian focus:ring-0 placeholder:text-text-muted/40"
                       />
                    </div>
                    <button 
                      onClick={(e) => { e.preventDefault(); setShowClaimForm(false); }}
                      className="w-full bg-brand text-white py-5 rounded-2xl font-extrabold text-[16px] shadow-xl hover:scale-105 transition-transform"
                    >
                       Initialize My Node
                    </button>
                 </form>
              </div>
           </motion.div>
        </div>
      )}
    </div>
  );
}
