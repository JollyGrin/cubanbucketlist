'use client';

import { motion } from 'framer-motion';
import { NewsletterForm } from './NewsletterForm';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-teal-deep text-parchment"
    >
      {/* Layered gradient backdrop — sun, sea, terrain */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 60% at 50% 22%, #F2C969 0%, #E8A047 18%, #C24A2A 38%, #6E2417 60%, #0E5F5A 88%, #08443F 100%)',
          }}
        />
        {/* Sun */}
        <div
          className="absolute left-1/2 top-[18%] -z-10 h-56 w-56 -translate-x-1/2 rounded-full md:h-80 md:w-80"
          style={{
            background:
              'radial-gradient(circle, #FBE7B0 0%, #F2C969 35%, rgba(242,201,105,0) 70%)',
            filter: 'blur(2px)',
          }}
        />
        {/* Mountain silhouette layer 1 */}
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-[55%] w-full opacity-90"
          aria-hidden
        >
          <defs>
            <linearGradient id="m1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0E5F5A" />
              <stop offset="100%" stopColor="#08443F" />
            </linearGradient>
          </defs>
          <path
            d="M0,420 L120,340 L260,400 L380,310 L520,380 L640,290 L780,360 L900,300 L1040,380 L1160,320 L1280,400 L1440,340 L1440,600 L0,600 Z"
            fill="url(#m1)"
          />
        </svg>
        {/* Mountain silhouette layer 2 (closer / darker) */}
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-[40%] w-full"
          aria-hidden
        >
          <path
            d="M0,500 L100,420 L220,490 L320,400 L460,500 L600,440 L740,510 L880,440 L1020,520 L1180,460 L1320,520 L1440,480 L1440,600 L0,600 Z"
            fill="#08443F"
            opacity="0.85"
          />
        </svg>
        {/* Tiny palm silhouettes */}
        <Palm className="absolute bottom-[14%] left-[4%] h-32 w-32 text-ink/80 md:h-44 md:w-44" />
        <Palm className="absolute bottom-[18%] right-[6%] h-24 w-24 -scale-x-100 text-ink/70 md:h-36 md:w-36" />
        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40" />
      </div>

      {/* Top postage stamp — passport feel */}
      <motion.div
        initial={{ opacity: 0, rotate: -8, y: -10 }}
        animate={{ opacity: 1, rotate: -6, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute right-5 top-20 z-10 hidden md:right-10 md:top-24 md:block"
      >
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-md border-2 border-dashed border-parchment/70 bg-parchment/10 p-2 text-center backdrop-blur-sm">
          <span className="font-hand text-base text-parchment">Habana</span>
          <span className="font-display text-2xl font-semibold italic text-mustard">23.13°</span>
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-parchment/80">N · sunset</span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 pt-32 md:px-10 md:pb-20 md:pt-40">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
            }}
            className="md:col-span-8"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="inline-flex h-px w-10 bg-parchment/70" />
              <span className="font-sans text-[11px] uppercase tracking-[0.32em] text-parchment/80">
                Vol. 01 · A travel journal
              </span>
            </motion.div>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              className="font-display text-[44px] font-light leading-[0.95] tracking-tight text-parchment sm:text-6xl md:text-[88px]"
              style={{ fontFeatureSettings: '"ss01", "ss02"' }}
            >
              Discover the Cuba <br />
              <span className="italic" style={{ fontVariationSettings: '"SOFT" 100, "WONK" 1' }}>
                you’ve never seen.
              </span>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              className="mt-5 max-w-xl font-sans text-base text-parchment/85 sm:text-lg md:text-xl"
            >
              Hidden gems, insider experiences, and unforgettable moments with the most interesting locals on the island.
              Your real <span className="ink-underline italic">Cuban Bucket List</span> starts here.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              id="newsletter"
              className="mt-8"
            >
              <p className="mb-3 font-hand text-xl text-mustard">Join the free weekly newsletter ↓</p>
              <NewsletterForm variant="hero" />
            </motion.div>
          </motion.div>

          {/* Right column — trust strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="md:col-span-4"
          >
            <div className="flex flex-row items-center gap-5 md:flex-col md:items-end md:gap-3 md:text-right">
              <div className="flex -space-x-2">
                {['#D9A441', '#E5613D', '#2C8C84', '#A8462C'].map((c, i) => (
                  <span
                    key={i}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-parchment text-xs font-semibold text-parchment"
                    style={{ background: c }}
                  >
                    {['L', 'Y', 'T', 'R'][i]}
                  </span>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl italic text-mustard">2,847</span>
                <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-parchment/75">
                  travelers on the list
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-parchment/80 hover:text-parchment"
        aria-label="Scroll to next section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.32em]">Begin the journey</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5 animate-bounce-slow" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5 L12 19 M5 12 L12 19 L19 12" />
          </svg>
        </div>
      </a>
    </section>
  );
}

function Palm({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 140 Q50 100 48 60" />
      <path d="M48 60 Q30 50 14 56" />
      <path d="M48 60 Q34 38 18 30" />
      <path d="M48 60 Q44 36 38 18" />
      <path d="M48 60 Q60 38 78 32" />
      <path d="M48 60 Q66 50 86 56" />
      <path d="M48 60 Q56 44 70 18" />
      <circle cx="48" cy="60" r="3" fill="currentColor" />
    </svg>
  );
}
