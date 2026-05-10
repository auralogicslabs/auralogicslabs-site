"use client";

import { motion } from "motion/react";
import { compatibilityData } from "@/data/compatibility";

export function Compatibility() {
  return (
    <section className="bg-bg py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-[1280px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] mb-6">
            Drops into the stack you already run.
          </h2>
          <p className="mx-auto max-w-[720px] text-[18px] text-text-secondary leading-[1.6]">
            No rebuild required. No vendor lock-in. No proprietary host.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {compatibilityData.builders.map((item) => (
                <div key={item.name} className="text-[20px] md:text-[24px] font-semibold text-text-muted hover:text-brand transition-colors cursor-default">
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {compatibilityData.servers.map((item) => (
                <div key={item.name} className="text-[20px] md:text-[24px] font-semibold text-text-muted hover:text-brand transition-colors cursor-default">
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Row 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {compatibilityData.hosts.map((item) => (
                <div key={item.name} className="text-[20px] md:text-[24px] font-semibold text-text-muted hover:text-brand transition-colors cursor-default">
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
