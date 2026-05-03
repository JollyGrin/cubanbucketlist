'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function NewsletterForm3({ tone = 'paper' }: { tone?: 'paper' | 'ink' }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');
  const isInk = tone === 'ink';

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
            key="form"
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            className="flex flex-col gap-2.5 sm:flex-row sm:items-stretch sm:gap-0"
          >
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`flex-1 rounded-xl border-2 border-[var(--v3-ink)] px-5 py-4 v3-mono text-base font-bold placeholder:font-normal placeholder:opacity-60 focus:outline-none sm:rounded-r-none sm:border-r-0 ${
                isInk ? 'bg-[var(--v3-paper)] text-[var(--v3-ink)]' : 'bg-white text-[var(--v3-ink)]'
              }`}
            />
            <button
              type="submit"
              disabled={state === 'loading'}
              className="rounded-xl border-2 border-[var(--v3-ink)] bg-[var(--v3-pink)] px-6 py-4 v3-display text-xl font-black uppercase tracking-wide text-white v3-shadow-sm transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:rounded-l-none"
            >
              {state === 'loading' ? '…' : 'JOIN ★'}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 14 }}
            className="rounded-xl border-2 border-[var(--v3-ink)] bg-[var(--v3-lime)] px-5 py-4 v3-shadow-sm"
          >
            <span className="v3-display text-2xl font-black uppercase">¡EN LA LISTA! ✓</span>
            <p className="v3-mono text-xs font-bold mt-1 opacity-80">First dispatch is on its way.</p>
          </motion.div>
        )}
      </AnimatePresence>
      <p className={`mt-3 v3-mono text-xs font-bold uppercase tracking-wider ${isInk ? 'text-white/70' : 'opacity-70'}`}>
        Free · twice a month · no spam
      </p>
    </form>
  );
}
