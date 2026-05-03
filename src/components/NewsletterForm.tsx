'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Variant = 'hero' | 'footer';

export function NewsletterForm({ variant = 'hero' }: { variant?: Variant }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === 'loading') return;
    setState('loading');
    // Mock backend
    await new Promise((r) => setTimeout(r, 700));
    setState('done');
  };

  const isHero = variant === 'hero';

  return (
    <form
      onSubmit={onSubmit}
      className={`relative w-full ${isHero ? 'max-w-xl' : 'max-w-2xl'}`}
    >
      <AnimatePresence mode="wait">
        {state !== 'done' ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`flex flex-col gap-2.5 ${isHero ? 'sm:flex-row sm:items-center sm:gap-0' : 'sm:flex-row sm:items-center sm:gap-0'}`}
          >
            <label className="sr-only" htmlFor={`email-${variant}`}>Email address</label>
            <input
              id={`email-${variant}`}
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full flex-1 rounded-2xl border-2 border-ink bg-parchment-50 px-5 py-4 font-sans text-base text-ink placeholder:text-ink-muted focus:outline-none sm:rounded-r-none sm:border-r-0`}
            />
            <button
              type="submit"
              disabled={state === 'loading'}
              className={`group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-coral px-6 py-4 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-parchment shadow-[3px_3px_0_0_var(--color-ink)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_0_var(--color-ink)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--color-ink)] disabled:opacity-70 sm:rounded-l-none sm:border-l-2`}
            >
              {state === 'loading' ? (
                <span className="inline-flex items-center gap-2">
                  <span className="h-3 w-3 animate-spin rounded-full border-2 border-parchment border-t-transparent" />
                  Sending…
                </span>
              ) : (
                <>
                  Subscribe for free
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </>
              )}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 18, stiffness: 220 }}
            className="flex items-center gap-3 rounded-2xl border-2 border-teal bg-teal/5 px-5 py-4"
          >
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-parchment">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold text-teal">¡Bienvenidos!</span>
              <span className="text-sm text-ink-soft">Check your inbox — the first dispatch is on its way.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className={`mt-3 flex items-center gap-2 font-sans text-xs ${isHero ? 'text-parchment/80' : 'text-ink-muted'}`}>
        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-mustard" />
        Free, twice a month. Stories, hidden gems, no spam — unsubscribe in one tap.
      </p>
    </form>
  );
}
