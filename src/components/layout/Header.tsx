"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Zap,
  ImageIcon,
  Stethoscope,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { siteContainerClass } from "@/lib/site-layout";
import { cn } from "@/app/components/ui/utils";

type MegaLink = {
  name: string;
  description: string;
  href: string;
  badge?: string;
};

type MegaColumn = {
  title: string;
  items: MegaLink[];
};

const navLinks = [
  { label: "Insights", href: "/insights" },
  { label: "Docs", href: "/docs" },
  { label: "Demo", href: "/nexora-engine/demo" },
  { label: "Downloads", href: "/downloads" },
  { label: "Support", href: "/support" },
];

const productColumns: MegaColumn[] = [
  {
    title: "Plugins",
    items: [
      {
        name: "Nexora Engine",
        description: "Static-speed delivery plus Ghost Protocol cloaking.",
        href: "/products/nexora-engine",
      },
      {
        name: "Nexora Pulse",
        description: "SEO operations console with real Google verdicts.",
        href: "/products/nexora-pulse",
      },
      {
        name: "Nexora Media",
        description: "Auto AVIF/WebP. Up to 70% smaller images.",
        href: "/products/nexora-media",
      },
    ],
  },
  {
    title: "More plugins",
    items: [
      {
        name: "Nexora Architect",
        description: "A faster, cleaner visual building experience.",
        href: "/products/nexora-architect",
      },
      {
        name: "Nexora Shield",
        description: "Security hardening built for the Nexora stack.",
        href: "/products/nexora-shield",
      },
    ],
  },
  {
    title: "Manage & explore",
    items: [
      {
        name: "Auralogics Portal",
        description: "One dashboard for your entire WordPress fleet.",
        href: "/portal",
      },
      {
        name: "All products",
        description: "Compare the full Nexora suite in one view.",
        href: "/products",
      },
    ],
  },
];

const companyColumns: MegaColumn[] = [
  {
    title: "Company",
    items: [
      {
        name: "About Us",
        description: "Who we are and why we build the Nexora suite.",
        href: "/about",
      },
      {
        name: "Careers",
        description: "Help us build the next generation of WordPress tooling.",
        href: "/careers",
      },
    ],
  },
  {
    title: "Connect",
    items: [
      {
        name: "Contact",
        description: "Talk to our team about products or partnerships.",
        href: "/contact",
      },
      {
        name: "Insights",
        description: "Engineering notes on WordPress performance and SEO.",
        href: "/insights",
      },
    ],
  },
];

