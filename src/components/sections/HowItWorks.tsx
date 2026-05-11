"use client";

import { motion } from "motion/react";
import { Edit3, ServerCog, Shield, FileOutput, Zap } from "lucide-react";
import { useState } from "react";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

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
    <section className="bg-surface-soft py-32 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em]">
            From editor to edge in five steps.
          </h2>
        </motion.div>

        <div className="relative max-w-[900px] mx-auto">
          {/* Scroll-Spy Timeline Line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-border md:left-0 md:right-0 md:top-[40px] md:bottom-auto md:h-[2px] md:w-full z-0 overflow-hidden">
            <motion.div 
              className="absolute top-0 bottom-0 left-0 right-0 bg-brand md:left-0 md:bottom-0 md:h-full w-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: (activeStep + 1) / steps.length }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => {
              const isActive = index <= activeStep;
              const isCurrent = index === activeStep;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px" }}
                  onViewportEnter={() => setActiveStep(index)}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex md:flex-col items-start md:items-center relative cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  <div 
                    className={`h-[50px] w-[50px] rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-sm relative transition-all duration-500 ${
                      isActive ? 'bg-brand border-2 border-brand scale-110' : 'bg-white border-2 border-border scale-100'
                    }`}
                  >
                    <span className={`font-mono text-[14px] font-semibold absolute -top-3 -right-2 px-1.5 rounded-sm transition-colors duration-500 ${
                      isActive ? 'text-brand bg-white shadow-sm' : 'text-text-muted bg-surface'
                    }`}>
                      {index + 1}
                    </span>
                    <step.icon className={`h-5 w-5 transition-colors duration-500 ${isActive ? 'text-white' : 'text-text-muted'}`} />
                  </div>
                  
                  <div className={`ml-6 md:ml-0 md:mt-8 md:text-center max-w-[280px] transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                    <h3 className={`text-[18px] font-semibold mb-2 ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-text-secondary leading-[1.6]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
