'use client';

import { motion } from 'framer-motion';
import { journal } from '@/lib/data';
import { TobaccoGarland } from './Filigree';

export function Journal8() {
  return (
    <section id="journal" className="relative v8-paper py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <p className="v8-display italic text-xs uppercase tracking-[0.45em] text-[var(--v8-crimson)]">— Sello № V —</p>
          <h2 className="mt-4 v8-display text-5xl leading-[0.95] text-[var(--v8-ink)] sm:text-6xl md:text-8xl v8-emboss">
            FROM THE TABAQUERÍA
          </h2>
          <p className="mt-2 v8-script v8-gold-text text-4xl md:text-6xl">— field notes —</p>
          <TobaccoGarland className="mx-auto mt-6 h-7 w-full max-w-md text-[var(--v8-gold-2)]" />
        </motion.div>

        <ul className="mt-12 flex flex-col">
          {journal.map((j, i) => (
            <motion.li
              key={j.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group grid items-baseline gap-4 border-t border-[var(--v8-gold-2)]/40 py-8 md:grid-cols-12 md:gap-10 md:py-10"
            >
              <span className="md:col-span-1 v8-script v8-gold-text text-4xl">{['I','II','III'][i]}</span>
              <span className="md:col-span-2 v8-display italic text-[10px] uppercase tracking-[0.32em] text-[var(--v8-crimson)]">{j.kicker}</span>
              <h3 className="md:col-span-7 v8-display italic text-2xl leading-tight text-[var(--v8-ink)] md:text-4xl v8-emboss">{j.title}</h3>
              <span className="md:col-span-1 v8-display italic text-[10px] uppercase tracking-[0.32em] text-[var(--v8-ink)]/60">{j.date}</span>
              <span className="md:col-span-1 inline-flex justify-end v8-script v8-gold-text text-2xl transition-transform group-hover:translate-x-1">
                read →
              </span>
              <p className="md:col-span-12 md:col-start-4 v8-body italic text-base leading-relaxed text-[var(--v8-ink)]/75">{j.excerpt}</p>
            </motion.li>
          ))}
          <li className="border-t border-[var(--v8-gold-2)]/40" aria-hidden />
        </ul>
      </div>
    </section>
  );
}
