'use client';

import { motion } from 'framer-motion';
import { Flourish } from './Cartouche';

export function TheIdea4() {
  return (
    <section id="about" className="relative border-t-2 border-[var(--v4-ink)] v4-parchment py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
            className="md:col-span-5"
          >
            <span className="v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-crimson)]">Chap. II — The Premise</span>
            <h2 className="mt-4 v4-display text-4xl leading-[1.02] text-[var(--v4-ink)] sm:text-5xl md:text-7xl">
              We are no <em className="text-[var(--v4-crimson)]">company of tours.</em>
            </h2>
            <Flourish className="mt-6 h-3 w-44 text-[var(--v4-ink)]" />
            <p className="mt-6 v4-hand text-2xl text-[var(--v4-deep-blue)]">— signed, the cartographers</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="md:col-span-7"
          >
            <p className="v4-display text-lg leading-[1.6] text-[var(--v4-ink-soft)] md:text-xl"
              style={{ textIndent: '2em' }}>
              We began as a fortnightly dispatch — short letters from the island sharing what one
              cannot find on any printed itinerary. Hidden coves, family kitchens, mountain photographers,
              the divers and mechanics whose names are passed only by word of mouth. Each chart you see
              here was drawn from such a letter; each vote you cast helps us decide which we shall
              transcribe next from <em>note</em> into <em>voyage</em>.
            </p>

            <ul className="mt-10 grid gap-px border-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] sm:grid-cols-3">
              {[
                ['Compagnie', '3 – 12', 'persons aboard'],
                ['Local share', '70 – 85 %', 'paid afore the voyage'],
                ['Provinces', '11', 'across the whole isle'],
              ].map(([label, big, small]) => (
                <li key={label} className="bg-[var(--v4-vellum)] p-6">
                  <p className="v4-sc text-[10px] uppercase tracking-[0.28em] text-[var(--v4-ink-soft)]">{label}</p>
                  <p className="mt-2 v4-display italic text-4xl text-[var(--v4-ink)] md:text-5xl">{big}</p>
                  <p className="mt-1 v4-sc text-[10px] uppercase tracking-[0.24em] text-[var(--v4-crimson)]">{small}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
