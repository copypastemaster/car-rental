import '../assets/rentConfirm.css'

import { useStore } from '../store/zustStore'
import {BsFillPersonDashFill} from 'react-icons/bs';
import {BsFillGearFill} from 'react-icons/bs';
import {PiEngine} from 'react-icons/pi';
import {BsFillFuelPumpDieselFill} from 'react-icons/bs';
import {BsFillLightningChargeFill} from 'react-icons/bs';
import TypeOfRent from '../components/TypeOfRent';
import { useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ModeOfPayment } from '../components/TypeOfRent';
import { usePaymentStore } from '../store/paymentStore';
import { useState, useEffect } from 'react';
import DeliverOptions from '../components/DeliverOptions';
import { useDeliver } from '../store/deliverOptionsStore';
import { redirect } from 'react-router-dom';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { useLoggedIn } from '../store/isLoggedIn';



export default function RentConfirm() {
    const { isLoggedIn } = useLoggedIn();
    
    
    const toast = useToast();
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
    const { isDeliver } = useDeliver() 

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

    }, [payment, distancePayment, hourlyPayment, flatPayment])

   return img == '' ? 
          <div className='noimg relative top-10 md:top-32 lg:left-[40rem]'>
            <h1>There's nothing here...</h1>
            <Link to="/fleet" className='relative left-48 top-5 bg-slate-600 text-white p-2 rounded-md'>
                <button>Rent a car</button>
            </Link>
          </div> :  (
            <>
                <Alert status='error' hidden={isLoggedIn} className='relative top-20'>
                    <AlertIcon />
                    <AlertTitle>You must login first to rent</AlertTitle>
                </Alert>

                <div className='p-10 border flex flex-col gap-5 
                    md:relative md:top-20 md:mx-24
                    lg:mx-52 xl:mx-64 xl:px-44'>
        <img src={img} className='xl:h-100 xl:w-100 xl:max-h-96 xl:max-w-[800px]'/>
        <div className='flex flex-wrap gap-2 justify-evenly sm:gap-0 sm:flex-row lg:relative'>
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
        <div className='flex flex-wrap gap-10 md:gap-24 lg:relative lg:top-5'>
            
            <div>
                <h3 className='text-lg font-semibold'>Type of rent</h3>
                <TypeOfRent />
            </div>
           
           <div>
                <h3 className='text-lg font-semibold'>Mode of payment</h3>
                <ModeOfPayment />
           </div>
           
           <div>
                <h1 className='text-lg font-semibold'>Deliver options</h1>
                <DeliverOptions />
            </div>           
        </div>

            <div className='lg:relative lg:top-10'>
                <p className='flex gap-1 text-xl'>Pay: P{isDeliver == true ? paymentValue + 10000 : paymentValue}.00</p>
                <button className='[] p-2 relative top-3 bg-slate-600 text-white xl:relative xl:bottom-6 max-w-xs'
                        disabled={!isLoggedIn}
                        onClick={() => { toast({
                            title: isDeliver == true ? 'Car will be delivered today!' : 'Your car is ready. Pick it up today!',
                            duration: 2000,
                            isClosable: true,
                            position: 'top'
                        }) }}>              
                CONFIRM
                </button>
                
            </div>
            

    </div>
            </>

  )
}
