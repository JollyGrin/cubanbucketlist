'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';

type Role = 'local' | 'collaborator' | 'other';

const roles: { id: Role; title: string; body: string; accent: string }[] = [
  {
    id: 'local',
    title: 'A local with a story',
    body: 'You live on the island. You know a place, a craft, a route, or a moment that visitors never find. We want to tell your story — and eventually, bring people to you.',
    accent: 'from-coral to-coral-deep',
  },
  {
    id: 'collaborator',
    title: 'A collaborator',
    body: 'You work in tourism, travel, content, or operations. You believe in what this could be and want to help build it. Former colleagues, fellow students, industry friends — you know who you are.',
    accent: 'from-teal to-teal-deep',
  },
  {
    id: 'other',
    title: 'Something else',
    body: 'Maybe you’re a photographer, a writer, a fixer, or just someone who wants to be involved. Tell us about yourself.',
    accent: 'from-mustard to-mustard-deep',
  },
];

const roleLabel: Record<Role, string> = {
  local: 'Local',
  collaborator: 'Collaborator',
  other: 'Something else',
};

type Errors = Partial<Record<'name' | 'email' | 'role' | 'about', string>>;

export function JoinUs() {
  const [role, setRole] = useState<Role | ''>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [based, setBased] = useState('');
  const [about, setAbout] = useState('');
  const [heard, setHeard] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const pickRole = (r: Role) => {
    setRole(r);
    setErrors((e) => ({ ...e, role: undefined }));
    // smooth scroll the form into view on mobile
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const validate = (): boolean => {
    const e: Errors = {};
    if (!name.trim()) e.name = 'A name, please.';
    if (!email.trim()) e.email = 'We need this to write back.';
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = 'That doesn’t look quite right.';
    if (!role) e.role = 'Pick the one that fits best.';
    if (!about.trim()) e.about = 'Just a sentence or two — anything.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (state === 'loading') return;
    if (!validate()) return;
    setState('loading');
    try {
      // TODO: wire up to Formspree / Formspark. See landing/docs/feedback.md §6.
      await new Promise((r) => setTimeout(r, 700));
      // analytics stub — replace with real plausible/GA event
      if (typeof window !== 'undefined' && 'console' in window) {
        // eslint-disable-next-line no-console
        console.log('join_form_submitted', { role });
      }
      setState('done');
    } catch {
      setState('error');
    }
  };

  return (
    <section
      id="join"
      className="relative overflow-hidden bg-parchment py-20 md:py-32"
    >
      {/* Decorative numeral */}
      <div aria-hidden className="pointer-events-none absolute -right-10 top-10 select-none font-display text-[280px] font-light leading-none tracking-tighter text-ink/[0.04] md:-right-16 md:text-[420px]">
        VII
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          numeral="VII."
          kicker="Want in?"
          title="We’re building this"
          italic="together."
          subtitle="Cuban Bucket List is in its early days — and we’re looking for the right people to help shape it. Whether you’re a local with a story worth telling, someone who knows Cuba deeply, or a professional with skills that fit, we’d love to hear from you."
        />

        {/* Role cards */}
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {roles.map((r, i) => {
            const isSelected = role === r.id;
            return (
              <motion.button
                key={r.id}
                type="button"
                onClick={() => pickRole(r.id)}
                aria-pressed={isSelected}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, rotate: 0 }}
                animate={isSelected ? { rotate: 0, scale: 1.02 } : { rotate: [-1.2, 0.6, -0.4][i] }}
                className={`paper-card group relative flex h-full flex-col rounded-[20px] border-2 p-6 text-left transition-shadow ${
                  isSelected
                    ? 'border-coral shadow-[5px_5px_0_0_var(--color-coral)]'
                    : 'border-ink shadow-[3px_3px_0_0_var(--color-ink)] hover:shadow-[6px_6px_0_0_var(--color-ink)]'
                }`}
              >
                {/* Color stripe */}
                <span
                  aria-hidden
                  className={`absolute inset-x-5 top-0 h-1 rounded-b-md bg-gradient-to-r ${r.accent}`}
                />

                <div className="flex items-start justify-between gap-3">
                  <span className={`font-sans text-[11px] uppercase tracking-[0.28em] ${isSelected ? 'text-coral' : 'text-ink-muted'}`}>
                    {String(i + 1).padStart(2, '0')} · {roleLabel[r.id]}
                  </span>
                  <span
                    aria-hidden
                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isSelected ? 'border-coral bg-coral text-parchment' : 'border-ink/30 bg-parchment-50 text-transparent'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">{r.body}</p>

                <span className={`mt-4 inline-flex items-center gap-1.5 font-hand text-base ${isSelected ? 'text-coral' : 'text-ink-muted'}`}>
                  {isSelected ? 'selected ✓' : 'pick this →'}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Form */}
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="font-hand text-2xl text-teal">a personal note ↓</p>
            <p className="mt-2 font-display text-3xl font-light leading-tight tracking-tight text-ink md:text-4xl">
              We read <span className="italic text-coral">every</span> message, by hand.
            </p>
            <p className="mt-3 font-sans text-sm text-ink-muted md:text-base">
              Usually within a few days. Sometimes longer. We promise it will be a real human writing back — never a template.
            </p>
            <p className="mt-6 font-hand text-xl text-ink-muted">— Cuban Bucket List</p>
          </div>

          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              {state !== 'done' ? (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="paper-card rounded-[20px] border-2 border-ink p-5 shadow-[4px_4px_0_0_var(--color-ink)] md:p-7"
                >
                  <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                    <Field label="Your name" htmlFor="join-name" error={errors.name} required>
                      <input
                        id="join-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((er) => ({ ...er, name: undefined })); }}
                        className={inputClass(!!errors.name)}
                      />
                    </Field>

                    <Field label="Email" htmlFor="join-email" error={errors.email} required>
                      <input
                        id="join-email"
                        type="email"
                        autoComplete="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((er) => ({ ...er, email: undefined })); }}
                        className={inputClass(!!errors.email)}
                      />
                    </Field>
                  </div>

                  {/* Role pills (mirrors / reflects card selection) */}
                  <fieldset className="mt-4 md:mt-5">
                    <legend className="mb-2 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-ink-soft">
                      I’m a <span className="text-coral">*</span>
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {roles.map((r) => {
                        const isOn = role === r.id;
                        return (
                          <button
                            key={r.id}
                            type="button"
                            onClick={() => pickRole(r.id)}
                            aria-pressed={isOn}
                            className={`rounded-full border-2 px-4 py-2 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                              isOn ? 'border-coral bg-coral text-parchment' : 'border-ink bg-parchment-50 text-ink hover:bg-mustard/30'
                            }`}
                          >
                            {roleLabel[r.id]}
                          </button>
                        );
                      })}
                    </div>
                    {errors.role && <ErrorText>{errors.role}</ErrorText>}
                  </fieldset>

                  <div className="mt-4 md:mt-5">
                    <Field label="Where are you based?" htmlFor="join-based">
                      <input
                        id="join-based"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="City, Country"
                        value={based}
                        onChange={(e) => setBased(e.target.value)}
                        className={inputClass(false)}
                      />
                    </Field>
                  </div>

                  <div className="mt-4 md:mt-5">
                    <Field label="Tell us about yourself" htmlFor="join-about" error={errors.about} required>
                      <textarea
                        id="join-about"
                        rows={5}
                        placeholder="What do you do, what draws you to this project, how could you be involved?"
                        value={about}
                        onChange={(e) => { setAbout(e.target.value); if (errors.about) setErrors((er) => ({ ...er, about: undefined })); }}
                        className={`${inputClass(!!errors.about)} min-h-[120px] resize-y leading-relaxed`}
                      />
                    </Field>
                  </div>

                  <div className="mt-4 md:mt-5">
                    <Field label="How did you hear about us?" htmlFor="join-heard">
                      <input
                        id="join-heard"
                        type="text"
                        placeholder="Instagram, a friend, Google…"
                        value={heard}
                        onChange={(e) => setHeard(e.target.value)}
                        className={inputClass(false)}
                      />
                    </Field>
                  </div>

                  <div className="mt-6 flex flex-col-reverse items-start gap-3 md:flex-row md:items-center md:justify-between">
                    <p className="font-sans text-xs text-ink-muted">
                      We won’t share your details with anyone. Ever.
                    </p>
                    <button
                      type="submit"
                      disabled={state === 'loading'}
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-coral px-6 py-4 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-parchment shadow-[3px_3px_0_0_var(--color-ink)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_0_var(--color-ink)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_0_var(--color-ink)] disabled:opacity-70 md:w-auto"
                    >
                      {state === 'loading' ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="h-3 w-3 animate-spin rounded-full border-2 border-parchment border-t-transparent" />
                          Sending…
                        </span>
                      ) : (
                        <>
                          Send it
                          <span className="transition-transform group-hover:translate-x-0.5">→</span>
                        </>
                      )}
                    </button>
                  </div>

                  {state === 'error' && (
                    <p className="mt-3 rounded-lg border border-coral bg-coral/10 px-3 py-2 font-sans text-sm text-coral">
                      Something went wrong sending that. Try again in a moment?
                    </p>
                  )}
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.97, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 18, stiffness: 220 }}
                  className="paper-card relative rounded-[20px] border-2 border-teal p-7 shadow-[5px_5px_0_0_var(--color-teal)] md:p-10"
                >
                  <span aria-hidden className="absolute -right-3 -top-3 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-mustard font-display text-xl font-semibold text-ink shadow-[2px_2px_0_0_var(--color-ink)]">
                    ✓
                  </span>
                  <p className="font-hand text-2xl text-teal">a quick word ↓</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                    Got it — thanks, <span className="italic text-coral">{name.trim() || 'friend'}</span>.
                  </h3>
                  <p className="mt-3 font-sans text-base leading-relaxed text-ink-soft md:text-lg">
                    We’ll read every word, personally, and write back soon. If you sent us a story, expect a long reply.
                  </p>
                  <p className="mt-6 font-hand text-xl text-ink-muted">— The Cuban Bucket List team</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean): string {
  return [
    'w-full rounded-xl border-2 bg-parchment-50 px-4 py-3 font-sans text-base text-ink placeholder:text-ink-muted focus:outline-none focus:border-coral transition-colors',
    hasError ? 'border-coral' : 'border-ink',
  ].join(' ');
}

function Field({
  label, htmlFor, error, required, children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-ink-soft">
        {label}
        {required && <span className="text-coral">*</span>}
      </span>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-1.5 inline-flex items-center gap-1.5 font-sans text-xs text-coral">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5 M12 16v.5" />
      </svg>
      {children}
    </span>
  );
}
