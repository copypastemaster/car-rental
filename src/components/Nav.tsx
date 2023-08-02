import '../assets/nav.css'
import { useState } from 'react'
import { Avatar } from '@chakra-ui/react'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'

export default function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const clicked = () => {
        setIsLoggedIn(!isLoggedIn);
    }

  return (
    <>
    <div className='hidden nav fixed md:flex md:justify-between md:items-center border         rounded-full     bg-white p-1 pl-5 pr-3
                    md:mt-7 md:mx-11 xl:mx-24'>
        <h1 className='text-4xl font-semibold'>primo.</h1>
        <section className='flex gap-12'>
            <p> <Link to="/" className='hover:text-cyan-500'>Home</Link></p>
            <p><Link to="/" className='hover:text-cyan-500'>Services</Link></p>
            <p><Link to="/fleet" className='hover:text-cyan-500'>Fleet</Link></p>
            <p><Link to="/" className='hover:text-cyan-500'>FAQ</Link></p>
            <p><Link to="/" className='hover:text-cyan-500'>Contact</Link></p>
        </section>
        <Dropdown.Root>
            <Dropdown.Trigger asChild>
                <button className='butn text-white bg-cyan-500'
                        aria-label="login"
                        hidden={isLoggedIn}>
                    Login
                </button> 
            </Dropdown.Trigger>
            <Dropdown.Portal>
                <Dropdown.Content className='DropdownMenuContent' sideOffset={5}>
                    <Dropdown.Item className='item' onClick={clicked}>Login as dummy acc</Dropdown.Item>
                </Dropdown.Content>
            </Dropdown.Portal>            
        </Dropdown.Root>

        <Dropdown.Root>
            <Dropdown.Trigger asChild>
                <Avatar name="User" hidden={!isLoggedIn}/>
            </Dropdown.Trigger>
            <Dropdown.Portal>
                <Dropdown.Content className='DropdownMenuContent' sideOffset={5}>
                    <Dropdown.Item className='item' onClick={clicked}>Logout</Dropdown.Item>
                </Dropdown.Content>
            </Dropdown.Portal>            
        </Dropdown.Root>
        
    </div>

    <div className='px-5 flex justify-between md:hidden'>
        <h1 className='text-black text-2xl sm:text-4xl'>primo.</h1>
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
                <Dropdown.Content className='DropdownMenuContent' sideOffset={7}>
                    <Dropdown.Item className='item bg-white text-left text-xl hover:text-cyan-500'>Home</Dropdown.Item>
                    <Dropdown.Item className='item bg-white text-left text-xl hover:text-cyan-500'>Services</Dropdown.Item>
                    <Dropdown.Item className='item bg-white text-left text-xl hover:text-cyan-500'>
                        <Link to="/fleet">Fleet</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className='item bg-white text-left text-xl hover:text-cyan-500'>FAQ</Dropdown.Item>
                    <Dropdown.Item className='item bg-white text-left text-xl hover:text-cyan-500'>Contacts</Dropdown.Item>
                </Dropdown.Content>
            </Dropdown.Portal>            
        </Dropdown.Root>
        </div>
    </div>
    </>
    
  )
}


