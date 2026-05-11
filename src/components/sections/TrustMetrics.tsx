"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { trustMetrics } from "@/data/metrics";

function AnimatedNumber({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    if (start === end) {
      setCount(end);
      return;
    }
    
    let totalDuration = 1500;
    let incrementTime = (totalDuration / end);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, Math.max(incrementTime, 10));
    
    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <motion.span 
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {count}{suffix}
    </motion.span>
  );
}

export function TrustMetrics() {
  return (
    <section className="bg-white py-12 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:48px_48px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustMetrics.map((metric, index) => {
            const isTTFB = metric.label.includes('TTFB');
            const isPercent = metric.value.includes('%');
            const isZero = metric.value === '0';
            
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-surface-soft/50 border border-border rounded-2xl p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="font-mono text-[32px] font-bold text-obsidian mb-2 tracking-tight flex items-baseline">
                  {isTTFB ? <AnimatedNumber value={22} suffix="ms" /> : 
                   isPercent ? <AnimatedNumber value={100} suffix="%" /> : 
                   isZero ? <AnimatedNumber value={0} suffix="" /> : 
                   metric.value}
                </div>
                <div className="text-[12px] font-bold text-text-muted uppercase tracking-widest leading-[1.5]">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
