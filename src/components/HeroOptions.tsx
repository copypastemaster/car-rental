import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { useEffect, useState } from 'react';
import { Divider } from '@chakra-ui/react';
import { useSearchEnabler } from '../store/searchEnabler';

interface OptionsProps {
    options: string;
    optionChild: string;
    secondOptionChild: string;
}

export default function HeroOptions(props: OptionsProps) {
  const { isEnabled, setIsEnabled } = useSearchEnabler();
  const [childValue, setChildValue] = useState('');

  useEffect(() => {
    childValue == '' ? isEnabled : setIsEnabled(false);
  }, [childValue])

  return (
    <Dropdown.Root>
        <Dropdown.Trigger asChild>
             <p className='bg-white p-2 md:p-5 hover:bg-slate-600  hover:cursor-pointer flex flex-col'>
                {props.options}
                <span>{childValue}</span>
             </p>                   
        </Dropdown.Trigger>
        <Dropdown.Portal>
             <Dropdown.Content className='DropdownMenuContent' sideOffset={5}>
                <Dropdown.Item className='item' onClick={() => {setChildValue(props.optionChild)}}>{props.optionChild}</Dropdown.Item>
                <Divider colorScheme="red"/>
                <Dropdown.Item className='item' onClick={() => {setChildValue(props.secondOptionChild)}}>{props.secondOptionChild}</Dropdown.Item>
             </Dropdown.Content>
        </Dropdown.Portal>            
    </Dropdown.Root>
  )
}
