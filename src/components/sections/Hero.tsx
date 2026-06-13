"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { HeroStoryVisual } from "@/components/sections/HeroStoryVisual";

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
    <section ref={ref} className="relative h-[100svh] min-h-[600px] max-h-[100svh] w-full bg-[#050B25] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(26,63,216,0.28) 0%, transparent 65%)",
          }}
        />
        <div className="absolute -bottom-32 right-0 w-[900px] h-[600px] bg-purple-700/8 blur-[200px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 -left-60 w-[600px] h-[600px] bg-emerald-500/5 blur-[180px] rounded-full pointer-events-none" />
        <InteractiveGridBackground />

        <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="h-full flex flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] gap-6 sm:gap-8 lg:gap-8 xl:gap-12 lg:items-center pt-[100px] sm:pt-[108px] lg:pt-[104px] pb-5 lg:pb-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-20 flex-shrink-0 min-w-0"
            >
              <h1 className="text-[48px] sm:text-[64px] md:text-[82px] font-extrabold text-white leading-[0.9] tracking-[-0.05em]">
                Built to make
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #818CF8 45%, #C084FC 100%)",
                  }}
                >
                  the web impossibly
                  <br />
                  fast.
                </span>
              </h1>

              <p className="mt-6 sm:mt-7 max-w-[560px] text-[16px] sm:text-[18px] md:text-[20px] text-white/42 font-medium leading-[1.6]">
                Auralogics Labs builds drop-in infrastructure for WordPress — static-speed delivery, SEO intelligence, and edge media optimization. Our products run quietly in the background, so your users never wait and Google never overlooks you.
              </p>

              <div className="relative z-30 mt-7 sm:mt-8 flex items-center gap-3 sm:gap-4">
                <Link
                  href="/products"
                  className="relative z-30 inline-flex items-center justify-center rounded-full bg-[#F39A09] text-obsidian px-7 sm:px-8 py-3.5 sm:py-4 text-[12px] sm:text-[13px] font-black uppercase tracking-wide hover:bg-[#ffb347] transition-colors shadow-[0_8px_28px_rgba(243,154,9,0.35)]"
                >
                  Explore Platform
                </Link>
                <Link
                  href="/products/nexora-engine"
                  className="relative z-30 flex h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-white/5 text-white hover:bg-[#F39A09] hover:border-[#F39A09] hover:text-obsidian transition-all duration-300"
                  aria-label="View Nexora Engine"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            <div className="relative flex-1 min-h-0 lg:flex-none lg:h-[min(580px,calc(100svh-124px))] xl:h-[min(640px,calc(100svh-112px))] 2xl:h-[min(680px,calc(100svh-104px))] w-full">
              <HeroStoryVisual />
            </div>
          </div>
        </div>
    </section>
  );
}
