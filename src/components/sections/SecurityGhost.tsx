"use client";

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Shield, EyeOff, Lock, Code2, ShieldAlert, FileOutput, Search, XCircle, Plus, Sparkles, Zap, Fingerprint } from "lucide-react";
import { useState, useEffect } from "react";

export function SecurityGhost() {
  const [scanStatus, setScanStatus] = useState<'scanning' | 'complete'>('scanning');

  const securityFeatures = [
    { text: "Generator meta and version strings stripped", icon: EyeOff },
    { text: "REST API discovery removed from <head>", icon: EyeOff },
    { text: "window.wp namespace cloaked to window.ncx", icon: Code2 },
    { text: "Asset path masking (optional proxy mode)", icon: Shield },
    { text: "HMAC-signed internal capture protocol", icon: Lock },
    { text: "Inline-script malicious-pattern scanning", icon: ShieldAlert },
    { text: "Path-traversal guards on every lookup", icon: Lock },
    { text: "Atomic file writes with rollback safety", icon: FileOutput },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setScanStatus((prev) => (prev === 'scanning' ? 'complete' : 'scanning'));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 px-8 lg:px-24 relative overflow-hidden border-y border-border">
      {/* Background Architectural Traits */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Column: The Cinematic "Cloaking" Visual */}
          <div className="relative h-[600px] flex items-center justify-center">
            
            {/* Back Card: Detectable WP (Vulnerable) - More subtle but distinct */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 0.2, x: -60, y: -60 }}
              viewport={{ once: true }}
              className="absolute w-full max-w-[480px] bg-white border border-border rounded-[48px] p-10 z-0 blur-[2px] scale-95"
            >
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-border">
                <div className="h-4 w-4 rounded-full bg-red-500/20" />
                <div className="text-[13px] font-mono font-bold text-text-muted uppercase tracking-[0.2em]">Scanner: Detect_Identity</div>
              </div>
              <div className="space-y-6 font-mono text-[14px] text-text-muted">
                <div className="flex justify-between"><span>server:</span> <span className="text-red-500 font-bold">Apache/2.4</span></div>
                <div className="flex justify-between"><span>stack:</span> <span className="text-red-500 font-bold">WordPress/6.4</span></div>
                <div className="flex justify-between"><span>fingerprint:</span> <span className="text-red-500 font-bold">DETECTED</span></div>
              </div>
            </motion.div>

            {/* Front Card: Nexora Stealth - High Contrast Readability */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[540px] bg-[#050B25] border border-white/10 rounded-[60px] shadow-[0_80px_160px_rgba(2,6,23,0.3)] p-12 z-10 overflow-hidden group"
            >
              {/* Refined Mesh Gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,63,216,0.15),transparent)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px]" />
              
              <AnimatePresence>
                {scanStatus === 'scanning' && (
                  <motion.div
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent z-20 shadow-[0_0_30px_rgba(26,63,216,0.8)]"
                  />
                )}
              </AnimatePresence>

              <div className="flex justify-between items-center mb-12 pb-8 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-6">
                  <div className={`h-16 w-16 rounded-[24px] flex items-center justify-center transition-all duration-700 shadow-2xl ${scanStatus === 'complete' ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30' : 'bg-brand/20 text-brand border border-brand/30'}`}>
                    {scanStatus === 'complete' ? <Shield size={32} /> : <Fingerprint size={32} className="animate-pulse" />}
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-[24px] tracking-tight mb-1">Nexora Stealth</h3>
                    <div className="text-brand font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
                      {scanStatus === 'complete' ? 'Protocol: Zero_Identity' : 'Syncing_Stealth_Layer...'}
                    </div>
                  </div>
                </div>
                <div className={`h-4 w-4 rounded-full ${scanStatus === 'complete' ? 'bg-emerald-500 animate-pulse shadow-[0_0_20px_rgba(16,185,129,0.5)]' : 'bg-brand animate-ping'}`} />
              </div>

              <div className="space-y-6 font-mono text-[16px] relative z-10">
                <div className="flex justify-between p-6 rounded-[24px] bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                  <span className="text-white/40 tracking-wider font-bold">INFRASTRUCTURE</span>
                  <span className="text-white font-extrabold">NGINX_STATIC</span>
                </div>
                <div className="flex justify-between p-6 rounded-[24px] bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                  <span className="text-white/40 tracking-wider font-bold">CORE_SIGNATURE</span>
                  <span className="text-[#F39A09] font-extrabold">NEXORA_v1.0</span>
                </div>
                <div className="flex justify-between p-6 rounded-[24px] bg-[#1A3FD8]/20 border border-[#1A3FD8]/50 shadow-[inset_0_0_20px_rgba(26,63,216,0.2)]">
                  <span className="text-white font-extrabold tracking-widest">GHOST_MODE</span>
                  <span className="flex items-center gap-3 text-emerald-400 font-extrabold">
                    <CheckCircle2 size={18} className="text-emerald-400" /> ACTIVE
                  </span>
                </div>
              </div>

              {/* Bottom Operational Status */}
              <div className="mt-12 flex items-center justify-between px-8 py-5 rounded-2xl bg-white/[0.03] border border-white/5 shadow-inner relative z-10">
                <div className="flex items-center gap-4">
                   <Lock size={20} className="text-brand" />
                   <span className="text-[12px] font-extrabold text-white/60 uppercase tracking-[0.2em]">Ghost Protocol Active</span>
                </div>
                <Sparkles size={18} className="text-[#F39A09] animate-pulse" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Fidelity Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-10">
               <div className="h-0.5 w-12 bg-[#F39A09]" />
               <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-[0.3em]">Infrastructure Stealth</span>
            </div>
            
            <h2 className="text-[32px] md:text-[50px] lg:text-[62px] font-extrabold text-obsidian tracking-[-0.05em] leading-[1.05] mb-12">
              Security through <br /> 
              <span className="text-brand">architectural</span> <br /> 
              invisibility.
            </h2>

            <p className="text-[17px] text-text-secondary mb-12 leading-relaxed font-medium max-w-[600px]">
              The fastest way to defeat an automated threat scan is to not look like WordPress. Our Ghost Protocol cloaks your identity at the delivery layer, making your infrastructure invisible to scanners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start group">
                  <div className="mr-6 mt-1 h-10 w-10 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#050B25] group-hover:border-brand/40 transition-all duration-500">
                    <feature.icon className="h-5 w-5 text-text-muted group-hover:text-brand transition-colors duration-500" />
                  </div>
                  <div>
                    <span className="text-[15px] font-extrabold text-obsidian leading-[1.4] transition-colors group-hover:text-brand">
                      {feature.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 flex gap-10 opacity-30 grayscale hover:opacity-60 transition-opacity items-center">
               <Lock size={28} />
               <Shield size={28} />
               <EyeOff size={28} />
               <div className="h-px w-full bg-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
