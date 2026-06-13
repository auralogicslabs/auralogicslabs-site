"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  Activity,
  Globe,
  TrendingDown,
  Zap,
  ImageIcon,
  LayoutDashboard,
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Layers,
} from "lucide-react";

const SLIDE_DURATION = 5200;

const slideTransition = {
  duration: 1.25,
  ease: [0.16, 1, 0.3, 1] as const,
};

type SlideId = "engine" | "media" | "insights" | "portal";

const slides: {
  id: SlideId;
  chromeUrl: string;
  pillSite: string;
  pillStatus: string;
  stat: { value: string; label: string; sub?: string; color: string };
  statSecondary?: { value: string; label: string; color: string };
}[] = [
  {
    id: "engine",
    chromeUrl: "portal.auralogicslabs.com · Nexora Engine",
    pillSite: "your-site.com",
    pillStatus: "Nexora active",
    stat: { value: "22ms", label: "Avg. TTFB", sub: "was 850ms before", color: "#1A3FD8" },
    statSecondary: { value: "100%", label: "Cache Hit Rate", color: "#059669" },
  },
  {
    id: "media",
    chromeUrl: "portal.auralogicslabs.com · Nexora Media",
    pillSite: "your-site.com",
    pillStatus: "Media optimized",
    stat: { value: "↓ 70%", label: "Image Payload", sub: "avg. size reduction", color: "#7C3AED" },
    statSecondary: { value: "AVIF", label: "Format delivered", color: "#059669" },
  },
  {
    id: "insights",
    chromeUrl: "your-site.com/wp-admin · Nexora Pulse",
    pillSite: "your-site.com",
    pillStatus: "Index Doctor live",
    stat: { value: "142", label: "Pages Indexed", sub: "up from 109 last month", color: "#13716A" },
    statSecondary: { value: "13", label: "Issues Found", color: "#F59E0B" },
  },
  {
    id: "portal",
    chromeUrl: "portal.auralogicslabs.com · Fleet",
    pillSite: "12 sites connected",
    pillStatus: "All systems go",
    stat: { value: "12", label: "Sites Managed", color: "#F39A09" },
    statSecondary: { value: "0", label: "Open Issues", color: "#1A3FD8" },
  },
];

