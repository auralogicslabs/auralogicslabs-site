"use client";

import { motion } from "motion/react";
import { Zap, ImageIcon, Stethoscope, LayoutDashboard, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

type Product = {
  name: string;
  tagline: string;
  headline: string;
  description: string;
  points: string[];
  accent: string;
  href: string;
  cta: string;
  status: "Live" | "Free" | "Soon";
  icon: typeof Zap;
  featured?: boolean;
};

const products: Product[] = [
  {
    name: "Nexora Engine",
    tagline: "Adaptive runtime delivery",
    headline: "Static-speed WordPress, without the rebuild.",
    description:
      "Pre-renders every page into flat HTML served before PHP boots. Keep Elementor, WooCommerce, and your whole plugin stack — gain ~22ms TTFB and 100% static delivery on cache hits.",
    points: [
      "22ms TTFB vs 800ms+ traditional",
      "Zero PHP execution on cache hit",
      "Works on Apache, Nginx, LiteSpeed, IIS",
    ],
    accent: "#1A3FD8",
    href: "/products/nexora-engine",
    cta: "Explore Nexora Engine",
    status: "Live",
    icon: Zap,
    featured: true,
  },
  {
    name: "Nexora Pulse",
    tagline: "SEO operations console",
    headline: "Diagnose why Google won't rank you.",
    description:
      "One free SEO console for WordPress. The Index Doctor reads real Search Console verdicts to explain why pages aren't indexed, alongside on-page analysis, internal links, and Core Web Vitals.",
    points: [
      "Index Doctor — real GSC verdicts",
      "Internal link graph & orphan detection",
      "Core Web Vitals from PageSpeed",
    ],
    accent: "#13716A",
    href: "/products/nexora-pulse",
    cta: "Explore Nexora Pulse",
    status: "Free",
    icon: Stethoscope,
    featured: true,
  },
  {
    name: "Nexora Media",
    tagline: "Edge media optimization",
    headline: "Faster images, automatically.",
    description:
      "Background AVIF/WebP conversion and adaptive responsive sizing that cuts image payload by up to 70% — without touching your media library or changing how editors work.",
    points: [
      "AVIF / WebP auto-conversion",
      "Responsive sizing on demand",
      "Up to 70% smaller image payload",
    ],
    accent: "#7C3AED",
    href: "/products/nexora-media",
    cta: "Explore Nexora Media",
    status: "Live",
    icon: ImageIcon,
  },
  {
    name: "Auralogics Portal",
    tagline: "Fleet command center",
    headline: "Manage every site in one place.",
    description:
      "One control plane for your entire WordPress fleet — licenses, deployments, runtime configuration, and team access, with audit logs and one-click rollback.",
    points: [
      "Unified dashboard for every site",
      "Team roles & audit log",
      "One-click rollback",
    ],
    accent: "#F39A09",
    href: "/portal",
    cta: "Open the Portal",
    status: "Live",
    icon: LayoutDashboard,
  },
];

function StatusBadge({ status, accent }: { status: Product["status"]; accent: string }) {
  if (status === "Free") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ background: "rgba(22,163,74,0.1)", color: "#16A34A" }}>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Free
      </span>
    );
  }
  if (status === "Soon") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600">
        Coming soon
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ background: `${accent}12`, color: accent }}>
      <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: accent }} /> Live
    </span>
  );
}

function ProductCard({ p, index }: { p: Product; index: number }) {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative bg-white border border-border rounded-[32px] p-8 lg:p-10 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_40px_90px_rgba(2,6,23,0.10)] transition-all duration-400 ${p.featured ? "lg:col-span-1" : "lg:col-span-1"}`}
    >
      {/* Accent glow */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `${p.accent}22` }}
      />
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-80" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-7">
          <div
            className="h-14 w-14 rounded-2xl flex items-center justify-center transition-transform duration-400 group-hover:scale-110"
            style={{ background: `${p.accent}12`, border: `1.5px solid ${p.accent}26` }}
          >
            <Icon className="h-7 w-7" style={{ color: p.accent }} strokeWidth={2} />
          </div>
          <StatusBadge status={p.status} accent={p.accent} />
        </div>

        <div className="mb-1.5">
          <span className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: p.accent }}>{p.tagline}</span>
        </div>
        <h3 className="text-[24px] lg:text-[27px] font-extrabold text-obsidian tracking-[-0.03em] leading-[1.1] mb-3">{p.name}</h3>
        <p className="text-[15px] text-text-secondary font-medium leading-[1.65] mb-6">{p.description}</p>

        <div className="space-y-2.5 mb-8">
          {p.points.map((pt) => (
            <div key={pt} className="flex items-start gap-2.5">
              <span className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${p.accent}14`, border: `1px solid ${p.accent}2a` }}>
                <Check className="h-3 w-3" style={{ color: p.accent }} strokeWidth={3} />
              </span>
              <span className="text-[14px] font-semibold text-obsidian/80 leading-snug">{pt}</span>
            </div>
          ))}
        </div>

        <Link
          href={p.href}
          className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-[14px] font-bold text-white transition-all duration-300 group/btn"
          style={{ background: p.accent }}
        >
          {p.cta}
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ProductsIndex() {
  return (
    <section className="bg-surface-soft py-24 px-8 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="w-full max-w-[1280px] mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.name} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
