"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { siteContainerClass } from "@/lib/site-layout";
import { cn } from "@/app/components/ui/utils";

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

      const now = Date.now();
      if (now - lastParticleTimeRef.current > 50 && isHovered) {
        const colors = ["#60A5FA", "#818CF8", "#C084FC", "#A78BFA"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const newParticle = { id: particleIdRef.current++, x, y, color: randomColor };
        setParticles((prev) => [...prev.slice(-20), newParticle]);
        lastParticleTimeRef.current = now;
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
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      style={{ "--mouse-x": "-9999px", "--mouse-y": "-9999px" } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: isHovered ? 0.28 : 0.05,
          backgroundImage: `
            linear-gradient(to right, #60A5FA 1px, transparent 1px),
            linear-gradient(to bottom, #C084FC 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          WebkitMaskImage: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
          maskImage: "radial-gradient(240px circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovered ? 0.22 : 0,
          background:
            "radial-gradient(380px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.12) 60%, transparent 100%)",
        }}
      />
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
        {[18, 38, 58, 78].map((yPercent, i) => (
          <g key={`h-stream-${i}`}>
            <line x1="0%" y1={`${yPercent}%`} x2="100%" y2={`${yPercent}%`} stroke="rgba(255,255,255,0.012)" strokeWidth="1" />
            <path
              d={`M -200,${yPercent}0 H 2200`}
              fill="none"
              stroke="url(#streamGradH)"
              strokeWidth="1.5"
              className="animate-stream-h"
              style={{ animationDelay: `${i * 1.8}s`, animationDuration: `${7 + i * 2.5}s` }}
            />
          </g>
        ))}
        {[22, 42, 62, 82].map((xPercent, i) => (
          <g key={`v-stream-${i}`}>
            <line x1={`${xPercent}%`} y1="0%" x2={`${xPercent}%`} y2="100%" stroke="rgba(255,255,255,0.012)" strokeWidth="1" />
            <path
              d={`M ${xPercent}0,-200 V 2200`}
              fill="none"
              stroke="url(#streamGradV)"
              strokeWidth="1.5"
              className="animate-stream-v"
              style={{ animationDelay: `${i * 2.2}s`, animationDuration: `${9 + i * 3.1}s` }}
            />
          </g>
        ))}
        {[
          { x: "22%", y: "38%" },
          { x: "62%", y: "18%" },
          { x: "42%", y: "58%" },
          { x: "82%", y: "38%" },
        ].map((node, i) => (
          <g key={`node-${i}`} className="opacity-40">
            <circle cx={node.x} cy={node.y} r="4" fill="#60A5FA" className="animate-pulse-glow" style={{ animationDelay: `${i * 0.7}s` }} />
            <circle cx={node.x} cy={node.y} r="1.5" fill="#FFFFFF" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#050B25]">
      {/* Aurora atmosphere, branded, platform-level */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 78% 4%, rgba(129,140,248,0.26), transparent 58%), radial-gradient(80% 60% at 10% 0%, rgba(26,63,216,0.34), transparent 55%), radial-gradient(62% 55% at 60% 120%, rgba(192,132,252,0.14), transparent 60%)",
        }}
      />
      <InteractiveGridBackground />
      {/* Film grain for premium texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.3'/></svg>\")",
        }}
      />

      {/* Main content, vertically centered in the available space */}
      <div className="relative z-10 flex flex-1 items-center pt-24">
        <div className={cn(siteContainerClass, "text-center")}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-white/70">
              Auralogics Labs · The Nexora suite
            </span>
          </div>

          <h1 className="mx-auto max-w-[1040px] text-balance text-[46px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white sm:text-[66px] md:text-[86px]">
            We build tools that solve{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(120deg, #60A5FA 0%, #818CF8 45%, #C084FC 100%)" }}
            >
              real problems for web teams.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-[720px] text-[16px] font-medium leading-[1.6] text-white/60 sm:text-[18px] md:text-[20px]">
            The Nexora suite gives your WordPress site static-speed delivery, real SEO diagnostics, and
            automatic image optimisation, all as drop-in plugins. No rebuild. No new stack. No migration.
          </p>

          <div className="relative z-30 mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/products" variant="primary" size="lg" className="relative z-30">
              Explore the Nexora suite
            </Button>
            <Button href="/downloads" variant="secondary" size="lg" onDark className="relative z-30">
              Download free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Company-level proof strip, pinned to the bottom */}
      <div className="relative z-10 pb-14">
        <div className={siteContainerClass}>
          <div className="mx-auto grid max-w-[1080px] grid-cols-2 border-t border-white/10 sm:grid-cols-4">
            {[
              { v: "Drop-in", l: "Installs like any plugin" },
              { v: "Free & GPL", l: "Open-source core, forever" },
              { v: "Any host", l: "Apache · Nginx · LiteSpeed · IIS" },
              { v: "Your data", l: "Stays on your own site" },
            ].map((s, i) => (
              <div key={s.v} className={cn("px-4 py-6", i > 0 && "sm:border-l sm:border-white/10")}>
                <div className="text-[18px] font-extrabold tracking-tight text-white sm:text-[20px]">{s.v}</div>
                <div className="mt-1 text-[12.5px] text-white/45">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
