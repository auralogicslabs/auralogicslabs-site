"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search, Zap, Shield, ArrowRight, CheckCircle2, Globe,
  Loader2, Sparkles, Activity, Code2, Mail, AlertCircle,
  RefreshCw, BarChart3, Clock, TrendingDown, ExternalLink,
  AlertTriangle, Server, Gauge, Lock, Cpu
} from "lucide-react";
import { sendAuditReport } from "@/app/actions/email";
import { fetchSiteMetrics, type SiteMetrics } from "@/app/actions/metrics";

// Score colour helper
function scoreColor(s: number) {
  if (s >= 90) return "text-emerald-400";
  if (s >= 50) return "text-amber-400";
  return "text-[#FF4D4D]";
}
function scoreLabel(s: number) {
  if (s >= 90) return "Optimal";
  if (s >= 50) return "Average";
  return "Critical";
}

// Animated ring score with gradient
function ScoreRing({ score }: { score: number }) {
  const r = 52, circ = 2 * Math.PI * r;
  const filled = (score / 100) * circ;
  const color = score >= 90 ? "#10b981" : score >= 50 ? "#f59e0b" : "#FF4D4D";
  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r={r} stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="none" />
        <motion.circle
          cx="60" cy="60" r={r} stroke="url(#scoreGradient)" strokeWidth="8" fill="none"
          strokeDasharray={`${circ}`}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - filled }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className={`text-[42px] font-black leading-none ${scoreColor(score)}`}
        >
          {score}
        </motion.span>
        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mt-1">Efficiency</span>
      </div>
    </div>
  );
}

