import { useState } from "react"
import { audi } from "../objects/audi"
import { mercedes } from "../objects/mercedes"
import { bmw } from "../objects/bmw"
import { porsche } from "../objects/porsche"
import  CarMap from '../components/CarMap'


export default function CarFleetDisplay() {

    const [display, setDisplay] = useState(mercedes);
    

  return (
    <>
           <div className='relative top-5 w-100 left-5 bg-slate-100 border flex flex-col text-center justify-evenly
                            md:top-20 md:max-w-4xl md:relative md:flex-row md:flex-wrap
                            lg:ml-16 
                            xl:ml-52 
                            2xl:ml-96 2xl:left-66'>
                <div className='hover:bg-cyan-400 cursor-pointer'>
                    <h1 className='text-lg md:text-2xl font-thin' 
                    onClick={() => {setDisplay(mercedes)}}>MERCEDES
                    </h1>
                </div>            
                
                <div className='hover:bg-cyan-400 cursor-pointer'> 
                    <h1 className=' text-lg md:text-2xl font-thin'
                    onClick={() => {setDisplay(audi)}}>AUDI
                    </h1>
                </div>
                
                <div className='hover:bg-cyan-400 cursor-pointer'> 
                    <h1 className='text-lg md:text-2xl font-thin' 
                    onClick={() => {setDisplay(bmw)}}>BMW
                    </h1>
                </div>
                
                <div className='hover:bg-cyan-400 cursor-pointer'> 
                    <h1 className='text-lg md:text-2xl font-thin'
                    onClick={() => {setDisplay(porsche)}}>PORSCHE
                    </h1>
                </div>
                
            </div>

        <div className='flex flex-wrap gap-5 mt-10 mx-7 md:mt-44 md:mx-20'> 
            <CarMap object={display}/>
        </div>
    </>
  )
}








{/* <div className='fixed flex flex-col w-100 text-center md:flex-row'>
            <div className='hover:bg-cyan-400 border flex gap-6 md:px-10 text-xs'>
                <h1>MERCEDES</h1>
                <Avatar name="Mercedes logo" src={mercedesLogo}/>
            </div>
            <div className='hover:bg-cyan-400 border flex gap-6 md:px-10 text-xs'>
                <h1>AUDI</h1>
                <Avatar name="Mercedes logo" src={audiLogo}/>
            </div>
            <div className='hover:bg-cyan-400 border flex gap-6 md:px-10 text-xs'>
                <h1>BMW</h1>
                <Avatar name="Mercedes logo" src={bmwLogo}/>
            </div>
            <div className='hover:bg-cyan-400 border flex gap-6 md:px-10 text-xs'>
                <h1>PORSCHE</h1>
                <Avatar name="Mercedes logo" src={porscheLogo}/>
            </div>
       </div> */}