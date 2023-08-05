import { create } from "zustand"
import { Audi } from "../objects/audi"

interface Car extends Audi {
    setImg: (img: string) => void;
    setModel: (model: string) => void;
    setEngineType: (engineType: string ) => void;
    setAllowedNumberOfPassengers: (allowedNumberOfPassengers: number) => void;
    setTransmission: (transmission: string) => void;
    setFullTank: (fullTank: boolean) => void;
    setDescription: (description: string) => void;
    setDistancePayment: (distancePayment: number) => void;
    setFlatPayment: (flatPayment: number) => void;
    setHourlyPayment: (hourlyPayment: number) => void;
}

export const useStore = create<Car>() ((set) => ({
    img: '',
    model: '',
    engineType: '',
    allowedNumberOfPassengers: 0,
    transmission: '',
    sanitation: '',
    fullTank: true,
    description: '',
    distancePayment: 0,
    hourlyPayment: 0,
    flatPayment: 0,

    setImg: (img: string) => set({ img }),
    setModel: (model: string) => set({ model }),
    setEngineType: (engineType: string) => set({ engineType }), 
    setAllowedNumberOfPassengers: (allowedNumberOfPassengers: number) => set({ allowedNumberOfPassengers }),
    setTransmission: (transmission: string) => set({ transmission }),
    setFullTank: (fullTank: boolean) => set({ fullTank }),
    setDescription: (description: string) => set({ description }),
    setDistancePayment: (distancePayment: number) => set({ distancePayment }),
    setFlatPayment: (flatPayment: number) => set({ flatPayment }),
    setHourlyPayment: (hourlyPayment: number) => set({ hourlyPayment })
}))
