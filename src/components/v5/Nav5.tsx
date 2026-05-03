'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'why' },
  { href: '#experiences', label: 'trips' },
  { href: '#vote', label: 'vote' },
  { href: '#network', label: 'locals' },
  { href: '#journal', label: 'mag' },
];

export function Nav5() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-9 z-40 md:top-10">
        <div className="mx-auto max-w-7xl px-3 md:px-6">
          <div className="v5-iridescent-border">
            <div className="flex items-center justify-between rounded-[18px] bg-white/80 px-3 py-2 backdrop-blur md:px-4 md:py-2.5">
              <a href="#top" className="flex items-center gap-2.5">
                <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full v5-iridescent">
                  <span className="absolute inset-[2px] rounded-full bg-white" />
                  <span className="relative v5-display text-base text-[var(--v5-ink)]">cb</span>
                </span>
                <span className="v5-display text-xl text-[var(--v5-ink)]">Cuban<span className="v5-chrome-text">·</span>Bucket<span className="v5-chrome-text">·</span>List</span>
              </a>

              <nav className="hidden items-center gap-1 md:flex">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="group relative rounded-full px-3 py-1.5 v5-mono text-sm uppercase text-[var(--v5-ink)]/80 transition-colors hover:text-[var(--v5-ink)]"
                  >
                    <span className="relative">{l.label}</span>
                    <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--v5-cyan)]/0 via-[var(--v5-magenta)]/0 to-[var(--v5-yellow)]/0 transition-all group-hover:from-[var(--v5-cyan)]/30 group-hover:via-[var(--v5-magenta)]/30 group-hover:to-[var(--v5-yellow)]/30" />
                  </a>
                ))}
                <a
                  href="#newsletter"
                  className="ml-2 v5-chrome-btn inline-flex items-center gap-1.5 rounded-full border border-[var(--v5-ink)] px-4 py-1.5 v5-display text-base text-[var(--v5-ink)]"
                >
                  ✦ join
                </a>
              </nav>

              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--v5-ink)] bg-white"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 17h16"/></svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-[var(--v5-ink)]/40 backdrop-blur md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 220 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col bg-white md:hidden"
            >
              <div className="flex items-center justify-between border-b border-[var(--v5-ink)] bg-white px-5 py-4">
                <span className="v5-display text-2xl text-[var(--v5-ink)]">menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--v5-ink)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
              </div>
              <nav className="flex flex-col gap-2 p-4">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href} href={l.href} onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className="v5-iridescent-border"
                  >
                    <span className="flex items-center justify-between rounded-[14px] bg-white px-5 py-4">
                      <span className="v5-mono text-sm uppercase text-[var(--v5-ink)]/55">0{i+1}</span>
                      <span className="v5-display text-3xl text-[var(--v5-ink)]">{l.label}</span>
                    </span>
                  </motion.a>
                ))}
                <a href="#newsletter" onClick={() => setOpen(false)}
                  className="mt-3 v5-chrome-btn inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--v5-ink)] px-5 py-4 v5-display text-2xl text-[var(--v5-ink)]"
                >
                  ✦ JOIN THE LIST
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
