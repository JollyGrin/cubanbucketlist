'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap, InstagramGlyph, HeartGlyph } from '../icons';
import { ScallopBorder, DecoChevron } from './Deco';

export function VoteSection6() {
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
    <section id="vote" className="relative v6-curtain py-20 md:py-32 border-t-2 border-[var(--v6-marquee)]">
      <ScallopBorder className="absolute inset-x-0 top-0 h-3 w-full text-[var(--v6-marquee)]" />

      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}
          className="text-center"
        >
          <span className="v6-display text-[10px] uppercase tracking-[0.45em] text-[var(--v6-marquee)]">PROGRAM ✦ ACT IV</span>
          <h2 className="mt-4 v6-display text-4xl leading-[0.95] text-[var(--v6-cream)] sm:text-6xl md:text-8xl">
            AUDIENCE FAVOURITE
          </h2>
          <p className="mt-3 v6-script text-3xl v6-gold">— cast your ballot —</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-8 mx-auto max-w-3xl text-center font-[var(--font-v6-body)] text-lg italic leading-relaxed text-[var(--v6-cream)]/80 md:text-xl"
        >
          Sign in via Instagram and vote for the act you’d like to see staged first.
          The top-billed experience opens the next season — and voters get the first call.
        </motion.p>

        {/* Sign-in row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <AnimatePresence mode="wait">
            {!signedIn ? (
              <motion.button
                key="in" type="button" onClick={handleSignIn} disabled={signing}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="group v6-display inline-flex items-center gap-3 border-2 border-[var(--v6-marquee)] bg-[var(--v6-marquee)] px-6 py-4 text-sm tracking-[0.22em] text-[var(--v6-night)] transition-colors hover:bg-[var(--v6-cream)]"
              >
                <InstagramGlyph className="h-5 w-5" />
                {signing ? 'TAKING YOUR SEAT . . .' : 'SIGN IN VIA INSTAGRAM ✦'}
              </motion.button>
            ) : (
              <motion.div
                key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-4 border-2 border-[var(--v6-marquee)] bg-[var(--v6-night-2)] px-5 py-3"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--v6-marquee)] text-[var(--v6-night)]">
                  <InstagramGlyph className="h-5 w-5" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="v6-display text-[10px] tracking-[0.32em] text-[var(--v6-rose-gold)]">SEATED AS</span>
                  <span className="v6-script text-2xl text-[var(--v6-marquee)]">@havana_in_amber</span>
                </span>
                <span className="v6-display ml-2 text-[10px] tracking-[0.28em] text-[var(--v6-cream)]/70 border border-[var(--v6-marquee)] px-2 py-0.5">III BALLOTS LEFT</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trending */}
        <div className="mt-12">
          <p className="text-center mb-3 v6-display text-[10px] uppercase tracking-[0.45em] text-[var(--v6-rose-gold)]">
            ✦ Top of the Bill This Week ✦
          </p>
          <ol className="grid gap-px border-2 border-[var(--v6-marquee)] bg-[var(--v6-marquee)] sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((t, i) => {
              const exp = experiences.find((e) => e.id === t.id)!;
              const Icon = iconMap[exp.icon];
              return (
                <li key={t.id} className="bg-[var(--v6-night-2)] p-4 flex items-center gap-3">
                  <span className="v6-display text-3xl v6-gold w-7">{['I','II','III','IV'][i]}</span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--v6-marquee)]"
                    style={{ background: `linear-gradient(135deg, ${exp.palette.from}, ${exp.palette.to})` }}>
                    <Icon className="h-7 w-7" stroke={exp.palette.ink} accent={exp.palette.accent} />
                  </span>
                  <span className="flex flex-col min-w-0 leading-tight">
                    <span className="v6-display text-[9px] tracking-[0.28em] text-[var(--v6-marquee)]">{t.delta} new</span>
                    <span className="truncate v6-display text-base text-[var(--v6-cream)]">{exp.title}</span>
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
                key={exp.id} id={`vote-${exp.id}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex flex-col border-2 border-[var(--v6-marquee)] bg-[var(--v6-night-2)]"
              >
                {/* Plate header */}
                <div className="flex items-center justify-between bg-[var(--v6-marquee)] px-3 py-1.5">
                  <span className="v6-display text-[10px] tracking-[0.32em] text-[var(--v6-night)]">ACT №{String(i + 1).padStart(2, '0')}</span>
                  <span className="v6-script text-base text-[var(--v6-night)]">{exp.region}</span>
                </div>

                <div
                  className="relative aspect-[5/3] overflow-hidden border-b-2 border-[var(--v6-marquee)]"
                  style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
                >
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--v6-night)]/35" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-24 w-24" stroke={exp.palette.ink} accent={exp.palette.accent} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 text-center">
                  <h3 className="v6-display text-xl leading-tight text-[var(--v6-cream)] md:text-2xl">{exp.title}</h3>
                  <p className="mt-2 font-[var(--font-v6-body)] text-base italic leading-snug text-[var(--v6-cream)]/75 line-clamp-2">{exp.blurb}</p>

                  <div className="mt-4">
                    <div className="mb-1.5 flex items-center justify-center gap-3">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={count}
                          initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 8, opacity: 0 }}
                          className="v6-display text-3xl tabular-nums text-[var(--v6-marquee)]"
                        >
                          {count.toLocaleString()}
                        </motion.span>
                      </AnimatePresence>
                      <span className="v6-display text-[10px] uppercase tracking-[0.28em] text-[var(--v6-cream)]/60">/ {exp.goal} ballots</span>
                      {milestone && (
                        <span className="v6-display text-[10px] tracking-[0.28em] text-[var(--v6-night)] bg-[var(--v6-marquee)] px-1.5 py-0.5">
                          BOOKED ✓
                        </span>
                      )}
                    </div>
                    <div className="h-2 w-full overflow-hidden border border-[var(--v6-marquee)] bg-[var(--v6-night)]">
                      <motion.div
                        initial={{ width: 0 }} animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full"
                        style={{ background: 'linear-gradient(90deg, var(--v6-coral), var(--v6-marquee), var(--v6-rose-gold))' }}
                      />
                    </div>
                  </div>

                  <button
                    type="button" onClick={() => handleVote(exp.id)}
                    className={`mt-5 inline-flex items-center justify-center gap-2 border-2 border-[var(--v6-marquee)] py-3 v6-display text-sm tracking-[0.22em] transition-colors ${
                      isVoted
                        ? 'bg-[var(--v6-coral)] text-[var(--v6-cream)]'
                        : 'bg-[var(--v6-marquee)] text-[var(--v6-night)] hover:bg-[var(--v6-cream)]'
                    }`}
                  >
                    <HeartGlyph filled={isVoted} className="h-4 w-4" />
                    {isVoted ? 'BALLOT CAST ✓' : signedIn ? 'CAST BALLOT' : 'SIGN IN & VOTE'}
                  </button>
                  {!isVoted && (
                    <div className="mt-2 flex justify-center gap-2 text-[var(--v6-rose-gold)]">
                      <DecoChevron className="h-2 w-6" />
                      <DecoChevron className="h-2 w-6" />
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
