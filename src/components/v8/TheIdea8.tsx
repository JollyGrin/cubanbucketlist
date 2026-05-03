'use client';

import { motion } from 'framer-motion';
import { TobaccoGarland, FiligreeCorner } from './Filigree';

export function TheIdea8() {
  return (
    <section id="about" className="relative border-y border-[var(--v8-gold-2)]/50 v8-paper bg-gradient-to-b from-[var(--v8-ivory-2)] to-[var(--v8-ivory)] py-20 md:py-32">
      <TobaccoGarland className="mx-auto h-8 w-full max-w-3xl text-[var(--v8-gold-2)] -mt-10 mb-12" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <p className="v8-display italic text-xs uppercase tracking-[0.45em] text-[var(--v8-crimson)]">— Sello № II — La Etiqueta —</p>
          <h2 className="mt-4 v8-display text-5xl leading-[0.95] text-[var(--v8-ink)] sm:text-6xl md:text-8xl v8-emboss">
            <span className="block italic text-[var(--v8-crimson)]">Not</span>
            <span className="block">a tour company.</span>
          </h2>
          <p className="mt-4 v8-script v8-gold-text text-5xl md:text-7xl">a connoisseur’s register.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="mt-10 mx-auto max-w-3xl text-center v8-body italic text-lg leading-relaxed text-[var(--v8-ink)]/85 md:text-xl"
        >
          We began as a quarterly bulletin — short letters from the island, profiling the photographers,
          chefs, dive instructors, and old-Havana mechanics whose work goes uncatalogued in any guidebook.
          Each subscriber holds a vote. The experience that gathers the most goes to press first —
          and our readers are the first invited aboard.
        </motion.p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { n: 'I', t: 'Audiencia', v: '3 – 12', s: 'per voyage' },
            { n: 'II', t: 'Local Share', v: '70 – 85%', s: 'paid before departure' },
            { n: 'III', t: 'Provinces', v: 'XI', s: 'across the island' },
          ].map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="relative v8-filigree p-7 text-center"
            >
              <FiligreeCorner className="absolute -top-1 -left-1 h-10 w-10" />
              <FiligreeCorner className="absolute -top-1 -right-1 h-10 w-10" flip="x" />
              <FiligreeCorner className="absolute -bottom-1 -left-1 h-10 w-10" flip="y" />
              <FiligreeCorner className="absolute -bottom-1 -right-1 h-10 w-10" flip="xy" />
              <p className="v8-script v8-gold-text text-2xl">{s.n}</p>
              <p className="v8-display italic text-[10px] uppercase tracking-[0.28em] text-[var(--v8-crimson)] mt-1">{s.t}</p>
              <p className="mt-3 v8-display text-5xl font-bold text-[var(--v8-ink)] v8-emboss md:text-6xl">{s.v}</p>
              <p className="mt-1 v8-body italic text-base text-[var(--v8-ink)]/70">{s.s}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <TobaccoGarland className="mx-auto h-8 w-full max-w-3xl text-[var(--v8-gold-2)] mt-16 -mb-10" />
    </section>
  );
}
