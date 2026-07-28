"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Play, Check, Clock } from "lucide-react";
import { getAllProducts } from "@/data/products";
import type { Product } from "@/types/product";
import { siteContainerClass } from "@/lib/site-layout";
import { cn } from "@/app/components/ui/utils";
import { ScreenshotFrame } from "@/components/marketing/ScreenshotFrame";

// Registry-driven: any product with links.demo appears as a live demo card.
const all = getAllProducts();
const liveDemos = all.filter((p) => p.links?.demo);
const upcoming = all.filter((p) => !p.links?.demo);

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function DemoCard({ p, index }: { p: Product; index: number }) {
  const Icon = p.icon;
  const flip = index % 2 === 1;
  const points = (p.keyBenefits ?? []).slice(0, 3).map((b) => b.title);
  return (
    <motion.div
      {...reveal}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* Copy */}
      <div className={cn(flip && "lg:order-2")}>
        <div className="flex items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{ background: `${p.accent}14`, border: `1.5px solid ${p.accent}2e` }}
          >
            <Icon className="h-6 w-6" style={{ color: p.accent }} />
          </span>
          <div>
            <span className="block text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: p.accent }}>
              {p.category} · Live demo
            </span>
            <span className="text-[13px] font-bold text-text-muted">Interactive tour</span>
          </div>
        </div>

        <h3 className="mt-5 text-[28px] font-black tracking-tight text-obsidian sm:text-[34px]">{p.name}</h3>
        <p className="mt-3 text-[17px] leading-relaxed text-text-secondary">{p.tagline}</p>

        <ul className="mt-6 space-y-3">
          {points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-[15px] font-medium text-obsidian/80">
              <span
                className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: `${p.accent}18` }}
              >
                <Check className="h-3 w-3" style={{ color: p.accent }} strokeWidth={3} />
              </span>
              {pt}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={p.links!.demo!}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-bold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: p.accent }}
          >
            <Play className="h-4 w-4" />
            Launch demo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={`/products/${p.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-[14px] font-bold text-obsidian transition-colors hover:bg-surface-soft"
          >
            Product page
          </Link>
        </div>
      </div>

      {/* Screenshot preview */}
      <Link href={p.links!.demo!} className={cn("group block", flip && "lg:order-1")}>
        <div className="transition-transform duration-300 group-hover:-translate-y-1">
          <ScreenshotFrame
            src={`/screenshots/${p.slug}.png`}
            alt={`${p.name} interface`}
            accent={p.accent}
            label={p.name}
            icon={p.icon}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export function DemoHub() {
  return (
    <div className="bg-bg pt-36 pb-28">
      {/* Hero */}
      <div className={siteContainerClass}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-brand/20 bg-brand/[0.06] px-4 py-1.5">
            <Play size={13} className="text-brand" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-brand">See it in action</span>
          </div>
          <h1 className="text-[44px] md:text-[64px] font-extrabold tracking-[-0.04em] leading-[1.02] text-obsidian">
            Try the Nexora suite,{" "}
            <span className="text-brand">before you install.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[19px] leading-relaxed text-text-secondary font-medium">
            Every demo is a click-through tour of the real plugin, using the actual admin UI. No sandbox
            account, no signup. Pick a product and take it for a spin.
          </p>
        </motion.div>

        {/* Quick jump chips */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {liveDemos.map((p) => {
            const Icon = p.icon;
            return (
              <a
                key={p.slug}
                href={`#demo-${p.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[13px] font-bold text-obsidian transition-colors hover:border-brand/40"
              >
                <Icon className="h-4 w-4" style={{ color: p.accent }} />
                {p.name.replace("Nexora ", "")}
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Live demo cards */}
      <div className={cn(siteContainerClass, "mt-20 space-y-24 sm:mt-24 sm:space-y-28")}>
        {liveDemos.map((p, i) => (
          <div key={p.slug} id={`demo-${p.slug}`} className="scroll-mt-28">
            <DemoCard p={p} index={i} />
          </div>
        ))}
      </div>

      {/* Coming soon */}
      {upcoming.length > 0 && (
        <div className={cn(siteContainerClass, "mt-28")}>
          <motion.div {...reveal} transition={{ duration: 0.55 }} className="text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-text-muted">More on the way</span>
            <h2 className="mt-3 text-[28px] font-black tracking-tight text-obsidian sm:text-[34px]">
              Demos coming soon
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[16px] text-text-secondary font-medium">
              These products are in development. Their interactive demos land as they ship.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {upcoming.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.slug}
                  {...reveal}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5"
                >
                  <span
                    className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `${p.accent}12`, border: `1.5px solid ${p.accent}26` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: p.accent }} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[16px] font-extrabold text-obsidian">{p.name}</h3>
                      <span className="inline-flex items-center gap-1 rounded-full bg-surface-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-text-muted">
                        <Clock className="h-3 w-3" />
                        {p.status === "beta" ? "Beta" : "Soon"}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-[13px] font-medium text-text-muted">{p.tagline}</p>
                  </div>
                  <Link
                    href={`/products/${p.slug}`}
                    className="flex-shrink-0 text-[13px] font-bold text-brand hover:underline"
                  >
                    Learn more
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className={cn(siteContainerClass, "mt-28")}>
        <div className="overflow-hidden rounded-[32px] border border-border bg-obsidian p-10 text-center md:p-14">
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-brand/30 blur-[90px]" />
            <div className="relative z-10">
              <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-white">
                One vendor. One dashboard. One bill.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[16px] font-medium text-white/55">
                The Nexora suite is built to work together, static delivery, SEO, and media optimization from
                a single house. Start with any plugin, free.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-[15px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Explore all products
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/downloads"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
                >
                  Download center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
