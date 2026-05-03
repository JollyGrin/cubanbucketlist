'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MagneticButton } from './primitives';

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
            key="form"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="v4-glow-border flex items-center gap-1 rounded-full p-1 v4-glass"
          >
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="you@yourdomain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3 text-[15px] text-[var(--v4-paper)] placeholder:text-white/35 focus:outline-none"
            />
            <MagneticButton
              type="submit"
              className="rounded-full bg-[var(--v4-paper)] px-5 py-3 text-[13px] font-medium text-[var(--v4-bg)] transition-shadow hover:shadow-[0_0_24px_rgba(167,139,250,0.55)]"
            >
              {state === 'loading' ? 'Joining…' : 'Join the list →'}
            </MagneticButton>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 18, stiffness: 220 }}
            className="v4-glow-border rounded-full v4-glass-strong px-5 py-4 flex items-center gap-3"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--v4-cyan)] text-[var(--v4-bg)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <span className="text-sm">You’re in. Welcome dispatch is on its way.</span>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-3 v4-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
        free · twice a month · unsubscribe in one tap
      </p>
    </form>
  );
}
