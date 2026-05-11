"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

function CountUp({
  to,
  decimals = 0,
}: {
  to: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = to * ease;
      setVal(parseFloat(current.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
    </span>
  );
}

export function TrustMetricsSection() {
  const stats = [
    {
      value: 22,
      suffix: 'ms',
      label: 'TTFB',
      sublabel: 'Time to first byte on cached static delivery',
    },
    {
      value: 99.8,
      decimals: 1,
      suffix: '%',
      label: 'Cache Hit Rate',
      sublabel: 'Requests served without PHP processing',
    },
    {
      value: 0,
      suffix: '',
      label: 'PHP Requests Per Visit',
      sublabel: 'Zero server-side rendering on visitor delivery',
    },
  ];

  return (
    <section className="border-y border-slate-100 bg-white px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl border border-slate-100 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-slate-100">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white px-10 py-10 text-center"
            >
              <p className="text-5xl font-semibold tracking-tight text-slate-950 tabular-nums">
                <CountUp to={stat.value} decimals={stat.decimals ?? 0} />
                <span className="text-3xl text-[#1A3FD8]">{stat.suffix}</span>
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
