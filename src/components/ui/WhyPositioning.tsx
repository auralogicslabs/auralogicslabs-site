"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Positioning matrix for the "Why We Exist" section.
 * Performance (y) × Effort & cost to adopt (x). Auralogics occupies the
 * ideal quadrant (high performance, low effort) while the alternatives are
 * compromised — a visual proof of "neither is the answer."
 */
const nodes = [
  {
    label: "Traditional WordPress",
    note: "Cheap, but slow",
    x: 24,
    y: 74,
    color: "#F59E0B",
    emphasis: false,
  },
  {
    label: "Full headless rebuild",
    note: "Fast, but costly",
    x: 78,
    y: 22,
    color: "#94A3B8",
    emphasis: false,
  },
  {
    label: "Auralogics Platform",
    note: "Static speed, drop-in",
    x: 24,
    y: 24,
    color: "#1A3FD8",
    emphasis: true,
  },
];

export function WhyPositioning() {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
      {/* header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-6 py-3.5">
        <span className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
          Where each approach lands
        </span>
        <span className="text-[11px] font-bold text-slate-400">Performance × effort</span>
      </div>

      <div className="p-6 sm:p-8">
        <div className="relative w-full aspect-[16/11]">
          {/* Y axis label */}
          <span className="absolute -left-1 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 whitespace-nowrap">
            Performance →
          </span>
          {/* X axis label */}
          <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 whitespace-nowrap">
            Effort &amp; cost to adopt →
          </span>

          {/* plot area */}
          <div className="absolute inset-y-0 left-7 right-2 bottom-5">
            <div className="relative h-full w-full rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#FBFCFE,#F4F7FB)] overflow-hidden">
              {/* ideal quadrant highlight (top-left) */}
              <div className="absolute left-0 top-0 h-1/2 w-1/2 bg-brand/[0.06] border-r border-b border-brand/15" />
              <span className="absolute left-3 top-3 text-[9px] font-black uppercase tracking-[0.18em] text-brand/70">
                Ideal
              </span>

              {/* center cross */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200/80" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200/80" />

              {/* nodes */}
              {nodes.map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    {n.emphasis ? (
                      <span className="relative grid h-11 w-11 place-items-center">
                        <span className="absolute inset-0 rounded-full bg-brand/20 blur-md" />
                        <span className="relative grid h-9 w-9 place-items-center rounded-full bg-brand text-white shadow-[0_8px_24px_rgba(26,63,216,0.45)]">
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </span>
                      </span>
                    ) : (
                      <span
                        className="h-3.5 w-3.5 rounded-full ring-4 ring-white"
                        style={{ background: n.color }}
                      />
                    )}
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[11px] font-bold leading-none whitespace-nowrap backdrop-blur-sm ${
                        n.emphasis
                          ? "border-brand/25 bg-white text-obsidian shadow-sm"
                          : "border-slate-200 bg-white/80 text-slate-500"
                      }`}
                    >
                      {n.label}
                      <span className="ml-1.5 font-medium text-slate-400">· {n.note}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
