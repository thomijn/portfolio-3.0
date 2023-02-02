import create from "zustand";

export const useStore = create((set, get) => ({
  modal: false,
  toggleMenu: (data) => set({ menu: data }),
}));
