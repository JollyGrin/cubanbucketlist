'use client';

// Reusable Habano cigar-label decorative SVG components.

const goldGradId = 'v8-gold-grad';

export function GoldDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient id={goldGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE9A8" />
          <stop offset="22%" stopColor="#F5D78E" />
          <stop offset="50%" stopColor="#C9941E" />
          <stop offset="65%" stopColor="#8C6510" />
          <stop offset="80%" stopColor="#C9941E" />
          <stop offset="100%" stopColor="#F5D78E" />
        </linearGradient>
        <radialGradient id="v8-gold-radial" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFE9A8" />
          <stop offset="55%" stopColor="#C9941E" />
          <stop offset="100%" stopColor="#6B4F1A" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function FiligreeCorner({ className = '', flip = '' }: { className?: string; flip?: '' | 'x' | 'y' | 'xy' }) {
  const tx = flip.includes('x') ? '-1' : '1';
  const ty = flip.includes('y') ? '-1' : '1';
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke={`url(#${goldGradId})`} strokeWidth="1.4">
      <g transform={`translate(${flip.includes('x') ? 80 : 0} ${flip.includes('y') ? 80 : 0}) scale(${tx} ${ty})`}>
        <path d="M2 2 Q14 10 24 6 Q34 4 42 14 Q52 28 78 28" />
        <path d="M2 2 Q10 14 6 24 Q4 34 14 42 Q28 52 28 78" />
        <path d="M14 14 Q22 6 32 12 Q40 18 36 28 Q28 36 18 32 Q10 24 14 14 Z" opacity="0.7" />
        <circle cx="22" cy="22" r="2.5" fill={`url(#${goldGradId})`} />
        <path d="M30 4 Q34 8 32 14" opacity="0.7" />
        <path d="M4 30 Q8 34 14 32" opacity="0.7" />
      </g>
    </svg>
  );
}

export function TobaccoGarland({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 60" className={className} fill={`url(#${goldGradId})`}>
      {/* central medallion */}
      <circle cx="240" cy="30" r="7" />
      <circle cx="240" cy="30" r="3" fill="#1A0F0A" />
      {/* Left side leaves */}
      {[1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 240 - i * 30;
        const yOff = i % 2 === 0 ? 6 : -6;
        return (
          <g key={`l${i}`}>
            <line x1={240 - (i - 1) * 30} y1={30} x2={x} y2={30} stroke={`url(#${goldGradId})`} strokeWidth="1.5" />
            <path d={`M${x} 30 Q${x - 12} ${30 + yOff} ${x - 22} ${30 + yOff * 1.3} Q${x - 12} ${30 - yOff * 0.3} ${x} 30 Z`} />
          </g>
        );
      })}
      {/* Right side leaves */}
      {[1, 2, 3, 4, 5, 6, 7].map((i) => {
        const x = 240 + i * 30;
        const yOff = i % 2 === 0 ? -6 : 6;
        return (
          <g key={`r${i}`}>
            <line x1={240 + (i - 1) * 30} y1={30} x2={x} y2={30} stroke={`url(#${goldGradId})`} strokeWidth="1.5" />
            <path d={`M${x} 30 Q${x + 12} ${30 + yOff} ${x + 22} ${30 + yOff * 1.3} Q${x + 12} ${30 - yOff * 0.3} ${x} 30 Z`} />
          </g>
        );
      })}
    </svg>
  );
}

export function RibbonBanner({ children, className = '', tone = 'crimson' }: { children: React.ReactNode; className?: string; tone?: 'crimson' | 'emerald' | 'navy' }) {
  const colors: Record<string, string> = {
    crimson: 'var(--v8-crimson)',
    emerald: 'var(--v8-emerald)',
    navy: 'var(--v8-navy)',
  };
  const c = colors[tone];
  return (
    <div className={`relative inline-flex items-stretch ${className}`} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))' }}>
      <svg viewBox="0 0 30 50" className="h-full w-5" fill={c} preserveAspectRatio="none" aria-hidden>
        <path d="M0 25 L20 0 L30 0 L18 25 L30 50 L20 50 Z" />
      </svg>
      <div
        className="px-5 py-2 border-y-2 text-[var(--v8-cream)]"
        style={{
          background: `linear-gradient(180deg, ${c} 0%, ${c} 50%, ${tone === 'emerald' ? 'var(--v8-emerald-deep)' : tone === 'navy' ? '#0A1A2C' : 'var(--v8-crimson-deep)'} 100%)`,
          borderColor: 'var(--v8-gold-2)',
        }}
      >
        <span className="block v8-engrave-light">{children}</span>
      </div>
      <svg viewBox="0 0 30 50" className="h-full w-5" fill={c} preserveAspectRatio="none" aria-hidden>
        <path d="M0 0 L10 0 L22 25 L10 50 L0 50 L12 25 Z" />
      </svg>
    </div>
  );
}

export function GoldSeal({ className = '', label = 'CB' }: { className?: string; label?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 80 80" className="absolute inset-0 h-full w-full">
        <circle cx="40" cy="40" r="38" fill="url(#v8-gold-radial)" />
        <circle cx="40" cy="40" r="38" fill="none" stroke="var(--v8-gold-3)" strokeWidth="1" />
        <circle cx="40" cy="40" r="32" fill="none" stroke="var(--v8-gold-3)" strokeWidth="1" strokeDasharray="2 3" />
        {/* Star points around */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const r1 = 36;
          const r2 = 38;
          const x1 = 40 + Math.cos(angle) * r1;
          const y1 = 40 + Math.sin(angle) * r1;
          const x2 = 40 + Math.cos(angle) * r2;
          const y2 = 40 + Math.sin(angle) * r2;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--v8-gold-3)" strokeWidth="1" />;
        })}
      </svg>
      <span className="relative v8-display italic font-bold text-2xl text-[var(--v8-ink)] leading-none v8-emboss">{label}</span>
    </div>
  );
}

export function OvalVignette({ children, className = '', label }: { children?: React.ReactNode; className?: string; label?: React.ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 280" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
        <ellipse cx="200" cy="140" rx="194" ry="134" fill="none" stroke={`url(#${goldGradId})`} strokeWidth="5" />
        <ellipse cx="200" cy="140" rx="186" ry="126" fill="none" stroke="var(--v8-gold-3)" strokeWidth="1" />
        <ellipse cx="200" cy="140" rx="180" ry="120" fill="none" stroke="var(--v8-gold-2)" strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
      </svg>
      {/* Inner oval-clipped content */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ clipPath: 'ellipse(45% 43% at 50% 50%)' }}>
        {children}
      </div>
      {label && (
        <div className="absolute inset-x-0 bottom-2 flex justify-center">
          {label}
        </div>
      )}
    </div>
  );
}

export function TobaccoLeaf({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 95 Q30 70 28 50 Q26 30 30 8 Q34 30 32 50 Q30 70 30 95" fill="currentColor" opacity="0.85" />
      <path d="M30 70 Q22 64 14 60 M30 60 Q21 52 11 46 M30 50 Q22 42 14 32 M30 40 Q24 30 18 18" />
      <path d="M30 70 Q38 64 46 60 M30 60 Q39 52 49 46 M30 50 Q38 42 46 32 M30 40 Q36 30 42 18" />
    </svg>
  );
}
