"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Will Elementor still work?',
      answer:
        'Yes! Nexora Engine is fully compatible with Elementor. Your editing experience remains exactly the same. The only difference is that visitors see lightning-fast static delivery instead of slow PHP rendering.',
    },
    {
      question: 'Do I need special hosting?',
      answer:
        'No. Nexora Engine works with any hosting provider that supports WordPress—Apache, Nginx, LiteSpeed, IIS, and more. No special server configurations or expensive hosting upgrades required.',
    },
    {
      question: 'Is this a static export plugin?',
      answer:
        'No. Unlike traditional static export plugins that require rebuilds, Nexora Engine intelligently regenerates only what changes. It preserves dynamic functionality while delivering static-speed performance.',
    },
    {
      question: 'Can I use WooCommerce?',
      answer:
        'Yes. Nexora Engine is compatible with WooCommerce and other e-commerce platforms. Dynamic cart functionality and checkout processes work seamlessly alongside static page delivery.',
    },
    {
      question: 'Is SEO affected?',
      answer:
        'SEO improves dramatically. Search engines favor fast-loading sites. With sub-50ms delivery times and improved Core Web Vitals, your rankings will benefit significantly.',
    },
    {
      question: 'Can I disable it anytime?',
      answer:
        'Absolutely. Nexora Engine is a non-destructive layer. You can toggle it off instantly, and your site returns to traditional WordPress rendering. No data loss, no complications.',
    },
    {
      question: 'Does it support multisite?',
      answer:
        'Multisite support is on our roadmap for 2027. Currently, Nexora Engine is optimized for single WordPress installations with full feature compatibility.',
    },
    {
      question: 'Is it developer-friendly?',
      answer:
        'Very. Nexora Engine provides comprehensive APIs, hooks, diagnostics, and monitoring tools. Developers get full control over delivery, caching, and security without DevOps complexity.',
    },
  ];

  return (
    <section id="faq" className="bg-[#F8FAFC] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-[#0F172A] lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
            Everything you need to know about Nexora Engine
          </p>
        </motion.div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-[#F8FAFC] transition-colors"
              >
                <span className="font-semibold text-[#0F172A]">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[#64748B] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-[#E2E8F0] p-6 pt-4">
                      <p className="text-[#475569] leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
