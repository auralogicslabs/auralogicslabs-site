"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/app/components/ui/utils";
import type { LucideIcon } from "lucide-react";

export type ScreenshotVariant = "engine" | "media" | "insights" | "portal" | "platform" | "workflow" | "problem";

interface ProductScreenshotProps {
  variant: ScreenshotVariant;
  label: string;
  sublabel?: string;
  accent?: string;
  icon?: LucideIcon;
  className?: string;
  parallax?: boolean;
}

const variantAccents: Record<ScreenshotVariant, string> = {
  engine: "#1A3FD8",
  media: "#7C3AED",
  insights: "#0D9488",
  portal: "#F59E0B",
  platform: "#1A3FD8",
  workflow: "#059669",
  problem: "#64748B",
};

function SkeletonRows({ accent, rows = 4 }: { accent: string; rows?: number }) {
  return (
    <div className="space-y-3 p-6">
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-xl p-3 border"
            style={{ background: `${accent}08`, borderColor: `${accent}18` }}
          >
            <div className="h-3 w-10 rounded-full mb-2" style={{ background: `${accent}35` }} />
            <div className="h-2 w-14 rounded-full" style={{ background: `${accent}20` }} />
          </div>
        ))}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-lg border border-border/40 bg-white/70 px-3 py-2.5"
        >
          <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: accent }} />
          <div
            className="h-2 rounded-full"
            style={{ background: `${accent}18`, width: `${55 + (i % 3) * 12}%` }}
          />
        </div>
      ))}
    </div>
  );
}

function SidebarLayout({ accent }: { accent: string }) {
  return (
    <div className="flex h-full min-h-[280px]">
      <div className="w-[28%] border-r border-border/50 bg-slate-50/80 p-4 space-y-3 hidden sm:block">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg px-2 py-2"
            style={{ background: i === 1 ? `${accent}12` : "transparent" }}
          >
            <div
              className="h-2 w-2 rounded-md flex-shrink-0"
              style={{ background: i === 1 ? accent : "#CBD5E1" }}
            />
            <div className="h-1.5 rounded-full flex-1" style={{ background: i === 1 ? `${accent}30` : "#E2E8F0", maxWidth: `${40 + i * 8}%` }} />
          </div>
        ))}
      </div>
      <div className="flex-1">
        <SkeletonRows accent={accent} rows={5} />
      </div>
    </div>
  );
}

export function ProductScreenshot({
  variant,
  label,
  sublabel = "Product screenshot placeholder",
  accent,
  icon: Icon,
  className,
  parallax = true,
}: ProductScreenshotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const color = accent ?? variantAccents[variant];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? [24, -24] : [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], parallax ? [0.97, 1, 0.97] : [1, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale }}
      className={cn("relative w-full", className)}
    >
      <div
        className="absolute -inset-4 rounded-[40px] opacity-40 blur-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${color}30, transparent 70%)` }}
      />

      <div
        className="relative rounded-[24px] md:rounded-[28px] overflow-hidden border bg-white"
        style={{
          borderColor: `${color}25`,
          boxShadow: `0 32px 80px ${color}18, 0 8px 24px rgba(2,6,23,0.08), 0 0 0 1px rgba(255,255,255,0.8)`,
        }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#F8FAFC] border-b border-border/60">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 mx-3">
            <div className="bg-white border border-border/70 rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-[280px] mx-auto">
              <div className="h-1.5 w-1.5 rounded-full flex-shrink-0 animate-pulse" style={{ background: color }} />
              <span className="text-[10px] font-mono text-text-muted truncate">{label}</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div
          className="relative overflow-hidden"
          style={{ background: `linear-gradient(160deg, ${color}06 0%, white 45%, ${color}04 100%)` }}
        >
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative z-10">
            {variant === "portal" || variant === "engine" ? (
              <SidebarLayout accent={color} />
            ) : variant === "workflow" ? (
              <div className="p-8 flex flex-col items-center justify-center min-h-[280px] gap-6">
                <div className="flex items-center gap-4 w-full max-w-md">
                  {["Install", "Activate", "Deliver"].map((step, i) => (
                    <div key={step} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="h-10 w-10 rounded-full flex items-center justify-center text-[11px] font-black text-white"
                        style={{ background: color, opacity: 1 - i * 0.15 }}
                      >
                        {i + 1}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">{step}</span>
                    </div>
                  ))}
                </div>
                <SkeletonRows accent={color} rows={3} />
              </div>
            ) : (
              <SkeletonRows accent={color} rows={6} />
            )}
          </div>

          {/* Placeholder badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dashed text-[10px] font-bold uppercase tracking-[0.18em] backdrop-blur-sm bg-white/90"
              style={{ borderColor: `${color}50`, color: `${color}CC` }}
            >
              {Icon && <Icon className="h-3 w-3" />}
              {sublabel}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
