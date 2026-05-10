"use client";

import { motion } from "motion/react";
import { Edit3, ServerCog, Shield, FileOutput, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Edit3,
      title: "Editor saves a page",
      description: "WordPress fires save_post. Nexora schedules a capture with a 30-second debounce window.",
    },
    {
      icon: ServerCog,
      title: "Capture engine fires",
      description: "An HMAC-signed loopback request renders the page server-side. Elementor CSS is pre-primed before render.",
    },
    {
      icon: Shield,
      title: "Snapshot is sanitized",
      description: "Ghost Protocol strips fingerprints. Inline scripts are scanned. Paths are masked. Nonces are placeholdered.",
    },
    {
      icon: FileOutput,
      title: "Static file written",
      description: "Atomic write to /wp-content/uploads/nexora-static. Manifest updated. Asset references validated against disk.",
    },
    {
      icon: Zap,
      title: "Drop-in serves visitors",
      description: "Next request matches the static file. WordPress never boots. Response delivered in 22 milliseconds.",
    },
  ];

  return (
    <section className="bg-surface-soft py-24 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em]">
            From editor to edge in five steps.
          </h2>
        </motion.div>

        <div className="relative max-w-[900px] mx-auto">
          {/* Timeline Line (Desktop Horizontal, Mobile Vertical) */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-border md:left-0 md:right-0 md:top-[40px] md:bottom-auto md:h-[2px] md:w-full z-0" />
          
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex md:flex-col items-start md:items-center relative"
              >
                <div className="h-[50px] w-[50px] rounded-full bg-white border-2 border-brand flex items-center justify-center flex-shrink-0 z-10 shadow-sm relative">
                  <span className="font-mono text-[14px] font-semibold text-brand absolute -top-3 -right-2 bg-surface px-1.5 rounded-sm">{index + 1}</span>
                  <step.icon className="h-5 w-5 text-text-primary" />
                </div>
                
                <div className="ml-6 md:ml-0 md:mt-6 md:text-center max-w-[280px]">
                  <h3 className="text-[16px] font-semibold text-text-primary mb-2">{step.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-[1.5]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
