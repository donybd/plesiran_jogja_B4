import { create } from "zustand";

export const useUserStore = create((set) => ({
  data: null,
  setUser: (payload) => set({ data: payload }),
  setMerchant: (payload) => set({ merchant: payload }),
}));

