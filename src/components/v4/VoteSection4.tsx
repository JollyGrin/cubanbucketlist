'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { experiences, trending } from '@/lib/data';
import { iconMap, InstagramGlyph, HeartGlyph } from '../icons';
import { BlurReveal, MagneticButton, TiltCard } from './primitives';

const liveActivity = [
  { who: '@maya.s', what: 'voted', exp: 'Havana Family Kitchen Night' },
  { who: '@cuban_diver', what: 'voted', exp: 'Secret Scuba with a Local Legend' },
  { who: '@ridgelines.io', what: 'voted', exp: 'Sierra Maestra Photography Expedition' },
  { who: '@theresa_b', what: 'joined', exp: 'membership' },
  { who: '@onelmechanic', what: 'voted', exp: 'Vintage Car Mountain Road Trip' },
  { who: '@ofc_andre', what: 'voted', exp: 'Salsa Night on a Secret Rooftop' },
];

export function VoteSection4() {
  const [signedIn, setSignedIn] = useState(false);
  const [signing, setSigning] = useState(false);
  const [voted, setVoted] = useState<Record<string, boolean>>({});
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(experiences.map((e) => [e.id, e.votes])),
  );
  const [activityIndex, setActivityIndex] = useState(0);
  const [ripples, setRipples] = useState<Record<string, { id: number; x: number; y: number }[]>>({});

  useEffect(() => {
    const t = setInterval(() => setActivityIndex((i) => (i + 1) % liveActivity.length), 2600);
    return () => clearInterval(t);
  }, []);

  const handleSignIn = async () => {
    if (signing || signedIn) return;
    setSigning(true);
    await new Promise((r) => setTimeout(r, 900));
    setSigning(false);
    setSignedIn(true);
  };

  const handleVote = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (!signedIn) { handleSignIn(); return; }
    if (voted[id]) return;
    const r = e.currentTarget.getBoundingClientRect();
    const rip = { id: Date.now(), x: e.clientX - r.left, y: e.clientY - r.top };
    setRipples((p) => ({ ...p, [id]: [...(p[id] ?? []), rip] }));
    setTimeout(() => setRipples((p) => ({ ...p, [id]: (p[id] ?? []).filter((x) => x.id !== rip.id) })), 700);
    setVoted((v) => ({ ...v, [id]: true }));
    setCounts((c) => ({ ...c, [id]: c[id] + 1 }));
  };

  const activity = liveActivity[activityIndex];

  return (
    <section id="vote" className="relative border-t v4-rule v4-aurora py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <BlurReveal>
              <span className="v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-violet)]">04 — the vote</span>
              <h2 className="mt-4 text-balance text-4xl font-medium tracking-[-0.02em] md:text-7xl">
                Members decide which trip <span className="v4-serif italic font-normal text-[var(--v4-cyan)]">we run first.</span>
              </h2>
            </BlurReveal>
          </div>
          <div className="md:col-span-5 md:pt-2">
            <BlurReveal delay={0.08}>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Sign in with Instagram, vote on what you’d most like to live, and you get the
                first invitation when the trip opens. No bots, no resellers — just the people
                who actually want to be there.
              </p>
            </BlurReveal>
          </div>
        </div>

        {/* Sign-in / signed in row + live activity */}
        <BlurReveal delay={0.12}>
          <div className="mt-10 grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7">
              <AnimatePresence mode="wait">
                {!signedIn ? (
                  <motion.div key="in" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <MagneticButton
                      onClick={handleSignIn}
                      pull={10}
                      className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--v4-violet)] via-[var(--v4-pink)] to-[var(--v4-cyan)] px-6 py-4 text-[13px] font-medium text-[var(--v4-bg)] shadow-[0_0_40px_rgba(167,139,250,0.45)] transition-shadow hover:shadow-[0_0_60px_rgba(167,139,250,0.7)]"
                    >
                      <InstagramGlyph className="h-5 w-5" />
                      {signing ? 'Connecting…' : 'Sign in with Instagram to vote'}
                      <span className="opacity-70">↗</span>
                    </MagneticButton>
                  </motion.div>
                ) : (
                  <motion.div key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className="v4-glass v4-glow-border inline-flex items-center gap-4 rounded-full px-4 py-2.5"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--v4-violet)] to-[var(--v4-pink)] text-[var(--v4-bg)]">
                      <InstagramGlyph className="h-4 w-4" />
                    </span>
                    <span className="text-sm">@havana_in_amber</span>
                    <span className="v4-mono text-[10px] uppercase tracking-[0.24em] text-[var(--v4-cyan)]">3 votes today</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="md:col-span-5">
              <div className="v4-glass rounded-full px-4 py-2.5 flex items-center gap-3 overflow-hidden">
                <span className="inline-flex h-2 w-2 rounded-full bg-[var(--v4-cyan)] v4-pulse shrink-0" />
                <span className="v4-mono text-[10px] uppercase tracking-[0.28em] text-white/45 shrink-0">live</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activityIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-white/85 truncate"
                  >
                    <span className="text-[var(--v4-paper)] font-medium">{activity.who}</span>{' '}
                    <span className="text-white/55">{activity.what}</span>{' '}
                    <span className="text-[var(--v4-paper)]">{activity.exp}</span>
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </BlurReveal>

        {/* Trending */}
        <BlurReveal delay={0.18}>
          <div className="mt-12">
            <p className="mb-3 v4-mono text-[10px] uppercase tracking-[0.32em] text-[var(--v4-cyan)]">↑ trending this week</p>
            <div className="grid gap-3 md:grid-cols-4">
              {trending.map((t, i) => {
                const exp = experiences.find((e) => e.id === t.id)!;
                const Icon = iconMap[exp.icon];
                return (
                  <a key={t.id} href={`#vote-${exp.id}`}
                    className="v4-glass group flex items-center gap-3 rounded-2xl p-3 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `linear-gradient(135deg, ${exp.palette.from}, ${exp.palette.to})` }}>
                      <Icon className="h-7 w-7" stroke={exp.palette.ink} accent={exp.palette.accent} />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="v4-mono text-[10px] tracking-wider text-[var(--v4-violet)]">#{i + 1}</span>
                        <span className="rounded-full border border-[var(--v4-cyan)]/30 bg-[var(--v4-cyan)]/10 px-1.5 py-px v4-mono text-[9px] uppercase tracking-wider text-[var(--v4-cyan)]">
                          {t.delta}
                        </span>
                      </div>
                      <span className="block truncate text-sm font-medium text-[var(--v4-paper)]">{exp.title}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </BlurReveal>

        {/* Vote tiles */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon];
            const isVoted = !!voted[exp.id];
            const count = counts[exp.id];
            const pct = Math.min(100, (count / exp.goal) * 100);
            const milestone = count >= exp.goal;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                id={`vote-${exp.id}`}
              >
                <TiltCard className="h-full" max={5}>
                  <article className="relative h-full overflow-hidden rounded-2xl v4-glass v4-glow-border">
                    <div
                      className="relative h-40 overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${exp.palette.from} 0%, ${exp.palette.to} 100%)` }}
                    >
                      <div
                        aria-hidden
                        className="absolute inset-0 opacity-25 mix-blend-overlay"
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-24 w-24" stroke={exp.palette.ink} accent={exp.palette.accent} />
                      </div>
                      <span className="absolute right-3 top-3 v4-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: exp.palette.ink }}>
                        {exp.region}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-medium tracking-tight text-[var(--v4-paper)] md:text-xl">{exp.title}</h3>
                      <p className="mt-1.5 line-clamp-2 text-sm text-white/65">{exp.blurb}</p>

                      <div className="mt-4">
                        <div className="mb-1.5 flex items-baseline justify-between">
                          <div className="flex items-baseline gap-2">
                            <AnimatePresence mode="popLayout">
                              <motion.span
                                key={count}
                                initial={{ y: -8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 8, opacity: 0 }}
                                className="v4-tab text-xl font-medium text-[var(--v4-paper)]"
                              >
                                {count.toLocaleString()}
                              </motion.span>
                            </AnimatePresence>
                            <span className="v4-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                              / {exp.goal}
                            </span>
                          </div>
                          {milestone && (
                            <span className="rounded-full bg-[var(--v4-cyan)] px-2 py-0.5 v4-mono text-[9px] uppercase tracking-wider text-[var(--v4-bg)]">
                              funded
                            </span>
                          )}
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full"
                            style={{
                              background: milestone
                                ? 'linear-gradient(90deg, #60E8E0, #A78BFA)'
                                : `linear-gradient(90deg, ${exp.palette.accent}, ${exp.palette.from})`,
                            }}
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => handleVote(exp.id, e)}
                        className={`relative mt-5 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-4 py-3 text-[13px] font-medium transition-all ${
                          isVoted
                            ? 'bg-[var(--v4-cyan)] text-[var(--v4-bg)]'
                            : 'bg-[var(--v4-paper)] text-[var(--v4-bg)] hover:shadow-[0_0_30px_rgba(167,139,250,0.55)]'
                        }`}
                      >
                        <span className="relative inline-flex items-center gap-2">
                          <HeartGlyph filled={isVoted} className="h-4 w-4" />
                          {isVoted ? 'Voted' : signedIn ? 'Vote' : 'Sign in & vote'}
                        </span>
                        {(ripples[exp.id] ?? []).map((r) => (
                          <span
                            key={r.id}
                            className="v4-ripple"
                            style={{ ['--rx' as string]: `${r.x}px`, ['--ry' as string]: `${r.y}px` }}
                          />
                        ))}
                      </button>
                    </div>
                  </article>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
