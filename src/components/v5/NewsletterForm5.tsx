'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MagneticChromeBtn } from './primitives';

export function NewsletterForm5() {
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
            className="v5-iridescent-border"
          >
            <div className="flex items-stretch gap-0 rounded-[14px] bg-white p-1.5">
              <input
                type="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent px-4 py-3 v5-mono text-base text-[var(--v5-ink)] placeholder:text-[var(--v5-ink)]/40 focus:outline-none"
              />
              <MagneticChromeBtn
                type="submit"
                className="v5-chrome-btn inline-flex items-center gap-2 rounded-[10px] border border-[var(--v5-ink)] px-5 py-3 v5-display text-lg text-[var(--v5-ink)]"
              >
                {state === 'loading' ? '···' : '✦ join'}
              </MagneticChromeBtn>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 18 }}
            className="v5-iridescent-border"
          >
            <div className="flex items-center gap-3 rounded-[14px] bg-white px-5 py-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full v5-iridescent">
                <span className="text-[var(--v5-ink)]">✓</span>
              </span>
              <span className="v5-display text-2xl text-[var(--v5-ink)]">¡en la lista!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-3 v5-mono text-base uppercase text-[var(--v5-ink)]/65">
        ✦ free · twice a month · no spam ✦
      </p>
    </form>
  );
}
