'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap, InstagramGlyph, HeartGlyph } from '../icons';

export function VoteSection2() {
  const [signedIn, setSignedIn] = useState(false);
  const [signing, setSigning] = useState(false);
  const [active, setActive] = useState(0);
  const [voted, setVoted] = useState<Record<string, boolean>>({});
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(experiences.map((e) => [e.id, e.votes])),
  );

  const exp = experiences[active];
  const Icon = iconMap[exp.icon];
  const count = counts[exp.id];
  const pct = Math.min(100, (count / exp.goal) * 100);
  const isVoted = !!voted[exp.id];
  const milestone = count >= exp.goal;

  const trendingFull = useMemo(
    () => trending.map((t) => ({ ...t, exp: experiences.find((e) => e.id === t.id)! })),
    [],
  );

  const handleSignIn = async () => {
    if (signing || signedIn) return;
    setSigning(true);
    await new Promise((r) => setTimeout(r, 900));
    setSigning(false);
    setSignedIn(true);
  };

  const handleVote = () => {
    if (!signedIn) { handleSignIn(); return; }
    if (isVoted) return;
    setVoted((v) => ({ ...v, [exp.id]: true }));
    setCounts((c) => ({ ...c, [exp.id]: c[exp.id] + 1 }));
  };

  const next = () => setActive((a) => (a + 1) % experiences.length);
  const prev = () => setActive((a) => (a - 1 + experiences.length) % experiences.length);

  return (
    <section id="vote" className="relative border-t v2-rule bg-[var(--v2-ink)] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-12 flex items-baseline justify-between border-b v2-rule pb-6">
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)]">§ IV — Reader’s vote</span>
          <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">
            {String(active + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
          </span>
        </div>

        <div className="grid items-end gap-8 md:grid-cols-12 md:gap-12">
          <h2 className="md:col-span-7 v2-display text-4xl font-light leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-7xl">
            Help us choose <br />
            <span className="italic text-[var(--v2-saffron)]">the first trips</span> <br />
            we will run.
          </h2>
          <p className="md:col-span-5 font-[var(--font-v2-body)] text-base italic leading-relaxed text-white/70 md:text-lg">
            Sign in with Instagram and vote on what you’d most like to live. Top voted experiences
            get launched first — and voters get the first invitation, before the rest of the list.
          </p>
        </div>

        {/* Sign in */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {!signedIn ? (
              <motion.button
                key="signin"
                type="button"
                onClick={handleSignIn}
                disabled={signing}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="group relative inline-flex items-center gap-3 border border-[var(--v2-saffron)] px-6 py-4 v2-mono text-[11px] uppercase tracking-[0.32em] text-[var(--v2-saffron)] transition-colors hover:bg-[var(--v2-saffron)] hover:text-black"
              >
                <InstagramGlyph className="h-4 w-4" />
                {signing ? 'Connecting…' : 'Sign in with Instagram to vote'}
                <span className="opacity-60 group-hover:opacity-100">→</span>
              </motion.button>
            ) : (
              <motion.div
                key="signed"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="inline-flex items-center gap-4 border v2-rule bg-white/[0.03] px-5 py-3"
              >
                <InstagramGlyph className="h-5 w-5 text-[var(--v2-saffron)]" />
                <span className="v2-display text-xl italic">@havana_in_amber</span>
                <span className="v2-mono text-[10px] uppercase tracking-[0.28em] text-white/55">3 votes today</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Single-card cinematic viewer */}
        <div className="mt-16 grid gap-10 md:grid-cols-12 md:gap-12">
          {/* Plate */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="relative aspect-[4/3] w-full overflow-hidden border v2-rule"
                style={{
                  background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)`,
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="h-40 w-40 md:h-56 md:w-56" stroke={exp.palette.ink} accent={exp.palette.accent} />
                </div>
                <div className="absolute left-4 top-4 v2-mono text-[10px] uppercase tracking-[0.32em]" style={{ color: exp.palette.ink }}>
                  Plate №{String(active + 1).padStart(2, '0')}
                </div>
                <div className="absolute right-4 top-4 v2-mono text-[10px] uppercase tracking-[0.32em]" style={{ color: exp.palette.ink }}>
                  {exp.region}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-4 flex items-center justify-between border-t v2-rule pt-4">
              <button
                type="button"
                onClick={prev}
                className="v2-mono text-[11px] uppercase tracking-[0.32em] text-white/65 hover:text-[var(--v2-saffron)]"
              >
                ← previous
              </button>
              <div className="flex items-center gap-1.5">
                {experiences.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Go to ${i + 1}`}
                    className={`h-1.5 transition-all ${i === active ? 'w-8 bg-[var(--v2-saffron)]' : 'w-3 bg-white/25 hover:bg-white/50'}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                className="v2-mono text-[11px] uppercase tracking-[0.32em] text-white/65 hover:text-[var(--v2-saffron)]"
              >
                next →
              </button>
            </div>
          </div>

          {/* Details + vote */}
          <div className="md:col-span-5 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
              >
                <h3 className="v2-display text-3xl font-light leading-tight md:text-5xl">{exp.title}</h3>
                <p className="mt-4 font-[var(--font-v2-body)] text-base italic leading-relaxed text-white/75 md:text-lg">
                  {exp.blurb}
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-px border v2-rule bg-white/[0.03]">
                  {[
                    ['Length', exp.meta.split(' · ')[0]],
                    ['Cap', exp.meta.split(' · ')[2] || '—'],
                    ['Region', exp.region],
                    ['Funded', `${Math.round(pct)} %`],
                  ].map(([k, v]) => (
                    <div key={k as string} className="bg-[var(--v2-ink)] p-4">
                      <dt className="v2-mono text-[9px] uppercase tracking-[0.28em] text-white/45">{k}</dt>
                      <dd className="mt-1.5 v2-display text-xl text-[var(--v2-paper)]">{v}</dd>
                    </div>
                  ))}
                </dl>

                {/* Progress */}
                <div className="mt-6">
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="v2-display text-2xl tabular-nums text-[var(--v2-paper)]">
                      {count.toLocaleString()} <span className="text-base text-white/45">/ {exp.goal}</span>
                    </span>
                    {milestone && (
                      <span className="v2-mono text-[10px] uppercase tracking-[0.28em] text-[var(--v2-saffron)]">Funded ✓</span>
                    )}
                  </div>
                  <div className="h-px w-full overflow-hidden bg-white/15">
                    <motion.div
                      key={count}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-[var(--v2-saffron)]"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleVote}
                  className={`mt-8 group inline-flex w-full items-center justify-between gap-3 border px-5 py-4 v2-mono text-[11px] uppercase tracking-[0.32em] transition-colors ${
                    isVoted
                      ? 'border-[var(--v2-saffron)] bg-[var(--v2-saffron)] text-black'
                      : 'border-[var(--v2-saffron)] text-[var(--v2-saffron)] hover:bg-[var(--v2-saffron)] hover:text-black'
                  }`}
                >
                  <span className="inline-flex items-center gap-3">
                    <HeartGlyph filled={isVoted} className="h-4 w-4" />
                    {isVoted ? 'Voted' : signedIn ? 'Cast your vote' : 'Sign in & vote'}
                  </span>
                  <span>{isVoted ? '✓' : '→'}</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Trending — small mono table */}
        <div className="mt-20 border-t v2-rule pt-8">
          <div className="mb-4 flex items-baseline justify-between">
            <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v2-saffron)]">
              Trending this week
            </span>
            <span className="v2-mono text-[10px] uppercase tracking-[0.32em] text-white/45">
              ↑ change vs. last
            </span>
          </div>
          <ul className="grid gap-px border v2-rule bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-4">
            {trendingFull.map((t, i) => (
              <li key={t.id} className="bg-[var(--v2-ink)] p-5">
                <div className="flex items-baseline justify-between">
                  <span className="v2-mono text-[10px] uppercase tracking-[0.28em] text-white/45">№{String(i + 1).padStart(2, '0')}</span>
                  <span className="v2-mono text-[10px] uppercase tracking-[0.28em] text-[var(--v2-saffron)]">{t.delta}</span>
                </div>
                <p className="mt-2 v2-display text-lg leading-tight text-[var(--v2-paper)]">{t.exp.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
