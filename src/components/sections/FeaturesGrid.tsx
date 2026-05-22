"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { coreFeatures } from "@/data/features";
import { Plus, ChevronDown, ChevronUp, Cpu, Globe, Zap, Shield, Sparkles, Database, ShieldCheck, BarChart3, CloudLightning, Activity } from "lucide-react";

const categories = [
  { id: "delivery", label: "DELIVERY", featureIds: [1, 2, 3, 4, 5, 10], icon: CloudLightning },
  { id: "security", label: "SECURITY", featureIds: [6, 7, 16], icon: ShieldCheck },
  { id: "intelligence", label: "INTELLIGENCE", featureIds: [8, 9, 11, 12, 18], icon: BarChart3 },
  { id: "automation", label: "AUTOMATION", featureIds: [13, 14, 15, 17], icon: Activity },
];

export function FeaturesGrid() {
  const [activeCategory, setActiveCategory] = useState("delivery");
  const [isShowingAll, setIsShowingAll] = useState(false);

  const activeCat = categories.find((c) => c.id === activeCategory)!;
  const filtered = isShowingAll 
    ? coreFeatures 
    : coreFeatures.filter((f) => activeCat.featureIds.includes(f.id));

  return (
    <section id="features" className="bg-white py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />
      
      <div className="w-full max-w-[1600px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">
            <div className="max-w-[800px]">
               <div className="flex items-center gap-4 mb-8">
                  <div className="h-0.5 w-12 bg-brand" />
                  <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-[0.3em]">Full Registry Explorer</span>
               </div>
              <h2 className="text-[36px] md:text-[50px] lg:text-[62px] font-extrabold text-obsidian tracking-[-0.05em] leading-[1.05]">
                Engineering every layer <br /> 
                of infrastructure.
              </h2>
            </div>
            
            {/* Category Control Panel */}
            <div className={`flex flex-wrap gap-3 bg-surface-soft/50 border border-border p-3 rounded-[32px] backdrop-blur-xl transition-all duration-700 h-fit ${isShowingAll ? 'opacity-30 pointer-events-none scale-95' : 'opacity-100'}`}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                const CatIcon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-[13px] font-bold transition-all duration-500 ${
                      isActive
                        ? "bg-[#050B25] text-white shadow-[0_20px_40px_rgba(2,6,23,0.3)] scale-105"
                        : "text-text-muted hover:text-obsidian hover:bg-white"
                    }`}
                  >
                    <CatIcon size={16} className={isActive ? 'text-brand' : ''} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((feature, index) => (
              <motion.div
                key={feature.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.5, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white border border-border rounded-[48px] p-12 transition-all duration-700 hover:shadow-[0_64px_128px_rgba(2,6,23,0.1)] hover:-translate-y-4 hover:border-brand/30"
              >
                {/* Tier Badge */}
                <div className={`absolute top-10 right-10 px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-widest ${
                   feature.tier === 'Pro' ? 'bg-brand/10 text-brand border border-brand/20' : 'bg-surface-soft text-text-muted border border-border'
                }`}>
                   {feature.tier}
                </div>
                
                <div className="relative z-10">
                  <div className="h-16 w-16 rounded-[24px] bg-brand/5 border border-brand/10 flex items-center justify-center mb-10 group-hover:bg-[#050B25] group-hover:border-brand/40 transition-all duration-500 shadow-sm">
                    <feature.icon className="h-7 w-7 text-brand group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-[20px] font-extrabold text-obsidian mb-4 tracking-tight leading-tight">
                    {feature.title}
                  </h4>
                  <p className="text-[15px] text-text-secondary leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Explorer Button */}
        <div className="mt-20 flex flex-col items-center">
          <button 
            onClick={() => setIsShowingAll(!isShowingAll)}
            className="group relative flex flex-col items-center"
          >
             <div className="mb-8 flex items-center gap-6">
                <div className="h-px w-20 bg-border group-hover:w-32 group-hover:bg-brand transition-all duration-700" />
                <span className="text-[12px] font-mono font-bold text-text-muted group-hover:text-obsidian tracking-[0.4em] uppercase">
                   {isShowingAll ? 'Collapse technical registry' : `Examine entire Registry (x${coreFeatures.length})`}
                </span>
                <div className="h-px w-20 bg-border group-hover:w-32 group-hover:bg-brand transition-all duration-700" />
             </div>
             
             <div className="h-16 w-16 rounded-full border-2 border-border flex items-center justify-center bg-white shadow-xl group-hover:border-brand group-hover:scale-110 transition-all duration-500 overflow-hidden relative">
                {isShowingAll ? (
                  <ChevronUp className="h-6 w-6 text-obsidian relative z-10" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-obsidian relative z-10 animate-bounce" />
                )}
                <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-10 transition-opacity" />
             </div>
          </button>
        </div>
      </div>
    </section>
  );
}
