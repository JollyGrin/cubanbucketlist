'use client';

import { motion } from 'framer-motion';
import { NewsletterForm3 } from './NewsletterForm3';

export function Hero3() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[var(--v3-paper)] pb-20 pt-36 md:pb-28 md:pt-44"
    >
      <div aria-hidden className="absolute inset-0 -z-10 v3-grid-bg" />

      {/* Floating sticker decorations */}
      <Sticker className="absolute right-4 top-32 hidden md:right-12 md:top-44 md:flex" rotate={12} bg="bg-[var(--v3-yellow)]">
        <span className="v3-display text-2xl font-black uppercase leading-none">¡HOLA!</span>
      </Sticker>
      <Sticker className="absolute left-4 bottom-44 hidden md:left-12 md:bottom-32 md:flex" rotate={-8} bg="bg-[var(--v3-mint)]">
        <span className="v3-mono text-xs font-bold uppercase">2,847 in</span>
      </Sticker>

      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[var(--v3-ink)] bg-[var(--v3-pink)] px-3 py-1.5 v3-mono text-[11px] font-bold uppercase tracking-wider text-white"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-white animate-pulse" />
            VOL. 01 · A NEW TRAVEL ZINE
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="v3-display text-[18vw] font-black uppercase leading-[0.82] tracking-[-0.02em] sm:text-[120px] md:text-[200px]"
          >
            <span className="block">DISCOVER</span>
            <span className="relative inline-block">
              <span className="absolute -inset-x-2 inset-y-2 -z-10 -skew-x-3 bg-[var(--v3-yellow)]" aria-hidden />
              THE CUBA
            </span>
            <span className="block text-[var(--v3-pink)]">YOU NEVER SAW.</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-12 grid gap-8 md:grid-cols-12 md:gap-12"
          >
            <div className="md:col-span-5">
              <p className="rounded-2xl border-2 border-[var(--v3-ink)] bg-[var(--v3-mint)] p-5 v3-mono text-base font-medium leading-relaxed v3-shadow-sm">
                Hidden gems, insider experiences, and unforgettable moments with the most
                interesting locals on the island. <span className="font-black">Your real Cuban Bucket List starts here.</span>
              </p>
            </div>
            <div id="newsletter" className="md:col-span-7">
              <p className="mb-3 v3-display text-3xl font-black uppercase">
                ↓ JOIN THE FREE NEWSLETTER
              </p>
              <NewsletterForm3 />
            </div>
          </motion.div>

          {/* Bottom badge row */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            {['NO COACHES', 'NO CLICHÉS', 'NO BS', 'JUST CUBA'].map((b, i) => (
              <span
                key={b}
                className={`rounded-full border-2 border-[var(--v3-ink)] px-4 py-2 v3-mono text-xs font-bold uppercase ${
                  ['bg-[var(--v3-blue)] text-white', 'bg-[var(--v3-yellow)]', 'bg-[var(--v3-orange)] text-white', 'bg-[var(--v3-paper)]'][i]
                }`}
              >
                {b}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Sticker({ children, className = '', rotate = 0, bg }: { children: React.ReactNode; className?: string; rotate?: number; bg: string }) {
  return (
    <div
      className={`v3-jiggle inline-flex items-center justify-center rounded-2xl border-2 border-[var(--v3-ink)] px-4 py-3 v3-shadow-sm ${bg} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
