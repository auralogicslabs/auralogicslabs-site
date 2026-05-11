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
    if (start === end) return;
    
    let totalDuration = 1500;
    let incrementTime = (totalDuration / end);
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    
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
    <section className="bg-surface py-12 px-6 lg:px-12 border-y border-border relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

      <div className="mx-auto max-w-[1280px] relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustMetrics.map((metric, index) => {
            // Extract numeric part for animation if it's a number-based metric
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
                className="group relative bg-white border border-border rounded-[12px] p-6 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="font-mono text-[28px] font-semibold text-text-primary mb-2 tracking-tight flex items-baseline">
                  {isTTFB ? <AnimatedNumber value={22} suffix=" ms" /> : 
                   isPercent ? <AnimatedNumber value={100} suffix="%" /> : 
                   isZero ? <AnimatedNumber value={0} suffix="" /> : 
                   metric.value}
                </div>
                <div className="text-[14px] text-text-muted leading-[1.5]">
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
