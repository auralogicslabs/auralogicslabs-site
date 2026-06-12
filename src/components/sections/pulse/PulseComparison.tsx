"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const TEAL = "#13716A";

type Cellval = boolean | "partial";
const rows: { feature: string; pulse: Cellval; others: Cellval }[] = [
  { feature: "On-page SEO analysis & scoring", pulse: true, others: true },
  { feature: "XML sitemap & robots.txt", pulse: true, others: true },
  { feature: "Real Search Console indexing verdicts", pulse: true, others: false },
  { feature: "Index Doctor — diagnoses why pages aren't indexed", pulse: true, others: false },
  { feature: "Systemic pattern detection across rejected pages", pulse: true, others: false },
  { feature: "Internal link graph with orphan detection", pulse: true, others: "partial" },
  { feature: "Live Core Web Vitals from PageSpeed + CrUX", pulse: true, others: false },
  { feature: "Duplicate & thin-content detection", pulse: true, others: "partial" },
  { feature: "All core features free, no upsell wall", pulse: true, others: false },
];

function Cell({ value }: { value: boolean | "partial" }) {
  if (value === "partial") {
    return <span className="text-[12px] font-bold text-amber-500 uppercase tracking-wide">Partial</span>;
  }
  return value ? (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full" style={{ background: "rgba(19,113,106,0.1)" }}>
      <Check className="h-4 w-4" style={{ color: TEAL }} strokeWidth={3} />
    </span>
  ) : (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-surface-soft">
      <X className="h-4 w-4 text-text-muted" strokeWidth={2.5} />
    </span>
  );
}

export function PulseComparison() {
  return (
    <section className="bg-surface-soft py-32 px-8 lg:px-24 relative overflow-hidden border-y border-border">
      <div className="w-full max-w-[1100px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[720px] mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-8 rounded-full" style={{ background: TEAL }} />
            <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: TEAL }}>Why Pulse</span>
            <div className="h-0.5 w-8 rounded-full" style={{ background: TEAL }} />
          </div>
          <h2 className="text-[36px] md:text-[48px] lg:text-[54px] font-extrabold text-obsidian tracking-[-0.04em] leading-[1.05] mb-6">
            Beyond meta-tag checklists.
          </h2>
          <p className="text-[17px] md:text-[18px] text-text-secondary font-medium leading-[1.7]">
            Most SEO plugins score your titles and call it a day. Pulse goes to the source —
            Google's own data — to tell you what's actually holding your rankings back.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-border rounded-[32px] overflow-hidden shadow-[0_24px_60px_rgba(2,6,23,0.07)]"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 md:px-8 py-5 border-b border-border bg-surface-soft/50">
            <span className="text-[12px] font-black uppercase tracking-[0.16em] text-text-muted">Capability</span>
            <span className="text-[12px] font-black uppercase tracking-[0.16em] text-center w-20 md:w-28" style={{ color: TEAL }}>Pulse</span>
            <span className="text-[12px] font-black uppercase tracking-[0.16em] text-center w-20 md:w-28 text-text-muted">Typical</span>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.feature}
              className={`grid grid-cols-[1fr_auto_auto] gap-4 px-6 md:px-8 py-4 items-center ${i !== rows.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="text-[14px] md:text-[15px] font-semibold text-obsidian leading-snug">{r.feature}</span>
              <span className="flex justify-center w-20 md:w-28"><Cell value={r.pulse} /></span>
              <span className="flex justify-center w-20 md:w-28"><Cell value={r.others} /></span>
            </div>
          ))}
        </motion.div>

        <p className="text-center text-[12px] text-text-muted mt-6 font-medium">
          &ldquo;Typical&rdquo; reflects common capabilities of popular WordPress SEO plugins. Pulse focuses on
          diagnostic intelligence rather than content-editing convenience.
        </p>
      </div>
    </section>
  );
}
