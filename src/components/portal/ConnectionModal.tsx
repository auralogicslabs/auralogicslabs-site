"use client";

import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Globe, 
  Box, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Loader2, 
  ShieldCheck, 
  RefreshCw,
  Server,
  Zap,
  Info
} from "lucide-react";
import { useState } from "react";
import { useInfrastructure } from "@/context/InfrastructureStore";

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectionModal({ isOpen, onClose }: ConnectionModalProps) {
  const [step, setStep] = useState(1);
  const [siteUrl, setSiteUrl] = useState("");
  const [siteName, setSiteName] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [connectionToken, setConnectionToken] = useState("");
  const { addSite, generateConnectionToken } = useInfrastructure();

  const handleNext = async () => {
    if (step === 1) {
      if (!siteUrl) return;
      setIsVerifying(true);
      // Infrastructure Discovery simulation
      await new Promise(r => setTimeout(r, 1500));
      setIsVerifying(false);
      setStep(2);
    } else if (step === 2) {
      setConnectionToken(generateConnectionToken(siteUrl));
      setStep(3);
    } else if (step === 3) {
      setIsVerifying(true);
      // Handshake simulation
      await addSite({ url: siteUrl, name: siteName || siteUrl });
      await new Promise(r => setTimeout(r, 2000));
      setIsVerifying(false);
      setStep(4);
    }
  };

  const copyToken = () => {
    navigator.clipboard.writeText(connectionToken);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-obsidian/60 backdrop-blur-xl"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-[640px] bg-white rounded-[48px] shadow-2xl overflow-hidden"
      >
        {/* Modal Header */}
        <div className="p-10 pb-0 flex justify-between items-start">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/5 border border-brand/10 rounded-full mb-4">
                 <div className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                 <span className="text-[10px] font-black text-brand uppercase tracking-widest">Handshake Protocol</span>
              </div>
              <h2 className="text-[32px] font-black text-obsidian tracking-tighter leading-tight">
                Connect <span className="text-brand">New Node.</span>
              </h2>
           </div>
           <button onClick={onClose} className="p-2 hover:bg-surface-soft rounded-full transition-colors text-text-muted hover:text-obsidian">
              <X size={24} />
           </button>
        </div>

        {/* Progress Tracker */}
        <div className="px-10 mt-8">
           <div className="flex items-center gap-2 h-1 w-full bg-surface-soft rounded-full overflow-hidden">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`flex-1 h-full transition-all duration-500 ${
                    step >= i ? "bg-brand" : "bg-transparent"
                  }`} 
                />
              ))}
           </div>
        </div>

        <div className="p-10 pt-8">
           <AnimatePresence mode="wait">
              {/* STEP 1: Discovery */}
              {step === 1 && (
                <motion.div 
                  key="step1" 
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                   <p className="text-[16px] text-text-muted font-medium leading-relaxed">
                     Enter the URL of the WordPress site you want to modernize. We'll run a quick infrastructure discovery.
                   </p>
                   <div className="space-y-4">
                      <div className="bg-surface-soft border border-border rounded-2xl p-5 px-8 flex items-center gap-4 focus-within:border-brand transition-all">
                         <Globe size={20} className="text-text-muted" />
                         <input 
                           type="url" 
                           placeholder="https://your-wordpress-site.com"
                           className="w-full bg-transparent border-none text-[18px] font-bold text-obsidian focus:ring-0 placeholder:text-text-muted/30"
                           value={siteUrl}
                           onChange={e => setSiteUrl(e.target.value)}
                         />
                      </div>
                      <div className="bg-surface-soft border border-border rounded-2xl p-5 px-8 flex items-center gap-4 focus-within:border-brand transition-all">
                         <Info size={20} className="text-text-muted" />
                         <input 
                           type="text" 
                           placeholder="Internal Node Name (Optional)"
                           className="w-full bg-transparent border-none text-[16px] font-bold text-obsidian focus:ring-0 placeholder:text-text-muted/30"
                           value={siteName}
                           onChange={e => setSiteName(e.target.value)}
                         />
                      </div>
                   </div>
                </motion.div>
              )}

              {/* STEP 2: Installation */}
              {step === 2 && (
                <motion.div 
                  key="step2" 
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                   <div className="bg-brand/5 border border-brand/10 p-8 rounded-[32px] flex items-center gap-6">
                      <div className="h-16 w-16 bg-brand rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand/20">
                         <Box size={32} className="text-white" />
                      </div>
                      <div>
                         <h3 className="text-[18px] font-black text-obsidian mb-1">Install Nexora Engine</h3>
                         <p className="text-[13px] text-text-muted font-medium">Download and install the Auralogics Core plugin on your WordPress instance.</p>
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <button className="flex flex-col items-center gap-3 p-6 rounded-[24px] border border-border hover:border-brand hover:bg-brand/5 transition-all group">
                         <Zap size={24} className="text-brand" />
                         <span className="text-[12px] font-black uppercase tracking-widest text-obsidian">Community Core</span>
                      </button>
                      <button className="flex flex-col items-center gap-3 p-6 rounded-[24px] border border-border hover:border-brand hover:bg-brand/5 transition-all group">
                         <ShieldCheck size={24} className="text-brand" />
                         <span className="text-[12px] font-black uppercase tracking-widest text-obsidian">Enterprise Node</span>
                      </button>
                   </div>
                </motion.div>
              )}

              {/* STEP 3: Handshake Token */}
              {step === 3 && (
                <motion.div 
                  key="step3" 
                  initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                   <p className="text-[16px] text-text-muted font-medium">Copy this secure handshake token and paste it into the Nexora settings on your WordPress site.</p>
                   <div className="relative group">
                      <div className="bg-[#050B25] p-8 rounded-[24px] font-mono text-[18px] text-brand-soft font-bold break-all border border-white/5 pr-20">
                        {connectionToken}
                      </div>
                      <button 
                        onClick={copyToken}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-brand text-white rounded-xl transition-all"
                      >
                         <Copy size={20} />
                      </button>
                   </div>
                   <div className="flex items-center gap-4 p-5 bg-amber-500/5 border border-amber-500/10 rounded-2xl">
                      <ShieldCheck size={18} className="text-amber-500 flex-shrink-0" />
                      <p className="text-[12px] text-text-muted font-medium">Tokens expire in 24 hours. This token is unique to <span className="text-obsidian font-bold">{siteUrl}</span>.</p>
                   </div>
                </motion.div>
              )}

              {/* STEP 4: Success */}
              {step === 4 && (
                <motion.div 
                  key="step4" 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                   <div className="h-24 w-24 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} className="text-emerald-500" />
                   </div>
                   <h3 className="text-[28px] font-black text-obsidian mb-4">Handshake Successful.</h3>
                   <p className="text-text-muted text-[16px] font-medium max-w-[340px] mx-auto mb-10">
                      Your infrastructure node is now connected to the Auralogics command portal.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-surface-soft rounded-2xl border border-border">
                         <div className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Status</div>
                         <div className="text-[14px] font-black text-emerald-500 uppercase">Synchronized</div>
                      </div>
                      <div className="p-4 bg-surface-soft rounded-2xl border border-border">
                         <div className="text-[10px] font-black text-text-muted uppercase tracking-widest mb-1">Environment</div>
                         <div className="text-[14px] font-black text-obsidian uppercase">Production</div>
                      </div>
                   </div>
                </motion.div>
              )}
           </AnimatePresence>

           <div className="mt-12">
              {step < 4 ? (
                <button 
                  onClick={handleNext}
                  disabled={isVerifying || (step === 1 && !siteUrl)}
                  className="w-full bg-obsidian text-white py-5 rounded-[24px] font-black text-[18px] flex items-center justify-center gap-3 shadow-2xl hover:scale-[1.02] transition-transform disabled:opacity-50"
                >
                   {isVerifying ? (
                     <>
                        <RefreshCw size={20} className="animate-spin" />
                        Validating Infrastructure...
                     </>
                   ) : (
                     <>
                        {step === 3 ? "Complete Handshake" : "Synchronize & Next"}
                        <ArrowRight size={20} />
                     </>
                   )}
                </button>
              ) : (
                <button 
                  onClick={onClose}
                  className="w-full bg-brand text-white py-5 rounded-[24px] font-black text-[18px] shadow-2xl hover:scale-[1.02] transition-transform"
                >
                   Enter Dashboard
                </button>
              )}
           </div>
        </div>
      </motion.div>
    </div>
  );
}
