import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutUsInfo from '@/components/AboutUsInfo'
import Initiatives from '@/components/Initiatives'
import ContactUs from '@/components/ContactUs'
import BoardMembers from '@/components/BoardMembers'
import Collaborations from '@/components/Collaborations'
const page = () => {
  return (
    <div>
        <Navbar />
        <AboutUsInfo   />
        <BoardMembers />
        <Collaborations />
        <Initiatives />
        <ContactUs />
        <Footer />
    </div>
  )
}

export default page