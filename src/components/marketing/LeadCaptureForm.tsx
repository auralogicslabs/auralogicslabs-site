'use client';

import { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface Props {
  /** Analytics/context label sent with the lead, e.g. "products-page". */
  source: string;
  /** Visual variant: on-dark (banner) or on-light (sections). */
  variant?: 'light' | 'dark';
  placeholder?: string;
  cta?: string;
  className?: string;
  /** Hide the helper note under the field (for tight spots like the hero). */
  hideNote?: boolean;
}

/**
 * Reusable email lead-capture. Posts to /api/subscribe (Resend-backed).
 * Drop it anywhere lead-gen is wanted, banner, product pages, footer.
 */
export function LeadCaptureForm({
  source,
  variant = 'light',
  placeholder = 'you@company.com',
  cta = 'Get updates',
  className,
  hideNote = false,
}: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const dark = variant === 'dark';

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.success) {
        setStatus('error');
        setError(data?.error || 'Something went wrong. Please try again.');
        return;
      }
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setError('Network error. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div
        className={cn(
          'flex items-center gap-2.5 rounded-full border px-5 py-3 text-[14.5px] font-semibold',
          dark ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300' : 'border-emerald-200 bg-emerald-50 text-emerald-700',
          className
        )}
      >
        <Check className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
        You&apos;re on the list, check your inbox to confirm.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn('w-full', className)}>
      <div
        className={cn(
          'flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:border sm:p-1.5',
          dark ? 'sm:border-white/15 sm:bg-white/[0.06]' : 'sm:border-border sm:bg-bg sm:shadow-card'
        )}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          aria-label="Email address"
          className={cn(
            'w-full flex-1 rounded-full border bg-transparent px-5 py-3 text-[15px] outline-none sm:border-transparent',
            dark
              ? 'border-white/15 text-white placeholder:text-white/40'
              : 'border-border text-obsidian placeholder:text-text-muted'
          )}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-[14.5px] font-bold text-white transition-colors hover:bg-brand-bright disabled:opacity-70"
        >
          {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
          {cta}
        </button>
      </div>
      {status === 'error' && (
        <p className={cn('mt-2 px-2 text-[13px] font-medium', dark ? 'text-red-300' : 'text-red-600')}>{error}</p>
      )}
      {!hideNote && (
        <p className={cn('mt-2 px-2 text-[12px]', dark ? 'text-white/40' : 'text-text-muted')}>
          Release notes, tips & early access to Pro. No spam, unsubscribe anytime.
        </p>
      )}
    </form>
  );
}
