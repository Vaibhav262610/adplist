'use client'

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaRegBell } from 'react-icons/fa6'
import { MdOutlineDateRange } from 'react-icons/md'
import { useAuth } from '@/context/AuthContext'

const Navbar = () => {
  const { session } = useAuth()

  return (
    <div className="px-5 z-9 fixed border-b bg-white w-full border-black py-3 flex items-center justify-between">
      <Link href={'/'}>
        <div className="text-black cursor-pointer text-3xl font-bold uppercase">
          <h1>CONNEX</h1>
        </div>
      </Link>
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
