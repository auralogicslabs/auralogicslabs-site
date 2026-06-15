"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { sendSupportTicket } from "@/app/actions/email";
import Link from "next/link";
import {
  HelpCircle, CheckCircle2, ArrowRight, BookOpen,
  Play, Zap, MessageSquare, Clock, Shield, AlertCircle,
} from "lucide-react";

const priorities = [
  { value: "low", label: "Low", desc: "General question or minor inconvenience", color: "border-emerald-300 bg-emerald-50 text-emerald-700" },
  { value: "medium", label: "Medium", desc: "Feature not working as expected", color: "border-amber-300 bg-amber-50 text-amber-700" },
  { value: "high", label: "High", desc: "Core functionality broken", color: "border-orange-300 bg-orange-50 text-orange-700" },
  { value: "critical", label: "Critical", desc: "Site down or data loss risk", color: "border-red-300 bg-red-50 text-red-700" },
];

const selfServiceLinks = [
  {
    icon: BookOpen,
    title: "Getting Started",
    desc: "Install guide, wizard walkthrough, server checklist",
    href: "/nexora-engine/docs/getting-started",
    label: "View Guide",
  },
  {
    icon: Play,
    title: "Video Tutorials",
    desc: "Step-by-step screencasts for every feature",
    href: "/nexora-engine/tutorials",
    label: "Watch",
  },
  {
    icon: Zap,
    title: "Run Diagnostic",
    desc: "Check your cache layer from inside the plugin",
    href: "#",
    label: "Nexora Engine → Tools → Run Diagnostic",
  },
];

const responseTimes: Record<string, string> = {
  low: "2–3 business days",
  medium: "1 business day",
  high: "4–8 hours",
  critical: "Under 2 hours",
};

