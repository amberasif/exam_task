import React from 'react'

const Board = () => {
  return (
    <div className='container grid grid-cols-3 gap-10 place-items-center justify-between mt-16 '>
        <div className='bg-blue-300 w-72 h-32 text-black rounded-2xl border-2 border-black flex flex-col justify-center items-center'>
        <p className='text-4xl font-mono '>TOTAL TASKS</p>
        <p className='text-6xl font-mono font-bold'>05</p>
        </div>

        <div className='bg-green-300 w-72 h-32 text-black rounded-2xl border-2 border-black flex flex-col justify-center items-center'>
        <p className='text-4xl font-mono '>COMPLETED</p>
        <p className='text-6xl font-mono font-bold'>03</p>
        </div>

        <div className='bg-orange-300 w-72 h-32 text-black rounded-2xl border-2 border-black flex flex-col justify-center items-center'>
        <p className='text-4xl font-mono '>PENDING</p>
        <p className='text-6xl font-mono font-bold'>02</p>
        </div>
      
    </div>
  )
}

export default Board
