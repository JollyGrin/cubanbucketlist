import type { Metadata } from 'next';
import { Fraunces, DM_Sans, Caveat } from 'next/font/google';
import './globals.css';

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
    <html lang="en" className={`${display.variable} ${sans.variable} ${hand.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
