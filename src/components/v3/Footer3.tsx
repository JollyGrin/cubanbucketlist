'use client';

import { motion } from 'framer-motion';
import { NewsletterForm3 } from './NewsletterForm3';
import { InstagramGlyph } from '../icons';

const cities = ['HABANA', 'TRINIDAD', 'VIÑALES', 'SANTIAGO', 'BARACOA', 'CIENFUEGOS', 'CAMAGÜEY', 'GRANMA'];

export function Footer3() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-[var(--v3-ink)] bg-[var(--v3-ink)] text-[var(--v3-paper)]">
      {/* Marquee row */}
      <div className="overflow-hidden border-b-2 border-[var(--v3-paper)] bg-[var(--v3-pink)] py-4">
        <div className="v3-tape flex w-max items-center gap-8 whitespace-nowrap v3-display text-3xl font-black uppercase text-white md:text-5xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex items-center gap-8">
              {cities.map((c) => (
                <span key={`${dup}-${c}`} className="flex items-center gap-8">
                  {c}<span className="text-[var(--v3-yellow)]">★</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <span className="v3-mono text-xs font-bold uppercase tracking-wider text-[var(--v3-yellow)]">★ ONE LAST THING</span>
            <h2 className="mt-4 v3-display text-5xl font-black uppercase leading-[0.85] tracking-[-0.01em] md:text-[110px]">
              GET IT IN <br />
              YOUR <span className="bg-[var(--v3-yellow)] px-3 text-[var(--v3-ink)]">INBOX.</span>
            </h2>
            <p className="mt-4 max-w-md v3-mono text-base font-medium text-white/75">
              Free, twice a month. New hidden gems, the locals behind them, and a heads up before each experience opens for booking.
            </p>
          </div>
          <div className="md:col-span-5">
            <NewsletterForm3 tone="ink" />
            <a
              href="#vote"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[var(--v3-yellow)] bg-[var(--v3-yellow)] px-4 py-2.5 v3-display text-lg font-black uppercase text-[var(--v3-ink)] v3-shadow-sm"
            >
              <InstagramGlyph className="h-4 w-4" /> OR JUMP TO VOTING ★
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 border-t-2 border-white/15 pt-8 md:grid-cols-12">
          <div className="md:col-span-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[var(--v3-paper)] bg-[var(--v3-pink)] v3-display text-2xl font-black text-white">¡C!</span>
            <div className="flex flex-col leading-none">
              <span className="v3-display text-xl font-black uppercase">CUBANBUCKETLIST</span>
              <span className="v3-mono text-[10px] font-bold uppercase tracking-wider opacity-65">EST. 2026 · VOL. 01</span>
            </div>
          </div>
          <ul className="md:col-span-4 grid grid-cols-2 gap-y-2 v3-mono text-xs font-bold uppercase text-white/70">
            <li><a className="hover:text-[var(--v3-yellow)]" href="#about">ABOUT</a></li>
            <li><a className="hover:text-[var(--v3-yellow)]" href="#journal">JOURNAL</a></li>
            <li><a className="hover:text-[var(--v3-yellow)]" href="#experiences">TRIPS</a></li>
            <li><a className="hover:text-[var(--v3-yellow)]" href="#vote">VOTE</a></li>
            <li><a className="hover:text-[var(--v3-yellow)]" href="#network">LOCALS</a></li>
            <li><a className="hover:text-[var(--v3-yellow)]" href="#newsletter">JOIN</a></li>
          </ul>
          <div className="md:col-span-4 md:text-right v3-mono text-xs font-bold uppercase text-white/55">
            © 2026 CUBANBUCKETLIST · OPERATED UNDER SUPPORT-FOR-THE-CUBAN-PEOPLE COMPLIANCE.
          </div>
        </div>
      </div>
    </footer>
  );
}
