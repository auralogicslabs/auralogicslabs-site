"use client";

import { motion } from "motion/react";
import { useCases } from "@/data/metrics";
import { Users, Building2, Newspaper, Code2 } from "lucide-react";

export function UseCases() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'agencies': return <Users className="h-6 w-6 text-brand" />;
      case 'enterprises': return <Building2 className="h-6 w-6 text-brand" />;
      case 'publishers': return <Newspaper className="h-6 w-6 text-brand" />;
      case 'developers': return <Code2 className="h-6 w-6 text-brand" />;
      default: return null;
    }
  };

  return (
    <section className="bg-surface py-24 px-6 lg:px-12 border-y border-border">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[40px] md:text-[56px] font-semibold text-text-primary tracking-[-0.03em] max-w-[800px] mx-auto leading-[1.1]">
            Built for the teams modernizing WordPress at scale.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-border rounded-[12px] p-8 shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-250 flex flex-col items-start"
            >
              <div className="h-12 w-12 rounded-md bg-surface-soft border border-border flex items-center justify-center mb-6">
                {getIcon(useCase.id)}
              </div>
              <h3 className="text-[24px] font-semibold text-text-primary mb-4">
                {useCase.title}
              </h3>
              <p className="text-[16px] text-text-secondary leading-[1.6]">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
