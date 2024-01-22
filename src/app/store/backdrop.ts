import { create } from 'zustand';

type BackdropStore = {
  isActive: boolean;
  toggle: () => void;
};

export const useBackdropStore = create<BackdropStore>((set) => ({
  isActive: false,
  toggle: () => set((state) => ({ isActive: !state.isActive })),
}));
