'use client';

import { motion } from 'framer-motion';
import { NewsletterForm8 } from './NewsletterForm8';
import { GoldSeal, TobaccoGarland, RibbonBanner } from './Filigree';
import { InstagramGlyph } from '../icons';

const provinces = ['HABANA', 'TRINIDAD', 'VIÑALES', 'SANTIAGO', 'BARACOA', 'CIENFUEGOS', 'CAMAGÜEY', 'GRANMA'];

export function Footer8() {
  return (
    <footer className="relative bg-gradient-to-b from-[var(--v8-crimson)] to-[var(--v8-crimson-deep)] text-[var(--v8-cream)] border-t-2 border-[var(--v8-gold-2)]">
      {/* Cigar band marquee */}
      <div className="overflow-hidden border-y border-[var(--v8-gold-2)] bg-[var(--v8-crimson-deep)] py-3">
        <div className="v8-marquee flex w-max items-center gap-10 whitespace-nowrap v8-display italic text-2xl text-[var(--v8-gold-1)] md:text-4xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex items-center gap-10">
              {provinces.map((c) => (
                <span key={`${dup}-${c}`} className="flex items-center gap-10 v8-engrave-light">
                  {c}<span className="text-[var(--v8-gold-1)]">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <TobaccoGarland className="mx-auto h-8 w-full max-w-3xl text-[var(--v8-gold-1)] mt-12" />

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <p className="v8-display italic text-xs uppercase tracking-[0.45em] text-[var(--v8-gold-1)]">— Final Sello —</p>
          <h2 className="mt-4 v8-display text-5xl leading-[0.95] text-[var(--v8-cream)] md:text-7xl v8-engrave-light">
            JOIN THE
          </h2>
          <p className="v8-script v8-gold-shimmer text-6xl md:text-[140px] leading-[0.85]">register</p>
        </motion.div>

        <div className="mt-10 mx-auto max-w-xl">
          <NewsletterForm8 />
          <a href="#vote" className="mt-5 inline-flex items-center gap-2 v8-script v8-gold-text text-3xl">
            <InstagramGlyph className="h-5 w-5" /> or seal a vote at once →
          </a>
        </div>

        <div className="mt-12 flex justify-center">
          <RibbonBanner tone="navy" className="h-9">
            <span className="v8-display italic text-xs uppercase tracking-[0.32em]">Edición fina · vol. I · MMXXVI</span>
          </RibbonBanner>
        </div>

        <div className="mt-12 grid gap-6 border-t border-[var(--v8-gold-2)]/40 pt-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4 flex items-center gap-3">
            <GoldSeal className="h-10 w-10" label="CB" />
            <div className="flex flex-col leading-none">
              <span className="v8-script v8-gold-text text-2xl">Cuban Bucket List</span>
              <span className="v8-display italic text-[10px] uppercase tracking-[0.32em] text-[var(--v8-gold-1)]/85">Edición fina · MMXXVI</span>
            </div>
          </div>
          <ul className="md:col-span-4 grid grid-cols-2 gap-y-2 v8-display italic text-[10px] uppercase tracking-[0.32em] text-[var(--v8-cream)]/75">
            {['About', 'Vitolas', 'Council', 'Maestros', 'Tabaquería', 'Subscribe'].map((l) => (
              <li key={l}><a className="hover:text-[var(--v8-gold-1)]" href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
          <div className="md:col-span-4 md:text-right v8-display italic text-[10px] uppercase tracking-[0.28em] text-[var(--v8-cream)]/60">
            © 2026 Cuban Bucket List · operated under support-for-the-Cuban-people compliance
          </div>
        </div>
      </div>
    </footer>
  );
}
