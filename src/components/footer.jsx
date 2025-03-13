import { ArrowUp, MoveUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='w-full flex  justify-between px-[100px] py-[50px] '>
<div className='w-fit flex gap-[75px]'>
    <span className='text-white poppins-medium hover:underline hover:text-orange-300'>
        Instagram
    </span>
    <span className='text-white poppins-medium hover:underline hover:text-orange-300'>
        Facebook
    </span>
    <span className='text-white poppins-medium hover:underline hover:text-orange-300'>
        Linktree
    </span>
</div>
<div className='w-fit flex text-white font-semibold gap-4'>
SCROLL TO TOP
<ArrowUp color='white' strokeWidth={2} /> 
</div>
    </div>
    
    </>
  )
}

export default Footer