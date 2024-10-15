import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Navbar from './components/navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Ocean CRM',
  description: 'best modern CRM  dashboard for your business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-400 text-lg min-h-screen overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
