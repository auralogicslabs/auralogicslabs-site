import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Mail, Zap, Users, Compass, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Auralogics Labs — Build the Infrastructure Layer for the Web",
  description:
    "We're a small, focused team building the performance and visibility layer web teams have always needed. Starting with WordPress. See who we're looking for and how to get in touch.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Auralogics Labs — Build the Infrastructure Layer for the Web",
    description:
      "Small team. Big problem space. We build drop-in tools that make websites faster, more visible, and easier to operate — starting with WordPress, expanding to every platform.",
    url: "https://auralogicslabs.com/careers",
    type: "website",
  },
};

const principles = [
  {
    icon: Zap,
    title: "Ship things that work",
    desc: "We build focused tools that solve specific problems, not sprawling platforms with a hundred half-finished features. Quality over coverage.",
  },
  {
    icon: Compass,
    title: "Real impact, real fast",
    desc: "Our users feel the difference the moment they install a plugin. We measure success by actual outcomes — TTFB, indexed pages, image payload — not engagement metrics.",
  },
  {
    icon: Users,
    title: "Small team, large surface",
    desc: "Everyone here has a meaningful stake in what we build and ships directly to production. No bureaucracy, no permission layers, no design-by-committee.",
  },
  {
    icon: Code2,
    title: "WordPress today, every platform next",
    desc: "We know WordPress inside out. We're building the infrastructure layer for it now, and we're designing everything to travel to the broader web after.",
  },
];

