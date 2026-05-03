'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GoldSeal } from './Filigree';

export function NewsletterForm8() {
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
              type="email" required autoComplete="email" placeholder="su@correspondencia.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border border-[var(--v8-gold-2)] bg-[var(--v8-cream)] px-5 py-3.5 v8-body italic text-base text-[var(--v8-ink)] placeholder:text-[var(--v8-ink)]/45 focus:outline-none sm:border-r-0"
            />
            <button
              type="submit" disabled={state === 'loading'}
              className="v8-sheen v8-display italic border border-[var(--v8-gold-2)] bg-gradient-to-b from-[var(--v8-crimson)] to-[var(--v8-crimson-deep)] px-6 py-3.5 text-sm uppercase tracking-[0.2em] text-[var(--v8-cream)] hover:from-[var(--v8-crimson-deep)] hover:to-[var(--v8-crimson)] disabled:opacity-70"
            >
              {state === 'loading' ? '· · ·' : '✦ Suscribirse'}
            </button>
          </motion.div>
        ) : (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 18 }}
            className="flex items-center gap-4 border border-[var(--v8-gold-2)] bg-[var(--v8-cream)] px-5 py-4"
          >
            <GoldSeal className="h-12 w-12 v8-seal-press" label="✓" />
            <div className="flex flex-col leading-tight">
              <span className="v8-script v8-gold-text text-3xl">¡bienvenidos!</span>
              <span className="v8-display italic text-xs uppercase tracking-[0.28em] text-[var(--v8-crimson)]">primer envío en camino</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-3 v8-display italic text-[11px] uppercase tracking-[0.28em] text-[var(--v8-ink)]/60">
        Quincenal · gratuito · cancele en cualquier momento
      </p>
    </form>
  );
}
