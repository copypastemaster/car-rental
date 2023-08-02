import '../assets/hero.css'

export default function Hero() {
    
  return (
    <div>
        <div className='main flex place-items-end bg-black bg-cover bg-center p-5 md:px-24 bg-img3 my-1 sm:my-0'>
            <div className='flex flex-col gap-4 md:gap-10'>
                <section className='heading flex flex-col md:flex-row'>
                    <h1 className='text-white max-w-lg font-bold text-3xl sm:text-5xl'>PREMIUM CAR RENTAL</h1>
                    <p className='text-white md:max-w-xl pt-10 font-semibold 2xl:relative 2xl:top-32'>We want you  to have a stress-free rental experience so we can make it easy to rent a car -- by providing simple search tools, customer reviews and plenty of pick-up locations across the city.</p>
                </section>
                <section className='sub flex md:relative md:top-10'>
                    <div className='bg-white p-5 hover:bg-cyan-500 cursor-pointer focus:bg-cyan-500'>Distance</div>
                    <p className='bg-slate-300 p-5 hover:bg-cyan-500 cursor-pointer focus:bg-cyan-500'>Hourly</p>
                    <p className='bg-slate-500 p-5 hover:bg-cyan-500 cursor-pointer focus:bg-cyan-500'>Flat Rate</p>
                </section>
                <section className='sub-one flex flex-wrap'>
                    <p className='bg-white p-5 max-w-sm'>Pick Up Address</p>
                    <p className='bg-white p-5'>Drop Off Address</p>
                    <p className='bg-white p-5'>Pick Up Date</p>
                    <p className='bg-white p-5'>Pick Up Time</p>
                    <p className='bg-cyan-500 p-5'>Search</p>
                </section>
                
            </div> 
        </div>
    </div>
    
  )
}


