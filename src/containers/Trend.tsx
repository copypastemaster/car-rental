import TrendComp from "../components/TrendComp"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import { Audi, audi } from "../objects/audi"
import { bmw } from "../objects/bmw"
import { porsche } from "../objects/porsche"
import { mercedes } from "../objects/mercedes"
import porscha from '../assets/porsche/porsche-911.avif'
import audiii from '../assets/audi/rs-7.avif'
import bmwww from '../assets/bmw/bmw-xm.avif'
import mercedesss from '../assets/mercedes/sl-final.avif'

export default function Trend() {
  const navigate = useNavigate();

  const porschee = porsche.find((e: Audi) => e.model == '2023 Porsche 911')
  const audii = audi.find((e) => e.model == '2023 Audi RS 7') 
  const bmww = bmw.find((e) => e.model == '2023 BMW XM')
  const mercedess = mercedes.find((e) => e.model == '2023 Mercedes-Benz SL')

  

  return (
    <div className='bg-slate-200 max-xs:min-w-fit pt-10 pb-20 mt-24'>
        <div className='flex flex-col mx-2 md:mx-8 2xl:mx-20'>

            <div className='flex flex-wrap justify-between'>
                <h1 className='fonts xs:text-center sm:text-left text-3xl md:text-5xl'>Trending Vehicles</h1>
                <button className='bg-slate-600 text-white md:w-32 md:h-8 flex w-28 gap-6 mt-3 md:gap-4 md:px-3 md:pt-1
                                  flex-wrap'
                        onClick={() => navigate('/fleet')}>
                     <span>View all</span>
                     <AiOutlineArrowRight size={21}/>
                </button>
            </div>
            
            <div className="md:flex flex-row 2xl:justify-evenly" id="trend">
                <TrendComp model={porschee?.model} pricePerDistance={porschee?.distancePayment} bgImage={porscha} objek={porschee}/>
                <TrendComp model={audii?.model} pricePerDistance={audii?.distancePayment}
                bgImage={audiii} objek={audii}/>
                <TrendComp model={bmww?.model} pricePerDistance={bmww?.distancePayment} 
                bgImage={bmwww} objek={bmww}/>
                <TrendComp model={mercedess?.model} pricePerDistance={mercedess?.distancePayment} bgImage={mercedesss} objek={mercedess}/>
            </div>

             
           
        </div>
    </div>
  )
}
