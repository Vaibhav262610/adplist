import React from 'react'
import { CiMail } from 'react-icons/ci'
import { Button } from './ui/button'

const Contact = () => {
  return (
    <div className='h-[70vh] flex flex-col justify-center items-center gap-10'>
        <h1 className='text-7xl font-bold text-center'>Get started for free in 1<br/> minute or less</h1>
        <h2 className='text-center text-lg leading-9 '>We want to help you build an epic career with expert mentors.<br/>From junior to leadership, we are here to grow with you on this journey.</h2>
        <div className="flex text-3xl items-center  rounded-md text-black px-3 py-2 shadow-2xl ">
              <CiMail  /> 
              <input
              placeholder='Enter your email'
              data-slot="input"
              className=
                " placeholder:text-muted-foreground    h-9 w-[18rem] min-w-0 rounded-md -transparent px-4 py-7 text-2xl  outline-none file:inline-flex file:h-7  file:text-xl file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base" / >
                <Button variant={'contact'}>Join for free</Button>
            </div>
    </div>
  )
}

export default Contact