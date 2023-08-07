import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { useLoggedIn } from '../store/isLoggedIn'
import { Avatar } from '@chakra-ui/react';

export default function Login() {
    const { isLoggedIn, setIsLoggedIn } = useLoggedIn();

    const clicked = () => {
        setIsLoggedIn(!isLoggedIn);
    }

  return (

    <>
    <Dropdown.Root>
            <Dropdown.Trigger asChild>
                <button className='butn text-white bg-slate-600'
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
                <Avatar name="User" hidden={!isLoggedIn} size='sm' />
            </Dropdown.Trigger>
            <Dropdown.Portal>
                <Dropdown.Content className='DropdownMenuContent' sideOffset={5}>
                    <Dropdown.Item className='item' onClick={clicked}>Logout</Dropdown.Item>
                </Dropdown.Content>
            </Dropdown.Portal>            
        </Dropdown.Root>
    </>
    
  )
}
