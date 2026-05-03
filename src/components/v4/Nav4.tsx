'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CompassRose } from './Cartouche';

const links = [
  { href: '#about', label: 'Premise' },
  { href: '#experiences', label: 'Charts' },
  { href: '#vote', label: 'Vote' },
  { href: '#network', label: 'Ports' },
  { href: '#journal', label: 'Logbook' },
];

export function Nav4() {
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
        scrolled ? 'bg-[var(--v4-vellum)]/85 backdrop-blur border-b v4-rule' : ''
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
          <a href="#top" className="flex items-center gap-2.5 text-[var(--v4-ink)]">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--v4-ink)] bg-[var(--v4-vellum)]">
              <CompassRose className="h-5 w-5 text-[var(--v4-ink)]" spinning />
            </span>
            <span className="flex flex-col leading-none">
              <span className="v4-display text-base italic">Cuban Bucket List</span>
              <span className="v4-sc text-[9px] tracking-[0.32em] text-[var(--v4-ink-soft)]">·  N 23° · vol. I  ·</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="v4-sc text-[11px] uppercase tracking-[0.22em] text-[var(--v4-ink-soft)] hover:text-[var(--v4-crimson)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#newsletter"
              className="v4-display inline-flex items-center gap-2 border-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] px-4 py-1.5 italic text-[var(--v4-vellum)] hover:bg-[var(--v4-crimson)] transition-colors"
            >
              Subscribe ✦
            </a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--v4-ink)] bg-[var(--v4-vellum)]" aria-label="Open menu">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 17h16"/></svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-[var(--v4-ink)]/55 md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 220 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col v4-parchment border-l-2 border-[var(--v4-ink)] md:hidden"
            >
              <div className="relative flex items-center justify-between border-b-2 border-[var(--v4-ink)] px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <CompassRose className="h-7 w-7 text-[var(--v4-ink)]" spinning />
                  <span className="v4-display italic text-xl">Cuban Bucket List</span>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close" className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--v4-ink)] bg-[var(--v4-vellum)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
              </div>
              <nav className="flex flex-col px-5 py-6 relative">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href} href={l.href} onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className="flex items-baseline justify-between border-b v4-rule py-4"
                  >
                    <span className="v4-sc text-[10px] tracking-[0.32em] text-[var(--v4-ink-soft)]">CHAP. {String(i + 1).padStart(2, '0')}</span>
                    <span className="v4-display text-3xl italic text-[var(--v4-ink)]">{l.label}</span>
                  </motion.a>
                ))}
                <a href="#newsletter" onClick={() => setOpen(false)}
                  className="v4-display mt-8 inline-flex items-center justify-center gap-2 border-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] py-4 italic text-[var(--v4-vellum)] text-xl"
                >
                  Subscribe to the dispatches ✦
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
