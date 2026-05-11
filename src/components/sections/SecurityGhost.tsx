"use client";

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Shield, EyeOff, Lock, Code2, ShieldAlert, FileOutput, Search, XCircle, Plus } from "lucide-react";
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
    { text: "Path-traversal guards on every static lookup", icon: Lock },
    { text: "Atomic file writes with rollback safety", icon: FileOutput },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setScanStatus((prev) => (prev === 'scanning' ? 'complete' : 'scanning'));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-32 px-8 lg:px-24 relative overflow-hidden">
      {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Left Column: The "Cloaking" Illustration */}
          <div className="relative h-[550px] flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-brand/5 blur-[120px] rounded-full" />

            {/* Back Card: Identifiable WordPress */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 0.3, x: -40, y: -40 }}
              viewport={{ once: true }}
              className="absolute w-full max-w-[420px] bg-white border border-border rounded-[24px] shadow-sm p-8 z-0 scale-90 blur-[0.5px]"
            >
              <div className="flex items-center gap-3 mb-8 pb-5 border-b border-border/50">
                <div className="h-3 w-3 rounded-full bg-border-strong" />
                <div className="text-[12px] font-mono font-bold text-text-muted uppercase tracking-widest">SCANNER: DETECTED_WP</div>
              </div>
              <div className="space-y-4 font-mono text-[13px] text-text-muted">
                <div className="flex justify-between"><span>server:</span> <span className="text-text-primary">Apache/2.4.41</span></div>
                <div className="flex justify-between"><span>x-powered-by:</span> <span className="text-[#EF4444] font-bold underline">PHP/8.1.0</span></div>
                <div className="flex justify-between"><span>wp-version:</span> <span className="text-[#EF4444] font-bold underline">6.4.3</span></div>
                <div className="flex justify-between"><span>rest-api:</span> <span className="text-[#EF4444] font-bold">VULNERABLE</span></div>
              </div>
            </motion.div>

            {/* Front Card: Stealth Nexora Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[460px] bg-obsidian border border-white/10 rounded-[32px] shadow-[0_48px_96px_rgba(2,6,23,0.4)] p-10 z-10 overflow-hidden"
            >
              <Plus className="absolute top-6 left-6 h-4 w-4 text-white/10" />

              {/* Animated Scanner Beam */}
              <AnimatePresence>
                {scanStatus === 'scanning' && (
                  <motion.div
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent z-20 shadow-[0_0_20px_var(--color-brand)]"
                  />
                )}
              </AnimatePresence>

              <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg ${scanStatus === 'complete' ? 'bg-success/20 text-success' : 'bg-brand/20 text-brand'}`}>
                    {scanStatus === 'complete' ? <Shield size={22} /> : <Search size={22} className="animate-pulse" />}
                  </div>
                  <div>
                    <div className="text-white font-bold text-[16px] mb-0.5">Nexora Stealth</div>
                    <div className="text-white/40 text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
                      {scanStatus === 'complete' ? 'STATUS: ZERO_FINGERPRINT' : 'SCANNING_ENVIRONMENT...'}
                    </div>
                  </div>
                </div>
                {scanStatus === 'complete' ? <CheckCircle2 className="text-success h-6 w-6" /> : <div className="h-6 w-6 rounded-full border-2 border-brand/30 border-t-brand animate-spin" />}
              </div>

              <div className="space-y-4 font-mono text-[14px]">
                <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-white/40">server:</span>
                  <span className="text-white font-bold">nginx</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-white/40">x-powered-by:</span>
                  <span className="text-white font-bold">Next.js</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-brand/10 border border-brand/20">
                  <span className="text-brand font-bold">wp-identity:</span>
                  <span className="flex items-center gap-2 text-success font-bold">
                    <XCircle size={16} className="text-white/40" /> NOT FOUND
                  </span>
                </div>
              </div>

              {/* Bottom Security Badge */}
              <div className="mt-10 flex items-center gap-4 px-5 py-4 rounded-2xl bg-brand/20 border border-brand/30 shadow-inner">
                <ShieldCheck size={22} className="text-brand" />
                <span className="text-[11px] font-bold text-brand uppercase tracking-[0.2em]">Ghost Protocol Active</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Features Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-widest mb-6 block">Stealth Hardening</span>
            <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] mb-10 leading-[1.05]">
              Security through <br /> <span className="text-brand">architectural invisibility.</span>
            </h2>
            <p className="text-[20px] text-text-secondary mb-12 leading-[1.6] max-w-[540px]">
              The fastest way to defeat a WordPress vulnerability scan is to not look like WordPress. Our Ghost Protocol cloaks your infrastructure at the delivery layer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start group">
                  <div className="mr-5 mt-0.5 h-8 w-8 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-obsidian group-hover:border-obsidian transition-all duration-500">
                    <feature.icon className="h-4 w-4 text-text-muted group-hover:text-white transition-colors duration-500" />
                  </div>
                  <span className="text-[16px] font-bold text-obsidian leading-[1.4] transition-colors group-hover:text-brand">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ShieldCheck({ size, className }: { size: number, className?: string }) {
  return <Shield className={className} size={size} />;
}
