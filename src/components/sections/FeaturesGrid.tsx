"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { coreFeatures } from "@/data/features";

const categories = [
  {
    id: "performance",
    label: "Performance",
    featureIds: [1, 3, 5, 13, 15],
  },
  {
    id: "security",
    label: "Security",
    featureIds: [2, 7, 9],
  },
  {
    id: "ecosystem",
    label: "Ecosystem",
    featureIds: [4, 8, 10, 11, 12],
  },
  {
    id: "operations",
    label: "Operations",
    featureIds: [6, 14, 16],
  },
];

export function FeaturesGrid() {
  const [activeCategory, setActiveCategory] = useState("performance");

  const activeCat = categories.find((c) => c.id === activeCategory)!;
  const filtered = coreFeatures.filter((f) =>
    activeCat.featureIds.includes(f.id)
  );

  return (
    <section
      id="features"
      className="bg-surface py-24 px-6 lg:px-12 border-y border-border"
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em]">
              Every layer of the platform.
            </h2>
            {/* Category filter tabs */}
            <div className="flex flex-wrap gap-2 md:flex-nowrap md:mb-1">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-md px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-brand text-white shadow-sm"
                        : "bg-white border border-border text-text-muted hover:border-brand/40 hover:text-brand"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Animated feature cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white border border-border rounded-[12px] p-6 shadow-card hover:shadow-hover hover:-translate-y-1 hover:border-brand/30 transition-all duration-300 overflow-hidden"
              >
                {/* Spotlight hover background */}
                <div className="absolute inset-0 bg-brand-tint opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="h-10 w-10 rounded-md bg-surface-soft border border-border flex items-center justify-center mb-5 group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                    <feature.icon className="h-5 w-5 text-brand group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-[18px] font-semibold text-text-primary mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-[14px] text-text-secondary leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Feature count note */}
        <p className="mt-8 text-[13px] text-text-muted text-center">
          {activeCat.featureIds.length} of {coreFeatures.length} capabilities —
          select a category above to explore each layer
        </p>
      </div>
    </section>
  );
}
