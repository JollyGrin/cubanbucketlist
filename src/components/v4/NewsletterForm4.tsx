'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WaxSeal } from './Cartouche';

export function NewsletterForm4() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || state === 'loading') return;
    setState('loading');
    await new Promise((r) => setTimeout(r, 700));
    setState('done');
  };

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <AnimatePresence mode="wait">
        {state !== 'done' ? (
          <motion.div
            key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-0"
          >
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="your@correspondence.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-2 border-[var(--v4-ink)] bg-[var(--v4-vellum)] px-5 py-3.5 v4-display italic text-lg text-[var(--v4-ink)] placeholder:text-[var(--v4-ink-soft)]/60 focus:outline-none sm:border-r-0"
            />
            <button
              type="submit"
              disabled={state === 'loading'}
              className="v4-display border-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] px-6 py-3.5 italic text-lg text-[var(--v4-vellum)] transition-colors hover:bg-[var(--v4-crimson)] disabled:opacity-70"
            >
              {state === 'loading' ? '. . .' : 'Subscribe ✦'}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 18 }}
            className="flex items-center gap-4 border-2 border-[var(--v4-ink)] bg-[var(--v4-vellum-2)] px-5 py-4"
          >
            <WaxSeal className="h-12 w-12 v4-seal-press" label="✓" />
            <div className="flex flex-col">
              <span className="v4-display italic text-xl text-[var(--v4-ink)]">Sealed and sent.</span>
              <span className="v4-sc text-[10px] tracking-[0.28em] text-[var(--v4-ink-soft)]">FIRST DISPATCH ON ITS WAY</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-3 v4-sc text-[10px] uppercase tracking-[0.28em] text-[var(--v4-ink-soft)]">
        Twice a month · by post · unsubscribe by reply
      </p>
    </form>
  );
}
