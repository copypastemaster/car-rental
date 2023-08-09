import Hero from './Hero'
import CarCategory from './CarCategory'
import Trend from './Trend'
import Services from './Services'
import Footer from './Footer'


export default function LandingPage() {
  return (
    <div className='flex flex-col max-xs:min-w-fit'>
      <Hero />
      <CarCategory />
      <Trend />
      <Services />
      <Footer />
    </div>
  )
}
