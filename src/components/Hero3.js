import './pages/Home.css'

import React from 'react'

const Hero = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div></div>
            <div className='w-[66%] mt-6 flex flex-col items-center justify-center'>
                <h1 className='big-title'>
                    Free Online School Management Software.
                </h1>
                <p className='for-big-subtitle m-gray'>
                    Now you can manage your school, college, or any educational center with eSkooly. It's 100% free for a lifetime with no limitations.
                </p>
                <div>
                    <span className='m-1 bg-m-blue7 rounded-[1px] btns m-white' style={{ borderRadius: '4px' }}>Sign Up Now, It's Free</span>
                    <span className='m-1 bg-m-white btns m-dblue' style={{ borderRadius: '4px' }}>&#8594; Learn More</span>
                </div>
            </div>
            {/* <div></div>
            <div class="custom-shape-divider-bottom-1707203134">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div> */}
        </div>
    )
}
export default Hero;