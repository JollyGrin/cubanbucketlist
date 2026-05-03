'use client';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`group flex items-center gap-2 ${className}`} aria-label="Cuban Bucket List home">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-coral text-parchment shadow-[2px_2px_0_0_var(--color-ink)]">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18 L9 11 L13 15 L17 9 L20 13" />
          <circle cx="17" cy="6" r="1.6" fill="currentColor" stroke="none" />
          <path d="M3 21 L21 21" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
          Cuban<span className="italic text-coral">Bucket</span>List
        </span>
        <span className="font-hand text-[11px] leading-none text-ink-muted">est. 2026 · vol. 01</span>
      </span>
    </a>
  );
}
