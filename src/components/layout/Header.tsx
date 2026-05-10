"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Platform', href: '#platform' },
    { name: 'Features', href: '#features' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Developers', href: '#developers' },
    { name: 'Vision', href: '#vision' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-white/72 backdrop-blur-[12px] transition-colors">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="flex h-16 md:h-[72px] items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/auralogicslabs.svg" alt="Auralogics Labs" className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
              Sign In
            </a>
            <button className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-bright transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 animate-in slide-in-from-top-4 duration-240 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary hover:text-brand transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-border flex flex-col gap-4">
                <a href="#" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                  Sign In
                </a>
                <button className="w-full rounded-md bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-bright transition-colors">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
