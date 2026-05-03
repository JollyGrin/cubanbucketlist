'use client';

import { motion } from 'framer-motion';
import { journal } from '@/lib/data';

const tones = [
  { bg: 'bg-[var(--v7-yellow)]', fg: 'text-[var(--v7-ink)]', t: -1.5 },
  { bg: 'bg-[var(--v7-coral)]', fg: 'text-[var(--v7-cream)]', t: 1 },
  { bg: 'bg-[var(--v7-cream)]', fg: 'text-[var(--v7-ink)]', t: -0.5 },
];

export function Journal7() {
  return (
    <section id="journal" className="relative overflow-hidden v7-wall-tex py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-start gap-3 mb-10"
        >
          <span className="v7-sign bg-[var(--v7-blue)] text-[var(--v7-cream)] inline-flex items-center gap-2 px-3 py-1.5 v7-body text-xs uppercase font-bold tracking-wider"
            style={{ ['--tilt' as string]: '-1deg' }}>
            ✺ AVISO № 05 — El Diario
          </span>
          <h2 className="leading-[0.85] text-5xl sm:text-7xl md:text-[110px]">
            <span className="block v7-block text-[var(--v7-ink)] v7-ghost">NOTAS DE</span>
            <span className="block v7-brush text-[var(--v7-coral)] -my-1 text-[60px] sm:text-7xl md:text-[140px]">la calle.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {journal.map((j, i) => {
            const tone = tones[i % tones.length];
            return (
              <motion.article
                key={j.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -5, rotate: 0 }}
                className={`v7-sign ${tone.bg} ${tone.fg} relative flex flex-col p-6`}
                style={{ ['--tilt' as string]: `${tone.t}deg` }}
              >
                <span className="v7-body text-xs uppercase tracking-wider font-bold opacity-75">№ {String(i + 1).padStart(2, '0')} · {j.kicker} · {j.date}</span>
                <h3 className="mt-3 v7-block text-2xl leading-tight md:text-3xl">{j.title}</h3>
                <p className="mt-3 v7-body text-base font-medium leading-relaxed opacity-90">{j.excerpt}</p>
                <a href="#newsletter" className="v7-sign bg-[var(--v7-cream)] text-[var(--v7-ink)] mt-5 inline-flex items-center gap-2 self-start px-3 py-1.5 v7-block text-xs"
                  style={{ ['--tilt' as string]: '0deg' }}
                >
                  LEER →
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
