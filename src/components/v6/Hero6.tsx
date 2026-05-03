'use client';

import { motion } from 'framer-motion';
import { SunburstFan, PalmFrond, DecoChevron, ScallopBorder } from './Deco';
import { NewsletterForm6 } from './NewsletterForm6';

export function Hero6() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden v6-curtain pt-36 pb-16 md:pt-48 md:pb-24"
    >
      {/* Sunburst behind hero text */}
      <SunburstFan className="pointer-events-none absolute left-1/2 top-32 -z-10 h-[80vw] max-h-[640px] w-[80vw] max-w-[640px] -translate-x-1/2 text-[var(--v6-rose-gold)]/30 v6-rays" />

      {/* Palm fronds */}
      <PalmFrond className="pointer-events-none absolute left-2 bottom-0 h-44 w-44 text-[var(--v6-emerald)]/85 md:left-12 md:h-72 md:w-72" />
      <PalmFrond className="pointer-events-none absolute right-2 bottom-0 h-44 w-44 -scale-x-100 text-[var(--v6-emerald)]/70 md:right-12 md:h-72 md:w-72" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 flex items-center justify-center gap-4 text-[var(--v6-marquee)]"
          >
            <DecoChevron className="h-4 w-12 v6-flicker" />
            <span className="v6-display text-[10px] uppercase tracking-[0.45em]">Tonight at the Tropicana · MMXXVI</span>
            <DecoChevron className="h-4 w-12 -scale-x-100 v6-flicker" />
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="text-center"
          >
            <span className="block v6-display text-[44px] leading-[0.92] text-[var(--v6-cream)] sm:text-6xl md:text-[112px]">DISCOVER</span>
            <span className="block v6-script v6-shimmer text-5xl leading-tight md:text-[140px]">the Cuba</span>
            <span className="block v6-display text-[44px] leading-[0.92] text-[var(--v6-cream)] sm:text-6xl md:text-[112px]">YOU NEVER SAW</span>
          </motion.h1>

          {/* Scallop divider */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className="mt-10 flex items-center justify-center gap-6 text-[var(--v6-rose-gold)]"
          >
            <ScallopBorder className="h-3 w-32 max-w-[30vw]" />
            <span className="v6-script text-2xl">est. 2026</span>
            <ScallopBorder className="h-3 w-32 max-w-[30vw]" />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 mx-auto max-w-2xl text-center font-[var(--font-v6-body)] text-lg italic leading-relaxed text-[var(--v6-cream)]/80 md:text-xl"
          >
            Hidden gems, insider experiences, and unforgettable moments with the most interesting locals on the island.
            A curated revue, presented to you twice a month — black tie optional.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            id="newsletter"
            className="mt-12 mx-auto max-w-xl"
          >
            <p className="mb-3 text-center v6-display text-sm uppercase tracking-[0.32em] text-[var(--v6-marquee)]">
              ☆ Reserve your seat ☆
            </p>
            <NewsletterForm6 />
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="relative mt-14 grid grid-cols-2 gap-px border-2 border-[var(--v6-marquee)] bg-[var(--v6-marquee)] sm:grid-cols-4"
          >
            {[
              { k: 'On the List', v: '2,847' },
              { k: 'In the Cast', v: '44' },
              { k: 'Provinces', v: '11' },
              { k: 'Acts in Q1', v: 'VI' },
            ].map((s) => (
              <div key={s.k} className="bg-[var(--v6-night)] p-5 text-center">
                <p className="v6-display text-[10px] uppercase tracking-[0.32em] text-[var(--v6-rose-gold)]">{s.k}</p>
                <p className="mt-1 v6-display text-3xl text-[var(--v6-cream)] md:text-4xl">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
