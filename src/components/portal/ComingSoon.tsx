"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowLeft, Terminal, Cpu, Shield, Activity, Search, RefreshCw, Layers, Users, Bell, Settings as SettingsIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ComingSoonPlaceholder() {
  const pathname = usePathname();
  const sectionName = pathname.split('/').pop()?.replace(/-/g, ' ') || "Intelligence Module";

  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center p-8">
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-brand/20 blur-[80px] rounded-full animate-pulse" />
        <div className="relative h-24 w-24 bg-white border border-border rounded-[32px] flex items-center justify-center shadow-xl">
           <Terminal size={40} className="text-brand" />
        </div>
      </div>

      <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-4 py-1.5 rounded-full mb-8">
         <Sparkles size={12} className="text-brand" />
         <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Infrastructure Roadmap</span>
      </div>

      <h1 className="text-[42px] font-black text-obsidian tracking-tighter leading-tight mb-4 capitalize">
        {sectionName} <br /> <span className="text-brand">Node Initializing.</span>
      </h1>
      
      <p className="text-text-muted text-[16px] font-medium max-w-[500px] mb-12 leading-relaxed">
        This infrastructure intelligence module is currently being provisioned for the Nexora Engine ecosystem. Coming in Phase 4.
      </p>

      <div className="flex gap-4">
         <Link 
           href="/portal/dashboard"
           className="bg-obsidian text-white px-8 py-4 rounded-2xl font-black text-[14px] flex items-center gap-3 shadow-xl hover:scale-105 transition-transform"
         >
            <ArrowLeft size={18} />
            Back to Command
         </Link>
         <button className="bg-white border border-border px-8 py-4 rounded-2xl font-black text-[14px] text-obsidian hover:bg-surface-soft transition-all">
            Request Beta Access
         </button>
      </div>

      <div className="mt-20 grid grid-cols-4 md:grid-cols-8 gap-6 opacity-20">
         {[Cpu, Shield, Activity, Search, RefreshCw, Layers, Users, Bell].map((Icon, i) => (
           <Icon key={i} size={20} className="text-obsidian" />
         ))}
      </div>
    </div>
  );
}
