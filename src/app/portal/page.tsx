"use client";

import { motion } from "motion/react";
import { Sparkles, ArrowRight, Shield, Database, Lock, Terminal, Activity, Zap, User, Key } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PortalPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // THE DEMO BYPASS: Allows immediate access to the high-end dashboard
    if (username.toLowerCase() === 'demo' && password.toLowerCase() === 'demo') {
      sessionStorage.setItem('ncx_auth', 'active');
      router.push('/portal/dashboard');
    } else {
      setError("Infrastructure credentials not recognized. Try 'demo / demo' for preview access.");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand/20 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#F39A09]/10 blur-[150px] rounded-full" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      {/* Brand Header */}
      <Link href="/" className="mb-16 relative z-10 group">
         <img 
           src="/auralogicslabs.svg" 
           alt="Auralogics Labs" 
           className="h-12 w-auto brightness-0 invert transition-transform group-hover:scale-105" 
         />
      </Link>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-[480px] bg-[#0A0F2D] border border-white/10 rounded-[48px] p-12 lg:p-16 shadow-[0_80px_160px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Card Decorative Elements */}
        <div className="absolute top-0 right-0 p-8 opacity-20">
           <Database className="text-brand" size={40} />
        </div>
        
        <div className="relative z-10">
           <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
              <Lock size={12} className="text-brand" />
              <span className="font-mono text-[9px] font-bold text-white/60 uppercase tracking-[0.3em]">Secure Access Protocol</span>
           </div>

           <h1 className="text-[32px] font-extrabold text-white tracking-tight mb-4 leading-tight">
             Command <br /> <span className="text-brand">Portal.</span>
           </h1>
           <p className="text-white/40 text-[15px] font-medium mb-10 leading-relaxed">
             Access Nexora Engine diagnostics and global delivery metrics. Use <span className="text-white">demo / demo</span> for instant preview.
           </p>

           <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                 <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest ml-4">Identifier</label>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 px-6 flex items-center gap-4 focus-within:border-brand transition-all">
                    <User size={18} className="text-white/20" />
                    <input 
                      type="text" 
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="demo"
                      className="w-full bg-transparent border-none text-white font-bold focus:ring-0 placeholder:text-white/10"
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-[11px] font-bold text-white/60 uppercase tracking-widest ml-4">Access Secret</label>
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-4 px-6 flex items-center gap-4 focus-within:border-brand transition-all">
                    <Key size={18} className="text-white/20" />
                    <input 
                      type="password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="demo"
                      className="w-full bg-transparent border-none text-white font-bold focus:ring-0 placeholder:text-white/10"
                    />
                 </div>
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#FF4D4D] text-[12px] font-bold text-center"
                >
                  {error}
                </motion.p>
              )}

              <div className="pt-4">
                 <button 
                   type="submit"
                   className="w-full bg-brand text-white py-5 rounded-2xl font-extrabold text-[16px] shadow-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 group"
                 >
                    Initialize Access
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </form>

           <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
              <a href="#" className="text-[13px] font-bold text-white/40 hover:text-white transition-colors">Request Access</a>
              <a href="#" className="text-[13px] font-bold text-white/40 hover:text-white transition-colors">Emergency Recovery</a>
           </div>
        </div>
      </motion.div>

      {/* Portal Traits */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40">
         {[
           { icon: Zap, label: 'Real-time Hits' },
           { icon: Shield, label: 'Ghost Status' },
           { icon: Terminal, label: 'CLI Access' },
           { icon: Activity, label: 'Cache Health' }
         ].map((t) => (
           <div key={t.label} className="flex flex-col items-center gap-3">
              <t.icon className="text-white" size={20} strokeWidth={1} />
              <span className="text-[9px] font-bold text-white uppercase tracking-[0.3em]">{t.label}</span>
           </div>
         ))}
      </div>
    </div>
  );
}
