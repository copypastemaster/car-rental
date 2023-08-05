import { create } from 'zustand';

interface DeliverOptions {
    isDeliver: boolean
    setIsDeliver: (isDeliver: boolean) => void;
}

export const useDeliver = create<DeliverOptions>() ((set) => ({
    isDeliver: false,
    setIsDeliver: (isDeliver: boolean) => set({ isDeliver })
}))