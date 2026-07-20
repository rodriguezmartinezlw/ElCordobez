import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Finca El Cordovez | Restaurante, bar y eventos en Hontoba',
  description:
    'Una auténtica experiencia castellana para restaurante, bar, bodas y eventos en Finca El Cordovez, Hontoba.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${lato.variable} ${playfair.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className="bg-background-light text-text-light transition-colors duration-300 dark:bg-background-dark dark:text-text-dark">
        {children}
      </body>
    </html>
  );
}
