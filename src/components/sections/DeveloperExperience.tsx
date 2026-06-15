"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";

export function DeveloperExperience() {
  const [inView, setInView] = useState(false);
  const [copied, setCopied] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const fullJson = `{
  "verdict": "fast_path_dropin",
  "ttfb_ms": 22,
  "cache_status": "HIT",
  "drop_in": {
    "installed": true,
    "signature": "verified",
    "wp_cache": true
  },
  "snapshots": {
    "total": 33,
    "warnings": 0,
    "last_regen": "2026-05-08T08:06:30Z"
  },
  "server": "nginx/1.26.1"
}`;

  useEffect(() => {
    if (!inView) return;
    
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(fullJson.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullJson.length) {
        clearInterval(intervalId);
      }
    }, 10); // typing speed

    return () => clearInterval(intervalId);
  }, [inView]);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Helper to colorize JSON if it's fully typed out
  const renderCode = () => {
    if (displayedText.length < fullJson.length) {
      return <span className="text-[#E2E8F0]">{displayedText}<span className="animate-pulse">_</span></span>;
    }
    
    return (
      <>
<span className="text-[#94A3B8]">{`{`}</span>{`
  `}<span className="text-brand-soft">"verdict"</span>{`: `}<span className="text-[#16A34A]">"fast_path_dropin"</span>{`,
  `}<span className="text-brand-soft">"ttfb_ms"</span>{`: `}<span className="text-[#F59E0B]">22</span>{`,
  `}<span className="text-brand-soft">"cache_status"</span>{`: `}<span className="text-[#16A34A]">"HIT"</span>{`,
  `}<span className="text-brand-soft">"drop_in"</span>{`: `}<span className="text-[#94A3B8]">{`{`}</span>{`
    `}<span className="text-brand-soft">"installed"</span>{`: `}<span className="text-[#F59E0B]">true</span>{`,
    `}<span className="text-brand-soft">"signature"</span>{`: `}<span className="text-[#16A34A]">"verified"</span>{`,
    `}<span className="text-brand-soft">"wp_cache"</span>{`: `}<span className="text-[#F59E0B]">true</span>{`
  `}<span className="text-[#94A3B8]">{`}`}</span>{`,
  `}<span className="text-brand-soft">"snapshots"</span>{`: `}<span className="text-[#94A3B8]">{`{`}</span>{`
    `}<span className="text-brand-soft">"total"</span>{`: `}<span className="text-[#F59E0B]">33</span>{`,
    `}<span className="text-brand-soft">"warnings"</span>{`: `}<span className="text-[#F59E0B]">0</span>{`,
    `}<span className="text-brand-soft">"last_regen"</span>{`: `}<span className="text-[#16A34A]">"2026-05-08T08:06:30Z"</span>{`
  `}<span className="text-[#94A3B8]">{`}`}</span>{`,
  `}<span className="text-brand-soft">"server"</span>{`: `}<span className="text-[#16A34A]">"nginx/1.26.1"</span>{`
`}<span className="text-[#94A3B8]">{`}`}</span>
      </>
    );
  };

  return (
    <section id="developers" className="bg-bg py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Built for the engineers who maintain it.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Animated Terminal JSON */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => setInView(true)}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0F172A] border border-[#1E293B] rounded-[12px] shadow-elevated overflow-hidden relative group"
          >
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1E293B] bg-[#0B1120]">
              <div className="h-3 w-3 rounded-full bg-[#EF4444] opacity-80" />
              <div className="h-3 w-3 rounded-full bg-[#F59E0B] opacity-80" />
              <div className="h-3 w-3 rounded-full bg-[#10B981] opacity-80" />
              <div className="ml-2 font-mono text-[12px] text-[#64748B]">GET /wp-json/nexora/v1/diagnostic</div>
            </div>

            <button 
              onClick={handleCopy}
              className="absolute top-14 right-4 p-2 rounded-md bg-[#1E293B]/80 text-[#94A3B8] hover:text-white hover:bg-[#1E293B] transition-colors opacity-0 group-hover:opacity-100"
            >
              {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
            </button>

            <div className="p-6 overflow-x-auto min-h-[340px]">
              <pre className="font-mono text-[13px] leading-[1.6]">
                {renderCode()}
              </pre>
            </div>
          </motion.div>

          {/* Right - Bullets */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="space-y-6">
              {[
                { bold: "Single-URL diagnostic endpoint", text: ": full system health in 30 seconds" },
                { bold: "Structured JSON output", text: ": pipe to Datadog, Grafana, or your own dash" },
                { bold: "REST API", text: "for snapshot state and manifest queries" },
                { bold: "Programmatic regeneration", text: "via WP-CLI commands" },
                { bold: "Filterable hooks", text: "for custom invalidation logic" },
                { bold: "Self-contained drop-in", text: ": under 200 lines of audited PHP" },
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                  className="flex items-start text-[16px] text-text-secondary leading-[1.6] group"
                >
                  <div className="mr-4 mt-1.5 h-6 w-6 rounded-md bg-surface border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <Check className="h-3.5 w-3.5 text-text-muted group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span><strong className="text-text-primary font-semibold">{item.bold}</strong> {item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
