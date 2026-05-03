'use client';

import { motion } from 'framer-motion';
import { network } from '@/lib/data';

const tones: Record<string, { from: string; to: string }> = {
  teal: { from: '#0E5F5A', to: '#08443F' },
  coral: { from: '#E5613D', to: '#A8462C' },
  mustard: { from: '#D9A445', to: '#B0822A' },
  terracotta: { from: '#A8462C', to: '#7E3320' },
};

export function Network2() {
  return (
    <section id="network" className="relative border-t v2-rule bg-[var(--v2-ink)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-12 flex items-baseline justify-between border-b v2-rule pb-6">
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)]">§ VI — The network</span>
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">{network.length} portraits · 38 more</span>
        </div>

        <h2 className="v2-display max-w-3xl text-4xl font-light leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-7xl">
          Portraits of the people <br />
          <span className="italic text-[var(--v2-saffron)]">behind the magic</span>.
        </h2>

        <div className="mt-16 grid gap-px border v2-rule bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3">
          {network.map((p, i) => {
            const tone = tones[p.tone];
            return (
              <motion.figure
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col bg-[var(--v2-ink)] p-6"
              >
                <div
                  className="relative aspect-[4/5] w-full overflow-hidden border v2-rule"
                  style={{ background: `linear-gradient(160deg, ${tone.from} 0%, ${tone.to} 100%)` }}
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                  />
                  <span className="absolute inset-0 flex items-center justify-center v2-display text-[18vw] font-light italic text-white/20 sm:text-[120px]">
                    {p.initials}
                  </span>
                  <span className="absolute left-3 top-3 v2-mono text-[10px] uppercase tracking-[0.28em] text-white/85">
                    Portrait №{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between border-t v2-rule pt-4">
                  <span className="v2-display text-xl font-light">{p.name}</span>
                  <span className="v2-mono text-[10px] uppercase tracking-[0.28em] text-white/55">{p.role}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
