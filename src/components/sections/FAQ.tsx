"use client";

import { motion } from "motion/react";
import { faqData } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, HelpCircle } from "lucide-react";
import Link from "next/link";

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-32 px-8 lg:px-24 border-t border-border relative overflow-hidden flex justify-center">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[size:64px_64px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-[1700px] relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-32"
            >
              <div className="h-12 w-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-8">
                <HelpCircle className="text-brand h-6 w-6" />
              </div>
              <h2 className="text-[40px] md:text-[56px] font-bold text-obsidian tracking-[-0.04em] leading-[1.1] mb-8">
                Answers for <br /> infrastructure <br /> teams.
              </h2>
              <p className="text-[18px] text-text-secondary leading-[1.6] font-medium max-w-[400px]">
                Everything you need to know about the Nexora Engine delivery model and security hardening.
              </p>
              
              <div className="mt-12 p-8 rounded-3xl bg-surface-soft border border-border relative overflow-hidden group">
                <Plus className="absolute top-4 right-4 h-4 w-4 text-border-strong opacity-40 group-hover:rotate-90 transition-transform duration-500" />
                <p className="text-[15px] font-bold text-obsidian mb-2">Still have questions?</p>
                <p className="text-[14px] text-text-secondary mb-6">Our engineering team is available for deep technical consultations.</p>
                <Link href="/nexora-engine/support" className="text-[14px] font-bold text-brand hover:underline">Contact Engineering Support →</Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="border border-border rounded-2xl bg-white px-6 transition-all duration-300 data-[state=open]:shadow-xl data-[state=open]:border-brand/30 overflow-hidden"
                  >
                    <AccordionTrigger className="text-[18px] font-bold text-obsidian text-left py-6 hover:no-underline hover:text-brand transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px] text-text-secondary leading-[1.7] font-medium pb-6 pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
