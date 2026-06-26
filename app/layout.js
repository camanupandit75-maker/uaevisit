import { Analytics } from '@vercel/analytics/next';
import { Cormorant_Garamond, Hanken_Grotesk, Marcellus, Noto_Naskh_Arabic } from 'next/font/google';
import './globals.css';

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marcellus',
});

const cormorantItalic = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['italic'],
  variable: '--font-display-italic',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-hanken',
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-naskh',
});

export const metadata = {
  title: 'Discover the Emirates',
  description:
    'Seven emirates — from desert and oasis to the modern Gulf coast.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${cormorantItalic.variable} ${hanken.variable} ${notoNaskh.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
