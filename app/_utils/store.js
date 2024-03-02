import { create } from 'zustand';

export const useTimeStore = create((set) => ({
  currentTime: new Date(),
  setCurrentTime: (time) => set({ currentTime: time }),
}));

// Create a store for a dosages state for medications
export const dosagesStore = create((set) => ({
  dosages: [],
  setDosages: (newDosages) => set({ dosages: newDosages }),
}));
