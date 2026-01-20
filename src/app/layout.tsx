import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Regard - Reprenez le contrôle de vos abonnements',
  description: 'Regard regroupe tous vos abonnements, t’alerte avant chaque prélèvement et t’aide à résilier facilement.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen bg-background font-sans antialiased selection:bg-primary/30',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}