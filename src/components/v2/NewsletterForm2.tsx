'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function NewsletterForm2({ id = 'hero' }: { id?: string }) {
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
            key="form"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex items-center gap-0 border-b border-white/30 pb-2 transition-colors focus-within:border-[var(--v2-saffron)]"
          >
            <label className="sr-only" htmlFor={`v2-email-${id}`}>Email</label>
            <input
              id={`v2-email-${id}`}
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent v2-display text-2xl italic text-white placeholder:text-white/35 focus:outline-none"
            />
            <button
              type="submit"
              disabled={state === 'loading'}
              className="v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)] hover:text-white"
            >
              {state === 'loading' ? '· · ·' : 'Subscribe →'}
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-[var(--v2-saffron)] pb-2"
          >
            <span className="v2-display text-2xl italic text-[var(--v2-saffron)]">
              Welcome — check your inbox.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-3 v2-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
        Two dispatches a month · unsubscribe in one tap
      </p>
    </form>
  );
}
