'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap, InstagramGlyph, HeartGlyph } from '../icons';
import { CompassRose, WaxSeal, Flourish } from './Cartouche';

export function VoteSection4() {
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
    <section
      id="vote"
      className="relative border-t-2 border-[var(--v4-ink)] v4-parchment py-20 md:py-32"
    >
      <CompassRose className="pointer-events-none absolute right-4 top-12 hidden h-40 w-40 text-[var(--v4-ink)]/15 md:right-12 md:top-20 md:block" spinning />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="mb-12 border-b-2 border-[var(--v4-ink)] pb-6"
        >
          <span className="v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-crimson)]">Chap. IV — The Reader’s Vote</span>
          <h2 className="mt-4 v4-display text-4xl leading-[1.02] text-[var(--v4-ink)] sm:text-5xl md:text-7xl">
            <em>Mark thy choice</em> with a wax seal.
          </h2>
          <Flourish className="mt-6 h-3 w-56 text-[var(--v4-ink)]" />
        </motion.div>

        <p className="max-w-3xl v4-display text-lg leading-relaxed text-[var(--v4-ink-soft)] md:text-xl"
          style={{ textIndent: '2em' }}>
          Sign in by way of Instagram and lend thy vote to whichever voyage thou wouldst most desire to
          live. The chart that first attains five hundred seals shall be drawn into a real journey —
          and those who marked it shall receive the first invitation by post.
        </p>

        {/* Sign-in row */}
        <div className="mt-10 grid items-center gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              {!signedIn ? (
                <motion.button
                  key="in" type="button" onClick={handleSignIn} disabled={signing}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="group inline-flex items-center gap-3 border-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] px-6 py-4 v4-display italic text-xl text-[var(--v4-vellum)] transition-colors hover:bg-[var(--v4-crimson)]"
                >
                  <InstagramGlyph className="h-5 w-5" />
                  {signing ? 'Affixing identity . . .' : 'Sign by way of Instagram'}
                  <span aria-hidden>✦</span>
                </motion.button>
              ) : (
                <motion.div
                  key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-4 border-2 border-[var(--v4-ink)] bg-[var(--v4-vellum-2)] px-5 py-3"
                >
                  <WaxSeal className="h-12 w-12" label="✦" />
                  <div className="flex flex-col leading-tight">
                    <span className="v4-sc text-[10px] tracking-[0.28em] text-[var(--v4-ink-soft)]">SEALED IN AS</span>
                    <span className="v4-display italic text-2xl text-[var(--v4-ink)]">@havana_in_amber</span>
                  </div>
                  <span className="ml-2 v4-sc text-[10px] tracking-[0.28em] text-[var(--v4-crimson)] border border-[var(--v4-crimson)] px-2 py-0.5">
                    III SEALS REMAINING
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="v4-hand text-2xl text-[var(--v4-deep-blue)]">— first to 500 wins —</p>
          </div>
        </div>

        {/* Trending — leaderboard */}
        <div className="mt-12">
          <p className="mb-3 v4-sc text-[10px] uppercase tracking-[0.32em] text-[var(--v4-crimson)]">Most Sealed This Fortnight</p>
          <ol className="grid gap-px border-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((t, i) => {
              const exp = experiences.find((e) => e.id === t.id)!;
              const Icon = iconMap[exp.icon];
              return (
                <li key={t.id} className="bg-[var(--v4-vellum)] p-4 flex items-center gap-3">
                  <span className="v4-display italic text-3xl text-[var(--v4-crimson)] w-6">{['I', 'II', 'III', 'IV'][i]}</span>
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-[var(--v4-ink)]"
                    style={{ background: `linear-gradient(135deg, ${exp.palette.from}, ${exp.palette.to})` }}
                  >
                    <Icon className="h-7 w-7" stroke={exp.palette.ink} accent={exp.palette.accent} />
                  </span>
                  <span className="flex flex-col min-w-0 leading-tight">
                    <span className="v4-sc text-[9px] tracking-[0.22em] text-[var(--v4-deep-blue)]">{t.delta} new seals</span>
                    <span className="truncate v4-display italic text-base text-[var(--v4-ink)]">{exp.title}</span>
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
            return (
              <motion.article
                key={exp.id}
                id={`vote-${exp.id}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex flex-col border-2 border-[var(--v4-ink)] bg-[var(--v4-vellum)]"
              >
                {/* Plate label */}
                <div className="flex items-center justify-between border-b-2 border-[var(--v4-ink)] bg-[var(--v4-ink)] px-3 py-1 text-[var(--v4-vellum)]">
                  <span className="v4-sc text-[9px] tracking-[0.32em]">PLATE №{String(i + 1).padStart(2, '0')}</span>
                  <span className="v4-sc text-[9px] tracking-[0.32em]">{exp.region}</span>
                </div>

                <div
                  className="relative h-44 overflow-hidden border-b-2 border-[var(--v4-ink)] md:h-48"
                  style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
                >
                  <div aria-hidden className="absolute inset-0 bg-[var(--v4-vellum)]/25 mix-blend-multiply" />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-28 w-28" stroke={exp.palette.ink} accent={exp.palette.accent} />
                  </div>
                  {isVoted && (
                    <span className="absolute right-3 top-3 v4-seal-press">
                      <WaxSeal className="h-12 w-12" label="✓" />
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="v4-display italic text-xl leading-tight text-[var(--v4-ink)] md:text-2xl">{exp.title}</h3>
                  <p className="mt-1.5 v4-display text-base leading-snug text-[var(--v4-ink-soft)] line-clamp-2">{exp.blurb}</p>

                  <div className="mt-4">
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <div className="flex items-baseline gap-2">
                        <AnimatePresence mode="popLayout">
                          <motion.span
                            key={count}
                            initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 8, opacity: 0 }}
                            className="v4-display italic text-2xl tabular-nums text-[var(--v4-ink)]"
                          >
                            {count.toLocaleString()}
                          </motion.span>
                        </AnimatePresence>
                        <span className="v4-sc text-[10px] tracking-[0.22em] text-[var(--v4-ink-soft)]">/ {exp.goal} seals</span>
                      </div>
                      {milestone && (
                        <span className="v4-sc text-[10px] tracking-[0.28em] text-[var(--v4-crimson)] border border-[var(--v4-crimson)] px-1.5 py-0.5">
                          CHARTERED ✓
                        </span>
                      )}
                    </div>
                    <div className="h-2 w-full overflow-hidden border border-[var(--v4-ink)] bg-[var(--v4-vellum-2)]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full"
                        style={{ background: milestone ? 'var(--v4-crimson)' : 'var(--v4-deep-blue)' }}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleVote(exp.id)}
                    className={`mt-5 inline-flex items-center justify-center gap-2 border-2 border-[var(--v4-ink)] py-3 v4-display italic text-lg transition-colors ${
                      isVoted
                        ? 'bg-[var(--v4-crimson)] text-[var(--v4-vellum)]'
                        : 'bg-[var(--v4-ink)] text-[var(--v4-vellum)] hover:bg-[var(--v4-crimson)]'
                    }`}
                  >
                    <HeartGlyph filled={isVoted} className="h-4 w-4" />
                    {isVoted ? 'Sealed ✓' : signedIn ? 'Affix thy seal' : 'Sign in & seal'}
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
