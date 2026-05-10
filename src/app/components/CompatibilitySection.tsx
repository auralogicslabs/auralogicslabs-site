"use client";

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function CompatibilitySection() {
  const compatibility = [
    { name: 'Elementor', category: 'Page Builders' },
    { name: 'Gutenberg', category: 'Page Builders' },
    { name: 'WooCommerce', category: 'E-commerce' },
    { name: 'Bricks', category: 'Page Builders' },
    { name: 'Apache', category: 'Web Servers' },
    { name: 'Nginx', category: 'Web Servers' },
    { name: 'LiteSpeed', category: 'Web Servers' },
    { name: 'IIS', category: 'Web Servers' },
    { name: 'Cloudflare', category: 'Platforms' },
    { name: 'Azure', category: 'Platforms' },
    { name: 'Vercel', category: 'Platforms' },
    { name: 'Cloudways', category: 'Platforms' },
  ];

  const categories = Array.from(new Set(compatibility.map((item) => item.category)));

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
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] lg:text-5xl">
            Works With The Tools You Already Use
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            No rebuild required. Full compatibility with your existing stack.
          </p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category}>
              <h3 className="mb-6 text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                {category}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {compatibility
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 hover:border-[#1A3FD8] hover:shadow-md transition-all"
                    >
                      <CheckCircle2 size={20} className="text-[#16A34A] flex-shrink-0" />
                      <span className="font-medium text-[#0F172A]">{item.name}</span>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
