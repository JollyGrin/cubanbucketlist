'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const versions = [
  { id: 'v1', href: '/', label: 'V1', tag: 'Travel Journal' },
  { id: 'v2', href: '/v2/', label: 'V2', tag: 'Cinematic Noir' },
  { id: 'v3', href: '/v3/', label: 'V3', tag: 'Pop Maximalist' },
];

function activeFor(pathname: string) {
  if (pathname.startsWith('/v3')) return 'v3';
  if (pathname.startsWith('/v2')) return 'v2';
  return 'v1';
}

export function VersionSwitcher() {
  const pathname = usePathname() || '/';
  const active = activeFor(pathname);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-2 z-[60] flex justify-center px-3 md:top-3">
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
      </div>
    </div>
  );
}
