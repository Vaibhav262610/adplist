import React from 'react'
import { MacbookScroll } from './ui/macbook-scroll'

const MidHeader = () => {
  return (
    <div className='w-full flex py-20 flex-col justify-center items-center'>
        <div>
            <MacbookScroll
        title={
          <div className='flex flex-col justify-center items-center text-center gap-6'>
            <h1 className='text-5xl font-bold'>Transforming your potential</h1>
            <h2 className='text-xl text-gray-500 font-normal'>Become the best version of yourself by accessing to the perspectives and life<br/> experiences of others who've been there, done that.</h2>
        </div>
        }
        badge={
          <a href="https://vaibhavrajpoot.vercel.app" target='_blank' className='flex justify-center items-center gap-3'>
            {/* <Badge className="h-10 w-10 -rotate-12 transform" /> */}
            <h1 className='font-bold animate-bounce'>PORTFOLIO</h1>
          </a>
        }
        src={`/mac-pic.png`}
        showGradient={false}
      />
        </div>
    </div>
  )
}

export default MidHeader