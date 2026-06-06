import { create } from "zustand";

interface UseSidebarStore {
  isQueueOpen: boolean;
  setIsQueueOpen: (v: boolean) => void;
  toggleQueue: () => void;
}

export const useSidebarStore = create<UseSidebarStore>((set) => ({
  isQueueOpen: true,
  setIsQueueOpen: (v) => set({ isQueueOpen: v }),
  toggleQueue: () => set((state) => ({ isQueueOpen: !state.isQueueOpen })),
}));
