'use client';

import { motion } from 'framer-motion';
import { NewsletterForm5 } from './NewsletterForm5';
import { ParallaxFollow, Counter5 } from './primitives';

export function Hero5() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* Liquid blobs */}
      <ParallaxFollow strength={20} className="pointer-events-none absolute -left-20 top-32 h-[44vw] w-[44vw] max-h-[480px] max-w-[480px] -z-10">
        <div className="v5-blob v5-iridescent h-full w-full opacity-70 mix-blend-multiply" style={{ filter: 'blur(2px)' }} />
      </ParallaxFollow>
      <ParallaxFollow strength={26} className="pointer-events-none absolute -right-20 bottom-10 h-[42vw] w-[42vw] max-h-[440px] max-w-[440px] -z-10">
        <div className="v5-blob h-full w-full opacity-80 mix-blend-multiply"
             style={{ background: 'conic-gradient(from 240deg at 50% 50%, #FFD166, #FF6BD6, #B197FC, #22D3EE, #FFD166)', filter: 'blur(4px)' }} />
      </ParallaxFollow>

      {/* Tiny chrome stickers */}
      <motion.div
        initial={{ opacity: 0, rotate: -15, y: -10 }}
        animate={{ opacity: 1, rotate: -8, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute right-5 top-32 hidden md:right-12 md:top-44 md:flex"
      >
        <span className="v5-chrome-btn inline-flex items-center gap-1.5 rounded-2xl border-2 border-[var(--v5-ink)] px-3 py-2 v5-display text-xl text-[var(--v5-ink)]">
          ✦ vol. 01
        </span>
      </motion.div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[var(--v5-ink)] bg-white px-3 py-1.5 v5-mono text-base uppercase text-[var(--v5-ink)]"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--v5-magenta)] animate-pulse" />
            beach club ↦ travel zine ↦ now booking
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="v5-display text-[16vw] leading-[0.86] sm:text-[110px] md:text-[200px]"
          >
            <span className="block text-[var(--v5-ink)]">discover</span>
            <span className="block v5-chrome-text">the cuba</span>
            <span className="block text-[var(--v5-ink)]">you never <span className="text-[var(--v5-magenta)]">saw</span>.</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-12 grid gap-8 md:grid-cols-12 md:gap-12"
          >
            <div className="md:col-span-5">
              <div className="v5-iridescent-border">
                <div className="rounded-[14px] bg-white p-5">
                  <p className="v5-mono text-base leading-relaxed text-[var(--v5-ink)]">
                    Hidden gems, insider experiences, and unforgettable moments with the most
                    interesting locals on the island. <span className="v5-display text-2xl text-[var(--v5-magenta)]">your real cuban bucket list ↓</span>
                  </p>
                </div>
              </div>
            </div>
            <div id="newsletter" className="md:col-span-7">
              <p className="mb-3 v5-display text-3xl text-[var(--v5-ink)]">↓ join the free newsletter</p>
              <NewsletterForm5 />
            </div>
          </motion.div>

          {/* Live stat strip */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4"
          >
            {[
              { k: 'on the list', v: 2847, c: 'bg-[var(--v5-cyan)]' },
              { k: 'locals', v: 44, c: 'bg-[var(--v5-magenta)]' },
              { k: 'provinces', v: 11, c: 'bg-[var(--v5-yellow)]' },
              { k: 'trips q1', v: 6, c: 'bg-[var(--v5-mint)]' },
            ].map((s) => (
              <div key={s.k} className={`rounded-2xl border-2 border-[var(--v5-ink)] ${s.c} p-5 v5-shimmer-strip-host relative overflow-hidden`}>
                <p className="v5-mono text-sm uppercase text-[var(--v5-ink)]/75">{s.k}</p>
                <p className="mt-1 v5-display text-4xl text-[var(--v5-ink)] md:text-5xl">
                  <Counter5 to={s.v} />
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
