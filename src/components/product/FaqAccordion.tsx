'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import type { ProductFaq } from '@/types/product';

export function FaqAccordion({ faqs }: { faqs: ProductFaq[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left text-[16px] font-bold text-obsidian no-underline hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-[15px] leading-relaxed text-text-secondary">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
