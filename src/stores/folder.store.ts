import { create } from "zustand";

const folderStore = create((set) => ({
  name: "",
  updateName: (value: any) => set((state: any) => ({ ...state, name: value })),
  set: (value: any) => set((state: any) => ({ ...state, name: value })),
}));
