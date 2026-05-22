"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Download, Sliders, Zap, ArrowRight, Terminal, Rocket } from "lucide-react";

/* ── Animated Toggle Switch ── */
function AnimatedToggle({ inView }: { inView: boolean }) {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="relative w-[72px] h-[38px] rounded-full bg-slate-200 transition-colors duration-700"
        style={{ background: inView ? '#059669' : '#CBD5E1' }}
      >
        {/* Glow */}
        {inView && (
          <div className="absolute inset-0 rounded-full animate-pulse" style={{
            boxShadow: '0 0 24px rgba(5,150,105,0.5), 0 0 48px rgba(5,150,105,0.2)'
          }} />
        )}
        <motion.div
          className="absolute top-[3px] left-[3px] w-[32px] h-[32px] rounded-full bg-white shadow-lg"
          animate={{ x: inView ? 34 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: inView ? 0.4 : 0 }}
        />
      </div>
      <motion.span
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -8 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="ml-4 text-sm font-bold text-emerald-600"
      >
        Static Delivery Active
      </motion.span>
    </div>
  );
}

/* ── Performance Gauge ── */
function PerformanceGauge({ inView }: { inView: boolean }) {
  return (
    <div className="flex items-center justify-center py-4">
      <svg width="160" height="100" viewBox="0 0 160 100">
        {/* Background arc */}
        <path
          d="M 20 90 A 60 60 0 0 1 140 90"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Red zone */}
        <path
          d="M 20 90 A 60 60 0 0 1 50 35"
          fill="none"
          stroke="#EF4444"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.3"
        />
        {/* Yellow zone */}
        <path
          d="M 50 35 A 60 60 0 0 1 110 35"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.3"
        />
        {/* Green zone */}
        <motion.path
          d="M 110 35 A 60 60 0 0 1 140 90"
          fill="none"
          stroke="#059669"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        />
        {/* Needle */}
        <motion.line
          x1="80" y1="90" x2="130" y2="45"
          stroke="#059669"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ rotate: -120 }}
          animate={inView ? { rotate: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.3, type: "spring", stiffness: 60 }}
          style={{ transformOrigin: "80px 90px" }}
        />
        {/* Center dot */}
        <circle cx="80" cy="90" r="6" fill="#059669" />
        <circle cx="80" cy="90" r="3" fill="white" />
        {/* Label */}
        <text x="80" y="78" textAnchor="middle" className="text-[11px] font-bold fill-emerald-600">
          FAST
        </text>
      </svg>
    </div>
  );
}

/* ── Terminal Mockup ── */
function TerminalMock() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl mt-4"
      style={{ boxShadow: '0 20px 60px rgba(2,6,23,0.4)' }}>
      {/* Chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1E1E1E]">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[10px] font-mono text-white/30">terminal</span>
      </div>
      {/* Body */}
      <div className="bg-[#0D1117] p-4 font-mono text-[12px] leading-relaxed">
        <div className="text-emerald-400">
          <span className="text-white/40">$ </span>
          wp plugin install nexora-engine
        </div>
        <div className="text-white/30 mt-1">Installing Nexora Engine (v2.4.1)...</div>
        <div className="text-emerald-400 mt-1">
          <span className="text-white/40">$ </span>
          wp plugin activate nexora-engine
        </div>
        <div className="text-emerald-400 mt-1 flex items-center gap-1.5">
          <span>✓</span> Plugin activated successfully.
        </div>
      </div>
    </div>
  );
}

/* ── Step Card ── */
function StepCard({
  step,
  index,
  children,
}: {
  step: { number: string; icon: React.ElementType; title: string; description: string; color: string };
  index: number;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative rounded-[28px] border border-slate-200/60 bg-white p-8 lg:p-10 overflow-hidden hover:border-brand/30 hover:shadow-[0_24px_64px_rgba(26,63,216,0.08)] transition-all duration-500">
        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
          className="absolute top-0 left-0 right-0 h-[3px] origin-left"
          style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}40, transparent)` }}
        />

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ boxShadow: `inset 0 0 60px ${step.color}08` }} />

        {/* Step number + icon */}
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <div
            className="flex items-center justify-center w-14 h-14 rounded-2xl text-xl font-black"
            style={{
              background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
              border: `2px solid ${step.color}25`,
              color: step.color,
            }}
          >
            {step.number}
          </div>
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-12 h-12 rounded-xl"
            style={{ background: `${step.color}10`, border: `1.5px solid ${step.color}20` }}
          >
            <Icon className="w-6 h-6" style={{ color: step.color }} />
          </motion.div>
        </div>

        {/* Text */}
        <h3 className="text-[22px] font-bold text-obsidian mb-3 group-hover:text-brand transition-colors duration-300 relative z-10">
          {step.title}
        </h3>
        <p className="text-[15px] text-slate-600 leading-[1.7] mb-4 relative z-10">
          {step.description}
        </p>

        {/* Visual element */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Connector Line ── */
function ConnectorLine({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="hidden lg:flex items-center justify-center py-0 -mx-4">
      <svg width="80" height="40" viewBox="0 0 80 40" className="overflow-visible">
        <defs>
          <linearGradient id={`connGrad${index}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1A3FD8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 20 C 20 20, 30 10, 40 20 C 50 30, 60 20, 80 20"
          fill="none"
          stroke={`url(#connGrad${index})`}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />
        {/* Arrow head */}
        <motion.polygon
          points="76,16 84,20 76,24"
          fill="#7C3AED"
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 0.6, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 1 }}
        />
      </svg>
    </div>
  );
}

