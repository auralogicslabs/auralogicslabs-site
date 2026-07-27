import { Check } from 'lucide-react';
import type { ProblemBlock } from '@/types/product';
import { Section } from './Section';

/** "The problem it solves" block. */
export function ProblemSection({ problem, accent }: { problem: ProblemBlock; accent: string }) {
  return (
    <Section eyebrow="Why it matters" title={problem.title}>
      <p className="max-w-2xl text-[17px] leading-relaxed text-text-secondary">{problem.description}</p>
      {problem.points && problem.points.length > 0 && (
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {problem.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-[15px] text-obsidian">
              <Check className="mt-0.5 h-4.5 w-4.5 flex-shrink-0" style={{ width: 18, height: 18, color: accent }} />
              {p}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
