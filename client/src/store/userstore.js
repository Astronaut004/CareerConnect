import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      userId: null,
      token: null,
      setUser: (userId, token) => set({ userId, token }),
      clearUser: () => set({ userId: null, token: null }),
    }),
    {
      name: "user-storage",  // <- key name for localStorage
      getStorage: () => localStorage,
    }
  )
);
