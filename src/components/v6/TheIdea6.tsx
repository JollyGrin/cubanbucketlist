'use client';

import { motion } from 'framer-motion';
import { ScallopBorder, Pineapple } from './Deco';

export function TheIdea6() {
  return (
    <section id="about" className="relative border-y-2 border-[var(--v6-marquee)] bg-[var(--v6-night-2)] py-20 md:py-32">
      <ScallopBorder className="absolute inset-x-0 top-0 h-3 w-full text-[var(--v6-marquee)]" />
      <ScallopBorder className="absolute inset-x-0 bottom-0 h-3 w-full text-[var(--v6-marquee)] rotate-180" />

      <Pineapple className="pointer-events-none absolute right-4 top-12 h-24 w-16 text-[var(--v6-rose-gold)]/40 md:right-16 md:h-40 md:w-28" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <span className="v6-display text-[10px] uppercase tracking-[0.45em] text-[var(--v6-marquee)]">PROGRAM ✦ ACT II</span>
          <h2 className="mt-4 v6-display text-4xl leading-[0.95] text-[var(--v6-cream)] sm:text-6xl md:text-[112px]">
            <span className="block">NOT A TOUR</span>
            <span className="v6-script block v6-gold text-7xl md:text-[160px] leading-[0.7] py-3">company.</span>
            <span className="block">A REAL REVUE.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.1 }}
          className="mt-10 mx-auto max-w-3xl text-center font-[var(--font-v6-body)] text-lg italic leading-relaxed text-[var(--v6-cream)]/85 md:text-xl"
        >
          We started as a fortnightly newsletter — short letters from the island spotlighting one
          remarkable local at a time: a photographer, a chef, a dive instructor, a mechanic who can
          rebuild a ’57 Chevy with a butter knife. Every dispatch you read, and every vote you cast,
          decides which experience opens the next show. <span className="v6-script not-italic text-3xl text-[var(--v6-marquee)]">¡Que viva la noche!</span>
        </motion.p>

        {/* Stat row in deco style */}
        <div className="mt-12 grid gap-px border-2 border-[var(--v6-marquee)] bg-[var(--v6-marquee)] sm:grid-cols-3">
          {[
            { k: 'Audience', v: '3 – 12', s: 'per show' },
            { k: 'Local share', v: '70 – 85%', s: 'paid before curtain' },
            { k: 'Provinces', v: 'XI', s: 'across the island' },
          ].map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="bg-[var(--v6-night-2)] p-7 text-center"
            >
              <p className="v6-display text-[10px] uppercase tracking-[0.32em] text-[var(--v6-rose-gold)]">{s.k}</p>
              <p className="mt-2 v6-display text-5xl text-[var(--v6-cream)] md:text-6xl">{s.v}</p>
              <p className="mt-1 v6-script text-xl text-[var(--v6-marquee)]">{s.s}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
