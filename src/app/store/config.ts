import { create } from 'zustand';
import type { Config } from './config.types';

type ConfigStore = {
  config: Config | null;
};

export const useConfigStore = create<ConfigStore>(() => ({
  config: null,
}));
