import { WiDirectionUpRight } from 'react-icons/wi'
import { audi } from "../objects/audi"
import { mercedes } from "../objects/mercedes"
import { bmw } from "../objects/bmw"
import { porsche } from "../objects/porsche"
import { useDisplay } from '../store/display'
import { useNavigate } from 'react-router-dom'

type Props<S> = {
    brand: S,
    image: S,
}

export default function CarCategoryComp(props: Props<string>) {
  const { display, setBrand, setDisplay } = useDisplay();
  const navigate = useNavigate();

  const directDisplay = () => {
    setBrand(props.brand);


    switch(props.brand){
      case 'Mercedes-Benz':
        setDisplay(mercedes)
        break;
      
      case 'Porsche':
        setDisplay(porsche)
        break;

      case 'BMW':
        setDisplay(bmw)
        break;

      case 'Audi':
        setDisplay(audi)
        break;

      default:
        setDisplay(display);
    }

    navigate('/fleet')
  }

  return (
    <div className={`${props.image} bg-cover bg-center h-96 md:h-64 md:w-[14rem] grid grid-cols-9 grid-rows-4 gap-4 px-4
                    lg:w-96 lg:h-[30rem]`}>
        <h3 className='text-white font-bold text-2xl col-start-1 col-end-7 mt-5'>{props.brand}</h3>
        <button className='max-xs:col-start-7 col-start-8 row-start-4 max-xs:row-start-4 w-12 bg-slate-300 sm:col-start-9 sm:row-start-4 md:col-start-7 md:w-12 
        lg:w-10 lg:h-10 h-12 lg:col-start-8 lg:row-start-4 rounded-full'>
            <WiDirectionUpRight size={42} onClick={directDisplay}/>
        </button>
    </div>
  )
}
