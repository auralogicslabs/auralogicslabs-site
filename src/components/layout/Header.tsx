"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { Menu, X, ArrowRight, ChevronDown, Zap, ImageIcon, Stethoscope, LayoutDashboard, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    name: "Nexora Engine",
    tagline: "22ms WordPress. No rebuild, no headless.",
    href: "/products/nexora-engine",
    icon: Zap,
    status: "Live",
    statusColor: "text-emerald-400",
    accent: "#1A3FD8",
  },
  {
    name: "Nexora Media",
    tagline: "Auto AVIF/WebP. Up to 70% smaller images.",
    href: "/products/nexora-media",
    icon: ImageIcon,
    status: "Live",
    statusColor: "text-emerald-400",
    accent: "#059669",
  },
  {
    name: "Nexora Pulse",
    tagline: "Free SEO console with real Google verdicts.",
    href: "/products/nexora-pulse",
    icon: Stethoscope,
    status: "Live",
    statusColor: "text-emerald-400",
    accent: "#13716A",
  },
  {
    name: "Auralogics Portal",
    tagline: "One dashboard for your entire WP fleet",
    href: "/portal",
    icon: LayoutDashboard,
    status: "Live",
    statusColor: "text-emerald-400",
    accent: "#7C3AED",
  },
];

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[60] pointer-events-none">
      <div className="h-full bg-brand transition-all duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}

