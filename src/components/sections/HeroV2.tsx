"use client";

import { motion, AnimatePresence } from "motion/react";
import { Zap, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ─── Engine position (% of canvas) ─────────────────────────────────────────── */
const EX = 50;
const EY = 47;

/* ─── Orb entry points — spread around all 4 edges ──────────────────────────── */
const ENTRIES: [number, number][] = [
  [5,  10], [22,  3], [50,  4], [76,  6],
  [94, 22], [97, 52], [94, 78], [74, 94],
  [48, 96], [20, 93], [4,  72], [3,  40],
];

/* ─── Outgoing directions — 12 angles radiating from center ─────────────────── */
const OUT_DIRS: [number, number][] = [
  [ 0,     -1   ],
  [ 0.50,  -0.87],
  [ 0.87,  -0.50],
  [ 1,      0   ],
  [ 0.87,   0.50],
  [ 0.50,   0.87],
  [ 0,      1   ],
  [-0.50,   0.87],
  [-0.87,   0.50],
  [-1,      0   ],
  [-0.87,  -0.50],
  [-0.50,  -0.87],
];

/* ─── Types ──────────────────────────────────────────────────────────────────── */
type Hue = 0 | 1 | 2 | 3;

interface OrbData {
  id: number;
  startX: number; startY: number;
  dx: number;     dy: number;
  dur: number;
  hue: Hue;
}

interface PageData {
  id: number;
  startX: number; startY: number;
  dx: number;     dy: number;
  dur: number;
  variant: 0 | 1 | 2 | 3;
}

/* ─── Orb palette ────────────────────────────────────────────────────────────── */
const ORB: Record<Hue, { fill: string; glow: string; trail: string }> = {
  0: { fill: "#f59e0b", glow: "rgba(245,158,11,0.55)",  trail: "rgba(245,158,11,0.18)" },
  1: { fill: "#f43f5e", glow: "rgba(244,63,94,0.50)",   trail: "rgba(244,63,94,0.16)"  },
  2: { fill: "#a855f7", glow: "rgba(168,85,247,0.50)",  trail: "rgba(168,85,247,0.16)" },
  3: { fill: "#06b6d4", glow: "rgba(6,182,212,0.50)",   trail: "rgba(6,182,212,0.16)"  },
};

/* ─── Page element schema ────────────────────────────────────────────────────── */
type PEl =
  | { k: "bar";  h: number; gradient: string }
  | { k: "line"; w: number }
  | { k: "grid"; cols: number };

const PAGE_SCHEMAS: PEl[][] = [
  // Article
  [
    { k: "bar",  h: 10, gradient: "linear-gradient(90deg,#1A3FD8,#4F6FF0)" },
    { k: "line", w: 88 },
    { k: "line", w: 70 },
    { k: "line", w: 55 },
  ],
  // E-commerce
  [
    { k: "bar",  h: 9,  gradient: "linear-gradient(90deg,#1A3FD8,#6366f1)" },
    { k: "line", w: 75 },
    { k: "grid", cols: 3 },
  ],
  // Image article
  [
    { k: "bar",  h: 17, gradient: "linear-gradient(135deg,rgba(26,63,216,0.18),rgba(26,63,216,0.06))" },
    { k: "line", w: 90 },
    { k: "line", w: 68 },
  ],
  // Landing page
  [
    { k: "bar",  h: 14, gradient: "linear-gradient(90deg,#1535B5,#1A3FD8,#4F6FF0)" },
    { k: "line", w: 82 },
    { k: "grid", cols: 2 },
  ],
];

/* ─── Mini page card ─────────────────────────────────────────────────────────── */
function MiniPage({ variant }: { variant: 0 | 1 | 2 | 3 }) {
  const schema = PAGE_SCHEMAS[variant];
  return (
    <div
      style={{
        width: 70, height: 54,
        borderRadius: 10, overflow: "hidden",
        background: "#fff",
        border: "1.5px solid rgba(26,63,216,0.18)",
        boxShadow: "0 4px 22px rgba(26,63,216,0.24), 0 0 40px rgba(26,63,216,0.1)",
        padding: 3,
      }}
    >
      {/* Traffic-light dots */}
      <div style={{ display: "flex", gap: 3, marginBottom: 3 }}>
        {(["rgba(252,96,91,0.72)", "rgba(253,188,64,0.72)", "rgba(53,199,89,0.72)"] as const).map(
          (c, i) => (
            <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: c }} />
          )
        )}
      </div>

      {/* Content rows */}
      {schema.map((el, i) => {
        if (el.k === "bar") {
          return (
            <div
              key={i}
              style={{ height: el.h, borderRadius: 3, background: el.gradient, marginBottom: 3 }}
            />
          );
        }
        if (el.k === "line") {
          return (
            <div
              key={i}
              style={{
                height: 3, borderRadius: 2,
                background: "rgba(15,23,42,0.09)",
                width: `${el.w}%`, marginBottom: 2,
              }}
            />
          );
        }
        if (el.k === "grid") {
          return (
            <div key={i} style={{ display: "flex", gap: 2, marginTop: 2 }}>
              {Array.from({ length: el.cols }).map((_, j) => (
                <div
                  key={j}
                  style={{
                    flex: 1, height: 9, borderRadius: 2,
                    background: `rgba(26,63,216,${0.12 - j * 0.03})`,
                  }}
                />
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

/* ─── Engine hub ─────────────────────────────────────────────────────────────── */
function EngineHub({ pulse }: { pulse: number }) {
  return (
    <div
      className="absolute z-20"
      style={{ left: `${EX}%`, top: `${EY}%`, transform: "translate(-50%,-50%)" }}
    >
      {/* On-arrival ring burst */}
      <motion.div
        key={pulse}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 90, height: 90, left: -45, top: -45,
          border: "1.5px solid rgba(26,63,216,0.5)",
        }}
        initial={{ scale: 0.15, opacity: 0.9 }}
        animate={{ scale: 2.2, opacity: 0 }}
        transition={{ duration: 0.72, ease: "easeOut" }}
      />

      {/* Slow ambient rings */}
      {[52, 80, 116].map((sz, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: sz, height: sz,
            left: -sz / 2, top: -sz / 2,
            border: "1px solid rgba(26,63,216,0.08)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.9 }}
        />
      ))}

      {/* Inner glow halo */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 68, height: 68, left: -34, top: -34,
          background: "radial-gradient(circle, rgba(26,63,216,0.2) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />

      {/* Core button */}
      <motion.div
        className="relative w-[56px] h-[56px] rounded-2xl flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #1A3FD8 0%, #1535B5 100%)" }}
        animate={{
          boxShadow: [
            "0 0 26px rgba(26,63,216,0.55), 0 6px 22px rgba(26,63,216,0.35)",
            "0 0 60px rgba(26,63,216,0.85), 0 6px 30px rgba(26,63,216,0.55)",
            "0 0 26px rgba(26,63,216,0.55), 0 6px 22px rgba(26,63,216,0.35)",
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <Zap className="w-7 h-7 text-white" style={{ fill: "white" }} />
      </motion.div>

      {/* Label */}
      <div
        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
        style={{ bottom: -26 }}
      >
        <span
          style={{
            fontSize: 9, fontWeight: 800,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#1A3FD8",
          }}
        >
          Nexora Engine
        </span>
      </div>
    </div>
  );
}

/* ─── Particle (ambient rising) ──────────────────────────────────────────────── */
function AmbientParticle({ x, delay, color }: { x: number; delay: number; color: string }) {
  return (
    <motion.div
      className="absolute bottom-0 pointer-events-none"
      style={{ left: `${x}%`, width: 1 }}
      animate={{ y: [0, -660], opacity: [0, 0.5, 0] }}
      transition={{ duration: 9 + delay * 1.8, repeat: Infinity, delay, ease: "easeOut" }}
    >
      <div
        style={{
          width: 1, height: 36,
          background: `linear-gradient(to top, ${color}, transparent)`,
          borderRadius: 99,
        }}
      />
    </motion.div>
  );
}

/* ─── Speed canvas ───────────────────────────────────────────────────────────── */
function SpeedCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [orbs, setOrbs]   = useState<OrbData[]>([]);
  const [pages, setPages] = useState<PageData[]>([]);
  const [pulse, setPulse] = useState(0);

  const idRef    = useRef(0);
  const entryIdx = useRef(0);
  const vecIdx   = useRef(0);
  const timers   = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Live counter
  const [count, setCount] = useState(() => 1_247_391 + Math.floor(Math.random() * 999));
  useEffect(() => {
    const iv = setInterval(
      () => setCount((c) => c + Math.floor(Math.random() * 3 + 1)),
      820
    );
    return () => clearInterval(iv);
  }, []);

  const spawnCycle = useCallback(() => {
    const el = canvasRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();

    const eid = entryIdx.current++ % ENTRIES.length;
    const [epx, epy] = ENTRIES[eid];
    const sx = (epx / 100) * width;
    const sy = (epy / 100) * height;
    const cx = (EX  / 100) * width;
    const cy = (EY  / 100) * height;
    const dur   = 1.3 + Math.random() * 0.9;
    const orbId = ++idRef.current;

    setOrbs((prev) => [
      ...prev.slice(-10),
      { id: orbId, startX: sx, startY: sy, dx: cx - sx, dy: cy - sy, dur, hue: (orbId % 4) as Hue },
    ]);

    const t1 = setTimeout(() => {
      // Orb arrives → pulse engine, spawn outgoing page
      setPulse((p) => p + 1);
      setOrbs((prev) => prev.filter((o) => o.id !== orbId));

      const vid    = vecIdx.current++ % OUT_DIRS.length;
      const [vx, vy] = OUT_DIRS[vid];
      const dist   = Math.min(width, height) * 0.42;
      const pageId = ++idRef.current;
      const pageDur = 1.0 + Math.random() * 0.35;

      setPages((prev) => [
        ...prev.slice(-6),
        {
          id: pageId,
          startX: cx, startY: cy,
          dx: vx * dist, dy: vy * dist,
          dur: pageDur,
          variant: (pageId % 4) as 0 | 1 | 2 | 3,
        },
      ]);

      const t2 = setTimeout(
        () => setPages((prev) => prev.filter((p) => p.id !== pageId)),
        2800
      );
      timers.current.push(t2);
    }, dur * 1000 + 60);
    timers.current.push(t1);
  }, []);

  useEffect(() => {
    const t0 = setTimeout(spawnCycle, 500);
    const iv  = setInterval(spawnCycle, 1300);
    timers.current.push(t0);
    return () => {
      clearInterval(iv);
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
  }, [spawnCycle]);

  return (
    <div ref={canvasRef} className="relative w-full h-full">

      {/* ── SVG background ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="ncx-bg-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(26,63,216,0.10)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="ncx-bg-orange" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(243,154,9,0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {/* Engine centre glow */}
        <circle cx="50" cy="47" r="44" fill="url(#ncx-bg-blue)" />
        {/* Warm accent glow (bottom-right) */}
        <circle cx="74" cy="82" r="24" fill="url(#ncx-bg-orange)" />
      </svg>

      {/* ── Ambient rising particles ── */}
      {[8, 18, 32, 46, 60, 72, 84, 93].map((x, i) => (
        <AmbientParticle
          key={i}
          x={x}
          delay={i * 1.05}
          color={i % 3 === 0 ? "rgba(243,154,9,0.45)" : "rgba(26,63,216,0.35)"}
        />
      ))}

      {/* ── Incoming orbs ── */}
      <AnimatePresence>
        {orbs.map((orb) => {
          const { fill, glow } = ORB[orb.hue];
          return (
            <motion.div
              key={orb.id}
              className="absolute pointer-events-none"
              style={{
                left: orb.startX, top: orb.startY,
                width: 14, height: 14,
                marginLeft: -7, marginTop: -7,
              }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{
                x: orb.dx,
                y: orb.dy,
                opacity: [0, 1, 1, 0],
                scale:   [0, 1, 1, 0.3],
              }}
              transition={{
                duration: orb.dur,
                ease: "easeIn",
                times: [0, 0.08, 0.78, 1],
              }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <div
                style={{
                  width: "100%", height: "100%",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${fill} 0%, ${fill}55 55%, transparent 100%)`,
                  boxShadow: `0 0 16px ${glow}`,
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* ── Engine hub ── */}
      <EngineHub pulse={pulse} />

      {/* ── Outgoing page cards ── */}
      <AnimatePresence>
        {pages.map((page) => (
          <motion.div
            key={page.id}
            className="absolute pointer-events-none"
            style={{
              left: page.startX, top: page.startY,
              marginLeft: -35, marginTop: -27,
            }}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              x: page.dx,
              y: page.dy,
              opacity: [0, 1, 1, 0],
              scale:   [0, 1, 1, 0.8],
              rotate:  [0, (Math.random() - 0.5) * 8, 0],
            }}
            transition={{
              duration: page.dur + 1.2,
              ease: "easeOut",
              times: [0, 0.14, 0.74, 1],
            }}
            exit={{ opacity: 0 }}
          >
            <MiniPage variant={page.variant} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* ── "5ms" watermark ── */}
      <div
        className="absolute select-none pointer-events-none"
        style={{ right: "2%", bottom: "9%" }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 3, lineHeight: 1 }}>
          <span
            style={{
              fontSize: "clamp(68px, 8.5vw, 108px)",
              fontWeight: 900,
              color: "rgba(26,63,216,0.065)",
              lineHeight: 1,
            }}
          >
            5
          </span>
          <span
            style={{
              fontSize: "clamp(34px, 4.3vw, 54px)",
              fontWeight: 900,
              color: "rgba(26,63,216,0.065)",
              lineHeight: 1,
              marginBottom: "0.11em",
            }}
          >
            ms
          </span>
        </div>
        <div
          style={{
            textAlign: "right",
            fontSize: 8,
            fontWeight: 800,
            letterSpacing: "0.3em",
            color: "rgba(26,63,216,0.15)",
            marginTop: -2,
            textTransform: "uppercase",
          }}
        >
          TTFB · CACHE HIT
        </div>
      </div>

      {/* ── Live counter ── */}
      <motion.div
        className="absolute"
        style={{ bottom: 20, left: "50%", transform: "translateX(-50%)" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <div
          style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 99,
            background: "rgba(255,255,255,0.92)",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.div
            style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", flexShrink: 0 }}
            animate={{ scale: [1, 1.45, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: 13, color: "#0f172a" }}>
            {count.toLocaleString()}
          </span>
          <span style={{ fontSize: 12, color: "#94a3b8" }}>pages served today</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── HeroV2 ─────────────────────────────────────────────────────────────────── */
export function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ minHeight: "100svh" }}>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,63,216,0.10) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          opacity: 0.40,
        }}
      />

      {/* Ambient blue glow — top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%", right: "-8%",
          width: 700, height: 700,
          background:
            "radial-gradient(circle at 60% 40%, rgba(26,63,216,0.07) 0%, transparent 65%)",
        }}
      />
      {/* Ambient orange glow — bottom-centre */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-12%", right: "22%",
          width: 520, height: 520,
          background:
            "radial-gradient(circle, rgba(243,154,9,0.06) 0%, transparent 65%)",
        }}
      />

      {/* ── Main container ── */}
      <div
        className="relative max-w-[1600px] mx-auto px-8 lg:px-24 w-full"
        style={{ minHeight: "100svh", display: "flex", alignItems: "center" }}
      >
        <div className="grid lg:grid-cols-[44fr_56fr] gap-12 lg:gap-20 items-center w-full py-28 lg:py-0">

          {/* ── LEFT: copy ── */}
          <div className="relative z-10">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{
                background: "rgba(26,63,216,0.07)",
                border: "1px solid rgba(26,63,216,0.14)",
                color: "#1A3FD8",
              }}
            >
              <motion.div
                style={{ width: 7, height: 7, borderRadius: "50%", background: "#1A3FD8", flexShrink: 0 }}
                animate={{ scale: [1, 1.55, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              WordPress Static Generation Engine
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.75 }}
              className="font-black tracking-tight mb-7"
              style={{
                fontSize: "clamp(2.5rem, 4.3vw, 4.8rem)",
                lineHeight: 1.04,
                color: "#0f172a",
              }}
            >
              Your WordPress.
              <br />
              <span style={{ color: "#1A3FD8" }}>Lightning fast.</span>
              <br />
              <span style={{ color: "#f39a09" }}>Zero effort.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.75 }}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "#64748b" }}
            >
              Install Nexora Engine and every page on your WordPress site becomes
              a static HTML file served in under&nbsp;5ms — no CDN, no DevOps,
              no performance consultant required.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26, duration: 0.75 }}
              className="flex flex-wrap gap-3 mb-14"
            >
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: "#1A3FD8",
                  boxShadow: "0 4px 24px rgba(26,63,216,0.38)",
                }}
              >
                Get Nexora Free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm transition-colors"
                style={{
                  border: "1px solid rgba(0,0,0,0.10)",
                  color: "#0f172a",
                }}
              >
                Live Demo
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.75 }}
              className="flex flex-wrap gap-10"
            >
              {[
                { val: "< 5ms", label: "Average TTFB"    },
                { val: "169×",  label: "Faster than PHP" },
                { val: "100%",  label: "WP compatible"   },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="text-[1.7rem] font-black leading-none" style={{ color: "#0f172a" }}>
                    {val}
                  </div>
                  <div
                    className="text-[11px] font-semibold uppercase tracking-widest mt-1.5"
                    style={{ color: "#94a3b8" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: animation canvas ── */}
          <div
            className="relative hidden lg:block"
            style={{ height: "min(720px, 88vh)" }}
          >
            <SpeedCanvas />
          </div>

        </div>
      </div>
    </section>
  );
}
