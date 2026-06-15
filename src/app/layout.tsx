import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anu Prakash | React Native Developer Portfolio',
  description: 'World-class React Native Developer portfolio. Scalable, high-performance mobile applications with modern UI/UX experiences.',
  keywords: ['React Native', 'Expo', 'TypeScript', 'Mobile Developer', 'Anu Prakash', 'iOS Developer', 'Android Developer', 'Portfolio'],
  authors: [{ name: 'Anu Prakash' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Anu Prakash | React Native Developer',
    description: 'Build scalable, high-performance mobile applications with modern UI/UX experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anu Prakash | React Native Developer',
    description: 'Build scalable, high-performance mobile applications with modern UI/UX experiences.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="bg-black text-white antialiased selection:bg-primary/30 selection:text-white">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