function ProductsDropdown({ open, dark }: { open: boolean; dark: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] z-50"
        >
          {/* Arrow tip */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-border z-10" />

          <div className="relative bg-white rounded-[24px] border border-border shadow-[0_32px_80px_rgba(2,6,23,0.16),0_8px_24px_rgba(2,6,23,0.08)] overflow-hidden">
            {/* Header strip */}
            <div className="px-6 pt-5 pb-3 border-b border-border/60">
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-text-muted">Product Suite</span>
            </div>

            {/* Product rows */}
            <div className="p-3">
              {products.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.18, delay: i * 0.04 }}
                  >
                    <Link
                      href={p.href}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-[14px] hover:bg-surface-soft transition-all duration-200 group"
                    >
                      <div
                        className="h-10 w-10 rounded-[12px] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `${p.accent}12`,
                          border: `1.5px solid ${p.accent}25`,
                        }}
                      >
                        <Icon className="h-4 w-4" style={{ color: p.accent }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[14px] font-bold text-obsidian tracking-tight">{p.name}</span>
                        </div>
                        <span className="text-[12px] text-text-muted font-medium">{p.tagline}</span>
                      </div>
                      <div className="flex-shrink-0">
                        <ArrowUpRight
                          className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: p.accent }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer strip */}
            <div className="px-6 py-3 bg-surface-soft/60 border-t border-border/60 flex items-center justify-between">
              <span className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em]">
                Auralogics Labs
              </span>
              <Link
                href="/products"
                className="text-[11px] font-bold text-brand hover:text-obsidian transition-colors flex items-center gap-1 group"
              >
                All products
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node))
        setProductsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const pathname = usePathname();
  const hasDarkHero = pathname === "/";
  const isDark = hasDarkHero && !scrolled;

  return (
    <>
      <ScrollProgressBar />
      <header className="fixed top-0 z-50 w-full pointer-events-none">
        {/* Full-width background bar. appears on scroll, spans edge to edge */}
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(0,0,0,0)",
            borderColor: scrolled ? "rgba(226,232,240,1)" : "rgba(0,0,0,0)",
            boxShadow: scrolled
              ? "0 4px 6px rgba(2,6,23,0.04), 0 8px 30px rgba(2,6,23,0.07)"
              : "none",
          }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 border-b backdrop-blur-2xl"
        />

        {/* Content. stays aligned to the body container */}
        <div className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pointer-events-auto">
          <div className="flex h-[76px] items-center justify-between">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <motion.img
                src="/auralogicslabs.svg"
                alt="Auralogics Labs"
                className={`h-10 w-auto transition-all duration-300 ${isDark ? "brightness-0 invert" : ""}`}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              />
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex items-center gap-1">
              {/* Products dropdown trigger */}
              <div
                ref={productsRef}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href="/products"
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-[15px] font-semibold tracking-[-0.01em] transition-all duration-200 ${
                    isDark
                      ? "text-white/85 hover:text-white hover:bg-white/8"
                      : "text-obsidian/75 hover:text-obsidian hover:bg-surface-soft"
                  }`}
                >
                  Products
                  <motion.div
                    animate={{ rotate: productsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-4.5 w-4.5 opacity-50" style={{ width: 18, height: 18 }} />
                  </motion.div>
                </Link>
                <ProductsDropdown open={productsOpen} dark={isDark} />
              </div>

              {[
                { label: "Insights", href: "/insights" },
                { label: "Docs", href: "/nexora-engine/docs" },
                { label: "Demo", href: "/nexora-engine/demo" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-full text-[15px] font-semibold tracking-[-0.01em] transition-all duration-200 ${
                    isDark
                      ? "text-white/85 hover:text-white hover:bg-white/8"
                      : "text-obsidian/75 hover:text-obsidian hover:bg-surface-soft"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* ── CTAs ── */}
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/portal"
                className={`px-4 py-2.5 rounded-full text-[14.5px] font-semibold tracking-[-0.01em] transition-all duration-200 ${
                  isDark
                    ? "text-white/60 hover:text-white hover:bg-white/8"
                    : "text-obsidian/60 hover:text-obsidian hover:bg-surface-soft"
                }`}
              >
                Sign In
              </Link>

              <Link
                href="/nexora-engine/docs/getting-started"
                className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full text-[14.5px] font-bold tracking-[-0.01em] text-white transition-all duration-200 overflow-hidden"
                style={{
                  background: "#1A3FD8",
                  boxShadow: "0 6px 18px rgba(26,63,216,0.4)",
                }}
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-0.5 transition-transform duration-200" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "#1535B8" }}
                />
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className={`md:hidden p-2 rounded-[10px] transition-all duration-200 ${
                isDark
                  ? "text-white hover:bg-white/10"
                  : "text-obsidian hover:bg-surface-soft"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* ── Mobile drawer ── */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 rounded-[20px] bg-white border border-border shadow-[0_24px_60px_rgba(2,6,23,0.14)] overflow-hidden"
              >
                <nav className="flex flex-col gap-0.5 p-3">
                  {/* Products accordion */}
                  <button
                    className="flex items-center justify-between text-[15px] font-bold text-obsidian px-4 py-3 rounded-[12px] hover:bg-surface-soft transition-colors"
                    onClick={() => setMobileProductsOpen((v) => !v)}
                  >
                    Products
                    <motion.div
                      animate={{ rotate: mobileProductsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4 text-text-muted" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="ml-2 pl-4 border-l-2 border-border mb-1 flex flex-col gap-0.5">
                          {products.map((p) => {
                            const Icon = p.icon;
                            return (
                              <Link
                                key={p.name}
                                href={p.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] hover:bg-surface-soft transition-colors group"
                              >
                                <div
                                  className="h-8 w-8 rounded-[10px] flex items-center justify-center flex-shrink-0"
                                  style={{ background: `${p.accent}12`, border: `1px solid ${p.accent}20` }}
                                >
                                  <Icon className="h-3.5 w-3.5" style={{ color: p.accent }} />
                                </div>
                                <div>
                                  <div className="text-[14px] font-bold text-obsidian">{p.name}</div>
                                  <div className="text-[11px] text-text-muted font-medium">{p.tagline}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {[
                    { label: "Insights", href: "/insights" },
                    { label: "Docs", href: "/nexora-engine/docs" },
                    { label: "Demo", href: "/nexora-engine/demo" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[15px] font-bold text-obsidian px-4 py-3 rounded-[12px] hover:bg-surface-soft transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="p-2 pt-3 mt-1 border-t border-border flex flex-col gap-2">
                    <Link
                      href="/portal"
                      onClick={() => setMobileOpen(false)}
                      className="w-full rounded-[12px] border border-border py-3 text-center text-[15px] font-bold text-obsidian hover:bg-surface-soft transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/nexora-engine/docs/getting-started"
                      onClick={() => setMobileOpen(false)}
                      className="w-full rounded-[12px] py-3 text-center text-[15px] font-black text-white flex items-center justify-center gap-2 group transition-colors duration-300"
                      style={{ background: "#1A3FD8", boxShadow: "0 4px 16px rgba(26,63,216,0.4)" }}
                    >
                      Get Started Free
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
