import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Zap, Stethoscope, ImageIcon, LayoutDashboard, Target, Compass, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About. Auralogics Labs",
  description:
    "Auralogics Labs builds invisible infrastructure for WordPress: static-speed delivery, SEO intelligence, and media optimization that respect your existing stack. Learn who we are and what we believe.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Compass,
    title: "Drop-in, not rip-out",
    desc: "Every product installs like a normal plugin and respects the WordPress you already run. No headless migrations, no rebuilds, no DevOps projects.",
  },
  {
    icon: Target,
    title: "Real data over vanity metrics",
    desc: "We surface what actually moves the needle: true indexing verdicts, real Core Web Vitals, and measurable payload reductions. Not feel-good scores.",
  },
  {
    icon: Shield,
    title: "Your data stays yours",
    desc: "Connections use your own credentials and run from your own site. We don't proxy your analytics or lock your data behind our servers.",
  },
];

const products = [
  { icon: Zap, name: "Nexora Engine", tagline: "Static-speed delivery", accent: "#1A3FD8", href: "/products/nexora-engine" },
  { icon: Stethoscope, name: "Nexora Pulse", tagline: "SEO operations console", accent: "#13716A", href: "/products/nexora-pulse" },
  { icon: ImageIcon, name: "Nexora Media", tagline: "Edge media optimization", accent: "#7C3AED", href: "/products/nexora-media" },
  { icon: LayoutDashboard, name: "Auralogics Portal", tagline: "Fleet command center", accent: "#F39A09", href: "/portal" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero. light, matches header on subpages */}
        <section className="relative overflow-hidden bg-[#F4F7FB] border-b border-border pt-36 pb-20 md:pt-44 md:pb-28 px-6 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#CBD5E1_1px,transparent_0)] bg-[size:48px_48px] opacity-30 pointer-events-none" />
          <div className="absolute -top-24 left-1/3 w-[700px] h-[440px] rounded-full blur-[190px] pointer-events-none" style={{ background: "rgba(26,63,216,0.10)" }} />
          <div className="absolute -right-24 -bottom-28 w-[420px] h-[420px] opacity-[0.06] pointer-events-none select-none hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/nexora.svg" alt="" className="w-full h-full object-contain" />
          </div>
          <div className="relative z-10 max-w-[920px] mx-auto text-center">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-5">
              About Auralogics Labs
            </span>
            <h1 className="text-[42px] md:text-[64px] font-extrabold text-obsidian leading-[1.0] tracking-[-0.05em] mb-6">
              Invisible infrastructure,{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, #1A3FD8 0%, #7C3AED 55%, #13716A 100%)" }}>
                visible results.
              </span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-text-secondary leading-[1.65] font-medium max-w-[640px] mx-auto">
              We build the layer WordPress was missing. speed, search visibility, and media
              optimization that run quietly in the background, so your team can keep building and
              your visitors never wait.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 sm:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-[820px] mx-auto">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4">Our Mission</span>
            <h2 className="text-[30px] md:text-[42px] font-extrabold text-obsidian leading-[1.1] tracking-[-0.035em] mb-6">
              WordPress powers the web. It deserves modern infrastructure.
            </h2>
            <div className="space-y-5 text-[17px] md:text-[18px] text-text-secondary leading-[1.75] font-medium">
              <p>
                More than 40% of the web runs on WordPress, yet most sites still boot PHP, query a
                database, and run a stack of optimization plugins on every single request. The common
                advice to &ldquo;go headless&rdquo; throws away the editorial workflows, page builders, and
                plugin ecosystems teams depend on.
              </p>
              <p>
                Auralogics Labs exists to close that gap a different way. Instead of replacing
                WordPress, we wrap it in a layer of infrastructure that makes it fast, visible, and
                manageable, without asking you to rebuild anything. Install a plugin, flip it on, and
                it just runs.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#F4F7FB] px-6 sm:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-14">
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4">What We Believe</span>
              <h2 className="text-[30px] md:text-[42px] font-extrabold text-obsidian leading-[1.1] tracking-[-0.035em]">
                Principles behind every product.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-white border border-border rounded-3xl p-7 hover:shadow-[0_24px_60px_rgba(2,6,23,0.08)] hover:-translate-y-1 transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-5">
                    <v.icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-[18px] font-extrabold text-obsidian mb-2.5">{v.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-[1.65] font-medium">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="px-6 sm:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-[1100px] mx-auto">
            <div className="max-w-[640px] mb-12">
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4">The Platform</span>
              <h2 className="text-[30px] md:text-[42px] font-extrabold text-obsidian leading-[1.1] tracking-[-0.035em] mb-4">
                Four focused products, one platform.
              </h2>
              <p className="text-[17px] text-text-secondary font-medium leading-[1.7]">
                Each tool does one thing exceptionally well, and together they cover speed, SEO,
                media, and control for your entire WordPress fleet.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {products.map((p) => (
                <Link key={p.name} href={p.href} className="group flex items-center gap-4 bg-white border border-border rounded-2xl p-5 hover:border-border-strong hover:shadow-[0_16px_40px_rgba(2,6,23,0.07)] transition-all duration-300">
                  <span className="h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.accent}14`, border: `1.5px solid ${p.accent}2e` }}>
                    <p.icon className="h-6 w-6" style={{ color: p.accent }} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[16px] font-extrabold text-obsidian">{p.name}</p>
                    <p className="text-[13px] text-text-muted font-semibold">{p.tagline}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-text-muted group-hover:text-brand group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand px-6 sm:px-10 lg:px-16 py-16 md:py-20 text-center">
          <div className="max-w-[640px] mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-white leading-[1.1] tracking-[-0.035em] mb-5">
              Build on infrastructure that gets out of your way.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-[#F39A09] text-obsidian px-8 py-4 text-[15px] font-black hover:bg-[#ffb347] transition-colors group">
                Explore the platform
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 text-white px-8 py-4 text-[15px] font-bold hover:bg-white/15 transition-colors">
                Talk to us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
