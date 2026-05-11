"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Play, Sparkles, Plus, Globe, Shield, Zap, Cpu, Code2, ChevronDown, Activity, Terminal, Layers, Wifi, BarChart3, Crosshair, Frame, X, CheckCircle2, Lock, Mail, AlertCircle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export function Hero() {
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [url, setUrl] = useState("");
  const [isUrlValid, setIsUrlValid] = useState(false);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // URL Validation Logic
  useEffect(() => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d%_.~+@]*)?$','i'); // fragment locator
    setIsUrlValid(!!pattern.test(url));
  }, [url]);

  const handleNext = () => {
    if (wizardStep === 1 && !isUrlValid) return;
    setWizardStep(prev => prev + 1);
  };

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* THE CENTERED CIRCLE DOTTED PATTERN */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-border)_2px,transparent_0)] bg-[size:64px_64px] opacity-40 pointer-events-none" />
      
      {/* THE SLIGHT ORANGE AMBIENT GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           style={{ opacity }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full" 
         />
         <motion.div 
           style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.15, 0]) }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F39A09]/20 blur-[120px] rounded-full" 
         />
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-8 lg:px-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 bg-white border border-border px-5 py-2 rounded-full shadow-sm mb-12 hover:border-brand/40 transition-colors cursor-default"
          >
            <Sparkles className="h-4 w-4 text-brand" />
            <span className="text-[12px] font-bold text-obsidian uppercase tracking-[0.2em]">Infrastructure Intelligence</span>
          </motion.div>

          <motion.h1
            style={{ y, opacity }}
            className="text-[48px] md:text-[64px] lg:text-[84px] font-extrabold text-obsidian leading-[0.95] tracking-[-0.06em] mb-12"
          >
            WordPress at the <br /> <span className="text-brand">Speed of Light.</span>
          </motion.h1>

          <motion.p
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), opacity }}
            className="text-[18px] md:text-[20px] text-text-secondary max-w-[750px] leading-[1.6] mb-16 font-medium"
          >
            Nexora Engine transforms standard WordPress into a high-performance headless architecture. 22ms TTFB. Ghost Protocol security. Zero code changes required.
          </motion.p>

          <motion.div
            style={{ opacity }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button 
              onClick={() => { setShowWizard(true); setWizardStep(1); }}
              className="w-full sm:w-auto rounded-2xl bg-obsidian px-12 py-6 text-[18px] font-bold text-white shadow-[0_32px_64px_rgba(2,6,23,0.3)] hover:shadow-[0_48px_96px_rgba(2,6,23,0.4)] hover:-translate-y-1.5 transition-all duration-300 group flex items-center justify-center gap-3"
            >
              Initiate Project
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link 
              href="/#methodology"
              className="w-full sm:w-auto rounded-2xl border-2 border-border bg-white px-12 py-6 text-[18px] font-bold text-obsidian hover:bg-surface-soft transition-all duration-300"
            >
              The Methodology
            </Link>
          </motion.div>
        </div>
      </div>

      {/* REFINED WIZARD MODAL */}
      <AnimatePresence>
        {showWizard && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWizard(false)}
              className="absolute inset-0 bg-obsidian/80 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-[1000px] bg-white rounded-[48px] shadow-[0_80px_160px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row"
            >
              <div className="hidden md:flex w-2/5 bg-[#050B25] p-16 flex-col justify-between text-white relative overflow-hidden">
                 <div className="relative z-10">
                    <Sparkles className="text-brand mb-8" size={40} />
                    <h3 className="text-[32px] font-extrabold tracking-tight mb-4 leading-tight">Project <br />Initialization.</h3>
                    <p className="text-white/40 text-[16px] font-medium leading-relaxed mb-12">Connect your site to the Nexora Mothership.</p>
                 </div>
                 <div className="relative z-10 space-y-8">
                    {[
                      { s: 1, t: "Site Identification" },
                      { s: 2, t: "Deployment Core" },
                      { s: 3, t: "Mothership Sync" }
                    ].map(step => (
                      <div key={step.s} className="flex items-center gap-6">
                         <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-black text-[14px] transition-all duration-500 ${
                           wizardStep >= step.s ? 'bg-brand text-white shadow-[0_0_20px_rgba(26,63,216,0.6)]' : 'bg-white/10 text-white/20'
                         }`}>
                           {wizardStep > step.s ? <CheckCircle2 size={18} /> : step.s}
                         </div>
                         <span className={`text-[15px] font-bold ${
                           wizardStep >= step.s ? 'text-white' : 'text-white/20'
                         }`}>{step.t}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="flex-1 p-12 lg:p-20 relative bg-white">
                <button 
                  onClick={() => setShowWizard(false)}
                  className="absolute top-8 right-8 h-10 w-10 flex items-center justify-center rounded-full bg-surface-soft hover:bg-obsidian hover:text-white transition-all"
                >
                  <X size={20} />
                </button>

                <AnimatePresence mode="wait">
                  {wizardStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <h2 className="text-[36px] font-extrabold text-obsidian mb-4 tracking-tight">Register Origin.</h2>
                      <p className="text-text-muted text-[16px] font-medium mb-12">Enter your WordPress URL.</p>

                      <div className="space-y-6">
                         <div className={`group relative bg-surface-soft border-2 rounded-[24px] p-2 flex items-center transition-all ${
                           url ? (isUrlValid ? 'border-emerald-500/50' : 'border-[#FF4D4D]/50') : 'border-border focus-within:border-brand'
                         }`}>
                            <Globe className={`ml-4 ${url ? (isUrlValid ? 'text-emerald-500' : 'text-[#FF4D4D]') : 'text-text-muted'}`} size={24} />
                            <input 
                              type="text" 
                              required
                              placeholder="https://your-site.com"
                              className="flex-1 bg-transparent border-none text-[20px] font-bold text-obsidian focus:ring-0 px-4 py-4"
                              value={url}
                              onChange={(e) => setUrl(e.target.value)}
                            />
                         </div>
                         <div className="pt-8">
                            <button 
                              disabled={!isUrlValid}
                              onClick={handleNext}
                              className={`w-full py-6 rounded-2xl font-black text-[18px] shadow-xl transition-all ${
                                isUrlValid ? 'bg-brand text-white hover:scale-[1.02]' : 'bg-surface-soft text-text-muted cursor-not-allowed opacity-50'
                              }`}
                            >
                               Start Deployment
                            </button>
                         </div>
                      </div>
                      <div className="mt-12 p-6 bg-surface-soft rounded-2xl border border-border flex gap-4">
                         <Zap className="text-brand flex-shrink-0" size={20} />
                         <p className="text-[12px] text-text-muted font-medium">Use <span className="text-brand font-black">demo / demo</span> for instant preview access.</p>
                      </div>
                    </motion.div>
                  )}

                  {wizardStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="h-full flex flex-col justify-center"
                    >
                      <h2 className="text-[32px] font-extrabold text-obsidian mb-10 tracking-tight">Deploy Core.</h2>
                      <div className="space-y-6">
                         <div className="bg-surface-soft border border-border rounded-3xl p-8 flex items-center justify-between group hover:border-brand cursor-pointer transition-all">
                            <div className="flex items-center gap-6">
                               <Code2 className="text-brand" size={28} />
                               <div className="text-[16px] font-black text-obsidian">Nexora Core (.zip)</div>
                            </div>
                            <Plus className="text-brand" size={24} />
                         </div>
                         <button 
                           onClick={handleNext}
                           className="w-full bg-brand text-white py-6 rounded-2xl font-black text-[18px] shadow-xl hover:scale-[1.02] transition-transform"
                         >
                            I've Installed the Core
                         </button>
                      </div>
                    </motion.div>
                  )}

                  {wizardStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="h-full flex flex-col justify-center text-center"
                    >
                       <div className="h-32 w-32 bg-emerald-500/10 border-2 border-emerald-500 rounded-[40px] flex items-center justify-center mx-auto mb-10">
                          <CheckCircle2 className="text-emerald-500" size={64} strokeWidth={3} />
                       </div>
                       <h2 className="text-[44px] font-black text-obsidian tracking-tighter leading-none mb-4">Mothership <br />Connected.</h2>
                       <button 
                         onClick={() => window.location.href = '/portal'}
                         className="w-full bg-brand text-white py-6 rounded-2xl font-black text-[20px] shadow-2xl hover:scale-[1.05] transition-transform"
                       >
                          Enter Command Portal
                       </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
      >
        <ChevronDown size={24} className="text-brand animate-bounce" />
      </motion.div>
    </section>
  );
}
