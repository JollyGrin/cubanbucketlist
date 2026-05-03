'use client';

import { motion } from 'framer-motion';

const values = [
  { n: 'I', t: 'Real Cuba, real people.', b: 'Every voyage begins in someone’s kitchen, workshop, or boat. Never on a coach.' },
  { n: 'II', t: 'Locals receive their share first.', b: 'Fair, transparent splits — paid before the trip departs. The whole moat is trust.' },
  { n: 'III', t: 'Stories worth telling.', b: 'Thou shalt return with a name in thy contacts and one tale thy friends will request twice.' },
];

export function WhyUs4() {
  return (
    <section className="relative border-t-2 border-[var(--v4-ink)] v4-parchment py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="mb-12 border-b-2 border-[var(--v4-ink)] pb-6"
        >
          <span className="v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-crimson)]">Chap. VII — Articles of Conduct</span>
          <h2 className="mt-4 v4-display text-4xl leading-[1.02] text-[var(--v4-ink)] sm:text-5xl md:text-7xl">
            Three <em className="text-[var(--v4-crimson)]">articles</em> we shall not break.
          </h2>
        </motion.div>

        <div className="grid gap-px border-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--v4-vellum)] p-7 md:p-10"
            >
              <span className="v4-display italic text-7xl text-[var(--v4-crimson)]">{v.n}</span>
              <h3 className="mt-4 v4-display italic text-2xl leading-tight text-[var(--v4-ink)] md:text-3xl">{v.t}</h3>
              <p className="mt-3 v4-display text-base leading-relaxed text-[var(--v4-ink-soft)] md:text-lg">{v.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
