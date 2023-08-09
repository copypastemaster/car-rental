import airport from '../assets/typeofservices/airport.avif';
import wedding from '../assets/typeofservices/wedding.avif';
import date from '../assets/typeofservices/date.avif';
import business from '../assets/typeofservices/business.avif'

type Props<T> = {
    image: T,
    heading: T,
    paragraph: T,
}

export default function ServicesType() {
  return (
    <div className='flex flex-col lg:max-w-fit sm:gap-14 mt-20 md:mx-20'>

        <div className='xl:flex lg:justify-between md:gap-22 xl:gap-22'>
            <ServiceItems image={airport} heading='Airport transfers' paragraph='With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze.'/>

            <ServiceItems image={wedding} heading='Wedding events' paragraph='Our friendly and attentive service combined with thorough attention to detail ensure you can truly relax and enjoy your special day.'/>
        </div>

        <div className='xl:flex lg:justify-between md:gap-22 xl:gap-22'>
            <ServiceItems image={business} heading='Business meetings' paragraph='Focus on your meeting with your partners, forget about the road and the car, which will distract your thoughts.'/>
            
            <ServiceItems image={date} heading='Date nights' paragraph='Impress your partner by showing up on one of our premium cars. Chocolate and roses will be provided so your loved one will feel special.'/>
        </div>

    </div>
  )
}

function ServiceItems (props: Props<string>) {
    return (
        <div className='flex p-2 flex-col md:gap-5 md:flex-row xl:bg-slate-100 md:p-5 md:rounded-md'>
            <img src={props.image} className='md:h-64 lg:rounded-md'/>
            <div className='my-5 flex flex-col gap-4'>
                <h3 className='text-3xl'>{props.heading}</h3>
                <p className='md:max-w-lg'>{props.paragraph}</p>
            </div>
        </div>
    )
}
