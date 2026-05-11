import { ArrowUpRight, Twitter, Github, Linkedin, Plus } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Platform: ['Nexora Engine', 'Architecture', 'Performance', 'Security'],
    Resources: ['Documentation', 'System Status', 'GitHub'],
  };

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border bg-white pt-32 pb-16 px-8 lg:px-24 relative overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 lg:gap-32 mb-32">
          
          {/* Brand Column */}
          <div className="max-w-[480px]">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer">
              <img 
                src="/auralogicslabs.svg" 
                alt="Auralogics Labs" 
                className="h-11 w-auto transition-transform group-hover:scale-105" 
              />
            </div>
            <p className="text-[20px] text-text-secondary leading-[1.6] font-medium">
              Infrastructure intelligence for the web you already have. Modern headless performance without the headless rebuild.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex gap-20 sm:gap-32">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="min-w-[160px]">
                <h3 className="text-[11px] font-bold text-obsidian uppercase tracking-[0.2em] mb-8">{category}</h3>
                <ul className="space-y-5">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center text-[16px] font-bold text-text-secondary hover:text-brand transition-colors"
                      >
                        {link}
                        <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-[14px] font-bold text-text-muted">
            <p className="uppercase tracking-widest">© {new Date().getFullYear()} Auralogics Labs.</p>
            <div className="hidden md:block h-1 w-1 rounded-full bg-border-strong" />
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-obsidian transition-colors uppercase tracking-widest">Privacy Policy</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-obsidian transition-colors uppercase tracking-widest">Terms of Service</a>
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
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-surface-soft text-text-muted hover:bg-obsidian hover:text-white hover:-translate-y-1 transition-all duration-300"
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
