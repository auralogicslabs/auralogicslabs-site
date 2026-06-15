"use client";

import { motion } from "motion/react";
import {
  CheckCircle2, ShoppingCart, Newspaper, Briefcase,
  BookOpen, Globe2, ArrowRight, Zap, ImageIcon,
} from "lucide-react";
import Link from "next/link";

const useCases = [
  { icon: Globe2,       label: "Business Websites",  benefit: "Lightning-fast service pages, zero bounce on mobile",       color: "#1A3FD8" },
  { icon: ShoppingCart, label: "WooCommerce Stores",  benefit: "Product pages load instantly; conversion rates improve",   color: "#059669" },
  { icon: Newspaper,    label: "News Portals",        benefit: "High-traffic articles served without scaling costs",         color: "#7C3AED" },
  { icon: Briefcase,    label: "Agency Sites",        benefit: "Client deliverables that pass Core Web Vitals on day one",  color: "#F59E0B" },
  { icon: BookOpen,     label: "Blogs & Publishers",  benefit: "SEO-first delivery with no plugin overhead",                color: "#0D9488" },
];

const serverCompat = ["Apache", "Nginx", "LiteSpeed", "IIS", "OpenLiteSpeed", "cPanel"];

/* ── Product screenshot placeholder ── */
function ProductScreenshot({
  label, sublabel, accent, icon: Icon,
}: {
  label: string; sublabel: string; accent: string; icon: React.ElementType;
}) {
  return (
    <div
      className="w-full rounded-[16px] overflow-hidden border"
      style={{
        borderColor: `${accent}30`,
        boxShadow: `0 24px 60px ${accent}18, 0 4px 16px rgba(2,6,23,0.06)`,
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border-b border-border">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white border border-border rounded-md px-3 py-1 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: accent }} />
            <span className="text-[10px] font-mono text-text-muted truncate">
              wp-admin · Nexora {label.replace("Nexora ", "")}
            </span>
          </div>
        </div>
      </div>

      {/* Placeholder body */}
      <div
        className="aspect-[16/9] flex flex-col items-center justify-center gap-4 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accent}08 0%, ${accent}03 100%)` }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.4,
          }}
        />
        {/* Skeleton UI inside */}
        <div className="relative z-10 w-full px-8 flex flex-col gap-3">
          <div className="flex gap-3 mb-1">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-xl p-3 flex flex-col gap-1.5"
                style={{ background: `${accent}10`, border: `1px solid ${accent}20` }}
              >
                <div className="h-4 w-8 rounded font-mono text-[11px] font-bold flex items-center" style={{ color: accent }}>
                  {i === 0 ? "22ms" : i === 1 ? "100%" : "↓70%"}
                </div>
                <div className="h-1.5 w-10 rounded-full" style={{ background: `${accent}30` }} />
              </div>
            ))}
          </div>
          {[75, 55, 65].map((w, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg bg-white/60 px-3 py-2 border border-border/30">
              <div className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: `${accent}60` }} />
              <div className="h-1.5 rounded-full" style={{ background: `${accent}25`, width: `${w}%` }} />
            </div>
          ))}
        </div>

        {/* Placeholder label */}
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-white/80 to-transparent flex items-end justify-center pb-4">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dashed text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ borderColor: `${accent}50`, color: `${accent}80`, background: `${accent}08` }}
          >
            <Icon className="h-3 w-3" />
            {sublabel}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="bg-surface-soft/40 py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-brand/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-0.5 w-8 bg-brand rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">Built for Production</span>
            <div className="h-0.5 w-8 bg-brand rounded-full" />
          </div>
          <h2 className="text-[38px] md:text-[54px] font-extrabold text-obsidian tracking-tight leading-[1.05] mb-4">
            Works on every site.<br className="hidden md:block" /> Every stack.
          </h2>
          <p className="text-[17px] text-text-secondary font-medium max-w-[500px] mx-auto leading-[1.65]">
            From solo developer blogs to high-traffic news portals. Nexora adapts to your use case,
            your host, and your team.
          </p>
        </motion.div>

        {/* Server compat strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 flex flex-col items-center gap-4"
        >
          <span className="text-[11px] font-bold text-text-muted uppercase tracking-[0.28em]">
            Auto-configured for every server
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {serverCompat.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white border border-border shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-[13px] font-bold text-obsidian">{s}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use cases */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -8 }}
                  className="group rounded-[22px] bg-white border border-border p-7 flex flex-col gap-5 hover:border-border-strong hover:shadow-[0_16px_48px_rgba(2,6,23,0.07)] transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-[22px]"
                    style={{ background: uc.color }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3 }}
                    className="h-12 w-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${uc.color}10`, border: `1.5px solid ${uc.color}20` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: uc.color }} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-[15px] font-extrabold text-obsidian mb-2 tracking-tight leading-snug">{uc.label}</div>
                    <div className="text-[13px] text-text-secondary font-medium leading-[1.65]">{uc.benefit}</div>
                  </div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-1.5 mt-auto transition-all duration-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0" style={{ color: uc.color }} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: uc.color }}>Supported</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Product preview + lead gen ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[36px] bg-obsidian overflow-hidden relative"
          style={{ boxShadow: "0 40px 80px rgba(2,6,23,0.2)" }}
        >
          {/* BG glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-brand/15 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-emerald-500/8 blur-[120px] rounded-full pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 p-10 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Text + CTA */}
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-brand rounded-full" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">Ready to ship faster?</span>
                </div>

                <h3 className="text-[32px] md:text-[44px] font-extrabold text-white tracking-tight leading-[1.05]">
                  See Nexora running<br className="hidden md:block" /> on your site. free.
                </h3>
                <p className="text-[16px] text-white/50 font-medium leading-[1.72] max-w-[420px]">
                  Install Nexora Engine in under 2 minutes. No credit card.
                  No configuration. Just drop it in and watch your TTFB drop.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      href="/nexora-engine/docs/getting-started"
                      className="inline-flex items-center justify-center gap-2.5 rounded-[14px] bg-white text-obsidian px-7 py-4 text-[14px] font-black hover:bg-brand hover:text-white transition-all duration-300 group shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.9)]"
                    >
                      <Zap className="h-4 w-4" />
                      Get Started Free
                      <motion.div whileHover={{ x: 2 }}>
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      href="/products/nexora-media"
                      className="inline-flex items-center justify-center gap-2.5 rounded-[14px] border border-white/15 bg-white/[0.07] text-white px-7 py-4 text-[14px] font-bold hover:bg-white/[0.12] hover:border-white/25 transition-all duration-300 group"
                    >
                      <ImageIcon className="h-4 w-4 opacity-60" />
                      Explore Media
                    </Link>
                  </motion.div>
                </div>

                {/* Mini trust pills */}
                <div className="flex flex-wrap gap-2">
                  {["Free tier forever", "No credit card", "2-min install"].map((p) => (
                    <span key={p} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[12px] font-bold text-white/40">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshot placeholders stacked/overlapping */}
              <div className="relative">
                {/* Engine screenshot. back */}
                <motion.div
                  initial={{ opacity: 0, x: 24, rotate: 2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="absolute top-4 -right-4 w-[88%] origin-center"
                  style={{ transform: "rotate(2deg)" }}
                >
                  <ProductScreenshot
                    label="Nexora Engine"
                    sublabel="Engine Screenshot"
                    accent="#1A3FD8"
                    icon={Zap}
                  />
                </motion.div>

                {/* Media screenshot. front */}
                <motion.div
                  initial={{ opacity: 0, x: -24, rotate: -2 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="relative w-[88%] origin-center"
                  style={{ transform: "rotate(-2deg)", marginTop: "10%" }}
                >
                  <ProductScreenshot
                    label="Nexora Media"
                    sublabel="Media Screenshot"
                    accent="#059669"
                    icon={ImageIcon}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
