"use client";

import { motion } from "motion/react";
import { Stethoscope, AlertTriangle, CheckCircle2, XCircle, MinusCircle, ArrowRight } from "lucide-react";

const TEAL = "#13716A";

const verdicts = [
  { icon: CheckCircle2, label: "Indexed", count: "142", color: "#16A34A", bg: "rgba(22,163,74,0.08)" },
  { icon: MinusCircle, label: "Crawled, not indexed", count: "18", color: "#F59E0B", bg: "rgba(245,158,11,0.08)" },
  { icon: XCircle, label: "Discovered, not indexed", count: "9", color: "#EF4444", bg: "rgba(239,68,68,0.08)" },
  { icon: AlertTriangle, label: "Excluded", count: "4", color: "#64748B", bg: "rgba(100,116,139,0.08)" },
];

export function PulseIndexDoctor() {
  return (
    <section className="bg-white py-32 px-8 lg:px-24 overflow-hidden relative border-y border-border">
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]" style={{ backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] blur-[160px] rounded-full pointer-events-none" style={{ background: "rgba(19,113,106,0.06)" }} />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-8 rounded-full" style={{ background: TEAL }} />
              <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: TEAL }}>The Signature Feature</span>
            </div>

            <h2 className="text-[36px] md:text-[48px] lg:text-[58px] font-extrabold text-obsidian tracking-[-0.04em] leading-[1.05] mb-8">
              The Index Doctor tells you<br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #13716A 0%, #0F5A55 100%)" }}>
                exactly why
              </span>
              <br />pages aren&apos;t ranking.
            </h2>

            <div className="space-y-5 max-w-[520px]">
              <p className="text-[17px] text-text-secondary font-medium leading-[1.72]">
                Other SEO plugins score your meta tags and stop there. Pulse pulls real indexing
                verdicts straight from Google Search Console — then cross-references them with its own
                signals (thin content, orphan pages, duplicates) to diagnose the actual cause.
              </p>
              <p className="text-[17px] text-obsidian font-bold leading-[1.65]">
                &ldquo;9 of your 11 rejected pages are thin content.&rdquo; Fix the pattern, not the symptom.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-border pt-10">
              <div>
                <div className="text-[40px] font-extrabold leading-none tracking-tight mb-1.5" style={{ color: TEAL }}>Real</div>
                <div className="text-[11px] font-bold text-text-muted uppercase tracking-[0.22em]">Google verdicts, not guesses</div>
              </div>
              <div>
                <div className="text-[40px] font-extrabold text-obsidian leading-none tracking-tight mb-1.5">Patterns</div>
                <div className="text-[11px] font-bold text-text-muted uppercase tracking-[0.22em]">Across every rejected page</div>
              </div>
            </div>
          </motion.div>

          {/* Visual: index health card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative bg-white border border-border rounded-[40px] shadow-[0_48px_96px_rgba(2,6,23,0.09)] p-10 overflow-hidden">
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-3.5">
                  <div className="h-11 w-11 rounded-2xl flex items-center justify-center" style={{ background: TEAL, boxShadow: "0 0 20px rgba(19,113,106,0.35)" }}>
                    <Stethoscope className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-[16px] font-extrabold text-obsidian tracking-tight">Index Health</div>
                    <div className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em]">173 URLs inspected</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                </span>
              </div>

              {/* Verdict grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {verdicts.map((v) => (
                  <div key={v.label} className="p-4 rounded-[18px] border border-border" style={{ background: v.bg }}>
                    <div className="flex items-center justify-between mb-2">
                      <v.icon className="h-4 w-4" style={{ color: v.color }} />
                      <span className="text-[22px] font-bold leading-none tracking-tight" style={{ color: v.color }}>{v.count}</span>
                    </div>
                    <span className="block text-[11px] font-semibold text-text-secondary leading-tight">{v.label}</span>
                  </div>
                ))}
              </div>

              {/* Pattern callout */}
              <div className="p-5 rounded-[20px] border" style={{ background: "rgba(239,68,68,0.04)", borderColor: "rgba(239,68,68,0.18)" }}>
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(239,68,68,0.1)" }}>
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-500 mb-1">Systemic pattern detected</p>
                    <p className="text-[14px] font-bold text-obsidian leading-snug">
                      9 of 13 not-indexed pages are under 300 words.
                    </p>
                    <p className="text-[13px] text-text-secondary mt-1 inline-flex items-center gap-1.5 font-semibold" style={{ color: TEAL }}>
                      Fix in Analyzer <ArrowRight className="h-3 w-3" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
