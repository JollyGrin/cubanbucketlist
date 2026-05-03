'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const versions = [
  { id: 'v1', href: '/', label: 'V1', tag: 'Travel Journal' },
  { id: 'v2', href: '/v2/', label: 'V2', tag: 'Cinematic Noir' },
  { id: 'v3', href: '/v3/', label: 'V3', tag: 'Pop Maximalist' },
];

const STORAGE_KEY = 'cbl-switcher-hidden';

function activeFor(pathname: string) {
  if (pathname.startsWith('/v3')) return 'v3';
  if (pathname.startsWith('/v2')) return 'v2';
  return 'v1';
}

export function VersionSwitcher() {
  const pathname = usePathname() || '/';
  const active = activeFor(pathname);
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      setHidden(window.localStorage.getItem(STORAGE_KEY) === '1');
    } catch {}
  }, []);

  const setHiddenPersist = (next: boolean) => {
    setHidden(next);
    try {
      if (next) window.localStorage.setItem(STORAGE_KEY, '1');
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  // Avoid hydration flash: render the visible state first, swap on mount.
  const showPill = !mounted || !hidden;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {showPill ? (
        <motion.div
          key="pill"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none fixed inset-x-0 top-2 z-[60] flex justify-center px-3 md:top-3"
        >
          <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/15 bg-black/70 p-1 text-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <span className="hidden pl-3 pr-2 text-[10px] uppercase tracking-[0.22em] text-white/55 md:inline">
              Mockup
            </span>
            {versions.map((v) => {
              const isActive = active === v.id;
              return (
                <Link
                  key={v.id}
                  href={v.href}
                  prefetch={false}
                  className={`group relative inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors md:px-3 md:py-1.5 ${
                    isActive
                      ? v.id === 'v1'
                        ? 'bg-[#E5613D] text-white'
                        : v.id === 'v2'
                          ? 'bg-[#E8A445] text-black'
                          : 'bg-[#FF3D7F] text-white'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{v.label}</span>
                  <span className={`hidden text-[9px] tracking-[0.16em] md:inline ${isActive ? 'opacity-90' : 'opacity-60'}`}>
                    · {v.tag}
                  </span>
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => setHiddenPersist(true)}
              aria-label="Hide version switcher"
              title="Hide"
              className="ml-0.5 mr-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full text-white/55 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6 L18 18 M18 6 L6 18" />
              </svg>
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.button
          key="tab"
          type="button"
          onClick={() => setHiddenPersist(false)}
          aria-label="Show version switcher"
          title="Show mockup switcher"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="fixed right-3 top-3 z-[60] inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white/70 shadow-[0_4px_16px_rgba(0,0,0,0.25)] backdrop-blur-md transition-colors hover:bg-black/75 hover:text-white"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E5613D]" />
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#E8A445]" />
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF3D7F]" />
          <span className="ml-1">Mockups</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
