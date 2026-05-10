import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Developers', href: '#developers' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2E8F0] bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1A3FD8]">
              <span className="font-semibold text-white">A</span>
            </div>
            <span className="font-semibold text-[#0F172A]">Auralogics Labs</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-[#475569] hover:text-[#1A3FD8] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="rounded-lg bg-[#1A3FD8] px-4 py-2 text-sm font-medium text-white hover:bg-[#2563EB] transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-[#0F172A]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E2E8F0] py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#475569] hover:text-[#1A3FD8] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-2 w-full rounded-lg bg-[#1A3FD8] px-4 py-2 text-sm font-medium text-white hover:bg-[#2563EB] transition-colors">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
