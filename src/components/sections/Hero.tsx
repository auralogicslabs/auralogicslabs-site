"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Globe, Zap, Code2, ChevronDown, X, CheckCircle2, Plus, ChevronRight, Layers } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Subtle drifting particle
function Particle({ delay, x }: { delay: number; x: number }) {
  return (
    <motion.div
      className="absolute bottom-0 w-px h-px rounded-full bg-brand/30 pointer-events-none"
      style={{ left: `${x}%` }}
      animate={{ y: [0, -800], opacity: [0, 0.4, 0] }}
      transition={{ duration: 10 + delay, repeat: Infinity, delay, ease: "easeOut" }}
    />
  );
}

// Typewriter for rotating brand statements
const statements = [
  "We engineer what speed looks like.",
  "We rebuild what infrastructure means.",
  "We redefine what WordPress can do.",
  "We are Auralogics Labs.",
];

export function Hero() {
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [url, setUrl] = useState("");
  const [isUrlValid, setIsUrlValid] = useState(false);
  const [statementIdx, setStatementIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const particles = [
    { delay: 0, x: 8 }, { delay: 2, x: 22 }, { delay: 4, x: 38 },
    { delay: 1, x: 55 }, { delay: 3, x: 70 }, { delay: 1.5, x: 85 },
    { delay: 2.5, x: 15 }, { delay: 0.5, x: 48 }, { delay: 3.5, x: 92 },
  ];

  // Typewriter effect
  useEffect(() => {
    const target = statements[statementIdx];
    let i = displayed.length;
    if (typing) {
      if (i >= target.length) {
        setTimeout(() => setTyping(false), 2400);
        return;
      }
      const t = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 38);
      return () => clearTimeout(t);
    } else {
      if (i === 0) {
        setStatementIdx(prev => (prev + 1) % statements.length);
        setTyping(true);
        return;
      }
      const t = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 18);
      return () => clearTimeout(t);
    }
  }, [displayed, typing, statementIdx]);

  // URL validation
  useEffect(() => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d%_.~+@]*)?$", "i"
    );
    setIsUrlValid(!!pattern.test(url));
  }, [url]);

  const handleNext = () => {
    if (wizardStep === 1 && !isUrlValid) return;
    setWizardStep(prev => prev + 1);
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-white"
    >
      {/* Brand-colored Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#1A3FD8_1px,transparent_0)] bg-[size:40px_40px] opacity-[0.06] pointer-events-none" />

      {/* Concentric Circles + Orange Rings — exact center */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Blue concentric rings */}
        <motion.svg
          className="absolute w-[900px] h-[900px] opacity-[0.08]"
          viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg"
          animate={{ scale: [1, 1.03, 1], opacity: [0.08, 0.11, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {[80, 160, 240, 320, 400, 450].map((r) => (
            <circle key={r} cx="450" cy="450" r={r} stroke="#1A3FD8" strokeWidth="1" />
          ))}
        </motion.svg>
        {/* Orange dashed accent rings */}
        <motion.svg
          className="absolute w-[900px] h-[900px]"
          viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg"
          animate={{ scale: [1, 1.05, 1], opacity: [0.18, 0.26, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <circle cx="450" cy="450" r="420" stroke="#f39a09" strokeWidth="1.5" strokeDasharray="6 10" />
          <circle cx="450" cy="450" r="340" stroke="#f39a09" strokeWidth="1" strokeDasharray="3 12" />
        </motion.svg>
      </div>

      {/* Atmospheric glows — centered */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue top-left balance */}
        <motion.div
          style={{ opacity, background: 'rgba(26,63,216,0.07)' }}
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full blur-[140px]"
        />
        {/* Orange warm glow — exact center */}
        <motion.div
          style={{ background: 'rgba(243,154,9,0.18)' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px]"
          animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.26, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blue bottom-right balance */}
        <motion.div
          style={{ background: 'rgba(26,63,216,0.05)' }}
          className="absolute -bottom-[15%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Premium Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      {/* Particles */}
      {particles.map((p, i) => <Particle key={i} delay={p.delay} x={p.x} />)}

      <div className="w-full max-w-[1300px] mx-auto px-8 lg:px-24 relative z-10 flex flex-col items-center text-center">

        {/* Brand pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 bg-white/90 border border-border px-6 py-2.5 rounded-full shadow-sm mb-14"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          <span className="text-[11px] font-bold text-obsidian uppercase tracking-[0.28em]">Auralogics Labs</span>
          <span className="text-border-strong mx-1">·</span>
          <span className="text-[11px] font-semibold text-text-muted uppercase tracking-[0.18em]">Infrastructure Intelligence</span>
        </motion.div>

        {/* Headline — brand statement, no product detail */}
        <motion.h1
          style={{ y, opacity }}
          className="text-[50px] md:text-[72px] lg:text-[88px] font-extrabold text-obsidian leading-[0.90] tracking-[-0.055em] mb-8 max-w-[1050px]"
        >
          Built to make the web <br className="hidden md:block" />
          <span className="text-brand">impossibly fast.</span>
        </motion.h1>

        {/* Rotating typewriter — brand voice, not product spec */}
        <motion.div style={{ opacity }} className="h-10 mb-8 flex items-center justify-center">
          <p className="text-[20px] md:text-[22px] font-medium text-text-muted tracking-tight">
            {displayed}<span className="inline-block w-0.5 h-5 bg-brand ml-0.5 animate-pulse align-middle" />
          </p>
        </motion.div>

        {/* Sub copy — company level, not product metrics */}
        <motion.p
          style={{ opacity }}
          className="text-[17px] md:text-[18px] text-text-secondary max-w-[620px] leading-[1.7] mb-14 font-medium"
        >
          Auralogics Labs designs infrastructure that closes the gap between how the web performs
          and how it should. Our products run quietly in the background, so your users never wait.
        </motion.p>

        {/* CTAs */}
        <motion.div style={{ opacity }} className="flex flex-col sm:flex-row items-center gap-5 mb-16">
          <button
            onClick={() => { setShowWizard(true); setWizardStep(1); }}
            className="rounded-2xl bg-obsidian px-12 py-5 text-[17px] font-bold text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group flex items-center gap-3"
          >
            Start a Project
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link
            href="/#why-nexora"
            className="rounded-2xl border-2 border-border bg-white px-12 py-5 text-[17px] font-bold text-obsidian hover:bg-surface-soft transition-all duration-300 flex items-center gap-3 group"
          >
            <Layers className="h-5 w-5 text-brand" />
            Explore Platform
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>


      </div>

      {/* Scroll arrow — clicks to next section */}
      <motion.button
        style={{ opacity }}
        onClick={() => document.getElementById('why-nexora')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 group cursor-pointer"
      >
        <span className="text-[9px] font-bold text-text-muted uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
        <ChevronDown size={22} className="text-brand animate-bounce group-hover:text-obsidian transition-colors" />
      </motion.button>

      {/* ── WIZARD MODAL ── */}
      <AnimatePresence>
        {showWizard && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowWizard(false)} className="absolute inset-0 bg-obsidian/80 backdrop-blur-2xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-[1000px] bg-white rounded-[48px] shadow-[0_80px_160px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row"
            >
              <div className="hidden md:flex w-2/5 bg-[#050B25] p-16 flex-col justify-between text-white">
                <div>
                  <Sparkles className="text-brand mb-8" size={36} />
                  <h3 className="text-[28px] font-extrabold tracking-tight mb-4 leading-tight">Project<br />Initialization.</h3>
                  <p className="text-white/40 text-[14px] font-medium leading-relaxed">Connect your site to the Nexora Mothership.</p>
                </div>
                <div className="space-y-7">
                  {[{ s: 1, t: "Site Identification" }, { s: 2, t: "Deployment Core" }, { s: 3, t: "Mothership Sync" }].map(step => (
                    <div key={step.s} className="flex items-center gap-5">
                      <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-black text-[13px] transition-all duration-500 ${wizardStep >= step.s ? "bg-brand text-white" : "bg-white/10 text-white/20"}`}>
                        {wizardStep > step.s ? <CheckCircle2 size={16} /> : step.s}
                      </div>
                      <span className={`text-[13px] font-bold ${wizardStep >= step.s ? "text-white" : "text-white/20"}`}>{step.t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 p-12 lg:p-20 bg-white relative">
                <button onClick={() => setShowWizard(false)} className="absolute top-8 right-8 h-10 w-10 flex items-center justify-center rounded-full bg-surface-soft hover:bg-obsidian hover:text-white transition-all">
                  <X size={20} />
                </button>
                <AnimatePresence mode="wait">
                  {wizardStep === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col justify-center">
                      <h2 className="text-[32px] font-extrabold text-obsidian mb-3 tracking-tight">Register Origin.</h2>
                      <p className="text-text-muted text-[15px] font-medium mb-10">Enter your WordPress site URL to begin.</p>
                      <div className={`flex items-center gap-4 bg-surface-soft border-2 rounded-[20px] p-3 transition-all ${url ? (isUrlValid ? "border-emerald-500/50" : "border-[#FF4D4D]/50") : "border-border focus-within:border-brand"}`}>
                        <Globe className={`ml-2 flex-shrink-0 ${url ? (isUrlValid ? "text-emerald-500" : "text-[#FF4D4D]") : "text-text-muted"}`} size={22} />
                        <input type="text" placeholder="https://your-site.com" className="flex-1 bg-transparent border-none text-[18px] font-bold text-obsidian focus:ring-0 py-3" value={url} onChange={e => setUrl(e.target.value)} />
                      </div>
                      <button disabled={!isUrlValid} onClick={handleNext} className={`w-full mt-8 py-5 rounded-2xl font-black text-[17px] shadow-xl transition-all ${isUrlValid ? "bg-brand text-white hover:scale-[1.02]" : "bg-surface-soft text-text-muted cursor-not-allowed opacity-50"}`}>
                        Start Deployment
                      </button>
                      <div className="mt-10 p-5 bg-surface-soft rounded-2xl border border-border flex gap-4">
                        <Zap className="text-brand flex-shrink-0 mt-0.5" size={18} />
                        <p className="text-[12px] text-text-muted font-medium">Use <span className="text-brand font-black">demo / demo</span> in the portal for an instant preview.</p>
                      </div>
                    </motion.div>
                  )}
                  {wizardStep === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col justify-center">
                      <h2 className="text-[32px] font-extrabold text-obsidian mb-10 tracking-tight">Deploy Core.</h2>
                      <div className="bg-surface-soft border border-border rounded-3xl p-8 flex items-center justify-between hover:border-brand cursor-pointer transition-all mb-6">
                        <div className="flex items-center gap-5">
                          <Code2 className="text-brand" size={26} />
                          <div className="text-[16px] font-black text-obsidian">Nexora Engine (.zip)</div>
                        </div>
                        <Plus className="text-brand" size={22} />
                      </div>
                      <button onClick={handleNext} className="w-full bg-brand text-white py-5 rounded-2xl font-black text-[17px] shadow-xl hover:scale-[1.02] transition-transform">
                        I've Installed the Core
                      </button>
                    </motion.div>
                  )}
                  {wizardStep === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="h-full flex flex-col justify-center text-center">
                      <div className="h-28 w-28 bg-emerald-500/10 border-2 border-emerald-500 rounded-[36px] flex items-center justify-center mx-auto mb-10">
                        <CheckCircle2 className="text-emerald-500" size={56} strokeWidth={2.5} />
                      </div>
                      <h2 className="text-[40px] font-black text-obsidian tracking-tighter leading-none mb-4">Mothership<br />Connected.</h2>
                      <button onClick={() => window.location.href = "/portal"} className="w-full bg-brand text-white py-5 rounded-2xl font-black text-[18px] shadow-2xl hover:scale-[1.04] transition-transform mt-8">
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
    </section>
  );
}
