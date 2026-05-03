'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function NewsletterForm7() {
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
              type="email" required autoComplete="email" placeholder="tu@correo.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="flex-1 v7-sign bg-[var(--v7-cream)] px-5 py-4 v7-body font-bold text-[var(--v7-ink)] placeholder:font-normal placeholder:opacity-60 focus:outline-none sm:rounded-none sm:border-r-0"
              style={{ ['--tilt' as string]: '0deg' }}
            />
            <button
              type="submit" disabled={state === 'loading'}
              className="v7-sign bg-[var(--v7-coral)] text-[var(--v7-cream)] px-6 py-4 v7-block text-base hover:translate-y-[-2px] transition-transform disabled:opacity-70"
              style={{ ['--tilt' as string]: '0deg' }}
            >
              {state === 'loading' ? '...' : '¡SUSCRÍBETE!'}
            </button>
          </motion.div>
        ) : (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 18 }}
            className="v7-sign bg-[var(--v7-yellow)] flex items-center gap-3 px-5 py-4"
            style={{ ['--tilt' as string]: '-1deg' }}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--v7-ink)] bg-[var(--v7-coral)] text-[var(--v7-cream)] v7-block">✓</span>
            <div className="flex flex-col leading-tight">
              <span className="v7-brush text-3xl text-[var(--v7-ink)]">¡estás dentro!</span>
              <span className="v7-body text-xs uppercase tracking-wider opacity-75 font-bold">primer envío en camino</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-3 v7-body text-xs uppercase tracking-wider font-bold text-[var(--v7-ink)]/75">
        ✺ gratis · dos veces al mes · sin spam
      </p>
    </form>
  );
}
