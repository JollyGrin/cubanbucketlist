import type { Metadata } from 'next';
import {
  Fraunces,
  DM_Sans,
  Caveat,
  Bodoni_Moda,
  Newsreader,
  JetBrains_Mono,
  Big_Shoulders_Display,
  Plus_Jakarta_Sans,
  Space_Mono,
  IM_Fell_English,
  IM_Fell_English_SC,
  La_Belle_Aurore,
  Bagel_Fat_One,
  Outfit,
  VT323,
  Limelight,
  Cormorant_Garamond,
  Pinyon_Script,
  Bungee,
  Permanent_Marker,
  Archivo,
} from 'next/font/google';
import './globals.css';
import { VersionSwitcher } from '@/components/VersionSwitcher';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const hand = Caveat({
  subsets: ['latin'],
  variable: '--font-hand',
  display: 'swap',
  weight: ['400', '600'],
});

// V2 — Cinematic Noir
const v2Display = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-v2-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});
const v2Body = Newsreader({
  subsets: ['latin'],
  variable: '--font-v2-body',
  display: 'swap',
  style: ['normal', 'italic'],
});
const v2Mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-v2-mono',
  display: 'swap',
  weight: ['400', '500'],
});

// V3 — Pop Maximalist
const v3Display = Big_Shoulders_Display({
  subsets: ['latin'],
  variable: '--font-v3-display',
  display: 'swap',
  weight: ['700', '800', '900'],
});
const v3Body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-v3-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
const v3Mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-v3-mono',
  display: 'swap',
  weight: ['400', '700'],
});

// V4 — Carta Marina (1700s cartography)
const v4Display = IM_Fell_English({
  subsets: ['latin'],
  variable: '--font-v4-display',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
});
const v4Sc = IM_Fell_English_SC({
  subsets: ['latin'],
  variable: '--font-v4-sc',
  display: 'swap',
  weight: ['400'],
});
const v4Hand = La_Belle_Aurore({
  subsets: ['latin'],
  variable: '--font-v4-hand',
  display: 'swap',
  weight: ['400'],
});

// V6 — Tropicana (1950s Deco cabaret)
const v6Display = Limelight({
  subsets: ['latin'],
  variable: '--font-v6-display',
  display: 'swap',
  weight: ['400'],
});
const v6Body = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-v6-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});
const v6Script = Pinyon_Script({
  subsets: ['latin'],
  variable: '--font-v6-script',
  display: 'swap',
  weight: ['400'],
});

// V7 — Tipografía de la Calle (Havana street signage)
const v7Block = Bungee({
  subsets: ['latin'],
  variable: '--font-v7-block',
  display: 'swap',
  weight: ['400'],
});
const v7Brush = Permanent_Marker({
  subsets: ['latin'],
  variable: '--font-v7-brush',
  display: 'swap',
  weight: ['400'],
});
const v7Body = Archivo({
  subsets: ['latin'],
  variable: '--font-v7-body',
  display: 'swap',
  weight: ['400', '500', '700', '800'],
});

// V5 — Iridescent Chrome
const v5Display = Bagel_Fat_One({
  subsets: ['latin'],
  variable: '--font-v5-display',
  display: 'swap',
  weight: ['400'],
});
const v5Body = Outfit({
  subsets: ['latin'],
  variable: '--font-v5-body',
  display: 'swap',
});
const v5Mono = VT323({
  subsets: ['latin'],
  variable: '--font-v5-mono',
  display: 'swap',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Cuban Bucket List — Real Cuba, real people, experiences worth telling',
  description:
    'Hidden gems, insider experiences, and unforgettable moments with the most interesting locals on the island. Join the free weekly newsletter.',
  openGraph: {
    title: 'Cuban Bucket List',
    description: 'Discover the Cuba you have never seen.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#F5EFE3',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${hand.variable} ${v2Display.variable} ${v2Body.variable} ${v2Mono.variable} ${v3Display.variable} ${v3Body.variable} ${v3Mono.variable} ${v4Display.variable} ${v4Sc.variable} ${v4Hand.variable} ${v5Display.variable} ${v5Body.variable} ${v5Mono.variable} ${v6Display.variable} ${v6Body.variable} ${v6Script.variable} ${v7Block.variable} ${v7Brush.variable} ${v7Body.variable}`}
    >
      <body className="antialiased">
        <VersionSwitcher />
        {children}
      </body>
    </html>
  );
}
