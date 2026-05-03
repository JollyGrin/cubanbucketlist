'use client';

import { motion } from 'framer-motion';

const values = [
  {
    n: '01',
    title: 'Real Cuba, real people.',
    body: 'Not a single cigar-rolling photo op. Every experience starts in someone’s home, workshop, or boat — never a tour bus.',
    accent: 'text-coral',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
        <path d="M6 28 Q18 8 30 28" />
        <circle cx="18" cy="22" r="3" />
        <path d="M3 32 L33 32" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Locals get paid first.',
    body: 'Fair, transparent splits with the photographers, chefs, and guides who make the moments. That’s the moat — and the right thing.',
    accent: 'text-teal',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
        <circle cx="18" cy="18" r="12" />
        <path d="M18 9 L18 27 M14 13 H22 Q24 15 22 17 H14 Q12 19 14 21 H22" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Stories worth telling.',
    body: 'You will come back with a phone full of moments, a name in your contacts, and one story your friends actually want to hear twice.',
    accent: 'text-mustard-deep',
    icon: (
      <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
        <path d="M6 8 H26 Q30 8 30 12 V22 Q30 26 26 26 H14 L8 30 V26 H6 Q4 26 4 24 V12 Q4 8 6 8 Z" />
        <path d="M11 14 L23 14 M11 19 L20 19" />
      </svg>
    ),
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-parchment py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex items-baseline gap-3 text-coral md:mb-16"
        >
          <span className="section-numeral text-3xl md:text-4xl">VIII.</span>
          <span className="font-sans text-[11px] uppercase tracking-[0.32em]">Why Cuban Bucket List</span>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative flex flex-col gap-5 border-t-2 border-ink pt-6"
            >
              <div className="flex items-center justify-between">
                <span className={`section-numeral text-5xl md:text-6xl ${v.accent}`}>{v.n}</span>
                <span className={`${v.accent}`}>{v.icon}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
                {v.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-ink-soft">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
