'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'Why' },
  { href: '#experiences', label: 'Trips' },
  { href: '#vote', label: 'Vote' },
  { href: '#network', label: 'Locals' },
  { href: '#journal', label: 'Journal' },
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
      <header className={`fixed inset-x-0 top-9 z-40 transition-all duration-500 md:top-10`}>
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div
            className={`relative flex items-center justify-between rounded-full px-3 py-2 transition-all duration-500 md:px-4 md:py-2.5 ${
              scrolled ? 'v4-glass-strong' : 'v4-glass'
            }`}
          >
            <a href="#top" className="flex items-center gap-2 pl-2 text-[var(--v4-paper)]">
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--v4-violet)] via-[var(--v4-pink)] to-[var(--v4-cyan)]">
                <span className="absolute inset-[2px] rounded-full bg-[var(--v4-bg)]" />
                <span className="relative font-medium text-[10px] tracking-wider">CB</span>
              </span>
              <span className="font-medium tracking-tight">Cuban Bucket List</span>
              <span className="hidden v4-mono text-[10px] uppercase tracking-[0.22em] text-white/45 md:inline">/ membership</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group relative rounded-full px-3 py-1.5 text-[13px] text-white/70 transition-colors hover:text-[var(--v4-paper)]"
                >
                  <span className="relative">{l.label}</span>
                  <span className="absolute inset-0 -z-10 rounded-full bg-white/0 transition-colors group-hover:bg-white/[0.08]" />
                </a>
              ))}
              <a
                href="#newsletter"
                className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-[var(--v4-paper)] px-4 py-1.5 text-[12px] font-medium text-[var(--v4-bg)] transition-transform hover:-translate-y-0.5"
              >
                Join the list <span aria-hidden>↗</span>
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white"
              aria-label="Open menu"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 7h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-[var(--v4-bg)]/80 backdrop-blur-md md:hidden"
            />
            <motion.aside
              initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 22, stiffness: 220 }}
              className="fixed inset-x-0 top-0 z-50 v4-glass-strong px-5 pt-16 pb-8 md:hidden"
            >
              <div className="flex items-center justify-between pb-4">
                <span className="font-medium tracking-tight">Cuban Bucket List</span>
                <button onClick={() => setOpen(false)} aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-between border-t v4-rule py-4"
                  >
                    <span className="v4-mono text-[10px] uppercase tracking-[0.32em] text-white/40">{String(i + 1).padStart(2, '0')}</span>
                    <span className="v4-serif text-3xl italic">{l.label}</span>
                  </motion.a>
                ))}
                <a href="#newsletter" onClick={() => setOpen(false)}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--v4-paper)] px-5 py-3.5 text-sm font-medium text-[var(--v4-bg)]">
                  Join the list ↗
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
