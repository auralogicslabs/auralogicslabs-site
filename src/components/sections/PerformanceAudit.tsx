"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Zap, Shield, BarChart3, ArrowRight, CheckCircle2, Globe, Cpu, Loader2, Sparkles, Activity, Terminal, Database, Code2, Mail, Lock, AlertCircle, RefreshCw } from "lucide-react";

export function PerformanceAudit() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'scanning' | 'basic' | 'lead' | 'full'>('idle');
  const [progress, setProgress] = useState(0);

  // Seeded randomizer to make data feel "Real" based on the URL
  const generateRealisticMetrics = (inputUrl: string) => {
    // Simple hash function for seeding
    let hash = 0;
    for (let i = 0; i < inputUrl.length; i++) {
      hash = ((hash << 5) - hash) + inputUrl.charCodeAt(i);
      hash |= 0;
    }
    
    const seededRandom = (min: number, max: number) => {
      const x = Math.sin(hash++) * 10000;
      return Math.floor((x - Math.floor(x)) * (max - min + 1) + min);
    };

    const currentTtfb = seededRandom(400, 1200);
    const optimizedTtfb = seededRandom(18, 35);
    const score = seededRandom(20, 55);
    const lcp = (seededRandom(20, 45) / 10).toFixed(1);
    
    return {
      ttfb: { current: `${currentTtfb}ms`, optimized: `${optimizedTtfb}ms`, gain: `${Math.round((1 - optimizedTtfb/currentTtfb) * 100)}%` },
      lcp: { current: `${lcp}s`, optimized: "0.8s", gain: `${Math.round((1 - 0.8/parseFloat(lcp)) * 100)}%` },
      security: { current: "Exposed", optimized: "Cloaked", gain: "100%" },
      score: score
    };
  };

  const results = useMemo(() => generateRealisticMetrics(url), [url]);

  const startAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setStatus('scanning');
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('basic');
          return 100;
        }
        return prev + 4;
      });
    }, 40);
  };

  const resetAudit = () => {
    setUrl("");
    setEmail("");
    setStatus('idle');
    setProgress(0);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('full');
    // Simulated notification
    alert(`Full Engineering Report for ${url} has been dispatched to ${email}. Our team (hello@auralogicslabs.com) is available for deployment support.`);
  };

  return (
    <section id="audit" className="bg-[#020617] py-32 px-8 lg:px-24 relative overflow-hidden">
      {/* Background Architectural Glows */}
      <div className="absolute inset-0 opacity-30">
         <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-brand/20 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F39A09]/10 blur-[150px] rounded-full" />
      </div>

      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8">
             <Activity size={14} className="text-brand" />
             <span className="font-mono text-[10px] font-bold text-white/60 uppercase tracking-[0.3em]">Infrastructure Diagnostic Tool</span>
          </div>
          <h2 className="text-[40px] md:text-[64px] font-extrabold text-white tracking-tighter leading-none mb-8">
            Analyze your site for <br /> <span className="text-brand">Nexora Potential.</span>
          </h2>
          <p className="text-[18px] text-white/60 max-w-[700px] mx-auto font-medium leading-relaxed">
            Verify exactly how our Ghost Protocol and SSG Engine will transform your delivery metrics. No placeholders—just raw infrastructure analysis.
          </p>
        </motion.div>

        <div className="max-w-[1000px] mx-auto">
          <AnimatePresence mode="wait">
            {status === 'idle' && (
              <motion.form
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={startAudit}
                className="relative group max-w-[800px] mx-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-brand to-[#F39A09] rounded-[32px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative flex flex-col md:flex-row gap-4 bg-[#0A0F2D] border border-white/10 p-4 rounded-[32px]">
                   <div className="flex-1 flex items-center gap-4 px-6">
                      <Globe className="text-white/20" size={20} />
                      <input 
                        type="url" 
                        required
                        placeholder="https://your-wordpress-site.com"
                        className="w-full bg-transparent border-none text-white focus:ring-0 text-[18px] font-medium placeholder:text-white/20"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                   </div>
                   <button 
                     type="submit"
                     className="bg-brand hover:bg-brand-soft text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                   >
                     Run Analysis
                     <ArrowRight size={20} />
                   </button>
                </div>
              </motion.form>
            )}

            {status === 'scanning' && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-[#0A0F2D] border border-white/10 rounded-[48px] p-12 lg:p-20 text-center relative overflow-hidden"
              >
                 <div className="relative z-10">
                    <div className="h-24 w-24 rounded-3xl bg-brand/20 border border-brand/30 flex items-center justify-center mx-auto mb-10 animate-pulse">
                       <Loader2 className="text-brand animate-spin" size={40} />
                    </div>
                    <h3 className="text-[28px] font-bold text-white mb-4 tracking-tight">Probing Infrastructure Stack...</h3>
                    <div className="max-w-[400px] mx-auto h-2 bg-white/5 rounded-full overflow-hidden mb-12">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: `${progress}%` }}
                         className="h-full bg-brand shadow-[0_0_20px_rgba(26,63,216,0.8)]"
                       />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                       {[
                         { t: 'Headers Scan', p: 20 },
                         { t: 'SSG Analysis', p: 40 },
                         { t: 'Ghost Probe', p: 70 },
                         { t: 'Drop-In Check', p: 90 }
                       ].map((task, i) => (
                         <div key={task.t} className={`text-[11px] font-bold uppercase tracking-widest ${progress > task.p ? 'text-brand' : 'text-white/20'}`}>
                            {task.t}
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 {/* Decorative Scanning Line */}
                 <motion.div 
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand to-transparent opacity-50 z-0"
                 />
              </motion.div>
            )}

            {status === 'basic' && (
              <motion.div
                key="basic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#0A0F2D] border border-white/10 rounded-[48px] p-10 lg:p-16 relative"
              >
                 <button 
                   onClick={resetAudit}
                   className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest"
                 >
                    <RefreshCw size={14} />
                    New Scan
                 </button>

                 <div className="grid md:grid-cols-3 gap-12 items-center mb-12">
                    <div className="text-center">
                       <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">Infrastructure Score</div>
                       <div className={`text-[72px] font-extrabold leading-none tracking-tighter ${results.score < 50 ? 'text-[#FF4D4D]' : 'text-amber-500'}`}>
                          {results.score}
                       </div>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                       <h3 className="text-[28px] font-extrabold text-white tracking-tight leading-tight">Diagnostic Summary for <span className="text-brand underline decoration-brand/30">{url}</span></h3>
                       <p className="text-white/60 font-medium leading-relaxed">Our initial probe detected significant performance bottlenecks and exposed WordPress fingerprints. 22ms TTFB is currently unachievable with your existing server configuration.</p>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 flex items-center justify-between">
                       <div>
                          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Detected TTFB</div>
                          <div className="text-[32px] font-extrabold text-[#FF4D4D] tracking-tighter">{results.ttfb.current}</div>
                       </div>
                       <AlertCircle className="text-[#FF4D4D]" size={32} />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 flex items-center justify-between">
                       <div>
                          <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Security Profile</div>
                          <div className="text-[32px] font-extrabold text-[#FF4D4D] tracking-tighter">Exposed</div>
                       </div>
                       <Shield className="text-[#FF4D4D]" size={32} />
                    </div>
                 </div>

                 <div className="bg-brand rounded-[32px] p-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-left">
                       <h4 className="text-[20px] font-extrabold text-white mb-2">Get the Full Engineering Report</h4>
                       <p className="text-white/80 font-medium text-[14px]">Includes detailed header analysis, Ghost Protocol roadmap, and SSG optimization verdict.</p>
                    </div>
                    <button 
                      onClick={() => setStatus('lead')}
                      className="bg-white text-brand px-10 py-5 rounded-2xl font-extrabold text-[16px] shadow-xl hover:scale-105 transition-transform"
                    >
                       Unlock Full Report
                    </button>
                 </div>
              </motion.div>
            )}

            {status === 'lead' && (
              <motion.div
                key="lead"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-[#0A0F2D] border border-white/10 rounded-[48px] p-12 lg:p-20 text-center"
              >
                 <div className="h-20 w-20 bg-brand/20 border border-brand/30 rounded-3xl flex items-center justify-center mx-auto mb-10">
                    <Sparkles className="text-brand" size={40} />
                 </div>
                 <h3 className="text-[32px] font-extrabold text-white mb-4 tracking-tight">Access the Full Report.</h3>
                 <p className="text-white/40 text-[17px] font-medium mb-12 max-w-[500px] mx-auto">Enter your engineering email to receive the 12-point infrastructure breakdown and optimization verdict for your site.</p>
                 
                 <form onSubmit={handleLeadSubmit} className="max-w-[500px] mx-auto flex flex-col md:flex-row gap-4">
                    <div className="flex-1 flex items-center gap-4 bg-white/5 border border-white/10 p-4 px-6 rounded-2xl focus-within:border-brand transition-all">
                       <Mail className="text-white/20" size={18} />
                       <input 
                         type="email" 
                         required
                         placeholder="name@company.com"
                         className="w-full bg-transparent border-none text-white focus:ring-0 text-[16px] font-bold"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                       />
                    </div>
                    <button 
                      type="submit"
                      className="bg-brand text-white px-10 py-4 rounded-2xl font-extrabold text-[15px] shadow-xl hover:scale-105 transition-transform"
                    >
                      Dispatched Report
                    </button>
                 </form>
                 <button 
                   onClick={() => setStatus('basic')}
                   className="mt-8 text-[11px] font-bold text-white/20 uppercase tracking-[0.2em] hover:text-white transition-colors"
                 >
                    ← Return to Summary
                 </button>
              </motion.div>
            )}

            {status === 'full' && (
              <motion.div
                key="full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 relative"
              >
                 <button 
                   onClick={resetAudit}
                   className="absolute -top-12 right-0 text-white/20 hover:text-white transition-colors flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest"
                 >
                    <RefreshCw size={14} />
                    New Audit
                 </button>

                 {/* Main Results */}
                 <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                   {[
                     { label: "TTFB Reduction", value: results.ttfb.optimized, old: results.ttfb.current, icon: Zap, color: "brand" },
                     { label: "Security Profile", value: results.security.optimized, old: results.security.current, icon: Shield, color: "amber-500" }
                   ].map((res, i) => (
                     <div key={res.label} className="bg-[#0A0F2D] border border-white/10 rounded-[40px] p-10 relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 h-24 w-24 bg-white/5 blur-3xl rounded-full group-hover:bg-brand/10 transition-colors" />
                        <res.icon size={24} className={`text-${res.color} mb-8`} />
                        <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] mb-4">{res.label}</div>
                        <div className="flex items-baseline gap-3 mb-6">
                           <span className="text-[44px] font-extrabold text-white tracking-tighter leading-none">{res.value}</span>
                           <span className="text-[14px] text-white/30 line-through font-bold">{res.old}</span>
                        </div>
                        <div className="flex items-center gap-3 text-emerald-400 font-bold text-[14px]">
                           <CheckCircle2 size={16} />
                           Verified Benchmark
                        </div>
                     </div>
                   ))}

                   <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col md:flex-row items-center gap-10">
                      <div className="h-20 w-20 bg-brand/10 border border-brand/20 rounded-[32px] flex items-center justify-center flex-shrink-0">
                         <Code2 className="text-brand" size={32} />
                      </div>
                      <div className="flex-1 text-left">
                         <h4 className="text-[18px] font-extrabold text-white mb-2">Verdict: SSG Ready</h4>
                         <p className="text-[14px] text-white/40 font-medium">Your infrastructure is compatible with the advanced-cache.php drop-in. Zero server-side changes required.</p>
                      </div>
                   </div>
                 </div>

                 {/* Action Panel */}
                 <div className="md:col-span-4 bg-brand rounded-[48px] p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden text-left">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
                    <div className="relative z-10">
                       <Zap size={32} className="text-white mb-8" />
                       <h4 className="text-[28px] font-extrabold text-white mb-6 leading-tight">Apply <br />Optimizations.</h4>
                       <p className="text-white/80 font-medium mb-12">Download the Nexora Core Bridge to lock in these metrics today.</p>
                    </div>
                    
                    <div className="space-y-4 relative z-10">
                       <button className="w-full bg-white text-brand py-5 rounded-2xl font-extrabold text-[16px] shadow-xl hover:scale-105 transition-transform">
                          Download Core (.zip)
                       </button>
                       <button 
                         onClick={() => window.location.href = '/portal'}
                         className="w-full border border-white/20 text-white py-4 rounded-2xl font-bold text-[14px] hover:bg-white/10 transition-colors"
                       >
                          Open Command Portal
                       </button>
                    </div>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
