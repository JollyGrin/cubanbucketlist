'use client';

import { motion } from 'framer-motion';
import { network } from '@/lib/data';

const tones = [
  { bg: 'bg-[var(--v7-yellow)]', fg: 'text-[var(--v7-ink)]' },
  { bg: 'bg-[var(--v7-coral)]', fg: 'text-[var(--v7-cream)]' },
  { bg: 'bg-[var(--v7-blue)]', fg: 'text-[var(--v7-cream)]' },
  { bg: 'bg-[var(--v7-cream)]', fg: 'text-[var(--v7-ink)]' },
  { bg: 'bg-[var(--v7-blue-faded)]', fg: 'text-[var(--v7-cream)]' },
  { bg: 'bg-[var(--v7-red)]', fg: 'text-[var(--v7-cream)]' },
];

const avatarBgs: Record<string, { from: string; to: string }> = {
  teal: { from: '#0E5F5A', to: '#08443F' },
  coral: { from: '#E5613D', to: '#A8462C' },
  mustard: { from: '#D9A445', to: '#B0822A' },
  terracotta: { from: '#A8462C', to: '#7E3320' },
};

export function Network7() {
  return (
    <section id="network" className="relative overflow-hidden border-y-4 border-[var(--v7-ink)] bg-[var(--v7-coral)] text-[var(--v7-cream)] py-20 md:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-3 v7-stripes opacity-80" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-3 v7-stripes opacity-80" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-start gap-3 mb-10"
        >
          <span className="v7-sign bg-[var(--v7-yellow)] text-[var(--v7-ink)] inline-flex items-center gap-2 px-3 py-1.5 v7-body text-xs uppercase font-bold tracking-wider"
            style={{ ['--tilt' as string]: '-1deg' }}>
            ✺ AVISO № 06 — La Gente
          </span>
          <h2 className="leading-[0.85] text-5xl sm:text-7xl md:text-[110px]">
            <span className="block v7-block text-[var(--v7-cream)] v7-ghost">LOS QUE</span>
            <span className="block v7-brush text-[var(--v7-yellow)] -my-1 text-[60px] sm:text-7xl md:text-[140px]">hacen la magia.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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
                whileHover={{ y: -4, rotate: 0 }}
                className={`v7-sign ${tone.bg} ${tone.fg} relative flex flex-col items-center gap-3 p-5 text-center`}
                style={{ ['--tilt' as string]: `${tilt}deg` }}
              >
                <div
                  className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--v7-ink)]"
                  style={{ background: `linear-gradient(135deg, ${av.from}, ${av.to})` }}
                >
                  <span className="v7-block text-2xl text-[var(--v7-cream)]">{p.initials}</span>
                </div>
                <span className="v7-block text-base leading-tight">{p.name}</span>
                <span className="v7-brush text-base opacity-90">{p.role}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <span className="v7-sign bg-[var(--v7-cream)] text-[var(--v7-ink)] inline-flex items-center gap-2 px-5 py-3 v7-block text-base"
            style={{ ['--tilt' as string]: '-1deg' }}>
            ✺ + 38 LOCALES MÁS · 11 PROVINCIAS ✺
          </span>
        </div>
      </div>
    </section>
  );
}
