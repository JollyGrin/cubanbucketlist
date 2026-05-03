'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function NewsletterForm6() {
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
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-0"
          >
            <input
              type="email" required autoComplete="email" placeholder="your@correspondence.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-2 border-[var(--v6-marquee)] bg-transparent px-5 py-3.5 v6-display text-base text-[var(--v6-cream)] placeholder:text-[var(--v6-cream)]/40 focus:outline-none sm:border-r-0 tracking-[0.12em]"
            />
            <button
              type="submit" disabled={state === 'loading'}
              className="relative v6-display tracking-[0.18em] border-2 border-[var(--v6-marquee)] bg-[var(--v6-marquee)] px-6 py-3.5 text-sm text-[var(--v6-night)] hover:bg-[var(--v6-cream)] disabled:opacity-70"
            >
              {state === 'loading' ? '· · ·' : 'RESERVE ✦'}
            </button>
          </motion.div>
        ) : (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 18 }}
            className="flex items-center gap-3 border-2 border-[var(--v6-marquee)] bg-[var(--v6-night-2)] px-5 py-4"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--v6-marquee)] text-[var(--v6-night)]">✓</span>
            <div className="flex flex-col leading-tight">
              <span className="v6-script text-2xl text-[var(--v6-marquee)]">¡bienvenidos!</span>
              <span className="v6-display text-[10px] tracking-[0.32em] text-[var(--v6-cream)]/70">YOUR SEAT IS HELD</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-3 v6-display text-[10px] uppercase tracking-[0.28em] text-[var(--v6-cream)]/60">
        Two acts a month · house rules · cancel anytime
      </p>
    </form>
  );
}
