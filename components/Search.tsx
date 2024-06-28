"use client";
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { PlusIcon } from 'lucide-react'
import { CreateEntry } from '@/actions/Taskaction'

export const Search : React.FC = () => {
const [name, setName] =useState('');
const completed =false;

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
    try{
        const result = await
        CreateEntry(name,completed);
        console.log("saved data",result)

    }
    catch (error){
        console.error("not saved", error);
    }
};

  return (
    <form onSubmit={handleSubmit} className='container grid grid-cols-3 gap-4  mt-16 mr-24 '>
        <div className='col-span-2 w-full'>
        <Input 
        type="text" 
        placeholder="Enter Task Here..."
        className='border-black border-2 py-8' 
        value={name}
        onChange={(e)=>
            setName(e.target.value)
        }
        />

        </div>
        <div className='col-span-1'>
            <Button className='bg-black text-white w-32  px-4 py-8 text-xl'>Add Task <span className='text-purple-600  ml-2'><PlusIcon/></span></Button>

        </div>
        

    </form>
  )
}
