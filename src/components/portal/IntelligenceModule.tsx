"use client";

import { motion } from "motion/react";
import { 
  Sparkles, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Globe, 
  Database,
  Terminal,
  Lock,
  ArrowRight,
  Loader2,
  Info
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useInfrastructure } from "@/context/InfrastructureStore";

interface ModuleProps {
  title: string;
  subtitle: string;
  icon: any;
  status?: string;
}

export default function IntelligenceModule({ title, subtitle, icon: Icon, status = "Synchronizing..." }: ModuleProps) {
  const { sites } = useInfrastructure();
  
  return (
    <div className="space-y-12">
      {/* Module Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
         <div>
            <div className="flex items-center gap-3 mb-2">
               <Icon size={14} className="text-brand" />
               <span className="text-[10px] font-black text-brand uppercase tracking-[0.3em]">Intelligence Module</span>
            </div>
            <h1 className="text-[36px] font-black text-obsidian tracking-tighter leading-tight mb-2">
              {title} <span className="text-brand">Engine.</span>
            </h1>
            <p className="text-text-muted text-[16px] font-medium max-w-[600px]">
              {subtitle}
            </p>
         </div>
      </div>

      {/* Main Intelligence UI */}
      <div className="bg-white border border-border rounded-[48px] p-16 shadow-sm relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[500px]">
         {/* Background Decoration */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
            <Icon size={400} className="absolute -right-20 -bottom-20 text-obsidian" />
         </div>

         <div className="relative z-10">
            <div className="h-24 w-24 bg-brand/5 border border-brand/10 rounded-[32px] flex items-center justify-center mx-auto mb-10 group">
               <Icon size={40} className="text-brand group-hover:scale-110 transition-transform" />
            </div>

            <h2 className="text-[28px] font-black text-obsidian mb-4 tracking-tight">Intelligence Initialization</h2>
            <p className="text-text-muted text-[16px] font-medium max-w-[450px] mx-auto mb-12 leading-relaxed">
               Nexora Engine is currently indexing your {sites.length} delivery nodes. Real-time {title.toLowerCase()} telemetry will be available shortly.
            </p>

            <div className="flex flex-col items-center gap-6">
               <div className="flex items-center gap-3 px-6 py-2 bg-surface-soft border border-border rounded-full text-[11px] font-black text-obsidian uppercase tracking-widest">
                  <Loader2 className="animate-spin text-brand" size={14} />
                  {status}
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl opacity-40">
                  {["Parsing Fleet", "Edge Mapping", "Geo-Sync", "Handshake"].map(step => (
                    <div key={step} className="px-4 py-2 border border-border rounded-xl text-[9px] font-black uppercase tracking-widest text-text-muted">
                       {step}
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Info Card */}
      <div className="bg-obsidian rounded-[40px] p-10 text-white flex flex-col md:flex-row items-center gap-8 border border-white/5 shadow-2xl">
         <div className="h-16 w-16 bg-brand/20 border border-brand/30 rounded-2xl flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="text-brand-soft" size={32} />
         </div>
         <div>
            <h3 className="text-[18px] font-black mb-2">Fleet Security Protocol</h3>
            <p className="text-white/40 text-[14px] font-medium leading-relaxed max-w-2xl">
               All intelligence gathering is performed via the Nexora Ghost Protocol. No telemetry data leaves your delivery nodes unencrypted, ensuring zero latency impact and 100% data sovereignity.
            </p>
         </div>
         <button className="whitespace-nowrap px-8 py-4 bg-white/10 hover:bg-white text-white hover:text-obsidian rounded-2xl text-[13px] font-black transition-all ml-auto">
            Audit Documentation
         </button>
      </div>
    </div>
  );
}
