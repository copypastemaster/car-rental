import c_class from '../assets/mercedes/c-class-final.avif';
import eqs from '../assets/mercedes/eqs-final.avif';
import s_class from '../assets/mercedes/s-class-final.png';
import sl from '../assets/mercedes/sl-final.avif';
import { Audi } from './audi';

export const mercedes: Audi[] = [
    {
        img: c_class,
        model: '2023 Mercedes-Benz',
        engineType: 'Gas',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "The all-new 2023 Mercedes-Benz C-Class is an artful combination of classic European luxury with leading-edge technology.",
        distancePayment: 19000,
        hourlyPayment: 1900,
        flatPayment: 40000
    },
    {
        img: eqs,
        model: '2023 Mercedes-Benz EQS SUV',
        engineType: 'Electric',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "If you've been looking for an all-electric SUV with three rows of seats, your choice has been limited to the Tesla Model X. That changes with the introduction of the 2023 Mercedes-Benz EQS SUV.",
        distancePayment: 27000,
        hourlyPayment: 2700,
        flatPayment: 60000
    },
    {
        img: s_class,
        model: '2023 Mercedes-Benz S-Class',
        engineType: 'Plug-In Hybrid',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "The Mercedes-Benz S-Class remains a top choice when it comes to ultra-luxurious sedans, thanks to its impressive performance, smooth ride, and ultra-plush cabin. An average-sized trunk and a few fussy controls are the only knocks on this otherwise class-leading sedan.",
        distancePayment: 29000,
        hourlyPayment: 2900,
        flatPayment: 80000,
    },
    {
        img: sl,
        model: '2023 Mercedes-Benz SL',
        engineType: 'Gas',
        allowedNumberOfPassengers: 4,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "The Mercedes-Benz SL is a 4-seater vehicle that comes in 3 trim levels.",
        distancePayment: 31000,
        hourlyPayment: 3100,
        flatPayment: 115000,
    },
]