function StatBadge({
  value,
  label,
  sub,
  color,
  className,
}: {
  value: string;
  label: string;
  sub?: string;
  color: string;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-20 pointer-events-none bg-white rounded-[16px] border border-white/80 shadow-[0_12px_40px_rgba(2,6,23,0.18)] px-4 py-3 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div
          className="h-8 w-8 rounded-[10px] flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}15`, border: `1px solid ${color}25` }}
        >
          <Activity className="h-3.5 w-3.5" style={{ color }} />
        </div>
        <div>
          <div className="font-mono text-[17px] font-black leading-none tracking-tight" style={{ color }}>
            {value}
          </div>
          <div className="text-[9px] text-[#94A3B8] font-bold uppercase tracking-[0.2em] mt-0.5">{label}</div>
        </div>
      </div>
      {sub && (
        <div className="mt-2 pt-2 border-t border-[#E2E8F0] flex items-center gap-1.5">
          <TrendingDown className="h-3 w-3 text-emerald-500" />
          <span className="text-[10px] text-emerald-600 font-bold">{sub}</span>
        </div>
      )}
    </motion.div>
  );
}

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#181F30] border-b border-white/6 flex-shrink-0">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 mx-3 min-w-0">
        <div className="bg-white/6 border border-white/8 rounded-[8px] px-3 py-1 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/80 animate-pulse flex-shrink-0" />
          <span className="text-[10px] font-mono text-white/35 truncate">{url}</span>
          <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
            <div className="h-1.5 w-1.5 rounded-full bg-brand/60" />
            <span className="text-[9px] text-brand/60 font-bold">LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideHeader({
  icon: Icon,
  accent,
  product,
  subtitle,
  badge,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  accent: string;
  product: string;
  subtitle: string;
  badge?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div
          className="h-9 w-9 rounded-xl flex items-center justify-center"
          style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
        >
          <Icon className="h-4 w-4" style={{ color: accent }} />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">{product}</p>
          <p className="text-[14px] sm:text-[15px] font-bold text-white/85">{subtitle}</p>
        </div>
      </div>
      {badge && (
        <span
          className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full"
          style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}35` }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

/** Slide 1 — Nexora Engine dashboard (unchanged — the one you liked) */
function EngineSlide() {
  const kpis = [
    { v: "22ms", l: "TTFB", c: "#1A3FD8", up: false },
    { v: "100%", l: "Cache Hit", c: "#059669", up: true },
    { v: "↓ 70%", l: "Payload", c: "#7C3AED", up: false },
  ];
  const rows = [
    { url: "/shop/product-1", status: "HIT", ms: "19ms", fresh: true },
    { url: "/blog/2024-update", status: "HIT", ms: "22ms", fresh: true },
    { url: "/about", status: "BUILD", ms: "—", fresh: false },
  ];

  return (
    <div className="bg-[#0F1521] flex flex-1 min-h-[200px] h-full">
      <div className="w-[132px] flex-shrink-0 bg-[#0A0F1A] border-r border-white/5 p-3 flex flex-col gap-2.5 hidden sm:flex">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="h-7 w-7 rounded-[10px] bg-brand/25 border border-brand/35 flex items-center justify-center mb-2"
        >
          <Zap className="h-3.5 w-3.5 text-brand-soft" />
        </motion.div>
        {[70, 55, 65, 45, 60].map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
            className="flex items-center gap-2 px-2 py-1.5 rounded-[8px]"
            style={{ background: i === 0 ? "rgba(26,63,216,0.15)" : "transparent" }}
          >
            <div className="h-2 w-2 rounded-[4px]" style={{ background: i === 0 ? "#1A3FD8" : "rgba(255,255,255,0.08)" }} />
            <div className="h-1.5 rounded-full bg-white/10" style={{ width: `${w}%` }} />
          </motion.div>
        ))}
      </div>
      <div className="flex-1 p-4 sm:p-5 flex flex-col gap-3 min-w-0">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <div className="h-2 w-20 sm:w-24 rounded-full bg-white/8" />
          </div>
          <div className="h-6 px-2 rounded-[8px] bg-brand/20 border border-brand/30 flex items-center justify-center">
            <span className="text-[9px] font-black text-brand-soft uppercase tracking-wider">Engine Active</span>
          </div>
        </motion.div>
        <div className="grid grid-cols-3 gap-2">
          {kpis.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 14, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.25 + i * 0.08 }}
              className="rounded-[12px] p-2.5 sm:p-3 relative overflow-hidden"
              style={{ background: `${s.c}10`, border: `1px solid ${s.c}22` }}
            >
              <div className="font-mono text-[14px] sm:text-[16px] font-black leading-none" style={{ color: s.c }}>
                {s.v}
              </div>
              <div className="text-[8px] text-white/28 font-bold uppercase tracking-wider mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.url}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
            className="flex items-center gap-2 sm:gap-3 rounded-[10px] bg-white/[0.025] border border-white/5 px-3 py-2"
          >
            <div className="h-1.5 w-1.5 rounded-full" style={{ background: row.fresh ? "#10B981" : "#F59E0B" }} />
            <span className="text-[10px] font-mono text-white/30 flex-1 truncate">{row.url}</span>
            <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-[6px]" style={{ color: row.fresh ? "#10B981" : "#F59E0B", background: row.fresh ? "rgba(16,185,129,0.1)" : "rgba(245,158,11,0.1)" }}>
              {row.status}
            </span>
            <span className="text-[9px] font-mono text-white/20">{row.ms}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Slide 2 — Nexora Media: format conversion + savings (from product page) */
function MediaSlide() {
  const conversions = [
    { file: "/uploads/hero-banner.jpg", from: "JPEG · 2.4 MB", to: "AVIF · 180 KB", saved: "92%" },
    { file: "/media/product-shot.png", from: "PNG · 840 KB", to: "WebP · 62 KB", saved: "93%" },
    { file: "/blog/featured.jpg", from: "JPEG · 1.1 MB", to: "WebP · 98 KB", saved: "91%" },
  ];

  return (
    <div className="bg-[#0F1521] flex-1 p-4 sm:p-5 flex flex-col min-h-[200px] h-full">
      <SlideHeader
        icon={ImageIcon}
        accent="#7C3AED"
        product="Nexora Media"
        subtitle="AVIF/WebP · adaptive sizing"
        badge="Non-destructive"
      />

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { v: "↓ 70%", l: "Avg. reduction", c: "#7C3AED" },
          { v: "AVIF+WebP", l: "Auto format", c: "#059669" },
          { v: "Async", l: "BG queue", c: "#1A3FD8" },
        ].map((m, i) => (
          <motion.div
            key={m.l}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="rounded-xl p-2.5 text-center"
            style={{ background: `${m.c}10`, border: `1px solid ${m.c}22` }}
          >
            <p className="font-mono text-[13px] sm:text-[15px] font-black" style={{ color: m.c }}>{m.v}</p>
            <p className="text-[8px] text-white/30 uppercase tracking-wider mt-1">{m.l}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex-1 space-y-2">
        {conversions.map((row, i) => (
          <motion.div
            key={row.file}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.1 }}
            className="rounded-xl bg-white/[0.03] border border-white/8 p-3"
          >
            <p className="text-[10px] font-mono text-white/35 mb-2 truncate">{row.file}</p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-red-300/60 flex-1">{row.from}</span>
              <span className="text-white/20">→</span>
              <span className="text-[10px] font-mono text-emerald-400/90 flex-1 text-right">{row.to}</span>
              <span className="text-[9px] font-black text-violet-300 bg-violet-500/15 px-2 py-0.5 rounded-md">{row.saved}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-2"
      >
        <Clock className="h-3.5 w-3.5 text-emerald-400" />
        <span className="text-[10px] text-emerald-400/90 font-semibold">847 images optimized · originals preserved</span>
      </motion.div>
    </div>
  );
}

/** Slide 3 — Nexora Pulse: SEO operations console / Index Doctor */
function InsightsSlide() {
  return (
    <div className="bg-[#0F1521] flex-1 p-4 sm:p-5 flex flex-col min-h-[200px] h-full">
      <SlideHeader
        icon={Stethoscope}
        accent="#13716A"
        product="Nexora Pulse"
        subtitle="SEO operations console for WordPress"
        badge="Free"
      />

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { v: "142", l: "Indexed", c: "#16A34A", icon: CheckCircle2 },
          { v: "13", l: "Not indexed", c: "#F59E0B", icon: AlertTriangle },
          { v: "9", l: "Thin pages", c: "#EF4444", icon: Layers },
        ].map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.l}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="rounded-xl p-2.5"
              style={{ background: `${m.c}10`, border: `1px solid ${m.c}22` }}
            >
              <Icon className="h-3.5 w-3.5 mb-1.5" style={{ color: m.c }} />
              <p className="font-mono text-[14px] font-black" style={{ color: m.c }}>{m.v}</p>
              <p className="text-[8px] text-white/30 uppercase tracking-wider">{m.l}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="rounded-xl bg-white/[0.04] border border-white/8 p-4 flex-1 flex flex-col justify-end mb-3"
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">Pages indexed · last 12 weeks</p>
        <div className="flex items-end gap-1 h-20 sm:h-24">
          {[58, 64, 70, 76, 83, 91, 98, 104, 112, 121, 134, 142].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${Math.round((h / 142) * 100)}%` }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 rounded-t bg-gradient-to-t from-teal-600/70 to-teal-400/20 min-h-[2px]"
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="rounded-lg bg-white/[0.03] border border-white/6 px-3 py-2 flex items-center justify-between"
      >
        <span className="text-[10px] text-white/40">9 of 13 not-indexed pages are thin content</span>
        <span className="text-[9px] font-black text-teal-400 uppercase">Diagnosed</span>
      </motion.div>
    </div>
  );
}