export default function SupportPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    description: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const result = await sendSupportTicket(
      form.name, form.email, form.subject, form.priority, form.description
    );
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Something went wrong. Try emailing hello@auralogicslabs.com directly.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Header />

      <main className="pt-40 pb-32 px-8 lg:px-24">
        <div className="w-full max-w-[1600px] mx-auto">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 max-w-[860px]"
          >
            <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 px-6 py-2 rounded-full mb-8">
              <HelpCircle size={14} className="text-brand" />
              <span className="font-mono text-[10px] font-bold text-brand uppercase tracking-[0.3em]">Support Centre</span>
            </div>
            <h1 className="text-[48px] md:text-[72px] font-extrabold text-obsidian tracking-tighter leading-none mb-8">
              We've Got You <br /><span className="text-brand">Covered.</span>
            </h1>
            <p className="text-[20px] text-text-secondary font-medium leading-relaxed max-w-[640px]">
              Check the self-service resources first. most issues are solved in under two minutes. If you're still stuck, open a ticket and our team responds fast.
            </p>
          </motion.div>

          {/* Self-service row */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {selfServiceLinks.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group block bg-white border border-border rounded-[32px] p-8 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-2xl bg-surface-soft border border-border flex items-center justify-center mb-6 group-hover:bg-brand group-hover:border-brand/40 transition-all duration-300">
                    <item.icon size={20} className="text-text-muted group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[16px] font-extrabold text-obsidian tracking-tight mb-2">{item.title}</h3>
                  <p className="text-[13px] text-text-secondary font-medium mb-4 leading-relaxed">{item.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] font-bold text-brand group-hover:gap-3 transition-all">
                    {item.label} <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-6 mb-20">
            <div className="flex-1 h-px bg-border" />
            <span className="text-[13px] font-bold text-text-muted uppercase tracking-widest whitespace-nowrap px-4">or open a ticket</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-12 gap-16">

            {/* Ticket form */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="lg:col-span-8"
            >
              {status === "success" ? (
                <div className="bg-white border border-border rounded-[40px] p-16 text-center">
                  <div className="h-20 w-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={36} className="text-emerald-600" />
                  </div>
                  <h2 className="text-[32px] font-extrabold text-obsidian tracking-tight mb-4">Ticket Submitted.</h2>
                  <p className="text-[17px] text-text-secondary font-medium leading-relaxed mb-4 max-w-[420px] mx-auto">
                    We've received your request. Expected response time for <strong className="text-obsidian">{form.priority}</strong> priority:
                  </p>
                  <div className="inline-flex items-center gap-3 bg-brand/5 border border-brand/10 rounded-2xl px-6 py-3 mb-10">
                    <Clock size={16} className="text-brand" />
                    <span className="text-[16px] font-bold text-brand">{responseTimes[form.priority]}</span>
                  </div>
                  <br />
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", priority: "medium", description: "" }); }}
                    className="inline-flex items-center gap-3 bg-obsidian text-white px-8 py-4 rounded-2xl font-bold text-[14px] hover:-translate-y-0.5 transition-all"
                  >
                    Submit Another Ticket <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-border rounded-[40px] p-10 lg:p-14 space-y-8"
                >
                  <div>
                    <h2 className="text-[24px] font-extrabold text-obsidian tracking-tight mb-2">Open a Support Ticket</h2>
                    <p className="text-[14px] text-text-muted font-medium">Our team will reply to your email directly.</p>
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-obsidian uppercase tracking-widest">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full border border-border rounded-2xl px-5 py-4 text-[15px] font-medium text-obsidian placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[13px] font-bold text-obsidian uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full border border-border rounded-2xl px-5 py-4 text-[15px] font-medium text-obsidian placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                      />
                    </div>
                  </div>

                  {/* Priority */}
                  <div className="space-y-3">
                    <label className="text-[13px] font-bold text-obsidian uppercase tracking-widest">Priority</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {priorities.map((p) => (
                        <button
                          key={p.value}
                          type="button"
                          onClick={() => setForm({ ...form, priority: p.value })}
                          className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 ${
                            form.priority === p.value
                              ? p.color + " border-2"
                              : "border-border bg-white hover:bg-surface-soft"
                          }`}
                        >
                          <p className="text-[13px] font-bold">{p.label}</p>
                          <p className="text-[11px] font-medium opacity-70 leading-snug mt-1">{p.desc}</p>
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[13px] font-medium text-text-muted">
                      <Clock size={13} />
                      Expected response: <span className="font-bold text-obsidian">{responseTimes[form.priority]}</span>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-obsidian uppercase tracking-widest">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. SSG build stuck at 50% after nginx update"
                      className="w-full border border-border rounded-2xl px-5 py-4 text-[15px] font-medium text-obsidian placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <label className="text-[13px] font-bold text-obsidian uppercase tracking-widest">Describe the Issue</label>
                    <textarea
                      required
                      rows={7}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      placeholder="Include: what you expected to happen, what actually happened, steps to reproduce, your server stack (Apache/Nginx/LiteSpeed), and any error messages you see."
                      className="w-full border border-border rounded-2xl px-5 py-4 text-[15px] font-medium text-obsidian placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl p-4">
                      <AlertCircle size={18} className="text-red-600 mt-0.5 shrink-0" />
                      <p className="text-red-700 text-[14px] font-medium">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-brand text-white rounded-2xl px-8 py-5 font-bold text-[16px] hover:-translate-y-0.5 hover:bg-brand-bright disabled:opacity-60 disabled:cursor-not-allowed transition-all inline-flex items-center justify-center gap-3"
                  >
                    {status === "loading" ? "Submitting…" : (
                      <>Submit Ticket <ArrowRight size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="lg:col-span-4 space-y-8"
            >
              {/* Response times card */}
              <div className="bg-white border border-border rounded-[32px] p-8">
                <h3 className="text-[16px] font-extrabold text-obsidian tracking-tight mb-6">Response Times</h3>
                <div className="space-y-4">
                  {priorities.map((p) => (
                    <div key={p.value} className="flex items-center justify-between">
                      <span className={`text-[12px] font-bold px-3 py-1 rounded-full border ${p.color}`}>{p.label}</span>
                      <span className="text-[13px] font-bold text-obsidian">{responseTimes[p.value]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="bg-[#050B25] border border-brand/20 rounded-[32px] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                    <MessageSquare size={18} className="text-brand-soft" />
                  </div>
                  <h3 className="text-[16px] font-extrabold text-white tracking-tight">Direct Email</h3>
                </div>
                <p className="text-white/60 text-[14px] font-medium leading-relaxed mb-5">
                  For critical production issues, email us directly and mark your subject line with [CRITICAL].
                </p>
                <a
                  href="mailto:hello@auralogicslabs.com"
                  className="text-brand-soft text-[14px] font-bold hover:text-white transition-colors"
                >
                  hello@auralogicslabs.com
                </a>
              </div>

              {/* Pro Portal Ticket Tracking */}
              <div className="bg-brand/5 border border-brand/20 rounded-[32px] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-brand" />
                  </div>
                  <h3 className="text-[14px] font-extrabold text-obsidian">Pro Users: Tracked Tickets</h3>
                </div>
                <p className="text-[13px] text-text-secondary font-medium leading-relaxed mb-4">
                  Pro licence holders get tracked tickets with status updates, priority routing, and full history inside the portal.
                </p>
                <a
                  href="/portal/dashboard/support"
                  className="inline-flex items-center gap-2 text-[13px] font-bold text-brand hover:text-obsidian transition-colors"
                >
                  Open Portal Tickets →
                </a>
              </div>

              {/* Security note */}
              <div className="bg-white border border-border rounded-[32px] p-8">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-surface-soft flex items-center justify-center shrink-0">
                    <Shield size={18} className="text-text-muted" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-obsidian mb-2">Security Vulnerabilities</h3>
                    <p className="text-[13px] text-text-secondary font-medium leading-relaxed">
                      Please do <strong>not</strong> submit security vulnerabilities via this form. Email{" "}
                      <a href="mailto:security@auralogicslabs.com" className="text-brand font-bold hover:underline">
                        security@auralogicslabs.com
                      </a>{" "}
                      with encrypted details.
                    </p>
                  </div>
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
