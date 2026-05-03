'use client';

import { Reveal5 } from './primitives';
import { NewsletterForm5 } from './NewsletterForm5';
import { InstagramGlyph } from '../icons';

const cities = ['HABANA', 'TRINIDAD', 'VIÑALES', 'SANTIAGO', 'BARACOA', 'CIENFUEGOS', 'CAMAGÜEY', 'GRANMA'];

export function Footer5() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-[var(--v5-ink)] bg-[var(--v5-ink)] text-white">
      <div className="overflow-hidden border-b-2 border-white v5-iridescent py-4">
        <div className="v5-marquee flex w-max items-center gap-10 whitespace-nowrap v5-display text-3xl text-[var(--v5-ink)] md:text-5xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex items-center gap-10">
              {cities.map((c) => (
                <span key={`${dup}-${c}`} className="flex items-center gap-10">{c}<span>✦</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <Reveal5>
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <span className="v5-mono text-base uppercase text-[var(--v5-yellow)]">✦ one last thing</span>
              <h2 className="mt-3 v5-display text-5xl leading-[0.85] md:text-[120px]">
                <span className="block">get it in</span>
                <span className="block v5-chrome-text">your inbox.</span>
              </h2>
              <p className="mt-4 max-w-md v5-mono text-base text-white/75">
                Free, twice a month. New hidden gems, the locals behind them, and a heads up before each experience opens for booking.
              </p>
            </div>
            <div className="md:col-span-5">
              <NewsletterForm5 />
              <a
                href="#vote"
                className="v5-chrome-btn mt-5 inline-flex items-center gap-2 rounded-full border-2 border-[var(--v5-ink)] px-4 py-2.5 v5-display text-lg text-[var(--v5-ink)]"
              >
                <InstagramGlyph className="h-4 w-4" /> ✦ or jump to voting
              </a>
            </div>
          </div>
        </Reveal5>

        <div className="mt-16 grid gap-6 border-t-2 border-white/15 pt-8 md:grid-cols-12">
          <div className="md:col-span-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full v5-iridescent">
              <span className="v5-display text-base text-[var(--v5-ink)]">cb</span>
            </span>
            <div className="flex flex-col leading-none">
              <span className="v5-display text-2xl">CUBANBUCKETLIST</span>
              <span className="v5-mono text-sm uppercase opacity-65">est. 2026 · vol. 01</span>
            </div>
          </div>
          <ul className="md:col-span-4 grid grid-cols-2 gap-y-2 v5-mono text-base uppercase text-white/75">
            {['About', 'Journal', 'Trips', 'Vote', 'Locals', 'Join'].map((l) => (
              <li key={l}><a className="hover:text-[var(--v5-yellow)]" href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
          <div className="md:col-span-4 md:text-right v5-mono text-base uppercase text-white/55">
            © 2026 cubanbucketlist · operated under support-for-the-cuban-people compliance
          </div>
        </div>
      </div>
    </footer>
  );
}