export function PerformanceAudit() {
  const [url, setUrl]     = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "scanning" | "basic" | "lead" | "full">("idle");
  const [progress, setProgress] = useState(0);
  const [scanLabel, setScanLabel] = useState("");
  const [metrics, setMetrics] = useState<SiteMetrics | null>(null);
  const [apiError, setApiError] = useState("");

  const scanSteps = [
    "Establishing Secure Handshake…",
    "Intercepting Edge Packets…",
    "Analysing Virtual DOM…",
    "Quantifying Latency Buffers…",
    "Compiling Ghost Roadmap…",
    "Finalising Infrastructure Verdict…",
  ];

  const startAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setStatus("scanning");
    setProgress(0);
    setApiError("");

    let step = 0;
    setScanLabel(scanSteps[0]);
    const labelInterval = setInterval(() => {
      step = Math.min(step + 1, scanSteps.length - 1);
      setScanLabel(scanSteps[step]);
    }, 1200);

    const progInterval = setInterval(() => {
      setProgress(prev => (prev >= 92 ? 92 : prev + 2));
    }, 200);

    const data = await fetchSiteMetrics(url);

    clearInterval(labelInterval);
    clearInterval(progInterval);
    setProgress(100);

    await new Promise(r => setTimeout(r, 800));

    if (!data.success) {
      setApiError(data.error ?? "The site could not be reached. Please verify the URL.");
      setStatus("idle");
      return;
    }

    setMetrics(data);
    setStatus("basic");
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !metrics) return;

    const results = {
      score: metrics.score,
      ttfb: { current: metrics.ttfb.current, optimized: metrics.ttfb.optimized, gain: metrics.ttfb.gain },
      lcp:  { current: metrics.lcp.current,  optimized: metrics.lcp.optimized,  gain: metrics.lcp.gain },
      security: { current: metrics.isWordPress ? "WordPress Exposed" : "Hardened Stack" },
    };

    await sendAuditReport(email, url, results);
    setStatus("full");
  };

  const reset = () => { setUrl(""); setEmail(""); setStatus("idle"); setProgress(0); setMetrics(null); setApiError(""); };

  return (
    <section id="audit" className="bg-[#020617] py-32 px-8 lg:px-24 relative overflow-hidden">
      
      {/* Background Architectural Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-brand/10 blur-[180px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#F39A09]/5 blur-[150px] rounded-full" />
      </div>

      <div className="w-full max-w-[1300px] mx-auto relative z-10 text-center">
        
        {/* Top Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[900px] mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
            <Gauge size={14} className="text-brand" />
            <span className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-[0.35em]">Infrastructure Intelligence Audit</span>
          </div>
          <h2 className="text-[44px] md:text-[68px] font-black text-white tracking-tighter leading-[1.05] mb-8">
            Analyse your site for <br />
            <span className="bg-gradient-to-r from-brand via-[#4d6ef5] to-[#F39A09] bg-clip-text text-transparent">Nexora Potential.</span>
          </h2>
          <p className="text-[18px] text-white/50 max-w-[680px] mx-auto font-medium leading-relaxed">
            Ghost Protocol intercepts every millisecond. Run a real-time diagnostic to see exactly how our engine transforms your delivery metrics.
          </p>
        </motion.div>

        <div className="max-w-[1000px] mx-auto">
          <AnimatePresence mode="wait">
            
            {/* ── PHASE 1: IDLE ── */}
            {status === "idle" && (
              <motion.div 
                key="idle"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative"
              >
                {apiError && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex items-center justify-center gap-3 text-[#FF4D4D] text-[14px] font-bold bg-[#FF4D4D]/10 border border-[#FF4D4D]/20 py-4 px-6 rounded-2xl max-w-[600px] mx-auto">
                    <AlertTriangle size={18} /> {apiError}
                  </motion.div>
                )}
                
                <form onSubmit={startAudit} className="max-w-[850px] mx-auto group">
                  <div className="relative p-2 rounded-[36px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl transition-all duration-500 group-focus-within:border-brand/40 group-focus-within:bg-white/8">
                    <div className="flex flex-col md:flex-row gap-2">
                      <div className="flex-1 flex items-center gap-4 px-6 py-4">
                        <Globe className="text-white/20" size={22} />
                        <input 
                          type="url" required
                          placeholder="https://your-wordpress-site.com"
                          className="w-full bg-transparent border-none text-white focus:ring-0 text-[19px] font-bold placeholder:text-white/15"
                          value={url} onChange={e => setUrl(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="bg-brand hover:bg-brand-soft text-white px-12 py-5 rounded-[28px] font-black text-[17px] transition-all flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(26,63,216,0.3)]">
                        Run Diagnostic <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </form>

                {/* Diagnostic Indicators */}
                <div className="flex flex-wrap justify-center gap-10 mt-12 opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                  <div className="flex items-center gap-2 text-[12px] font-bold text-white uppercase tracking-widest"><Server size={14} /> Edge Latency</div>
                  <div className="flex items-center gap-2 text-[12px] font-bold text-white uppercase tracking-widest"><Cpu size={14} /> Core Web Vitals</div>
                  <div className="flex items-center gap-2 text-[12px] font-bold text-white uppercase tracking-widest"><Lock size={14} /> Fingerprint ID</div>
                </div>
              </motion.div>
            )}

            {/* ── PHASE 2: SCANNING ── */}
            {status === "scanning" && (
              <motion.div
                key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="bg-[#0A0F2D]/50 border border-white/10 rounded-[48px] p-16 lg:p-24 backdrop-blur-2xl relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="relative w-28 h-28 mx-auto mb-12">
                    <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full animate-pulse" />
                    <div className="relative h-full w-full rounded-[32px] bg-brand/10 border border-brand/30 flex items-center justify-center">
                      <Loader2 className="text-brand animate-spin" size={48} />
                    </div>
                  </div>
                  <h3 className="text-[26px] font-black text-white mb-3 tracking-tight">Intercepting Infrastructure…</h3>
                  <p className="text-brand font-mono text-[13px] font-bold uppercase tracking-[0.2em] mb-12 h-6">{scanLabel}</p>
                  
                  <div className="max-w-[500px] mx-auto">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-4">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-gradient-to-r from-brand to-[#F39A09] shadow-[0_0_20px_rgba(26,63,216,0.6)]"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] font-black text-white/20 uppercase tracking-widest">
                      <span>Probing: {url}</span>
                      <span>{progress}%</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual Data Stream Effect */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i}
                      animate={{ y: [-100, 800], opacity: [0, 1, 0] }}
                      transition={{ duration: 2 + i, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                      className="absolute top-0 w-px bg-brand"
                      style={{ left: `${20 * i}%`, height: '100px' }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── PHASE 3: BASIC RESULTS ── */}
            {status === "basic" && metrics && (
              <motion.div
                key="basic" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                className="bg-[#0A0F2D] border border-white/10 rounded-[48px] p-10 lg:p-16 relative shadow-2xl backdrop-blur-xl"
              >
                <button onClick={reset} className="absolute top-8 right-12 text-white/20 hover:text-brand flex items-center gap-2 text-[11px] font-black uppercase tracking-widest transition-colors">
                  <RefreshCw size={14} /> New Scan
                </button>

                <div className="flex flex-col md:flex-row items-center gap-16 mb-16 text-left">
                  <div className="flex-shrink-0">
                    <ScoreRing score={metrics.score} />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full mb-5 border border-white/10">
                      <div className={`h-2 w-2 rounded-full ${metrics.score >= 90 ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{url}</span>
                    </div>
                    <h3 className="text-[32px] md:text-[42px] font-black text-white tracking-tighter leading-tight mb-4">
                      Diagnostic: <span className={scoreColor(metrics.score)}>{scoreLabel(metrics.score)} Profile.</span>
                    </h3>
                    <p className="text-white/50 text-[16px] font-medium leading-relaxed max-w-[600px]">
                      Your infrastructure is currently operating with <span className="text-white font-bold">{metrics.ttfb.current} latency</span>. 
                      Ghost Protocol identified {metrics.isWordPress ? "critical WordPress fingerprints" : "optimization gaps"} that delay every edge request.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { label: "Detected TTFB", value: metrics.ttfb.current, nexora: "22ms", icon: Clock },
                    { label: "LCP Content", value: metrics.lcp.current, nexora: metrics.lcp.optimized, icon: Activity },
                    { label: "Blocking Time", value: metrics.tbt.current, nexora: "0ms", icon: Zap },
                    { label: "Layout Shift", value: metrics.cls.current, nexora: "0.00", icon: Layers },
                    { label: "Speed Index", value: metrics.speedIndex.current, nexora: "0.4s", icon: BarChart3 },
                    { label: "Stack Health", value: metrics.isWordPress ? "Exposed" : "Clean", nexora: "Cloaked", icon: Shield },
                  ].map((m, i) => (
                    <motion.div 
                      key={m.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/5 border border-white/8 rounded-[32px] p-8 group hover:border-brand/40 transition-all hover:bg-white/8"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <m.icon size={18} className="text-white/20 group-hover:text-brand transition-colors" />
                        <span className="text-[9px] font-black text-white/30 uppercase tracking-widest">{m.label}</span>
                      </div>
                      <div className="text-[28px] font-black text-white tracking-tighter mb-2">{m.value}</div>
                      <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                        <span className="text-[10px] font-bold text-brand uppercase tracking-widest">Nexora Target:</span>
                        <span className="text-[10px] font-black text-white">{m.nexora}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-brand rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
                  <div className="relative z-10 text-left">
                    <h4 className="text-[24px] font-black text-white mb-2 tracking-tight">Unlock Full Engineering Report.</h4>
                    <p className="text-white/70 text-[15px] font-medium">Get a detailed 12-point infrastructure roadmap and SSG verdict.</p>
                  </div>
                  <button 
                    onClick={() => setStatus('lead')}
                    className="relative z-10 bg-white text-brand px-12 py-5 rounded-[24px] font-black text-[16px] shadow-2xl hover:scale-105 transition-transform"
                  >
                    Unlock Full Data
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── PHASE 4: LEAD CAPTURE ── */}
            {status === "lead" && (
              <motion.div
                key="lead" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="bg-[#0A0F2D] border border-white/10 rounded-[48px] p-16 lg:p-24 text-center max-w-[750px] mx-auto shadow-2xl backdrop-blur-2xl"
              >
                <div className="h-20 w-20 bg-brand/10 border border-brand/20 rounded-3xl flex items-center justify-center mx-auto mb-10">
                  <Sparkles className="text-brand" size={40} />
                </div>
                <h3 className="text-[36px] font-black text-white mb-4 tracking-tight">Report is Compiled.</h3>
                <p className="text-white/40 text-[18px] font-medium mb-12 max-w-[500px] mx-auto">
                  Where should we send your 12-point infrastructure breakdown and optimization verdict?
                </p>
                
                <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex items-center gap-4 bg-white/5 border border-white/10 p-5 px-8 rounded-[24px] focus-within:border-brand transition-all">
                    <Mail className="text-white/20" size={20} />
                    <input 
                      type="email" required
                      placeholder="name@company.com"
                      className="w-full bg-transparent border-none text-white focus:ring-0 text-[17px] font-bold placeholder:text-white/20"
                      value={email} onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="bg-brand text-white px-12 py-5 rounded-[24px] font-black text-[16px] shadow-2xl hover:scale-105 transition-transform">
                    Send Report
                  </button>
                </form>
                
                <div className="mt-10 flex items-center justify-center gap-6 text-[10px] font-black text-white/20 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Lock size={12} /> Encrypted Data</span>
                  <span className="flex items-center gap-2"><Shield size={12} /> No Spam</span>
                </div>
                
                <button onClick={() => setStatus('basic')} className="mt-10 text-[11px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors">
                  ← Return to summary
                </button>
              </motion.div>
            )}

            {/* ── PHASE 5: FULL SUCCESS ── */}
            {status === "full" && metrics && (
              <motion.div
                key="full" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative"
              >
                <button onClick={reset} className="absolute -top-12 right-0 text-white/20 hover:text-brand flex items-center gap-2 text-[11px] font-black uppercase tracking-widest transition-colors">
                  <RefreshCw size={14} /> New Audit
                </button>

                <div className="lg:col-span-8 space-y-8">
                  {[
                    { label: "TTFB Performance", current: metrics.ttfb.current, nexora: metrics.ttfb.optimized, gain: metrics.ttfb.gain, icon: Clock, color: "text-brand" },
                    { label: "LCP Content Path", current: metrics.lcp.current, nexora: metrics.lcp.optimized, gain: metrics.lcp.gain, icon: Activity, color: "text-emerald-400" },
                  ].map((res, i) => (
                    <motion.div 
                      key={res.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-[#0A0F2D] border border-white/10 rounded-[40px] p-10 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-[#0A0F2D]/80 transition-colors shadow-xl"
                    >
                      <div className="text-left">
                        <div className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] mb-4">{res.label}</div>
                        <div className="flex items-baseline gap-4 mb-3">
                          <span className="text-[48px] font-black text-white tracking-tighter">{res.nexora}</span>
                          <span className="text-[18px] text-white/20 line-through font-bold">{res.current}</span>
                        </div>
                        <div className="flex items-center gap-2 text-emerald-400 font-bold text-[14px]">
                          <CheckCircle2 size={16} /> Verified {res.gain} Reduction
                        </div>
                      </div>
                      <div className="h-20 w-20 bg-white/5 rounded-3xl flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                        <res.icon size={32} className={res.color} />
                      </div>
                    </motion.div>
                  ))}
                  
                  <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 flex items-center gap-10 backdrop-blur-sm">
                    <div className="h-16 w-16 bg-brand/10 rounded-2xl flex items-center justify-center border border-brand/20">
                      <Code2 className="text-brand" size={28} />
                    </div>
                    <div className="text-left">
                      <h4 className="text-[18px] font-black text-white mb-2">Architectural Verdict: SSG Ready</h4>
                      <p className="text-[14px] text-white/40 font-medium">Your site origin is fully compatible with our Ghost Protocol SSG Engine. Zero backend changes needed.</p>
                    </div>
                    <div className="ml-auto text-emerald-500"><CheckCircle2 size={24} /></div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-brand rounded-[48px] p-12 text-left relative overflow-hidden shadow-2xl flex flex-col justify-between min-h-[500px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                  <div className="relative z-10">
                    <Zap size={36} className="text-white mb-10" />
                    <h4 className="text-[32px] font-black text-white mb-6 leading-tight">Apply <br />Optimisations.</h4>
                    <p className="text-white/80 font-medium mb-12 leading-relaxed">Infrastructure report sent to {email}. Deploy Nexora Core to bridge your origin to the edge.</p>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    <button className="w-full bg-white text-brand py-6 rounded-[24px] font-black text-[17px] shadow-2xl hover:scale-[1.02] transition-transform">
                      Download Core (.zip)
                    </button>
                    <button 
                      onClick={() => window.location.href = '/portal'}
                      className="w-full bg-transparent border border-white/30 text-white py-5 rounded-[24px] font-bold text-[15px] hover:bg-white/10 transition-colors"
                    >
                      Open Control Portal
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
