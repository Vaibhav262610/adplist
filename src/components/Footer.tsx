import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center bg-[#fafafa] py-28'>
        <div className='flex gap-28'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl font-semibold'>LOGO</h1>
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
                    <h1 className='text-3xl  font-semibold'>Company</h1>
                    <h2>About us </h2>
                    <h2>Contact</h2>
                    <h2>Partnership</h2>
                    <h2>Blog</h2>
                </div>
                <div className='flex flex-col gap-3 mt-12'>
                    <h1 className='text-3xl font-semibold'>Resources</h1>
                    <h2>AI Design Guide </h2>
                    <h2>Free Resume AI tool</h2>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl font-semibold'>Products </h1>
                <h2>Find a mentor</h2>
                <h2>Become a mentor</h2>
                <h2>AI Design Masterclass</h2>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl font-semibold'>Support</h1>
                <h2>FAQs</h2>
                <h2>Help Center</h2>
                <h2>Terms of service</h2>
                <h2>Privacy policy</h2>
                <h2>Site map</h2>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-3xl font-semibold'> Follow us</h1>
                <h2>LinkedIn</h2>
                <h2>X</h2>
                <h2>Instagram</h2>
            </div>
        </div>
    </div>
  )
}

export default Footer