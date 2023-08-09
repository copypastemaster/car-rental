import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <div className='flex flex-col text-black text-center p-2 md:text-left md:flex-row md:justify-around sm:px-20 sm:pt-10 sm:pb-10 bg-slate-300'>
        <FirstPart />
        <SecondPart />
        <ThirdPart />
        <Contacts />
      </div>
      <FourthPart />
    </div>
   
  )
}

function FirstPart () {
  return (
    <div className='flex flex-col'>
      <h1 className='text-4xl font-semibold'>primo</h1>
      <p className='mt-10'>Subscribe to the newsletter</p>
      <input type="text" className="p-2 mt-2 rounded-full" placeholder="Email..."/>
    </div>
  )
}

function SecondPart () {
  return (
    <div className='flex flex-col'>
      <h3 className='text-xl font-semibold mt-14 md:mt-2'>Top cities</h3>
      <p className='mt-3'>Manila</p>
      <p>Quezon City</p>
      <p>Taguig</p>
      <p>Marikina</p>
      <p>Pasig</p>
    </div>
  )
}

function ThirdPart () {
  return (
    <div className='flex flex-col'>
      <h3 className='text-xl font-semibold mt-14 md:mt-2'>Explore</h3>
      <p className='mt-3'>
        <Link to='/' onClick={() => document.getElementById('contacts')?.scrollIntoView({behavior: 'smooth'})} className='font-normal'>Airport transfers</Link>
      </p>
      <p>
        <Link to="/" onClick={() => document.getElementById('contacts')?.scrollIntoView({behavior: 'smooth'})} className='font-normal'>
          Wedding events
        </Link>
      </p>
      <p>
        <Link to="/" onClick={() => document.getElementById('contacts')?.scrollIntoView({behavior: 'smooth'})} className='font-normal'>
          Business meetings
        </Link>
      </p>
      <p>
        <Link to="/" onClick={() => document.getElementById('contacts')?.scrollIntoView({behavior: 'smooth'})} className='font-normal'>
          Date nights
        </Link>
      </p>
    </div>
  )
}

function FourthPart () {
  return (
    <div className='bg-slate-200 text-black place-items-center justify-center gap-20 flex pt-2 sm:px-20 sm:pt-5 p-2'>
      <p className='text-2xl'>&copy; Enoch, 2023</p>
      <div className='place-items-center flex gap-10'>
      <a href='https://github.com/copypastemaster'> <AiFillGithub size={30}/> </a>
      <a href='https://www.facebook.com/Enoch.Binas/'> <AiOutlineFacebook size={30}/> </a>
      <a href='https://www.instagram.com/_enoch.b/'> <AiOutlineInstagram size={30}/> </a>
      </div>
      
    </div>
  )
}

function Contacts () {
  return (
    <div className='flex flex-col' id="contacts">
      <h3 className='text-xl font-semibold mt-14 md:mt-2'>Contacts</h3>
      <p className='mt-3'>+639685932129</p>
      <p>enoch.binas@gmail.com</p>
    </div>
  )
}