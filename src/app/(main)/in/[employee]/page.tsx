import MainBreadCrum from '@/components/MainBreadCrum'
import MainFilter from '@/components/MainFilter'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = ({params}: {params: {employee: string}}) => {
  return (
    <div className='md:px-20 px-10'>
      <Navbar/>
      <MainBreadCrum/>
      <MainFilter/>
      {params.employee}</div>
  )
}

export default page