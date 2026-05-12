"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Plus } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Methodology", href: "/#methodology" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Audit", href: "/#audit" },
  { name: "Demo", href: "/demo" },
  { name: "Registry", href: "/#features" },
];

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
      <div 
        className="h-full bg-brand transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 px-8 lg:px-24 ${scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-border/40 shadow-sm' : 'bg-transparent border-transparent'}`}>
      <ScrollProgressBar />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <img 
              src="/auralogicslabs.svg" 
              alt="Auralogics Labs" 
              className="h-10 w-auto transition-transform group-hover:scale-105" 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-bold text-text-secondary hover:text-obsidian transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-border mx-2" />
            <Link 
              href="/portal"
              className="rounded-xl bg-obsidian px-6 py-2.5 text-[14px] font-bold text-white shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Sign In
            </Link>
          </nav>

          <button
            className="md:hidden text-obsidian p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border overflow-hidden bg-white"
            >
              <nav className="flex flex-col gap-6 py-10 px-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    className="text-[20px] font-bold text-obsidian"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-8 mt-4 border-t border-border flex flex-col gap-6">
                   <Link 
                     href="/portal"
                     className="w-full rounded-2xl bg-obsidian py-5 text-center text-[18px] font-bold text-white shadow-xl"
                     onClick={() => setMobileMenuOpen(false)}
                   >
                     Access Portal
                   </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
