'use client';

import { motion } from 'framer-motion';
import { NewsletterForm7 } from './NewsletterForm7';
import { InstagramGlyph } from '../icons';

const cities = ['HABANA', 'TRINIDAD', 'VIÑALES', 'SANTIAGO', 'BARACOA', 'CIENFUEGOS', 'CAMAGÜEY', 'GRANMA'];

export function Footer7() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-[var(--v7-ink)] bg-[var(--v7-ink)] text-[var(--v7-cream)]">
      <div className="overflow-hidden border-b-4 border-[var(--v7-yellow)] bg-[var(--v7-yellow)] py-3">
        <div className="v7-marquee flex w-max items-center gap-10 whitespace-nowrap v7-block text-2xl text-[var(--v7-ink)] md:text-4xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex items-center gap-10">
              {cities.map((c) => (
                <span key={`${dup}-${c}`} className="flex items-center gap-10">{c}<span className="text-[var(--v7-coral)]">✺</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="grid gap-10 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <span className="v7-body text-xs uppercase tracking-wider font-bold text-[var(--v7-yellow)]">✺ ÚLTIMA COSA</span>
            <h2 className="mt-3 leading-[0.85] text-5xl md:text-[110px]">
              <span className="block v7-block text-[var(--v7-cream)]">APÚNTATE A</span>
              <span className="block v7-brush text-[var(--v7-yellow)] text-[60px] md:text-[140px] -my-1">la lista.</span>
            </h2>
            <p className="mt-4 max-w-md v7-body text-base font-medium text-[var(--v7-cream)]/75">
              Gratis · dos veces al mes · joyas escondidas · gente local · aviso antes de cada viaje nuevo.
            </p>
          </div>
          <div className="md:col-span-5">
            <NewsletterForm7 />
            <a href="#vote" className="v7-sign bg-[var(--v7-yellow)] text-[var(--v7-ink)] mt-5 inline-flex items-center gap-2 px-4 py-2 v7-brush text-2xl"
              style={{ ['--tilt' as string]: '-1deg' }}>
              <InstagramGlyph className="h-5 w-5" /> o vota ya →
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 border-t-2 border-[var(--v7-cream)]/15 pt-8 md:grid-cols-12">
          <div className="md:col-span-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--v7-cream)] bg-[var(--v7-coral)] v7-block">CB</span>
            <div className="flex flex-col leading-none">
              <span className="v7-block text-base">CUBANBUCKETLIST</span>
              <span className="v7-brush text-base text-[var(--v7-yellow)]">est. 2026 · vol. 01</span>
            </div>
          </div>
          <ul className="md:col-span-4 grid grid-cols-2 gap-y-2 v7-body text-xs uppercase tracking-wider font-bold text-[var(--v7-cream)]/75">
            {['About', 'Tienda', 'Vota', 'Diario', 'Gente', 'Apúntate'].map((l) => (
              <li key={l}><a className="hover:text-[var(--v7-yellow)]" href={`#${l.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}`}>{l}</a></li>
            ))}
          </ul>
          <div className="md:col-span-4 md:text-right v7-body text-xs uppercase tracking-wider font-bold text-[var(--v7-cream)]/55">
            © 2026 CUBANBUCKETLIST · operado bajo support-for-the-cuban-people compliance
          </div>
        </div>
      </div>
    </footer>
  );
}