/* ── Animated Counter Stat ── */
function AnimatedStat({ value, label, color, inView }: { value: string; label: string; color: string; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center"
    >
      <span className="font-mono text-[28px] md:text-[36px] font-black tracking-tight" style={{ color }}>
        {value}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mt-1">
        {label}
      </span>
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   Main Export
   ════════════════════════════════════════════ */
export function FeatureTeaser() {
  const resultRef = useRef<HTMLDivElement>(null);
  const resultInView = useInView(resultRef, { once: true, margin: "-80px" });

  const steps = [
    {
      number: "01",
      icon: Download,
      title: "Install the Plugin",
      description:
        "Drop Nexora Engine into your WordPress plugins directory. Works on any host, any theme, any page builder — Elementor, Gutenberg, Divi, you name it.",
      color: "#1A3FD8",
    },
    {
      number: "02",
      icon: Sliders,
      title: "One-Click Activate",
      description:
        "Toggle static delivery on. Nexora auto-detects your server, theme, and plugins. Zero configuration needed — it just works.",
      color: "#7C3AED",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Ship at Static Speed",
      description:
        "Every page is now served as pure static HTML. 22ms TTFB. Ghost Protocol hides WordPress fingerprints. Your editors keep working normally.",
      color: "#059669",
    },
  ];

  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step2InView = useInView(step2Ref, { once: true, margin: "-100px" });
  const step3InView = useInView(step3Ref, { once: true, margin: "-100px" });

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden py-24 md:py-36 px-8 lg:px-24 border-b border-slate-200">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-brand/3 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/3 blur-[180px] rounded-full" />
      </div>

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-0.5 w-10 bg-brand rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">
              How It Works
            </span>
            <div className="h-0.5 w-10 bg-brand rounded-full" />
          </div>
          <h2 className="text-[40px] md:text-[56px] font-extrabold text-obsidian leading-[1.05] tracking-[-0.04em] mb-5">
            From install to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand via-purple-500 to-emerald-500">
              instant.
            </span>
            <br />
            In three steps.
          </h2>
          <p className="text-lg text-slate-600 max-w-[560px] mx-auto leading-relaxed font-medium">
            No migration. No rebuild. No DevOps. Just activate and watch your site transform.
          </p>
        </motion.div>

        {/* Steps grid with connectors */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-0 items-start mb-20">
          {/* Step 1 */}
          <div ref={step1Ref}>
            <StepCard step={steps[0]} index={0}>
              <TerminalMock />
            </StepCard>
          </div>

          {/* Connector 1→2 */}
          <ConnectorLine index={0} />

          {/* Step 2 */}
          <div ref={step2Ref}>
            <StepCard step={steps[1]} index={1}>
              <AnimatedToggle inView={step2InView} />
            </StepCard>
          </div>

          {/* Connector 2→3 */}
          <ConnectorLine index={1} />

          {/* Step 3 */}
          <div ref={step3Ref}>
            <StepCard step={steps[2]} index={2}>
              <PerformanceGauge inView={step3InView} />
            </StepCard>
          </div>
        </div>

        {/* Result Banner */}
        <motion.div
          ref={resultRef}
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={resultInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] bg-obsidian overflow-hidden"
          style={{ boxShadow: "0 40px 80px rgba(2,6,23,0.2)" }}
        >
          {/* BG Glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-brand/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 p-10 md:p-14">
            {/* Result label */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-0.5 w-8 bg-brand rounded-full" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">
                The Result
              </span>
              <div className="h-0.5 w-8 bg-brand rounded-full" />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
              <AnimatedStat value="22ms" label="Avg. TTFB" color="#60A5FA" inView={resultInView} />
              <AnimatedStat value="100%" label="Cache Hit Rate" color="#34D399" inView={resultInView} />
              <AnimatedStat value="Zero" label="WP Fingerprints" color="#A78BFA" inView={resultInView} />
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={resultInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center mt-10"
            >
              <motion.a
                href="/products/nexora-engine"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-obsidian font-bold text-[15px] hover:bg-brand hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.9)] hover:shadow-[0_12px_48px_rgba(26,63,216,0.5)] group"
              >
                <Zap className="w-4 h-4" />
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
