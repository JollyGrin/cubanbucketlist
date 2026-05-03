'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#journal', label: 'Journal' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#vote', label: 'Vote' },
  { href: '#network', label: 'Network' },
  { href: '#about', label: 'About' },
];

export function Nav2() {
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
      <header
        className={`fixed inset-x-0 top-9 z-40 transition-all duration-300 md:top-10 ${
          scrolled ? 'bg-black/55 backdrop-blur-md border-b v2-rule' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-12">
          <a href="#top" className="group flex items-center gap-3 text-[var(--v2-paper)]">
            <span className="v2-display text-2xl italic leading-none">
              C<span className="text-[var(--v2-saffron)]">·</span>B<span className="text-[var(--v2-saffron)]">·</span>L
            </span>
            <span className="hidden flex-col leading-none md:flex">
              <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/55">Cuban</span>
              <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/55">Bucket List</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/65 transition-colors hover:text-[var(--v2-saffron)]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#newsletter"
              className="v2-mono text-[10px] uppercase tracking-[0.32em] border border-[var(--v2-saffron)] text-[var(--v2-saffron)] px-3 py-2 transition-colors hover:bg-[var(--v2-saffron)] hover:text-black"
            >
              Subscribe →
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-white/30 text-white"
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h18M3 17h18"/></svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 22, stiffness: 200 }}
              className="fixed inset-x-0 top-0 z-50 bg-[var(--v2-ink)] text-[var(--v2-paper)] md:hidden v2-grain"
            >
              <div className="flex items-center justify-between px-5 pt-14 pb-4 border-b v2-rule">
                <span className="v2-display text-2xl italic">C·B·L</span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/30"
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
              </div>
              <nav className="flex flex-col px-5 py-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-baseline justify-between border-b v2-rule py-5"
                  >
                    <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="v2-display text-3xl italic">{l.label}</span>
                  </motion.a>
                ))}
                <a
                  href="#newsletter"
                  onClick={() => setOpen(false)}
                  className="mt-8 inline-flex items-center justify-center border border-[var(--v2-saffron)] py-4 v2-mono text-[11px] uppercase tracking-[0.32em] text-[var(--v2-saffron)]"
                >
                  Subscribe →
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
