import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { useConfigStore } from '@/store/config';
import '@/app/globals.scss';
import ReactQueryProvider from '@/app/ReactQueryProvider';
import StoreInitializer from '@/app/StoreInitializer';
import AuthHandler from '@/app/AuthHandler';
import Header from '@/components/Header';
import Backdrop from '@/components/Backdrop';
import AuthModal from '@/components/Modals/AuthModal';
import StoreHydration from './StoreHydration';

export const metadata: Metadata = {
  title: 'HypeBold',
  description: 'Buy, sell your best fashion.',
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getConfig = await fetch(`${process.env.NEXT_PUBLIC_API}/config`);
  const config = await getConfig.json();
  useConfigStore.setState({ config: config.data });

  return (
    <html lang='en'>
      <body className={inter.className}>
        <StoreHydration>
          <ReactQueryProvider>
            <StoreInitializer config={config.data} />
            <AuthHandler />
            <Header />
            {children}
            <Backdrop />
            <AuthModal />
          </ReactQueryProvider>
        </StoreHydration>
      </body>
    </html>
  );
}
