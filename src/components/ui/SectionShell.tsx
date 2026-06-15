"use client";

import { motion } from "motion/react";
import { cn } from "@/app/components/ui/utils";

export type SectionTone = "white" | "soft" | "dark" | "brand" | "ink";

const toneStyles: Record<SectionTone, string> = {
  white: "bg-white text-obsidian",
  soft: "bg-[#F4F7FB] text-obsidian",
  dark: "bg-obsidian text-white",
  brand: "bg-brand text-white",
  ink: "bg-[#050B25] text-white",
};

interface FullWidthSectionProps {
  id?: string;
  tone?: SectionTone;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  /** Tighter vertical padding */
  compact?: boolean;
}

/** Full-bleed section. no outer margin/radius. Sections merge via background color. */
export function FullWidthSection({
  id,
  tone = "white",
  className,
  innerClassName,
  children,
  compact = false,
}: FullWidthSectionProps) {
  return (
    <section id={id} className={cn("relative w-full", toneStyles[tone], className)}>
      <div
        className={cn(
          "w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16",
          compact ? "py-16 md:py-20" : "py-20 md:py-28 lg:py-32",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

/** Curved divider between contrasting sections (HedPro-style) */
export function SectionCurve({
  from,
  to,
  flip = false,
}: {
  from: "dark" | "white" | "soft" | "brand";
  to: "dark" | "white" | "soft" | "brand";
  flip?: boolean;
}) {
  const fills: Record<string, string> = {
    dark: "#020617",
    white: "#FFFFFF",
    soft: "#F4F7FB",
    brand: "#1A3FD8",
  };

  return (
    <div className={cn("relative w-full leading-[0] -mt-px", flip && "rotate-180")} aria-hidden>
      <svg viewBox="0 0 1440 80" fill="none" className="w-full h-[40px] md:h-[64px]" preserveAspectRatio="none">
        <path
          d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z"
          fill={fills[to]}
        />
        <path
          d="M0 80V50C360 10 720 10 1080 50C1260 70 1380 75 1440 80H0Z"
          fill={fills[from]}
          fillOpacity="0"
        />
      </svg>
    </div>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={cn(align === "center" && "text-center mx-auto", className)}
    >
      <span
        className={cn(
          "inline-block text-[11px] font-black uppercase tracking-[0.32em] mb-4",
          dark ? "text-brand-soft" : "text-brand"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "text-[34px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.06] tracking-[-0.04em] mb-5",
          dark ? "text-white" : "text-obsidian",
          align === "center" && "max-w-[780px] mx-auto"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-[17px] md:text-[18px] leading-[1.65] font-medium max-w-[520px]",
            dark ? "text-white/55" : "text-text-secondary",
            align === "center" && "mx-auto max-w-[580px]"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  const initial = { up: { opacity: 0, y: 36 }, left: { opacity: 0, x: -36 }, right: { opacity: 0, x: 36 } }[direction];
  const animate = { up: { opacity: 1, y: 0 }, left: { opacity: 1, x: 0 }, right: { opacity: 1, x: 0 } }[direction];

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Inner content card. radius lives INSIDE sections, not on sections themselves */
export function InnerCard({
  children,
  className,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[24px] md:rounded-[32px] border border-border/70 bg-white overflow-hidden shadow-[0_8px_40px_rgba(2,6,23,0.06)]",
        className
      )}
      style={accent ? { borderColor: `${accent}25` } : undefined}
    >
      {children}
    </div>
  );
}

// Keep SectionShell as alias for any legacy imports
export { FullWidthSection as SectionShell };
