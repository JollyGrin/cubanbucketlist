'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from './Logo';
import { InstagramGlyph } from './icons';

const links = [
  { href: '#journal', label: 'Journal' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#vote', label: 'Vote', accent: true },
  { href: '#network', label: 'Our Locals' },
  { href: '#about', label: 'About' },
];

export function Nav() {
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
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-parchment/85 backdrop-blur-md border-b border-ink/10'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
          <Logo />

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-sans text-[13px] uppercase tracking-[0.18em] transition-colors ${
                  l.accent
                    ? 'text-coral hover:text-coral-deep'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                {l.label}
                {l.accent && (
                  <span className="absolute -right-3 -top-1 h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
                )}
              </a>
            ))}
            <a
              href="#newsletter"
              className="rounded-full border-2 border-ink bg-ink px-4 py-2 font-sans text-[12px] uppercase tracking-[0.2em] text-parchment shadow-[3px_3px_0_0_var(--color-coral)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_0_var(--color-coral)]"
            >
              Join Newsletter
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink md:hidden"
            aria-label="Open menu"
          >
            <span className="absolute h-[2px] w-4 -translate-y-[5px] rounded bg-ink" />
            <span className="absolute h-[2px] w-4 translate-y-[5px] rounded bg-ink" />
            <span className="absolute h-[2px] w-2 right-2.5 rounded bg-coral" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm md:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col bg-parchment shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink"
                  aria-label="Close menu"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M6 6 L18 18 M18 6 L6 18" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-5 py-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                    className="group flex items-baseline justify-between border-b border-ink/10 py-3"
                  >
                    <span className="font-display text-3xl tracking-tight">
                      <span className="text-ink-muted">{String(i + 1).padStart(2, '0')}</span>{' '}
                      <span className={l.accent ? 'italic text-coral' : 'text-ink'}>{l.label}</span>
                    </span>
                    <svg className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14 M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto border-t border-ink/10 px-5 py-6">
                <a
                  href="#vote"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-tr from-coral via-coral to-mustard px-5 py-4 text-parchment shadow-[4px_4px_0_0_var(--color-ink)]"
                >
                  <span className="flex items-center gap-3">
                    <InstagramGlyph className="h-5 w-5" />
                    <span className="flex flex-col leading-tight">
                      <span className="font-display text-lg font-semibold">Vote on what’s next</span>
                      <span className="text-[11px] uppercase tracking-[0.2em] opacity-90">Sign in with Instagram</span>
                    </span>
                  </span>
                  <span aria-hidden>→</span>
                </a>
                <p className="mt-4 text-center font-hand text-base text-ink-muted">
                  desde la isla, con cariño.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
