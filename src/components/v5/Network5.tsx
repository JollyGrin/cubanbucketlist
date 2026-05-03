'use client';

import { motion } from 'framer-motion';
import { network } from '@/lib/data';
import { Reveal5 } from './primitives';

const tones = [
  'bg-[var(--v5-cyan)]',
  'bg-[var(--v5-magenta)] text-white',
  'bg-[var(--v5-yellow)]',
  'bg-[var(--v5-mint)]',
  'bg-[var(--v5-violet)]',
  'bg-white',
];

const avatarBgs: Record<string, { from: string; to: string }> = {
  teal: { from: '#0E5F5A', to: '#08443F' },
  coral: { from: '#E5613D', to: '#A8462C' },
  mustard: { from: '#D9A445', to: '#B0822A' },
  terracotta: { from: '#A8462C', to: '#7E3320' },
};

export function Network5() {
  return (
    <section id="network" className="relative overflow-hidden border-y-2 border-[var(--v5-ink)] py-20 md:py-28"
      style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, #FFE9F8 0%, transparent 60%), #FFF7E8' }}
    >
      <div aria-hidden className="absolute inset-x-0 top-0 h-2 v5-iridescent" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-2 v5-iridescent" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal5>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v5-ink)] bg-white px-3 py-1.5 v5-mono text-base uppercase">✦ chapter 06 — the locals</span>
        </Reveal5>
        <Reveal5 delay={0.05}>
          <h2 className="mt-6 v5-display text-5xl leading-[0.85] sm:text-7xl md:text-[120px]">
            <span className="block text-[var(--v5-ink)]">the people</span>
            <span className="block v5-chrome-text">behind</span>
            <span className="block text-[var(--v5-magenta)]">the magic.</span>
          </h2>
        </Reveal5>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {network.map((p, i) => {
            const tone = tones[i % tones.length];
            const av = avatarBgs[p.tone];
            const tilt = (i % 2 === 0 ? -1 : 1) * (1 + (i % 3) * 0.4);
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ transform: `rotate(${tilt}deg)`, boxShadow: '5px 5px 0 0 var(--v5-ink)' }}
                whileHover={{ y: -5, rotate: 0 }}
                className={`relative flex flex-col items-center gap-3 rounded-3xl border-2 border-[var(--v5-ink)] p-5 text-center ${tone}`}
              >
                <div
                  className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--v5-ink)]"
                  style={{ background: `linear-gradient(135deg, ${av.from}, ${av.to})` }}
                >
                  <span className="v5-display text-3xl text-white">{p.initials}</span>
                </div>
                <span className="v5-display text-lg leading-tight">{p.name}</span>
                <span className="v5-mono text-base uppercase opacity-85">{p.role}</span>
              </motion.div>
            );
          })}
        </div>

        <Reveal5 delay={0.15}>
          <div className="mt-12 text-center">
            <span className="v5-chrome-btn inline-flex items-center gap-2 rounded-full border-2 border-[var(--v5-ink)] px-5 py-3 v5-display text-2xl text-[var(--v5-ink)]">
              ✦ + 38 more locals · 11 provinces ✦
            </span>
          </div>
        </Reveal5>
      </div>
    </section>
  );
}
