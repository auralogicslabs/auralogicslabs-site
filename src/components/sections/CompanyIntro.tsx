"use client";

import Link from "next/link";
import { Zap, Stethoscope, ImageIcon, LayoutDashboard } from "lucide-react";
import { motion } from "motion/react";

const products = [
  { name: "Nexora Engine", href: "/products/nexora-engine", icon: Zap, status: "Live", accent: "#1A3FD8" },
  { name: "Nexora Pulse", href: "/products/nexora-pulse", icon: Stethoscope, status: "Free", accent: "#13716A" },
  { name: "Nexora Media", href: "/products/nexora-media", icon: ImageIcon, status: "Live", accent: "#7C3AED" },
  { name: "Auralogics Portal", href: "/portal", icon: LayoutDashboard, status: "Live", accent: "#F39A09" },
];

export function CompanyIntro() {
  return (
    <section className="relative bg-white border-b border-slate-100 px-6 py-10 lg:px-16">
      <div className="w-full max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
        >
          <p className="text-[15px] font-medium text-slate-600 max-w-[480px] leading-relaxed flex-shrink-0">
            Auralogics Labs makes the{" "}
            <span className="font-bold text-slate-900">Nexora suite</span>{" "}
            — four focused WordPress tools for performance, SEO, media, and fleet control.
            Built for teams who don&apos;t need a rebuild. They just need better infrastructure.
          </p>

          <div className="hidden md:block w-px h-12 bg-slate-200 flex-shrink-0" />

          <div className="flex flex-wrap gap-2.5">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white transition-all duration-200 group"
                  >
                    <Icon className="h-3.5 w-3.5 flex-shrink-0" style={{ color: p.accent }} />
                    <span className="text-[13px] font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                      {p.name}
                    </span>
                    <span
                      className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md"
                      style={{
                        background: p.status === "Free" ? "rgba(34,197,94,0.1)" : `${p.accent}14`,
                        color: p.status === "Free" ? "#15803d" : p.accent,
                      }}
                    >
                      {p.status}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
