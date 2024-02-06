import React from 'react'
import NavHome from '../navbars/NavHome3'
import Hero from '../Hero2'
import Mockup from '../Mockup'

const Home = () => {
  // h-max w-max
  return (
    <div className='body'>
      <NavHome />
      <div className='hero h-screen w-full'>
        <Hero />
      </div>
      <Mockup />
      <Mockup />
    </div>
  )
}

export default Home