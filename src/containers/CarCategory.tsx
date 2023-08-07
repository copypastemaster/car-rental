import CarCategoryComp from '../components/CarCategoryComp';

export default function CarCategory() {
  return (
    <div className='flex flex-col gap-10 md:mx-8'>
      <h1 className="text-center text-3xl sm:text-5xl mt-10 md:text-left">Car Category</h1>
      <div className='flex flex-col gap-5 md:flex-row'>
        <CarCategoryComp image='porsche' brand='Porsche'/>
        <CarCategoryComp image='mercedes' brand='Mercedes-Benz'/>
        <CarCategoryComp image='bmw' brand='BMW'/>
        <CarCategoryComp image='audi' brand='Audi'/>
      </div>
      
    </div>

  )
}
