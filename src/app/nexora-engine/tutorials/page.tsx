"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  Clock, BookOpen, Shield, Zap,
  Cpu, Settings, Bell, ArrowRight, Youtube, BarChart2,
  Play, X,
} from "lucide-react";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";
type Category = "All" | "Setup" | "SSG" | "Ghost Protocol" | "Pro" | "Advanced";

interface Tutorial {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: Difficulty;
  category: Exclude<Category, "All">;
  icon: React.ElementType;
  videoSrc?: string;
  videoTitle?: string;
  comingSoon?: boolean;
}

const categories: Category[] = ["All", "Setup", "SSG", "Ghost Protocol", "Pro", "Advanced"];

const difficultyColor: Record<Difficulty, string> = {
  Beginner:     "bg-emerald-50 text-emerald-700 border-emerald-200",
  Intermediate: "bg-amber-50 text-amber-700 border-amber-200",
  Advanced:     "bg-red-50 text-red-700 border-red-200",
};

const tutorials: Tutorial[] = [
  // ── Live videos ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "What Is Nexora Engine?",
    description: "A 75-second technical explainer: how Nexora captures pre-rendered HTML snapshots, serves them before PHP boots, and delivers pages in ~22 ms, without changing the editor workflow.",
    duration: "1:15",
    difficulty: "Beginner",
    category: "Setup",
    icon: Cpu,
    videoSrc: "/nexora-video-library/01-what-is-nexora-engine/index.html?embed=1",
    videoTitle: "Video 01: What is Nexora Engine",
  },
  {
    id: 2,
    title: "Installing Nexora Engine. Zero to Active in 5 Minutes",
    description: "Full setup walkthrough: upload & activate the plugin, run the wizard (server detection, WP_CACHE, drop-in install), trigger the first snapshot capture, and verify static delivery in incognito.",
    duration: "4:20",
    difficulty: "Beginner",
    category: "Setup",
    icon: Settings,
    videoSrc: "/nexora-video-library/02-installing-nexora-engine/index.html",
    videoTitle: "Video 02: Installing Nexora Engine",
  },
  {
    id: 3,
    title: "Ghost Protocol. Cloaking WordPress Fingerprints",
    description: "Before/after cURL demo: enable Ghost Protocol and watch WordPress version headers, REST endpoints, X-Powered-By, and wp-content paths disappear from public responses in one toggle.",
    duration: "2:00",
    difficulty: "Intermediate",
    category: "Ghost Protocol",
    icon: Shield,
    videoSrc: "/nexora-video-library/03-ghost-protocol-explained/index.html",
    videoTitle: "Video 03: Ghost Protocol Explained",
  },
  {
    id: 4,
    title: "Pro Features. GSC Integration & Redirect Manager",
    description: "Connect Google Search Console to see impressions/clicks per post inside WP admin, then use the Redirect Manager to add 301 rules that fire before WordPress renders, with zero PHP overhead on redirected URLs.",
    duration: "5:00",
    difficulty: "Intermediate",
    category: "Pro",
    icon: BarChart2,
    videoSrc: "/nexora-video-library/04-pro-features-gsc-redirect-manager/index.html",
    videoTitle: "Video 04: Pro Features. GSC & Redirect Manager",
  },
  {
    id: 5,
    title: "Elementor Compatibility & Static Capture",
    description: "Answers the four questions every Elementor developer asks: will sliders break, do forms still work, can I still edit, and how do I revert? Shows the static toggle live with a real Elementor page.",
    duration: "1:30",
    difficulty: "Beginner",
    category: "Advanced",
    icon: Zap,
    videoSrc: "/nexora-video-library/05-elementor-compatibility/index.html",
    videoTitle: "Video 05: Elementor Compatibility",
  },

  // ── Coming soon ───────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Build Control. Bulk Build, Queue & Smart Cron",
    description: "Triggering full rebuilds, smart pending-queue logic, single-page regen during bulk runs, and DISABLE_WP_CRON environments.",
    duration: "11:30",
    difficulty: "Intermediate",
    category: "SSG",
    icon: Cpu,
    comingSoon: true,
  },
  {
    id: 7,
    title: "Activating the Drop-In Cache Layer",
    description: "How advanced-cache.php intercepts requests before WordPress loads, ETag / 304 handling, and diagnosing cache misses using Run Diagnostic.",
    duration: "7:20",
    difficulty: "Intermediate",
    category: "Setup",
    icon: Zap,
    comingSoon: true,
  },
  {
    id: 8,
    title: "Reading the Dashboard. Metrics That Actually Matter",
    description: "Cache hit ratio, TTFB P50/P95, LCP/INP Core Web Vitals, Neural Pulse feed: what each number means and how to act on it.",
    duration: "6:55",
    difficulty: "Beginner",
    category: "SSG",
    icon: BarChart2,
    comingSoon: true,
  },
  {
    id: 9,
    title: "Security Hardening. All 8 Rules Explained",
    description: "What each rule does: file protection, author enum blocking, XML-RPC disable, REST tightening, rate limiting, and strong-password enforcement.",
    duration: "9:40",
    difficulty: "Intermediate",
    category: "Advanced",
    icon: Shield,
    comingSoon: true,
  },
  {
    id: 10,
    title: "CDN Integration & Production Deployment",
    description: "Pairing Nexora with Cloudflare, BunnyCDN, or AWS CloudFront. Cache-invalidation webhooks, edge TTL strategy, and zero-downtime deploys.",
    duration: "18:10",
    difficulty: "Advanced",
    category: "Advanced",
    icon: Zap,
    comingSoon: true,
  },
];

