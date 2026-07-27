"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { siteContainerClass } from "@/lib/site-layout";
import { cn } from "@/app/components/ui/utils";

const highlights = [
  {
    title: "Engineering + Marketing, aligned",
    body: "Product, SEO, and delivery decisions stay in one operating rhythm. No fragmented plugin stack.",
    image: "/home/workspace-collab.jpg",
  },
  {
    title: "Operational visibility for every site",
    body: "From indexing issues to runtime performance, your team gets one source of truth for action.",
    image: "/home/operations-desk.jpg",
  },
];

export function CorporateShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 border-b border-border">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,#CBD5E1_1px,transparent_0)] bg-[size:56px_56px] opacity-[0.2]" />

      <div className={cn(siteContainerClass, "relative z-10")}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-10 md:mb-14"
        >
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.28em] text-brand mb-4">
            Built for Real Teams
          </span>
          <h2 className="text-[34px] md:text-[50px] font-extrabold tracking-[-0.04em] text-obsidian leading-[1.06] mb-4">
            Corporate-grade execution,
            <span className="text-brand"> without enterprise complexity.</span>
          </h2>
          <p className="text-[17px] text-text-secondary font-medium leading-[1.7] max-w-2xl">
            Auralogics Labs helps web teams ship faster, maintain quality, and scale operations with clear ownership.
            No rebuilds. No workflow disruption.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_24px_70px_rgba(2,6,23,0.08)]"
          >
            {/* Photo slot: drop the image at /public/home/corporate-team.jpg */}
            <div
              role="img"
              aria-label="Website team collaborating on strategy and delivery"
              className="h-[280px] w-full bg-gradient-to-br from-slate-100 to-slate-200/70 md:h-[420px]"
              style={{ backgroundImage: 'url(/home/corporate-team.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="p-6 md:p-8">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-text-muted mb-3">Platform Outcomes</p>
              <h3 className="text-[24px] md:text-[30px] font-extrabold text-obsidian tracking-[-0.03em] leading-[1.15] mb-3">
                One platform for performance, SEO, media, and fleet control.
              </h3>
              <p className="text-[15px] text-text-secondary leading-[1.7] font-medium mb-5">
                Replace scattered tooling with coordinated products designed to work together under real production constraints.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[14px] font-bold text-white hover:bg-brand-bright transition-colors"
              >
                Explore the Nexora suite
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-[24px] border border-border bg-white shadow-[0_16px_40px_rgba(2,6,23,0.06)]"
              >
                {/* Photo slot: drop the image at /public{item.image} */}
                <div
                  role="img"
                  aria-label={item.title}
                  className="h-40 w-full bg-gradient-to-br from-slate-100 to-slate-200/70"
                  style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="p-5 md:p-6">
                  <h3 className="text-[18px] font-extrabold text-obsidian tracking-tight mb-2">{item.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-[1.65] font-medium">{item.body}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
