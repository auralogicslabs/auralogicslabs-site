"use client";

import { motion } from "motion/react";
import { Cpu, Shield, Zap, RefreshCcw, Lock, Search, Activity, Layers, Terminal, Database, Code2 } from "lucide-react";

const methodology = [
  {
    id: "orchestration",
    icon: Cpu,
    title: "Loopback Orchestration",
    description: "Nexora triggers an HMAC-signed internal request that captures WordPress pages to pre-rendered HTML snapshots in an isolated local environment.",
    metric: "Verified HMAC Verification"
  },
  {
    id: "cloaking",
    icon: Shield,
    title: "Ghost Protocol",
    description: "A deep-filtering layer that strips WordPress generator tags, masks /wp-content/ paths, and cloaks the window.wp namespace to window.ncx.",
    metric: "Zero Identity Exposure"
  },
  {
    id: "atomic",
    icon: RefreshCcw,
    title: "Atomic Publication",
    description: "Snapshots are written to a temporary buffer and validated via checksum before being atomically swapped into the static root—preventing partial writes.",
    metric: "Checksum Verified"
  },
  {
    id: "edge",
    icon: Zap,
    title: "Edge Interception",
    description: "The advanced-cache.php drop-in intercepts requests at the earliest phase, serving pre-rendered HTML in 22ms without booting PHP or the Database.",
    metric: "22ms Benchmark TTFB"
  }
];

export function MethodologyDetail() {
  return (
    <section id="methodology" className="bg-[#F8FAFF] py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-10 pointer-events-none" />
      
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: The Narrative */}
          <div className="sticky top-32">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-12 bg-brand" />
                <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-[0.3em]">Technical Methodology</span>
             </div>
             
             <h2 className="text-[32px] md:text-[50px] lg:text-[62px] font-extrabold text-obsidian tracking-[-0.05em] leading-[1.05] mb-12">
               Infrastructure <br /> 
               by <span className="text-brand">Design.</span>
             </h2>

             <p className="text-[18px] text-text-muted font-medium leading-relaxed mb-16 max-w-[600px]">
                Strict adherence to the Nexora Engine registry. No abstractions—just raw infrastructure logic engineered for sub-second delivery.
             </p>

             <div className="space-y-12">
                {methodology.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                     <div className="h-16 w-16 rounded-[24px] bg-white border border-border shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:border-brand/40 transition-all duration-500">
                        <item.icon size={28} className="text-brand transition-colors duration-500 group-hover:text-white" />
                     </div>
                     <div>
                        <h4 className="text-[20px] font-extrabold text-obsidian mb-3 tracking-tight">{item.title}</h4>
                        <p className="text-[16px] text-text-muted font-medium leading-relaxed mb-4 max-w-[440px]">{item.description}</p>
                        <div className="inline-flex items-center gap-2 bg-brand/5 px-3 py-1 rounded-full">
                           <Activity size={12} className="text-brand" />
                           <span className="text-[10px] font-extrabold text-brand uppercase tracking-widest">{item.metric}</span>
                        </div>
                     </div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Right: The Engine Diagram */}
          <div className="relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-[#050B25] border border-white/10 rounded-[60px] p-12 lg:p-20 shadow-[0_80px_160px_rgba(26,63,216,0.1)] relative overflow-hidden"
             >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,63,216,0.1),transparent)]" />
                
                <div className="relative z-10 space-y-16">
                   {/* Diagram Step 1 */}
                   <div className="flex items-center gap-10">
                      <div className="h-20 w-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative">
                         <Database className="text-white/40" />
                         <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-brand rounded-xl flex items-center justify-center shadow-lg">
                            <Lock size={14} className="text-white" />
                         </div>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-brand to-transparent relative">
                         <motion.div 
                           animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                           className="absolute top-1/2 -translate-y-1/2 h-2 w-2 bg-brand rounded-full shadow-[0_0_10px_rgba(26,63,216,1)]"
                         />
                      </div>
                      <div className="text-right">
                         <div className="text-white font-extrabold text-[18px]">WordPress Core</div>
                         <div className="text-white/30 font-mono text-[10px] uppercase tracking-widest">HMAC Loopback Request</div>
                      </div>
                   </div>

                   {/* Diagram Step 2 */}
                   <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 relative group">
                      <div className="flex items-center gap-6 mb-8">
                         <Terminal className="text-brand" size={24} />
                         <div className="text-white font-extrabold text-[20px]">Nexora Static Engine</div>
                      </div>
                      <div className="space-y-4">
                         <div className="flex items-center gap-4 text-white/60 font-mono text-[12px]">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Ghost Protocol: Stripping Version Strings
                         </div>
                         <div className="flex items-center gap-4 text-white/60 font-mono text-[12px]">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Normalizer: Mapping window.ncx
                         </div>
                         <div className="flex items-center gap-4 text-white/60 font-mono text-[12px]">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Atomic Swap: Writing to Static Root
                         </div>
                      </div>
                   </div>

                   {/* Diagram Step 3 */}
                   <div className="flex items-center gap-10">
                      <div className="text-left">
                         <div className="text-white font-extrabold text-[18px]">Edge Drop-In</div>
                         <div className="text-white/30 font-mono text-[10px] uppercase tracking-widest">advanced-cache.php</div>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-l from-brand to-transparent relative">
                         <motion.div 
                           animate={{ right: ['0%', '100%'], opacity: [0, 1, 0] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                           className="absolute top-1/2 -translate-y-1/2 h-2 w-2 bg-brand rounded-full shadow-[0_0_10px_rgba(26,63,216,1)]"
                         />
                      </div>
                      <div className="h-20 w-20 rounded-3xl bg-brand flex items-center justify-center shadow-[0_0_40px_rgba(26,63,216,0.5)]">
                         <Zap className="text-white" size={32} />
                      </div>
                   </div>
                </div>

                {/* Animated Code Overlay */}
                <div className="mt-16 bg-black/40 border border-white/5 rounded-3xl p-8 font-mono overflow-hidden">
                   <div className="text-brand-soft/40 text-[12px] mb-4">ENGINE_REGISTRY_LOG:</div>
                   <div className="space-y-2">
                      <div className="text-white/60 text-[13px]"><span className="text-emerald-400">OK</span> :: HMAC verified for save_post hook</div>
                      <div className="text-white/60 text-[13px]"><span className="text-emerald-400">OK</span> :: /wp-content/ paths masked</div>
                      <div className="text-white/60 text-[13px]"><span className="text-amber-400">WAIT</span> :: Swapping atomic snapshot...</div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
