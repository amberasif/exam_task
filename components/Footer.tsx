import React from 'react'
import { Button } from './ui/button'
import { ArrowBigRight } from 'lucide-react'


const Footer = () => {
  return (
    <div className='mt-10 container flex items-center justify-end' >
            <Button className='bg-white text-black w-32  px-4 py-8 text-xl'>NEXT <span className='text-purple-600  ml-2 '><ArrowBigRight/></span></Button>
        

    </div>
  )
}

export default Footer
