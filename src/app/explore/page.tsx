"use client"

import Explore from '@/components/Explore';
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'

const page = () => {
    
  return (
    <div className='flex items-center'>      
        <Sidebar />
        <Explore />
        
    </div>
  )
}

export default page