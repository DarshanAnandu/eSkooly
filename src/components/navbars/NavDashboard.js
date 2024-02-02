import React from 'react';
import { Link } from "react-router-dom";

const NavDashboard = () => {
  return (
    <div className='h-16 flex items-stretch min-h-12 w-full'>
        <nav>
            <div className='navContainer'>
                <div className='brand'>
                    <Link to="/">
                        <img src='https://eskooly.com/assets/images/logos/logoxx.png' alt='logo' />
                    </Link>
                    <h1>hii</h1>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavDashboard