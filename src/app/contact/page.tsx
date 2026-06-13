import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "./ContactForm";
import { Mail, MessageSquare, LifeBuoy, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Auralogics Labs",
  description:
    "Get in touch with Auralogics Labs. Questions about Nexora Engine, Pulse, Media, or the Portal — our team is here to help.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    icon: Mail,
    title: "Email us",
    desc: "The fastest way to reach the team.",
    action: "hello@auralogicslabs.com",
    href: "mailto:hello@auralogicslabs.com",
  },
  {
    icon: LifeBuoy,
    title: "Product support",
    desc: "Help with Engine, Pulse, Media or Portal.",
    action: "Open support",
    href: "/nexora-engine/support",
  },
  {
    icon: MessageSquare,
    title: "Feature requests",
    desc: "Tell us what you'd like to see next.",
    action: "Submit an idea",
    href: "/nexora-engine/feature-request",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Header band — light, matches header */}
        <section className="relative overflow-hidden bg-[#F4F7FB] border-b border-border pt-36 pb-16 md:pt-44 md:pb-20 px-6 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#CBD5E1_1px,transparent_0)] bg-[size:48px_48px] opacity-30 pointer-events-none" />
          <div className="absolute -top-24 left-1/3 w-[600px] h-[400px] rounded-full blur-[180px] pointer-events-none" style={{ background: "rgba(26,63,216,0.08)" }} />
          <div className="relative z-10 max-w-[860px] mx-auto">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4">
              Contact
            </span>
            <h1 className="text-[40px] md:text-[56px] font-extrabold text-obsidian leading-[1.02] tracking-[-0.045em] mb-5">
              Let&apos;s talk.
            </h1>
            <p className="text-[17px] md:text-[18px] text-text-secondary leading-[1.65] font-medium max-w-[600px]">
              Whether you&apos;re evaluating the platform, need a hand with a product, or just have a
              question — we&apos;d love to hear from you. We typically reply within one business day.
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="px-6 sm:px-10 lg:px-16 py-16 md:py-24">
          <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
            {/* Left — channels */}
            <div>
              <h2 className="text-[22px] font-extrabold text-obsidian mb-2">Other ways to reach us</h2>
              <p className="text-[15px] text-text-secondary font-medium leading-relaxed mb-8">
                Prefer not to use the form? Pick whatever works best.
              </p>
              <div className="space-y-3">
                {channels.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-5 hover:border-border-strong hover:shadow-[0_16px_40px_rgba(2,6,23,0.07)] transition-all duration-300"
                  >
                    <span className="h-11 w-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                      <c.icon className="h-5 w-5 text-brand" />
                    </span>
                    <div>
                      <p className="text-[15px] font-extrabold text-obsidian">{c.title}</p>
                      <p className="text-[13px] text-text-muted font-medium mb-1.5">{c.desc}</p>
                      <p className="text-[13px] font-bold text-brand group-hover:underline">{c.action}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl bg-surface-soft border border-border p-5">
                <Building2 className="h-5 w-5 text-text-muted flex-shrink-0 mt-0.5" />
                <p className="text-[13px] text-text-secondary font-medium leading-relaxed">
                  <span className="font-bold text-obsidian">Auralogics Labs</span><br />
                  Infrastructure intelligence for WordPress.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <h2 className="text-[22px] font-extrabold text-obsidian mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
