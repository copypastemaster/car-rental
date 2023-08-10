import ServicesHeader from "../components/ServicesHeader"
import ServicesType from "../components/ServicesType"

export default function Services() {
  return (
    <div className='' id='services'>
        <ServicesHeader/>
        <h1 className='fonts mt-10 text-center'>We offer</h1>
        <ServicesType />
    </div>
  )
}
