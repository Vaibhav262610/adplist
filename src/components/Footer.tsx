import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center bg-[#fafafa] py-28'>
        <div className='flex gap-28'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl cursor-pointer w-fit font-semibold'>LOGO</h1>
                <h2>
                    On a mission to democratize mentorship for all.<br/>    
                    Designed and made with 🖤 by Logo Team
                </h2>
                <h2>
                    © Copyright 2025 - Logo
                </h2>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl  font-bold'>Company</h1>
                    <h2 className='cursor-pointer hover:border-b border-black w-fit'>About us </h2>
                    <h2 className='cursor-pointer hover:border-b border-black w-fit'>Contact</h2>
                    <h2 className='cursor-pointer hover:border-b border-black w-fit'>Partnership</h2>
                    <h2 className='cursor-pointer hover:border-b border-black w-fit'>Blog</h2>
                </div>
                <div className='flex flex-col gap-3 mt-12'>
                    <h1 className='text-2xl font-bold'>Resources</h1>
                    <h2 className='cursor-pointer hover:border-b border-black w-fit'>AI Design Guide </h2>
                    <h2 className='cursor-pointer hover:border-b border-black w-fit'>Free Resume AI tool</h2>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold'>Products </h1>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>Find a mentor</h2>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>Become a mentor</h2>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>AI Design Masterclass</h2>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold'>Support</h1>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>FAQs</h2>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>Help Center</h2>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>Terms of service</h2>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>Privacy policy</h2>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>Site map</h2>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold'> Follow us</h1>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>LinkedIn</h2>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>X</h2>
                <h2 className='cursor-pointer hover:border-b border-black w-fit'>Instagram</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer