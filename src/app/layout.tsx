import { Metadata } from 'next';
import './globals.css';
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  display: 'swap',
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-archivo'
});

export const metadata: Metadata = {
  title: 'Minimal Single Page Portfolio',
  description: 'Created with Frontend Tribe'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${archivo.variable} font-archivo antialiased bg-stone-200 text-stone-900 `}>
        {children}
      </body>
    </html>
  );
}
