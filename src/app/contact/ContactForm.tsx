"use client";

import { useState } from "react";
import { Send, Check, Loader2 } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setError(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <div className="h-14 w-14 rounded-2xl bg-emerald-500/15 border border-emerald-300 flex items-center justify-center mx-auto mb-5">
          <Check className="h-7 w-7 text-emerald-600" strokeWidth={3} />
        </div>
        <h3 className="text-[22px] font-extrabold text-obsidian mb-2">Message sent.</h3>
        <p className="text-[15px] text-text-secondary font-medium max-w-[380px] mx-auto leading-relaxed">
          Thanks for reaching out — we&apos;ve received your message and will get back to you shortly. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] font-medium text-obsidian placeholder:text-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all";

  return (
    <form onSubmit={submit} className="rounded-3xl border border-border bg-white shadow-[0_8px_40px_rgba(2,6,23,0.05)] p-7 md:p-9 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-bold text-obsidian mb-2">Name</label>
          <input type="text" required value={form.name} onChange={update("name")} placeholder="Jane Doe" className={inputClass} />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-obsidian mb-2">Email</label>
          <input type="email" required value={form.email} onChange={update("email")} placeholder="jane@company.com" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-bold text-obsidian mb-2">Subject</label>
        <input type="text" value={form.subject} onChange={update("subject")} placeholder="How can we help?" className={inputClass} />
      </div>
      <div>
        <label className="block text-[13px] font-bold text-obsidian mb-2">Message</label>
        <textarea required rows={5} value={form.message} onChange={update("message")} placeholder="Tell us about your site, your stack, or what you're trying to solve…" className={`${inputClass} resize-y min-h-[120px]`} />
      </div>

      {status === "error" && (
        <p className="text-[14px] font-semibold text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 text-[15px] font-bold text-white hover:bg-brand-bright transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