const areasOfInterest = [
  {
    area: "Backend / PHP",
    desc: "WordPress plugin internals, caching architecture, request interception, PHP performance.",
  },
  {
    area: "Frontend / Next.js",
    desc: "Our portal and marketing site are Next.js. We care deeply about performance and craft here too.",
  },
  {
    area: "DevOps / Infrastructure",
    desc: "Static delivery pipelines, edge caching, Apache/Nginx/LiteSpeed integration, self-hosted infrastructure.",
  },
  {
    area: "SEO & Search Engineering",
    desc: "Search Console API, indexing signals, Core Web Vitals, technical SEO at scale.",
  },
  {
    area: "Product & Design",
    desc: "We want product thinkers who can go from problem to shipped interface. Design taste matters as much as process.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#F4F7FB] border-b border-border pt-36 pb-20 md:pt-44 md:pb-28 px-6 sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#CBD5E1_1px,transparent_0)] bg-[size:48px_48px] opacity-30 pointer-events-none" />
          <div className="absolute -top-24 right-1/4 w-[700px] h-[440px] rounded-full blur-[190px] pointer-events-none" style={{ background: "rgba(26,63,216,0.10)" }} />
          <div className="relative z-10 max-w-[860px] mx-auto">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-5">
              Careers
            </span>
            <h1 className="text-[42px] md:text-[62px] font-extrabold text-obsidian leading-[1.0] tracking-[-0.05em] mb-6">
              Build the infrastructure layer{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(120deg, #1A3FD8 0%, #7C3AED 55%, #13716A 100%)" }}>
                the web has always needed.
              </span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-text-secondary leading-[1.65] font-medium max-w-[640px]">
              We&rsquo;re a small, focused team. We ship drop-in tools that make real sites faster,
              more visible, and easier to operate — starting with WordPress, expanding everywhere.
              If that sounds like the kind of problem you want to spend your time on, read on.
            </p>
          </div>
        </section>

        {/* How we work */}
        <section className="px-6 sm:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-[820px] mx-auto">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4">
              How We Work
            </span>
            <h2 className="text-[30px] md:text-[42px] font-extrabold text-obsidian leading-[1.1] tracking-[-0.035em] mb-6">
              Small team. Serious problem space.
            </h2>
            <div className="space-y-5 text-[17px] md:text-[18px] text-text-secondary leading-[1.75] font-medium">
              <p>
                Auralogics Labs is a small, remote-first team. We don&rsquo;t have layers of
                management or monthly planning ceremonies. We have a clear problem — the web&rsquo;s
                most widely-used platform is too slow, too exposed, and too hard to operate at
                scale — and we&rsquo;re building the tools to fix it.
              </p>
              <p>
                Everyone here ships to production. Everyone talks to users. Everyone has a direct
                line to the problems we&rsquo;re solving. If you need a large team around you to
                feel productive, we&rsquo;re probably not the right fit. If you do your best work
                when you own a problem from concept to live, keep reading.
              </p>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-[#F4F7FB] px-6 sm:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-[1100px] mx-auto">
            <div className="max-w-[640px] mb-14">
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4">
                What We Look For
              </span>
              <h2 className="text-[30px] md:text-[42px] font-extrabold text-obsidian leading-[1.1] tracking-[-0.035em]">
                Principles that matter here.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="bg-white border border-border rounded-3xl p-7 hover:shadow-[0_24px_60px_rgba(2,6,23,0.08)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="text-[18px] font-extrabold text-obsidian mb-2.5">{p.title}</h3>
                    <p className="text-[14px] text-text-secondary leading-[1.65] font-medium">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section className="px-6 sm:px-10 lg:px-16 py-20 md:py-28">
          <div className="max-w-[860px] mx-auto">
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-brand mb-4">
              Open Roles
            </span>
            <h2 className="text-[30px] md:text-[42px] font-extrabold text-obsidian leading-[1.1] tracking-[-0.035em] mb-5">
              No open listings right now.
            </h2>
            <p className="text-[17px] text-text-secondary font-medium leading-[1.75] max-w-[640px] mb-12">
              We&rsquo;re not hiring to a headcount plan. When we grow the team, it&rsquo;s because
              we&rsquo;ve found someone exceptional who makes an obvious case for why we&rsquo;re
              better with them than without. If that&rsquo;s you, the best thing to do is reach out
              directly — tell us what you&rsquo;d work on and why.
            </p>

            <h3 className="text-[20px] font-extrabold text-obsidian mb-5">Areas we care about</h3>
            <div className="space-y-3 mb-12">
              {areasOfInterest.map((a) => (
                <div
                  key={a.area}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
                >
                  <div className="h-2 w-2 rounded-full bg-brand mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="text-[15px] font-extrabold text-obsidian">{a.area}</p>
                    <p className="text-[13px] text-text-secondary font-medium mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="mailto:hello@auralogicslabs.com?subject=General Interest — Careers"
              className="inline-flex items-center gap-3 rounded-2xl bg-brand px-7 py-4 text-[15px] font-bold text-white hover:bg-brand-bright transition-colors group"
            >
              <Mail className="h-4 w-4" />
              Introduce yourself
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="mt-4 text-[13px] text-text-muted font-medium">
              hello@auralogicslabs.com · We read every email.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-obsidian px-6 sm:px-10 lg:px-16 py-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:48px_48px] pointer-events-none" />
          <div className="absolute -top-20 left-1/3 w-[600px] h-[360px] rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(26,63,216,0.20)" }} />
          <div className="relative z-10 max-w-[640px] mx-auto">
            <h2 className="text-[28px] md:text-[40px] font-extrabold text-white leading-[1.1] tracking-[-0.035em] mb-5">
              WordPress today. Any platform tomorrow.
            </h2>
            <p className="text-[16px] text-white/50 font-medium leading-relaxed mb-8 max-w-[480px] mx-auto">
              If you want to work on infrastructure problems that affect millions of sites, we&rsquo;d
              love to hear from you — regardless of whether there&rsquo;s a role listed above.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:hello@auralogicslabs.com?subject=General Interest — Careers"
                className="inline-flex items-center gap-2 rounded-full bg-[#F39A09] text-obsidian px-8 py-4 text-[15px] font-black hover:bg-[#ffb347] transition-colors group"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 text-white px-8 py-4 text-[15px] font-bold hover:bg-white/15 transition-colors"
              >
                Learn about us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
