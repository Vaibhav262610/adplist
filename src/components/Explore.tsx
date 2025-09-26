"use client"

import React, { useState } from 'react'

const Explore = () => {
    const [active, setActive] = useState<"mentor" | "group">("mentor");
  return (
    <div className='py-32  text-3xl font-semibold px-12 flex gap-8'>
            <h1 onClick={() => setActive("mentor")} className={`cursor-pointer ${
            active === "mentor"
              ? "border-b-3 border-black text-black"
              : "text-gray-500  border-b-3 border-white"
          }`} >Mentors</h1>  
            <h1 onClick={() => setActive("group")} className={`cursor-pointer ${
            active === "group"
              ? "border-b-3 border-black text-black"
              : "text-gray-500  border-b-3 border-white"
          }`}>Group Sessions</h1>  
        </div>
  )
}

export default Explore