function getThumbnail(t: Tutorial): string {
  return t.videoSrc?.replace(/\/index\.html.*$/, "/thumbnail.svg") ?? "";
}

function getAutoplaySrc(t: Tutorial): string {
  const src = t.videoSrc ?? "";
  return src.includes("?") ? `${src}&autoplay=1` : `${src}?autoplay=1`;
}

export default function TutorialsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notified, setNotified]       = useState(false);
  const [activeVideo, setActiveVideo] = useState<Tutorial | null>(null);

  const filtered = activeCategory === "All" ? tutorials : tutorials.filter((t) => t.category === activeCategory);
  const live     = filtered.filter((t) => !t.comingSoon);
  const upcoming = filtered.filter((t) =>  t.comingSoon);

  // ESC key + body scroll lock
  useEffect(() => {
    if (!activeVideo) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveVideo(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header />

      <main className="pt-40 pb-32 px-8 lg:px-24">
        <div className="w-full max-w-[1600px] mx-auto">

          {/* ── Hero ─────────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 flex flex-col lg:flex-row items-end justify-between gap-12"
          >
            <div className="max-w-[760px]">
              <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-6 py-2 rounded-full mb-8">
                <Youtube size={14} className="text-brand" />
                <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Video Library</span>
              </div>
              <h1 className="text-[48px] md:text-[72px] font-extrabold text-obsidian tracking-tighter leading-none mb-8">
                Learn Nexora <br /><span className="text-brand">Engine.</span>
              </h1>
              <p className="text-[20px] text-text-secondary font-medium leading-relaxed">
                Step-by-step video guides covering every feature. from first install to production-grade deployment.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/nexora-engine/docs/getting-started"
                className="inline-flex items-center gap-3 bg-obsidian text-white px-8 py-4 rounded-2xl font-bold text-[14px] hover:-translate-y-0.5 transition-all"
              >
                <BookOpen size={16} /> Read Docs
              </Link>
            </div>
          </motion.div>

          {/* ── Category filter ───────────────────────────────────────────────── */}
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[13px] font-bold border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-obsidian text-white border-obsidian"
                    : "bg-white text-text-secondary border-border hover:border-obsidian hover:text-obsidian"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Live videos ───────────────────────────────────────────────────── */}
          {live.length > 0 && (
            <div className="mb-24">
              <h2 className="text-[14px] font-bold text-text-muted uppercase tracking-widest mb-8">Available Now</h2>
              <div className="grid xl:grid-cols-2 gap-10">
                {live.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="bg-white border border-border rounded-[32px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                  >
                    {/* Thumbnail + play */}
                    <div className="p-6 pb-0">
                      <button
                        onClick={() => setActiveVideo(t)}
                        className="relative block w-full rounded-2xl overflow-hidden group cursor-pointer"
                        style={{ aspectRatio: "16/10" }}
                        aria-label={`Play ${t.title}`}
                      >
                        {/* Thumbnail */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getThumbnail(t)}
                          alt={t.videoTitle ?? t.title}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/38 transition-colors duration-200" />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[68px] h-[68px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-200">
                            <Play size={26} className="text-obsidian ml-1" fill="currentColor" />
                          </div>
                        </div>
                        {/* Duration badge */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/55 text-white text-[11px] font-bold font-mono px-2.5 py-1.5 rounded-full">
                          <Clock size={10} /> {t.duration}
                        </div>
                      </button>
                    </div>

                    {/* Metadata */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 flex-wrap mb-5">
                        <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${difficultyColor[t.difficulty]}`}>
                          {t.difficulty}
                        </span>
                        <span className="text-[11px] font-bold text-text-muted bg-surface-soft px-3 py-1 rounded-full border border-border">
                          {t.category}
                        </span>
                      </div>
                      <h3 className="text-[17px] font-extrabold text-obsidian tracking-tight leading-snug mb-3">
                        {t.title}
                      </h3>
                      <p className="text-[13px] text-text-secondary font-medium leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── Coming soon ───────────────────────────────────────────────────── */}
          {upcoming.length > 0 && (
            <div className="mb-24">
              <h2 className="text-[14px] font-bold text-text-muted uppercase tracking-widest mb-8">Coming Soon</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {upcoming.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="bg-white border border-dashed border-border rounded-[28px] p-7 opacity-60"
                  >
                    <div className="flex items-center gap-3 flex-wrap mb-5">
                      <span className="text-[11px] font-bold text-text-muted bg-surface-soft px-3 py-1 rounded-full border border-border">
                        {t.category}
                      </span>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${difficultyColor[t.difficulty]}`}>
                        {t.difficulty}
                      </span>
                      <span className="text-[11px] font-bold text-brand bg-brand/5 px-3 py-1 rounded-full border border-brand/10 ml-auto">
                        Soon
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-xl bg-surface-soft flex items-center justify-center shrink-0">
                        <t.icon size={15} className="text-text-muted" />
                      </div>
                      <h3 className="text-[15px] font-extrabold text-obsidian tracking-tight leading-snug">{t.title}</h3>
                    </div>
                    <p className="text-[13px] text-text-secondary font-medium leading-relaxed line-clamp-2 pl-11">
                      {t.description}
                    </p>
                    <div className="flex items-center gap-1.5 pl-11 mt-3 text-[11px] font-bold text-text-muted font-mono">
                      <Clock size={11} /> {t.duration}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── Notify CTA ────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#050B25] border border-brand/20 rounded-[48px] p-12 lg:p-16"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-brand/10 border border-brand/20 px-5 py-2 rounded-full mb-8">
                  <Bell size={14} className="text-brand" />
                  <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">New Tutorial Alerts</span>
                </div>
                <h2 className="text-white text-[32px] md:text-[40px] font-extrabold tracking-tight mb-6 leading-tight">
                  Get Notified When <br /><span className="text-brand">New Tutorials Drop.</span>
                </h2>
                <p className="text-white/60 text-[16px] font-medium leading-relaxed">
                  We publish new walkthroughs regularly. Drop your email and we&apos;ll send a one-line note when something new is up.
                </p>
              </div>
              <div>
                {notified ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center">
                    <p className="text-emerald-400 text-[18px] font-bold mb-2">You&apos;re on the list.</p>
                    <p className="text-white/60 text-[14px]">We&apos;ll email you when new tutorials are published.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); if (notifyEmail) setNotified(true); }}
                    className="flex flex-col gap-4"
                  >
                    <input
                      type="email"
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 font-medium text-[15px] focus:outline-none focus:border-brand/60 transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-brand text-white rounded-2xl px-6 py-4 font-bold text-[15px] hover:-translate-y-0.5 hover:bg-brand-bright transition-all inline-flex items-center justify-center gap-3"
                    >
                      Notify Me <ArrowRight size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />

      {/* ── Video modal ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-10 bg-black/82 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              key="modal-body"
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between mb-4 px-1">
                <p className="text-white/75 text-[13px] font-bold truncate mr-4 max-w-[75%]">
                  {activeVideo.videoTitle}
                </p>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="flex-shrink-0 flex items-center gap-2 text-white/50 hover:text-white text-[13px] font-bold transition-colors"
                >
                  <X size={16} /> Close
                </button>
              </div>

              {/* Iframe. key forces fresh load on each open; autoplay=1 starts playback */}
              <iframe
                key={activeVideo.id}
                src={getAutoplaySrc(activeVideo)}
                title={activeVideo.videoTitle}
                className="w-full rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
                style={{ aspectRatio: "16/10", border: 0, display: "block" }}
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
