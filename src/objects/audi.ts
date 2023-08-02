import etron_gt from '../assets/audi/etron-gt.avif';
import rs_6_avant from '../assets/audi/rs-6-avant.avif';
import rs_7 from '../assets/audi/rs-7.avif';
import rs_etron_gt from '../assets/audi/rs-etron-gt.avif';

export interface Audi  {
    img: string;
    model: string;
    engineType: 'Gas' | 'Electric' | 'Diesel' | 'Plug-In Hybrid'
    allowedNumberOfPassengers: number;
    transmission: 'Manual' | 'Automatic';
    sanitation: string;
    fullTank: boolean;
    description: string;
    distancePayment: number;
    hourlyPayment: number;
    flatPayment: number;
}



export const audi: Audi[] = [
    {
        img: etron_gt,
        model: '2023 Audi e-tron GT',
        engineType: 'Electric',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "the 2023 Audi e-tron GT offers a sporty grand touring option with tremendous performance that doesn't come at the cost of a jolting, uncomfortable ride.",
        distancePayment: 20000,
        hourlyPayment: 2000,
        flatPayment: 70000
    },
    {
        img: rs_6_avant,
        model: '2023 Audi RS 6 Avant',
        engineType: 'Gas',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "A true split personality, the Audi RS 6 Avant is a high-powered luxury wagon with few equals. It's easygoing around town and blindingly quick on an open road.",
        distancePayment: 21000,
        hourlyPayment: 2100,
        flatPayment: 71000
    },
    {
        img: rs_7,
        model: '2023 Audi RS 7',
        engineType: 'Gas',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "Don't let the four-door hatchback design fool you. The Audi RS 7 Sportback is an exceptionally powerful performance car with handling to match. It's also comfortable enough to drive every day and surprisingly practical for a car with its capabilities.",
        distancePayment: 22000,
        hourlyPayment: 2200,
        flatPayment: 72000
    },
    {
        img: rs_etron_gt,
        model: '2023 Audi RS e-tron GT',
        engineType: 'Electric',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "Audi's sleekest, sportiest, and quickest model, the RS e-tron GT is a coupe-like four-door with a plush cabin, wonderful road manners, and brutally quick acceleration. It's surpassed by other models in driving range and cargo capacity, but those usually aren't must-haves in the supercar category.",
        distancePayment: 23000,
        hourlyPayment: 2300,
        flatPayment: 73000
    }
]
