'use client';

import { motion } from 'framer-motion';
import { network } from '@/lib/data';
import { ScallopBorder, MarqueeBulbBorder } from './Deco';

const tones: Record<string, { from: string; to: string }> = {
  teal: { from: '#0E5F5A', to: '#08443F' },
  coral: { from: '#E5613D', to: '#A8462C' },
  mustard: { from: '#D9A445', to: '#B0822A' },
  terracotta: { from: '#A8462C', to: '#7E3320' },
};

export function Network6() {
  return (
    <section id="network" className="relative v6-curtain py-20 md:py-32 border-y-2 border-[var(--v6-marquee)]">
      <ScallopBorder className="absolute inset-x-0 top-0 h-3 w-full text-[var(--v6-marquee)]" />
      <ScallopBorder className="absolute inset-x-0 bottom-0 h-3 w-full text-[var(--v6-marquee)] rotate-180" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <span className="v6-display text-[10px] uppercase tracking-[0.45em] text-[var(--v6-marquee)]">PROGRAM ✦ ACT VI</span>
          <h2 className="mt-4 v6-display text-4xl leading-[0.95] text-[var(--v6-cream)] sm:text-6xl md:text-8xl">
            THE CAST
          </h2>
          <p className="mt-3 v6-script text-3xl v6-gold">— starring —</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {network.map((p, i) => {
            const tone = tones[p.tone];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex flex-col items-center gap-3 border-2 border-[var(--v6-marquee)] bg-[var(--v6-night-2)] p-5 text-center"
              >
                <MarqueeBulbBorder className="absolute inset-0 -m-1.5" />
                <div
                  className="relative z-[1] flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--v6-marquee)]"
                  style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
                >
                  <span className="v6-display text-3xl text-[var(--v6-cream)]">{p.initials}</span>
                </div>
                <span className="relative z-[1] v6-display text-base text-[var(--v6-cream)] leading-tight">{p.name}</span>
                <span className="relative z-[1] v6-script text-base text-[var(--v6-rose-gold)]">{p.role}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <span className="v6-script text-3xl text-[var(--v6-marquee)]">+ thirty-eight more across the island</span>
        </div>
      </div>
    </section>
  );
}
