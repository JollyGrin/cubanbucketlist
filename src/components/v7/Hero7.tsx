'use client';

import { motion } from 'framer-motion';
import { NewsletterForm7 } from './NewsletterForm7';

export function Hero7() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden v7-wall-tex pt-36 pb-16 md:pt-44 md:pb-24"
    >
      {/* Stripes corner */}
      <div aria-hidden className="absolute top-0 right-0 h-32 w-32 v7-stripes opacity-90" />
      <div aria-hidden className="absolute bottom-0 left-0 h-20 w-full v7-stripes opacity-50" />

      {/* Floating signs */}
      <motion.div
        initial={{ opacity: 0, rotate: -6, y: -10 }}
        animate={{ opacity: 1, rotate: -4, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute right-4 top-32 hidden md:right-12 md:top-44 md:flex"
      >
        <div className="v7-sign bg-[var(--v7-blue)] text-[var(--v7-cream)] px-4 py-2 v7-block text-xs" style={{ ['--tilt' as string]: '-3deg' }}>
          ✺ ABIERTO ✺
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 8, y: 10 }}
        animate={{ opacity: 1, rotate: 6, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute left-4 bottom-32 hidden md:left-12 md:bottom-40 md:flex"
      >
        <div className="v7-sign bg-[var(--v7-yellow)] px-4 py-2 v7-brush text-2xl v7-wobble" style={{ ['--tilt' as string]: '4deg' }}>
          oferta del día!
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 inline-flex items-center gap-2 v7-sign bg-[var(--v7-cream)] px-3 py-1.5 v7-body text-xs uppercase font-bold tracking-wider"
            style={{ ['--tilt' as string]: '-1deg' }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--v7-coral)] animate-pulse" />
            DESDE LA HABANA · VOL. I · MMXXVI
          </motion.div>

          {/* Headline — wildly mixed type */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="leading-[0.85] text-[44px] sm:text-6xl md:text-[120px]"
          >
            <span className="block v7-block text-[var(--v7-ink)] v7-ghost">DESCUBRE</span>
            <span className="block v7-brush text-[var(--v7-coral)] -my-2 md:-my-4 text-[60px] sm:text-7xl md:text-[160px]">la cuba que</span>
            <span className="block v7-block text-[var(--v7-blue)] v7-ghost">NUNCA VISTE.</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-12 grid gap-6 md:grid-cols-12 md:gap-10"
          >
            <div className="md:col-span-5">
              <div className="v7-sign bg-[var(--v7-cream)] p-5" style={{ ['--tilt' as string]: '-1.5deg' }}>
                <p className="v7-body text-base leading-relaxed font-medium text-[var(--v7-ink)]">
                  Joyas escondidas, experiencias auténticas y momentos inolvidables con los locales más interesantes de la isla.
                </p>
                <p className="mt-2 v7-brush text-2xl text-[var(--v7-coral)]">tu lista cubana de verdad ↓</p>
              </div>
            </div>
            <div id="newsletter" className="md:col-span-7">
              <p className="mb-3 v7-block text-2xl text-[var(--v7-ink)] md:text-3xl">↓ APÚNTATE GRATIS</p>
              <NewsletterForm7 />
            </div>
          </motion.div>

          {/* Stat tiles styled as signs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { k: 'EN LA LISTA', v: '2,847', bg: 'bg-[var(--v7-blue)]', fg: 'text-[var(--v7-cream)]', t: -1 },
              { k: 'GENTE LOCAL', v: '44', bg: 'bg-[var(--v7-yellow)]', fg: 'text-[var(--v7-ink)]', t: 1.2 },
              { k: 'PROVINCIAS', v: '11', bg: 'bg-[var(--v7-coral)]', fg: 'text-[var(--v7-cream)]', t: -1.5 },
              { k: 'VIAJES Q1', v: '06', bg: 'bg-[var(--v7-cream)]', fg: 'text-[var(--v7-ink)]', t: 0.8 },
            ].map((s) => (
              <div key={s.k} className={`v7-sign ${s.bg} ${s.fg} p-5 text-center`} style={{ ['--tilt' as string]: `${s.t}deg` }}>
                <p className="v7-body text-xs uppercase tracking-wider font-bold opacity-85">{s.k}</p>
                <p className="mt-1 v7-block text-3xl md:text-4xl">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
