import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Platform: ['Features', 'Architecture', 'Security', 'Performance'],
    Resources: ['Documentation', 'API Reference', 'Guides', 'Changelog'],
    Developers: ['GitHub', 'API Docs', 'CLI Tools', 'Webhooks'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
  };

  return (
    <footer className="border-t border-[#E2E8F0] bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1A3FD8]">
                <span className="font-semibold text-white">A</span>
              </div>
              <span className="font-semibold text-[#0F172A]">Auralogics Labs</span>
            </div>
            <p className="mt-4 text-sm text-[#64748B] leading-relaxed max-w-sm">
              Modern infrastructure intelligence platform for WordPress. Transform traditional WordPress into a high-performance delivery platform.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] hover:border-[#1A3FD8] hover:text-[#1A3FD8] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] hover:border-[#1A3FD8] hover:text-[#1A3FD8] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] text-[#64748B] hover:border-[#1A3FD8] hover:text-[#1A3FD8] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-[#0F172A]">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#64748B] hover:text-[#1A3FD8] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#E2E8F0] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[#64748B]">
              © 2026 Auralogics Labs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-[#64748B] hover:text-[#1A3FD8] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[#64748B] hover:text-[#1A3FD8] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
