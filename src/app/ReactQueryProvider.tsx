'use client';

import { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ReactQueryProvider {
  children: ReactNode;
}

export default function ReactQueryProvider({ children }: ReactQueryProvider) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
