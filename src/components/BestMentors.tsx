import React from 'react'
import { Button } from './ui/button'
import MentorCard from './MentorCard'
import { GoArrowRight } from 'react-icons/go'

const BestMentors = () => {
  return (
    <div className='flex flex-col  w-full justify-center items-center py-12'>
        <div className='w-[68%] flex justify-between items-center '>
            <h1 className='text-xl font-bold'>Discover the world's top mentors</h1>
            <Button variant={'explore'}>Explore all <GoArrowRight    /></Button>
        </div>
        <div>
            <MentorCard />
        </div>
    </div>
  )
}

export default BestMentors