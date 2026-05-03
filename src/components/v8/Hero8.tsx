'use client';

import { motion } from 'framer-motion';
import { FiligreeCorner, GoldDefs, GoldSeal, RibbonBanner, TobaccoGarland, TobaccoLeaf } from './Filigree';
import { NewsletterForm8 } from './NewsletterForm8';

export function Hero8() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden v8-paper pt-32 pb-12 md:pt-40 md:pb-20"
    >
      <GoldDefs />

      {/* Decorative tobacco leaves */}
      <TobaccoLeaf className="pointer-events-none absolute left-4 top-32 hidden h-28 w-16 text-[var(--v8-emerald)]/40 -rotate-12 md:left-12 md:top-44 md:block" />
      <TobaccoLeaf className="pointer-events-none absolute right-4 bottom-20 hidden h-28 w-16 text-[var(--v8-emerald)]/35 rotate-12 md:right-12 md:bottom-32 md:block" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
        >
          {/* The big Habanos label */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24, filter: 'blur(8px)' }, show: { opacity: 1, y: 0, filter: 'blur(0)' } }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-4xl"
          >
            {/* Filigree double border container */}
            <div className="relative v8-filigree p-8 sm:p-10 md:p-14">
              {/* Corners */}
              <FiligreeCorner className="absolute -top-2 -left-2 h-16 w-16 md:h-20 md:w-20" />
              <FiligreeCorner className="absolute -top-2 -right-2 h-16 w-16 md:h-20 md:w-20" flip="x" />
              <FiligreeCorner className="absolute -bottom-2 -left-2 h-16 w-16 md:h-20 md:w-20" flip="y" />
              <FiligreeCorner className="absolute -bottom-2 -right-2 h-16 w-16 md:h-20 md:w-20" flip="xy" />

              {/* Top crest seal */}
              <div className="flex justify-center">
                <GoldSeal className="h-16 w-16 md:h-20 md:w-20" label="CB" />
              </div>

              {/* Top label */}
              <p className="mt-3 text-center v8-display italic text-[10px] uppercase tracking-[0.45em] text-[var(--v8-crimson)]">
                — Vitola № 01 · Habana · MMXXVI —
              </p>

              {/* Brand name in copperplate */}
              <h1 className="mt-2 text-center v8-script v8-gold-shimmer text-6xl leading-tight md:text-[160px] md:leading-[0.95]">
                Cuban
              </h1>
              <p className="text-center v8-display italic text-base uppercase tracking-[0.5em] text-[var(--v8-ink)] -mt-2 md:-mt-4">
                ✦ ✦ ✦
              </p>
              <h1 className="mt-1 text-center v8-script v8-gold-shimmer text-6xl leading-tight md:text-[160px] md:leading-[0.95]" style={{ animationDelay: '-2s' }}>
                Bucket List
              </h1>

              {/* Tobacco garland */}
              <TobaccoGarland className="mt-3 mx-auto h-8 w-full max-w-xl" />

              {/* Ribbon */}
              <div className="mt-5 flex justify-center">
                <RibbonBanner tone="crimson" className="h-9">
                  <span className="v8-display italic text-xs uppercase tracking-[0.32em]">Edición fina · vol. I</span>
                </RibbonBanner>
              </div>

              {/* Tagline */}
              <p className="mt-6 mx-auto max-w-2xl text-center v8-body italic text-base leading-relaxed text-[var(--v8-ink)]/85 md:text-lg">
                Hidden gems, insider experiences, and unforgettable moments with the most interesting locals on the island.
                A quarterly journal of Cuban craft, delivered <span className="not-italic v8-display tracking-wide">by post</span>.
              </p>
            </div>
          </motion.div>

          {/* Newsletter section */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            id="newsletter"
            className="mt-12 mx-auto max-w-xl text-center"
          >
            <p className="mb-3 v8-script v8-gold-text text-4xl">join the connoisseur’s register</p>
            <NewsletterForm8 />
          </motion.div>

          {/* Stat strip — engraved tablets */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              { k: 'Subscribers', v: '2,847' },
              { k: 'Maestros', v: '44' },
              { k: 'Provinces', v: 'XI' },
              { k: 'Voyages Q1', v: 'VI' },
            ].map((s) => (
              <div key={s.k} className="border border-[var(--v8-gold-2)] bg-gradient-to-b from-[var(--v8-cream)] to-[var(--v8-ivory-2)] p-5 text-center">
                <p className="v8-display italic text-[10px] uppercase tracking-[0.32em] text-[var(--v8-crimson)]">{s.k}</p>
                <p className="mt-1 v8-display text-3xl font-bold text-[var(--v8-ink)] v8-emboss md:text-4xl">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
