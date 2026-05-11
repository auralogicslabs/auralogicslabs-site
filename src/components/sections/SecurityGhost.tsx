"use client";

import { motion } from "motion/react";
import { CheckCircle2, Shield, EyeOff, Lock, Code2, ShieldAlert, FileOutput } from "lucide-react";

export function SecurityGhost() {
  const securityFeatures = [
    { text: "Generator meta and version strings stripped", icon: EyeOff },
    { text: "REST API discovery removed from <head>", icon: EyeOff },
    { text: "window.wp namespace cloaked to window.ncx", icon: Code2 },
    { text: "Asset path masking (optional proxy mode)", icon: Shield },
    { text: "HMAC-signed internal capture protocol", icon: Lock },
    { text: "Inline-script malicious-pattern scanning", icon: ShieldAlert },
    { text: "Path-traversal guards on every static lookup", icon: Lock },
    { text: "Atomic file writes with rollback safety", icon: FileOutput },
  ];

  return (
    <section className="bg-bg py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      
      <div className="mx-auto max-w-[1280px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Security through architectural invisibility.
          </h2>
          <p className="max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            The fastest way to defeat a WordPress vulnerability scan is to not look like WordPress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Headers Simulation */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Before Card */}
            <div className="bg-surface border border-border rounded-[12px] overflow-hidden">
              <div className="px-4 py-3 border-b border-border bg-surface-soft">
                <span className="text-[13px] font-medium text-text-secondary">Standard WordPress</span>
              </div>
              <div className="p-6 font-mono text-[13px] text-text-muted space-y-2">
                <div><span className="text-text-primary">Server:</span> Apache/2.4.41</div>
                <div><span className="text-text-primary">X-Powered-By:</span> PHP/8.1.0</div>
                <div><span className="text-text-primary">X-Pingback:</span> https://site.com/xmlrpc.php</div>
                <div className="truncate"><span className="text-text-primary">Link:</span> &lt;https://site.com/wp-json/&gt;; rel="https://api.w.org/"</div>
              </div>
            </div>

            {/* After Card */}
            <div className="bg-white border border-brand/30 rounded-[12px] overflow-hidden shadow-[0_0_24px_rgba(26,63,216,0.08)] relative">
              <div className="absolute top-3 right-4">
                <CheckCircle2 className="h-5 w-5 text-brand" />
              </div>
              <div className="px-4 py-3 border-b border-border bg-brand-tint/30">
                <span className="text-[13px] font-medium text-brand">With Nexora Engine</span>
              </div>
              <div className="p-6 font-mono text-[13px] text-text-secondary space-y-2">
                <div><span className="text-text-primary">server:</span> nginx</div>
                <div><span className="text-text-primary">x-powered-by:</span> Next.js</div>
                <div><span className="text-text-primary">x-nexora-cache:</span> HIT</div>
                <div><span className="text-text-primary">x-nextjs-cache:</span> HIT</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bullets */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 mt-0.5 h-6 w-6 rounded-md bg-surface border border-border flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-3.5 w-3.5 text-text-muted" />
                  </div>
                  <span className="text-[16px] text-text-primary leading-[1.6]">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
