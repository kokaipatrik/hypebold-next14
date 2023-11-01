'use client';

import React, { createContext } from 'react';
import { Config } from '@/app/store/config.types';

export const ConfigContext = createContext<Config | null | string>(null);

export default function ConfigProvider({
  children,
  config,
}: {
  children: React.ReactNode;
  config: Config;
}) {
  return (
    <ConfigContext.Provider value={config}>
      {JSON.stringify(config)}
      {children}
    </ConfigContext.Provider>
  );
}
