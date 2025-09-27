"use client"

import React, { useState } from 'react'

const Explore = ({ active, setActive }: { active: "mentor" | "group"; setActive: (val: "mentor" | "group") => void }) => {
    // const [active, setActive] = useState<"mentor" | "group">("mentor");
  return (
    <div className='py-8 ml-32 text-3xl font-semibold flex gap-8'>
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