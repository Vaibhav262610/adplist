"use client"

import Explore from '@/components/Explore';
import Footer from '@/components/Footer';
import GroupSessionsExplorePage from '@/components/GroupSessionsExplorePage';
import MentorExplorePage from '@/components/MentorExplorePage';
import Mentors from '@/components/Mentors';
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'

const page = () => {
    
    const [active, setActive] = useState<"mentor" | "group">("mentor");
    
  return (
    <div className='flex '>      
       <div className=" fixed top-0 left-0 h-screen ">
        <Sidebar />
      </div>
        <div className='pt-20 w-full px-12'>
            <Explore active={active} setActive={setActive} />
            <Mentors active={active} setActive={setActive}/>
            {active === "group" ? 
            <GroupSessionsExplorePage />
            : <MentorExplorePage />}
            <Footer />
        </div>
        
    </div>
  )
}

export default page