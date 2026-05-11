"use client";

import { motion, AnimatePresence } from "motion/react";
import { Edit3, ServerCog, Shield, FileOutput, Zap, ChevronRight, Plus, RefreshCcw } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

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

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false); // Pause auto-play on user interaction
  };

  return (
    <section className="bg-surface-soft py-32 px-8 lg:px-24 border-y border-border overflow-hidden relative">
       {/* Architectural Traits */}
       <Plus className="absolute top-12 left-12 h-5 w-5 text-border-strong opacity-40" />
       <Plus className="absolute bottom-12 right-12 h-5 w-5 text-border-strong opacity-40" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-[12px] font-bold uppercase tracking-wider rounded-full mb-6">
            The Pipeline
          </span>
          <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] mb-6">
            From editor to edge in five steps.
          </h2>
          <p className="text-text-secondary text-[18px] max-w-[700px] mx-auto">
            Click any step to dive deeper into the infrastructure logic.
          </p>
        </motion.div>

        <div className="relative w-full">
          {/* Main Horizontal Timeline Line */}
          <div className="absolute left-0 right-0 top-[48px] h-[2px] bg-border z-0 hidden md:block">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-brand origin-left"
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;

              return (
                <div
                  key={index}
                  className="group flex flex-row md:flex-col items-start md:items-center cursor-pointer relative"
                  onClick={() => handleStepClick(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => !isPast && !isActive && setIsAutoPlaying(true)}
                >
                  {/* Circle and Icon */}
                  <div className="relative">
                    <motion.div 
                      className={`h-[96px] w-[96px] rounded-[32px] flex items-center justify-center transition-all duration-500 border-2 ${
                        isActive 
                          ? 'bg-obsidian border-obsidian shadow-[0_32px_64px_rgba(2,6,23,0.3)]' 
                          : 'bg-white border-border group-hover:border-brand/40 group-hover:shadow-xl'
                      }`}
                      animate={{ 
                        scale: isActive ? 1.1 : 1,
                        y: isActive ? -12 : 0
                      }}
                    >
                      <step.icon className={`h-10 w-10 transition-colors duration-500 ${isActive ? 'text-white' : 'text-text-muted group-hover:text-brand'}`} />
                    </motion.div>
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-4 -right-4 h-10 w-10 rounded-full flex items-center justify-center font-mono text-[14px] font-bold border-2 transition-colors duration-500 shadow-sm ${
                      isActive ? 'bg-brand text-white border-white' : 'bg-white text-text-muted border-border'
                    }`}>
                      {index + 1}
                    </div>

                    {/* Individual Progress Bar (Story Style) */}
                    {isActive && isAutoPlaying && (
                      <div className="absolute -bottom-6 left-0 right-0 h-1.5 bg-border rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-brand"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:mt-12 md:text-center transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-50 md:group-hover:opacity-100 translate-y-4'}`}>
                    <h3 className={`text-[22px] font-bold mb-4 ${isActive ? 'text-obsidian' : 'text-text-secondary'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-[15px] leading-[1.6] font-medium ${isActive ? 'text-text-secondary' : 'text-text-muted'}`}>
                      {step.description}
                    </p>
                    
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mt-6 flex items-center justify-center text-brand text-[12px] font-bold uppercase tracking-widest"
                      >
                        Active Phase <ChevronRight className="h-4 w-4 ml-1" />
                      </motion.div>
                    )}
                  </div>

                  {/* Vertical Line for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[48px] top-[96px] bottom-[-48px] w-[2px] bg-border md:hidden" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Play/Pause Control Hint */}
        <div className="mt-24 flex justify-center">
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-border shadow-sm text-[11px] font-mono font-bold text-text-muted hover:text-brand hover:border-brand transition-all group"
          >
            <div className={`h-2.5 w-2.5 rounded-full ${isAutoPlaying ? 'bg-success animate-pulse' : 'bg-border-strong'}`} />
            {isAutoPlaying ? 'PIPELINE: AUTO-PLAY' : 'PAUSED (CLICK TO RESUME)'}
            <RefreshCcw className={`h-3.5 w-3.5 ml-1 transition-transform duration-500 group-hover:rotate-180`} />
          </button>
        </div>
      </div>
    </section>
  );
}
