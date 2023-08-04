import { useState } from "react"
import { Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { usePaymentStore } from "../store/paymentStore";

export default function TypeOfRent() {
  const [typeValue, setTypeValue] = useState('1');
  const { setPayment } = usePaymentStore()

  

  return (
    <RadioGroup onChange={setTypeValue} value={typeValue} className='mt-5'>
        <Stack direction='column' spacing='2.5'>
            <Radio value='1' onChange={() => setPayment(1)}>Distance</Radio>
            <Radio value='2' onChange={() => setPayment(2)}>Hourly</Radio>
            <Radio value='3' onChange={() => setPayment(3)}>Flat rate</Radio>
        </Stack>
    </RadioGroup>
  )
}

export function ModeOfPayment() {
  const [mop, setMop] = useState('1');

  return (
    <RadioGroup onChange={setMop} value={mop} className="mt-5">
        <Stack direction='column' spacing='2.5'>
            <Radio value='1'>Card</Radio>
            <Radio value='2' title='eg. Gcash, Paymaya'>E-wallet</Radio>
            <Radio value='3'>Cash</Radio>
        </Stack>
    </RadioGroup>
  )
}
