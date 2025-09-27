"use client"

import React, { useState } from 'react'
import { FaPencil, FaRegCompass } from 'react-icons/fa6'
import { GoHome } from 'react-icons/go'

const Sidebar = () => { 
    const [active, setActive] = useState<"explore" | "journal">("explore");
    
  return (
    <div className='bg-[#fafafa] text-xs px-8 h-screen w-fit'>
        <div className='flex flex-col gap-4 py-28'>
            <h1 className='flex flex-col cursor-pointer hover:bg-[#d7f7f2] p-2 rounded-lg justify-center items-center gap-2'><GoHome className='font-light text-2xl' /> home</h1>
            <h1 onClick={() => setActive("explore")} className={`flex flex-col cursor-pointer ${active == "explore" ?  "bg-[#d7f7f2] text-[#147073] ": "text-black" } p-2 rounded-lg justify-center items-center gap-2`}><FaRegCompass className={`font-light text-xl`}/>  Explore</h1>
            <h1 onClick={() => setActive("journal")} className={`flex flex-col cursor-pointer ${active == "journal" ?  "bg-[#d7f7f2] text-[#147073] ": "text-black " } p-2 rounded-lg justify-center items-center gap-2`}><FaPencil className={`font-light text-xl`}/> Journal</h1>
        </div>
    </div>
  )
}

export default Sidebar