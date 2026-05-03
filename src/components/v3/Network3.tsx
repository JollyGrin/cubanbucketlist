'use client';

import { motion } from 'framer-motion';
import { network } from '@/lib/data';

const tones = [
  'bg-[var(--v3-pink)] text-white',
  'bg-[var(--v3-yellow)] text-[var(--v3-ink)]',
  'bg-[var(--v3-mint)] text-[var(--v3-ink)]',
  'bg-[var(--v3-orange)] text-white',
  'bg-[var(--v3-blue)] text-white',
  'bg-[var(--v3-lime)] text-[var(--v3-ink)]',
];

const avatarBgs: Record<string, { from: string; to: string }> = {
  teal: { from: '#0E5F5A', to: '#08443F' },
  coral: { from: '#E5613D', to: '#A8462C' },
  mustard: { from: '#D9A445', to: '#B0822A' },
  terracotta: { from: '#A8462C', to: '#7E3320' },
};

export function Network3() {
  return (
    <section id="network" className="relative overflow-hidden border-y-2 border-[var(--v3-ink)] bg-[var(--v3-orange)] py-20 text-white md:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-3 v3-stripes opacity-50" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-3 v3-stripes opacity-50" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-10 flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v3-ink)] bg-[var(--v3-yellow)] px-3 py-1.5 v3-mono text-xs font-bold uppercase tracking-wider text-[var(--v3-ink)]">
            ★ Chapter 06 — The Locals
          </span>
          <h2 className="v3-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.01em] sm:text-7xl md:text-[110px]">
            THE PEOPLE <br />
            BEHIND THE <br />
            <span className="bg-[var(--v3-paper)] px-3 text-[var(--v3-ink)]">MAGIC.</span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {network.map((p, i) => {
            const tone = tones[i % tones.length];
            const av = avatarBgs[p.tone];
            const tilt = (i % 2 === 0 ? -1 : 1) * (1 + (i % 3) * 0.4);
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ transform: `rotate(${tilt}deg)` }}
                whileHover={{ y: -4, rotate: 0 }}
                className={`relative flex flex-col items-center gap-3 rounded-2xl border-2 border-[var(--v3-ink)] p-5 text-center v3-shadow ${tone}`}
              >
                <div
                  className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--v3-ink)]"
                  style={{ background: `linear-gradient(135deg, ${av.from}, ${av.to})` }}
                >
                  <span className="v3-display text-3xl font-black uppercase text-white">{p.initials}</span>
                </div>
                <span className="v3-display text-base font-black uppercase leading-tight">{p.name}</span>
                <span className="v3-mono text-[10px] font-bold uppercase opacity-85">{p.role}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v3-paper)] bg-[var(--v3-ink)] px-5 py-2.5 v3-display text-2xl font-black uppercase text-[var(--v3-yellow)] v3-shadow-sm">
            + 38 MORE LOCALS · 11 PROVINCES
          </span>
        </div>
      </div>
    </section>
  );
}
