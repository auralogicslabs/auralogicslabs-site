import { ArrowUpRight, Twitter, Facebook, Youtube, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const footerLinks = {
    Products: [
      { label: 'Nexora Engine', href: '/products/nexora-engine' },
      { label: 'Nexora Pulse', href: '/products/nexora-pulse' },
      { label: 'Nexora Media', href: '/products/nexora-media' },
      { label: 'Auralogics Portal', href: '/portal' },
      { label: 'All products', href: '/products' },
    ],
    Resources: [
      { label: 'Getting Started', href: '/nexora-engine/docs/getting-started' },
      { label: 'Documentation', href: '/nexora-engine/docs' },
      { label: 'Feature Request', href: '/nexora-engine/feature-request' },
      { label: 'Support', href: '/nexora-engine/support' },
      { label: 'Live Demo', href: '/nexora-engine/demo' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Insights', href: '/insights' },
      { label: 'Portal', href: '/portal' },
      { label: 'Contact', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookies Policy', href: '/cookies' },
    ],
  };

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/auralogicslabs", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/auralogicslabs", label: "X" },
    { icon: Youtube, href: "https://www.youtube.com/@auralogicslabs", label: "YouTube" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/auralogicslabs", label: "LinkedIn" },
  ];

  return (
    <footer className="relative w-full bg-obsidian text-white overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.5), rgba(124,58,237,0.4), transparent)" }} />

      {/* Ambient glows */}
      <div className="absolute -top-24 left-1/4 w-[600px] h-[400px] rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(26,63,216,0.12)" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[360px] rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(124,58,237,0.08)" }} />

      {/* Architectural grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.5)_1px,transparent_0)] bg-[size:64px_64px] opacity-[0.04] pointer-events-none" />

      {/* Oversized N-mark watermark */}
      <div className="absolute -right-24 -bottom-28 w-[460px] h-[460px] opacity-[0.05] pointer-events-none select-none hidden md:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/nexora.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pt-20 md:pt-24 pb-10">
        {/* ── Main grid: brand + 3 link columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 md:pb-20 border-b border-white/[0.08]">
          {/* Brand column */}
          <div className="lg:col-span-5 lg:pr-10">
            <Link href="/" className="inline-flex items-center gap-3 mb-7 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/auralogicslabs.svg"
                alt="Auralogics Labs"
                className="h-10 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>
            <p className="text-[16px] md:text-[17px] text-white/45 leading-[1.65] font-medium max-w-[400px] mb-8">
              We build tools that solve real problems for web teams. The Nexora suite closes
              the performance, SEO, and media gaps your platform leaves open — starting with WordPress.
            </p>

            {/* Email pill */}
            <a
              href="mailto:hello@auralogicslabs.com"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] pl-3.5 pr-5 py-3 hover:border-brand-soft/40 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <span className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(96,165,250,0.14)" }}>
                <Mail className="h-4 w-4 text-brand-soft" />
              </span>
              <span className="text-left">
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">Get in touch</span>
                <span className="block text-[15px] font-bold text-white group-hover:text-brand-soft transition-colors">hello@auralogicslabs.com</span>
              </span>
              <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-brand-soft group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-5">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-[11px] font-black text-white/35 uppercase tracking-[0.22em] mb-6">{category}</h3>
                <ul className="space-y-3.5">
                  {links.map((link) => {
                    const content = (
                      <span className="inline-flex items-center text-[15px] font-semibold text-white/55 hover:text-white transition-colors duration-200 group">
                        <span className="relative">
                          {link.label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full bg-brand-soft transition-all duration-300" />
                        </span>
                        <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-soft" />
                      </span>
                    );
                    const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto:');
                    return (
                      <li key={link.label}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          >
                            {content}
                          </a>
                        ) : (
                          <Link href={link.href}>{content}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-white/35">
            <span>© {new Date().getFullYear()} Auralogics Labs</span>
            <span className="hidden md:block h-1 w-1 rounded-full bg-white/20" />
            <span>All rights reserved</span>
            <span className="hidden md:block h-1 w-1 rounded-full bg-white/20" />
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="h-10 w-10 flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/45 hover:bg-brand hover:border-brand hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
