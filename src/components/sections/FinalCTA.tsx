"use client";

import { useState } from "react";
import { ArrowRight, Mail, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { FullWidthSection, ScrollReveal } from "@/components/ui/SectionShell";

function FreeTrialBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/free-trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "homepage-final-cta" }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success) {
        setStatus("success");
        setMessage("Thanks! Check your inbox — we'll be in touch shortly.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-obsidian/95 border border-white/10 shadow-[0_30px_80px_rgba(2,6,23,0.45)] px-7 py-8 md:px-12 md:py-10">
      {/* subtle accents */}
      <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full blur-[110px] pointer-events-none" style={{ background: "rgba(96,165,250,0.16)" }} />
      <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full blur-[110px] pointer-events-none" style={{ background: "rgba(124,58,237,0.12)" }} />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12 text-left">
        {/* Left — heading */}
        <div className="flex-shrink-0 lg:max-w-[360px]">
          <h3 className="text-[28px] md:text-[34px] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-2.5">
            Start your 14-day free trial
          </h3>
          <p className="text-[15px] text-white/55 font-medium leading-relaxed">
            Full platform access on your own site. No credit card. No commitment. See the speed difference for yourself.
          </p>
        </div>

        {/* Right — form */}
        <div className="flex-1 w-full">
          {status === "success" ? (
            <div className="flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 px-5 py-4">
              <span className="h-9 w-9 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-emerald-400" strokeWidth={3} />
              </span>
              <p className="text-[15px] font-semibold text-white">{message}</p>
            </div>
          ) : (
            <form
              onSubmit={submit}
              className="flex flex-col sm:flex-row items-stretch gap-2 rounded-2xl bg-white p-2 shadow-[0_8px_30px_rgba(2,6,23,0.25)]"
            >
              <div className="flex items-center gap-2.5 flex-1 px-4">
                <Mail className="h-4 w-4 text-slate-400 flex-shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent py-3 text-[15px] font-medium text-obsidian placeholder:text-slate-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand px-6 py-3.5 text-[14px] font-bold text-white hover:bg-brand-bright transition-colors whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting…" : "Start a Free Trial"}
                {status !== "loading" && <ArrowUpRight className="h-4 w-4" />}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-2.5 pl-1 text-[13px] font-semibold text-red-300">{message}</p>
          )}

          {status !== "success" && (
            <div className="flex flex-wrap items-center gap-x-7 gap-y-2 mt-4 pl-1">
              {["14 days free trial", "Cancel any time", "No card required"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white/55">
                  <Check className="h-3.5 w-3.5 text-emerald-400" strokeWidth={3} />
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function FinalCTA() {
  return (
    <FullWidthSection
      tone="brand"
      compact
      className="relative overflow-hidden"
      innerClassName="relative z-10 py-20 md:py-24"
    >
      {/* Amber accent glow — reference-style */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#F39A09]/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-white/10 blur-[80px] rounded-full pointer-events-none" />

      <ScrollReveal>
        <div className="text-center">
          <span className="inline-block text-[11px] font-black uppercase tracking-[0.32em] text-white/70 mb-5">
            Get Started
          </span>
          <h2 className="text-[36px] md:text-[52px] lg:text-[60px] font-extrabold text-white leading-[1.04] tracking-[-0.04em] mb-5 max-w-[720px] mx-auto">
            Your site could be running at static speed today.
          </h2>
          <p className="text-[17px] text-white/65 leading-relaxed mb-10 font-medium max-w-[460px] mx-auto">
            Install a plugin. Flip a toggle. Every page loads before PHP even boots. No rebuild, no migration, no new workflow to learn.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-[#F39A09] text-obsidian px-9 py-4 text-[15px] font-black hover:bg-[#ffb347] transition-colors group"
            >
              View Products
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 text-white px-9 py-4 text-[15px] font-bold hover:bg-white/15 transition-colors"
            >
              <Mail className="h-4 w-4 opacity-70" />
              Talk to us
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Free trial banner — bottom of Get Started */}
      <ScrollReveal delay={0.15}>
        <div className="mt-14 md:mt-16 max-w-[1100px] mx-auto">
          <FreeTrialBanner />
        </div>
      </ScrollReveal>
    </FullWidthSection>
  );
}
