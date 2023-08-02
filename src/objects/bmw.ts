import bmw7 from '../assets/bmw/bmw-7.avif';
import bmw_i7 from '../assets/bmw/bmw-i7.avif';
import bmw_x5_M from '../assets/bmw/bmw-x5m.avif';
import bmw_xm from '../assets/bmw/bmw-xm.avif';
import { Audi } from './audi';

interface Bmw extends Audi {}

export const bmw : Audi[] = [
    {
        img: bmw7,
        model: '2024 BMW 7 Series',
        engineType: 'Gas',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "Redesigned last year with new style, more power, and advanced tech, the 2024 BMW 7 Series remains a benchmark of comfort, luxury, and big-sedan performance.",
        distancePayment: 25000,
        hourlyPayment: 2500,
        flatPayment: 80000
    },
    {
        img: bmw_i7,
        model: '2023 BMW i7',
        engineType: 'Electric',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "BMW's first all-electric full-size sedan, the i7, offers plenty of panache and advanced technology to challenge established six-figure rivals, including the Tesla Model S.",
        distancePayment: 28000,
        hourlyPayment: 2800,
        flatPayment: 90000
    },
    {
        img: bmw_x5_M,
        model: '2024 BMW X5 M',
        engineType: 'Gas',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "The BMW X5 M is at the apex of the performance-SUV segment, a 617-horsepower midsize SUV with superheroic acceleration and handling. Sportiness blends with luxury in the spacious interior, aided by top-notch craftsmanship and technology. ",
        distancePayment: 29000,
        hourlyPayment: 2900,
        flatPayment: 95000
    },
    {
        img: bmw_xm,
        model: '2023 BMW XM',
        engineType: 'Plug-In Hybrid',
        allowedNumberOfPassengers: 5,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "The all-new BMW XM is a high-performance powerhouse, but its odd styling and exorbitant price may limit its appeal.",
        distancePayment: 33000,
        hourlyPayment: 3300,
        flatPayment: 120000
    }
]