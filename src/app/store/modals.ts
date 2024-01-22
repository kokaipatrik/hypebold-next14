import { create } from 'zustand';

type ModalsStore = {
  active: string;
  set: (name: string) => void;
  remove: () => void;
};

export const useModalsStore = create<ModalsStore>((set) => ({
  active: '',
  set: (name) => set(() => ({ active: name })),
  remove: () => set(() => ({ active: '' })),
}));
