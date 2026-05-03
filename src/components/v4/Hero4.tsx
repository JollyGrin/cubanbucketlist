'use client';

import { motion } from 'framer-motion';
import { CompassRose, SeaMonster, CubaCoastline, Flourish } from './Cartouche';
import { NewsletterForm4 } from './NewsletterForm4';

export function Hero4() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden v4-parchment pt-36 pb-16 md:pt-48 md:pb-24"
    >
      <div aria-hidden className="absolute inset-0 v4-map-grid opacity-50" />

      {/* Decorative coastline backdrop */}
      <CubaCoastline className="pointer-events-none absolute inset-x-0 bottom-12 mx-auto w-[140%] -translate-x-[4%] text-[var(--v4-deep-blue)]/20 md:w-[110%]" />

      {/* Compass top right */}
      <CompassRose className="absolute right-6 top-32 hidden h-28 w-28 text-[var(--v4-ink)]/55 md:right-12 md:top-44 md:block" spinning />

      {/* Sea monster bottom */}
      <SeaMonster className="absolute bottom-4 left-4 hidden h-20 w-32 text-[var(--v4-ink)]/55 md:left-12 md:bottom-12 md:h-28 md:w-44" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 flex items-center gap-3 v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-ink-soft)]"
          >
            <span className="inline-block h-px w-12 bg-[var(--v4-ink)]/40" />
            Carta Marina · Issue №01 · MMXXVI
            <span className="inline-block h-px w-12 bg-[var(--v4-ink)]/40" />
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="v4-display max-w-4xl text-[44px] leading-[0.98] text-[var(--v4-ink)] sm:text-6xl md:text-[104px]"
          >
            <span className="block italic">Discover</span>
            <span className="block">the <em className="text-[var(--v4-crimson)]">undiscovered</em></span>
            <span className="block italic">island.</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-8 max-w-2xl"
          >
            <Flourish className="h-4 w-44 text-[var(--v4-ink)]" />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-2xl v4-display text-lg leading-relaxed text-[var(--v4-ink-soft)] md:text-xl"
          >
            Hidden gems, insider experiences, and unforgettable moments with the most interesting locals
            on the island — set down here in <em>chart form</em>, dispatched twice monthly to those whose
            travels deserve more than a brochure.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            id="newsletter"
            className="mt-10"
          >
            <p className="mb-3 v4-hand text-3xl text-[var(--v4-crimson)]">enter ye name &amp; mark below ↓</p>
            <NewsletterForm4 />
          </motion.div>

          {/* Cartographer's stat row */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-14 grid grid-cols-2 gap-px border-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] sm:grid-cols-4"
          >
            {[
              { k: 'On the Manifest', v: '2,847' },
              { k: 'Locals Charted', v: '44' },
              { k: 'Provinces', v: '11' },
              { k: 'Voyages Q1', v: 'VI' },
            ].map((s) => (
              <div key={s.k} className="bg-[var(--v4-vellum)] p-5">
                <p className="v4-sc text-[10px] uppercase tracking-[0.28em] text-[var(--v4-ink-soft)]">{s.k}</p>
                <p className="mt-1 v4-display italic text-3xl text-[var(--v4-ink)] md:text-4xl">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
