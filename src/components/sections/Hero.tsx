"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronRight, Zap, CheckCircle2, Activity, Globe, TrendingDown } from "lucide-react";
import Link from "next/link";

function StatBadge({
  value, label, sub, color, delay, className,
}: {
  value: string; label: string; sub?: string; color: string; delay: number; className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-20 bg-white rounded-[16px] border border-white/80 shadow-[0_12px_40px_rgba(2,6,23,0.18)] px-4 py-3 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div
          className="h-8 w-8 rounded-[10px] flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}15`, border: `1px solid ${color}25` }}
        >
          <Activity className="h-3.5 w-3.5" style={{ color }} />
        </div>
        <div>
          <div className="font-mono text-[17px] font-black leading-none tracking-tight" style={{ color }}>
            {value}
          </div>
          <div className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-[0.2em] mt-0.5">
            {label}
          </div>
        </div>
      </div>
      {sub && (
        <div className="mt-2 pt-2 border-t border-[#E2E8F0] flex items-center gap-1.5">
          <TrendingDown className="h-3 w-3 text-emerald-500" />
          <span className="text-[10px] text-emerald-600 font-bold">{sub}</span>
        </div>
      )}
    </motion.div>
  );
}

function AdminMock() {
  return (
    <div
      className="w-full rounded-[16px] overflow-hidden border border-white/12"
      style={{ boxShadow: "0 40px 100px rgba(2,6,23,0.55), 0 0 0 1px rgba(255,255,255,0.06)" }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#181F30] border-b border-white/6">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white/6 border border-white/8 rounded-[8px] px-3 py-1 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 animate-pulse flex-shrink-0" />
            <span className="text-[10px] font-mono text-white/35 truncate">
              dashboard.nexora.io · Nexora Engine
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-brand/60" />
              <span className="text-[9px] text-brand/60 font-bold">LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* App shell */}
      <div className="bg-[#0F1521] flex" style={{ minHeight: 248 }}>
        {/* Sidebar */}
        <div className="w-[152px] flex-shrink-0 bg-[#0A0F1A] border-r border-white/5 p-4 flex flex-col gap-3 hidden sm:flex">
          <div className="h-7 w-7 rounded-[10px] bg-brand/25 border border-brand/35 flex items-center justify-center mb-3">
            <Zap className="h-3.5 w-3.5 text-brand-soft" />
          </div>
          {/* Nav skeleton */}
          {[
            { w: "70%", active: true },
            { w: "55%", active: false },
            { w: "65%", active: false },
            { w: "45%", active: false },
            { w: "60%", active: false },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-2 py-1.5 rounded-[8px] transition-colors"
              style={{ background: item.active ? "rgba(26,63,216,0.15)" : "transparent" }}
            >
              <div
                className="h-2 w-2 rounded-[4px] flex-shrink-0"
                style={{ background: item.active ? "#1A3FD8" : "rgba(255,255,255,0.08)" }}
              />
              <div
                className="h-1.5 rounded-full"
                style={{
                  background: item.active ? "rgba(96,165,250,0.4)" : "rgba(255,255,255,0.07)",
                  width: item.w,
                }}
              />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 flex flex-col gap-3.5">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="h-2 w-24 rounded-full bg-white/8" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-20 rounded-[8px] bg-brand/20 border border-brand/30 flex items-center justify-center">
                <span className="text-[9px] font-black text-brand-soft uppercase tracking-wider">Engine Active</span>
              </div>
            </div>
          </div>

          {/* KPI strip */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: "22ms",  l: "TTFB",    c: "#1A3FD8", up: false },
              { v: "100%",  l: "Cache Hit", c: "#059669", up: true  },
              { v: "↓ 70%", l: "Payload",  c: "#7C3AED", up: false },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-[12px] p-3 relative overflow-hidden"
                style={{
                  background: `${s.c}10`,
                  border: `1px solid ${s.c}22`,
                }}
              >
                <div className="font-mono text-[16px] font-black leading-none tracking-tight" style={{ color: s.c }}>
                  {s.v}
                </div>
                <div className="text-[8px] text-white/28 font-bold uppercase tracking-wider mt-1">{s.l}</div>
                {/* Mini sparkline */}
                <svg className="absolute bottom-2 right-2 opacity-30" width="28" height="14" viewBox="0 0 28 14">
                  <polyline
                    points={s.up ? "0,12 7,8 14,10 21,4 28,2" : "0,10 7,12 14,6 21,4 28,2"}
                    fill="none"
                    stroke={s.c}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Cache table rows */}
          {[
            { url: "/shop/product-1",    status: "HIT",  ms: "19ms", fresh: true },
            { url: "/blog/2024-update",  status: "HIT",  ms: "22ms", fresh: true },
            { url: "/about",             status: "BUILD", ms: "—",   fresh: false },
          ].map((row, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-[10px] bg-white/[0.025] border border-white/5 px-3 py-2"
            >
              <div
                className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                style={{ background: row.fresh ? "#10B981" : "#F59E0B" }}
              />
              <span className="text-[10px] font-mono text-white/30 flex-1 truncate">{row.url}</span>
              <span
                className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-[6px]"
                style={{
                  color: row.fresh ? "#10B981" : "#F59E0B",
                  background: row.fresh ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)",
                }}
              >
                {row.status}
              </span>
              <span className="text-[9px] font-mono text-white/20">{row.ms}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InteractiveGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string }>>([]);
  const particleIdRef = useRef(0);
  const lastParticleTimeRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);

      // Throttled particle generation
      const now = Date.now();
      if (now - lastParticleTimeRef.current > 50 && isHovered) {
        const colors = ["#60A5FA", "#818CF8", "#C084FC", "#A78BFA"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const angle = Math.random() * Math.PI * 2;
        const velocity = 40 + Math.random() * 60;
        
        const newParticle = {
          id: particleIdRef.current++,
          x,
          y,
          color: randomColor,
        };
        
        setParticles((prev) => [...prev.slice(-20), newParticle]);
        lastParticleTimeRef.current = now;

        // Remove particle after animation
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 1200);
      }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setParticles([]);
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create ripple effect
      const ripple = document.createElement("div");
      ripple.className = "wave-ripple";
      ripple.style.position = "absolute";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = "2px";
      ripple.style.height = "2px";
      ripple.style.borderRadius = "50%";
      ripple.style.border = "2px solid rgba(96, 165, 250, 0.8)";
      ripple.style.transform = "translate(-50%, -50%)";
      
      container.appendChild(ripple);
      setTimeout(() => ripple.remove(), 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("click", handleClick);
      }
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        "--mouse-x": "-9999px",
        "--mouse-y": "-9999px",
      } as React.CSSProperties}
    >
      {/* Background static lines - very faint and premium */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center top",
        }}
      />

      {/* Dynamic line glow highlight following cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: isHovered ? 0.28 : 0.05,
          backgroundImage: `
            linear-gradient(to right, #60A5FA 1px, transparent 1px),
            linear-gradient(to bottom, #C084FC 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center top",
          WebkitMaskImage: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
          maskImage: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
        }}
      />

      {/* Enhanced atmospheric spotlight centered on mouse cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovered ? 0.22 : 0,
          background: "radial-gradient(380px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.12) 60%, transparent 100%)",
        }}
      />

      {/* Secondary spotlight for enhanced effect */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{
          opacity: isHovered ? 0.12 : 0,
          background: "radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(168, 85, 247, 0.15) 0%, transparent 80%)",
        }}
      />

      {/* Particle System */}
      {particles.map((particle) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance - 50;
        
        return (
          <div
            key={particle.id}
            className="particle"
            style={{
              position: "absolute",
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              backgroundColor: particle.color,
              boxShadow: `0 0 8px ${particle.color}`,
              "--tx": `${tx}px`,
              "--ty": `${ty}px`,
            } as React.CSSProperties}
          />
        );
      })}

      {/* Moving Static Data Accelerated Light Streams */}
      <svg className="absolute inset-0 w-full h-full opacity-40">
        <defs>
          <linearGradient id="streamGradH" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="streamGradV" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0" />
            <stop offset="50%" stopColor="#818CF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* 4 horizontal streaming accelerated lanes */}
        {[18, 38, 58, 78].map((yPercent, i) => (
          <g key={`h-stream-${i}`}>
            <line
              x1="0%"
              y1={`${yPercent}%`}
              x2="100%"
              y2={`${yPercent}%`}
              stroke="rgba(255,255,255,0.012)"
              strokeWidth="1"
            />
            <path
              d={`M -200,${yPercent}0 H 2200`}
              fill="none"
              stroke="url(#streamGradH)"
              strokeWidth="1.5"
              className="animate-stream-h"
              style={{
                animationDelay: `${i * 1.8}s`,
                animationDuration: `${7 + i * 2.5}s`,
              }}
            />
          </g>
        ))}

        {/* 4 vertical streaming accelerated lanes */}
        {[22, 42, 62, 82].map((xPercent, i) => (
          <g key={`v-stream-${i}`}>
            <line
              x1={`${xPercent}%`}
              y1="0%"
              x2={`${xPercent}%`}
              y2="100%"
              stroke="rgba(255,255,255,0.012)"
              strokeWidth="1"
            />
            <path
              d={`M ${xPercent}0,-200 V 2200`}
              fill="none"
              stroke="url(#streamGradV)"
              strokeWidth="1.5"
              className="animate-stream-v"
              style={{
                animationDelay: `${i * 2.2}s`,
                animationDuration: `${9 + i * 3.1}s`,
              }}
            />
          </g>
        ))}

        {/* Dynamic highlighted intersection nodes with enhanced glow */}
        {[
          { x: "22%", y: "38%" },
          { x: "62%", y: "18%" },
          { x: "42%", y: "58%" },
          { x: "82%", y: "38%" },
          { x: "22%", y: "78%" },
          { x: "62%", y: "78%" },
        ].map((node, i) => (
          <g key={`node-${i}`} className="opacity-40">
            {/* Outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill={["#60A5FA", "#818CF8", "#C084FC", "#A78BFA"][i % 4]}
              opacity="0.1"
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
            {/* Main glow circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#60A5FA"
              className="animate-pulse-glow"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
            {/* Center dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r="1.5"
              fill="#FFFFFF"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const mockScale = useTransform(scrollY, [0, 600], [0.95, 1.15], { clamp: false });
  const mockY = useTransform(scrollY, [0, 600], [100, -80]);

  return (
    <section ref={containerRef} className="relative bg-obsidian overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* ── Layered atmosphere ── */}
      {/* Primary brand radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(26,63,216,0.28) 0%, transparent 65%)",
        }}
      />
      {/* Purple depth orb */}
      <div className="absolute -bottom-32 right-0 w-[900px] h-[600px] bg-purple-700/8 blur-[200px] rounded-full pointer-events-none" />
      {/* Emerald left accent */}
      <div className="absolute top-1/4 -left-60 w-[600px] h-[600px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Interactive Grid & Acceleration Line Network */}
      <InteractiveGridBackground />

      {/* ── Content ── */}
      <div className="w-full max-w-[1600px] mx-auto px-8 lg:px-24 relative z-10 flex flex-col items-center pt-32 pb-0">

        {/* Headline — LARGE and dominant */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-7 max-w-[1100px]"
        >
          <h1 className="text-[60px] md:text-[82px] lg:text-[108px] font-extrabold text-white leading-[0.9] tracking-[-0.05em]">
            Built to make
            <br />
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #818CF8 45%, #C084FC 100%)",
                }}
              >
                the web impossibly fast.
              </span>
              {/* Underline */}
              <motion.svg
                className="absolute -bottom-3 left-0 w-full overflow-visible"
                height="8"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              >
                <motion.path
                  d="M0,6 Q50,1 100,4 Q150,7 200,3"
                  stroke="url(#heroUnder)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="heroUnder" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#C084FC" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="text-center text-[18px] md:text-[20px] text-white/42 font-medium leading-[1.6] max-w-[560px] mx-auto mb-12"
        >
          Auralogics Labs designs infrastructure that closes the gap between how the web performs and how it should. Our products run quietly in the background, so your users never wait.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.26 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-20"
        >
          <Link
            href="#products"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-[14px] bg-white text-obsidian px-8 py-4 text-[15px] font-black shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.9)] hover:shadow-[0_12px_48px_rgba(26,63,216,0.5),0_0_0_1px_rgba(26,63,216,1)] hover:bg-brand hover:text-white hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
          >
            Explore Our Products
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <a
            href="mailto:hello@auralogicslabs.com?subject=Let's chat about infrastructure"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-white/12 bg-white/5 backdrop-blur-sm text-white/80 px-8 py-4 text-[15px] font-bold hover:bg-white/8 hover:border-white/20 hover:text-white transition-all duration-300"
          >
            Get in Touch
            <ChevronRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        </motion.div>

        {/* ── Mock with Scroll Enlarge ── */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[900px] mx-auto"
          style={{
            perspective: 1200,
            scale: mockScale,
            y: mockY,
          }}
        >
          {/* Glow under the mock */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[700px] h-[160px] bg-brand/18 blur-[90px] rounded-full pointer-events-none" />

          {/* Live pill above mock */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 bg-white rounded-full border border-white/70 shadow-[0_4px_24px_rgba(2,6,23,0.16)] px-4 py-1.5 flex items-center gap-2 whitespace-nowrap"
          >
            <Globe className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-[11px] font-bold text-obsidian">your-site.com</span>
            <div className="h-1.5 w-px bg-[#E2E8F0]" />
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black text-emerald-600">Nexora active</span>
          </motion.div>

          <AdminMock />

          {/* Floating stat badges */}
          <StatBadge
            value="22ms"
            label="Avg. TTFB"
            sub="was 850ms before"
            color="#1A3FD8"
            delay={0.85}
            className="-left-4 sm:-left-16 bottom-20"
          />
          <StatBadge
            value="100%"
            label="Cache Hit Rate"
            color="#059669"
            delay={1.0}
            className="-right-4 sm:-right-16 top-16"
          />

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(2,6,23,0.7) 60%, #020617 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
