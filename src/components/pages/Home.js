import React from 'react'
import NavHome from '../navbars/NavHome4'
import Hero from '../Hero3'
import Mockup from '../Mockup'

const Home = ({ loginType, setLogin, setLoginType }) => {
  // h-max w-max
  return (
    <div className='body bg-m-bg overflow-hidden h-[8680.34px] w-full flex flex-col overflow-y-scroll items-start justify-start'>
      <NavHome loginType={loginType} setLogin={setLogin} setLoginType={setLoginType} />
      <div className='hero w-full h-full' style={{ backgroundImage: 'linear-gradient(to right, #09327f, #06183b)' }}>
        <Hero />
      </div>
      <div className='h-full w-full bg-[#0F5EF7] px-[1.5rem] relative outline-none flex justify-center py-[5rem]'>
        <Mockup />
      </div>
      {/* <Mockup /> */}
    </div>
  )
}

export default Home