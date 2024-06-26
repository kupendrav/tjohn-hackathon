import MainBreadCrum from '@/components/MainBreadCrum'
import MainFilter from '@/components/MainFilter'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      {/* <MainFilter/> */}
      <MainBreadCrum/>
      <h1>Jobs</h1>
      <main>

      </main>
    </div>
  )
}

export default page