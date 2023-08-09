import '../assets/nav.css'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'
import Login from './Login'

export default function Nav() {
    
   
  return (
    <>
    <div className='hidden nav z-50 fixed md:flex md:justify-between md:items-center border        rounded-full     bg-white p-1 pl-5 pr-3
                    md:mt-7 md:mx-11 xl:mx-20'>
        <h1 className='text-4xl font-semibold'>primo.</h1>
        <section className='flex gap-12'>
            <p> <Link to="/" className='hover:text-slate-600' onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})}>Home</Link></p>
            <p><Link to="/" className='hover:text-slate-600' onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>Services</Link></p>
            <p><Link to="/fleet" className='hover:text-slate-600'>Fleet</Link></p>
            <p><Link to="/" className='hover:text-slate-600'>FAQ</Link></p>
            <p><Link to="/" className='hover:text-slate-600'>Contact</Link></p>
        </section>
        <Login />
        
    </div>

    <div className='mobilenav fixed z-50 bg-gray-200 md:px-5 flex justify-between max-w-3xl md:hidden'>
        <h1 className='text-black text-3xl sm:text-4xl'>primo.</h1>
        <div className='relative top-2'>
        <Dropdown.Root>
            <Dropdown.Trigger asChild>
            <svg viewBox="0 0 100 80" width="40" height="20" className='relative top-1'>
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
            </svg>                
            </Dropdown.Trigger>
            <Dropdown.Portal>
                <Dropdown.Content className='DropdownMenuContent' sideOffset={4}>
                    <Dropdown.Item className='item bg-white text-left text-xl flex flex-col hover:text-slate-600'>
                        <Login />
                        <Link to="/" className='mt-5'>
                            Home
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className='item bg-white text-left text-xl hover:text-slate-600'>Services</Dropdown.Item>
                    <Dropdown.Item className='item bg-white text-left text-xl hover:text-slate-600'>
                        <Link to="/fleet">Fleet</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className='item bg-white text-left text-xl hover:text-slate-600'>FAQ</Dropdown.Item>
                    <Dropdown.Item className='item bg-white text-left text-xl hover:text-slate-600'>Contacts</Dropdown.Item>
                </Dropdown.Content>
            </Dropdown.Portal>            
        </Dropdown.Root>
        </div>
    </div>
    </>
    
  )
}


