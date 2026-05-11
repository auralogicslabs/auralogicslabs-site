"use client";

import { motion } from "motion/react";
import { compatibilityData } from "@/data/compatibility";
import { Plus } from "lucide-react";

export function Compatibility() {
  const allIntegrations = [
    ...compatibilityData.builders,
    ...compatibilityData.servers,
    ...compatibilityData.hosts,
    ...compatibilityData.builders, // Duplicate for seamless loop
  ];

  return (
    <section className="bg-white py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Architectural Traits */}
      <Plus className="absolute top-12 left-12 h-5 w-5 text-border-strong opacity-40" />
      <Plus className="absolute bottom-12 right-12 h-5 w-5 text-border-strong opacity-40" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[12px] font-bold uppercase tracking-wider rounded-full mb-6">
            Ecosystem
          </span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] mb-6">
            Drops into the stack you already run.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            Nexora Engine is designed to be invisible. It integrates with your current builders, servers, and infrastructure without requiring a single change to your stack.
          </p>
        </motion.div>

        {/* The Integration Marquee */}
        <div className="relative w-full">
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Container */}
          <div className="flex overflow-hidden group">
            <motion.div 
              className="flex gap-8 py-4"
              animate={{ x: [0, -1035] }} 
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {allIntegrations.map((item, i) => (
                <div 
                  key={`${item.name}-${i}`}
                  className="flex-shrink-0 flex items-center justify-center px-12 py-8 bg-surface-soft border border-border rounded-[24px] transition-all duration-500 hover:border-brand/40 hover:bg-white hover:shadow-2xl group/item"
                >
                  <span className="text-[22px] md:text-[28px] font-bold text-text-muted group-hover/item:text-obsidian transition-all duration-500 tracking-tight grayscale group-hover/item:grayscale-0">
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>
            
            {/* Duplicate for Seamless Loop */}
            <motion.div 
              className="flex gap-8 py-4"
              aria-hidden="true"
              animate={{ x: [0, -1035] }} 
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {allIntegrations.map((item, i) => (
                <div 
                  key={`${item.name}-dup-${i}`}
                  className="flex-shrink-0 flex items-center justify-center px-12 py-8 bg-surface-soft border border-border rounded-[24px] transition-all duration-500 hover:border-brand/40 hover:bg-white hover:shadow-2xl group/item"
                >
                  <span className="text-[22px] md:text-[28px] font-bold text-text-muted group-hover/item:text-obsidian transition-all duration-500 tracking-tight grayscale group-hover/item:grayscale-0">
                    {item.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Secondary Detailed Grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Builders", desc: "Elementor, Gutenberg, Bricks, Breakdance, and more." },
            { title: "CMS Logic", desc: "WooCommerce, ACF, Polylang, and all custom post types." },
            { title: "Web Servers", desc: "Nginx, Apache, LiteSpeed, and any standard PHP runtime." },
            { title: "Cloud", desc: "Cloudflare, BunnyCDN, Vercel, and S3-compatible storage." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[24px] border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="text-brand font-bold text-[11px] uppercase tracking-[0.2em] mb-4 group-hover:translate-x-1 transition-transform">{item.title}</div>
              <div className="text-obsidian text-[16px] font-bold leading-snug">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
