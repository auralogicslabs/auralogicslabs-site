"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

/** Parse '22 ms' → { num: 22, suffix: ' ms' }. Returns null for non-numeric values. */
function parseMetric(value: string): { num: number; suffix: string } | null {
  const m = value.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!m) return null;
  return { num: parseFloat(m[1]), suffix: m[2] };
}

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  const parsed = parseMetric(value);

  useEffect(() => {
    if (!parsed || !inView) return;
    const { num, suffix } = parsed;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;
      // Render with correct decimals
      setDisplay(
        Number.isInteger(num)
          ? String(Math.round(current))
          : current.toFixed(1)
      );
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(String(num));
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  if (!parsed) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {display}
      {parsed.suffix}
    </span>
  );
}

const trustMetrics = [
  { value: "22 ms", label: "TTFB on production Nginx" },
  { value: "100%", label: "Static delivery on cache hit" },
  { value: "0", label: "PHP execution on cache hit" },
  { value: "Universal", label: "Apache · Nginx · LiteSpeed · IIS" },
  { value: "Auto", label: "Regeneration on edit" },
  { value: "Native", label: "Elementor · Gutenberg · Bricks" },
];

export function TrustMetrics() {
  return (
    <section className="bg-surface py-12 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-border rounded-[12px] p-6 shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="font-mono text-[24px] font-medium text-text-primary mb-2 tabular-nums">
                <AnimatedValue value={metric.value} />
              </div>
              <div className="text-[14px] text-text-muted leading-[1.5]">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
