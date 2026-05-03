'use client';

import { motion } from 'framer-motion';

export function TheIdea3() {
  return (
    <section id="about" className="relative border-y-2 border-[var(--v3-ink)] bg-[var(--v3-blue)] py-20 text-white md:py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-3 v3-stripes opacity-40" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-3 v3-stripes opacity-40" />

      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v3-ink)] bg-[var(--v3-yellow)] px-3 py-1.5 v3-mono text-xs font-bold uppercase tracking-wider text-[var(--v3-ink)]"
        >
          ★ Chapter 02 — The Premise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-6 v3-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.01em] sm:text-7xl md:text-[140px]"
        >
          WE ARE NOT <br />
          <span className="text-[var(--v3-yellow)]">A TOUR</span> <br />
          COMPANY.
        </motion.h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {[
            {
              n: '01',
              t: 'WE STARTED AS A NEWSLETTER.',
              b: 'Stories, hidden gems, and the locals who make Cuba worth flying for.',
              tone: 'bg-[var(--v3-pink)] text-white',
            },
            {
              n: '02',
              t: 'YOU TELL US WHAT TO BUILD.',
              b: 'Every vote you cast helps us decide which experience becomes a real trip first.',
              tone: 'bg-[var(--v3-yellow)] text-[var(--v3-ink)]',
            },
            {
              n: '03',
              t: 'LOCALS GET PAID FIRST.',
              b: 'Fair, transparent splits. The photographers, chefs, and guides come before margin.',
              tone: 'bg-[var(--v3-lime)] text-[var(--v3-ink)]',
            },
          ].map((c, i) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-2xl border-2 border-[var(--v3-ink)] p-6 v3-shadow ${c.tone}`}
              style={{ transform: `rotate(${[-1.2, 0.8, -0.5][i]}deg)` }}
            >
              <span className="v3-mono text-xs font-bold uppercase tracking-wider opacity-60">№ {c.n}</span>
              <h3 className="mt-3 v3-display text-2xl font-black uppercase leading-tight md:text-3xl">{c.t}</h3>
              <p className="mt-3 v3-mono text-sm font-medium leading-relaxed">{c.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
