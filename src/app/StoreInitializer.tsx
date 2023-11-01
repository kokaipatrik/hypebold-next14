'use client';

import { useRef } from 'react';

import { useConfigStore } from '@/app/store/config';
import type { Config } from '@/app/store/config.types';

export default function StoreInitializer({ config }: { config: Config }) {
  const initialized = useRef(false);

  if (!initialized.current) {
    useConfigStore.setState({ config });
    initialized.current = true;
  }
  return null;
}
