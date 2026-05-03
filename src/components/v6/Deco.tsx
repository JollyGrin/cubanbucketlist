'use client';

// Reusable Tropicana / tropical Art Deco SVG decorations.

export function SunburstFan({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 120" className={className} fill="none" stroke="currentColor" strokeWidth="1.4">
      {Array.from({ length: 13 }).map((_, i) => {
        const angle = -90 + (i - 6) * 14;
        const rad = (angle * Math.PI) / 180;
        const x = 120 + Math.cos(rad) * 110;
        const y = 120 + Math.sin(rad) * 110;
        return <line key={i} x1="120" y1="120" x2={x} y2={y} />;
      })}
      <path d="M10 120 A110 110 0 0 1 230 120" />
      <path d="M40 120 A80 80 0 0 1 200 120" />
      <path d="M70 120 A50 50 0 0 1 170 120" />
      <circle cx="120" cy="120" r="6" fill="currentColor" />
    </svg>
  );
}

export function PalmFrond({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M100 200 Q100 130 100 80" />
      {/* leaf veins */}
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 80 + i * 12;
        const len = 60 - i * 6;
        return (
          <g key={i}>
            <path d={`M100 ${y} Q ${100 - len * 0.4} ${y - 18} ${100 - len} ${y - 30}`} />
            <path d={`M100 ${y} Q ${100 + len * 0.4} ${y - 18} ${100 + len} ${y - 30}`} />
          </g>
        );
      })}
      <path d="M100 80 Q 90 60 100 40 Q 110 60 100 80" fill="currentColor" />
    </svg>
  );
}

export function ScallopBorder({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 18" preserveAspectRatio="none" className={className} fill="currentColor">
      {Array.from({ length: 30 }).map((_, i) => (
        <circle key={i} cx={10 + i * 20} cy={9} r={8} />
      ))}
    </svg>
  );
}

export function DecoChevron({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M2 22 L20 4 L40 22 L60 4 L78 22" />
    </svg>
  );
}

export function Pineapple({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Crown */}
      <path d="M60 12 Q56 30 48 36 M60 18 Q60 36 60 42 M60 12 Q64 30 72 36 M60 16 Q70 28 80 32 M60 16 Q50 28 40 32" />
      {/* Body */}
      <ellipse cx="60" cy="118" rx="48" ry="68" />
      {/* Diamond pattern */}
      {[0, 1, 2, 3, 4].map((row) => (
        <g key={row}>
          {[-2, -1, 0, 1, 2].map((col) => {
            const x = 60 + col * 18 + (row % 2) * 9;
            const y = 70 + row * 22;
            return <path key={col} d={`M${x - 6} ${y} L${x} ${y - 8} L${x + 6} ${y} L${x} ${y + 8} Z`} />;
          })}
        </g>
      ))}
    </svg>
  );
}

export function MarqueeBulbBorder({ className = '' }: { className?: string }) {
  return <span aria-hidden className={`${className} v6-bulbs`} />;
}
