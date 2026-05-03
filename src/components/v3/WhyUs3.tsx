'use client';

import { motion } from 'framer-motion';

const values = [
  { n: '01', t: 'REAL CUBA, REAL PEOPLE', b: 'Every trip starts in someone’s kitchen, workshop, or boat. No coaches.', tone: 'bg-[var(--v3-pink)] text-white' },
  { n: '02', t: 'LOCALS PAID FIRST', b: 'Fair, transparent splits — before margin. The whole moat is trust.', tone: 'bg-[var(--v3-yellow)] text-[var(--v3-ink)]' },
  { n: '03', t: 'STORIES WORTH TELLING', b: 'You come back with a name in your contacts and one story your friends ask to hear twice.', tone: 'bg-[var(--v3-mint)] text-[var(--v3-ink)]' },
];

export function WhyUs3() {
  return (
    <section className="relative overflow-hidden bg-[var(--v3-paper)] py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10 v3-grid-bg" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v3-ink)] bg-[var(--v3-lime)] px-3 py-1.5 v3-mono text-xs font-bold uppercase tracking-wider text-[var(--v3-ink)]">
          ★ Chapter 07 — Why Us
        </span>
        <h2 className="mt-6 v3-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.01em] sm:text-7xl md:text-[110px]">
          THREE THINGS WE <br />
          <span className="bg-[var(--v3-pink)] px-3 text-white">REFUSE</span> TO COMPROMISE.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl border-2 border-[var(--v3-ink)] p-7 v3-shadow ${v.tone}`}
            >
              <span className="absolute -right-3 -top-3 inline-flex h-12 w-12 rotate-12 items-center justify-center rounded-full border-2 border-[var(--v3-ink)] bg-[var(--v3-paper)] v3-display text-lg font-black text-[var(--v3-ink)]">
                {v.n}
              </span>
              <h3 className="v3-display text-3xl font-black uppercase leading-tight md:text-4xl">{v.t}</h3>
              <p className="mt-4 v3-mono text-sm font-medium leading-relaxed">{v.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
