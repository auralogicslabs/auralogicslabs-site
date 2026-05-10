"use client";

import { motion } from "motion/react";
import { coreFeatures } from "@/data/features";

export function FeaturesGrid() {
  return (
    <section id="features" className="bg-surface py-24 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em]">
            Every layer of the platform.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-border rounded-[10px] p-6 shadow-card hover:shadow-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <feature.icon className="h-[28px] w-[28px] text-brand mb-4" />
              <h4 className="text-[18px] font-semibold text-text-primary mb-2 line-clamp-1">
                {feature.title}
              </h4>
              <p className="text-[14px] text-text-secondary leading-[1.5] line-clamp-3">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
