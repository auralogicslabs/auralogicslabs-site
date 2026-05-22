"use client";

import { motion, AnimatePresence } from "motion/react";
import { Edit3, ServerCog, Shield, FileOutput, Zap, ChevronRight, Plus, RefreshCcw, Activity, Terminal, Database, ShieldAlert, Code2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    {
      icon: Edit3,
      title: "Snapshot Capture",
      label: "STEP 01",
      description: "WordPress fires the save_post hook. Nexora schedules an atomic capture with a 30-second debounce window to ensure bulk edits are coalesced.",
      details: ["save_post hook intercepted", "30s debounce window", "Registry integrity check"],
      code: "ncx_schedule_capture(post_id);"
    },
    {
      icon: ServerCog,
      title: "Headless Render",
      label: "STEP 02",
      description: "An HMAC-signed internal request renders the page. Elementor/Gutenberg CSS is pre-primed before the render fires to ensure identical styling.",
      details: ["HMAC signature verified", "CSS assets pre-primed", "Isolated SSR environment"],
      code: "curl -H 'X-NCX-HMAC: ***' /page/"
    },
    {
      icon: ShieldAlert,
      title: "Ghost Sanitization",
      label: "STEP 03",
      description: "Ghost Protocol strips WordPress fingerprints. Paths are masked, version strings removed, and the window.wp namespace is cloaked to window.ncx.",
      details: ["Strip generator meta", "Mask /wp-content/ paths", "Cloak window.wp namespace"],
      code: "ncx_ghost_protocol_filter($html);"
    },
    {
      icon: Database,
      title: "Atomic Publication",
      label: "STEP 04",
      description: "The verified snapshot is written to a temporary buffer and validated via checksum before being atomically swapped into the static delivery root.",
      details: ["Checksum verification", "Atomic file swap", "Rollback safety confirmed"],
      code: "ncx_publish_snapshot($path);"
    },
    {
      icon: Zap,
      title: "Edge Delivery",
      label: "STEP 05",
      description: "The advanced-cache.php drop-in intercepts requests at the earliest phase. WordPress never boots. Static HTML is served in 22 milliseconds.",
      details: ["22ms benchmark TTFB", "Zero PHP execution", "Full ETag negotiation"],
      code: "die(readfile($static_file));"
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 6000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, steps.length]);

  return (
    <section id="how-it-works" className="bg-white py-32 px-8 lg:px-24 border-y border-border overflow-hidden relative">
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16"
        >
          <div className="max-w-[800px]">
             <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-12 bg-brand" />
                <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-[0.3em]">Operational Pipeline</span>
             </div>
            <h2 className="text-[32px] md:text-[50px] lg:text-[62px] font-extrabold text-obsidian tracking-[-0.05em] leading-[1.05]">
              Strict delivery logic, <br /> 
              step by step.
            </h2>
          </div>
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-4 bg-surface-soft border border-border p-3 px-6 rounded-[32px] backdrop-blur-xl hover:bg-white transition-all duration-500 group h-fit"
          >
             <div className={`h-2.5 w-2.5 rounded-full ${isAutoPlaying ? 'bg-success animate-pulse' : 'bg-text-muted'}`} />
             <span className="font-mono text-[10px] font-extrabold text-text-muted tracking-[0.2em] uppercase">
                {isAutoPlaying ? 'Orchestration: Active' : 'Orchestration: Paused'}
             </span>
             <RefreshCcw size={14} className={`text-brand group-hover:rotate-180 transition-transform duration-700 ${isAutoPlaying ? 'animate-spin-slow' : ''}`} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Step Progression Vertical List */}
          <div className="lg:col-span-5 space-y-4">
             {steps.map((step, index) => {
               const isActive = index === activeStep;
               return (
                 <button
                   key={index}
                   onClick={() => { setActiveStep(index); setIsAutoPlaying(false); }}
                   className={`w-full text-left p-8 rounded-[40px] transition-all duration-700 border flex items-center gap-8 group ${
                     isActive 
                       ? 'bg-[#050B25] border-brand/20 shadow-[0_32px_64px_rgba(2,6,23,0.15)] scale-[1.02]' 
                       : 'bg-white border-border hover:bg-surface-soft hover:translate-x-2'
                   }`}
                 >
                    <div className={`h-16 w-16 rounded-[24px] flex items-center justify-center flex-shrink-0 transition-all duration-700 ${
                      isActive ? 'bg-brand text-white shadow-[0_0_30px_rgba(26,63,216,0.5)]' : 'bg-surface-soft text-text-muted group-hover:bg-white group-hover:text-brand group-hover:shadow-md'
                    }`}>
                       <step.icon size={28} />
                    </div>
                    <div>
                       <div className={`font-mono text-[10px] font-bold tracking-[0.3em] mb-2 ${isActive ? 'text-[#F39A09]' : 'text-text-muted/60'}`}>
                          {step.label}
                       </div>
                       <div className={`text-[20px] font-bold tracking-tight ${isActive ? 'text-white' : 'text-obsidian'}`}>
                          {step.title}
                       </div>
                    </div>
                 </button>
               );
             })}
          </div>

          {/* Right: Step Technical Deep Dive */}
          <div className="lg:col-span-7">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#050B25] border border-brand/20 rounded-[60px] p-12 lg:p-20 shadow-[0_64px_128px_rgba(2,6,23,0.3)] relative overflow-hidden h-full flex flex-col justify-between"
                >
                   {/* Background Elements */}
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,63,216,0.1),transparent)]" />
                   <Terminal className="absolute -bottom-10 -right-10 h-64 w-64 text-brand/5 rotate-[-15deg] pointer-events-none" />
                   
                   <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-12">
                         <div className="h-0.5 w-10 bg-brand" />
                         <span className="font-mono text-[11px] font-bold text-white/70 uppercase tracking-[0.3em]">Phase Description</span>
                      </div>
                      
                      <h3 className="text-white text-[32px] md:text-[44px] font-extrabold tracking-tight mb-8 leading-tight">
                         {steps[activeStep].title}
                      </h3>
                      
                      <p className="text-white/90 text-[18px] leading-relaxed mb-12 max-w-[500px]">
                         {steps[activeStep].description}
                      </p>
                      
                      <ul className="space-y-6">
                         {steps[activeStep].details.map((detail, i) => (
                           <li key={i} className="flex items-center gap-4 text-white/80 font-bold">
                              <div className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(26,63,216,1)]" />
                              {detail}
                           </li>
                         ))}
                      </ul>
                   </div>
                   
                   <div className="mt-20 pt-10 border-t border-white/20 relative z-10">
                      <div className="bg-black/60 border border-white/10 rounded-3xl p-8 font-mono">
                         <div className="flex items-center justify-between mb-4">
                            <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold italic">Registry Output</span>
                            <div className="flex gap-1.5">
                               {[1,2,3].map(i => <div key={i} className="h-2 w-2 rounded-full bg-white/10" />)}
                            </div>
                         </div>
                         <div className="text-brand font-bold text-[15px]">
                            {steps[activeStep].code}
                         </div>
                      </div>
                   </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
