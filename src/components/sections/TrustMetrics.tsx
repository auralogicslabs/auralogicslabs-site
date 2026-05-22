"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 22,  suffix: "ms", label: "Avg. time to first byte",    color: "#60A5FA" },
  { value: 100, suffix: "%",  label: "Pages served from cache",     color: "#34D399" },
  { value: 70,  suffix: "%",  label: "Reduction in image payload",  color: "#A78BFA", prefix: "↓" },
  { value: 500, suffix: "+",  label: "Active sites on Nexora",      color: "#FCD34D" },
];

function Counter({
  value, suffix, prefix = "", color, active,
}: { value: number; suffix: string; prefix?: string; color: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (value === 0) { setCount(0); return; }
    let start = 0;
    const step = Math.ceil(value / 50);
    const id = setInterval(() => {
      start = Math.min(start + step, value);
      setCount(start);
      if (start >= value) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [active, value]);

  return (
    <span className="font-mono" style={{ color }}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function TrustMetrics() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-obsidian pt-10 pb-16 px-8 lg:px-24">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="flex flex-col items-center text-center lg:px-10"
            >
              <div className="text-[52px] md:text-[64px] font-extrabold leading-none tracking-tight mb-3">
                <Counter {...s} active={active} />
              </div>
              <p className="text-[13px] font-medium text-white/38 leading-snug max-w-[140px]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
