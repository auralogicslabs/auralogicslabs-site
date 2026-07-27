'use client';

import { motion } from 'motion/react';
import { Globe, Boxes, LayoutDashboard, ChevronDown } from 'lucide-react';
import { siteContainerClass } from '@/lib/site-layout';
import { cn } from '@/app/components/ui/utils';

const layers = [
  {
    icon: Globe,
    tag: 'What you have',
    title: 'Your WordPress site',
    body: 'Your theme, your builder, your plugins, your editors. Nothing gets rebuilt or migrated.',
    accent: false,
  },
  {
    icon: Boxes,
    tag: 'What we add',
    title: 'The Nexora suite',
    body: 'Connected tools for speed, SEO, media and security that share one design and talk to each other.',
    accent: true,
  },
  {
    icon: LayoutDashboard,
    tag: 'How you run it',
    title: 'One place to manage',
    body: 'A single dashboard for every site, so your team has one source of truth instead of a dozen tabs.',
    accent: false,
  },
];

export function PlatformStack() {
  return (
    <section className="border-y border-border bg-surface py-24 sm:py-28">
      <div className={siteContainerClass}>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-brand">How it fits together</span>
          <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-obsidian sm:text-[50px]">
            One platform, layer by layer.
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-text-secondary">
            The suite sits on top of the WordPress you already run and puts everything under one roof. No new
            stack to learn.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          {layers.map((l, i) => {
            const Icon = l.icon;
            return (
              <div key={l.title}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={cn(
                    'flex items-center gap-5 rounded-2xl border p-6 shadow-card',
                    l.accent ? 'border-brand/30 bg-brand-tint' : 'border-border bg-white'
                  )}
                >
                  <span
                    className={cn('flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl', l.accent ? 'bg-brand text-white' : 'bg-surface text-obsidian')}
                    style={l.accent ? { boxShadow: '0 10px 24px -8px rgba(26,63,216,0.5)' } : undefined}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <span className={cn('text-[11px] font-black uppercase tracking-[0.18em]', l.accent ? 'text-brand' : 'text-text-muted')}>
                      {l.tag}
                    </span>
                    <h3 className="mt-0.5 text-[19px] font-black tracking-tight text-obsidian">{l.title}</h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-text-secondary">{l.body}</p>
                  </div>
                </motion.div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-2 text-border-strong">
                    <ChevronDown className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
