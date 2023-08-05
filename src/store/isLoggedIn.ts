import { create } from 'zustand';

interface Login {
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn : boolean) => void;
}

export const useLoggedIn = create<Login>() ((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn : boolean) => set({ isLoggedIn })
}))