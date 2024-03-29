import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { TfiFullscreen } from "react-icons/tfi";
import Logo from '../../assets/Vidyalay.png';

const OrdinaryNav = ({ sidebar, toggle }) => {
    return (
        <div className="h-14 d-bg dp items-center relative">
            <div className='h-full w-60 flex items-center justify-between p-2.5'>
                <img src={Logo} className="pl-7 max-h-11" alt="eSkooly-Logo" />
                <RxHamburgerMenu color="#000000" fontSize="20px" className='cursor-pointer' onClick={() => toggle(!sidebar)} />
            </div>
            <div>
                <ul className='flex items-center'>
                    <li></li>
                    <li className='p-2'>
                        <CiSearch color='#000000' fontSize="20px" />
                    </li>
                    <li className='p-1'>
                        <TfiFullscreen color='#000000' fontSize="20px" />
                    </li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}
const MobileNav = ({ sidebar, toggle }) => {
    return (
        <div className="h-14 d-bg dp-mb items-center relative">
            <div className='h-full w-full flex items-center justify-between p-2.5'>
                <img src={Logo} className="pl-7 max-h-11" alt="eSkooly-Logo" />
                <RxHamburgerMenu color="#000000" fontSize="30px" className='cursor-pointer mr-7' onClick={() => toggle(!sidebar)} />
            </div>
            {/* <div>
                <ul className='flex items-center'>
                    <li></li>
                    <li className='p-2'>
                        <CiSearch color='white' fontSize="30px" />
                    </li>
                    <li className='p-1'>
                        <TfiFullscreen color='white' fontSize="30px" />
                    </li>
                </ul>
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div> */}
        </div>
    )
}
const NavDashboard = ({ sidebar, toggle }) => {
    return (
        <div>
            <OrdinaryNav sidebar={sidebar} toggle={toggle} />
            <MobileNav sidebar={sidebar} toggle={toggle} />
        </div>
    );
}

export default NavDashboard
