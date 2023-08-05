import { allCarsCombined } from "../store/allCars"
import '../assets/nav.css'
import HeroOptions from "../components/HeroOptions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/zustStore"
import { useSearchEnabler } from "../store/searchEnabler";

import { 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure
 } from '@chakra-ui/react'



export default function HeroDisplay() {
  const { isEnabled } = useSearchEnabler();
  const { 
        setImg, 
        setModel,
        setEngineType,
        setAllowedNumberOfPassengers,
        setTransmission,
        setFullTank,
        setDescription,
        setDistancePayment,
        setFlatPayment,
        setHourlyPayment  
    } = useStore()
  
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const random = Math.floor(Math.random() * allCarsCombined.length-1);

  const date = new Date();
  const getDay = String(date.getDate()).padStart(2, '0');
  const getMonth = String(date.getMonth() + 1).padStart(2, '0');
  const getYear = date.getFullYear();
  const currentDate = getMonth + '/' + getDay + '/' + getYear;

  const [unit, setUnit] = useState('');
  const [unitImg, setUnitImg] = useState('');


  const search = () => {
    setUnit(allCarsCombined[random].model);
    setUnitImg(allCarsCombined[random].img);
    setImg(allCarsCombined[random].img);
    setModel(allCarsCombined[random].model);
    setEngineType(allCarsCombined[random].engineType);
    setAllowedNumberOfPassengers(allCarsCombined[random].allowedNumberOfPassengers);
    setTransmission(allCarsCombined[random].transmission);
    setFullTank(allCarsCombined[random].fullTank);
    setDescription(allCarsCombined[random].description);
    setDistancePayment(allCarsCombined[random].distancePayment);
    setFlatPayment(allCarsCombined[random].flatPayment);
    setHourlyPayment(allCarsCombined[random].hourlyPayment);
    onOpen()
  }
  
  return (
    <div className='main flex place-items-end bg-black bg-cover bg-center p-5 md:px-24 bg-img3 my-1 sm:my-0'>
            <div className='flex flex-col gap-4 md:gap-10'>
                <section className='heading flex flex-col md:flex-row'>
                    <h1 className='text-white text-sm max-w-lg font-bold sm:text-5xl'>PREMIUM CAR RENTAL</h1>
                    <p className='text-white text-xs md:text-sm md:max-w-xl pt-10 font-semibold 2xl:relative 2xl:top-32'>We want you  to have a stress-free rental experience so we can make it easy to rent a car -- by providing simple search tools, customer reviews and plenty of pick-up locations across the city.</p>
                </section>
                <section className='sub flex flex-wrap md:relative md:top-10'>
                    <div className='bg-white p-2 md:p-5 focus:bg-cyan-500'>Distance</div>
                    <p className='bg-slate-300 p-2 md:p-5 focus:bg-cyan-500'>Hourly</p>
                    <p className='bg-slate-500 p-2 md:p-5 focus:bg-cyan-500'>Flat Rate</p>
                </section>
                <section className='sub-one flex flex-wrap'>
                    <HeroOptions options="Pick up address" optionChild="Manila" secondOptionChild="Quezon City"/>
                    <HeroOptions options="Drop off address" optionChild="Manila" secondOptionChild="Bulacan"/>
                    <HeroOptions options="Pick up date" optionChild={currentDate} secondOptionChild=""/>
                    <HeroOptions options="Pick up time" optionChild="12:30 PM" secondOptionChild="11:30 AM"/>
                    <button className='bg-slate-600 p-2 md:p-5 hover:bg-slate-600 hover:cursor-pointer text-white' disabled={isEnabled} onClick={search}>Search</button>
                    
                </section>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>We found one!</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <h1 className='text-lg text-center'>{unit}</h1>
                            <img src={unitImg}/>
                        </ModalBody>
                        <ModalFooter>
                            <button className="bg-slate-600" onClick={() => {                                
                                navigate('/rentconfirm');
                            }}>View</button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div> 
    </div>
  )
}

