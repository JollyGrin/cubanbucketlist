'use client';

import { motion } from 'framer-motion';
import { FiligreeCorner, TobaccoGarland } from './Filigree';

const values = [
  { n: 'I', t: 'Real Cuba, real people.', b: 'Every voyage begins in someone’s kitchen, workshop, or boat. Never on a coach.' },
  { n: 'II', t: 'Locals receive their share first.', b: 'Fair, transparent splits — paid before the trip departs. The whole moat is trust.' },
  { n: 'III', t: 'Stories worth retelling.', b: 'You will return with a name in your contacts and a story your friends will request twice.' },
];

export function WhyUs8() {
  return (
    <section className="relative v8-paper py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <p className="v8-display italic text-xs uppercase tracking-[0.45em] text-[var(--v8-crimson)]">— Sello № VII —</p>
          <h2 className="mt-4 v8-display text-5xl leading-[0.95] text-[var(--v8-ink)] sm:text-6xl md:text-8xl v8-emboss">
            ARTÍCULOS DE CALIDAD
          </h2>
          <p className="mt-2 v8-script v8-gold-text text-4xl md:text-6xl">— articles of quality —</p>
          <TobaccoGarland className="mx-auto mt-6 h-7 w-full max-w-md text-[var(--v8-gold-2)]" />
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="v8-filigree relative p-7 text-center"
            >
              <FiligreeCorner className="absolute -top-1 -left-1 h-10 w-10" />
              <FiligreeCorner className="absolute -top-1 -right-1 h-10 w-10" flip="x" />
              <FiligreeCorner className="absolute -bottom-1 -left-1 h-10 w-10" flip="y" />
              <FiligreeCorner className="absolute -bottom-1 -right-1 h-10 w-10" flip="xy" />
              <p className="v8-script v8-gold-shimmer text-7xl">{v.n}</p>
              <h3 className="mt-3 v8-display italic text-2xl leading-tight text-[var(--v8-ink)] md:text-3xl v8-emboss">{v.t}</h3>
              <p className="mt-3 v8-body italic text-base leading-relaxed text-[var(--v8-ink)]/75 md:text-lg">{v.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
