"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Workflow, RefreshCcw, Plus, Zap, Shield, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "TTFB Latency", nexora: "22ms",  legacy: "850ms", unit: "",  color: "#1A3FD8" },
  { label: "Origin Load",  nexora: "0%",    legacy: "90%",   unit: "",  color: "#059669" },
  { label: "Payload",      nexora: "↓70%",  legacy: "N/A",   unit: "",  color: "#7C3AED" },
];

export function WhyNexora() {
  const [isNexora, setIsNexora] = useState(true);

  return (
    <section
      id="why-nexora"
      className="bg-white py-32 px-8 lg:px-24 overflow-hidden relative border-y border-border"
    >
      {/* Architectural grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient glow transitions with mode */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isNexora ? "nexora" : "legacy"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] blur-[160px] rounded-full pointer-events-none"
          style={{ background: isNexora ? "rgba(26,63,216,0.06)" : "rgba(245,158,11,0.06)" }}
        />
      </AnimatePresence>

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Left: Narrative ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-8 bg-brand rounded-full" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">The Paradigm Shift</span>
            </div>

            <h2 className="text-[36px] md:text-[48px] lg:text-[58px] font-extrabold text-obsidian tracking-[-0.04em] leading-[1.05] mb-8">
              Static delivery.<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #1A3FD8 0%, #7C3AED 100%)" }}
              >
                Zero code to rewrite.
              </span>
              <br />Your stack intact.
            </h2>

            <div className="space-y-5 max-w-[520px]">
              <p className="text-[17px] text-text-secondary font-medium leading-[1.72]">
                Your WordPress stack is already built. Your editors know it, your clients depend on it, your plugins run on it. Rebuilding it headless would take months and break everything your team relies on.
              </p>
              <p className="text-[17px] text-obsidian font-bold leading-[1.65]">
                Nexora Engine adds a static delivery layer on top of what you have. It serves every page as flat HTML before PHP even loads. 22ms TTFB. No new frontend. No migration.
              </p>
            </div>

            {/* Proof metrics */}
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-border pt-10">
              <div>
                <div
                  className="text-[40px] font-extrabold leading-none tracking-tight mb-1.5"
                  style={{ color: "#1A3FD8" }}
                >
                  Zero
                </div>
                <div className="text-[11px] font-bold text-text-muted uppercase tracking-[0.22em]">Code to rewrite</div>
              </div>
              <div>
                <div className="text-[40px] font-extrabold text-obsidian leading-none tracking-tight mb-1.5">
                  100%
                </div>
                <div className="text-[11px] font-bold text-text-muted uppercase tracking-[0.22em]">Platform native</div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/products/nexora-engine"
                className="inline-flex items-center gap-2.5 rounded-[14px] bg-obsidian text-white px-8 py-4 text-[14px] font-black hover:bg-brand transition-all duration-300 group shadow-[0_8px_32px_rgba(2,6,23,0.25)]"
              >
                Explore Nexora Engine
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ── Right: Interactive Architecture Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative bg-white border border-border rounded-[40px] shadow-[0_48px_96px_rgba(2,6,23,0.09)] p-10 overflow-hidden group">
              {/* Corner marks */}
              <Plus className="absolute top-7 left-7 h-4 w-4 text-border-strong opacity-50 group-hover:rotate-90 transition-transform duration-700" />
              <Plus className="absolute bottom-7 right-7 h-4 w-4 text-border-strong opacity-50 group-hover:rotate-90 transition-transform duration-700" />

              {/* Header row */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-3.5">
                  <div
                    className="h-11 w-11 rounded-2xl flex items-center justify-center transition-all duration-700"
                    style={{
                      background: isNexora ? "#1A3FD8" : "#F59E0B",
                      boxShadow: isNexora
                        ? "0 0 20px rgba(26,63,216,0.35)"
                        : "0 0 20px rgba(245,158,11,0.35)",
                    }}
                  >
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[16px] font-extrabold text-obsidian tracking-tight">Nexora System</div>
                    <div className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em]">
                      {isNexora ? "Static delivery active" : "Legacy mode"}
                    </div>
                  </div>
                </div>

                {/* Toggle */}
                <button
                  onClick={() => setIsNexora(!isNexora)}
                  aria-label="Toggle mode"
                  className="relative w-16 h-8 rounded-full transition-all duration-700 p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
                  style={{ background: isNexora ? "#020617" : "#F1F5F9", border: isNexora ? "none" : "2px solid #E2E8F0" }}
                >
                  <motion.div
                    className="h-full aspect-square rounded-full shadow-md"
                    animate={{ x: isNexora ? 32 : 0 }}
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                    style={{ background: isNexora ? "#1A3FD8" : "#CBD5E1" }}
                  />
                </button>
              </div>

              {/* Response layer pill */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={isNexora ? "nexora-layer" : "legacy-layer"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-5 rounded-[20px] border mb-6 overflow-hidden"
                  style={{
                    background: isNexora ? "#020617" : "#F8FAFC",
                    borderColor: isNexora ? "rgba(255,255,255,0.08)" : "#E2E8F0",
                  }}
                >
                  {isNexora && (
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(255,255,255,1) 50%, transparent 75%)",
                        backgroundSize: "200% 200%",
                      }}
                    />
                  )}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3.5">
                      <div
                        className="h-10 w-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: isNexora ? "rgba(26,63,216,0.2)" : "#fff",
                          border: isNexora ? "1px solid rgba(26,63,216,0.35)" : "1px solid #E2E8F0",
                        }}
                      >
                        <Shield
                          className="h-5 w-5"
                          style={{ color: isNexora ? "#60A5FA" : "#94A3B8" }}
                        />
                      </div>
                      <div>
                        <span
                          className="block text-[9px] font-bold uppercase tracking-[0.22em] mb-0.5"
                          style={{ color: isNexora ? "rgba(255,255,255,0.35)" : "#94A3B8" }}
                        >
                          Response Layer
                        </span>
                        <span
                          className="block text-[16px] font-extrabold tracking-tight"
                          style={{ color: isNexora ? "#fff" : "#0F172A" }}
                        >
                          {isNexora ? "NEXORA STEALTH" : "LEGACY WP HEADER"}
                        </span>
                      </div>
                    </div>
                    <div
                      className="h-2.5 w-2.5 rounded-full animate-pulse"
                      style={{ background: isNexora ? "#1A3FD8" : "#F59E0B" }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-4 rounded-[18px] border border-border bg-surface-soft/60 group-hover:bg-white transition-all duration-500"
                  >
                    <span className="block text-[10px] font-bold text-text-muted uppercase tracking-[0.18em] mb-2">
                      {s.label}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isNexora ? `${s.label}-n` : `${s.label}-l`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="text-[24px] font-bold text-obsidian leading-none tracking-tight"
                        style={{ color: isNexora ? s.color : "#F97316" }}
                      >
                        {isNexora ? s.nexora : s.legacy}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Cache mode row */}
              <div
                className="p-4 rounded-[18px] border flex items-center justify-between transition-all duration-700"
                style={{
                  background: isNexora ? "rgba(26,63,216,0.04)" : "#F8FAFC",
                  borderColor: isNexora ? "rgba(26,63,216,0.18)" : "#E2E8F0",
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-700"
                    style={{
                      background: isNexora ? "#1A3FD8" : "#fff",
                      border: isNexora ? "none" : "1px solid #E2E8F0",
                      boxShadow: isNexora ? "0 0 14px rgba(26,63,216,0.3)" : "none",
                    }}
                  >
                    <RefreshCcw
                      className="h-5 w-5 transition-all duration-700"
                      style={{ color: isNexora ? "#fff" : "#94A3B8" }}
                    />
                  </div>
                  <span className="font-bold text-obsidian text-[14px]">
                    {isNexora ? "Intelligent Cache Sync" : "Dynamic PHP Rendering"}
                  </span>
                </div>
                <ChevronRight
                  className="h-5 w-5 transition-all duration-500"
                  style={{
                    color: isNexora ? "#1A3FD8" : "#CBD5E1",
                    opacity: isNexora ? 1 : 0.4,
                    transform: isNexora ? "translateX(0)" : "translateX(-4px)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
