"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 h-[2px] bg-[#1A3FD8] transition-none"
      style={{ width: `${progress}%` }}
    />
  );
}

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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl shadow-sm">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/auralogicslabs.svg"
            alt="Auralogics Labs"
            className="h-10 w-auto"
          />
          <span className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 sm:inline-flex">
            Enterprise
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-colors hover:text-slate-950"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-slate-800">
            Get started
          </button>
        </div>

        <button
          className="md:hidden text-slate-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white/95 px-6 py-4 backdrop-blur-xl">
          <nav className="flex flex-col gap-4 text-sm text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-colors hover:text-slate-950"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-3 w-full rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Get started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
