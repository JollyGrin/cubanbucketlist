'use client';

import { motion } from 'framer-motion';
import { ScallopBorder } from './Deco';

const values = [
  { n: 'I', t: 'REAL CUBA. REAL PEOPLE.', b: 'Every show begins in someone’s kitchen, workshop, or boat. No coaches. No clichés.' },
  { n: 'II', t: 'LOCALS PAID FIRST.', b: 'Fair, transparent splits — paid before the curtain rises. The whole moat is trust.' },
  { n: 'III', t: 'STORIES WORTH RETELLING.', b: 'You will return with a name in your contacts and a story your friends will request twice.' },
];

export function WhyUs6() {
  return (
    <section className="relative bg-[var(--v6-night)] py-20 md:py-32 border-t-2 border-[var(--v6-marquee)]">
      <ScallopBorder className="absolute inset-x-0 top-0 h-3 w-full text-[var(--v6-marquee)]" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <span className="v6-display text-[10px] uppercase tracking-[0.45em] text-[var(--v6-marquee)]">PROGRAM ✦ ACT VII</span>
          <h2 className="mt-4 v6-display text-4xl leading-[0.95] text-[var(--v6-cream)] sm:text-6xl md:text-8xl">
            HOUSE RULES
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-2 border-[var(--v6-marquee)] bg-[var(--v6-night-2)] p-7 text-center"
            >
              <span className="v6-display text-7xl v6-gold">{v.n}</span>
              <h3 className="mt-4 v6-display text-2xl leading-tight text-[var(--v6-cream)] md:text-3xl">{v.t}</h3>
              <p className="mt-3 font-[var(--font-v6-body)] text-base italic leading-relaxed text-[var(--v6-cream)]/75">{v.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
