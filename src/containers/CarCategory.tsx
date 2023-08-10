import CarCategoryComp from '../components/CarCategoryComp';

export default function CarCategory() {
  return (
    <div className='flex flex-col gap-10 md:mx-8 2xl:mx-20 mt-10'>
      <h1 className="fonts text-center text-4xl sm:text-5xl mt-10 md:text-left">Car Category</h1>
      <div className='flex flex-col gap-5 md:flex-row'>
        <CarCategoryComp image='bg-porsche' brand='Porsche'/>
        <CarCategoryComp image='bg-mercedes' brand='Mercedes-Benz'/>
        <CarCategoryComp image='bg-bmw' brand='BMW'/>
        <CarCategoryComp image='bg-audi' brand='Audi'/>
      </div>      
    </div>
  )
}
