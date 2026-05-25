import { ArrowUpRight, Twitter, Facebook, Youtube, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const footerLinks = {
    Products: [
      { label: 'Nexora Engine', href: '/products/nexora-engine' },
      { label: 'Nexora Media', href: '/products/nexora-media' },
      { label: 'Insights Hub', href: '/products/nexora-insights' },
      { label: 'Auralogics Portal', href: '/portal' },
    ],
    Resources: [
      { label: 'Getting Started', href: '/nexora-engine/docs/getting-started' },
      { label: 'Documentation', href: '/nexora-engine/docs' },
      { label: 'Feature Request', href: '/nexora-engine/feature-request' },
      { label: 'Support', href: '/nexora-engine/support' },
      { label: 'Live Demo', href: '/nexora-engine/demo' },
    ],
    Company: [
      { label: 'Blog', href: '/blog' },
      { label: 'About', href: '/#about' },
      { label: 'Portal', href: '/portal' },
      { label: 'Privacy Policy', href: 'mailto:hello@auralogicslabs.com?subject=Privacy Policy' },
      { label: 'Terms of Service', href: 'mailto:hello@auralogicslabs.com?subject=Terms of Service' },
    ],
  };

  const socials = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "X" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="w-full bg-obsidian text-white pt-20 pb-10 px-6 sm:px-10 lg:px-16 relative overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-32 mb-32">
          
          {/* Brand Column */}
          <div className="max-w-[480px]">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer">
              <img 
                src="/auralogicslabs.svg" 
                alt="Auralogics Labs" 
                className="h-11 w-auto brightness-0 invert transition-transform group-hover:scale-105" 
              />
            </div>
            <p className="text-[18px] text-white/50 leading-[1.6] font-medium mb-6">
              Invisible infrastructure intelligence for WordPress. Runtime delivery, media optimization, and orchestration — without the rebuild.
            </p>
            <a href="mailto:hello@auralogicslabs.com" className="text-[16px] font-bold text-brand-soft hover:text-white transition-colors flex items-center gap-3">
               hello@auralogicslabs.com
            </a>
          </div>

          {/* Links Grid */}
          <div className="flex gap-20 sm:gap-32">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="min-w-[160px]">
                <h3 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-8">{category}</h3>
                <ul className="space-y-5">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('http') || link.href.startsWith('mailto:') ? (
                        <a
                          href={link.href}
                          {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="group flex items-center text-[16px] font-bold text-white/55 hover:text-brand-soft transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group flex items-center text-[16px] font-bold text-white/55 hover:text-brand-soft transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-[14px] font-bold text-white/35">
            <p className="uppercase tracking-widest">© {new Date().getFullYear()} Auralogics Labs.</p>
            <div className="hidden md:block h-1 w-1 rounded-full bg-white/20" />
            <span className="uppercase tracking-widest">All rights reserved.</span>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a 
                key={social.label} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/8 text-white/50 hover:bg-brand hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
