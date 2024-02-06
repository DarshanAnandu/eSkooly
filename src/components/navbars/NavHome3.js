import React from 'react'
// import './NavDashboard2.css'

const NavHome2 = () => {
    return (
        <nav className='navbar navbar-wrapper flex justify-evenly w-full sticky top-0'>
            <div>
                <img src='https://eskooly.com/assets/images/logos/logoxx.png' className='h-14' alt='eSkooly Logo' />
            </div>
            <div className='flex justify-between items-center w-5 text-white'>
                <span className='flex'>Products <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg></span>
                <span>Help</span>
            </div>
            <div className='flex justify-between items-center w-5'>
                <span className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-3 mt-3 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Signup</span>
                <span className='text-blue-800 bg-white hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-10 py-3 mt-3 text-center me-2 mb-2 dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-blue-800'>Login</span>
            </div>
        </nav>
    )
}

export default NavHome2