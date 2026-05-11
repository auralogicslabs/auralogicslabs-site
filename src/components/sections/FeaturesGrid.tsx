"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { coreFeatures } from "@/data/features";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  { id: "performance", label: "Performance", featureIds: [1, 3, 5, 13, 15] },
  { id: "security", label: "Security", featureIds: [2, 7, 9] },
  { id: "ecosystem", label: "Ecosystem", featureIds: [4, 8, 10, 11, 12] },
  { id: "operations", label: "Operations", featureIds: [6, 14, 16] },
];

export function FeaturesGrid() {
  const [activeCategory, setActiveCategory] = useState("performance");
  const [isShowingAll, setIsShowingAll] = useState(false);

  const activeCat = categories.find((c) => c.id === activeCategory)!;
  const filtered = isShowingAll 
    ? coreFeatures 
    : coreFeatures.filter((f) => activeCat.featureIds.includes(f.id));

  return (
    <section id="features" className="bg-surface-soft py-32 px-8 lg:px-24 border-y border-border relative overflow-hidden">
      {/* Background Architectural Traits */}
      <Plus className="absolute top-12 left-12 h-5 w-5 text-border-strong opacity-20" />
      <Plus className="absolute bottom-12 right-12 h-5 w-5 text-border-strong opacity-20" />

      <div className="w-full max-w-[1700px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <span className="font-mono text-[11px] font-bold text-brand uppercase tracking-widest mb-4 block">Capabilities</span>
              <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] leading-[1.1]">
                Every layer of the platform.
              </h2>
            </div>
            
            <div className={`flex flex-wrap gap-2 bg-white border border-border p-1.5 rounded-xl shadow-sm transition-all duration-500 ${isShowingAll ? 'opacity-30 pointer-events-none scale-95' : 'opacity-100'}`}>
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-lg px-5 py-2.5 text-[13px] font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-obsidian text-white shadow-md"
                        : "text-text-muted hover:text-obsidian hover:bg-surface-soft"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((feature, index) => (
              <motion.div
                key={feature.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="group relative bg-white border border-border rounded-[24px] p-10 transition-all duration-500 hover:shadow-[0_32px_64px_rgba(2,6,23,0.12)] hover:-translate-y-2 hover:border-brand/40"
              >
                <Plus className="absolute top-6 right-6 h-4 w-4 text-border-strong opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center mb-8 group-hover:bg-obsidian group-hover:border-obsidian transition-all duration-500">
                    <feature.icon className="h-6 w-6 text-brand group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-[22px] font-bold text-obsidian mb-4 tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-[16px] text-text-secondary leading-[1.6] font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 flex flex-col items-center gap-6">
          <button 
            onClick={() => setIsShowingAll(!isShowingAll)}
            className="group flex flex-col items-center gap-4 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-border group-hover:w-24 group-hover:bg-brand transition-all duration-500" />
              <span className="text-[12px] font-mono font-bold text-text-muted group-hover:text-obsidian tracking-[0.2em] uppercase">
                {isShowingAll ? 'Collapse technical view' : `Explore all ${coreFeatures.length} technical capabilities`}
              </span>
              <div className="h-px w-16 bg-border group-hover:w-24 group-hover:bg-brand transition-all duration-500" />
            </div>
            
            <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center bg-white shadow-sm group-hover:border-brand group-hover:shadow-lg transition-all duration-300">
              {isShowingAll ? (
                <ChevronUp className="h-5 w-5 text-text-muted group-hover:text-brand" />
              ) : (
                <ChevronDown className="h-5 w-5 text-text-muted group-hover:text-brand animate-bounce" />
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
