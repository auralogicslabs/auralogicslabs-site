"use client";

import { useState } from "react";
import { cn } from "@/app/components/ui/utils";

/**
 * Blog cover. Renders a hand-made SVG/image when `src` is provided and loads,
 * and falls back to a branded generated motif (themed by `accent`) when `src`
 * is empty OR fails to load — so every post always has an on-brand cover, at
 * any size, with no per-post asset required.
 */
export function BlogCoverImage({
  src,
  alt,
  accent,
  className,
  priority = false,
}: {
  src?: string;
  alt?: string;
  accent?: string;
  className?: string;
  priority?: boolean;
}) {
  const color = accent ?? "#6D5EFA";
  const [failed, setFailed] = useState(false);
  const showImage = !!src && !failed;

  return (
    <div
      className={cn("relative overflow-hidden bg-obsidian", className)}
      style={accent ? { boxShadow: `0 24px 60px ${accent}20` } : undefined}
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${color}55 0%, transparent 55%)`,
        }}
      />
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          loading={priority ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <GeneratedCover color={color} />
      )}
    </div>
  );
}

/** Scale-safe abstract motif (no text) — reads well from thumbnail to hero. */
function GeneratedCover({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 z-[2] h-full w-full"
      role="presentation"
    >
      <defs>
        <radialGradient id="bc-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#6D5EFA" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6D5EFA" stopOpacity="0" />
        </radialGradient>
        <pattern id="bc-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#FFFFFF" strokeOpacity="0.04" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="600" height="400" fill="url(#bc-grid)" />
      <ellipse cx="120" cy="340" rx="260" ry="200" fill="url(#bc-glow)" />

      <g fill="none" stroke={color} strokeLinecap="round">
        <circle cx="520" cy="340" r="70" strokeOpacity="0.55" strokeWidth="2.5" />
        <circle cx="520" cy="340" r="130" strokeOpacity="0.32" strokeWidth="2" />
        <circle cx="520" cy="340" r="200" strokeOpacity="0.16" strokeWidth="2" />
        <circle cx="520" cy="340" r="280" strokeOpacity="0.08" strokeWidth="2" />
      </g>

      <circle cx="520" cy="340" r="10" fill={color} />
      <circle cx="450" cy="270" r="5" fill={color} fillOpacity="0.8" />
      <circle cx="392" cy="338" r="4" fill="#FFFFFF" fillOpacity="0.35" />
      <circle cx="470" cy="160" r="4" fill="#FFFFFF" fillOpacity="0.25" />
    </svg>
  );
}
