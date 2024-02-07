import React from 'react'
import PageNav from '../navbars/NavDashboard'
import SideNavPage from '../navbars/SideNavDashboard'
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LuDollarSign } from "react-icons/lu";

// import SideNavItems from "./SideNavItems";

const Dashboard = () => {
  const Display = () => {
    return (
      <div className='w-full'>
        <div className='p-9 flex flex-wrap w-full'>
          <div className='p-6 max-w min-w-80 mx-2 mb-2 flex flex-col bg-m-dblue hover:shadow-2xl rounded-2xl text-white'>
            <h6 className='mb-3 text-lg font-semibold'>Total Students</h6>
            <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
              <span><FaRegUser /></span>
              <span>0</span>
            </h2>
            <p className='flex justify-between'>This Month <span>0</span></p>
          </div>
          <div className='p-6 max-w min-w-80 mx-2 mb-2 flex flex-col bg-m-gray hover:shadow-2xl rounded-2xl text-white'>
            <h6 className='mb-5'>Total Employees</h6>
            <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
              <span><HiOutlineBriefcase size="36px" /></span>
              <span>0</span>
            </h2>
            <p className='flex justify-between'>This Month <span>0</span></p>
          </div>
          <div className='p-6 max-w min-w-80 mx-2 mb-2 flex flex-col hover:shadow-2xl bg-red-400 rounded-2xl text-white'>
            <h6 className='mb-5'>Revenue</h6>
            <h2 className='flex mb-2 justify-between font-semibold items-center text-4xl'>
              <span><LuDollarSign /></span>
              <span>0</span>
            </h2>
            <p className='flex justify-between'>This Month <LuDollarSign /> <span>0</span></p>
          </div>
          <div className='p-6 max-w min-w-80 mx-2 mb-2 flex flex-col hover:shadow-2xl bg-blue-500 rounded-2xl text-white'>
            <h6 className='mb-5'>Total Profit</h6>
            <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
              <span><LuDollarSign /></span>
              <span>0</span>
            </h2>
            <p className='flex justify-between items-center'>This Month <LuDollarSign /> <span>0</span></p>
          </div>
        </div>
      </div>
    );
  }
  const GreetingCard = () => {
    return (
      <div className='bg-red-100 flex min-w-64 max-w-3xl p-3 rounded-lg m-5'>
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
      <div className='hover:shadow-2xl'>
        <div>
          <h5>Estimated Fee This Month</h5>
        </div>
        <div></div>
      </div>
    );
  }
  return (
    <div className='h-screen w-full fle'>
      <Display />
      <GreetingCard />
      <Estimation />
    </div>
  );
};
const Pages = () => {
  const [selectedTab, setSelectedTab] = useState(0);
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
      <PageNav />
      <div className='flex'>
        <SideNavPage selectedTab={selectedTab} onTabChange={handleTabChange} />
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