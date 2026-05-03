'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap, InstagramGlyph, HeartGlyph } from '../icons';
import { MagneticChromeBtn, Reveal5 } from './primitives';

const tileTones = [
  'bg-[var(--v5-cyan)]',
  'bg-[var(--v5-magenta)] text-white',
  'bg-[var(--v5-yellow)]',
  'bg-[var(--v5-mint)]',
  'bg-[var(--v5-violet)]',
  'bg-white',
];

const liveActivity = [
  '@maya.s ✦ voted Havana Family Kitchen',
  '@cuban_diver ✦ voted Secret Scuba',
  '@ridgelines.io ✦ voted Sierra Maestra',
  '@theresa_b ✦ joined the list',
  '@onelmechanic ✦ voted Vintage Car Trip',
];

export function VoteSection5() {
  const [signedIn, setSignedIn] = useState(false);
  const [signing, setSigning] = useState(false);
  const [activityIdx, setActivityIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActivityIdx((i) => (i + 1) % liveActivity.length), 2400);
    return () => clearInterval(t);
  }, []);

  const handleSignIn = async () => {
    if (signing || signedIn) return;
    setSigning(true);
    await new Promise((r) => setTimeout(r, 900));
    setSigning(false);
    setSignedIn(true);
  };

  return (
    <section id="vote" className="relative overflow-hidden border-t-2 border-[var(--v5-ink)] py-20 md:py-28"
      style={{
        background:
          'radial-gradient(ellipse 60% 40% at 80% 0%, #FFE4F4 0%, transparent 50%),' +
          'radial-gradient(ellipse 50% 40% at 0% 100%, #DDEBFF 0%, transparent 50%)',
      }}
    >
      {/* Iridescent strip */}
      <div className="overflow-hidden border-y-2 border-[var(--v5-ink)] v5-iridescent py-3">
        <div className="v5-marquee flex w-max items-center gap-10 whitespace-nowrap v5-display text-3xl text-[var(--v5-ink)] md:text-4xl">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex items-center gap-10">
              {Array.from({ length: 8 }).map((_, j) => (
                <span key={j} className="flex items-center gap-10">
                  ✦ vote now ✦ help us build ✦ first to 500 wins ✦
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-24">
        <Reveal5>
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--v5-ink)] bg-white px-3 py-1.5 v5-mono text-base uppercase">
            ✦ chapter 04 — the vote
          </span>
        </Reveal5>

        <Reveal5 delay={0.05}>
          <h2 className="mt-6 v5-display text-5xl leading-[0.85] sm:text-7xl md:text-[140px]">
            <span className="block text-[var(--v5-ink)]">which one</span>
            <span className="block v5-chrome-text">gets built</span>
            <span className="block text-[var(--v5-magenta)]">first?</span>
          </h2>
        </Reveal5>

        <Reveal5 delay={0.1}>
          <p className="mt-6 max-w-2xl v5-mono text-base leading-relaxed text-[var(--v5-ink)] md:text-lg">
            Sign in with Instagram, vote on the experiences you want us to turn into real packages.
            Top voted = launched first. <span className="v5-display text-2xl text-[var(--v5-magenta)]">voters get the first invite.</span>
          </p>
        </Reveal5>

        {/* Sign in / signed + live ticker */}
        <Reveal5 delay={0.14}>
          <div className="mt-10 grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7">
              <AnimatePresence mode="wait">
                {!signedIn ? (
                  <motion.div key="in" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <MagneticChromeBtn
                      onClick={handleSignIn}
                      pull={12}
                      className="v5-chrome-btn group inline-flex items-center gap-3 rounded-full border-2 border-[var(--v5-ink)] px-6 py-4 v5-display text-2xl text-[var(--v5-ink)]"
                    >
                      <InstagramGlyph className="h-6 w-6" />
                      {signing ? 'connecting…' : '✦ sign in with Instagram'}
                    </MagneticChromeBtn>
                  </motion.div>
                ) : (
                  <motion.div key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className="v5-iridescent-border inline-block"
                  >
                    <div className="flex items-center gap-4 rounded-[14px] bg-white px-4 py-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full v5-iridescent">
                        <InstagramGlyph className="h-5 w-5 text-[var(--v5-ink)]" />
                      </span>
                      <span className="v5-display text-2xl text-[var(--v5-ink)]">@havana_in_amber</span>
                      <span className="rounded-full border-2 border-[var(--v5-mint)] bg-[var(--v5-mint)]/30 px-2.5 py-1 v5-mono text-sm uppercase text-[var(--v5-ink)]">
                        3 votes today
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="md:col-span-5">
              <div className="v5-iridescent-border h-full">
                <div className="flex h-full items-center gap-3 rounded-[14px] bg-white px-4 py-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--v5-magenta)] animate-pulse shrink-0" />
                  <span className="v5-mono text-base uppercase text-[var(--v5-ink)]/65 shrink-0">live</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activityIdx}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="v5-mono text-base text-[var(--v5-ink)] truncate"
                    >
                      {liveActivity[activityIdx]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Reveal5>

        {/* Trending */}
        <Reveal5 delay={0.18}>
          <div className="mt-12">
            <p className="mb-3 v5-display text-2xl text-[var(--v5-ink)]">↑ trending this week</p>
            <div className="grid gap-3 md:grid-cols-4">
              {trending.map((t, i) => {
                const exp = experiences.find((e) => e.id === t.id)!;
                const Icon = iconMap[exp.icon];
                return (
                  <a key={t.id} href={`#vote-${exp.id}`} className="v5-iridescent-border block">
                    <div className="flex items-center gap-3 rounded-[14px] bg-white p-3">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[var(--v5-ink)]"
                        style={{ background: `linear-gradient(135deg, ${exp.palette.from}, ${exp.palette.to})` }}>
                        <Icon className="h-7 w-7" stroke={exp.palette.ink} accent={exp.palette.accent} />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="v5-display text-lg text-[var(--v5-magenta)]">#{i + 1}</span>
                          <span className="rounded border-2 border-[var(--v5-mint)] bg-[var(--v5-mint)]/30 px-1.5 py-px v5-mono text-sm uppercase text-[var(--v5-ink)]">{t.delta}</span>
                        </div>
                        <span className="block truncate v5-display text-base text-[var(--v5-ink)]">{exp.title}</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal5>

        {/* Vote tiles */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <VoteTile5
              key={exp.id}
              exp={exp}
              tone={tileTones[i % tileTones.length]}
              signedIn={signedIn}
              onPromptSignIn={handleSignIn}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function VoteTile5({
  exp,
  tone,
  signedIn,
  onPromptSignIn,
}: {
  exp: typeof experiences[number];
  tone: string;
  signedIn: boolean;
  onPromptSignIn: () => void;
}) {
  const Icon = iconMap[exp.icon];
  const [voted, setVoted] = useState(false);
  const [count, setCount] = useState(exp.votes);
  const [shocks, setShocks] = useState<number[]>([]);
  const pct = Math.min(100, (count / exp.goal) * 100);
  const milestone = count >= exp.goal;

  const handleVote = () => {
    if (!signedIn) { onPromptSignIn(); return; }
    if (voted) return;
    setVoted(true);
    setCount((c) => c + 1);
    const id = Date.now();
    setShocks((s) => [...s, id]);
    setTimeout(() => setShocks((s) => s.filter((x) => x !== id)), 800);
  };

  return (
    <article id={`vote-${exp.id}`}
      className={`relative flex flex-col overflow-hidden rounded-3xl border-2 border-[var(--v5-ink)] ${tone}`}
      style={{ boxShadow: '6px 6px 0 0 var(--v5-ink)' }}
    >
      <div
        className="relative aspect-[5/3] overflow-hidden border-b-2 border-[var(--v5-ink)]"
        style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
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
          <Icon className="h-24 w-24" stroke={exp.palette.ink} accent={exp.palette.accent} />
        </div>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md border-2 border-[var(--v5-ink)] bg-white px-2 py-0.5 v5-mono text-base text-[var(--v5-ink)]">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--v5-magenta)]" /> live
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="v5-display text-2xl leading-tight">{exp.title}</h3>
        <p className="mt-2 v5-mono text-base leading-snug opacity-85 line-clamp-2">{exp.blurb}</p>

        <div className="mt-4">
          <div className="mb-1.5 flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={count}
                  initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 8, opacity: 0 }}
                  className="v5-display text-3xl tabular-nums"
                >
                  {count.toLocaleString()}
                </motion.span>
              </AnimatePresence>
              <span className="v5-mono text-sm uppercase opacity-75">/ {exp.goal}</span>
            </div>
            {milestone && (
              <span className="rounded border-2 border-[var(--v5-ink)] bg-[var(--v5-mint)] px-1.5 py-0.5 v5-mono text-sm uppercase text-[var(--v5-ink)]">
                funded ✓
              </span>
            )}
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full border-2 border-[var(--v5-ink)] bg-white">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full v5-iridescent"
            />
          </div>
        </div>

        <div className="relative mt-5">
          {shocks.map((id) => <span key={id} className="v5-shockwave" />)}
          <button
            type="button"
            onClick={handleVote}
            className={`w-full inline-flex items-center justify-center gap-2 rounded-full border-2 border-[var(--v5-ink)] py-3 v5-display text-2xl transition-transform hover:-translate-y-0.5 ${
              voted ? 'bg-[var(--v5-ink)] text-[var(--v5-yellow)]' : 'v5-chrome-btn text-[var(--v5-ink)]'
            }`}
          >
            <HeartGlyph filled={voted} className="h-5 w-5" />
            {voted ? 'voted ✓' : 'vote ♥'}
          </button>
        </div>
      </div>
    </article>
  );
}
