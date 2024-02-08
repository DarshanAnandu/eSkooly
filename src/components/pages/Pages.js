import React from 'react'
import PageNav from '../navbars/NavDashboard'
import SideNavPage from '../navbars/SideNavDashboard'
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LuDollarSign } from "react-icons/lu";
import { TfiTarget } from "react-icons/tfi";
import { CiWallet } from "react-icons/ci";


// import SideNavItems from "./SideNavItems";

const Dashboard = () => {
  const Display = () => {
    return (
      <div></div>
    );
  }
  const GreetingCard = () => {
    return (
      <div className='bg-red-100 flex justify-around h-24 min-w-64 w-9/12 max-w-3xl p-3 rounded-lg m-5'>
        <div>
          <h4 className='text-orange-700'>Welcome to Admin Dashboard</h4>
          <p>Your Account is not Verified yet! <br />
            Please Verify your email address. <span className='text-blue-700'>Verify now!</span></p>
        </div>
        <img src='https://eskooly.com/bb/assets/images/admin-message.png' className='h-24 mar-min items-center' alt='admin-message-img' />
      </div>
    );
  }
  const Estimation = () => {
    return (
      <div className='hover:shadow-2xl w-1/4 p-6 bord rounded-xl'>
        <div className='flex items-center p-6'>
          <h5 className='font-semibold'>Estimated Fee This Month</h5>
        </div>
        <div className=''>
          <p className='flex items-center justify-center text-red-400'><TfiTarget color='red' /> <span className='ml-2'>Estimation</span></p>
          <h4 className='flex justify-center'>$ 0</h4>
          <p className='flex items-center justify-center'><CiWallet /> <span className='ml-2'>Collections</span></p>
        </div>
      </div>
    );
  }
  return (
    <div className='h-screen w-full '>
      <div className='p-8 flex flex-wrap w-full'>
        <div className='p-6 max-w min-w-48 min-h-36 mx-2 mb-2 flex flex-col bg-m-dblue hover:shadow-2xl rounded-2xl text-white'>
          <h6 className='mb-3 text-lg font-semibold'>Total Students</h6>
          <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
            <span><FaRegUser /></span>
            <span>0</span>
          </h2>
          <p className='flex justify-between'>This Month <span>0</span></p>
        </div>
        <div className='p-6 max-w min-w-48 min-h-36 mx-2 mb-2 flex flex-col bg-m-gray hover:shadow-2xl rounded-2xl text-white'>
          <h6 className='mb-5'>Total Employees</h6>
          <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
            <span><HiOutlineBriefcase size="36px" /></span>
            <span>0</span>
          </h2>
          <p className='flex justify-between'>This Month <span>0</span></p>
        </div>
        <div className='p-6 max-w min-w-48 min-h-36 mx-2 mb-2 flex flex-col hover:shadow-2xl bg-red-400 rounded-2xl text-white'>
          <h6 className='mb-5'>Revenue</h6>
          <h2 className='flex mb-2 justify-between font-semibold items-center text-4xl'>
            <span><LuDollarSign /></span>
            <span>0</span>
          </h2>
          <div className='flex'>
            <p className=''>This Month </p>
            <div className='flex items-center'><LuDollarSign /> <span>0</span></div>
          </div>
        </div>
        <div className='p-6 max-w min-w-48 min-h-36 mx-2 mb-2 flex flex-col hover:shadow-2xl bg-blue-500 rounded-2xl text-white'>
          <h6 className='mb-5'>Total Profit</h6>
          <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
            <span><LuDollarSign /></span>
            <span>0</span>
          </h2>
          <div className='flex'>
            <p className=''>This Month </p>
            <div className='flex items-center justify-end'><LuDollarSign /> <span>0</span></div>
          </div>
        </div>
      </div>
      <div className='flex w-full'>
        <GreetingCard />
        <Estimation />
      </div>
    </div>
  );
};
const Pages = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  // const [selectedTabName, setSelectedTabName] = useState("");
  // const handleTabChange = (tabIndex, tabName) => {
  //   setSelectedTab(tabIndex);
  //   setSelectedTabName(tabName);
  // };
  const handleTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
    // setSelectedTabName(tabName);
  };
  return (
    <div>
      <PageNav sideBar={sideBar} toggle={toggleSideBar} />
      <div className='flex'>

        {sideBar ? <SideNavPage selectedTab={selectedTab} onTabChange={handleTabChange} /> : null}
        {/* {SideNavItems.map((items) => (
        <div key={items.idx === selectedTab}>
          {items.goto}
        </div>
      ))} */}
        {/* {console.log(selectedTabName)} */}
        {/* {selectedTabName} */}
        <Dashboard />
      </div>
    </div>
  )
}

export default Pages;
export { Dashboard };