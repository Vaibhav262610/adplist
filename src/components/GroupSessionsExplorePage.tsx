import Image from 'next/image'
import React from 'react'
import  GroupSessionData  from '../data/GroupSessionData.json'
import { Button } from './ui/button'

const GroupSessionsExplorePage = () => {
  return (
    <div className='flex ml-32 flex-wrap gap-12 py-10'>
      {
        GroupSessionData.map((mentor,index) => (
            <div key={index} className="cursor-pointer max-w-lg w-full rounded-xl shadow-md overflow-hidden bg-white">
        {/* Banner */}
        <div className="relative">
          <Image
            src={mentor.banner}// replace with banner
            alt="Session Banner"
            width={1000}
            height={400}
            className="w-full h-50 object-cover"
            />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl font-bold">Join my <br /> group session</h2>
            <p className="text-sm mt-1">Hosted on ADPList</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-gray-500">
            {mentor.date}
          </p>
          <h3 className="text-2xl font-semibold mt-1">
            {mentor.title}
          </h3>

          {/* Mentor Info */}
          <div className="flex items-center gap-3 mt-4">
            <Image
              src={mentor.mentor.avatar} // replace with profile
              alt="Antonio Braz"
              width={40}
              height={40}
              className="rounded-full"
              />
            <div>
              <p className="text-sm font-semibold">
                {mentor.mentor.name} <span className="text-gray-500 text-xs">{mentor.mentor.country}</span>
              </p>
              <p className="text-xs text-gray-600">
               {mentor.mentor.role}
              </p>
            </div>
          </div>
        </div>
      </div>
        ))
      }
      <div className='w-full flex justify-center py-10'>
        <Button variant={'more'}>Load more group sessions</Button>
      </div>
    </div>
  )
}

export default GroupSessionsExplorePage