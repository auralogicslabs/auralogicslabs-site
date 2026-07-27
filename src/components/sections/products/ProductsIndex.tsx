"use client";
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';

import { motion } from "motion/react";
import { LayoutDashboard, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { getAllProducts } from "@/data/products";
import type { Product, ProductStatus } from "@/types/product";

// Registry-driven: every visible product appears automatically. Add one to the
// registry (or flip its `hidden` flag) and it shows up here, no edits needed.
const products = getAllProducts();

function badgeFor(p: Product): { label: string; className: string; dot: boolean } {
  if (p.status === "coming-soon") return { label: "Coming soon", className: "bg-amber-500/10 text-amber-600", dot: false };
  if (p.status === "beta") return { label: "Beta", className: "bg-violet-500/10 text-violet-600", dot: true };
  if ((p.pricingModel ?? "free") === "free") return { label: "Free", className: "bg-emerald-500/10 text-emerald-600", dot: true };
  return { label: "Live", className: "bg-blue-500/10 text-blue-600", dot: true };
}

function StatusBadge({ p }: { p: Product }) {
  const b = badgeFor(p);
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${b.className}`}>
      {b.dot && <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />}
      {b.label}
    </span>
  );
}

function ProductCard({ p, index }: { p: Product; index: number }) {
  const Icon = p.icon;
  const points = (p.keyBenefits ?? []).slice(0, 3).map((b) => b.title);
  const ctaText = p.status === "coming-soon" ? "Learn more" : `Explore ${p.name}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white border border-border rounded-[32px] p-8 lg:p-10 overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_40px_90px_rgba(2,6,23,0.10)] transition-all duration-400"
    >
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `${p.accent}22` }} />
      <div className="absolute top-0 left-0 right-0 h-1 opacity-80" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-7">
          <div className="h-14 w-14 rounded-2xl flex items-center justify-center transition-transform duration-400 group-hover:scale-110" style={{ background: `${p.accent}12`, border: `1.5px solid ${p.accent}26` }}>
            <Icon className="h-7 w-7" style={{ color: p.accent }} strokeWidth={2} />
          </div>
          <StatusBadge p={p} />
        </div>

        {p.category && (
          <div className="mb-1.5">
            <span className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: p.accent }}>{p.category}</span>
          </div>
        )}
        <h3 className="text-[24px] lg:text-[27px] font-extrabold text-obsidian tracking-[-0.03em] leading-[1.1] mb-3">{p.name}</h3>
        <p className="text-[15px] text-text-secondary font-medium leading-[1.65] mb-6">{p.description}</p>

        <div className="space-y-2.5 mb-8">
          {points.map((pt) => (
            <div key={pt} className="flex items-start gap-2.5">
              <span className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${p.accent}14`, border: `1px solid ${p.accent}2a` }}>
                <Check className="h-3 w-3" style={{ color: p.accent }} strokeWidth={3} />
              </span>
              <span className="text-[14px] font-semibold text-obsidian/80 leading-snug">{pt}</span>
            </div>
          ))}
        </div>

        <Link href={`/products/${p.slug}`} className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-[14px] font-bold text-white transition-all duration-300 group/btn" style={{ background: p.accent }}>
          {ctaText}
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ProductsIndex() {
  return (
    <section className="bg-surface-soft py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className={cn(siteContainerClass, "relative z-10")}>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.slug} p={p} index={i} />
          ))}
        </div>

        {/* Portal, the cloud/management layer, shown distinctly from the plugins. */}
        <div className="mt-6 rounded-[32px] border border-border bg-white p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 opacity-80" style={{ background: "linear-gradient(90deg, #F39A09, transparent)" }} />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 flex-shrink-0 rounded-2xl flex items-center justify-center" style={{ background: "#F39A0912", border: "1.5px solid #F39A0926" }}>
                <LayoutDashboard className="h-7 w-7" style={{ color: "#F39A09" }} strokeWidth={2} />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: "#F39A09" }}>The cloud layer</span>
                <h3 className="mt-1 text-[24px] font-extrabold text-obsidian tracking-[-0.03em]">Auralogics Portal</h3>
                <p className="mt-2 max-w-xl text-[15px] text-text-secondary font-medium leading-[1.65]">
                  One control plane for your whole fleet, licenses, deployments and runtime config across every
                  site running the Nexora suite. Not a plugin: the management layer that ties them together.
                </p>
              </div>
            </div>
            <Link href="/portal" className="inline-flex flex-shrink-0 items-center gap-2 rounded-2xl px-6 py-3 text-[14px] font-bold text-white transition-all duration-300 group/btn" style={{ background: "#F39A09" }}>
              Open the Portal
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
