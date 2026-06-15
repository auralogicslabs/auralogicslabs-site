"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";

const TEAL = "#13716A";

const faqs = [
  {
    q: "Is Nexora Pulse really free?",
    a: "Yes. Every core feature (the SEO Analyzer, Index Doctor, Neural Links, Core Web Vitals, duplicate detection, Image SEO, redirects, and sitemap) is free. Search Console and PageSpeed integrations use your own Google API credentials, so there's no metered usage and nothing to pay us for.",
  },
  {
    q: "Do I need a Google Search Console account?",
    a: "For the Index Doctor and click/impression data, yes. You connect your own verified Search Console property. The rest of Pulse (on-page analysis, internal links, duplicates, sitemap) works without any Google connection. Pulse guides you through the one-time setup.",
  },
  {
    q: "Will it conflict with Yoast, Rank Math, or AIOSEO?",
    a: "Pulse is built to complement your existing setup. It focuses on diagnostics and indexing intelligence rather than rewriting the meta-box workflow, so you can run it alongside your current SEO plugin. You control which head tags Pulse outputs to avoid duplication.",
  },
  {
    q: "How does the Index Doctor actually work?",
    a: "It calls Google's URL Inspection API to get the real indexing verdict for each page, then cross-references that with Pulse's own analysis (thin content, orphan pages, duplicate signals) to explain the likely cause and surface patterns across all your rejected pages.",
  },
  {
    q: "Does Pulse send my data to your servers?",
    a: "No. Pulse talks directly from your WordPress site to Google's APIs using your credentials. Your Search Console and PageSpeed data is stored in your own database, and credentials are encrypted at rest. We don't proxy or collect your analytics.",
  },
  {
    q: "What's coming next?",
    a: "An AI assistant for generating and rewriting meta content, plus additional integrations like Google Analytics 4 and Bing Webmaster Tools, are on the roadmap. They're clearly marked as coming soon inside the plugin.",
  },
];

export function PulseFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-32 px-8 lg:px-24 relative overflow-hidden">
      <div className="w-full max-w-[860px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-8 rounded-full" style={{ background: TEAL }} />
            <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: TEAL }}>Questions</span>
            <div className="h-0.5 w-8 rounded-full" style={{ background: TEAL }} />
          </div>
          <h2 className="text-[36px] md:text-[48px] lg:text-[54px] font-extrabold text-obsidian tracking-[-0.04em] leading-[1.05]">
            Questions people actually ask.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="border border-border rounded-[20px] overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-surface-soft/50 transition-colors"
              >
                <span className="text-[16px] md:text-[17px] font-bold text-obsidian">{f.q}</span>
                <span
                  className="h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                  style={{ background: "rgba(19,113,106,0.08)", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}
                >
                  <Plus className="h-4 w-4" style={{ color: TEAL }} />
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[15px] text-text-secondary leading-[1.7] font-medium">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
