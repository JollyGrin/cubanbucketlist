'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#journal', label: 'Journal', tone: 'bg-[var(--v3-yellow)]' },
  { href: '#experiences', label: 'Trips', tone: 'bg-[var(--v3-mint)]' },
  { href: '#vote', label: 'Vote', tone: 'bg-[var(--v3-pink)] text-white' },
  { href: '#network', label: 'Locals', tone: 'bg-[var(--v3-orange)] text-white' },
  { href: '#about', label: 'About', tone: 'bg-[var(--v3-blue)] text-white' },
];

export function Nav3() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-9 z-40 md:top-10">
        <div className="mx-auto max-w-[1400px] px-3 md:px-6">
          <div className="flex items-center justify-between rounded-2xl border-2 border-[var(--v3-ink)] bg-[var(--v3-paper)] px-3 py-2.5 v3-shadow-sm md:px-4 md:py-3">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-[var(--v3-ink)] bg-[var(--v3-pink)] text-white v3-display text-2xl font-black leading-none">
                ¡C!
              </span>
              <span className="v3-display text-2xl font-black uppercase leading-none tracking-tight">
                Cuban<br /><span className="text-[var(--v3-pink)]">BUCKET·LIST</span>
              </span>
            </a>

            <nav className="hidden items-center gap-2 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`v3-mono text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg border-2 border-[var(--v3-ink)] ${l.tone} hover:-translate-y-0.5 hover:translate-x-0 transition-transform`}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#newsletter"
                className="v3-display text-base font-black uppercase tracking-wide px-4 py-2 rounded-lg border-2 border-[var(--v3-ink)] bg-[var(--v3-ink)] text-[var(--v3-yellow)] v3-shadow-sm hover:-translate-y-0.5 transition-transform"
              >
                JOIN ★
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[var(--v3-ink)] bg-[var(--v3-yellow)]"
              aria-label="Open menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 7h16M4 17h16"/></svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-[var(--v3-ink)]/60 md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 220 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col bg-[var(--v3-paper)] md:hidden"
            >
              <div className="flex items-center justify-between border-b-2 border-[var(--v3-ink)] bg-[var(--v3-yellow)] px-5 py-4">
                <span className="v3-display text-2xl font-black uppercase">MENU</span>
                <button onClick={() => setOpen(false)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[var(--v3-ink)] bg-[var(--v3-paper)]" aria-label="Close menu">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
              </div>
              <nav className="flex flex-col gap-3 p-5">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className={`v3-display text-3xl font-black uppercase px-5 py-5 rounded-xl border-2 border-[var(--v3-ink)] v3-shadow-sm ${l.tone}`}
                  >
                    {String(i + 1).padStart(2, '0')} · {l.label}
                  </motion.a>
                ))}
                <a
                  href="#newsletter"
                  onClick={() => setOpen(false)}
                  className="v3-display text-2xl font-black uppercase mt-2 px-5 py-5 rounded-xl border-2 border-[var(--v3-ink)] bg-[var(--v3-ink)] text-[var(--v3-yellow)] text-center v3-shadow"
                >
                  JOIN THE LIST ★
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
