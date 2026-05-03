'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'Aviso', tilt: -2 },
  { href: '#experiences', label: 'Tienda', tilt: 1 },
  { href: '#vote', label: 'Vota', tilt: -1 },
  { href: '#network', label: 'Gente', tilt: 2 },
  { href: '#journal', label: 'Diario', tilt: -1.5 },
];

const linkBg = ['bg-[var(--v7-yellow)]', 'bg-[var(--v7-cream)]', 'bg-[var(--v7-coral)] text-[var(--v7-cream)]', 'bg-[var(--v7-blue)] text-[var(--v7-cream)]', 'bg-[var(--v7-cream)]'];

export function Nav7() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-9 z-40 md:top-10">
        <div className="mx-auto max-w-7xl px-3 md:px-6">
          <div className="flex items-center justify-between bg-[var(--v7-cream)] px-3 py-2.5 v7-sign md:px-4 md:py-3" style={{ ['--tilt' as string]: '0deg' }}>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center border-2 border-[var(--v7-ink)] bg-[var(--v7-coral)] text-[var(--v7-cream)] v7-block text-base">CB</span>
              <span className="flex flex-col leading-none">
                <span className="v7-block text-base text-[var(--v7-ink)]">CUBAN</span>
                <span className="v7-brush text-base text-[var(--v7-blue)]">bucket list</span>
              </span>
            </a>

            <nav className="hidden items-center gap-2 md:flex">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`v7-block text-[10px] uppercase tracking-[0.16em] px-3 py-2 border-2 border-[var(--v7-ink)] ${linkBg[i]}`}
                  style={{ transform: `rotate(${l.tilt}deg)` }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#newsletter"
                className="v7-brush text-2xl px-4 py-1.5 border-2 border-[var(--v7-ink)] bg-[var(--v7-yellow)] text-[var(--v7-ink)]"
                style={{ transform: 'rotate(-1deg)' }}
              >
                ¡suscríbete!
              </a>
            </nav>

            <button onClick={() => setOpen(true)} aria-label="Open menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--v7-ink)] bg-[var(--v7-yellow)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 7h16M4 17h16"/></svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)} className="fixed inset-0 z-50 bg-[var(--v7-ink)]/55 md:hidden" />
            <motion.aside
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 220 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col v7-wall-tex md:hidden"
            >
              <div className="relative flex items-center justify-between border-b-4 border-[var(--v7-ink)] bg-[var(--v7-coral)] px-5 pt-14 pb-4">
                <span className="v7-block text-2xl text-[var(--v7-cream)]">MENÚ</span>
                <button onClick={() => setOpen(false)} aria-label="Close" className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--v7-ink)] bg-[var(--v7-cream)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 6l12 12M18 6L6 18"/></svg>
                </button>
              </div>
              <nav className="flex flex-col gap-3 px-5 py-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href} href={l.href} onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                    className={`v7-sign ${linkBg[i]} px-5 py-4 flex items-center justify-between`}
                    style={{ ['--tilt' as string]: `${l.tilt}deg` }}
                  >
                    <span className="v7-brush text-base opacity-65">№ 0{i+1}</span>
                    <span className="v7-block text-3xl">{l.label}</span>
                  </motion.a>
                ))}
                <a href="#newsletter" onClick={() => setOpen(false)}
                  className="v7-sign bg-[var(--v7-yellow)] mt-3 inline-flex items-center justify-center gap-2 px-5 py-5 v7-brush text-3xl text-[var(--v7-ink)]"
                  style={{ ['--tilt' as string]: '-1deg' }}
                >
                  ¡suscríbete aquí!
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
