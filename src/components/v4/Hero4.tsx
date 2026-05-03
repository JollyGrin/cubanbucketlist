'use client';

import { motion } from 'framer-motion';
import { CursorSpotlight, Typewriter, Counter } from './primitives';
import { NewsletterForm4 } from './NewsletterForm4';

export function Hero4() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden v4-aurora pt-44 pb-16 md:pt-52 md:pb-24"
    >
      <div aria-hidden className="absolute inset-0 v4-grid-bg" />
      <CursorSpotlight />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 inline-flex items-center gap-2.5 v4-glass rounded-full px-3 py-1.5"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[var(--v4-cyan)] v4-pulse" />
              <span className="absolute inset-0 rounded-full bg-[var(--v4-cyan)]" />
            </span>
            <span className="v4-mono text-[10px] uppercase tracking-[0.28em] text-white/75">
              Now booking · Cuba 2026 · invite only
            </span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="text-balance text-[44px] leading-[0.96] tracking-[-0.025em] sm:text-6xl md:text-[96px]"
          >
            <span className="font-medium">The Cuba</span> <br />
            <span className="v4-serif italic font-normal text-[var(--v4-violet)]">most travelers</span> <br />
            <span className="font-medium">never get to see.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            A members-only travel publication that turns Cuba’s hidden gems into real, small-group
            experiences. Built around the locals you’d never otherwise meet —{' '}
            <span className="text-[var(--v4-paper)]">
              <Typewriter items={['photographers.', 'family chefs.', 'dive legends.', 'mountain guides.', 'mechanics with a butter knife.']} />
            </span>
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            id="newsletter"
            className="mt-10"
          >
            <NewsletterForm4 />
          </motion.div>

          {/* Live stat strip */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-14 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4"
          >
            {[
              { k: 'On the list', v: 2847, suffix: '' },
              { k: 'Locals in network', v: 44, suffix: '' },
              { k: 'Provinces covered', v: 11, suffix: '' },
              { k: 'Trips launching Q1', v: 6, suffix: '' },
            ].map((s, i) => (
              <div key={s.k} className="v4-glass rounded-2xl px-5 py-5">
                <p className="v4-mono text-[10px] uppercase tracking-[0.24em] text-white/45">{s.k}</p>
                <p className="mt-1.5 text-3xl font-medium tracking-tight text-[var(--v4-paper)] md:text-4xl">
                  <Counter to={s.v} duration={1.6 + i * 0.1} />
                  {s.suffix}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
