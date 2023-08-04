import { create } from "zustand"
import { Audi } from "../objects/audi"

interface Car extends Audi {
    setImg: (img: string) => void;
    setModel: (model: string) => void;
    setEngineType: (engineType: 'Gas') => void;
    setAllowedNumberOfPassengers: (allowedNumberOfPassengers: 0) => void;
    setTransmission: (transmission: 'Automatic') => void;
    setFullTank: (fullTank: true) => void;
    setDescription: (description: string) => void;
    setDistancePayment: (distancePayment: number) => void;
    setFlatPayment: (flatPayment: number) => void;
    setHourlyPayment: (hourlyPayment: number) => void;
}

export const useStore = create<Car>() ((set) => ({
    img: '',
    model: '',
    engineType: 'Gas',
    allowedNumberOfPassengers: 0,
    transmission: 'Automatic',
    sanitation: '',
    fullTank: true,
    description: '',
    distancePayment: 0,
    hourlyPayment: 0,
    flatPayment: 0,

    setImg: (img: string) => set({ img }),
    setModel: (model: string) => set({ model }),
    setEngineType: (engineType: 'Gas') => set({ engineType }), 
    setAllowedNumberOfPassengers: (allowedNumberOfPassengers: 0) => set({ allowedNumberOfPassengers }),
    setTransmission: (transmission: 'Automatic') => set({ transmission }),
    setFullTank: (fullTank: true) => set({ fullTank }),
    setDescription: (description: string) => set({ description }),
    setDistancePayment: (distancePayment: number) => set({ distancePayment }),
    setFlatPayment: (flatPayment: number) => set({ flatPayment }),
    setHourlyPayment: (hourlyPayment: number) => set({ hourlyPayment })
}))
