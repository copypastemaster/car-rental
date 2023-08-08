import { audi } from "../objects/audi"
import { mercedes } from "../objects/mercedes"
import { bmw } from "../objects/bmw"
import { porsche } from "../objects/porsche"
import  CarMap from '../components/CarMap'
import '../assets/carmap.css'
import { useDisplay } from "../store/display"

export default function CarFleetDisplay() {

    const { display, setDisplay } = useDisplay()
    

  return (
    <>  
        
           
           <div className='brands relative top-24 flex flex-col md:flex-row justify-center gap-10'>
                <div className=' cursor-pointer hover:outlined-dash p-2'>
                    <h1 className='text-lg md:text-3xl font-thin hover:font-semibold focus:font-semibold' 
                    onClick={() => {setDisplay(mercedes)}}>MERCEDES
                    </h1>
                </div>            
                
                <div className='hover:font-bold cursor-pointer hover:outline-transparent p-2'> 
                    <h1 className=' text-lg md:text-3xl font-thin hover:font-semibold focus:font-semibold'
                    onClick={() => {setDisplay(audi)}}>AUDI
                    </h1>
                </div>
                
                <div className='hover:font-bold cursor-pointer hover:outline-transparent p-2'> 
                    <h1 className='text-lg md:text-3xl font-thin hover:font-semibold focus:font-semibold' 
                    onClick={() => {setDisplay(bmw)}}>BMW
                    </h1>
                </div>
                
                <div className='hover:font-bold cursor-pointer hover:outline-transparent p-2'> 
                    <h1 className='text-lg md:text-3xl font-thin hover:font-semibold focus:font-semibold'
                    onClick={() => {setDisplay(porsche)}}>PORSCHE
                    </h1>
                </div>
                
            </div>

        <div className='flex flex-wrap justify-center md:mx-10 lg:mx-14 xl:mx-20 2xl:mx-24 gap-5 mt-12 md:mt-44 md:gap-5'> 
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