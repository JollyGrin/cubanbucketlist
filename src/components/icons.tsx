// Custom hand-illustrated SVG icons for each experience type.
// Stroke-based, slightly imperfect — to match the editorial / hand-drawn feel.

type IconProps = { className?: string; stroke?: string; accent?: string };

export function MountainIcon({ className, stroke = 'currentColor', accent }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="84" cy="32" r="11" fill={accent ?? stroke} opacity="0.85" />
      <path d="M8 92 L40 46 L62 78 L82 56 L112 92 Z" stroke={stroke} strokeWidth="2.5" fill="none" />
      <path d="M40 46 L46 56 L52 50" stroke={stroke} strokeWidth="2" />
      <path d="M82 56 L88 64" stroke={stroke} strokeWidth="2" />
      <path d="M8 92 L112 92" stroke={stroke} strokeWidth="2.5" />
      <path d="M14 100 Q26 96 38 100 T70 100 T106 100" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export function KitchenIcon({ className, stroke = 'currentColor', accent }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 54 Q60 38 90 54 L86 84 Q60 96 34 84 Z" stroke={stroke} strokeWidth="2.5" />
      <path d="M30 54 L26 50 M90 54 L94 50" stroke={stroke} strokeWidth="2.5" />
      <path d="M58 32 Q54 26 60 20 Q66 26 62 32" stroke={accent ?? stroke} strokeWidth="2.5" fill="none" />
      <path d="M70 36 Q67 32 71 28 Q75 32 72 36" stroke={accent ?? stroke} strokeWidth="2" opacity="0.7" />
      <path d="M48 36 Q45 32 49 28 Q53 32 50 36" stroke={accent ?? stroke} strokeWidth="2" opacity="0.7" />
      <path d="M40 90 L40 100 M80 90 L80 100" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

export function ScubaIcon({ className, stroke = 'currentColor', accent }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 60 Q24 54 34 60 T54 60 T74 60 T94 60 T114 60" stroke={stroke} strokeWidth="2" opacity="0.6" />
      <path d="M14 78 Q24 72 34 78 T54 78 T74 78 T94 78 T114 78" stroke={stroke} strokeWidth="2" opacity="0.6" />
      <path d="M30 96 Q60 86 90 96" stroke={stroke} strokeWidth="2" opacity="0.6" />
      <path d="M22 38 Q42 28 70 36 L82 42 L74 50 L60 46 Q42 50 24 44 Z" stroke={stroke} strokeWidth="2.5" fill="none" />
      <circle cx="34" cy="40" r="2" fill={accent ?? stroke} />
      <path d="M82 42 Q92 36 100 28" stroke={accent ?? stroke} strokeWidth="2" />
      <circle cx="100" cy="28" r="3" fill={accent ?? stroke} />
    </svg>
  );
}

export function WaterfallIcon({ className, stroke = 'currentColor', accent }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 18 Q44 14 60 22 T92 22" stroke={stroke} strokeWidth="2.5" />
      <path d="M30 26 L34 70 M44 26 L46 74 M58 28 L60 78 M72 28 L74 74 M86 26 L88 72" stroke={accent ?? stroke} strokeWidth="2" opacity="0.85" />
      <path d="M22 86 Q40 80 60 86 T100 86" stroke={stroke} strokeWidth="2.5" />
      <path d="M18 96 Q40 90 60 96 T106 96" stroke={stroke} strokeWidth="1.5" opacity="0.6" />
      <path d="M14 104 Q40 98 60 104 T108 104" stroke={stroke} strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

export function CarIcon({ className, stroke = 'currentColor', accent }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 78 L24 62 Q40 54 60 54 T96 62 L106 78 L106 88 L14 88 Z" stroke={stroke} strokeWidth="2.5" />
      <path d="M30 62 L34 54 Q48 48 60 48 T86 54 L90 62" stroke={stroke} strokeWidth="2" />
      <circle cx="34" cy="92" r="9" fill={accent ?? stroke} stroke={stroke} strokeWidth="2.5" />
      <circle cx="86" cy="92" r="9" fill={accent ?? stroke} stroke={stroke} strokeWidth="2.5" />
      <circle cx="34" cy="92" r="3" fill={stroke} />
      <circle cx="86" cy="92" r="3" fill={stroke} />
      <path d="M16 78 L106 78" stroke={stroke} strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export function SalsaIcon({ className, stroke = 'currentColor', accent }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="48" cy="34" r="8" stroke={stroke} strokeWidth="2.5" />
      <path d="M48 42 L48 70 L36 96 M48 70 L60 96" stroke={stroke} strokeWidth="2.5" />
      <path d="M48 50 L62 56 L70 48" stroke={stroke} strokeWidth="2.5" />
      <path d="M70 48 L80 36" stroke={accent ?? stroke} strokeWidth="2.5" />
      <circle cx="84" cy="32" r="5" fill={accent ?? stroke} />
      <path d="M88 36 L96 28 M92 22 Q98 24 100 30" stroke={accent ?? stroke} strokeWidth="2" />
      <path d="M30 24 Q26 20 30 16" stroke={accent ?? stroke} strokeWidth="2" />
    </svg>
  );
}

export const iconMap = {
  mountain: MountainIcon,
  kitchen: KitchenIcon,
  scuba: ScubaIcon,
  waterfall: WaterfallIcon,
  car: CarIcon,
  salsa: SalsaIcon,
};

export function StampBadge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border-2 border-current px-2.5 py-0.5 font-display text-[11px] uppercase tracking-[0.18em] ${className}`}
      style={{ fontStyle: 'italic' }}
    >
      {children}
    </span>
  );
}

export function HeartGlyph({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
