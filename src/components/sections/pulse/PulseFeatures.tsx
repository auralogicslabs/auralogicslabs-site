"use client";

import { motion } from "motion/react";
import {
  ScanSearch, Network, Gauge, Copy, ImageIcon, Stethoscope,
  Repeat, FileCode2, Share2,
} from "lucide-react";

const TEAL = "#13716A";

const features = [
  {
    icon: ScanSearch,
    title: "SEO Analyzer",
    desc: "Scans every post and page for on-page issues: titles, descriptions, headings, readability, and keyword usage. Scores each one so you know exactly where to focus.",
  },
  {
    icon: Stethoscope,
    title: "Index Doctor",
    desc: "Real indexing verdicts from Google Search Console, cross-referenced with Pulse's own signals to diagnose why pages aren't indexed and detect systemic patterns.",
  },
  {
    icon: Network,
    title: "Neural Links",
    desc: "Maps your internal link graph. Surfaces orphan pages, finds broken links, and shows where new internal links will move the needle.",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals",
    desc: "Live LCP, INP, and CLS from PageSpeed Insights and real Chrome users (CrUX), with the specific Lighthouse audits to fix. Results are cached so you never burn through API quota.",
  },
  {
    icon: Copy,
    title: "Originality & Duplicates",
    desc: "Detects near-duplicate and thin content across your site before Google flags it, so you can consolidate or rewrite the pages dragging you down.",
  },
  {
    icon: ImageIcon,
    title: "Image SEO",
    desc: "Finds images missing alt text and oversized files hurting your performance, with a clear worklist to fix them in bulk.",
  },
  {
    icon: Repeat,
    title: "Redirect Manager",
    desc: "Create and manage 301/302 redirects without touching .htaccess. A built-in 404 monitor turns broken URLs into one-click redirects.",
  },
  {
    icon: FileCode2,
    title: "XML Sitemap & Robots",
    desc: "A clean, automatically maintained XML sitemap and editable robots.txt rules. Submit your sitemap straight to Search Console from inside Pulse.",
  },
  {
    icon: Share2,
    title: "Schema & Social Meta",
    desc: "Outputs JSON-LD structured data and Open Graph / Twitter cards so your pages look right in search results and when shared.",
  },
];

export function PulseFeatures() {
  return (
    <section id="features" className="bg-surface-soft py-32 px-8 lg:px-24 relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[760px] mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-0.5 w-8 rounded-full" style={{ background: TEAL }} />
            <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: TEAL }}>The Whole Stack</span>
            <div className="h-0.5 w-8 rounded-full" style={{ background: TEAL }} />
          </div>
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-extrabold text-obsidian tracking-[-0.04em] leading-[1.05] mb-6">
            Nine tools. One console. No stitching.
          </h2>
          <p className="text-[17px] md:text-[18px] text-text-secondary font-medium leading-[1.7]">
            Stop tabbing between Yoast, Search Console, PageSpeed, and Screaming Frog. Pulse pulls your real Google data directly into WordPress so you can diagnose, fix, and monitor your entire SEO health in one place. And every feature ships free.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group bg-white border border-border rounded-[28px] p-7 hover:shadow-[0_24px_60px_rgba(2,6,23,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="h-13 w-13 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                style={{ width: 52, height: 52, background: "rgba(19,113,106,0.08)", border: "1px solid rgba(19,113,106,0.15)" }}
              >
                <f.icon className="h-6 w-6" style={{ color: TEAL }} strokeWidth={2} />
              </div>
              <h3 className="text-[18px] font-extrabold text-obsidian tracking-tight mb-2.5">{f.title}</h3>
              <p className="text-[14px] text-text-secondary leading-[1.65] font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