/** Slide 4 — Portal: fleet command center */
function PortalSlide() {
  const sites = [
    { name: "acme-store.com", engine: true, media: true, status: "Healthy" },
    { name: "blog.network", engine: true, media: false, status: "Healthy" },
    { name: "client-portal.io", engine: true, media: true, status: "Healthy" },
  ];

  return (
    <div className="bg-[#0F1521] flex-1 p-4 sm:p-5 flex flex-col min-h-[200px] h-full">
      <SlideHeader
        icon={LayoutDashboard}
        accent="#F39A09"
        product="Auralogics Portal"
        subtitle="Fleet command center"
        badge="All live"
      />

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { v: "12", l: "Sites", c: "#F39A09" },
          { v: "12", l: "Healthy", c: "#059669" },
          { v: "0", l: "Issues", c: "#1A3FD8" },
        ].map((m, i) => (
          <motion.div
            key={m.l}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="rounded-xl p-2.5 text-center"
            style={{ background: `${m.c}10`, border: `1px solid ${m.c}22` }}
          >
            <p className="font-mono text-[15px] font-black" style={{ color: m.c }}>{m.v}</p>
            <p className="text-[8px] text-white/30 uppercase tracking-wider mt-0.5">{m.l}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex-1 space-y-2">
        {sites.map((site, i) => (
          <motion.div
            key={site.name}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 + i * 0.1 }}
            className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/8 px-3 py-3"
          >
            <div className="h-9 w-9 rounded-lg bg-brand/15 border border-brand/20 flex items-center justify-center flex-shrink-0">
              <Globe className="h-4 w-4 text-brand-soft" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-white/80 truncate">{site.name}</p>
              <div className="flex items-center gap-2 mt-1">
                {site.engine && (
                  <span className="text-[8px] font-bold uppercase tracking-wider text-brand-soft/80 bg-brand/15 px-1.5 py-0.5 rounded">Engine</span>
                )}
                {site.media && (
                  <span className="text-[8px] font-bold uppercase tracking-wider text-violet-300/80 bg-violet-500/15 px-1.5 py-0.5 rounded">Media</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-[9px] font-bold text-emerald-400/90">{site.status}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75 }}
        className="mt-3 rounded-xl bg-brand/15 border border-brand/25 px-4 py-3 flex items-center justify-between"
      >
        <span className="text-[11px] text-white/60 font-medium">Deploy · monitor · scale from one place</span>
        <span className="text-[10px] font-black text-brand-soft uppercase tracking-wider">Connect site</span>
      </motion.div>
    </div>
  );
}

const slideViews: Record<SlideId, React.ReactNode> = {
  engine: <EngineSlide />,
  media: <MediaSlide />,
  insights: <InsightsSlide />,
  portal: <PortalSlide />,
};

function ProductCarousel({ index }: { index: number }) {
  const slide = slides[index];

  return (
    <div
      className="w-full h-full rounded-[16px] overflow-hidden border border-white/12 flex flex-col"
      style={{ boxShadow: "0 40px 100px rgba(2,6,23,0.55), 0 0 0 1px rgba(255,255,255,0.06)" }}
    >
      <BrowserChrome url={slide.chromeUrl} />

      <div className="relative flex-1 min-h-[260px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.045, filter: "blur(14px)", y: 16 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, scale: 0.975, filter: "blur(10px)", y: -12 }}
            transition={slideTransition}
            className="absolute inset-0 flex flex-col"
          >
            {slideViews[slide.id]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function HeroStoryVisual() {
  const { scrollY } = useScroll();
  const mockScale = useTransform(scrollY, [0, 500], [1, 1.04], { clamp: true });
  const mockY = useTransform(scrollY, [0, 500], [0, -20], { clamp: true });
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full min-h-[280px]"
      style={{ perspective: 1200, scale: mockScale, y: mockY }}
    >
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[85%] h-[100px] bg-brand/20 blur-[70px] rounded-full pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={`pill-${slide.id}`}
          initial={{ opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 bg-white rounded-full border border-white/70 shadow-[0_4px_24px_rgba(2,6,23,0.16)] px-3.5 py-1.5 flex items-center gap-2 whitespace-nowrap pointer-events-none"
        >
          <Globe className="h-3.5 w-3.5 text-emerald-500" />
          <span className="text-[10px] sm:text-[11px] font-bold text-obsidian">{slide.pillSite}</span>
          <div className="h-1.5 w-px bg-[#E2E8F0]" />
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-black text-emerald-600">{slide.pillStatus}</span>
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full pt-4">
        <ProductCarousel index={index} />
      </div>

      <AnimatePresence mode="wait">
        <StatBadge
          key={`stat-${slide.id}`}
          value={slide.stat.value}
          label={slide.stat.label}
          sub={slide.stat.sub}
          color={slide.stat.color}
          className="hidden md:block -left-4 lg:-left-10 bottom-14 xl:bottom-20"
        />
      </AnimatePresence>

      {slide.statSecondary && (
        <AnimatePresence mode="wait">
          <StatBadge
            key={`stat2-${slide.id}`}
            value={slide.statSecondary.value}
            label={slide.statSecondary.label}
            color={slide.statSecondary.color}
            className="hidden md:block -right-4 lg:-right-8 top-12 xl:top-16"
          />
        </AnimatePresence>
      )}

      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10 rounded-b-[16px]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(2,6,23,0.55) 80%, rgba(2,6,23,0.85) 100%)",
        }}
      />
    </motion.div>
  );
}
