import { create } from 'zustand';

interface Payment {
    payment: number;
    setPayment: (payment: number) => void;
}

export const usePaymentStore = create<Payment>() ((set) => ({
    payment: 1,
    setPayment: (payment: number) => set({ payment })
}))