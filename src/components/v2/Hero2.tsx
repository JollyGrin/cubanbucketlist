'use client';

import { motion } from 'framer-motion';
import { NewsletterForm2 } from './NewsletterForm2';

export function Hero2() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[var(--v2-ink)] pb-12 pt-44 text-[var(--v2-paper)] md:pb-20 md:pt-52"
    >
      {/* Cinematic plate backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10 v2-plate" />
      {/* Sun */}
      <div
        aria-hidden
        className="absolute left-[60%] top-[18%] -z-10 h-[42vw] w-[42vw] max-h-[520px] max-w-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(232,164,69,0.6) 0%, rgba(232,164,69,0.18) 35%, transparent 70%)',
        }}
      />
      {/* Long horizon line */}
      <div aria-hidden className="absolute left-0 right-0 top-[68%] h-px bg-[var(--v2-saffron)]/40" />
      {/* Vertical mono frame */}
      <div aria-hidden className="absolute left-5 top-32 hidden flex-col gap-1 md:flex">
        <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">N 23.13°</span>
        <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">W 82.36°</span>
      </div>
      <div aria-hidden className="absolute right-5 top-32 hidden flex-col items-end gap-1 md:flex">
        <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">Issue №01</span>
        <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">Vol. MMXXVI</span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="v2-mono mb-6 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[var(--v2-saffron)]"
          >
            <span className="inline-block h-px w-12 bg-[var(--v2-saffron)]" />
            A travel publication · Est. 2026
          </motion.span>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="v2-display text-[15vw] font-light leading-[0.88] tracking-[-0.02em] sm:text-[112px] md:text-[180px]"
          >
            The Cuba <br />
            <span className="italic text-[var(--v2-saffron)]">you haven’t</span> <br />
            <span className="italic">seen.</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-10 grid items-end gap-10 md:grid-cols-12"
          >
            <p className="md:col-span-5 max-w-md font-[var(--font-v2-body)] text-lg italic leading-relaxed text-white/75 md:text-xl">
              Hidden gems, insider experiences, and unforgettable moments with the most interesting
              locals on the island. A small black book, sent twice a month.
            </p>
            <div id="newsletter" className="md:col-span-7 md:pl-12">
              <NewsletterForm2 id="hero" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom credit row */}
      <div className="relative z-10 mt-12 border-t v2-rule">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 v2-mono text-[10px] uppercase tracking-[0.32em] text-white/55 md:px-12">
          <span>2,847 subscribed</span>
          <span className="hidden md:inline">Photographs · stories · invitations</span>
          <a href="#about" className="inline-flex items-center gap-2 hover:text-[var(--v2-saffron)]">
            Begin
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
