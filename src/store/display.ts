import { create } from 'zustand';
import { mercedes } from "../objects/mercedes"
import { Audi } from '../objects/audi';

interface Display<T, S>{
    display: T
    brand: S
    setDisplay: (display: T) => void
    setBrand: (brand: S) => void
}

export const useDisplay = create<Display<Audi[], string>>() ((set) => ({
    display: mercedes,
    brand: '',
    setDisplay: (display: Audi[]) => set({ display }),
    setBrand: (brand: string) => set({ brand }) 
}))