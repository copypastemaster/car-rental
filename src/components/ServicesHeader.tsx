import { RiCellphoneLine } from 'react-icons/ri'
import { GoGear } from 'react-icons/go'
import { TbCurrencyPeso } from 'react-icons/tb'
import { GiCutDiamond } from 'react-icons/gi'
import booking from '../assets/servicesicons/booking (1).png';
import premium from '../assets/servicesicons/best-seller.png';
import timer from '../assets/servicesicons/stopwatch.png';
import money from '../assets/servicesicons/money.png';

export default function ServicesHeader() {
  return (
    <div className='flex flex-col place-items-center md:flex-row md:flex-wrap md:justify-evenly md:gap-10 bg-black'>
        <div className='flex gap-24 md:gap-5 pt-20 md:pb-20'>
            {/* <RiCellphoneLine size={60}/> */}
            <img src={booking} className='h-24'/>
            <h2 className='text-white max-w-[120px]  text-xl md:text-2xl'>Seamless booking</h2>
        </div>

        <div className='flex gap-24 md:gap-5 pt-20 md:pb-20'>
            {/* <GiCutDiamond size={60}/> */}
            <img src={premium} className='h-24'/>
            <h2 className='text-white max-w-[120px] 2xl:max-w-[200px] text-xl md:text-2xl'>Premium privileges for regular customers</h2>
        </div>

        <div className='flex gap-24 md:gap-5 pt-20 md:pb-20'>
            {/* <GoGear size={60}/> */}
            <img src={timer} className='h-24'/>
            <h2 className='max-w-[120px] 2xl:max-w-[150px]  text-xl md:text-2xl text-white'>Cancel booking immediately</h2>
        </div>

        <div className='flex gap-24 md:gap-5 pt-20 pb-20'>
            {/* <TbCurrencyPeso size={60}/> */}
            <img src={money} className='h-24'/>
            <h2 className='md:text-2xl max-w-[120px]  text-xl  text-white'>No recharging fees</h2>
        </div>
    </div>
  )
}
