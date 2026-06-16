"use client";

import { motion } from "motion/react";
import {
  Globe,
  Code2,
  Database,
  Plug,
  LayoutTemplate,
  FileCode2,
  Zap,
  ChevronRight,
  Clock,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const traditional = [
  { icon: Globe, label: "Request" },
  { icon: Code2, label: "PHP boot" },
  { icon: Database, label: "MySQL" },
  { icon: Plug, label: "Plugins" },
  { icon: LayoutTemplate, label: "Theme" },
  { icon: FileCode2, label: "HTML" },
];

function Node({
  icon: Icon,
  label,
  tone,
  delay,
}: {
  icon: typeof Globe;
  label: string;
  tone: "slate" | "blue";
  delay: number;
}) {
  const styles =
    tone === "blue"
      ? { box: "bg-[#1A3FD8]/10 border-[#1A3FD8]/25", icon: "#1A3FD8", text: "text-[#0D1B3E]" }
      : { box: "bg-slate-100 border-slate-200", icon: "#94A3B8", text: "text-slate-500" };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease }}
      className="flex flex-shrink-0 flex-col items-center gap-2"
    >
      <div className={`grid h-12 w-12 place-items-center rounded-2xl border ${styles.box}`}>
        <Icon className="h-5 w-5" style={{ color: styles.icon }} />
      </div>
      <span className={`text-[11px] font-bold ${styles.text}`}>{label}</span>
    </motion.div>
  );
}

function Arrow({ dim = false }: { dim?: boolean }) {
  return (
    <ChevronRight
      className={`h-4 w-4 flex-shrink-0 ${dim ? "text-slate-300" : "text-slate-400"}`}
    />
  );
}

export function ArchitectureCompare() {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
      {/* header */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-6 py-3.5">
        <span className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-400">
          Request path
        </span>
        <span className="text-[11px] font-bold text-slate-400">TTFB, measured</span>
      </div>

      <div className="space-y-5 p-6 md:p-8">
        {/* Traditional */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/40 p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[13px] font-bold text-slate-600">Traditional WordPress</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-amber-700">
              <Clock className="h-3 w-3" />
              ~800ms
            </span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {traditional.map((n, i) => (
              <div key={n.label} className="flex items-center gap-1.5">
                <Node icon={n.icon} label={n.label} tone="slate" delay={i * 0.06} />
                {i < traditional.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
        </div>

        {/* Auralogics */}
        <div className="relative rounded-2xl border-2 border-[#1A3FD8]/30 bg-[#1A3FD8]/[0.03] p-5">
          <span className="absolute -top-2.5 left-5 rounded-full bg-[#1A3FD8] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-white">
            Auralogics
          </span>
          <div className="mb-4 flex items-center justify-between pt-1">
            <span className="text-[13px] font-bold text-[#0D1B3E]">Static delivery</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1A3FD8] px-3 py-1 text-[11px] font-black text-white">
              <Zap className="h-3 w-3" />
              22ms
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <Node icon={Globe} label="Request" tone="blue" delay={0.1} />
            <Arrow />
            {/* bypassed middle */}
            <div className="flex items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-white/60 px-3 py-2">
              <span className="text-[11px] font-semibold text-slate-400 line-through">
                PHP · MySQL · Plugins · Theme
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-500">
                bypassed
              </span>
            </div>
            <Arrow />
            <Node icon={Zap} label="Static HTML" tone="blue" delay={0.2} />
          </div>
          <p className="mt-4 text-[12.5px] leading-relaxed text-slate-500">
            Pre-rendered HTML served from disk before WordPress boots — the same
            page, delivered in a fraction of the time.
          </p>
        </div>
      </div>
    </div>
  );
}
