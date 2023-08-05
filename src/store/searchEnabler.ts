import { create } from 'zustand';

type Bool = {
    isEnabled: boolean,
    setIsEnabled: (isEnabled: boolean) => void;
}

export const useSearchEnabler = create<Bool>() ((set) => ({
    isEnabled: true,
    setIsEnabled: (isEnabled: boolean) => set({ isEnabled })
}))