'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
      <BootstrapClient />
    </ThemeProvider>
  );
}
