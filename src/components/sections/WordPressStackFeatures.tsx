"use client";

import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";
import { Zap, ImageIcon, BarChart3, LayoutDashboard, ArrowRight, Check } from "lucide-react";


type Product = {
  id: number;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  points: string[];
  accent: string;
  accentSoft: string;
  href: string;
  status: "Live" | "Soon";
  icon: typeof Zap;
};

const products: Product[] = [
  {
    id: 1,
    name: "Nexora Engine",
    tagline: "Adaptive runtime delivery",
    headline: "Static-speed WordPress without the rebuild.",
    description:
      "Serve pages from a static edge cache while WordPress, Elementor and Gutenberg keep working exactly as before.",
    points: [
      "22ms TTFB vs 800ms+ traditional",
      "Static HTML cache on every request",
      "Zero PHP overhead on hot paths",
      "Automatic cache invalidation",
    ],
    accent: "#1A3FD8",
    accentSoft: "#60A5FA",
    href: "/products/nexora-engine",
    status: "Live",
    icon: Zap,
  },
  {
    id: 2,
    name: "Nexora Media",
    tagline: "Edge media optimization",
    headline: "Faster images, globally.",
    description:
      "Transform, optimize and deliver every asset from the closest POP — without touching your media library.",
    points: [
      "AVIF / WebP auto-conversion",
      "Responsive sizing on demand",
      "Global CDN with smart routing",
      "Lazy-load & LQIP built in",
    ],
    accent: "#7C3AED",
    accentSoft: "#A78BFA",
    href: "/products/nexora-media",
    status: "Live",
    icon: ImageIcon,
  },
  {
    id: 3,
    name: "Insights Hub",
    tagline: "Performance intelligence",
    headline: "Monitor what matters.",
    description:
      "Real-time visibility into TTFB, cache hit rate, Core Web Vitals and user experience — across every site you run.",
    points: [
      "Live TTFB & cache analytics",
      "Core Web Vitals tracking",
      "Per-route performance scoring",
      "Custom alerts & notifications",
    ],
    accent: "#0D9488",
    accentSoft: "#5EEAD4",
    href: "/products/nexora-insights",
    status: "Soon",
    icon: BarChart3,
  },
  {
    id: 4,
    name: "Auralogics Portal",
    tagline: "Fleet command center",
    headline: "Manage every site in one place.",
    description:
      "One control plane for your entire WordPress fleet — licenses, deployments, runtime config and team access.",
    points: [
      "Unified dashboard for every site",
      "Per-site runtime configuration",
      "Team roles & audit log",
      "One-click rollback",
    ],
    accent: "#F39A09",
    accentSoft: "#FBBF24",
    href: "/portal",
    status: "Live",
    icon: LayoutDashboard,
  },
];

