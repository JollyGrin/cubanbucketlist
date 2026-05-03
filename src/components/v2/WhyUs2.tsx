'use client';

import { motion } from 'framer-motion';

const values = [
  {
    n: '01',
    title: 'Real Cuba, real people.',
    body: 'No cigar-rolling photo ops, no air-conditioned coaches. Every experience starts in someone’s kitchen, workshop, or boat.',
  },
  {
    n: '02',
    title: 'Locals get paid first.',
    body: 'Fair, transparent splits with the photographers, chefs, and guides who carry the trip. That is the moat — and the right thing.',
  },
  {
    n: '03',
    title: 'Stories worth telling.',
    body: 'You will come back with a phone full of moments, a name in your contacts, and one story your friends will ask to hear twice.',
  },
];

export function WhyUs2() {
  return (
    <section className="relative border-t v2-rule bg-[var(--v2-ink)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-12 flex items-baseline justify-between border-b v2-rule pb-6">
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)]">§ VII — Editorial standards</span>
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">three principles</span>
        </div>

        <div className="grid gap-px border v2-rule bg-white/[0.03] md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--v2-ink)] p-8 md:p-10"
            >
              <span className="v2-display text-[88px] font-light italic leading-none text-[var(--v2-saffron)]">{v.n}</span>
              <h3 className="mt-6 v2-display text-2xl font-light leading-tight md:text-3xl">{v.title}</h3>
              <p className="mt-4 font-[var(--font-v2-body)] text-base italic leading-relaxed text-white/65 md:text-lg">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
