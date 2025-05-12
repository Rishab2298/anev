import { ArrowUp, MoveUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='fonk w-full flex md:flex-row flex-col items-center justify-between px-[100px] py-[50px] '>
<div className='w-fit justify-center flex gap-[75px]'>
    <a className='fonk text-white md:text-left text-center w-full poppins-medium hover:underline hover:text-orange-300' href="https://instagram.com/anevmedia">
        <span className='fonk uppercase'>Instagram</span>
    </a>
    
</div>
<div className='hidden w-fit md:flex text-white font-semibold gap-4'>
SCROLL TO TOP
<ArrowUp color='white' strokeWidth={2} /> 
</div>
    </div>
    
    </>
  )
}

export default Footer