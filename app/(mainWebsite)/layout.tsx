import type { Metadata } from 'next';
import { Anton, Inter, Oswald } from 'next/font/google';
import Script from 'next/script';

import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Top Goat Metal Structures',
  description: 'Custom metal garages, carports, barns, RV covers, and commercial steel buildings.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive" // load after page is interactive
        />
      </head>
      <body className={`${anton.variable} ${oswald.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
