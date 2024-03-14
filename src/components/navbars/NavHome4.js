import React from 'react'
import Logo from '../../assets/Vidyalay.png';
import { RxHamburgerMenu } from "react-icons/rx";
import '../pages/Home.css'

const NavHome4 = ({ loginType, setLogin, setLoginType }) => {
    return (
        <nav className='flex justify-center bg-opacity-25 text-[#fff] w-full sticky top-0' style={{ backgroundImage: 'linear-gradient(to right, #09327f, #06183b)', zIndex: '999' }}>
            <div className='flex items-center justify-between w-[80%]'>
                <div className='flex items-center w-full'>
                    <img src={Logo} alt='logo not visible' className='h-[60px] p-[8px]' />
                    <RxHamburgerMenu color="#000000" fontSize="20px" className='hidden cursor-pointer' />
                    <div className='flex w-full justify-evenly ml-[17%]'>
                        <span>Products</span>
                        <span>Help</span>
                    </div>
                </div>
                <div className='flex w-full justify-end'>
                    <button className='mx-4 bg-m-blue7 btns m-white' onClick={() => {
                        setLogin(true);
                        setLoginType(false);
                        // window.location.reload();
                    }}>SignUp</button>
                    <button className='mx-4 bg-m-white btns m-dblue' onClick={() => {
                        setLogin(true);
                        setLoginType(true);
                        // window.location.reload();
                    }}>Login</button>
                </div>
            </div>
        </nav>
    )
}
export default NavHome4;