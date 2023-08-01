import React from 'react'
import '../assets/nav.css'
import { useState } from 'react'
import {Avatar} from '@chakra-ui/react'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

export default function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const clicked = () => {
        setIsLoggedIn(!isLoggedIn);
    }

  return (
    <div className='nav fixed flex justify-between items-center border rounded-full bg-white p-1 pl-5 pr-3
                    md:mt-7 md:left-24'>
        <h1 className='text-4xl font-semibold'>primo.</h1>
        <section className='flex gap-12'>
            <p>Home</p>
            <p>Services</p>
            <p>Fleet</p>
            <p>FAQ</p>
            <p>Contact</p>
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
  )
}


