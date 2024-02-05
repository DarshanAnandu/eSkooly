import React from 'react';
// import { a } from "react-router-dom";
// flex items-stretch min-h-12 w-full
const NavDashboard = () => {
    return (
        <div className='navbar-placeholder'>
            <nav className='nav-placeholder navbar navbar-wrapper navbar-default navbar-fade is-transparent' style={{
                backgroundColor: 'linear-gradient(href right, #09327f, #06183b)',
            }}>
                <div className='navContainer h-full w-full'>
                    <div className='brand h-full w-full'>
                        <a href="/" className='navbar-item h-full w-full'>
                            <img src='https://eskooly.com/assets/images/logos/logoxx.png' className='navBrand' alt='logo' />
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavDashboard