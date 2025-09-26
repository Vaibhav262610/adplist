import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import BestMentors from './BestMentors'
import Companies from './Companies'
import MidHeader from './MidHeader'

const HomePage = () => {
  return (
    <div>
        <div className=''>
            <Header />
            <Companies />
            <MidHeader />
            <BestMentors /> 
            <Contact />
            <Footer />
        </div>
    </div>
  )
}

export default HomePage