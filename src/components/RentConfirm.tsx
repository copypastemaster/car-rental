import React from 'react'
import { useStore } from '../store/zustStore'

export default function RentConfirm() {

    const {img, model, description, flatPayment} = useStore()
  return (
    <div>
        <img src={img}/>
        <h1>{model}</h1>
        <p>{description}</p>
        <p>{flatPayment}</p>
    </div>
  )
}
