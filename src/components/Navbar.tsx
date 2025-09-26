import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className='px-5 border-b border-black py-3 flex items-center justify-between text-white'>
        <div className='text-black text-3xl font-bold uppercase'>
            <h1>Logo</h1>
        </div>
        <div className='flex gap-4 '>
            <Button className='font-bold'>Log in</Button>
            <Button className='font-bold' variant={'default2'}>Get started today</Button>
        </div>
    </div>
  )
}

export default Navbar