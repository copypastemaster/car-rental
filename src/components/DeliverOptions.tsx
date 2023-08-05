import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import {useState} from 'react'
import { useDeliver } from "../store/deliverOptionsStore";

export default function DeliverOptions() {
  const [ typeValue, setTypeValue ] = useState('1');
  const { setIsDeliver } = useDeliver()

  return (
    <RadioGroup onChange={setTypeValue} value={typeValue}>
        <Stack direction='column' spacing="2.5" className='mt-5'>
            <Radio value='1' onChange={() => {setIsDeliver(false)}}>Pick up</Radio>
            <Radio value='2' onChange={() => {setIsDeliver(true)}}>Deliver</Radio>
        </Stack>
    </RadioGroup>
  )
}
