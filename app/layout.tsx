import type { Metadata } from 'next';
import { Cairo, Space_Grotesk } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hayasell — دع البائع يبحث عنك',
  description: 'منصة تجارة ذكية ومتكاملة — سوق الطلب المباشر في الجزائر والخليج',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${spaceGrotesk.variable}`}>
      <body style={{ fontFamily: 'var(--font-cairo), system-ui, sans-serif' }}>{children}</body>
    </html>
  );
}
