import { create, StateCreator } from 'zustand';
import { persist, createJSONStorage, PersistOptions } from 'zustand/middleware';

type AuthStore = {
  authenticated: boolean;
  user: any;
};

type MyPersist = (
  config: StateCreator<AuthStore>,
  options: PersistOptions<AuthStore>
) => StateCreator<AuthStore>;

const authActions: StateCreator<AuthStore> = () => ({
  authenticated: false,
  user: {},
});

export const useAuthStore = create<AuthStore, []>(
  (persist as MyPersist)(authActions, {
    name: 'auth-storage',
    storage: createJSONStorage(() => sessionStorage),
  })
);
