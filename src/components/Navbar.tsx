'use client'

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaRegBell } from 'react-icons/fa6'
import { MdOutlineDateRange } from 'react-icons/md'
import { useAuth } from '@/context/AuthContext'
import { Input } from './ui/input'
import { CiSearch } from 'react-icons/ci'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from './ui/select'
const Navbar = () => {
    const selectValues = [
     "All",
     "Motivation",
     "Tools",
     "Skills",
     "Leadership",
     "Mentorship",
     "Job search",
     "Career advice",
     "Expertise",
    ]
  const { session } = useAuth()

  return (
    <div className="px-5 z-9 fixed border-b bg-white w-full border-black py-3 flex items-center justify-between">
      <Link href={'/'}>
        <div className="text-black cursor-pointer text-3xl font-bold uppercase">
          <h1>CONNEX</h1>
        </div>
      </Link>
      {
        !session ? null :
        <div className='flex gap-3 items-center justify-center'>
            <div className='flex ml-32 gap-5 bg-gray-100 cursor-pointer rounded-lg'>
            <Select>
                <SelectTrigger className="text-md py-7 cursor-pointer w-[150px]">
                    <SelectValue className='' placeholder="Motivation" />
                </SelectTrigger>
                <SelectContent>
                    <div className='flex flex-col p-4'>
                        <div className="flex mb-4 text-3xl items-center  rounded-md text-black px-3 py-0.3 border border-black/40 shadow-sm ">
                            <CiSearch  className='text-lg'/> 
                            <input
                                placeholder='Search motivation'
                                data-slot="input"
                                className=
                                " placeholder:text-muted-foreground h-9 w-[20rem] min-w-0 rounded-md -transparent px-4 py-0.5 text-2xl  outline-none file:inline-flex file:h-7  file:text-xl file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base" />
                        </div>
                        {selectValues.map((item) => (
                            <SelectItem value={item} key={item}>{item}</SelectItem>
                        ))
                    }
                </div>
                </SelectContent>
            </Select>
        </div>
            <div className="flex text-3xl items-center border border-gray-200  rounded-md text-black px-3  ">
                <CiSearch  className='text-[#077e7e]'/> 
                <input
                type='text'
                placeholder='Search Mentors'
                data-slot="input"
                className=
                " placeholder:text-muted-foreground h-3 w-[18rem] min-w-0 rounded-md -transparent px-4 py-7 text-2xl  outline-none file:inline-flex file:h-7  file:text-xl file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base" />
            </div>
        </div>
      }
      <div className="flex gap-4 items-center justify-center">
        {!session ? (
          <>
            <Link href="/login">
              <Button className="font-bold">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button className="font-bold" variant={'default2'}>
                Get started today
              </Button>
            </Link>
          </>
        ) : (
          <div className="flex gap-6 items-center">
            <FaRegBell className="text-2xl text-black cursor-pointer rounded-full" />
            <Button
              className="font-bold flex justify-center items-center gap-3"
              variant={'book'}
            >
              <MdOutlineDateRange className="text-2xl" /> Book Session
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
