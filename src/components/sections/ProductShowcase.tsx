"use client";

import { motion } from "motion/react";
import { ArrowRight, Zap, ImageIcon, BarChart3, Check } from "lucide-react";
import Link from "next/link";

export function ProductShowcase() {
  return (
    <section
      id="products"
      className="relative bg-obsidian overflow-hidden py-24 md:py-32 px-8 lg:px-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-brand/5 blur-[200px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-700/3 blur-[180px] rounded-full" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-0.5 w-8 bg-brand rounded-full" />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">Our Products</span>
            <div className="h-0.5 w-8 bg-brand rounded-full" />
          </div>
          <h2 className="text-[48px] md:text-[64px] font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-6">
            Infrastructure for every need
          </h2>
          <p className="text-lg text-white/50 max-w-[640px] mx-auto leading-relaxed">
            From WordPress optimization to media delivery and performance intelligence, we have the right solution for your infrastructure challenges.
          </p>
        </motion.div>

        {/* Products grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* Main product - Nexora Engine */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <Link href="/products/nexora-engine" className="group block h-full">
              <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 hover:border-brand/50 transition-all duration-500 bg-gradient-to-br from-slate-900/50 to-transparent backdrop-blur-sm group-hover:shadow-[0_0_80px_rgba(26,63,216,0.4)] group-hover:-translate-y-2 duration-500">
                {/* Product image/demo area */}
                <div className="relative aspect-video md:aspect-auto md:h-[400px] bg-gradient-to-br from-brand/20 via-purple-500/10 to-transparent flex items-center justify-center overflow-hidden">
                  {/* Animated grid background */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <svg width="100%" height="100%" className="w-full h-full">
                      <defs>
                        <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60A5FA" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid1)" />
                    </svg>
                  </div>

                  {/* Product icon */}
                  <div className="relative z-10 text-center">
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-brand/20 border border-brand/40 mb-4 group-hover:bg-brand/30"
                    >
                      <Zap className="w-10 h-10 text-brand" />
                    </motion.div>
                    <p className="text-sm text-white/60 font-medium">WordPress Infrastructure</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-brand transition-colors duration-300">
                    Nexora Engine
                  </h3>
                  <p className="text-white/60 text-lg mb-6 leading-relaxed">
                    Transform your WordPress site with static-speed delivery, hidden fingerprint security, and seamless editor continuity.
                  </p>

                  {/* Free vs Pro teaser */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className="rounded-2xl bg-white/5 border border-white/10 p-4 group-hover:bg-white/8 transition-colors duration-300"
                    >
                      <p className="text-sm font-semibold text-white mb-2">Free</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-white/70">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>1 Site</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-white/70">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Basic Cache</span>
                        </li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className="rounded-2xl bg-brand/10 border border-brand/30 p-4 group-hover:bg-brand/15 transition-colors duration-300"
                    >
                      <p className="text-sm font-semibold text-white mb-2">Pro</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-white/70">
                          <Check className="w-4 h-4 text-brand flex-shrink-0" />
                          <span>Unlimited</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm text-white/70">
                          <Check className="w-4 h-4 text-brand flex-shrink-0" />
                          <span>Advanced</span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.div 
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-2 text-brand font-semibold transition-all duration-300"
                  >
                    Explore Nexora Engine
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary products */}
          <div className="lg:col-span-5 grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            {/* Nexora Media */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/products/nexora-media" className="group block h-full">
                <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 bg-gradient-to-br from-slate-900/50 to-transparent backdrop-blur-sm p-8 group-hover:shadow-[0_0_60px_rgba(168,85,247,0.3)] group-hover:-translate-y-2">
                  {/* Icon area */}
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-500/40 mb-4 group-hover:bg-purple-500/30 transition-colors duration-300"
                  >
                    <ImageIcon className="w-8 h-8 text-purple-400" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    Nexora Media
                  </h3>
                  <p className="text-white/60 text-base mb-6 leading-relaxed">
                    Optimized media delivery. Faster images, videos, and assets globally.
                  </p>

                  <motion.div 
                    whileHover={{ x: 6 }}
                    className="inline-flex items-center gap-2 text-purple-400 font-semibold transition-all duration-300"
                  >
                    Learn more
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>

            {/* Nexora Insights */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/products/nexora-insights" className="group block h-full">
                <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 bg-gradient-to-br from-slate-900/50 to-transparent backdrop-blur-sm p-8 group-hover:shadow-[0_0_60px_rgba(34,211,238,0.3)] group-hover:-translate-y-2">
                  {/* Icon area */}
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 mb-4 group-hover:bg-cyan-500/30 transition-colors duration-300"
                  >
                    <BarChart3 className="w-8 h-8 text-cyan-400" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    Nexora Insights
                  </h3>
                  <p className="text-white/60 text-base mb-6 leading-relaxed">
                    Performance intelligence. Real-time monitoring and actionable insights.
                  </p>

                  <motion.div 
                    whileHover={{ x: 6 }}
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold opacity-60 group-hover:opacity-100 transition-all duration-300"
                  >
                    Coming soon
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* View all products link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-white/50 text-base">
            Explore each product in detail to find the perfect fit for your needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
