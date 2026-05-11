"use client";

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const compatibility = [
  { name: 'Elementor', category: 'Page Builders', note: 'Full Pro support + CSS priming' },
  { name: 'Gutenberg', category: 'Page Builders', note: 'Native block editor' },
  { name: 'Bricks', category: 'Page Builders', note: 'Fully captured and served' },
  { name: 'Oxygen', category: 'Page Builders', note: 'Tested and verified' },
  { name: 'WooCommerce', category: 'E-commerce', note: 'Cart & checkout pass-through' },
  { name: 'Easy Digital Downloads', category: 'E-commerce', note: 'Static storefront delivery' },
  { name: 'Apache', category: 'Web Servers', note: 'drop-in via .htaccess fallback' },
  { name: 'Nginx', category: 'Web Servers', note: 'Primary recommended server' },
  { name: 'LiteSpeed', category: 'Web Servers', note: 'LSAPI + drop-in compatible' },
  { name: 'IIS', category: 'Web Servers', note: 'Windows hosting supported' },
  { name: 'Cloudflare', category: 'CDN & Platforms', note: 'Edge-cache header compatible' },
  { name: 'Azure Static Web Apps', category: 'CDN & Platforms', note: 'Static output ready' },
  { name: 'Vercel Edge Network', category: 'CDN & Platforms', note: 'CDN-optimised headers' },
  { name: 'Cloudways', category: 'CDN & Platforms', note: 'Managed hosting tested' },
];

const categories = ['All', ...Array.from(new Set(compatibility.map((c) => c.category)))];

export function CompatibilitySection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? compatibility
      : compatibility.filter((c) => c.category === activeCategory);

  return (
    <section className="bg-[#F8FAFC] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
            Compatibility
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 lg:text-5xl">
            Works With The Tools You Already Use
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            No rebuild required. No new stack to learn. Full compatibility with
            your existing WordPress setup.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-950 text-white'
                    : 'border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Compatibility grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {filtered.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 hover:border-[#1A3FD8] hover:shadow-md transition-all"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-emerald-500 group-hover:text-emerald-600 transition-colors"
                />
                <div>
                  <p className="font-semibold text-slate-950">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-slate-400"
        >
          Don&apos;t see your stack? Nexora Engine works with any WordPress-compatible
          host or server.
        </motion.p>
      </div>
    </section>
  );
}
