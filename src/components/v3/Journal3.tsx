'use client';

import { motion } from 'framer-motion';
import { journal } from '@/lib/data';

const tones = [
  { bg: 'bg-[var(--v3-yellow)] text-[var(--v3-ink)]', tape: 'bg-[var(--v3-pink)]' },
  { bg: 'bg-[var(--v3-mint)] text-[var(--v3-ink)]', tape: 'bg-[var(--v3-blue)]' },
  { bg: 'bg-[var(--v3-orange)] text-white', tape: 'bg-[var(--v3-lime)]' },
];

export function Journal3() {
  return (
    <section id="journal" className="relative overflow-hidden bg-[var(--v3-paper)] py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 v3-grid-bg" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-10 flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v3-ink)] bg-[var(--v3-blue)] px-3 py-1.5 v3-mono text-xs font-bold uppercase tracking-wider text-white">
            ★ Chapter 05 — Journal
          </span>
          <h2 className="v3-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.01em] sm:text-7xl md:text-[110px]">
            FIELD NOTES <br />
            FROM THE <span className="bg-[var(--v3-pink)] px-3 text-white">OTHER</span> CUBA.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {journal.map((j, i) => {
            const tone = tones[i % tones.length];
            return (
              <motion.article
                key={j.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ transform: `rotate(${[-1.5, 0.8, -0.4][i]}deg)` }}
                className={`relative flex flex-col rounded-2xl border-2 border-[var(--v3-ink)] p-6 v3-shadow ${tone.bg}`}
              >
                {/* tape */}
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-block h-6 w-24 rotate-[-4deg] border-2 border-[var(--v3-ink)] ${tone.tape}`}
                  aria-hidden
                />
                <span className="v3-mono text-xs font-bold uppercase tracking-wider opacity-75">
                  {String(i + 1).padStart(2, '0')} · {j.kicker} · {j.date}
                </span>
                <h3 className="mt-4 v3-display text-3xl font-black uppercase leading-tight md:text-4xl">
                  {j.title}
                </h3>
                <p className="mt-3 v3-mono text-sm font-medium leading-relaxed opacity-90">{j.excerpt}</p>
                <a
                  href="#newsletter"
                  className="mt-5 inline-flex items-center gap-2 self-start rounded-lg border-2 border-[var(--v3-ink)] bg-[var(--v3-paper)] px-3 py-1.5 v3-mono text-xs font-bold uppercase text-[var(--v3-ink)] v3-shadow-sm"
                >
                  READ ★
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
