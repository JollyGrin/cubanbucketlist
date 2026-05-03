'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const versions = [
  { id: 'v1', href: '/', label: 'V1', tag: 'Travel Journal' },
  { id: 'v2', href: '/v2/', label: 'V2', tag: 'Cinematic Noir' },
  { id: 'v3', href: '/v3/', label: 'V3', tag: 'Pop Maximalist' },
  { id: 'v4', href: '/v4/', label: 'V4', tag: 'Carta Marina' },
  { id: 'v5', href: '/v5/', label: 'V5', tag: 'Iridescent Chrome' },
  { id: 'v6', href: '/v6/', label: 'V6', tag: 'Tropicana Deco' },
  { id: 'v7', href: '/v7/', label: 'V7', tag: 'Calle Vernacular' },
  { id: 'v8', href: '/v8/', label: 'V8', tag: 'Habano Label' },
];

const dotColors: Record<string, string> = {
  v1: '#E5613D', v2: '#E8A445', v3: '#FF3D7F', v4: '#8C2C24', v5: '#22D3EE', v6: '#E0A878', v7: '#1B4F7A', v8: '#B8860B',
};
const activeBg: Record<string, string> = {
  v1: 'bg-[#E5613D] text-white',
  v2: 'bg-[#E8A445] text-black',
  v3: 'bg-[#FF3D7F] text-white',
  v4: 'bg-[#8C2C24] text-[#E8DDC4]',
  v5: 'bg-gradient-to-r from-[#22D3EE] via-[#FF6BD6] to-[#FFD166] text-black',
  v6: 'bg-[#E0A878] text-black',
  v7: 'bg-[#1B4F7A] text-white',
  v8: 'bg-gradient-to-b from-[#F5D78E] via-[#B8860B] to-[#6B4F1A] text-[#1A0F0A]',
};

const STORAGE_KEY = 'cbl-switcher-hidden';

function activeFor(pathname: string) {
  if (pathname.startsWith('/v8')) return 'v8';
  if (pathname.startsWith('/v7')) return 'v7';
  if (pathname.startsWith('/v6')) return 'v6';
  if (pathname.startsWith('/v5')) return 'v5';
  if (pathname.startsWith('/v4')) return 'v4';
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
                  className={`group relative inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors md:px-3 md:py-1.5 md:text-[11px] md:tracking-[0.2em] ${
                    isActive ? activeBg[v.id] : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{v.label}</span>
                  <span className={`hidden text-[9px] tracking-[0.16em] lg:inline ${isActive ? 'opacity-90' : 'opacity-60'}`}>
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
          {versions.map((v) => (
            <span key={v.id} className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: dotColors[v.id] }} />
          ))}
          <span className="ml-1">Mockups</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