const mobileProducts = [
  { name: "Nexora Engine", tagline: "Static-speed WordPress", href: "/products/nexora-engine", icon: Zap, accent: "#1A3FD8" },
  { name: "Nexora Pulse", tagline: "SEO operations console", href: "/products/nexora-pulse", icon: Stethoscope, accent: "#13716A" },
  { name: "Nexora Media", tagline: "Auto AVIF/WebP images", href: "/products/nexora-media", icon: ImageIcon, accent: "#059669" },
  { name: "Nexora Architect", tagline: "Visual building experience", href: "/products/nexora-architect", icon: LayoutDashboard, accent: "#7C3AED" },
  { name: "Nexora Shield", tagline: "Security hardening", href: "/products/nexora-shield", icon: Zap, accent: "#DC2626" },
  { name: "Auralogics Portal", tagline: "Fleet dashboard", href: "/portal", icon: LayoutDashboard, accent: "#F39A09" },
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

function MegaBadge({ label }: { label: string }) {
  const isFree = label.toLowerCase() === "free";
  return (
    <span
      className={cn(
        "rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
        isFree ? "bg-emerald-500/10 text-emerald-700" : "bg-brand/10 text-brand"
      )}
    >
      {label}
    </span>
  );
}

function MegaLinkItem({ item }: { item: MegaLink }) {
  return (
    <Link
      href={item.href}
      className="group block rounded-lg py-3 pr-2 transition-colors hover:bg-surface-soft/80"
    >
      <div className="flex items-center gap-2">
        <span className="text-[15px] font-semibold text-obsidian group-hover:text-brand transition-colors">
          {item.name}
        </span>
        {item.badge && <MegaBadge label={item.badge} />}
      </div>
      <p className="mt-1 text-[13px] leading-snug text-text-muted font-medium">{item.description}</p>
    </Link>
  );
}

function MegaColumns({ columns }: { columns: MegaColumn[] }) {
  return (
    <div className={cn("grid gap-8", columns.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
      {columns.map((col) => (
        <div key={col.title}>
          <h4 className="mb-1 text-[13px] font-semibold text-text-muted">{col.title}</h4>
          <div className="flex flex-col">
            {col.items.map((item) => (
              <MegaLinkItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MegaMenuSidebar({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="flex flex-col border-border md:border-r md:pr-10 lg:pr-12">
      <span className="text-[12px] font-semibold text-text-muted">{eyebrow}</span>
      <h3 className="mt-2 text-[22px] font-bold tracking-[-0.02em] text-obsidian leading-tight">{title}</h3>
      <p className="mt-3 text-[14px] leading-relaxed text-text-secondary font-medium">{description}</p>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex w-fit items-center justify-center rounded-lg bg-obsidian px-5 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-obsidian/90"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}

function MegaMenuFeatured({
  icon: Icon,
  title,
  description,
  href,
  accent,
}: {
  icon: typeof Zap;
  title: string;
  description: string;
  href: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-xl border border-border bg-surface-soft/40 p-4 transition-all hover:border-border hover:bg-white hover:shadow-[0_8px_30px_rgba(2,6,23,0.06)]"
    >
      <div
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
        style={{ background: `${accent}14`, border: `1px solid ${accent}28` }}
      >
        <Icon className="h-5 w-5" style={{ color: accent }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[15px] font-bold text-obsidian group-hover:text-brand transition-colors">{title}</p>
        <p className="mt-0.5 text-[13px] text-text-muted font-medium leading-snug">{description}</p>
      </div>
      <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-brand" />
    </Link>
  );
}

function MegaMenuPanel({
  open,
  onMouseEnter,
  onMouseLeave,
  children,
}: {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-0 right-0 top-[68px] z-50 pointer-events-auto"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="border-b border-border bg-white shadow-[0_20px_60px_rgba(2,6,23,0.10)]">
            <div className={cn(siteContainerClass, "py-8 lg:py-10")}>{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProductsMegaMenu({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <MegaMenuPanel open={open} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="grid gap-10 lg:grid-cols-[minmax(240px,280px)_1fr] lg:gap-12">
        <MegaMenuSidebar
          eyebrow="Nexora Suite"
          title="Everything for faster WordPress"
          description="Performance delivery, SEO diagnostics, media optimization, and fleet control, drop-in plugins with no rebuild."
          ctaLabel="Get started free"
          ctaHref="/docs/nexora-engine/getting-started"
        />
        <MegaColumns columns={productColumns} />
      </div>
      <div className="mt-8 border-t border-border pt-6">
        <MegaMenuFeatured
          icon={Zap}
          title="Start with Nexora Engine"
          description="Install in minutes. Static-speed delivery with WooCommerce-safe caching and Ghost Protocol security."
          href="/products/nexora-engine"
          accent="#1A3FD8"
        />
      </div>
    </MegaMenuPanel>
  );
}

function CompanyMegaMenu({
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <MegaMenuPanel open={open} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="grid gap-10 lg:grid-cols-[minmax(240px,280px)_1fr] lg:gap-12">
        <MegaMenuSidebar
          eyebrow="Auralogics Labs"
          title="Infrastructure intelligence for WordPress"
          description="We build focused tools that close the gap between how your platform performs today and how it should."
          ctaLabel="Contact us"
          ctaHref="/contact"
        />
        <MegaColumns columns={companyColumns} />
      </div>
    </MegaMenuPanel>
  );
}

function NavTrigger({
  label,
  href,
  open,
  isDark,
  onMouseEnter,
}: {
  label: string;
  href: string;
  open: boolean;
  isDark: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onMouseEnter}>
      <Link
        href={href}
        className={cn(
          "relative flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-[14.5px] font-semibold tracking-[-0.01em] transition-all duration-200",
          isDark ? "text-white/85 hover:text-white hover:bg-white/8" : "text-obsidian/75 hover:text-obsidian hover:bg-surface-soft"
        )}
      >
        {label}
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
          <ChevronDown className="opacity-50" style={{ width: 16, height: 16 }} />
        </motion.div>
      </Link>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
        setCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const pathname = usePathname();
  const hasDarkHero = pathname === "/";
  const menuOpen = productsOpen || companyOpen;
  const showSolidHeader = scrolled || menuOpen;
  const isDark = hasDarkHero && !showSolidHeader;

  const closeMenus = () => {
    setProductsOpen(false);
    setCompanyOpen(false);
  };

  const openProducts = () => {
    setCompanyOpen(false);
    setProductsOpen(true);
  };

  const openCompany = () => {
    setProductsOpen(false);
    setCompanyOpen(true);
  };

  return (
    <>
      <ScrollProgressBar />
      <header ref={headerRef} className="fixed top-0 z-50 w-full pointer-events-none">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: showSolidHeader ? "rgba(255,255,255,0.98)" : "rgba(0,0,0,0)",
            borderColor: showSolidHeader ? "rgba(226,232,240,1)" : "rgba(0,0,0,0)",
            boxShadow: showSolidHeader ? "0 4px 6px rgba(2,6,23,0.04), 0 8px 30px rgba(2,6,23,0.07)" : "none",
          }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 border-b backdrop-blur-2xl"
        />

        <div className={cn(siteContainerClass, "relative pointer-events-auto")}>
          <div className="flex h-[76px] items-center justify-between gap-4">
            <Link href="/" className="flex flex-shrink-0 items-center gap-2.5 group">
              <motion.img
                src="/auralogicslabs.svg"
                alt="Auralogics Labs"
                className={cn("h-10 w-auto transition-all duration-300", isDark && "brightness-0 invert")}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-0.5">
              <NavTrigger
                label="Products"
                href="/products"
                open={productsOpen}
                isDark={isDark}
                onMouseEnter={openProducts}
              />
              <NavTrigger
                label="Company"
                href="/about"
                open={companyOpen}
                isDark={isDark}
                onMouseEnter={openCompany}
              />

              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={closeMenus}
                  className={cn(
                    "px-3.5 py-2.5 rounded-full text-[14.5px] font-semibold tracking-[-0.01em] transition-all duration-200",
                    isDark ? "text-white/85 hover:text-white hover:bg-white/8" : "text-obsidian/75 hover:text-obsidian hover:bg-surface-soft"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <Link
                href="/portal"
                onMouseEnter={closeMenus}
                className={cn(
                  "px-4 py-2.5 rounded-full text-[14px] font-semibold tracking-[-0.01em] transition-all duration-200",
                  isDark ? "text-white/60 hover:text-white hover:bg-white/8" : "text-obsidian/60 hover:text-obsidian hover:bg-surface-soft"
                )}
              >
                Sign In
              </Link>
              <Link
                href="/docs/nexora-engine/getting-started"
                onMouseEnter={closeMenus}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[14px] font-bold tracking-[-0.01em] text-white transition-all duration-200"
                style={{ background: "#1A3FD8", boxShadow: "0 6px 18px rgba(26,63,216,0.4)" }}
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "#1535B8" }} />
              </Link>
            </div>

            <button
              className={cn(
                "md:hidden p-2 rounded-[10px] transition-all duration-200",
                isDark ? "text-white hover:bg-white/10" : "text-obsidian hover:bg-surface-soft"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_24px_60px_rgba(2,6,23,0.14)] md:mb-3"
              >
                <nav className="flex flex-col gap-0.5 p-3">
                  <MobileAccordion label="Products" open={mobileProductsOpen} onToggle={() => setMobileProductsOpen((v) => !v)}>
                    {mobileProducts.map((p) => {
                      const Icon = p.icon;
                      return (
                        <Link
                          key={p.name}
                          href={p.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 transition-colors hover:bg-surface-soft"
                        >
                          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[10px]" style={{ background: `${p.accent}12`, border: `1px solid ${p.accent}20` }}>
                            <Icon className="h-3.5 w-3.5" style={{ color: p.accent }} />
                          </div>
                          <div>
                            <div className="text-[14px] font-bold text-obsidian">{p.name}</div>
                            <div className="text-[11px] font-medium text-text-muted">{p.tagline}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </MobileAccordion>

                  <MobileAccordion label="Company" open={mobileCompanyOpen} onToggle={() => setMobileCompanyOpen((v) => !v)}>
                    {[...companyColumns.flatMap((c) => c.items)].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-[10px] px-3 py-2.5 transition-colors hover:bg-surface-soft"
                      >
                        <div className="text-[14px] font-bold text-obsidian">{item.name}</div>
                        <div className="text-[11px] font-medium text-text-muted">{item.description}</div>
                      </Link>
                    ))}
                  </MobileAccordion>

                  {navLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-[12px] px-4 py-3 text-[15px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="mt-1 flex flex-col gap-2 border-t border-border p-2 pt-3">
                    <Link href="/portal" onClick={() => setMobileOpen(false)} className="w-full rounded-[12px] border border-border py-3 text-center text-[15px] font-bold text-obsidian transition-colors hover:bg-surface-soft">
                      Sign In
                    </Link>
                    <Link
                      href="/docs/nexora-engine/getting-started"
                      onClick={() => setMobileOpen(false)}
                      className="group flex w-full items-center justify-center gap-2 rounded-[12px] py-3 text-center text-[15px] font-black text-white transition-colors duration-300"
                      style={{ background: "#1A3FD8", boxShadow: "0 4px 16px rgba(26,63,216,0.4)" }}
                    >
                      Get Started Free
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <ProductsMegaMenu
          open={productsOpen}
          onMouseEnter={openProducts}
          onMouseLeave={() => setProductsOpen(false)}
        />
        <CompanyMegaMenu
          open={companyOpen}
          onMouseEnter={openCompany}
          onMouseLeave={() => setCompanyOpen(false)}
        />
      </header>
    </>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      <button
        type="button"
        className="flex items-center justify-between rounded-[12px] px-4 py-3 text-[15px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
        onClick={onToggle}
      >
        {label}
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-4 w-4 text-text-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mb-1 ml-2 flex flex-col gap-0.5 border-l-2 border-border pl-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
