import { useStore } from '../store/zustStore'
import {BsFillPersonDashFill} from 'react-icons/bs';
import {BsFillGearFill} from 'react-icons/bs';
import {PiEngine} from 'react-icons/pi';
import {BsFillFuelPumpDieselFill} from 'react-icons/bs';
import {BsFillLightningChargeFill} from 'react-icons/bs';
import TypeOfRent from '../components/TypeOfRent';
import { ModeOfPayment } from '../components/TypeOfRent';
import { usePaymentStore } from '../store/paymentStore';
import { useState, useEffect } from 'react';

export default function RentConfirm() {

    const [paymentValue, setPaymentValue] = useState(0);

    const {
        img, 
        model, 
        description, 
        engineType,
        allowedNumberOfPassengers,
        transmission,
        distancePayment,
        hourlyPayment,
        flatPayment,
    } = useStore()

    const { payment } = usePaymentStore();

    useEffect(() => {
        switch(payment){
            case 1:
                setPaymentValue(distancePayment);
                break;
            case 2:
                setPaymentValue(hourlyPayment);
                break;
            case 3:
                setPaymentValue(flatPayment);
                break;
            default:
                setPaymentValue(distancePayment);
        }
    }, [payment])

  return (
    <div className='p-10 border flex flex-col gap-5 
                    md:relative md:top-20 md:left-10
                    lg:mx-52 xl:mx-64 lg:px-44'>
        <img src={img} className='xl:h-100 xl:w-100 xl:max-h-96 xl:max-w-[800px]'/>
        <div className='flex flex-col justify-evenly sm:flex-row lg:relative 2xl:right-32'>
                            <section className='flex gap-2' title="Number of passengers allowed">
                                <BsFillPersonDashFill size={15}/>
                                <p className='text-xs'>{allowedNumberOfPassengers}</p>
                            </section>
                            <section className='flex gap-2' title="Transmission">
                                <BsFillGearFill size={15}/>
                                <p className='text-xs'>{transmission} </p>                   
                            </section>
                            <section className='flex gap-2' title="Type of engine">
                                <PiEngine size={15}/>
                                <p className='text-xs'>{engineType}</p>
                            </section>
                            <section className='flex gap-2'>
                                {engineType === 'Gas' ? <BsFillFuelPumpDieselFill size={15}/> : <BsFillLightningChargeFill size={15}/>}
                                {engineType === 'Gas' ? <p className='text-xs'>Full tank</p> : <p className='text-xs'>Fully charged</p>}
                            </section>
                        </div>
        <h1 className='text-slate-600 text-xl font-semibold md:text-2xl lg:text-3xl'>
            {model}
        </h1>
        <p className='max-w-md'>{description}</p>
        <div className='flex flex-wrap gap-24 md:gap-64'>
            <div>
                <h3 className='text-lg font-semibold'>Type of rent</h3>
                <TypeOfRent />
            </div>
           
           <div>
                <h3 className='text-lg font-semibold'>Mode of payment</h3>
                <ModeOfPayment />
           </div>            
        </div>
            <p className='flex gap-1'>To pay: P{paymentValue}.00</p>
        <button className='relative top-3 bg-slate-600 text-white xl:relative xl:bottom-6 max-w-xs'>CONFIRM</button>

    </div>
  )
}
