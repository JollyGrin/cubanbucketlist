'use client';

import { motion } from 'framer-motion';
import { journal } from '@/lib/data';
import { Reveal5 } from './primitives';

const tones = [
  { bg: 'bg-[var(--v5-cyan)]', tape: 'bg-[var(--v5-magenta)]' },
  { bg: 'bg-[var(--v5-yellow)]', tape: 'bg-[var(--v5-violet)]' },
  { bg: 'bg-[var(--v5-mint)]', tape: 'bg-[var(--v5-magenta)]' },
];

export function Journal5() {
  return (
    <section id="journal" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 v5-grid-dots" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal5>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v5-ink)] bg-white px-3 py-1.5 v5-mono text-base uppercase">✦ chapter 05 — the mag</span>
        </Reveal5>
        <Reveal5 delay={0.05}>
          <h2 className="mt-6 v5-display text-5xl leading-[0.85] sm:text-7xl md:text-[120px]">
            <span className="block text-[var(--v5-ink)]">field notes from</span>
            <span className="block v5-chrome-text">the other</span>
            <span className="block text-[var(--v5-magenta)]">cuba.</span>
          </h2>
        </Reveal5>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {journal.map((j, i) => {
            const tone = tones[i % tones.length];
            return (
              <motion.article
                key={j.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                whileHover={{ y: -6, rotate: 0 }}
                style={{ transform: `rotate(${[-1.5, 0.8, -0.4][i]}deg)`, boxShadow: '6px 6px 0 0 var(--v5-ink)' }}
                className={`relative flex flex-col rounded-3xl border-2 border-[var(--v5-ink)] p-6 ${tone.bg}`}
              >
                <span aria-hidden className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-block h-6 w-24 rotate-[-4deg] border-2 border-[var(--v5-ink)] ${tone.tape}`} />
                <span className="v5-mono text-sm uppercase opacity-75">№ {String(i + 1).padStart(2, '0')} · {j.kicker} · {j.date}</span>
                <h3 className="mt-4 v5-display text-3xl leading-tight md:text-4xl">{j.title}</h3>
                <p className="mt-3 v5-mono text-base leading-relaxed opacity-90">{j.excerpt}</p>
                <a
                  href="#newsletter"
                  className="mt-5 v5-chrome-btn inline-flex items-center gap-2 self-start rounded-full border-2 border-[var(--v5-ink)] px-4 py-1.5 v5-display text-base text-[var(--v5-ink)]"
                >
                  ✦ read
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
