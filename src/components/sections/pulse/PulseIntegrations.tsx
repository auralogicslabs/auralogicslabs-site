"use client";

import { motion } from "motion/react";
import { Stethoscope, Gauge, KeyRound, ShieldCheck, Lock } from "lucide-react";

const TEAL = "#13716A";

const integrations = [
  {
    icon: Stethoscope,
    name: "Google Search Console",
    tagline: "Real indexing intelligence",
    points: [
      "See which pages Google indexed, rejected, or hasn't crawled",
      "Diagnose why pages aren't indexed — the Index Doctor",
      "Track clicks, impressions, and average position",
    ],
    badge: "Free",
  },
  {
    icon: Gauge,
    name: "PageSpeed Insights",
    tagline: "Core Web Vitals + performance",
    points: [
      "Track LCP, INP, CLS — the metrics Google ranks by",
      "Field data from real Chrome users (CrUX)",
      "Specific Lighthouse audits and fix suggestions",
    ],
    badge: "Free",
  },
];

export function PulseIntegrations() {
  return (
    <section className="bg-white py-32 px-8 lg:px-24 relative overflow-hidden border-t border-border">
      <div className="w-full max-w-[1300px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[720px] mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-8 rounded-full" style={{ background: TEAL }} />
            <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: TEAL }}>Your Data, Your Keys</span>
            <div className="h-0.5 w-8 rounded-full" style={{ background: TEAL }} />
          </div>
          <h2 className="text-[36px] md:text-[48px] lg:text-[54px] font-extrabold text-obsidian tracking-[-0.04em] leading-[1.05] mb-6">
            Connect Google. Keep control.
          </h2>
          <p className="text-[17px] md:text-[18px] text-text-secondary font-medium leading-[1.7]">
            Pulse connects directly to your own Google accounts using your own API credentials.
            We never proxy your data through our servers, and there's no metered usage to pay for.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {integrations.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-border rounded-[32px] p-8 shadow-[0_24px_60px_rgba(2,6,23,0.06)]"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(19,113,106,0.08)", border: "1px solid rgba(19,113,106,0.15)" }}>
                    <it.icon className="h-6 w-6" style={{ color: TEAL }} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-extrabold text-obsidian tracking-tight">{it.name}</h3>
                    <p className="text-[13px] text-text-muted font-semibold">{it.tagline}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: "rgba(22,163,74,0.1)", color: "#16A34A" }}>{it.badge}</span>
              </div>
              <div className="space-y-2.5">
                {it.points.map((p) => (
                  <div key={p} className="flex items-start gap-2.5 text-[14px] text-text-secondary leading-snug font-medium">
                    <span className="h-1.5 w-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: TEAL }} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {[
            { icon: KeyRound, label: "Your own API credentials" },
            { icon: ShieldCheck, label: "No data proxied through us" },
            { icon: Lock, label: "Credentials encrypted at rest" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-2.5">
              <t.icon className="h-4 w-4" style={{ color: TEAL }} />
              <span className="text-[13px] font-bold text-text-secondary">{t.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
