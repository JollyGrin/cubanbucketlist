'use client';

import { motion } from 'framer-motion';
import { network } from '@/lib/data';
import { Flourish } from './Cartouche';

const tones: Record<string, { from: string; to: string }> = {
  teal: { from: '#0E5F5A', to: '#08443F' },
  coral: { from: '#E5613D', to: '#A8462C' },
  mustard: { from: '#D9A445', to: '#B0822A' },
  terracotta: { from: '#A8462C', to: '#7E3320' },
};

const ports = ['Habana', 'Trinidad', 'Viñales', 'Santiago', 'Baracoa', 'Cienfuegos', 'Camagüey', 'Granma', 'Holguín', 'Matanzas'];

export function Network4() {
  return (
    <section id="network" className="relative border-t-2 border-[var(--v4-ink)] v4-parchment py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <span className="v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-crimson)]">Chap. VI — Ports of Call</span>
          <h2 className="mt-4 v4-display text-4xl leading-[1.02] text-[var(--v4-ink)] sm:text-5xl md:text-7xl">
            Forty-four <em className="text-[var(--v4-crimson)]">guides &amp; hosts</em> across XI provinces.
          </h2>
          <Flourish className="mt-6 h-3 w-56 text-[var(--v4-ink)]" />
        </motion.div>

        {/* Ports marquee */}
        <div className="overflow-hidden border-y-2 border-[var(--v4-ink)] bg-[var(--v4-vellum-2)] py-3 mb-12">
          <div className="v4-marquee flex w-max items-center gap-10 whitespace-nowrap v4-display italic text-2xl text-[var(--v4-ink)] md:text-3xl">
            {Array.from({ length: 2 }).map((_, dup) => (
              <span key={dup} className="flex items-center gap-10">
                {ports.map((p) => (
                  <span key={`${dup}-${p}`} className="flex items-center gap-10">
                    {p} <span className="text-[var(--v4-crimson)]">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-px border-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {network.map((p, i) => {
            const tone = tones[p.tone];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[var(--v4-vellum)] p-5 flex flex-col items-center gap-3 text-center"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center border-2 border-[var(--v4-ink)] rounded-full overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${tone.from}, ${tone.to})` }}
                >
                  <span className="v4-display italic text-3xl text-[var(--v4-vellum)]">{p.initials}</span>
                </div>
                <span className="v4-display italic text-base text-[var(--v4-ink)] leading-tight">{p.name}</span>
                <span className="v4-sc text-[9px] uppercase tracking-[0.22em] text-[var(--v4-ink-soft)]">{p.role}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
