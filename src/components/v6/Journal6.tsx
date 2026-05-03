'use client';

import { motion } from 'framer-motion';
import { journal } from '@/lib/data';
import { ScallopBorder } from './Deco';

export function Journal6() {
  return (
    <section id="journal" className="relative bg-[var(--v6-night)] py-20 md:py-32 border-t-2 border-[var(--v6-marquee)]">
      <ScallopBorder className="absolute inset-x-0 top-0 h-3 w-full text-[var(--v6-marquee)]" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <span className="v6-display text-[10px] uppercase tracking-[0.45em] text-[var(--v6-marquee)]">PROGRAM ✦ ACT V</span>
          <h2 className="mt-4 v6-display text-4xl leading-[0.95] text-[var(--v6-cream)] sm:text-6xl md:text-8xl">
            BACKSTAGE NOTES
          </h2>
          <p className="mt-3 v6-script text-3xl v6-gold">— from the journal —</p>
        </motion.div>

        <ul className="mt-12 flex flex-col">
          {journal.map((j, i) => (
            <motion.li
              key={j.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group grid items-baseline gap-4 border-t v6-rule py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <span className="md:col-span-1 v6-display text-3xl text-[var(--v6-marquee)]">{['I','II','III'][i]}</span>
              <span className="md:col-span-2 v6-display text-[10px] uppercase tracking-[0.32em] text-[var(--v6-rose-gold)]">{j.kicker}</span>
              <h3 className="md:col-span-7 v6-display text-2xl leading-tight text-[var(--v6-cream)] md:text-4xl">{j.title}</h3>
              <span className="md:col-span-1 v6-display text-[10px] uppercase tracking-[0.32em] text-[var(--v6-cream)]/60">{j.date}</span>
              <span className="md:col-span-1 inline-flex justify-end v6-script text-xl text-[var(--v6-marquee)] transition-transform group-hover:translate-x-1">
                read →
              </span>
              <p className="md:col-span-12 md:col-start-4 font-[var(--font-v6-body)] text-base italic leading-relaxed text-[var(--v6-cream)]/70">{j.excerpt}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
