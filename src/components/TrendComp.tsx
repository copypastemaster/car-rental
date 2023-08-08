import { useStore } from "../store/zustStore"
import { Audi } from "../objects/audi"
import { useNavigate } from "react-router-dom"

interface Props<S, T, O> {
    model: S | undefined
    pricePerDistance: T | undefined
    bgImage: S | undefined
    objek: O | undefined
}

export default function TrendComp(props: Props<string, number, Audi>) {

    const navigate = useNavigate();

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

    const setProperties = (obj: Audi | undefined) => {
            setImg(obj?.img as string);
            setModel(obj?.model as string);
            setEngineType(obj?.engineType as string);
            setAllowedNumberOfPassengers(obj?.allowedNumberOfPassengers as number);
            setTransmission(obj?.transmission as string);
            setFullTank(obj?.fullTank as boolean);
            setDescription(obj?.description as string);
            setDistancePayment(obj?.distancePayment as number);
            setFlatPayment(obj?.flatPayment as number);
            setHourlyPayment(obj?.hourlyPayment as number);

            navigate('/rentconfirm')
        }
    
    return (
    <div className={`bg-white flex flex-col justify-between p-2 h-72 w-100 bg-cover bg-center mt-10 border xs:h-96 sm:h-[27rem] max-xs:min-w-fit
                 border-slate-400 md:h-[20rem] max-xs:w-64 max-xs:h-96 hover:bg-slate-300`}>
        <h2>{props.model}</h2>
        <img src={props.bgImage} />
        <div className='flex justify-between'>
            <p className='text-black font-normal'>{`P${props.pricePerDistance}.00 /5 km`}</p>
            <button className='bg-slate-600 text-white p-1 md:p-2' onClick={() => setProperties(props.objek)}>Rent now</button>
        </div>
    </div>
  )
}