export function WordPressStackFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(Math.floor(latest * products.length), products.length - 1);
    if (idx !== activeIndex) setActiveIndex(idx);
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scrollToProduct = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const start = el.getBoundingClientRect().top + window.scrollY;
    const range = el.offsetHeight - window.innerHeight;
    const target = start + (range * index) / products.length + 8;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-white rounded-t-[2.5rem]"
      style={{ borderBottomLeftRadius: "50% 80px", borderBottomRightRadius: "50% 80px", overflow: "clip" }}
    >
        {/* Background atmosphere */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-brand/5 blur-[200px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-500/4 blur-[200px] rounded-full" />
        </div>

        {/* ── DESKTOP: sticky scroll ── */}
        <div
          ref={containerRef}
          className="relative hidden md:block"
          style={{ height: `${products.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen overflow-hidden">
            {/* animated bg tint */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[200px] opacity-60"
                animate={{ backgroundColor: `${products[activeIndex].accent}0E` }}
                transition={{ duration: 0.9 }}
              />
            </div>

            <div className="relative z-10 h-full">
              <div className="h-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 flex">
              {/* ── Left vertical nav ── */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center pr-6 lg:pr-8 py-20 w-8 lg:w-10">
                <div className="relative flex flex-col items-center justify-between h-[280px] lg:h-[340px]">
                  {/* Track */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
                  {/* Fill */}
                  <motion.div
                    className="absolute left-1/2 top-0 w-[2px] -translate-x-1/2 origin-top rounded-full"
                    style={{
                      height: progressHeight,
                      background: `linear-gradient(to bottom, ${products[0].accent}, ${products[activeIndex].accent})`,
                    }}
                  />
                  {/* Dots */}
                  {products.map((p, i) => (
                    <button
                      key={p.id}
                      onClick={() => scrollToProduct(i)}
                      className="relative z-10 group flex items-center"
                      aria-label={`Go to ${p.name}`}
                    >
                      <motion.div
                        className="w-3.5 h-3.5 rounded-full border-2 transition-colors duration-400"
                        animate={{
                          borderColor: activeIndex >= i ? p.accent : "#CBD5E1",
                          backgroundColor:
                            activeIndex === i
                              ? p.accent
                              : activeIndex > i
                              ? `${p.accent}55`
                              : "#fff",
                          scale: activeIndex === i ? 1.35 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Side label */}
                      <div
                        className={`absolute left-5 flex items-center gap-1.5 transition-all duration-300 pointer-events-none
                          ${
                            activeIndex === i
                              ? "opacity-100 translate-x-0"
                              : "opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0"
                          }`}
                      >
                        <span
                          className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap"
                          style={{ color: p.accent }}
                        >
                          {p.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Right: header + 2-col scene ── */}
              <div className="flex-1 min-w-0 grid grid-rows-[auto_1fr] py-16 gap-8 lg:gap-10">
                {/* Header */}
                <header className="max-w-2xl">
                  <div className="inline-flex items-center gap-2.5 mb-4 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand">
                      The Platform
                    </span>
                  </div>
                  <h2 className="text-[36px] lg:text-[52px] font-extrabold text-slate-900 leading-[1.05] tracking-[-0.03em] mb-3">
                    Everything your{" "}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #1A3FD8 0%, #7C3AED 60%, #A78BFA 100%)",
                      }}
                    >
                      WordPress stack
                    </span>{" "}
                    needs
                  </h2>
                  <p className="text-[15px] lg:text-[16px] text-slate-500 font-medium leading-relaxed max-w-lg">
                    Four products, one ecosystem — runtime, media, intelligence and control, designed to work together.
                  </p>
                </header>

                {/* 2-col scene */}
                <div className="grid grid-cols-2 gap-10 lg:gap-16 items-center min-h-0">
                  {/* Visual */}
                  <div className="relative h-full max-h-[440px]">
                    {products.map((p, i) => (
                      <ProductVisual key={p.id} product={p} isActive={activeIndex === i} />
                    ))}
                  </div>
                  {/* Detail */}
                  <div className="relative h-full max-h-[440px]">
                    {products.map((p, i) => (
                      <ProductDetail
                        key={p.id}
                        product={p}
                        isActive={activeIndex === i}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Right edge: scroll indicator ── */}
              <div className="hidden xl:flex flex-col justify-end pb-20 flex-shrink-0 w-28">
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Scroll to explore
                  </span>
                  <div className="h-12 w-px bg-slate-200 relative overflow-hidden">
                    <motion.div
                      style={{ height: progressHeight }}
                      className="absolute top-0 w-full origin-top rounded-full bg-gradient-to-b from-brand via-purple-500 to-orange-400"
                    />
                  </div>
                </div>
              </div>
            </div> {/* closes max-w-[1600px] flex container */}
            </div> {/* closes relative z-10 wrapper */}
          </div>
        </div>

        {/* ── MOBILE: stacked ── */}
        <div className="md:hidden py-20 px-6">
          <header className="max-w-xl mb-12">
            <div className="inline-flex items-center gap-2.5 mb-4 px-3.5 py-1.5 rounded-full bg-brand/10 border border-brand/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-brand">
                The Platform
              </span>
            </div>
            <h2 className="text-[32px] font-extrabold text-slate-900 leading-[1.05] tracking-[-0.03em] mb-3">
              Everything your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #1A3FD8 0%, #7C3AED 60%, #A78BFA 100%)",
                }}
              >
                WordPress stack
              </span>{" "}
              needs
            </h2>
            <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
              Four products, one ecosystem — runtime, media, intelligence and control.
            </p>
          </header>
          <div className="space-y-5">
            {products.map((p, i) => (
              <MobileProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
    </section>
  );
}

/* ─── Sub-components ─── */

function ProductVisual({ product, isActive }: { product: Product; isActive: boolean }) {
  const Icon = product.icon;
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={false}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.93, y: isActive ? 0 : 18 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"
        style={{
          background: `linear-gradient(160deg, ${product.accent}1A 0%, ${product.accentSoft}0E 50%, #fafafa 100%)`,
          border: `1px solid ${product.accent}22`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `linear-gradient(${product.accent}12 1px, transparent 1px), linear-gradient(90deg, ${product.accent}12 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        {/* Icon header */}
        <div className="absolute top-7 left-7 flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
            style={{ background: `linear-gradient(135deg, ${product.accent}, ${product.accentSoft})` }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {product.tagline}
            </p>
            <p className="text-[13px] font-bold text-slate-800 leading-none mt-0.5">
              {product.name}
            </p>
          </div>
        </div>
        {/* Status */}
        <div className="absolute top-7 right-7">
          <span
            className="px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider"
            style={{
              backgroundColor: product.status === "Live" ? `${product.accent}18` : "#F1F5F9",
              color: product.status === "Live" ? product.accent : "#94A3B8",
              border: `1px solid ${product.status === "Live" ? product.accent + "2A" : "#E2E8F0"}`,
            }}
          >
            {product.status}
          </span>
        </div>
        {/* Animated bars */}
        <div className="absolute inset-x-7 bottom-10 space-y-3">
          {[82, 60, 94, 45].map((w, idx) => (
            <motion.div
              key={idx}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              transition={{ duration: 0.55, delay: isActive ? 0.12 + idx * 0.07 : 0, ease: [0.16, 1, 0.3, 1] }}
              className="origin-left h-2.5 rounded-full"
              style={{
                width: `${w}%`,
                background: `linear-gradient(90deg, ${product.accent}60, ${product.accentSoft}28)`,
              }}
            />
          ))}
        </div>
        {/* Floating orb */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-8 -right-8 w-36 h-36 rounded-full blur-3xl opacity-40"
          style={{ background: product.accent }}
        />
      </div>
    </motion.div>
  );
}

function ProductDetail({
  product,
  isActive,
  index,
}: {
  product: Product;
  isActive: boolean;
  index: number;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 22,
        pointerEvents: isActive ? "auto" : "none",
      }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black mb-4 w-fit uppercase tracking-wider"
        style={{
          backgroundColor: `${product.accent}12`,
          color: product.accent,
          border: `1px solid ${product.accent}2A`,
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: product.accent }} />
        {`${String(index + 1).padStart(2, "0")} · ${product.tagline}`}
      </div>

      <h3 className="text-[28px] lg:text-[36px] font-bold text-slate-900 leading-[1.1] tracking-[-0.02em] mb-3">
        {product.headline}
      </h3>
      <p className="text-[15px] lg:text-[16px] text-slate-500 leading-relaxed mb-6 max-w-md">
        {product.description}
      </p>

      <ul className="space-y-2.5 mb-7">
        {product.points.map((point, i) => (
          <motion.li
            key={i}
            initial={false}
            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
            transition={{ duration: 0.3, delay: isActive ? 0.08 + i * 0.05 : 0 }}
            className="flex items-start gap-3"
          >
            <span
              className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${product.accent}18` }}
            >
              <Check className="w-3 h-3" strokeWidth={3} style={{ color: product.accent }} />
            </span>
            <span className="text-[14px] text-slate-700 font-medium">{point}</span>
          </motion.li>
        ))}
      </ul>

      <Link
        href={product.href}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:gap-3 w-fit text-white"
        style={{
          backgroundColor: product.accent,
          boxShadow: `0 8px 24px -8px ${product.accent}88`,
        }}
      >
        Explore {product.name}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}

function MobileProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl p-5 border"
      style={{
        background: `linear-gradient(160deg, ${product.accent}0E 0%, #ffffff 80%)`,
        borderColor: `${product.accent}28`,
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
          style={{ background: `linear-gradient(135deg, ${product.accent}, ${product.accentSoft})` }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">
            Product {String(index + 1).padStart(2, "0")}
          </p>
          <p className="text-[16px] font-bold text-slate-900 leading-none mt-0.5">{product.name}</p>
        </div>
      </div>
      <h3 className="text-[18px] font-bold text-slate-900 mb-2 leading-tight">{product.headline}</h3>
      <p className="text-[13px] text-slate-500 mb-4 leading-relaxed">{product.description}</p>
      <ul className="space-y-2 mb-5">
        {product.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2">
            <span
              className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${product.accent}18` }}
            >
              <Check className="w-2.5 h-2.5" strokeWidth={3} style={{ color: product.accent }} />
            </span>
            <span className="text-[12px] text-slate-600">{point}</span>
          </li>
        ))}
      </ul>
      <Link
        href={product.href}
        className="inline-flex items-center gap-1.5 text-[13px] font-bold"
        style={{ color: product.accent }}
      >
        Explore {product.name} <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </motion.div>
  );
}
