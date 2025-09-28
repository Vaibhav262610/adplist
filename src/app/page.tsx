"use client"

import Home from '@/components/Home'
import HomePage from '@/components/HomePage'
import Sidebar from '@/components/Sidebar'
import { useAuth } from '@/context/AuthContext'
import React from 'react'

const page = () => {
  const {session } = useAuth()

  return (
    <div>
      {!session ?
        <HomePage />
        :
        <>
          <div className=" fixed top-0 left-0 h-screen ">
            <Sidebar />
          </div>
          <Home />
        </>
      }
    </div>
  )
}

export default page