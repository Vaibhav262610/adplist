"use client"

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'

const Header = () => {

    const [active, setActive] = useState<"mentor" | "mentee">("mentee");


  return (
    <div className='flex flex-col justify-center py-32 '>
            <div className='flex font-semibold gap-6 pb-12 justify-center items-center '>
        <h2
          onClick={() => setActive("mentee")}
          className={`cursor-pointer ${
            active === "mentee"
              ? "border-b-3 border-[#077e7e] text-[#077e7e]"
              : "text-black  border-b-3 border-white"
          }`}
        >
          Mentee
        </h2>
               <h2
          onClick={() => setActive("mentor")}
          className={`cursor-pointer ${
            active === "mentor"
              ? "border-b-3 border-[#077e7e] text-[#077e7e]"
              : "text-black border-b-3 border-white"
          }`}
        >
          Mentor
        </h2>

            </div>
            {active === "mentee" ? 
            <div className='flex flex-col gap-10 justify-center items-center '>
                <h1 className='text-6xl font-bold text-center'>
                    Reach your goals faster <br/> with expert mentors
                </h1>
                <h2 className='text-xl text-center'>
                    Accelerate your professional growth with 1:1 expert <br/> guidance of <span className='font-bold'> 35,570+</span> mentors in our community.
                </h2>
                <Link href={'/explore'}>
                    <div className='cursor-pointer'>
                            <Input className='cursor-pointer' placeholder='What do you want to get better at?' />
                    </div>
                </Link>
            </div>
            :
            <div className='flex flex-col gap-10 justify-center items-center '>
                <h1 className='text-6xl font-bold text-center'>
                   Your next chapter, made<br/> possible by mentoring
                </h1>
                <h2 className='text-xl text-center'>
                    Build confidence as a leader, grow your<br/> network, and define your legacy.
                </h2>
                <div className=''>
                    <Button variant={'header'}>Become a Mentor</Button>
                </div>
            </div>
            }
    </div>
  )
}

export default Header