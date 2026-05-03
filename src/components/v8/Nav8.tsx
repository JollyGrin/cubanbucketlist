'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GoldSeal, TobaccoLeaf } from './Filigree';

const links = [
  { href: '#about', label: 'Etiqueta' },
  { href: '#experiences', label: 'Vitolas' },
  { href: '#vote', label: 'Council' },
  { href: '#network', label: 'Maestros' },
  { href: '#journal', label: 'Tabaquería' },
];

export function Nav8() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-9 z-40 transition-all duration-500 md:top-10 ${
        scrolled ? 'bg-[var(--v8-ivory)]/85 backdrop-blur border-b border-[var(--v8-gold-2)]/40' : ''
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <GoldSeal className="h-10 w-10" label="CB" />
            <div className="flex flex-col leading-none">
              <span className="v8-script v8-gold-text text-3xl leading-none">Cuban</span>
              <span className="v8-display italic text-xs uppercase tracking-[0.32em] text-[var(--v8-crimson)]">— Bucket List —</span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="v8-display text-[10px] uppercase tracking-[0.32em] text-[var(--v8-ink)] hover:text-[var(--v8-crimson)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#newsletter"
              className="v8-display italic text-xs uppercase tracking-[0.18em] px-4 py-2 border border-[var(--v8-gold-2)] bg-gradient-to-b from-[var(--v8-crimson)] to-[var(--v8-crimson-deep)] text-[var(--v8-cream)] hover:from-[var(--v8-crimson-deep)] hover:to-[var(--v8-crimson)]"
            >
              ✦ Suscribirse
            </a>
          </nav>

          <button onClick={() => setOpen(true)} aria-label="Open menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-[var(--v8-gold-2)] bg-[var(--v8-cream)]">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--v8-crimson)]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 17h16"/></svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)} className="fixed inset-0 z-50 bg-[var(--v8-ink)]/65 md:hidden" />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 220 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col v8-paper bg-[var(--v8-cream)] border-l-2 border-[var(--v8-gold-2)] md:hidden"
            >
              <div className="relative flex items-center justify-between border-b-2 border-[var(--v8-gold-2)] bg-gradient-to-b from-[var(--v8-crimson)] to-[var(--v8-crimson-deep)] px-5 pt-14 pb-4">
                <div className="flex items-center gap-2.5">
                  <GoldSeal className="h-9 w-9" label="CB" />
                  <span className="v8-script v8-gold-text text-2xl">Habanos</span>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close" className="inline-flex h-10 w-10 items-center justify-center border border-[var(--v8-gold-2)] bg-[var(--v8-cream)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--v8-crimson)]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
              </div>
              <TobaccoLeaf className="mx-auto mt-3 h-8 w-8 text-[var(--v8-emerald)]" />
              <nav className="flex flex-col px-5 py-4">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href} href={l.href} onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className="flex items-baseline justify-between border-b border-[var(--v8-gold-2)]/30 py-4"
                  >
                    <span className="v8-display italic text-[10px] tracking-[0.32em] text-[var(--v8-crimson)] uppercase">N. {String(i + 1).padStart(2, '0')}</span>
                    <span className="v8-script text-3xl text-[var(--v8-ink)]">{l.label}</span>
                  </motion.a>
                ))}
                <a href="#newsletter" onClick={() => setOpen(false)}
                  className="v8-display italic mt-6 inline-flex items-center justify-center gap-2 border border-[var(--v8-gold-2)] bg-gradient-to-b from-[var(--v8-crimson)] to-[var(--v8-crimson-deep)] py-4 text-base uppercase tracking-[0.18em] text-[var(--v8-cream)]"
                >
                  ✦ Suscribirse al boletín
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
