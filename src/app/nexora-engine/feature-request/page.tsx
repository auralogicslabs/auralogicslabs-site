"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { sendFeatureRequest } from "@/app/actions/email";
import {
  Lightbulb, CheckCircle2, ArrowRight, ThumbsUp,
  Cpu, Shield, Zap, BarChart2, Layout, Settings,
} from "lucide-react";

const categories = [
  "Static Site Generation",
  "Ghost Protocol / Cloaking",
  "Performance & Caching",
  "Security Hardening",
  "Dashboard & Analytics",
  "Wizard & Onboarding",
  "API & Integrations",
  "Other",
];

interface PopularRequest {
  title: string;
  votes: number;
  category: string;
  icon: React.ElementType;
  status: "Planned" | "In Progress" | "Under Review";
}

const popularRequests: PopularRequest[] = [
  {
    title: "WooCommerce dynamic cart exclusion from SSG",
    votes: 47,
    category: "SSG",
    icon: Cpu,
    status: "Planned",
  },
  {
    title: "Cloudflare Cache API invalidation on publish",
    votes: 38,
    category: "Integrations",
    icon: Zap,
    status: "In Progress",
  },
  {
    title: "Per-page cache TTL override",
    votes: 31,
    category: "Performance",
    icon: BarChart2,
    status: "Planned",
  },
  {
    title: "Role-based dashboard access for editors",
    votes: 24,
    category: "Dashboard",
    icon: Layout,
    status: "Under Review",
  },
  {
    title: "Multisite network support",
    votes: 19,
    category: "SSG",
    icon: Settings,
    status: "Under Review",
  },
  {
    title: "Custom X-Robots-Tag injection per post type",
    votes: 14,
    category: "Ghost Protocol",
    icon: Shield,
    status: "Planned",
  },
];

const statusStyle: Record<PopularRequest["status"], string> = {
  "Planned": "bg-blue-50 text-blue-700 border-blue-200",
  "In Progress": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Under Review": "bg-amber-50 text-amber-700 border-amber-200",
};

export default function FeatureRequestPage() {
  const [form, setForm] = useState({ email: "", title: "", category: "", description: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const result = await sendFeatureRequest(form.email, form.title, form.category, form.description);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header />

      <main className="pt-40 pb-32 px-8 lg:px-24">
        <div className="w-full max-w-[1700px] mx-auto">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 max-w-[860px]"
          >
            <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-6 py-2 rounded-full mb-8">
              <Lightbulb size={14} className="text-brand" />
              <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Feature Board</span>
            </div>
            <h1 className="text-[48px] md:text-[72px] font-extrabold text-obsidian tracking-tighter leading-none mb-8">
              Shape What We <br /><span className="text-brand">Build Next.</span>
            </h1>
            <p className="text-[20px] text-text-secondary font-medium leading-relaxed max-w-[640px]">
              Every idea you submit goes directly to our engineering roadmap review. We prioritise by vote count and real-world impact.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7"
            >
              {status === "success" ? (
                <div className="bg-white border border-border rounded-[40px] p-16 text-center">
                  <div className="h-20 w-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={36} className="text-emerald-600" />
                  </div>
                  <h2 className="text-[32px] font-extrabold text-obsidian tracking-tight mb-4">Request Received.</h2>
                  <p className="text-[17px] text-text-secondary font-medium leading-relaxed mb-10 max-w-[420px] mx-auto">
                    Our engineering team reviews every submission. If your idea gets traction we'll reach back out with an ETA.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center gap-3 bg-obsidian text-white px-8 py-4 rounded-2xl font-bold text-[14px] hover:-translate-y-0.5 transition-all"
                  >
                    Submit Another Idea <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-border rounded-[40px] p-10 lg:p-14 space-y-8"
                >
                  <div>
                    <h2 className="text-[24px] font-extrabold text-obsidian tracking-tight mb-2">Submit Your Idea</h2>
                    <p className="text-[14px] text-text-muted font-medium">All fields required. We read every submission.</p>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-obsidian uppercase tracking-widest">Your Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full border border-border rounded-2xl px-5 py-4 text-[15px] font-medium text-obsidian placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-obsidian uppercase tracking-widest">Category</label>
                    <select
                      required
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full border border-border rounded-2xl px-5 py-4 text-[15px] font-medium text-obsidian bg-white focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all appearance-none"
                    >
                      <option value="">Select a category…</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-obsidian uppercase tracking-widest">Feature Title</label>
                    <input
                      type="text"
                      required
                      maxLength={120}
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      placeholder="e.g. Per-page cache TTL override"
                      className="w-full border border-border rounded-2xl px-5 py-4 text-[15px] font-medium text-obsidian placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-obsidian uppercase tracking-widest">Details</label>
                    <textarea
                      required
                      rows={6}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Describe your idea: what problem does it solve, how would you expect it to work, and who would benefit from it?"
                      className="w-full border border-border rounded-2xl px-5 py-4 text-[15px] font-medium text-obsidian placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-[14px] font-medium">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-brand text-white rounded-2xl px-8 py-5 font-bold text-[16px] hover:-translate-y-0.5 hover:bg-brand-bright disabled:opacity-60 disabled:cursor-not-allowed transition-all inline-flex items-center justify-center gap-3"
                  >
                    {status === "loading" ? "Sending…" : (
                      <>Submit Feature Request <ArrowRight size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Popular requests sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white border border-border rounded-[40px] p-10">
                <h2 className="text-[20px] font-extrabold text-obsidian tracking-tight mb-2">Top Requests</h2>
                <p className="text-[14px] text-text-muted font-medium mb-10">Most voted ideas from the community.</p>
                <div className="space-y-5">
                  {popularRequests.map((req, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.06 }}
                      className="flex items-start gap-5 p-5 rounded-2xl border border-border hover:bg-surface-soft transition-colors"
                    >
                      <div className="flex flex-col items-center gap-1 min-w-[40px]">
                        <ThumbsUp size={16} className="text-text-muted" />
                        <span className="text-[13px] font-bold text-obsidian">{req.votes}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-bold text-obsidian leading-snug mb-2">{req.title}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-text-muted bg-surface-soft px-2.5 py-1 rounded-full border border-border">{req.category}</span>
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${statusStyle[req.status]}`}>{req.status}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
