'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap, InstagramGlyph, HeartGlyph } from '../icons';
import { FiligreeCorner, GoldSeal, OvalVignette, RibbonBanner, TobaccoGarland } from './Filigree';

export function VoteSection8() {
  const [signedIn, setSignedIn] = useState(false);
  const [signing, setSigning] = useState(false);
  const [voted, setVoted] = useState<Record<string, boolean>>({});
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(experiences.map((e) => [e.id, e.votes])),
  );

  const handleSignIn = async () => {
    if (signing || signedIn) return;
    setSigning(true);
    await new Promise((r) => setTimeout(r, 900));
    setSigning(false);
    setSignedIn(true);
  };

  const handleVote = (id: string) => {
    if (!signedIn) { handleSignIn(); return; }
    if (voted[id]) return;
    setVoted((v) => ({ ...v, [id]: true }));
    setCounts((c) => ({ ...c, [id]: c[id] + 1 }));
  };

  return (
    <section id="vote" className="relative border-y border-[var(--v8-gold-2)]/50 v8-paper bg-gradient-to-b from-[var(--v8-ivory-2)] to-[var(--v8-ivory)] py-20 md:py-32">
      <TobaccoGarland className="mx-auto h-8 w-full max-w-3xl text-[var(--v8-gold-2)] -mt-10 mb-10" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <p className="v8-display italic text-xs uppercase tracking-[0.45em] text-[var(--v8-crimson)]">— Sello № IV —</p>
          <h2 className="mt-4 v8-display text-5xl leading-[0.95] text-[var(--v8-ink)] sm:text-6xl md:text-8xl v8-emboss">
            CONNOISSEUR’S
          </h2>
          <p className="v8-script v8-gold-shimmer text-6xl md:text-[140px] leading-[0.85] -mt-2">Council</p>
        </motion.div>

        <p className="mt-8 mx-auto max-w-3xl text-center v8-body italic text-lg leading-relaxed text-[var(--v8-ink)]/85 md:text-xl">
          Sign in via Instagram and submit your ballot for the experience you most wish to see staged.
          The vitola that first gathers five hundred seals enters production —
          <span className="not-italic v8-display tracking-wide"> and you, dear voter, are first to be invited.</span>
        </p>

        {/* Sign-in row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <AnimatePresence mode="wait">
            {!signedIn ? (
              <motion.button
                key="in" type="button" onClick={handleSignIn} disabled={signing}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="v8-sheen group inline-flex items-center gap-3 border border-[var(--v8-gold-2)] bg-gradient-to-b from-[var(--v8-crimson)] to-[var(--v8-crimson-deep)] px-6 py-4 v8-display italic text-base uppercase tracking-[0.22em] text-[var(--v8-cream)] hover:from-[var(--v8-crimson-deep)] hover:to-[var(--v8-crimson)]"
              >
                <InstagramGlyph className="h-5 w-5" />
                {signing ? 'CASTING SEAL . . .' : '✦ SIGN IN VIA INSTAGRAM'}
              </motion.button>
            ) : (
              <motion.div
                key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-4 border border-[var(--v8-gold-2)] bg-[var(--v8-cream)] px-5 py-3"
              >
                <GoldSeal className="h-12 w-12" label="✦" />
                <span className="flex flex-col leading-tight">
                  <span className="v8-display italic text-[10px] uppercase tracking-[0.32em] text-[var(--v8-crimson)]">REGISTERED AS</span>
                  <span className="v8-script text-3xl text-[var(--v8-ink)]">@havana_in_amber</span>
                </span>
                <span className="v8-display italic text-[10px] uppercase tracking-[0.28em] border border-[var(--v8-emerald)] bg-[var(--v8-emerald)]/10 text-[var(--v8-emerald)] px-2 py-0.5">III SEALS LEFT</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trending */}
        <div className="mt-12">
          <p className="text-center mb-3 v8-display italic text-xs uppercase tracking-[0.45em] text-[var(--v8-crimson)]">
            ✦ Most Sealed This Quarter ✦
          </p>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((t, i) => {
              const exp = experiences.find((e) => e.id === t.id)!;
              const Icon = iconMap[exp.icon];
              return (
                <li key={t.id} className="border border-[var(--v8-gold-2)] bg-[var(--v8-cream)] p-4 flex items-center gap-3">
                  <span className="v8-script v8-gold-text text-4xl w-7">{['I','II','III','IV'][i]}</span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--v8-gold-2)]"
                    style={{ background: `linear-gradient(135deg, ${exp.palette.from}, ${exp.palette.to})` }}>
                    <Icon className="h-7 w-7" stroke={exp.palette.ink} accent={exp.palette.accent} />
                  </span>
                  <span className="flex flex-col min-w-0 leading-tight">
                    <span className="v8-display italic text-[10px] uppercase tracking-[0.22em] text-[var(--v8-emerald)]">{t.delta} new</span>
                    <span className="truncate v8-display italic text-base text-[var(--v8-ink)]">{exp.title}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Vote tiles */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon];
            const isVoted = !!voted[exp.id];
            const count = counts[exp.id];
            const pct = Math.min(100, (count / exp.goal) * 100);
            const milestone = count >= exp.goal;
            const ribbonTones: ('crimson' | 'emerald' | 'navy')[] = ['crimson', 'emerald', 'navy'];
            return (
              <motion.article
                key={exp.id} id={`vote-${exp.id}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="v8-sheen v8-filigree relative flex flex-col p-5"
              >
                <FiligreeCorner className="absolute -top-1 -left-1 h-10 w-10" />
                <FiligreeCorner className="absolute -top-1 -right-1 h-10 w-10" flip="x" />
                <FiligreeCorner className="absolute -bottom-1 -left-1 h-10 w-10" flip="y" />
                <FiligreeCorner className="absolute -bottom-1 -right-1 h-10 w-10" flip="xy" />

                <p className="text-center v8-display italic text-[10px] uppercase tracking-[0.4em] text-[var(--v8-crimson)]">
                  — Vitola N. {String(i + 1).padStart(2, '0')} —
                </p>

                <p className="text-center v8-script v8-gold-shimmer text-3xl leading-tight">Cuban</p>

                <OvalVignette className="mt-2 aspect-[5/3] w-full">
                  <div
                    className="h-full w-full v8-vignette flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
                  >
                    <Icon className="relative h-24 w-24" stroke={exp.palette.ink} accent={exp.palette.accent} />
                  </div>
                </OvalVignette>

                <div className="mt-3 flex justify-center">
                  <RibbonBanner tone={ribbonTones[i % 3]} className="h-7 max-w-full">
                    <span className="v8-display italic text-[10px] uppercase tracking-[0.22em] truncate block">{exp.region}</span>
                  </RibbonBanner>
                </div>

                <h3 className="mt-3 text-center v8-display italic text-lg leading-tight text-[var(--v8-ink)] md:text-xl">{exp.title}</h3>
                <p className="mt-1.5 text-center v8-body italic text-base leading-snug text-[var(--v8-ink)]/70 line-clamp-2">{exp.blurb}</p>

                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-center gap-3">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={count}
                        initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 8, opacity: 0 }}
                        className="v8-display text-3xl font-bold tabular-nums text-[var(--v8-ink)] v8-emboss"
                      >
                        {count.toLocaleString()}
                      </motion.span>
                    </AnimatePresence>
                    <span className="v8-display italic text-[10px] uppercase tracking-[0.28em] text-[var(--v8-crimson)]">/ {exp.goal} seals</span>
                    {milestone && (
                      <span className="v8-display italic text-[10px] uppercase tracking-[0.22em] border border-[var(--v8-emerald)] bg-[var(--v8-emerald)]/10 text-[var(--v8-emerald)] px-1.5 py-0.5">
                        ENGRAVED ✓
                      </span>
                    )}
                  </div>
                  <div className="h-2 w-full overflow-hidden border border-[var(--v8-gold-2)] bg-[var(--v8-cream)]">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full"
                      style={{ background: 'linear-gradient(90deg, #F5D78E, #C9941E, #8C6510)' }}
                    />
                  </div>
                </div>

                <div className="relative mt-5">
                  {isVoted && (
                    <span className="pointer-events-none absolute -right-2 -top-2 z-10 v8-seal-press">
                      <GoldSeal className="h-12 w-12" label="✓" />
                    </span>
                  )}
                  <button
                    type="button" onClick={() => handleVote(exp.id)}
                    className={`v8-sheen w-full inline-flex items-center justify-center gap-2 border border-[var(--v8-gold-2)] py-3 v8-display italic text-sm uppercase tracking-[0.22em] transition-colors ${
                      isVoted
                        ? 'bg-gradient-to-b from-[var(--v8-emerald)] to-[var(--v8-emerald-deep)] text-[var(--v8-cream)]'
                        : 'bg-gradient-to-b from-[var(--v8-crimson)] to-[var(--v8-crimson-deep)] text-[var(--v8-cream)] hover:from-[var(--v8-crimson-deep)] hover:to-[var(--v8-crimson)]'
                    }`}
                  >
                    <HeartGlyph filled={isVoted} className="h-4 w-4" />
                    {isVoted ? 'Sealed' : signedIn ? 'Affix Seal' : 'Sign in & Seal'}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <TobaccoGarland className="mx-auto h-8 w-full max-w-3xl text-[var(--v8-gold-2)] mt-16 -mb-10" />
    </section>
  );
}
