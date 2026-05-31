import type { Metadata } from 'next';
import { Unbounded, Wix_Madefor_Text } from 'next/font/google';
import './globals.css';

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-unbounded',
  weight: ['400', '500', '600', '700'],
});

const wix = Wix_Madefor_Text({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-wix',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Киберия – IT-разработка',
  description: 'Разрабатываем сложные IT-продукты: e-commerce, веб-сервисы, ИИ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${wix.variable}`}>
      <body className="font-wix antialiased">{children}</body>
    </html>
  );
}