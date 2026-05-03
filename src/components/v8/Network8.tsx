'use client';

import { motion } from 'framer-motion';
import { network } from '@/lib/data';
import { OvalVignette, FiligreeCorner, TobaccoGarland } from './Filigree';

const tones: Record<string, { from: string; to: string }> = {
  teal: { from: '#0E5F5A', to: '#08443F' },
  coral: { from: '#E5613D', to: '#A8462C' },
  mustard: { from: '#D9A445', to: '#B0822A' },
  terracotta: { from: '#A8462C', to: '#7E3320' },
};

export function Network8() {
  return (
    <section id="network" className="relative border-y border-[var(--v8-gold-2)]/50 v8-paper bg-gradient-to-b from-[var(--v8-ivory-2)] to-[var(--v8-ivory)] py-20 md:py-32">
      <TobaccoGarland className="mx-auto h-8 w-full max-w-3xl text-[var(--v8-gold-2)] -mt-10 mb-12" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <p className="v8-display italic text-xs uppercase tracking-[0.45em] text-[var(--v8-crimson)]">— Sello № VI —</p>
          <h2 className="mt-4 v8-display text-5xl leading-[0.95] text-[var(--v8-ink)] sm:text-6xl md:text-8xl v8-emboss">
            LOS MAESTROS
          </h2>
          <p className="mt-2 v8-script v8-gold-text text-4xl md:text-6xl">— curators of the craft —</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {network.map((p, i) => {
            const tone = tones[p.tone];
            return (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="v8-sheen v8-filigree relative flex flex-col items-center gap-3 p-5 text-center"
              >
                <FiligreeCorner className="absolute -top-1 -left-1 h-8 w-8" />
                <FiligreeCorner className="absolute -top-1 -right-1 h-8 w-8" flip="x" />
                <FiligreeCorner className="absolute -bottom-1 -left-1 h-8 w-8" flip="y" />
                <FiligreeCorner className="absolute -bottom-1 -right-1 h-8 w-8" flip="xy" />

                <OvalVignette className="aspect-square w-24">
                  <div className="h-full w-full v8-vignette flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}>
                    <span className="relative v8-script text-3xl text-[var(--v8-cream)]">{p.initials}</span>
                  </div>
                </OvalVignette>

                <figcaption className="flex flex-col leading-tight">
                  <span className="v8-display italic text-base text-[var(--v8-ink)] v8-emboss">{p.name}</span>
                  <span className="v8-display italic text-[10px] uppercase tracking-[0.22em] text-[var(--v8-crimson)]">{p.role}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="v8-script v8-gold-text text-3xl md:text-4xl">+ thirty-eight more across the island</p>
        </div>
      </div>

      <TobaccoGarland className="mx-auto h-8 w-full max-w-3xl text-[var(--v8-gold-2)] mt-16 -mb-10" />
    </section>
  );
}
