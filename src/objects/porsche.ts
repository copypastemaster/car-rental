import porsche_718_boxter from '../assets/porsche/porsche-718-boxster.avif';
import porsche_911 from '../assets/porsche/porsche-911.avif';
import porsche_panamera from '../assets/porsche/porsche-panamera.avif';
import porsche_taycan from '../assets/porsche/porsche-taycan.avif';
import { Audi } from './audi';

export const porsche: Audi[] = [
    {
        img: porsche_718_boxter,
        model: '2023 Porsche 718 Boxter',
        engineType: 'Gas',
        allowedNumberOfPassengers: 2,
        transmission: 'Manual',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "The Porsche 718 Boxster is one of the values available among true sports cars. Its high-octane engine choices, nimble chassis, iconic design, and sporty interior on all points.",
        distancePayment: 21000,
        hourlyPayment: 2100,
        flatPayment: 39999,
    },
    {
        img: porsche_911,
        model:'2023 Porsche 911',
        engineType: 'Gas',
        allowedNumberOfPassengers: 2,
        transmission: 'Manual',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "With its celebrated heritage, iconic design, and unmatched driving experience, the Porsche 911 is still the ultimate sports car. New variations for this year only make it harder to decide which one is best.",
        distancePayment: 32000,
        hourlyPayment: 3200,
        flatPayment: 118000
    },
    {
        img: porsche_panamera,
        model: '2023 Porsche Panamera',
        engineType: 'Gas',
        allowedNumberOfPassengers: 4,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "Just because you've got more responsibilities, that doesn't mean the fun is over. The Porsche Panamera is essentially a four-door 911, with comparable pricing, of course. The Porsche Panamera is a 4-seater vehicle that comes in 11 trim levels.",
        distancePayment: 29000,
        hourlyPayment: 2900,
        flatPayment: 93000,
    },
    {
        img: porsche_taycan,
        model: '2023 Porsche Taycan',
        engineType: 'Electric',
        allowedNumberOfPassengers: 4,
        transmission: 'Automatic',
        sanitation: 'Sanitized',
        fullTank: true,
        description: "The Taycan is low, sleek, quick, and agile (everything a Porsche should be), and it's electric. It doesn't deliver the range of some competitors, but it more than makes up for that with super-fast charging capability and a driving experience that's hard to match.",
        distancePayment: 26000,
        hourlyPayment: 2600,
        flatPayment: 83000
    },
]