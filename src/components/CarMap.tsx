import {BsFillPersonDashFill} from 'react-icons/bs';
import {BsFillGearFill} from 'react-icons/bs';
import {PiEngine} from 'react-icons/pi';
import {BsFillFuelPumpDieselFill} from 'react-icons/bs';
import {BsFillLightningChargeFill} from 'react-icons/bs';
import { Audi } from '../objects/audi';
import { useStore } from '../store/zustStore';
import { useLoggedIn } from '../store/isLoggedIn';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import '../assets/carmap.css'

interface Props {
    object: Audi[]
}


export default function CarMap (props: Props) {

    const { isLoggedIn } = useLoggedIn();
   
    const { 
        setImg, 
        setModel,
        setEngineType,
        setAllowedNumberOfPassengers,
        setTransmission,
        setFullTank,
        setDescription,
        setDistancePayment,
        setFlatPayment,
        setHourlyPayment  } = useStore()

    const setProperties = (obj: Audi) => {
        setImg(obj.img);
        setModel(obj.model);
        setEngineType(obj.engineType);
        setAllowedNumberOfPassengers(obj.allowedNumberOfPassengers);
        setTransmission(obj.transmission);
        setFullTank(obj.fullTank);
        setDescription(obj.description);
        setDistancePayment(obj.distancePayment);
        setFlatPayment(obj.flatPayment);
        setHourlyPayment(obj.hourlyPayment);
    }

    const navigate = useNavigate();

    return (
        <>
            <Alert status='error' hidden={isLoggedIn} className='alerter xl:mx-5 2xl:mx-14' w='100%'>
                <AlertIcon />
                <AlertTitle className=''>You must login first to rent</AlertTitle>
            </Alert>
            {props.object.map((car: Audi) => {
                return(
                    <div key={car.img} className='border flex flex-col gap-5 p-3 
                                                  xl:max-w-lg xl:mx-5 2xl:max-w-4xl 2xl:mx-[3rem]'>                 
                        <img src={car.img} className=''/>
                        <div className='flex gap-5 flex-wrap justify-evenly md:justify-center md:gap-20 xl:gap-10 3xl:gap-20'>
                            <section className='flex gap-2' title="Number of passengers allowed">
                                <BsFillPersonDashFill size={15}/>
                                <p className='text-xs'>{car.allowedNumberOfPassengers}</p>
                            </section>
                            <section className='flex gap-2' title="Transmission">
                                <BsFillGearFill size={15}/>
                                <p className='text-xs'>{car.transmission} </p>                   
                            </section>
                            <section className='flex gap-2' title="Type of engine">
                                <PiEngine size={15}/>
                                <p className='text-xs'>{car.engineType}</p>
                            </section>
                            <section className='flex gap-2'>
                                {car.engineType === 'Gas' ? <BsFillFuelPumpDieselFill size={15}/> : <BsFillLightningChargeFill size={15}/>}
                                {car.engineType === 'Gas' ? <p className='text-xs'>Full tank</p> : <p className='text-xs'>100%</p>}
                            </section>
                        </div>
                        <h1 className='text-3xl text-slate-600 font-semibold'>{car.model}</h1>
                        <p className='text-xs md:text-sm max-w-sm'>{car.description}</p>
                        <p className='font-semibold'>Distance (/5km) - P{car.distancePayment}.00</p>
                        <p className='font-semibold'>Hourly - P{car.hourlyPayment}.00</p>
                        <p className='font-semibold'>Flat rate - {car.flatPayment}.00</p>
                            <button className='bg-slate-600 text-emerald-50 btn sm:max-w-xs md:text-lg md:w-96'
                                    disabled={!isLoggedIn}
                                    onClick={() => {                                                      
                                                     setProperties(car) 
                                                     navigate('/rentconfirm')
                                                    }}
                                                    >RENT
                            </button>
                    </div>
                )
            })}
        </>
    )
}