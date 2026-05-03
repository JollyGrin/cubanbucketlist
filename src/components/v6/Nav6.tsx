'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DecoChevron } from './Deco';

const links = [
  { href: '#about', label: 'Premise' },
  { href: '#experiences', label: 'Tonight’s Bill' },
  { href: '#vote', label: 'Vote' },
  { href: '#network', label: 'The Cast' },
  { href: '#journal', label: 'Program' },
];

export function Nav6() {
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
      <header className={`fixed inset-x-0 top-9 z-40 transition-all duration-500 md:top-10 ${scrolled ? 'bg-[var(--v6-night)]/80 backdrop-blur border-b v6-rule' : ''}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <DecoChevron className="h-5 w-12 text-[var(--v6-marquee)] v6-flicker" />
            <span className="flex flex-col leading-none">
              <span className="v6-display text-base text-[var(--v6-cream)]">CUBAN BUCKET LIST</span>
              <span className="v6-script text-base text-[var(--v6-rose-gold)]">— a tropical revue —</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href} href={l.href}
                className="v6-display text-[10px] uppercase tracking-[0.32em] text-[var(--v6-cream)]/75 transition-colors hover:text-[var(--v6-marquee)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#newsletter"
              className="v6-display text-[10px] uppercase tracking-[0.28em] text-[var(--v6-night)] bg-[var(--v6-marquee)] px-4 py-2 transition-colors hover:bg-[var(--v6-cream)]"
            >
              ✦ Reserve ✦
            </a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--v6-marquee)]" aria-label="Open menu">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--v6-marquee)]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 17h16"/></svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)} className="fixed inset-0 z-50 bg-[var(--v6-night)]/85 backdrop-blur-sm md:hidden" />
            <motion.aside
              initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 22, stiffness: 200 }}
              className="fixed inset-x-0 top-0 z-50 v6-curtain md:hidden border-b-2 border-[var(--v6-marquee)]"
            >
              <div className="flex items-center justify-between border-b v6-rule px-5 pt-14 pb-4">
                <DecoChevron className="h-5 w-12 text-[var(--v6-marquee)] v6-flicker" />
                <button onClick={() => setOpen(false)} aria-label="Close" className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--v6-marquee)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--v6-marquee)]" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
              </div>
              <nav className="flex flex-col px-5 py-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href} href={l.href} onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                    className="flex items-baseline justify-between border-b v6-rule py-5"
                  >
                    <span className="v6-display text-[10px] tracking-[0.32em] text-[var(--v6-rose-gold)]">ACT {['I','II','III','IV','V'][i]}</span>
                    <span className="v6-display text-2xl text-[var(--v6-cream)]">{l.label}</span>
                  </motion.a>
                ))}
                <a href="#newsletter" onClick={() => setOpen(false)}
                  className="v6-display mt-8 inline-flex items-center justify-center gap-2 bg-[var(--v6-marquee)] px-5 py-4 text-base text-[var(--v6-night)]"
                >
                  ✦ RESERVE A SEAT ✦
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
