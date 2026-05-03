'use client';

import { motion } from 'framer-motion';
import { journal } from '@/lib/data';
import { Flourish } from './Cartouche';

export function Journal4() {
  return (
    <section id="journal" className="relative border-t-2 border-[var(--v4-ink)] v4-parchment py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="mb-12 border-b-2 border-[var(--v4-ink)] pb-6"
        >
          <span className="v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-crimson)]">Chap. V — The Logbook</span>
          <h2 className="mt-4 v4-display text-4xl leading-[1.02] text-[var(--v4-ink)] sm:text-5xl md:text-7xl">
            Field <em className="text-[var(--v4-crimson)]">dispatches</em> from the isle.
          </h2>
          <Flourish className="mt-6 h-3 w-56 text-[var(--v4-ink)]" />
        </motion.div>

        <ul className="flex flex-col">
          {journal.map((j, i) => (
            <motion.li
              key={j.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group grid items-baseline gap-4 border-t-2 border-dashed border-[var(--v4-ink)]/40 py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <span className="md:col-span-1 v4-display italic text-3xl text-[var(--v4-crimson)]">{['I.', 'II.', 'III.'][i]}</span>
              <span className="md:col-span-2 v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-ink-soft)]">{j.kicker}</span>
              <h3 className="md:col-span-7 v4-display italic text-2xl leading-tight text-[var(--v4-ink)] md:text-4xl">{j.title}</h3>
              <span className="md:col-span-1 v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-ink-soft)]">{j.date}</span>
              <span className="md:col-span-1 inline-flex justify-end v4-display italic text-[var(--v4-crimson)] transition-transform group-hover:translate-x-1">→</span>
              <p className="md:col-span-12 md:col-start-4 v4-display text-base leading-relaxed text-[var(--v4-ink-soft)]" style={{ textIndent: '1.5em' }}>{j.excerpt}</p>
            </motion.li>
          ))}
          <li className="border-t-2 border-dashed border-[var(--v4-ink)]/40" aria-hidden />
        </ul>
      </div>
    </section>
  );
}
