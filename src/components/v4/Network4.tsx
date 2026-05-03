'use client';

import { network } from '@/lib/data';
import { BlurReveal } from './primitives';

const tones: Record<string, { from: string; to: string }> = {
  teal: { from: '#0E5F5A', to: '#08443F' },
  coral: { from: '#E5613D', to: '#A8462C' },
  mustard: { from: '#D9A445', to: '#B0822A' },
  terracotta: { from: '#A8462C', to: '#7E3320' },
};

const provinces = ['Havana', 'Trinidad', 'Viñales', 'Santiago', 'Baracoa', 'Cienfuegos', 'Camagüey', 'Granma', 'Holguín', 'Pinar del Río'];

export function Network4() {
  return (
    <section id="network" className="relative border-t v4-rule py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <BlurReveal>
          <span className="v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-violet)]">06 — the network</span>
          <h2 className="mt-3 max-w-3xl text-balance text-4xl font-medium tracking-[-0.02em] md:text-6xl">
            44 locals across 11 provinces. <span className="v4-serif italic font-normal text-[var(--v4-cyan)]">All paid first.</span>
          </h2>
        </BlurReveal>

        {/* Marquee strip */}
        <div className="mt-10 v4-marquee-pause overflow-hidden border-y v4-rule py-4">
          <div className="v4-marquee flex w-max items-center gap-8 whitespace-nowrap text-2xl font-medium text-white/40 md:text-3xl">
            {Array.from({ length: 2 }).map((_, dup) => (
              <span key={dup} className="flex items-center gap-8">
                {provinces.map((p) => (
                  <span key={`${dup}-${p}`} className="flex items-center gap-8">
                    <span className="hover:text-[var(--v4-paper)] transition-colors cursor-default">{p}</span>
                    <span className="text-[var(--v4-violet)]/60">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {network.map((p, i) => {
            const tone = tones[p.tone];
            return (
              <BlurReveal key={p.id} delay={i * 0.05} className="h-full">
                <div className="v4-glass group relative flex h-full flex-col items-center gap-3 rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
                  <div
                    className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full"
                    style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
                  >
                    <span className="text-lg font-medium text-white">{p.initials}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-[var(--v4-paper)]">{p.name}</span>
                    <span className="v4-mono text-[10px] uppercase tracking-[0.22em] text-white/55">{p.role}</span>
                  </div>
                </div>
              </BlurReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
