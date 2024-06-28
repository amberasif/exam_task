"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { HeartIcon } from 'lucide-react'
import Image from 'next/image'
import Bin from "../public/Bin.svg"
import { GetEntry } from '@/actions/Taskaction'

// type Tasklist=[

//   id:        String,      
//   name:     String  ,    
//   isCompleted: Boolean,   
//   createdAt: Date ,   
//   updatedAt: Date, 
// ]
export const Display:React.FC = () => {
// const [entries, SetEntries]=useState<Tasklist[]>([]);

// useEffect(()=>{
//     const taskentries =async() =>{
//         try{
//         const taskentries =await 
//         GetEntry   
//         }
//     }
// })
    


    
  return (
    <div className='border-2 border-black rounded-xl flex w-3/4 items-center justify-between gap-4 mt-16 container  '>
        <div className='col-span-3'>

        <p className=''>Task1.........</p>
        </div>
        <div className='col-span-1 ml-96'>
        <Button className='bg-green-300 text-white w-60 col-span-1  px-4 py-8 text-xl flex '>Mark As Completed<span className='text-red-600 ml-2 '><HeartIcon/></span> </Button>
        </div>
        <div className='col-span-1'>
        <Image className='col-span-1' src={Bin} alt='Bin Image' width={20} height={20} ></Image>
        </div>

    </div>
  )
}
