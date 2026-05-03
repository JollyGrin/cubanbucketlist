'use client';

// Reusable Carta Marina decorative SVG components.

export function CompassRose({ className = '', spinning = false }: { className?: string; spinning?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className={`${className} ${spinning ? 'v4-compass-spin' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="100" cy="100" r="92" />
      <circle cx="100" cy="100" r="72" strokeDasharray="2 4" opacity="0.7" />
      <circle cx="100" cy="100" r="40" />
      <circle cx="100" cy="100" r="6" fill="currentColor" stroke="none" />
      {/* 4 main rays */}
      <path d="M100 8 L106 100 L100 192 L94 100 Z" fill="currentColor" opacity="0.85" />
      <path d="M8 100 L100 106 L192 100 L100 94 Z" fill="currentColor" opacity="0.7" />
      {/* Diagonals */}
      <path d="M30 30 L100 100 L100 100 L30 30 Z" />
      <g opacity="0.8">
        <path d="M30 30 L98 95 L100 100 L95 98 Z" fill="currentColor" />
        <path d="M170 30 L102 95 L100 100 L105 98 Z" fill="currentColor" />
        <path d="M170 170 L102 105 L100 100 L105 102 Z" fill="currentColor" />
        <path d="M30 170 L98 105 L100 100 L95 102 Z" fill="currentColor" />
      </g>
      {/* Cardinal markers */}
      <text x="100" y="6" textAnchor="middle" fontSize="14" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">N</text>
      <text x="196" y="105" textAnchor="middle" fontSize="11" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">E</text>
      <text x="100" y="200" textAnchor="middle" fontSize="11" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">S</text>
      <text x="4" y="105" textAnchor="middle" fontSize="11" fontFamily="serif" fontStyle="italic" fill="currentColor" stroke="none">O</text>
    </svg>
  );
}

export function SeaMonster({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      {/* Sea waves */}
      <path d="M2 100 Q12 96 22 100 T42 100 T62 100 T82 100 T102 100 T122 100 T142 100 T162 100 T182 100 T198 100" opacity="0.5" />
      {/* Body */}
      <path d="M30 90 Q40 70 60 75 T100 60 Q130 50 150 65 Q170 80 180 70" />
      {/* Spines */}
      <path d="M55 70 L57 60 M75 60 L78 50 M95 55 L98 45 M115 55 L120 45 M140 60 L145 52" />
      {/* Head */}
      <path d="M180 70 Q186 64 190 70 Q188 76 184 76 Q180 78 180 70 Z" fill="currentColor" />
      <circle cx="186" cy="71" r="0.8" fill="#E8DDC4" stroke="none" />
      {/* Tail */}
      <path d="M30 90 Q22 92 16 86 Q10 80 16 74 Q22 80 24 86 Q22 92 30 90 Z" />
    </svg>
  );
}

export function CubaCoastline({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 220" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
      <path d="M30 110 Q60 80 110 88 Q160 96 200 80 Q240 64 290 76 Q330 86 380 70 Q420 60 460 78 Q500 96 540 80 Q580 66 630 84 Q680 100 720 90 Q740 88 770 110 Q740 130 700 122 Q660 116 620 130 Q580 142 540 132 Q500 122 460 138 Q420 152 380 142 Q340 132 300 142 Q260 152 220 138 Q180 122 140 134 Q100 144 60 130 Q40 122 30 110 Z" />
      {/* Inner small islands */}
      <circle cx="200" cy="170" r="6" />
      <circle cx="350" cy="180" r="4" />
      <circle cx="520" cy="172" r="5" />
      {/* Small towns/marks */}
      <g opacity="0.7">
        <circle cx="160" cy="100" r="2" fill="currentColor" />
        <circle cx="280" cy="86" r="2" fill="currentColor" />
        <circle cx="400" cy="80" r="2" fill="currentColor" />
        <circle cx="520" cy="92" r="2" fill="currentColor" />
        <circle cx="640" cy="100" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

export function Banner({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative inline-flex items-center ${className}`}>
      {/* Left tail */}
      <svg viewBox="0 0 30 40" className="h-full w-6 fill-current" preserveAspectRatio="none" aria-hidden>
        <path d="M0 20 L20 0 L30 0 L18 20 L30 40 L20 40 Z" />
      </svg>
      <div className="bg-current px-4 py-1.5 text-[var(--v4-vellum)]">
        <span className="block">{children}</span>
      </div>
      <svg viewBox="0 0 30 40" className="h-full w-6 fill-current" preserveAspectRatio="none" aria-hidden>
        <path d="M0 0 L10 0 L22 20 L10 40 L0 40 L12 20 Z" />
      </svg>
    </div>
  );
}

export function WaxSeal({ className = '', label = 'CB' }: { className?: string; label?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 80 80" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="wax" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#C84A40" />
            <stop offset="60%" stopColor="#8C2C24" />
            <stop offset="100%" stopColor="#5A1A14" />
          </radialGradient>
        </defs>
        <path
          d="M40 4 L48 14 L60 12 L62 26 L74 32 L66 44 L72 58 L58 60 L52 72 L40 66 L28 72 L22 60 L8 58 L14 44 L6 32 L18 26 L20 12 L32 14 Z"
          fill="url(#wax)"
        />
      </svg>
      <span className="relative v4-display italic text-[var(--v4-vellum)] text-lg leading-none drop-shadow-[1px_1px_0_rgba(0,0,0,0.4)]">{label}</span>
    </div>
  );
}

export function Flourish({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 30" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M2 15 Q40 4 70 15 T130 15 T198 15" />
      <path d="M70 15 Q72 8 80 8 Q86 12 80 16 Q74 18 70 15" />
      <path d="M130 15 Q128 22 120 22 Q114 18 120 14 Q126 12 130 15" />
      <circle cx="100" cy="15" r="2.5" fill="currentColor" />
      <circle cx="6" cy="15" r="1.5" fill="currentColor" />
      <circle cx="194" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}
