"use client";

import { motion } from "motion/react";
import { Zap, Shield, Globe, TrendingUp, Gauge, Layers } from "lucide-react";

export function BrandPromise() {
  const promises = [
    {
      icon: Zap,
      title: "Speed Obsessed",
      description: "Every millisecond matters. We measure performance, optimize relentlessly, and deliver results you can feel.",
      stat: "22ms TTFB",
      color: "#60A5FA",
    },
    {
      icon: Shield,
      title: "Reliability First",
      description: "Infrastructure that works 24/7 so you never have to worry. Built for enterprise-grade demands.",
      stat: "99.99% Uptime",
      color: "#34D399",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Serve your users from anywhere. Our infrastructure handles growth without breaking a sweat.",
      stat: "200+ CDN PoPs",
      color: "#A78BFA",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-slate-50 overflow-hidden py-24 md:py-40 px-8 lg:px-24">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-purple-500/4 blur-[180px] rounded-full" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-emerald-500/4 blur-[150px] rounded-full" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-brand/10 border border-brand/20">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            <span className="text-sm font-semibold text-brand uppercase tracking-wide">Why Auralogics</span>
          </div>
          <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-extrabold text-obsidian leading-[1.05] tracking-[-0.04em] mb-8">
            Your users
            <br />
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-brand via-purple-500 to-brand"
              animate={{ backgroundPosition: ["0% center", "100% center"] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              never wait.
            </motion.span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-[700px] mx-auto leading-relaxed font-medium">
            Auralogics Labs builds infrastructure designed for one purpose: making the web impossibly fast.
          </p>
        </motion.div>

        {/* Promise cards with enhanced design */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full perspective"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white to-slate-100 border border-slate-200/60 group-hover:border-brand/40 transition-all duration-500" />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                  boxShadow: `0 0 60px ${promise.color}20, inset 0 0 40px ${promise.color}08`
                }} />

                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${promise.color}40, transparent)` }} />

                {/* Content */}
                <div className="relative p-10 flex flex-col h-full">
                  {/* Stat badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 + 0.2 }}
                    className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold"
                    style={{ 
                      backgroundColor: `${promise.color}15`,
                      color: promise.color,
                      border: `1px solid ${promise.color}30`
                    }}
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    {promise.stat}
                  </motion.div>

                  {/* Icon with animation */}
                  <div className="mb-8">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 12 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl"
                      style={{
                        background: `${promise.color}15`,
                        border: `2px solid ${promise.color}30`
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: promise.color }} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-obsidian mb-3 group-hover:text-brand transition-colors duration-300">
                    {promise.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed flex-grow text-base">
                    {promise.description}
                  </p>

                  {/* Interactive accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.12 + 0.3 }}
                    className="mt-6 h-1 rounded-full origin-left"
                    style={{
                      background: `linear-gradient(90deg, ${promise.color}, ${promise.color}40, transparent)`
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom insight with rich content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative rounded-3xl bg-gradient-to-r from-brand/10 via-purple-500/5 to-transparent border border-brand/20 p-8 md:p-12 text-center"
        >
          <p className="text-lg md:text-2xl font-bold text-obsidian mb-4">
            Every millisecond matters.
          </p>
          <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
            We've obsessed over every detail to eliminate latency, reduce friction, and deliver infrastructure that keeps your users engaged.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
