import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import PageNav from '../navbars/NavDashboard'
import SideNavPage from '../navbars/SideNavDashboard'
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LuDollarSign } from "react-icons/lu";
import { TfiTarget } from "react-icons/tfi";
import { CiWallet } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { TiHomeOutline } from "react-icons/ti";
import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FaWindows, FaApple } from "react-icons/fa";
import { TfiFaceSad } from "react-icons/tfi";
import { MdCreditCard } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { LuUndo2 } from "react-icons/lu";
import { GrRedo } from "react-icons/gr";
import { FiAlignLeft } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineIdcard } from "react-icons/ai";
import { TfiPrinter } from "react-icons/tfi";
import { CiImport } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiFilterLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

// import SideNavItems from "./SideNavItems";

const Dashboard = () => {
  const Display = () => {
    return (
      <div>
        <div className='p-8 flex flex-wrap justify-around sm:justify-start md:justify-center lg:justify-between xl:justify-around'>
          <div className='p-6 max-w min-w-48  min-h-36 mx-2 mb-2 mr-0 w-1/6 flex flex-col bg-m-dblue hover:shadow-2xl rounded-2xl xl:w-1/4 text-white'>
            <h6 className='mb-3 text-lg font-semibold'>Total Students</h6>
            <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
              <span><FaRegUser /></span>
              <span>0</span>
            </h2>
            <p className='flex justify-between'>This Month <span>0</span></p>
          </div>
          <div className='p-6 max-w min-w-48 min-h-36 mb-2 flex w-1/6 flex-col bg-m-gray hover:shadow-2xl rounded-2xl text-white'>
            <h6 className='mb-5'>Total Employees</h6>
            <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
              <span><HiOutlineBriefcase size="36px" /></span>
              <span>0</span>
            </h2>
            <p className='flex justify-between'>This Month <span>0</span></p>
          </div>
          <div className='p-6 max-w min-w-48 min-h-36 mb-2 w-1/6 flex flex-col hover:shadow-2xl bg-red-400 rounded-2xl text-white'>
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
          <div className='p-6 max-w min-w-48 min-h-36 w-1/6 mb-2 flex flex-col hover:shadow-2xl bg-blue-500 rounded-2xl text-white'>
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
      </div>
    );
  }
  const GreetingCard = () => {
    return (
      <div className='bg-red-100 flex justify-around h-24 w-full p-3 rounded-xl min-w-40 mb-0'>
        <div>
          <h4 className='text-orange-700'>Welcome to Admin Dashboard</h4>
          <p>Your Account is not Verified yet! <br />
            Please Verify your email address. <span className='text-blue-700'>Verify now!</span></p>
        </div>
        <img src='https://eskooly.com/bb/assets/images/admin-message.png' className='h-24 mar-min items-center' alt='admin-message-img' />
      </div>
    );
  }
  const TodayAbsentStudents = () => {
    return (
      <div className='w-full h-40 bg-white rounded-xl shadow mt-8 hover:shadow-2xl'>
        <div className='font-bold flex justify-between p-6'>
          <h5 className='text-red-400'>Today Absent Students</h5>
          <div className='font-bold cursor-pointer'>&lt;</div>
        </div>
        <div className='p-6 pt-0 flex flex-col items-center'>
          <TfiFaceSad color='red' />
          <p className='text-red-300'>Attendance Not Marked Yet !</p>
        </div>
      </div>
    );
  }
  const TodayPresentEmployees = () => {
    return (
      <div className='w-full h-40 bg-white rounded-xl shadow mt-8 hover:shadow-2xl'>
        <div className='font-bold flex justify-between p-6'>
          <h5 className='text-blue-400'>Today Present Employees</h5>
          <div className='font-bold cursor-pointer'>&lt;</div>
        </div>
        <div className='p-6 pt-0 flex flex-col items-center'>
          <TfiFaceSad color='red' />
          <p className='text-red-300'>Attendance Not Marked Yet !</p>
        </div>
      </div>
    );
  }
  const NewAdmissions = () => {
    return (
      <div className='w-full h-40 bg-white rounded-xl shadow mt-8 hover:shadow-2xl'>
        <div className='font-bold flex justify-between p-6'>
          <h5 className='text-violet-400'>New Admissions</h5>
          <div className='font-bold cursor-pointer'>&lt;</div>
        </div>
        <div className='p-6 pt-0 flex flex-col items-center'>
          <TfiFaceSad color='red' />
          <p className='text-red-300'>No New Admissions This Month </p>
        </div>
      </div>
    );
  }
  const Estimation = () => {
    return (
      <div className='hover:shadow-2xl w-full p-6 min-w-72 mb-8 bg-white bord rounded-xl'>
        <div className='flex items-center p-6'>
          <h5 className='font-semibold'>Estimated Fee This Month</h5>
        </div>
        <div className=''>
          <p className='flex items-center justify-center text-red-400'><TfiTarget color='red' /> <span className='ml-2'>Estimation</span></p>
          <h4 className='flex justify-center'>$ 0</h4>
        </div>
        <div className='flex justify-around w-full mt-16 p-5'>
          <div className='p-2 w-full'>
            <h4>$ 0</h4>
            <p className='flex items-center '><CiWallet color='green' /> <span className='ml-2 text-green-600'>Collections</span></p>
          </div>
          {/* <hr /> */}
          {/* <div className='h-full ww bg-zinc-800' style={{width: '10px', height: '100%', backgroundColor: 'black'}}></div> */}
          <div className='p-2 w-full'>
            <h4>$ 0</h4>
            <p className='flex items-center '><CiWallet color='red' /> <span className='ml-2 text-red-600'>Collections</span></p>
          </div>
        </div>
      </div>
    );
  }
  const SMS = () => {
    return (
      <div className='flex min-w-min w-full bg-sms rounded-xl text-white p-3 hover:shadow-2xl'>
        <div>
          <h6 className='font-semibold'>Free SMS Gateway</h6>
          <p>Send Unlimited Free SMS on Mobile Numbers.</p>
        </div>
        <img src='https://eskooly.com/bb/assets/images/msg1.png' className='mar-sms w-14 h-24' alt='sms-icon' />
      </div>
    );
  }
  const SimpleStat = () => {
    return (
      <div className='h-34 w-full bg-white m-3 p-5 mx-0 pt-1 bord rounded-2xl hover:shadow-2xl'>
        <div className='flex flex-col '>
          <p className='flex text-gray-600 justify-between my-2'><span>Total Present Students</span><span className='text-red-600'>0%</span></p>
          <div className='w-full h-1 bg-gray-200'></div>
          <p className='flex text-gray-600 justify-between my-2'><span>Total Present Employees</span><span className='text-blue-600'>0%</span></p>
          <div className='w-full h-1 bg-gray-200'></div>
          <p className='flex text-gray-600 justify-between my-2'><span>This Month Fee Collection</span><span className='text-red-600'>0%</span></p>
          <div className='w-full h-1 bg-gray-200'></div>
        </div>
      </div>
    );
  }
  const Desktop = () => {
    return (
      <div className='flex justify-between h-34 w-full bg-m-orange m-3 p-5 mx-0 pt-1 bord rounded-2xl'>
        <div>
          <h6 className='font-bold text-slate-900 text-sm leading-3 p-2'>Desktop Version</h6>
          <p className='text-gray-900 mb-1' style={{ fontSize: '10px' }}>*Download & install eSkooly on your PC.</p>
          <div className='flex justify-around h-8'>
            <div className='flex items-center cursor-pointer text-white bg-violet-600 rounded' style={{ fontSize: '8px', padding: '6px', lineHeight: '8px' }}>
              <FaWindows color='white' size='15px' />
              <div style={{ padding: '5px' }}>
                <strong>Download</strong>
                <br />
                <span style={{ fontSize: '6px' }}>For Windows</span>
              </div>
            </div>
            <div className='flex items-center cursor-pointer text-white bg-slate-800 rounded' style={{ fontSize: '8px', padding: '6px', lineHeight: '8px' }}>
              <FaApple color='white' size='15px' />
              <div style={{ padding: '5px' }}>
                <strong>Download</strong>
                <br />
                <span style={{ fontSize: '6px' }}>For Windows</span>
              </div>
            </div>
          </div>
        </div>
        <div><img src='https://eskooly.com/bb/assets/images/desktop.png' className='w-28' style={{ marginTop: '-20px' }} alt='a_person_with_desktop' /></div>
      </div>
    );
  }
  return (
    <div className='h-full w-full bg-gray-100 overflow-auto'>
      <Display />
      <div className='flex h-full w-full'>
        <div className='h-full w-3/5 m-14 mt-0'>
          <GreetingCard />
          <TodayAbsentStudents />
          <TodayPresentEmployees />
          <NewAdmissions />
        </div>
        <div className='h-full w-2/5 mr-12'>
          <Estimation />
          <SMS />
          <SimpleStat />
          <Desktop />
        </div>
      </div>
    </div>
  );
};
const GeneralSettings = () => {
  return (
    <div className='w-full h-full'>
      {/* <InstitureProfile /> */}
      {/* <DetailsForFeeChallan /> */}
      {/* <FeeParticulars /> */}
      {/* <RulesAndRegulations /> */}
      {/* <MarksGradings /> */}
      {/* <ThemeAndLanguage /> */}
      {/* <AccountSettings /> */}
      {/* {subtab === 0 ? <InstitureProfile /> :
        subtab === 1 ? <FeeParticulars /> :
          subtab === 4 ? <DetailsForFeeChallan /> :
            subtab === 5 ? <RulesAndRegulations /> :
              subtab === 6 ? <MarksGradings /> :
                subtab === 7 ? <ThemeAndLanguage /> :
                  subtab === 8 ? <AccountSettings /> :
                    subtab === 9 ? null : null} */}
      {/* <Routes>
        <Route path='/Institute-Profile' element={<InstitureProfile />} />
        <Route path='/General-Settings/Fee-Particulars' element={<FeeParticulars />} />
      </Routes> */}
    </div>
  );
}
const InstitureProfile = () => {
  const UpdateInstituteLogo = () => {
    return (
      <div className='hover:shadow-2xl shadow border-black bod-in p-6 flex flex-col m-2 rounded-2xl'>
        <div className='font-semibold w-full'>
          <h5>Update Instute Logo Here</h5>
        </div>
        <form className='w-full'>
          <label>Institute Logo <br /><input type='file' name='fileToUpload' className='bod-in w-full p-2' required /></label>

          <div className='flex justify-end'><button className='text-white bg-blue-500 flex flex-end items-center p-2 rounded-sm justify-end mt-3'><TfiReload color='white' /> Update</button></div>
        </form>
      </div>
    );
  }
  const UpdateInstituteInfo = () => {
    return (
      <div className='hover:shadow-2xl shadow border-black bod-in p-6 flex flex-col m-2 rounded-2xl'>
        <div className='font-semibold w-full'>
          <h5>Update Instute Info Here</h5>
        </div>
        <form className='w-full mt-3'>
          <div class="relative flex items-center my-3">
            <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Name of the Institute</label>
            <input type="text" placeholder="Name of the Institute"
              class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
          <div class="relative flex items-center my-3">
            <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Target Line</label>
            <input type="text" placeholder="Target Line"
              class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
          <div class="relative flex items-center my-3">
            <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Phone Number</label>
            <input type="tel" placeholder="Phone"
              class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
          <div class="relative flex items-center my-3">
            <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Website</label>
            <input type="text" placeholder="Website"
              class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
          <div class="relative flex items-center my-3">
            <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Address</label>
            <input type="text" placeholder="Address"
              class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
          <div class="relative flex items-center my-3">
            <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Country</label>
            <select name='country' className='px-4 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none'>
              <option value selected="selected">select Country</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className='flex justify-end'><button className='text-white bg-blue-500 flex flex-end items-center p-2 rounded-sm justify-end mt-3'><TfiReload color='white' /> Update</button></div>
        </form>
      </div>
    );
  }
  const YourInstituteProfile = () => {
    return (
      <div className=' hover:shadow-2xl w-full text-gray-700 h-auto shadow rounded-2xl flex flex-col m-2 p-6 bod-in'>
        <div className=' w-full font-semibold text-gray-500'>
          <h5>Your Institute Profile</h5>
        </div>
        <div className='flex justify-center bod-ip p-6 pt-0'><TiHomeOutline color='gray' size="60px" /></div>
        <div className='flex flex-col p-3 '>
          <h4 className='flex justify-center'>Your Institute Name</h4>
          <h6 className='flex justify-center'>Your Target Line</h6>
          <hr />
          <p className='flex items-center justify-between'><CiMobile4 color='gray' /> +92 (356) 787 5465</p>
          <p className='flex items-center justify-between'><CiMail color='gray' /> suport@saanvigs.com</p>
          <p className='flex items-center justify-between'><TfiWorld color='gray' /> www.eskooly.com</p>
          <hr />
          <p className='flex flex-col items-center pt-3'><CiLocationOn color='gray' /> Your Institute Address will goes here!</p>
          <p className='flex justify-center p-3 pt-0'>COUNTRY</p>
        </div>
      </div>
    );
  }
  return (
    <div className='h-full w-full p-10 pl-7 flex'>
      <div className=' w-3/5 h-full'>
        <UpdateInstituteLogo />
        <UpdateInstituteInfo />
      </div>
      <div className='w-5/12'>
        <YourInstituteProfile />
      </div>
    </div>
  );
}
const FeeParticulars = () => {
  return (
    <div className='p-6 pt-6 shadow border-black bod-in m-9 rounded-2xl bg-white hover:shadow-2xl'>
      <div className='flex justify-between'>
        <h5 className='font-semibold text-blue-500' style={{ fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>Change Fee Particulars</h5>
        <div className='bg-red-400 text-white items-center rounded-2xl p-2 px-5 flex'><TfiReload size="12px" /><span className='px-2'>Reset to Default</span></div>
      </div>
      <div className=''>
        <div className='flex flex-col'>
          <label className='lab-txt' style={{ fontSize: '13px' }}>Fee Particulars for*</label>
          <select id="feeFor" className="w-min rounded-2xl bod-in p-2 focus:ring-blue-500 focus:border-blue-500">
            <option selected>All Students</option>
            <option value="Specific Class">Specific Class</option>
            <option value="Specific Student">Specific Student</option>
          </select>
        </div>
        <div className='flex w-full' style={{ fontSize: '14px' }}>
          <div className='w-2/3'>
            <span className='text-red-500 px-2 flex w-full'>Particular Name</span>
            <span className='bod-in py-2 px-2 flex w-full uppercase cursor-not-allowed' disabled style={{ margin: '2px', opacity: '0.5px', backgroundColor: '#e9ecef', color: '#acb3b9' }}>Monthly Tution Fee</span>
            <input type="text" defaultValue="Admission Fee" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '' }} required />
            <input type="text" defaultValue="Registration Fee" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="text" defaultValue="Art Material" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="text" defaultValue="Transport" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="text" defaultValue="Books" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="text" defaultValue="Uniform" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="text" defaultValue="Fine" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="text" defaultValue="Others" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <span className='bod-in py-2 px-3 flex w-full uppercase cursor-not-allowed' style={{ margin: '2px', color: '#495057', opacity: '0.5px', backgroundColor: '#e9ecef' }}>Previous Balance</span>
            <span className='bod-in py-2 px-3 flex w-full uppercase cursor-not-allowed' style={{ margin: '2px', color: '#495057', opacity: '0.5px', backgroundColor: '#e9ecef' }}>Discount in fee [fixed]</span>
          </div>
          <div className='w-2/5' style={{ marginLeft: '2px' }}>
            <span className='text-red-500 px-2 flex w-full'>Prefix Amount</span>
            <span className='bod-in py-2 px-3 flex w-full cursor-not-allowed' style={{ margin: '2px', color: '##acb3b9', opacity: '0.5px', backgroundColor: '#e9ecef' }}>[Fixed]</span>
            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '' }} required />
            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
            <span className='bod-in py-2 px-3 flex w-full cursor-not-allowed' style={{ margin: '2px', color: '#acb3b9', opacity: '0.5px', backgroundColor: '#e9ecef' }}>[Fixed]</span>
            <span className='bod-in py-2 px-3 flex w-full cursor-not-allowed' style={{ margin: '2px', color: '#acb3b9', opacity: '0.5px', backgroundColor: '#e9ecef' }}>[Fixed]</span>
          </div>
        </div>
        <div className='flex justify-end'><button className='flex items-center justify-end bg-blue-500 mt-2 p-2 px-5 rounded-2xl text-white'><IoMdCheckmark color='white' /> <span className='pl-2'>Save Changes</span></button></div>
      </div>
    </div>
  );
}
const DetailsForFeeChallan = () => {
  const UpdateInstituteLogo = () => {
    return (
      <div className='hover:shadow-2xl shadow border-black bod-in p-6 flex flex-col m-2 rounded-2xl'>
        <div className='font-semibold w-full'>
          <h5>Update Bank Logo Here</h5>
        </div>
        <form className='w-full'>
          <label>Bank Logo <br /><input type='file' name='fileToUpload' className='bod-in w-full p-2' required /></label>

          <div className='flex justify-end'><button className='text-white bg-blue-500 flex flex-end items-center p-2 rounded-sm justify-end mt-3'><TfiReload color='white' /> Update</button></div>
        </form>
      </div>
    );
  }
  const UpdateInstituteInfo = () => {
    return (
      <div className='hover:shadow-2xl shadow border-black bod-in p-6 flex flex-col m-2 rounded-2xl'>
        <div className='font-semibold w-full'>
          <h5>Update Instute Info Here</h5>
        </div>
        <form className='w-full mt-3'>
          <div class="relative flex items-center my-3">
            <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Bank Name</label>
            <input type="text" placeholder="Your Bank Name"
              class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
          <div class="relative flex items-center my-3">
            <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Bank / Branch Address</label>
            <input type="text" placeholder="Bank Address"
              class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
          <div class="relative flex items-center my-3">
            <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Account Number</label>
            <input type="tel" placeholder="Bank Account#"
              class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
          <div className='flex justify-end'><button className='text-white bg-blue-500 flex flex-end items-center p-2 rounded-sm justify-end mt-3'><TfiReload color='white' /> Update</button></div>
        </form>
      </div>
    );
  }
  const YourInstituteProfile = () => {
    return (
      <div className=' hover:shadow-2xl w-full text-gray-700 h-auto shadow rounded-2xl flex flex-col m-2 p-6 bod-in'>
        <div className=' w-full font-semibold text-gray-500'>
          <h5>Your Bank Profile</h5>
        </div>
        <div className='flex justify-center bod-ip p-6 pt-0'><TiHomeOutline color='gray' size="60px" /></div>
        <div className='flex flex-col p-3 '>
          <h4 className='flex justify-center'>Your Bank Name</h4>
          <hr />
          <p className='flex items-center justify-between'><MdCreditCard color='gray' /> Your Banks Account#</p>
          <hr />
          <p className='flex flex-col items-center pt-3'><CiLocationOn color='gray' /> Your Bank Address will goes here!</p>
          <p className='flex justify-center p-3 pt-0'>COUNTRY</p>
        </div>
      </div>
    );
  }
  return (
    <div className='h-full w-full p-10 pl-7 flex'>
      <div className=' w-3/5 h-full'>
        <UpdateInstituteLogo />
        <UpdateInstituteInfo />
      </div>
      <div className='w-5/12'>
        <YourInstituteProfile />
      </div>
    </div>
  );
}
const RulesAndRegulations = () => {
  return (
    <div className='p-6 pt-6 shadow border-black bod-in m-9 rounded-2xl bg-white hover:shadow-2xl'>
      <h5 className='font-semibold text-blue-500 mb-4' style={{ fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>Institute Rules & Regulations</h5>
      <div className='bod-in'>
        <div className='flex' style={{ padding: '1px', fontSize: '16px', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
          <div className='p-1 py-2 cursor-default rounded-sm hover:bg-gray-300'><span className='px-1'>File</span></div>
          <div className='p-1 py-2 cursor-default rounded-sm hover:bg-gray-300'><span className='px-1'>Edit</span></div>
          <div className='p-1 py-2 cursor-default rounded-sm hover:bg-gray-300'><span className='px-1'>View</span></div>
          <div className='p-1 py-2 cursor-default rounded-sm hover:bg-gray-300'><span className='px-1'>Format</span></div>
        </div>
        <div className='flex'>
          <LuUndo2 size="24px" className='m-2' />
          <GrRedo size="24px" className='m-2' style={{ borderRight: '1px solid rgba(0,0,0,.125)' }} />
          {/* <hr /> */}
          <select>
            <option value="">Headings
              <div className=''>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>
              </div>
            </option>
            <option value="">Inline <select></select></option>
            <option value="">Blocks <select></select></option>
            <option value="">Align <select></select></option>
          </select>
        </div>
      </div>
      <div className='flex justify-end'><button className='flex items-center justify-end bg-blue-500 mt-2 p-2 px-5 rounded-sm text-white'><IoMdCheckmark color='white' /> <span className='pl-2'>Save Changes</span></button></div>
    </div>
  );
}
const MarksGradings = () => {
  return (
    <div className='p-6 pt-6 shadow border-black bod-in m-9 rounded-2xl bg-white hover:shadow-2xl'>
      <div className='flex justify-between'>
        <h5 className='font-semibold text-blue-500 pb-6' style={{ fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>Change Fee Particulars</h5>
      </div>
      <div className=''>
        <div className='flex w-full' style={{ fontSize: '14px' }}>
          <div className='w-1/4'>
            <span className='text-red-500 px-2 flex w-full'>Grade Name</span>
            <input type="text" defaultValue="A+" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="A" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="B+" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="B" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="C" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="D" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="F" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
          </div>
          <div className='w-1/4' style={{ marginLeft: '4px' }}>
            <span className='text-red-500 px-2 flex w-full'>Percentage From</span>
            <input type="number" defaultValue="80" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="70" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="60" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="50" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="40" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="33" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
          </div>
          <div className='w-1/4' style={{ marginLeft: '4px' }}>
            <span className='text-red-500 px-2 flex w-full'>Percentage Upto</span>
            <input type="number" defaultValue="100" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="79" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="69" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="59" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="49" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="49" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="number" defaultValue="32" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
          </div>
          <div className='w-1/4' style={{ marginLeft: '4px' }}>
            <span className='text-red-500 px-2 flex w-full'>Status</span>
            <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
            <input type="text" defaultValue="Fail" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
          </div>
        </div>
        <div className='flex justify-end'><button className='flex items-center justify-end bg-blue-500 mt-2 p-2 px-5 rounded-2xl text-white'><IoMdCheckmark color='white' /> <span className='pl-2'>Save Changes</span></button></div>
      </div>
    </div>
  );
}
const ThemeAndLanguage = () => {
  return (
    <div className='p-6 pt-6 shadow border-black bod-in m-9 rounded-2xl bg-white hover:shadow-2xl'>
      <div className='flex flex-col justify-between h-full w-full'>
        <h6 className='mt-3'>Theme Placement</h6>
        <hr className='mt-0 mb-4' style={{ borderTop: '1px solid rgba(0,0,0,.1)' }} />
        <div className='flex flex-col'>
          <input type='radio' id='ltl' className='' />
          <label for="ltl" className='flex flex-col ' style={{ fontSize: '20px' }}><FiAlignLeft /><span className='text-green-600' style={{ fontSize: '27px' }}>LTL</span></label>
        </div>
      </div>
      <div className=''>
        <div className='flex justify-center'><button className='flex items-center justify-end bg-blue-500 mt-2 p-2 px-5 rounded-2xl text-white'><IoMdCheckmark color='white' /> <span className='pl-2'>Save Changes</span></button></div>
      </div>
    </div>
  );
}
const AccountSettings = () => {
  return (
    <div className='h-full p-6 pt-6 m-9'>
      <div className='flex text-white w-full p-5 items-center bg-blue-500' style={{ borderRadius: '30px' }}><CiSettings color='white' size="23px" /><strong>Account Settings</strong></div>
      <div className='mt-7 flex'>
        <div className='w-8/12'>
          <div class="relative flex items-center my-3 mt-5">
            <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Username*</label>
            <input type="text" placeholder="New Email ?"
              class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
          </div>
          <div class="relative flex items-center my-3 mt-5">
            <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Password*</label>
            <input type="text" placeholder="******"
              class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
          </div>
          <div class="relative flex items-center my-3 mt-5">
            <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>TimeZone*</label>
            <select name="timezone" id='searchlist'
              class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
              <option value="Asia/Karachi" selected>Asia/Karachi</option>
              <option value="Asia/kabul">Asia/kabul</option>
              <option value="Asia/India">Asia/India</option>
            </select>
          </div>
          <div className='flex'>
            <div class="relative flex items-center my-3 mt-5 w-1/2">
              <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Currency*</label>
              <select name="timezone" id='searchlist'
                class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                <option value="Dollar (USD)" selected>Dollar (USD)</option>
                <option value="Dollar (TTD)">Dollar (TTD)</option>
                <option value="Dollar (TVD)">Dollar (TVD)</option>
              </select>
            </div>
            <div class="relative flex items-center my-3 mt-5 ml-3 w-1/2">
              <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Symbol*</label>
              <input type="text" placeholder="Currency Symbol"
                class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
            </div>
          </div>
          <div className='flex justify-center'><button className='flex items-center mt-2 p-2 px-5 text-white' style={{ background: 'linear-gradient(87deg, #11cdef 0, #1171ef 100%)', borderRadius: '20px' }}><TfiReload color='white' /> <span className='pl-2'>Update Settings</span></button></div>
        </div>
        <div className='w-2/5 ml-5 my-3 rounded-2xl h-max' style={{ backgroundImage: 'url(https://eskooly.com/bb/asserts/images/apploginbg.jpg)' }}>
          <div className='p-8 flex rounded-2xl flex-col acc-det-bg'>
            <div className='text-white flex w-full justify-center items-center'><CiLock color='white' size="25px" /> <h5 className='ml-2 font-semibold text-xl'> Account details</h5></div>
            <div className='flex w-full justify-center mt-4'>
              <div className='flex flex-col items-end text' style={{ color: 'rgb(150, 152, 214)' }}>
                <span>Username:</span>
                <span>Password:</span>
                <span>Subscription:</span>
                <span>Expiry:</span>
              </div>
              <div className='flex flex-col items-start ml-5 text-white'>
                <span>abc@saanvigs.org</span>
                <span>*********</span>
                <span className='flex px-2 items-center rounded-3xl' style={{ background: 'linear-gradient(87deg, #2dce89 0, #2dcecc 100%)' }}><IoMdCheckmark color='white' /> <span className='pl-2'>Free</span></span>
                <span>Never</span>
              </div>
            </div>
            <div className='flex justify-center'><div className='text-white w-max flex items-center px-5 mt-5 rounded-3xl py-2' style={{ background: 'linear-gradient(87deg, #f5365c 0, #f56036 100%' }}><IoTrashOutline color='white' /><span className='pl-2'>Delete Account</span></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Classes
const Classes = () => {
  return (
    <div className='h-full w-full p-9'>
      {/* <AllClasses /> */}
      {/* <NewClasses /> */}
      {/* <EditORDelete /> */}
    </div>
  );
}
const AllClasses = () => {
  return (
    <div className='p-9 flex w-full'>
      <div className='hover:shadow-2xl shadow flex flex-col p-7 m-3 text-white rounded-2xl cursor-pointer ' style={{ width: '377px', background: 'linear-gradient(45deg, #4d4cac, #5a59ab)' }}>
        <h6>10</h6>
        <h2 className='flex justify-between'><span className='text-2xl font-bold'>1</span><FaGraduationCap size='26px' color='white' /></h2>
        <p>STUDENTS</p>
      </div>
      <Link to='/eSkooly/Classes/New-Class'>
        <div className='hover:shadow-2xl shadow flex flex-col p-9 m-3 text-white rounded-2xl cursor-pointer items-center text-2xl' style={{ width: '377px', background: 'linear-gradient(45deg, #ff808b, #f79099)' }}>
          <span className='text-4xl'>+</span>
          <h2>Add New</h2>
        </div>
      </Link>
    </div>
  );
}
const NewClasses = () => {
  return (
    <div className='m-9 flex flex-col justify-center items-center w-full'>
      <input type='text' name='fileToUpload' className='bod-in w-1/3 mt-2 p-2' placeholder='Name of Class' required />
      <input type='text' name='fileToUpload' className='bod-in w-1/3 mt-2 p-2' placeholder='Monthly Tution Fees' required />
      {/* <input type='file' name='fileToUpload' className='bod-in w-full p-2' required /> */}
      <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-1/3 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
        <option selected>---- Select Class Teacher ----</option>
      </select>
      <button className='flex items-center bg-blue-500 rounded-sm mt-2 p-5 text-white'><IoMdCheckmark color='white' /> <span className='pl-2'>Submit</span></button>
    </div>
  );
}
const EditORDelete = () => {
  return (
    <div className='m-9 flex flex-col justify-center items-center w-full'>
      <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-1/3 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
        <option selected>---- Select Class Teacher ----</option>
      </select>
      <hr />
      <div className='flex'>
        <button className='flex items-center bg-blue-500 rounded-sm mt-2 p-2 text-white'><TfiReload color='white' /> <span className='pl-2'>Update</span></button>
        <button className='flex items-center bg-red-500 rounded-sm ml-2 mt-2 p-2 text-white'><IoMdClose color='white' /> <span className='pl-2'>Delete</span></button>
      </div>
    </div>
  );
}
// Subjects
const Subjects = () => {
  return (
    <div className='h-full w-full p-9'>
      {/* <AssignSubjects /> */}
      {/* <ClassesWithSubjects /> */}
    </div>
  );
}
const ClassesWithSubjects = () => {
  return (
    <div className='p-9 flex'>
      <div className='hover:shadow-2xl shadow rounded-2xl flex flex-col px-8 w-1/2'>
        <div className='flex justify-between' style={{ padding: '25px 15px' }}>
          <span style={{ color: '#5e81f4' }}>10</span>
          <span className='p-2' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)' }}><FaPencilAlt color='white' /></span>
        </div>
        <table className='p-5'>
          <thead className='p-2'>
            <tr className='text-left' style={{ backgroundColor: 'rgba(0,0,0,.05)', color: '#4d4cac' }}>
              <th>Subject Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maths</td>
              <td>62</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to='/eSkooly/Subjects/Assign-Subjects'>
        <div className='hover:shadow-2xl shadow flex flex-col p-9 m-3 text-white rounded-2xl cursor-pointer bg-red-400 items-center text-2xl' style={{ width: '377px', background: 'linear-gradient(45deg, #ff808b, #f79099)' }}>
          <span className='text-4xl'>+</span>
          <h2 className='font-bold'>Add Subject</h2>
        </div>
      </Link>
    </div>
  );
}
const AssignSubjects = () => {
  return (
    <div className='flex flex-col m-9 justify-center items-center w-full'>
      <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-3/6 bod-in mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
        <option selected>---- Select Class ----</option>
      </select>
      <div className='flex justify-center w-3/6 mt-3'>
        <input type='text' placeholder='Name of Subject' className='w-3/5 p-2 bod-in' />
        <input type='number' placeholder='Marks' className='w-2/5 bod-in p-2' />
      </div>
      <div className='flex'>
        <button className='flex items-center bg-blue-500 rounded-3xl mt-2 p-1 text-white'><FaPlus /> <span className='pl-2'>Add More</span></button>
        <button className='flex items-center bg-red-400 rounded-3xl ml-2 mt-2 p-1 text-white justify-center'><FaMinus /> <span className='pl-2'>Remove</span></button>
      </div>
      <hr />
      <div className='flex justify-center'><button className='flex items-center bg-blue-400 rounded-sm mt-7 p-2 px-5 text-white'><FaPlus color='white' /> <span className='pl-2'>Add Subjects</span></button></div>
    </div>
  );
}
const Students = () => {
  return (
    <div className='h-screen w-full overflow-auto p-9' style={{ backgroundColor: '#f3f3f3' }}>
      {/* <AllStudents /> */}
      {/* <AddNew /> */}
      {/* <AdmissionLetter /> */}
      <IDCard />
    </div>
  );
}
const AllStudents = () => {
  return (
    <div className='h-screen w-full overflow-auto p-9 '>
      <div className='flex items-center justify-between'>
        <div className='w-3/5 flex'>
          <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
          <div className='flex w-1/2 items-center'><select className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
        </div>
        <div className='flex h-10' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><TfiReload className='h-full w-16 p-3 cursor-pointer' /><AiOutlineIdcard className='h-full w-16 p-3 cursor-pointer' /> <TfiPrinter className='h-full p-3 w-16 cursor-pointer' /></div>
      </div>
      <div className='flex p-3'>
        <div className='bg-white flex flex-col justify-center items-center rounded-xl p-6 m-3'>
          <img src='https://eskooly.com/bb/uploads/students/no-image.png' alt='person-logo' style={{ height: '80px', width: '80px' }} />
          <span style={{ fontSize: '11px', color: '#333' }}> 4582333</span>
          <b style={{ fontSize: '11px', color: '#555' }}>Anuj Pandey</b>
          <div className='flex'>
            <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #9698d6, #a9abdb)', borderRadius: '15px', margin: '2px' }}><CiSearch size='11px' color='white' /></div>
            <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #5e81f4, #7191f7)', borderRadius: '15px', margin: '2px' }}><FaPencilAlt size='11px' color='white' /></div>
            <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #ff808b, #f79099)', borderRadius: '15px', margin: '2px' }}><IoTrashOutline size='11px' color='white' /></div>
          </div>
        </div>
        <Link to='/eSkooly/Students/Add-Students'>
          <div className='flex flex-col p-8 m-3 text-white cursor-pointer mt-5 items-center justify-center' style={{ background: 'linear-gradient(45deg, #4b49ac, #5d5ba9)', borderRadius: '50%', height: '155px', width: '155px' }}>
            <FaPlus />
            {/* <span>+</span> */}
            <span className=''>Add Subject</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
const AddStudents = () => {
  return (
    <div className='overflow-auto p-9 h-screen w-full' style={{ backgroundColor: '#f3f3f3' }}>
      <div className='bg-white flex flex-wrap justify-between rounded-xl'>
        <div className=' flex items-center p-2 pt-3 pb-4' style={{ borderRadius: '10px', fontSize: '16px' }}><strong className='' style={{ borderRight: '1px solid #777', paddingRight: '10px', marginRight: '10px' }}>Students</strong> <TiHomeOutline /> <span> - Admission Form</span></div>
        <button className='flex items-center py-2 px-3 cursor-pointer text-white font-semibold m-2 rounded-3xl' style={{ background: 'linear-gradient(45deg, #7878e8, #8787e5)', lineHeight: '16px', fontSize: '11px' }}><CiImport color='white' /> <span className='pl-2'>Import Students</span></button>
      </div>
      <h3 className='text-center mt-3 font-semibold w-full text-3xl' style={{ color: '#ff808b' }}>Admission Form</h3>
      <div>
        <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', marginBottom: '20px', padding: '10px' }}>
          <span className=''>Student Information</span>
          <span>[ *Required ]</span>
        </h5>
        <div className='disp-stu-adding my-1 mb-3'>
          <div className='flex flex-col wid-stu-adding mx-2'>
            <input type='text' name='studentname' placeholder='Name of the Student' className='outline-black p-2 focus:outline-blue-500' />
            <label className='flex flex-col mb-3'><span className='flex items-center'><span>Picture:</span><span className='pl-1' style={{ fontSize: '10px' }}>[ optional ]</span></span> <input type='file' name='fileToUpload' className='bod-in p-2 focus:outline-blue-500 bg-white' /><span className='' style={{ fontSize: '10px' }}>[ Max size 100KB ]</span></label>
          </div>
          <div className='wid-stu-adding mx-2' style={{ marginTop: '-10px' }}>
            <div class="relative flex items-center my-3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Last Reg: None</label>
              <input type="text" placeholder="Registration No:"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
            <label className='flex flex-col mb-3' style={{ marginTop: '-10px' }}>Admission Date: <input type='date' className='p-2 bod-in focus:outline-blue-500' /></label>
          </div>
          <div className='wid-stu-adding mx-2 flex flex-col'>
            <select className='p-2 mb-2 bod-in' required>
              <option>select class</option>
            </select>
            <input type='number' placeholder='Discount In Fee in %' className='p-2 bod-in' />
            <font className='mt-2' style={{ fontSize: '9px', color: '#999' }}>Student / Guardian mobile no to receive SMS / WhatsApp</font>
            <input type='tel' placeholder='Mobile No: e.g +44xxxxxxxxxx' className='p-2 bod-in' name='Gphone' />
          </div>
        </div>
        <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #9698d6, #a9abdb)', marginBottom: '20px', padding: '10px' }}>
          <span className=''>Other Info</span>
          <span>[ Optional ]</span>
        </h5>
        <div className='disp-stu-adding'>
          <div className='wid-stu-adding mx-2'>
            <div className="relative flex items-center my-3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Date of Birth</label>
              <input type='date' className='my-2 bod-in bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none' placeholder='dd-mm-yyyy' />
            </div>
            <select className='p-2 w-full my-2 bod-in' required>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input type='text' name='idmarks' placeholder='Any Identification Mark ?' className='outline-black p-2 w-full my-2 focus:outline-blue-500' />
            <select className='p-2 w-full my-2 bod-in' required>
              <option>Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
            <input type='text' name='disease' placeholder='Disease if any ?' className='outline-black w-full p-2 focus:outline-blue-500 my-2' />
          </div>
          <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
            <input type='text' name='scnic' placeholder='Student Birth Form ID / NIC' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
            <input type='text' name='cast' placeholder='Cast' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
            <input type='text' name='pr' placeholder='Previous School' className='my-2 outline-black p-2 w-full bod-in focus:outline-blue-500' />
            <input type='text' name='previousid' placeholder='Previous ID / Board Roll No.' className='outline-black bod-in my-2 p-2 w-full focus:outline-blue-500' />
            <input type='text' name='additionalinfo' placeholder='Any Additional Note' className='outline-black p-2 bod-in my-2 w-full focus:outline-blue-500' />
          </div>
          <div>
            <select className='p-2 w-full my-2 bod-in' name='os' required>
              <option>Orphen Student</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <select className='p-2 w-full my-2 bod-in' name='osc' required>
              <option>OSC</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <select className='p-2 w-full my-2 bod-in' name='religion' required>
              <option>Religion</option>
              <option>Hinduisiam</option>
              <option>Islam</option>
            </select>
            <select className='p-2 w-full my-2 bod-in' name='family' required>
              <option>Select Family</option>
            </select>
            <input type='number' name='noc' placeholder='Total Sibilings' className='outline-black p-2 bod-in my-2 w-full focus:outline-blue-500' />
          </div>
        </div>
        <div className='disp-stu-adding'>
          <div className='w-2/3 addr'>
            <input type='text' name='addrss' placeholder='Address' className='outline-black p-2 bod-in my-2 w-11/12 addr focus:outline-blue-500' />
          </div>
          <button className='text-white flex p-2 px-5 my-2 mb-5 items-center rounded-3xl' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }}><FaPlus color='white' /> <span className='pl-2'>Add Parents</span></button>
        </div>
        <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', marginBottom: '20px', padding: '10px' }}>
          <span className=''>FATHER INFO</span>
          <span>[ Optional ]</span>
        </h5>
        <div className='disp-stu-adding'>
          <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
            <input type='text' name='fnam' placeholder='Name of Father' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
            <input type='text' name='fedu' placeholder='Education' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
          </div>
          <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
            <input type='text' name='fcnic' placeholder='National ID No.' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
            <input type='text' name='fmob' placeholder='Mobile No' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
          </div>
          <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
            <input type='text' name='fo' placeholder='Occupation' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
            <input type='text' name='fp' placeholder='Profession' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
            <input type='text' name='fi' placeholder='Income' className='my-2 outline-black p-2 w-full bod-in focus:outline-blue-500' />
          </div>
        </div>
        <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #5e81f4, #7191f7)', marginBottom: '20px', padding: '10px' }}>
          <span className=''>MOTHER INFO</span>
          <span>[ Optional ]</span>
        </h5>
        <div className='disp-stu-adding'>
          <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
            <input type='text' name='mnam' placeholder='Name of Mother' className='outline-black bod-in p-2 my-2 mx-2 focus:outline-blue-500 w-full mb2' />
            <input type='text' name='medu' placeholder='Education' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
          </div>
          <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
            <input type='text' name='mcnic' placeholder='National ID No.' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
            <input type='text' name='mmob' placeholder='Mobile No' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
          </div>
          <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
            <input type='text' name='mo' placeholder='Occupation' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
            <input type='text' name='mp' placeholder='Profession' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
            <input type='text' name='mi' placeholder='Income' className='my-2 outline-black p-2 w-full bod-in focus:outline-blue-500' />
          </div>
        </div>
        <hr />
        <div className='mb-20 mt-5 flex inlin justify-center'>
          <button className='flex items-center text-white' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', padding: '10px 19px', fontSize: '15px', borderRadius: '2px' }}><TfiReload color='white' /> <span className='pl-2'>Reset</span></button>
          <button className='flex items-center text-white justify-center ml-3' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button>
        </div>
      </div>
    </div>
  );
}
const AdmissionLetter = () => {
  return (
    <div className='h-screen m-9 w-full'>
      <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' /></div>
    </div >
  );
}
const IDCard = () => {
  return (
    <div className='m-9'>
      <div className='flex items-center justify-between'>
        <div className='w-3/5 flex m-2'>
          <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
          <div className='flex w-1/2 items-center'><select className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
        </div>
        <div className='flex h-10' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><TfiReload className='h-full w-16 p-3 cursor-pointer' /><TfiPrinter className='h-full p-3 w-16 cursor-pointer' /></div>
      </div>
    </div>
  );
}

const PrintBasicList = () => {
  return (
    <div className='p-9'>
      <div className='flex w-1/4 items-center'><select className='focus:outline-none p-3 ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
      <div className='flex items-center justify-between text-black mt-6'>
        <div className='flex items-center'>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Copy</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>CSV</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Excel</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>PDF</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Print</button>
          <button className='flex items-center cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}><span>Column Visibility</span><span style={{ top: '-2px', color: 'rgba(70, 70, 70, 0.75)', fontSize: '8px', paddingLeft: '10px', lineHeight: '1em', }}>▼</span></button>
        </div>
        <div className='text-right'>
          <label className='mb-1'>Search: <input type='search' className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px', }} /></label>
        </div>
      </div>
      <table className='text-black bg-white w-full'>
        <thead>
          <tr className='h-0 font-bold' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)' }}>
            <th className='py-0 border-y-0 h-0' style={{ width: '37px', borderRight: '1px solid white', }}><div className='overflow-hidden'>Sr</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>Registration No.</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '69px', borderRight: '1px solid white' }}><div className='overflow-hidden'>Name</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '72px', borderRight: '1px solid white' }}><div className='overflow-hidden'>Father</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '65px', borderRight: '1px solid white' }}><div className='overflow-hidden'>Class</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>Fee Remainings</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '71px', }}><div className='overflow-hidden'>Phone</div></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='' colSpan={8} style={{ verticalAlign: 'middle', textAlign: 'center' }}>No data Available in the table</td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-between'>
        <div className='' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', }}><span>Showing 0 to 0 of 0 entries</span></div>
        <div className='text-right m-0 flex flex-end cursor-default' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', marginTop: '2px', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none', }}>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Previous</button>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Next</button>
        </div>
      </div>
    </div>
  );
}
const Homework = () => {
  return (
    <div></div>
  );
}
const PromoteStudents = () => {
  return (
    <div className='m-9'>
      <div className='flex items-center justify-between'>
        <div className='w-3/5 flex m-2'>
          <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
          <div className='flex w-1/2 items-center'><select className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
        </div>
        <div className=' h-10' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><TfiReload className='h-full w-16 p-3 cursor-pointer' /></div>
      </div>
      <form className='mt-5 w-full'>
        <table className='mb-4 w-full' style={{ color: '#9698d6' }}>
          <tbody>
            <tr className='w-full' style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
              <td style={{ padding: '.75rem' }}><b>ID</b></td>
              <td style={{ padding: '.75rem' }}><b>Name</b></td>
              <td style={{ padding: '.75rem' }}><b>Class</b></td>
              <td style={{ padding: '.75rem' }}><b>P/D in</b></td>
            </tr>
          </tbody>
        </table>
        <div className='text-center'>
          <button className='text-white bg-blue-500 py-2 px-10'>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

const AllEmployees = () => {
  return (
    <div className='h-screen w-full overflow-auto p-9'>
      <div className='flex items-center justify-between'>
        <div className='w-3/5'>
          <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Employee' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
        </div>
        <div className='flex h-10' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><TfiReload className='h-full w-16 p-3 cursor-pointer' /><AiOutlineIdcard className='h-full w-16 p-3 cursor-pointer' /> <TfiPrinter className='h-full p-3 w-16 cursor-pointer' /></div>
      </div>
      <div className='flex p-3'>
        <div className='bg-white flex flex-col justify-center items-center rounded-xl p-6 m-3'>
          <img src='https://eskooly.com/bb/uploads/employees/no-image.png' alt='person-logo' style={{ height: '80px', width: '80px' }} />
          <span style={{ fontSize: '11px', color: '#333' }}> Anuj Pandey</span>
          <b style={{ fontSize: '11px', color: '#555' }}>Teacher</b>
          <div className='flex'>
            <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #9698d6, #a9abdb)', borderRadius: '15px', margin: '2px' }}><CiSearch size='11px' color='white' /></div>
            <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #5e81f4, #7191f7)', borderRadius: '15px', margin: '2px' }}><FaPencilAlt size='11px' color='white' /></div>
            <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #ff808b, #f79099)', borderRadius: '15px', margin: '2px' }}><IoTrashOutline size='11px' color='white' /></div>
          </div>
        </div>
        <Link to='/eSkooly/Employees/Add-Employee'>
          <div className='flex flex-col p-8 text-white cursor-pointer mt-5 items-center justify-center' style={{ background: 'linear-gradient(45deg, #4b49ac, #5d5ba9)', borderRadius: '50%', height: '155px', width: '155px' }}>
            <FaPlus />
            {/* <span>+</span> */}
            <span className=''>Add Subject</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

const AddEmployee = () => {
  return (
    <div className='overflow-auto p-9 h-screen w-full' style={{ backgroundColor: 'white' }}>
      {/* <div className='bg-white flex flex-wrap justify-between rounded-xl'>
        <div className=' flex items-center p-2 pt-3 pb-4' style={{ borderRadius: '10px', fontSize: '16px' }}><strong className='' style={{ borderRight: '1px solid #777', paddingRight: '10px', marginRight: '10px' }}>Students</strong> <TiHomeOutline /> <span> - Admission Form</span></div>
        <button className='flex items-center py-2 px-3 cursor-pointer text-white font-semibold m-2 rounded-3xl' style={{ background: 'linear-gradient(45deg, #7878e8, #8787e5)', lineHeight: '16px', fontSize: '11px' }}><CiImport color='white' /> <span className='pl-2'>Import Students</span></button>
      </div> */}
      <h3 className='text-center mb-2 font-semibold w-full text-3xl' style={{ color: '#ff808b' }}>Employee Form</h3>
      <div>
        <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', marginBottom: '20px', padding: '10px' }}>
          <span className=''>Basic Information</span>
          <span>[ *Required ]</span>
        </h5>
        <div className='disp-stu-adding my-1 mb-3'>
          <div className='flex flex-col wid-stu-adding mx-2'>
            <input type='text' name='studentname' placeholder='Name of the Employee' className='outline-black p-2 focus:outline-blue-500' />
            <label className='flex flex-col mb-3'><span className='flex items-center'><span>Picture:</span><span className='pl-1' style={{ fontSize: '10px' }}>[ optional ]</span></span> <input type='file' name='fileToUpload' className='bod-in p-2 focus:outline-blue-500 bg-white' /><span className='' style={{ fontSize: '10px' }}>[ Max size 100KB ]</span></label>
          </div>
          <div className='wid-stu-adding mx-2' style={{ marginTop: '-10px' }}>
            <div class="relative flex items-center my-3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Last Reg: None</label>
              <input type="text" placeholder="Registration No:"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
            <label className='flex flex-col mb-3' style={{ marginTop: '-10px' }}>Joining Date: <input type='date' className='p-2 bod-in focus:outline-blue-500' /></label>
          </div>
          <div className='wid-stu-adding mx-2 flex flex-col'>
            <select className='p-2 mb-2 bod-in' required>
              <option>----Employee Type----</option>
            </select>
            <input type='number' placeholder='Monthly Salary' className='p-2 bod-in' />
            {/* <font className='mt-2' style={{ fontSize: '9px', color: '#999' }}>Student / Guardian mobile no to receive SMS / WhatsApp</font>
            <input type='tel' placeholder='Mobile No: e.g +44xxxxxxxxxx' className='p-2 bod-in' name='Gphone' /> */}
          </div>
        </div>
        <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #9698d6, #a9abdb)', marginBottom: '20px', padding: '10px' }}>
          <span className=''>Other Info</span>
          <span>[ Optional ]</span>
        </h5>
        <div className='disp-stu-adding'>
          <div className='wid-stu-adding mx-2'>
            <input type='text' name='fnam' placeholder='Name of Father' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
            <input type='text' name='cnic' placeholder='CNIC' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
            <input type='text' name='edu' placeholder='Education' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
          </div>
          <div className='wid-stu-adding flex flex-col mx-2 mt-1'>
            <select className='p-2 w-full my-2 bod-in' required>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <select className='p-2 w-full my-2 bod-in' name='religion' required>
              <option>Religion</option>
              <option>Hinduisiam</option>
              <option>Islam</option>
            </select>
            <select className='p-2 w-full my-2 bod-in' required>
              <option>Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
          <div>
            <input type='text' name='health' placeholder='Experienct / Specialization' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
            <input type='email' name='email' placeholder='email' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
            <div className="relative flex items-center my-3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Date of Birth</label>
              <input type='date' className='my-2 bod-in bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none' placeholder='dd-mm-yyyy' />
            </div>
          </div>
        </div>
        <div className='disp-stu-adding mb-5'>
          <div className='w-2/3 addr'>
            <input type='text' name='addrss' placeholder='Address' className='outline-black p-2 bod-in my-2 w-11/12 addr focus:outline-blue-500' />
          </div>
          {/* <button className='text-white flex p-2 px-5 my-2 mb-5 items-center rounded-3xl' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }}><FaPlus color='white' /> <span className='pl-2'>Add Parents</span></button> */}
        </div>

        <hr />
        <div className='mb-20 mt-5 flex inlin justify-center'>
          <button className='flex items-center text-white' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', padding: '10px 19px', fontSize: '15px', borderRadius: '2px' }}><TfiReload color='white' /> <span className='pl-2'>Reset</span></button>
          <button className='flex items-center text-white justify-center ml-3' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button>
        </div>
      </div>
    </div>
  );
}
const JobLetter = () => {
  return (
    <div className='h-screen m-9 w-full'>
      <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Employee' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' /></div>
    </div >
  );
}
const ChartOfAccount = () => {
  return (
    <div className=' m-9 w-full flex'>
      <div className='min-w-60 w-2/6 p-3 bg-white shadow rounded hover:shadow-2xl'>
        <h5 className='text-center'>Add Chart Of Account</h5>
        <form className='flex flex-col'>
          <input type='text' name='head' placeholder='Name Of Head*' className='my-2 mx-1 p-3 bod-in outline-black focus:outline-blue-400' style={{ outlineWidth: '0.5px' }} />
          <select className='my-2 mx-1 p-3 bod-in focus:outline-blue-400'>
            <option>Type*</option>
            <option>Income</option>
            <option>Expense</option>
          </select>
          <hr />
          <div className='flex justify-center mt-4'><button type='submit' name='addHead' className='flex items-center m-2 p-2 px-4 justify-center cursor-pointer text-white' style={{ transition: 'all ease-in 0.3s', backgroundColor: '#FF5370', borderColor: '#FF5370' }}><FaPlus color='white' /><span className='pl-2'>Save Head</span></button></div>
        </form>
      </div>
      <div className='w-3/5 m-3 mt-0 ml-10'>
        <div className='flex justify-between'>
          <span>
            Show
            <select className='bg-transparent bod-in mx-1 p-2 py-1'>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            entries
          </span>
          <div className=''>
            <label className='mb-1'>Search: <input type='search' className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px', }} /></label>
          </div>
        </div>
        <div className="w-full mt-2">
          <table className="w-full" style={{ border: '1px solid #e9ecef', borderBottom: '1px solid #111' }}>
            <thead>
              <tr className='text-white' style={{ background: 'linear-gradient(45deg, #4b49ac, #5d5ba9)', borderBottom: '1px solid #111' }}>
                <th className='cursor-pointer text-left' style={{ width: '435px', padding: '10px 18px' }}>NAME OF THE HEAD</th>
                <th className='cursor-pointer text-left' style={{ width: '435px', padding: '10px 18px' }}>TYPE</th>
                <th className='cursor-pointer text-left' style={{ width: '435px', padding: '10px 18px' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className='' style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
                <td style={{ padding: '10px 18px' }}>Bus repair</td>
                <td style={{ padding: '10px 18px' }}>EXPENSE</td>
                <td style={{ padding: '10px 18px' }}>
                  <button className='cursor-pointer' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', padding: '8px 14px', lineHeight: '16px', fontSize: '11px', borderRadius: '2px' }}><IoTrashOutline color='white' /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex justify-between items-center'>
          <div className='' style={{ whiteSpace: 'nowrap', }}><span>Showing 1 to 1 of 1 entries</span></div>
          <div className='text-right m-0 flex flex-end cursor-default' style={{ whiteSpace: 'nowrap', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none', }}>
            <button className='m-1 mt-0 p-3 py-2' style={{ pointerEvents: 'none', }}>Previous</button>
            <button className='m-1 p-3 py-2 bod-in' style={{ color: '#333', pointerEvents: 'none', backgroundColor: 'rgba(0, 0, 0, 0)', backgroundImage: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(220, 220, 220) 100%)', border: '1px solid #979797', }}>1</button>
            <button className='m-1 mt-0' style={{ pointerEvents: 'none', }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const AddIncome = () => {
  return (
    <div className='m-9 w-full flex justify-center'>
      <div className='wid-stu-adding'>
        <h3 className='text-center font-bold' style={{ color: '#9698d6', fontSize: '1.75rem' }}>Add Income</h3>
        <hr />
        <form className='flex flex-col'>
          <input type='date' name='incomedate' placeholder='' className='bod-in my-1 mt-3 p-2 focus:outline-blue-500' required />
          <input type='text' name='incomename' placeholder='Income Description' className='bod-in my-1 p-2 focus:outline-blue-500' required />
          <input type='text' name='incomename' placeholder='Income Amount' className='bod-in my-1 p-2 focus:outline-blue-500' required />
          <hr className='mt-4' />
          <div className='flex justify-center mt-3'><button className='flex items-center text-white justify-center ml-3' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button></div>
        </form>
      </div>
    </div>
  );
}
const AddExpense = () => {
  return (
    <div className='m-9 w-full flex justify-center'>
      <div className='wid-stu-adding'>
        <h3 className='text-center font-bold' style={{ color: '#9698d6', fontSize: '1.75rem' }}>Add Expense</h3>
        <hr />
        <form className='flex flex-col'>
          <input type='date' name='expensedate' placeholder='' className='bod-in my-1 mt-3 p-2 focus:outline-blue-500' required />
          <input type='text' name='expensename' placeholder='Expense Description' className='bod-in my-1 p-2 focus:outline-blue-500' required />
          <input type='text' name='expensename' placeholder='Expense Amount' className='bod-in my-1 p-2 focus:outline-blue-500' required />
          <hr className='mt-4' />
          <div className='flex justify-center mt-3'><button className='flex items-center text-white justify-center ml-3' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button></div>
        </form>
      </div>
    </div>
  );
}
const AccountStatement = () => {
  return (
    <div className='p-9 w-full flex flex-col'>
      <div className='flex items-center justify-between w-full pr-14'>
        <div className='flex items-center mt-3'>
          <input type='date' name='expensedate' placeholder='' className='bod-in my-1 p-2 focus:outline-blue-500' required />
          <span className='mx-2'>To:</span>
          <input type='date' name='expensedate' placeholder='' className='bod-in my-1 p-2 focus:outline-blue-500' required />
          <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><CiSearch /><span className='pl-2'>Statement</span></button>
        </div>
        <div className='flex w-min'><div className='flex h-10 w-min' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><CiCalendar className='h-full p-3 w-16 cursor-pointer' /><TfiPrinter className='h-full p-3 w-16 cursor-pointer' /><TfiReload className='h-full w-16 p-3 cursor-pointer' /><RiDeleteBin5Line className='h-full w-16 p-3 cursor-pointer' /><RiFilterLine className='h-full p-3 w-16 cursor-pointer' /></div></div>
      </div>
      <div className=''>
        <table className="w-full " style={{ border: '1px solid #e9ecef', backgroundColor: 'transparent' }}>
          <thead>
            <tr className='text-black' style={{}}>
              <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Date</th>
              <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Description</th>
              <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Debit</th>
              <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Credit</th>
              <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Net Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr className='' style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
              <td></td>
              <td style={{ padding: '10px 18px' }} className=''><b>Total</b></td>
              <td style={{ padding: '10px 18px' }}>
                <b style={{ color: '#ff808b' }}>
                  $ 0 <br /> Expense
                </b>
              </td>
              <td style={{ padding: '10px 18px' }}>
                <b style={{ color: '#5e81f4' }}>
                  $ 0 <br /> Income
                </b>
              </td>
              <td style={{ padding: '10px 18px' }}>
                <b style={{ color: '#4b49ac' }}>
                  $ 0 <br /> Net Profit
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const GenerateBankChallan = () => {
  return (
    <div className='p-9 w-full flex flex-col items-center'>
      <div className='w-1/3 text-center'>
        <form>
          <h5>Generate for Single Student</h5>
          <div className='flex'>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fee Month</label>
              <input type="month"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Due Date</label>
              <input type="date"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fine After Due Date</label>
              <input type="number"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
          </div>
          <div>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Search Student</label>
              <input type="text" placeholder="Search Student"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
          </div>
          <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>Generate</button>
          <hr />
        </form>
      </div>
      <div className='w-1/3 text-center'>
        <form>
          <h5>Generate for Whole Class</h5>
          <div className='flex'>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fee Month</label>
              <input type="month"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Due Date</label>
              <input type="date"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fine After Due Date</label>
              <input type="number"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
          </div>
          <div>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Search Student</label>
              <select
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none"><option>-----SELECT CLASS-----</option></select>
            </div>
          </div>
          <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>Generate</button>
          <hr />
        </form>
      </div>
      <div className='w-1/3 text-center'>
        <form>
          <h5>Generate for Family</h5>
          <div className='flex'>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fee Month</label>
              <input type="month"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Due Date</label>
              <input type="date"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fine After Due Date</label>
              <input type="number"
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
            </div>
          </div>
          <div>
            <div class="relative flex items-center my-3 w-1/3">
              <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Search Student</label>
              <select
                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none"><option>-----SELECT CLASS-----</option></select>
            </div>
          </div>
          <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>Generate</button>
          <hr />
        </form>
      </div>
    </div>
  );
}
const CollectFee = () => {
  return (
    <div className='p-9 w-full flex flex-col items-center'>
      <div className='w-1/3 text-center'>
        <h5>Collect Fees for single student</h5>
        <div className="flex items-center justify-center">
          <input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' />
        </div>
      </div>
      <hr />
      <div className='w-1/3 text-center'>
        <h5>Collect Fees for family</h5>
        <form>
          <div class="relative flex items-center justify-center my-3 w-full">
            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Search Student</label>
            <input type="select-one" placeholder="Search Fmaily"
              class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
          <div className="flex justify-center">
            <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>Submit</button>
          </div>
          <hr />
        </form>
      </div>
      <hr />
      <div className='w-1/3 text-center'>
        <h5>Scan Paid Challan Slip</h5>
        <div className="flex justify-center">
          <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>Start Scanning</button>
        </div>
      </div>
      <hr />
    </div>
  );
}
const FeeSlip = () => {
  return (
    <div className='p-9 w-full flex flex-col items-center'>
      <div className="w-1/3 flex flex-col justify-center">
        <span className='text-center'>Fee Month</span>
        <div className='flex  justify-center'>
          <div class="relative flex items-center justify-center my-3 w-1/2">
            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fee Month</label>
            <input type="month"
              class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' />
        </div>
      </div>
    </div>
  );
}

const FeeDefaulters = () => {
  return (
    <div className='p-9 w-full flex flex-col'>
      <div className='flex justify-between'>
        <div className="flex items-center ">
          <input type='month' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' />
        </div>
        <span className='font-bold text-red-400 text-2xl'>Fee Defaulters</span>
        <div className='flex'>
          <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>List View</button>
          <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>Send Remainder</button>
        </div>
      </div>
      <div className='text-center mt-5'>
        <span className='font-bold text-violet-200 text-2xl'>No Fee Defaulters in ---------, ----</span>
      </div>
    </div>
  );
}
const PaySalary = () => {
  return (
    <div className='h-screen m-9 w-full'>
      <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Employee' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' /></div>
    </div >
  );
}
const SalarySlip = () => {
  return (
    <div className='h-screen m-9 w-full'>
      <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Employee' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' /></div>
    </div >
  );
}
const MarkStudentsAttendance = () => {
  return (
    <div className='p-9 w-full flex justify-center'>
      <div className='w-1/2 flex flex-col justify-center'>
        <div>
          <h6 className='text-center'>Mark Manual Attandance Class wise</h6>
          <form>
            <div className="flex flex-col items-center w-full">
              <div className="flex items-center "><input type='date' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
              <div className="flex items-center "><select className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required> <option>-----SELECT CLASS-----</option> </select></div>
              <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>Search</button>
            </div>
          </form>
        </div>
        <hr />
        <div className='flex flex-col justify-center'>
          <h6 className='text-center'>Mark Manual Attandance Class wise</h6>
          <div className='flex justify-center'>
            <span className='flex items-center text-white justify-center ml-3 px-8 bg-green-200' style={{ borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}>In Attendance</span>
            <span className='flex items-center text-white justify-center ml-3 px-8 bg-violet-200' style={{ borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}>Out Attendance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
const MarkEmployeesAttendance = () => {
  return (
    <div className='p-9 w-full flex justify-center'>
      <div className='w-1/2 flex flex-col justify-center'>
        <div>
          <h6 className='text-center'>Choose Employee Attendence Type</h6>
          <form>
            <div className="flex flex-col items-center w-full">
              <div className="flex items-center w-full"><input type='date' className='focus:outline-none ml-4 w-full' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /></div>
              <span className='flex items-center text-white justify-center ml-3 mt-3 px-8 bg-green-400' style={{ borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}>Mark Manual Attendance</span>
            </div>
          </form>
        </div>
        <hr className='h-2 mt-2' />
        <div className='flex flex-col justify-center'>
          {/* <h6 className='text-center'>Mark Manual Attandance Class wise</h6> */}
          <div className='flex justify-center'>
            <span className='flex items-center text-white justify-center ml-3 px-8 bg-violet-200' style={{ borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}>Using Card Scanner</span>
          </div>
        </div>
      </div>
    </div>
  );
}
const StudentsAttendenceReport = () => {
  return (
    <div className='p-9'>
      <div className='flex w-1/4 items-center'><select className='focus:outline-none p-3 ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
      <div className='flex items-center justify-between text-black mt-6'>
        <div className='flex items-center'>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Copy</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>CSV</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Excel</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>PDF</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Print</button>
          <button className='flex items-center cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}><span>Column Visibility</span><span style={{ top: '-2px', color: 'rgba(70, 70, 70, 0.75)', fontSize: '8px', paddingLeft: '10px', lineHeight: '1em', }}>▼</span></button>
        </div>
        <div className='text-right'>
          <label className='mb-1'>Search: <input type='search' className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px', }} /></label>
        </div>
      </div>
      <table className='text-black bg-white w-full' style={{ background: '', color: '#333', borderBottom: '1px solid #111' }}>
        <thead>
          <tr className='h-0 font-bold' style={{ borderBottom: '1px solid #111' }}>
            <th className='py-0 border-y-0 h-0' style={{ width: '37px', borderRight: '1px solid white', }}><div className='overflow-hidden'>DATE</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>DAY</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '69px', borderRight: '1px solid white' }}><div className='overflow-hidden'>ID</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '72px', borderRight: '1px solid white' }}><div className='overflow-hidden'>NAME</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '65px', borderRight: '1px solid white' }}><div className='overflow-hidden'>Class</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>STATUS</div></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
            <td className='' colSpan={7} style={{ verticalAlign: 'middle', textAlign: 'center' }}>No data Available in the table</td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-between'>
        <div className='' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', }}><span>Showing 0 to 0 of 0 entries</span></div>
        <div className='text-right m-0 flex flex-end cursor-default' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', marginTop: '2px', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none', }}>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Previous</button>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Next</button>
        </div>
      </div>
    </div>
  );
}
const EmployeeAttendenceReport = () => {
  return (
    <div className='p-9'>
      <div className='flex w-1/4 items-center'><select className='focus:outline-none p-3 ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
      <div className='flex items-center justify-between text-black mt-6'>
        <div className='flex items-center'>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Copy</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>CSV</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Excel</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>PDF</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Print</button>
          <button className='flex items-center cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}><span>Column Visibility</span><span style={{ top: '-2px', color: 'rgba(70, 70, 70, 0.75)', fontSize: '8px', paddingLeft: '10px', lineHeight: '1em', }}>▼</span></button>
        </div>
        <div className='text-right'>
          <label className='mb-1'>Search: <input type='search' className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px', }} /></label>
        </div>
      </div>
      <table className='text-black bg-white w-full' style={{ background: '', color: '#333', borderBottom: '1px solid #111' }}>
        <thead>
          <tr className='h-0 font-bold' style={{ borderBottom: '1px solid #111' }}>
            <th className='py-0 border-y-0 h-0' style={{ width: '37px', borderRight: '1px solid white', }}><div className='overflow-hidden'>DATE</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>DAY</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '69px', borderRight: '1px solid white' }}><div className='overflow-hidden'>ID</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '72px', borderRight: '1px solid white' }}><div className='overflow-hidden'>NAME</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '65px', borderRight: '1px solid white' }}><div className='overflow-hidden'>Type</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>STATUS</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'><b>Time</b><i>[Card Scanning]</i></div></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
            <td className='' colSpan={8} style={{ verticalAlign: 'middle', textAlign: 'center' }}>No data Available in the table</td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-between'>
        <div className='' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', }}><span>Showing 0 to 0 of 0 entries</span></div>
        <div className='text-right m-0 flex flex-end cursor-default' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', marginTop: '2px', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none', }}>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Previous</button>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Next</button>
        </div>
      </div>
    </div>
  );
}
const HomeWork = () => {
  return (
    <div className='p-9'>
      <div className='flex justify-between items-center p-3 rounded bg-white'>
        <div>
          <b>Homework</b>
          <span>|</span>
          <span>Homeworks</span>
        </div>
        <div>
          <button className='flex items-center text-white justify-center ml-3 px-8 bg-violet-300' style={{ borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}>Add Homework</button>
        </div>
      </div>
      <div className='flex items-center p-3 mt-2 bg-white rounded'>
        <div class="relative flex items-center my-3 mt-5 mx-2 w-1/4">
          <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Homework Date*</label>
          <input type="text" placeholder="******"
            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
        </div>
        <div class="relative flex items-center my-3 mx-2 mt-5 w-1/4">
          <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Class*</label>
          <select name="timezone" id='searchlist'
            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
            <option value="All Teachers">All Classes</option>
          </select>
        </div>
        <div class="relative flex items-center my-3 mx-2 mt-5 w-1/4">
          <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Teacher*</label>
          <select name="timezone" id='searchlist'
            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
            <option value="All Teachers">All Teachers</option>
          </select>
        </div>
        <button className='flex items-center text-white justify-center ml-3 mx-2 px-3 h-min py-2 rounded-3xl' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }}> Search</button>
      </div>
      <div className='mt-4 p-3 bg-white'>
        <span className='flex justify-center'>No Data Found!</span>
      </div>
    </div>
  );
}

const Messaging = () => {
  return (
    <div className='p-9'>
      <div className='flex'>
        <div className='shadow rounded hover:shadow-2xl hover:rounded-xl bg-white w-1/2 p-10 text-center flex flex-col'>
          <h5 className='cursor-pointer m-2 font-semibold' style={{ color: '#5e81f4', fontSize: '1.25rem' }}>COMPOSE A MESSAGE</h5>
          <label className='flex flex-col justify-center items-center my-3' style={{ fontSize: '12px', color: '#9698d6' }}>
            Send Message To*
            <select className='bg-transparent bod-in rounded-2xl w-1/5 py-2 px-3' style={{ fontSize: '14px', color: '#495057' }}>
              <option>All Students</option>
              <option>All Teachers</option>
              <option>Specific Class</option>
              <option>Specific Student</option>
              <option>Specific Teacher</option>
            </select>
          </label>
          <textarea id='message' rows='5' placeholder='Write your Message here...' className='bg-transparent bod-in rounded-2xl py-2 px-3 mt-3 focus:outline-blue-600' />
          <span>244 Character</span>
          <div className='flex justify-center'><button className='bg-transparent bod-in rounded w-max py-2 px-3 my-3'>Attach a file</button></div>
          <hr />
          <div className='flex justify-center'><button className='text-white text-bold bod-in rounded-xl w-max py-2 px-3 my-3' style={{ background: 'linear-gradient(45deg, #5e81f4, #7191f7)' }}>Send Message</button></div>
        </div>
        <div className='w-1/2 p-3 pl-6'>
          <div className='flex justify-between'>
            <h6 className='flex'>
              <span className='px-2' style={{ color: '#5e81f4' }}>Sent</span>
              <span className='px-2' style={{ color: '#9698d6' }}>All</span>
              <span className='px-2' style={{ color: '#4d4cac' }}>Chat ( 0 - 50 )</span>
            </h6>
            <h6>
              <span className='text-red-500'>Received</span>
            </h6>
          </div>
          <div className='flex justify-center text-white my-4'><button className='cursor-pointer rounded-xl' style={{ padding: '10px 19px', fontSize: '15px', background: 'linear-gradient(45deg, #9698d6, #a9abdb)' }}>Load More</button></div>
        </div>
      </div>
    </div>
  );
}

const FreeSMSGateWay = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <h3 className='font-bold'>Please Complete SMS Gateway Setup!</h3>
        <p>Click button below to start SMS Gateway setup. It's completely automatic. Just click and Wait!</p>
        <button className='text-white text-bold bod-in rounded-xl w-max py-2 px-3 my-3' style={{ background: 'linear-gradient(45deg, #5e81f4, #7191f7)' }}>Start Setup</button>
      </div>
    </div>
  );
}

const LiveClass = () => {
  const [check, setCheck] = useState(false);
  const [schedule, setSchedule] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <div className='p-9'>
      <div className='flex'>
        <div className='w-2/5'>
          <div className='flex justify-center'><button className='flex items-center mt-2 p-2 px-5 text-white' style={{ background: 'linear-gradient(87deg, #f5365c 0, #f56036 100%)', borderRadius: '20px' }}><span className='pl-2'>Host Meetings</span></button></div>
          <div class="relative flex items-center my-3 mt-5">
            <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Meeting Title*</label>
            <input type="text" placeholder="Meeting Title*"
              class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
          </div>
          <div class="relative flex items-center my-3 mt-5">
            <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Meeting ID*</label>
            <input type="text" placeholder="Meeting ID*"
              class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
          </div>
          <div class="relative flex items-center my-3 mt-5">
            <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Meeting with*</label>
            <input type="text" placeholder="Meeting with*"
              class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
          </div>
          <strong className='font-medium'>
            <input type='checkbox' name='schedule' onClick={() => { setCheck(!check) }} className='mr-1' />
            I want to schedule this meeting.
          </strong>
          {check && (
            <div>
              <div className='flex'>
                <div className='w-1/2'>
                  <div class="relative flex items-center my-3 mt-5">
                    <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Date*</label>
                    <input type="date"
                      class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                  </div>
                </div>
                <div className='ml-1 w-1/2'>
                  <div class="relative flex items-center my-3 mt-5">
                    <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Start Time*</label>
                    <input type="time"
                      class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                  </div>
                </div>
              </div>
              <div class="relative flex items-center my-3 mt-5">
                <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(45deg, #2840e0, #2c45e7)', borderRadius: '30px', border: '1px solid #999' }}>Duration*</label>
                <input type="text" placeholder="e.g 1 hour 30 minutes" name='duration'
                  class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
              </div>
            </div>
          )}
          <textarea className='w-full p-3 rounded-xl bod-in' rows={5} name='message' placeholder='write your message here, if any..' />
          <p>Max 244 Character</p>
          <div className='flex justify-center'><button className='flex items-center mt-2 p-2 px-5 text-white' style={{ background: 'linear-gradient(87deg, #f5365c 0, #f56036 100%)', borderRadius: '20px' }}><span className='pl-2'>Create & Join</span></button></div>
        </div>
        <div className='w-3/5 ml-5 rounded-2xl h-max'>
          <div className='rounded-2xl' style={{ backgroundImage: 'url(https://eskooly.com/bb/asserts/images/apploginbg.jpg)' }}>
            <div className='text-white p-8 flex flex-col items-center rounded-2xl acc-det-bg'>
              <h3 className='font-bold text-2xl '>{formatTime(time)}</h3>
              <span className='leading-4'>{formatDate(date)}</span>
            </div>
          </div>
          <h6 className='flex mt-3'>
            <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 0 ? 'text-white' : ''}`} style={{ background: schedule === 0 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(0) }}>All Meetings</span>
            <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 1 ? 'text-white' : ''}`} style={{ background: schedule === 1 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(1) }}>Today</span>
            <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 2 ? 'text-white' : ''}`} style={{ background: schedule === 2 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(2) }}>Tomorrow</span>
            <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 3 ? 'text-white' : ''}`} style={{ background: schedule === 3 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(3) }}>Self Hosted</span>
            <span className={`mx-2 p-1 px-3 cursor-pointer focus:ring-4 focus:ring-blue-300 rounded-2xl ${schedule === 4 ? 'text-white' : ''}`} style={{ background: schedule === 4 ? `linear-gradient(45deg, #2840e0, #2c45e7)` : 'rgb(209 213 219 / var(--tw-bg-opacity))' }} onClick={() => { setSchedule(4) }}>Invitations</span>
          </h6>
          <div className='overflow-auto' style={{ height: '580px' }}>
            <div className='flex flex-col items-center mt-4'>
              <img src='https://eskooly.com/bb/assets/liveclass.png' alt='peoples-logo' className='max-w-72 h-auto' />
              <br />
              <strong className='text-lg' style={{ color: '#999' }}>No Meeting Found.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const CreateNewExam = () => {
  return (
    <div className='m-9 w-full flex justify-center'>
      <div className='wid-stu-adding'>
        <h3 className='text-center font-bold' style={{ color: '#ff808b', fontSize: '1.75rem' }}>Add New Examination</h3>
        <hr />
        <form className='flex flex-col'>
          <input type='text' name='examname' placeholder='Examination Name' className='bod-in my-1 p-2 focus:outline-blue-500' required />
          <div className='flex w-full'>
            <div className='flex flex-col w-1/2'>
              <label>Starting Date:</label>
              <input type='date' name='fromdate' placeholder='' className='bod-in my-1 mt-3 p-2 focus:outline-blue-500' required />
            </div>
            <div className='flex flex-col w-1/2'>
              <label>Ending Date:</label>
              <input type='date' name='enddate' placeholder='' className='bod-in my-1 mt-3 p-2 focus:outline-blue-500' required />
            </div>
          </div>
          <hr className='mt-4' />
          <div className='flex justify-center mt-3'><button className='flex items-center text-white justify-center ml-3' style={{ backgroundColor: '#ff869a', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px', borderColor: '#ff869a' }}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button></div>
        </form>
      </div>
    </div>
  );
}
const EditORDeleteExam = () => {
  return (
    <div className='m-9 flex flex-col justify-center items-center w-full'>
      <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-1/3 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
        <option selected>---- Select Exam ----</option>
      </select>
      <hr />
      <div className='flex'>
        <button className='flex items-center bg-blue-500 rounded-sm mt-2 p-2 text-white'><TfiReload color='white' /> <span className='pl-2'>Update</span></button>
        <button className='flex items-center bg-red-500 rounded-sm ml-2 mt-2 p-2 text-white'><IoMdClose color='white' /> <span className='pl-2'>Delete</span></button>
      </div>
    </div>
  );
}
const AddORUpdateExam = () => {
  return (
    <div className='flex items-center justify-center p-9'>
      <div className='w-full flex flex-col items-center justify-center'>
        <h3 className='text-center text-xl font-bold text-red-600'>Add OR Update Exam</h3>
        <hr />
        <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-3/5 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
          <option selected>---- Select Class Teacher ----</option>
        </select>
        <button className='flex items-center bg-red-500 rounded-sm mt-2 p-1 px-2 text-white'><span className='pl-2'>Search</span></button>
      </div>
    </div>
  );
}
const ResultCard = () => {
  return (
    <div className='p-9'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-2/4 my-8'>
          <h4 className='text-center font-bold text-xl' style={{ color: '#5e81f4', }}>Student Wise Result [Single]</h4>
          <div className='flex'>
            <select className='focus:outline-none ml-4 w-1/2' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}>
              <option>-----SELECT EXAM-----</option>
              <option>-- LAST 2 EXAMS --</option>
              <option>-- LAST 3 EXAMS --</option>
              <option>-- LAST 4 EXAMS --</option>
            </select>
            <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' className='bg-blue-500' color='white' /></div>
          </div>
        </div>
        <hr />
        <div className='w-2/4 my-8'>
          <h4 className='text-center font-bold text-xl' style={{ color: '#ff808b', }}>Class Wise Result [Bulk]</h4>
          <div className='flex'>
            <select className='focus:outline-none ml-4 w-1/2' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}>
              <option>-----SELECT EXAM-----</option>
              <option>-- LAST 2 EXAMS --</option>
              <option>-- LAST 3 EXAMS --</option>
              <option>-- LAST 4 EXAMS --</option>
            </select>
            <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' className='bg-red-500' color='white' /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
const CreateNewTest = () => {
  return (
    <div className='flex items-center justify-center p-9'>
      <div className='w-full flex flex-col items-center justify-center'>
        {/* <h3 className='text-center text-xl font-bold text-red-600'>Add OR Update Exam</h3> */}
        <hr />
        <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-3/5 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
          <option selected>---- Select Class ----</option>
        </select>
        <button className='flex items-center bg-red-500 rounded-sm mt-2 p-1 px-2 text-white'><span className='pl-2'>Search</span></button>
      </div>
    </div>
  );
}
const TestResults = () => {
  return (
    <div className='p-9'>
      {/* <div className='flex w-1/4 items-center'><select className='focus:outline-none p-3 ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div> */}
      <div className='flex items-center justify-between text-black mt-6'>
        <div className='flex items-center'>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Copy</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>CSV</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Excel</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>PDF</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Print</button>
          <button className='flex items-center cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}><span>Column Visibility</span><span style={{ top: '-2px', color: 'rgba(70, 70, 70, 0.75)', fontSize: '8px', paddingLeft: '10px', lineHeight: '1em', }}>▼</span></button>
        </div>
        <div className='text-right'>
          <label className='mb-1'>Search: <input type='search' className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px', }} /></label>
        </div>
      </div>
      <table className='text-black bg-white w-full mt-3' style={{ background: '', color: '#333', borderBottom: '1px solid #111' }}>
        <thead>
          <tr className='h-0 font-bold' style={{ borderBottom: '1px solid #111' }}>
            <th className='py-0 border-y-0 h-0' style={{ width: '37px', borderRight: '1px solid white', }}><div className='overflow-hidden'>TEST DATE</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>ID</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '69px', borderRight: '1px solid white' }}><div className='overflow-hidden'>NAME</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '72px', borderRight: '1px solid white' }}><div className='overflow-hidden'>CLASS</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '65px', borderRight: '1px solid white' }}><div className='overflow-hidden'>SUBJECT</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>TOTAL MARKS</div></th>
            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>OBTAINED</div></th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
            <td className='' colSpan={8} style={{ verticalAlign: 'middle', textAlign: 'center' }}>No data Available in the table</td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-between'>
        <div className='' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', }}><span>Showing 0 to 0 of 0 entries</span></div>
        <div className='text-right m-0 flex flex-end cursor-default' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', marginTop: '2px', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none', }}>
          {/* <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Previous</button>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Next</button> */}
        </div>
      </div>
    </div>
  );
}
const StudentsReportCard = () => {
  return (
    <div className='h-screen m-9 w-full'>
      <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' /></div>
    </div >
  );
}
const StudentInfoReport = () => {
  return (
    <div className='p-9'>
      <div className='flex w-1/4 items-center'><select className='focus:outline-none p-3 ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
      <div className='flex items-center justify-between text-black mt-6'>
        <div className='flex items-center'>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Copy</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>CSV</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Excel</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>PDF</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Print</button>
          <button className='flex items-center cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}><span>Column Visibility</span><span style={{ top: '-2px', color: 'rgba(70, 70, 70, 0.75)', fontSize: '8px', paddingLeft: '10px', lineHeight: '1em', }}>▼</span></button>
        </div>
        <div className='text-right'>
          <label className='mb-1'>Search: <input type='search' className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px', }} /></label>
        </div>
      </div>
      <div className='relative overflow-auto'>
        <table className='text-black bg-white w-full'>
          <thead>
            <tr className='h-0 font-bold text-white' style={{ background: 'linear-gradient(87deg, #8898aa 0, #888aaa 100%)' }}>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white', }}><div className='overflow-hidden'>Sr</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>ID</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Name</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Father</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Class</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Discount in Fee</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Admission Date</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Date of Birth</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Age</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Gender</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>B-form</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Religion</div></th>
              <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Cast</div></th>
              <th className='py-0 border-y-0 h-0' style={{}}><div className='overflow-hidden'>Status</div></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td className='' colSpan={14} style={{ verticalAlign: 'middle', textAlign: 'center' }}>No data Available in the table</td> */}
              <td className='' style={{ verticalAlign: 'middle' }}>1</td>
              <td className='' style={{ verticalAlign: 'middle' }}>4582333</td>
              <td className='' style={{ verticalAlign: 'middle' }}>Anuj Pandey</td>
              <td className='' style={{ verticalAlign: 'middle' }}></td>
              <td className='' style={{ verticalAlign: 'middle' }}>10</td>
              <td className='' style={{ verticalAlign: 'middle' }}>10%</td>
              <td className='' style={{ verticalAlign: 'middle' }}>19-02-2024</td>
              <td className='' style={{ verticalAlign: 'middle' }}></td>
              <td className='' style={{ verticalAlign: 'middle' }}></td>
              <td className='' style={{ verticalAlign: 'middle' }}></td>
              <td className='' style={{ verticalAlign: 'middle' }}></td>
              <td className='' style={{ verticalAlign: 'middle' }}></td>
              <td className='' style={{ verticalAlign: 'middle' }}></td>
              <td className='' style={{ verticalAlign: 'middle' }}>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex justify-between'>
        <div className='' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', }}><span>Showing 0 to 0 of 0 entries</span></div>
        <div className='text-right m-0 flex flex-end cursor-default' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', marginTop: '2px', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none', }}>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Previous</button>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Next</button>
        </div>
      </div>
    </div>
  );
}
const ParentsInfoReport = () => {
  return (
    <div className='p-9'>
      <div className='flex w-1/4 items-center'><select className='focus:outline-none p-3 ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
      <div className='flex items-center justify-between text-black mt-6'>
        <div className='flex items-center'>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Copy</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>CSV</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Excel</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>PDF</button>
          <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Print</button>
          <button className='flex items-center cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}><span>Column Visibility</span><span style={{ top: '-2px', color: 'rgba(70, 70, 70, 0.75)', fontSize: '8px', paddingLeft: '10px', lineHeight: '1em', }}>▼</span></button>
        </div>
        <div className='text-right'>
          <label className='mb-1'>Search: <input type='search' className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px', }} /></label>
        </div>
      </div>
      <table className='text-black bg-white w-full'>
        <thead>
          <tr className='h-0 ' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)' }}>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white', }}><div className='overflow-hidden'>Sr</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Name</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Class</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Father</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Father CNIC</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Father Eduction</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Father Mobile</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Father Occupation</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Father Profession</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Father Income</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Mother</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Mother CNIC</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Mother Education</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Mother Mobile</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Mother Occupation</div></th>
            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Mother Profession</div></th>
            <th className='py-0 border-y-0 h-0' style={{}}><div className='overflow-hidden'>Mother Income</div></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td className='' colSpan={8} style={{ verticalAlign: 'middle', textAlign: 'center' }}>No data Available in the table</td> */}
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}>1</td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}>4582333</td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}>Anuj Pandey</td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}>10</td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}>0</td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}></td>
            <td className='' style={{ verticalAlign: 'middle', textAlign: 'center' }}>0</td>
          </tr>
        </tbody>
      </table>
      <div className='flex justify-between'>
        <div className='' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', }}><span>Showing 0 to 0 of 0 entries</span></div>
        <div className='text-right m-0 flex flex-end cursor-default' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', marginTop: '2px', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none', }}>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Previous</button>
          <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Next</button>
        </div>
      </div>
    </div>
  );
}
const LeaveCertificate = () => {
  return (
    <div className='p-9'>
      <div className='flex w-full justify-center items-center flex-col mt-8'>
        <div className='w-2/4'>
          <label className='font-bold'>School Leave Date:</label>
          <input type='date' className='w-full bod-in' />
        </div>
        <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '47%' }} required /> <CiSearch size='25px' /></div>
      </div>
    </div>
  );
}
const CharacterCertificate = () => {
  return (
    <div className='p-9'>
      <div className='flex w-full justify-center items-center flex-col mt-8'>
        <div className='w-2/4'>
          <label className='font-bold'>School Leave Date:</label>
          <input type='date' className='w-full bod-in' />
        </div>
        <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '47%' }} required /> <CiSearch size='25px' /></div>
      </div>
    </div>
  );
}
const Pages = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedSubTab, setSelectedSubTab] = useState(null);
  const [sideBar, setSideBar] = useState(true);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };
  // const [selectedTabName, setSelectedTabName] = useState("");
  // const handleTabChange = (tabIndex, tabName) => {
  //   setSelectedTab(tabIndex);
  //   setSelectedTabName(tabName);
  // };
  const handleTabChange = (tabIndex, subTabIndex) => {
    setSelectedTab(tabIndex);
    setSelectedSubTab(subTabIndex);
    // setSelectedTabName(tabName);
  };
  return (
    <div className='bg-gray-100 w-full h-screen overflow-hidden'>
      <PageNav sideBar={sideBar} toggle={toggleSideBar} />
      <div className='flex '>
        {sideBar ? <SideNavPage selectedTab={selectedTab} selectedSubTab={selectedSubTab} onTabChange={handleTabChange} /> : null}
        {/* {SideNavItems.map((items) => (
        <div key={items.idx === selectedTab}>
          {items.goto}
        </div>
      ))} */}
        {/* {console.log(selectedTabName)} */}
        {/* {selectedTabName} */}
        {/* <Dashboard /> */}
        {/* <InstitureProfile /> */}
        {/* <DetailsForFeeChallan /> */}
        {/* <FeeParticulars /> */}
        {/* <GeneralSettings /> */}
        {/* <Classes /> */}
        {/* <Subjects /> */}
        <div className='flex flex-col flex-grow'>
          {/* <Students /> */}
          {/* <Switch>
            <Route path="/general-settings/institute-profile" component={GeneralSettings.InstitureProfile} />
            <Route path="/general-settings/fee-particulars" component={GeneralSettings.FeeParticulars} />
          </Switch> */}
          <Routes>
            <Route path='/eSkooly' Component={Dashboard} defaultValue />
            <Route path='/eSkooly/General-Settings/Institute-Profile' element={<InstitureProfile />} />
            <Route path='/eSkooly/General-Settings/Fee-Particulars' element={<FeeParticulars />} />
            <Route path='/eSkooly/General-Settings/Details-For-Fee-Challan' element={<DetailsForFeeChallan />} />
            <Route path='/eSkooly/General-Settings/Rules&Regulations' element={<RulesAndRegulations />} />
            <Route path='/eSkooly/General-Settings/Marks-Grading' element={<MarksGradings />} />
            <Route path='/eSkooly/General-Settings/Theme&Language' element={<ThemeAndLanguage />} />
            <Route path='/eSkooly/General-Settings/Account-Settings' element={<AccountSettings />} />
            <Route path='/eSkooly/Classes/All-Classes' element={<AllClasses />} />
            <Route path='/eSkooly/Classes/New-Class' element={<NewClasses />} />
            <Route path='/eSkooly/Classes/Edit-Or-Delete' element={<EditORDelete />} />
            <Route path='/eSkooly/Subjects/Classes-With-Subjects' element={<ClassesWithSubjects />} />
            <Route path='/eSkooly/Subjects/Assign-Subjects' element={<EditORDelete />} />
            <Route path='/eSkooly/Students/All-Students' element={<AllStudents />} />
            <Route path='/eSkooly/Students/Add-Students' element={<AddStudents />} />
            <Route path='/eSkooly/Students/Admission-Letter' element={<AdmissionLetter />} />
            <Route path='/eSkooly/Students/Student-ID-Cards' element={<IDCard />} />
            <Route path='/eSkooly/Students/Print-Basic-Lists' element={<PrintBasicList />} />
            <Route path='/eSkooly/Students/Promote-Students' element={<PromoteStudents />} />
            <Route path='/eSkooly/Employees/All-Employees' element={<AllEmployees />} />
            <Route path='/eSkooly/Employees/Add-Employee' element={<AddEmployee />} />
            {/* <Route path='/eSkooly/Employees/Staff-ID-Card' element={<AllEmployees />} /> */}
            <Route path='/eSkooly/Employees/Job-Letter' element={<JobLetter />} />
            <Route path='/eSkooly/Accounts/Chart-Of-Account' element={<ChartOfAccount />} />
            <Route path='/eSkooly/Accounts/Add-Income' element={<AddIncome />} />
            <Route path='/eSkooly/Accounts/Add-Expense' element={<AddExpense />} />
            <Route path='/eSkooly/Accounts/Account-Statement' element={<AccountStatement />} />
            <Route path='/eSkooly/Fees/Generate-Bank-Challan' element={<GenerateBankChallan />} />
            <Route path='/eSkooly/Fees/Collect-Fee' element={<CollectFee />} />
            <Route path='/eSkooly/Fees/Fee-Slip' element={<FeeSlip />} />
            <Route path='/eSkooly/Fees/Fee-Defaulters' element={<FeeDefaulters />} />
            <Route path='/eSkooly/Salary/Pay-Salary' element={<PaySalary />} />
            <Route path='/eSkooly/Salary/Salary-Slip' element={<SalarySlip />} />
            <Route path='/eSkooly/Attendance/Mark-Student-Attendance' element={<MarkStudentsAttendance />} />
            <Route path='/eSkooly/Attendance/Mark-Employee-Attendance' element={<MarkEmployeesAttendance />} />
            <Route path='/eSkooly/Attendance/Student-Attendance-Report' element={<StudentsAttendenceReport />} />
            <Route path='/eSkooly/Attendance/Employee-Attendance-Report' element={<EmployeeAttendenceReport />} />
            <Route path='/eSkooly/Homework' element={<HomeWork />} />
            <Route path='/eSkooly/Messaging' element={<Messaging />} />
            <Route path='/eSkooly/SMS-Services/Free-SMS-Gateway' element={<FreeSMSGateWay />} />
            <Route path='/eSkooly/Live-Class' element={<LiveClass />} />
            <Route path='/eSkooly/Exams/Create-New-Exam' element={<CreateNewExam />} />
            <Route path='/eSkooly/Exams/Edit-OR-Delete' element={<EditORDeleteExam />} />
            <Route path='/eSkooly/Exams/Add-OR-Update-Exam-Marks' element={<AddORUpdateExam />} />
            <Route path='/eSkooly/Exams/Result-Card' element={<ResultCard />} />
            <Route path='/eSkooly/Class-Test/Create-Class-Test' element={<CreateNewTest />} />
            <Route path='/eSkooly/Class-Test/Test-Results' element={<TestResults />} />
            <Route path='/eSkooly/Reports/Student-Report-Card' element={<StudentsReportCard />} />
            <Route path='/eSkooly/Reports/Student-Info-Report' element={<StudentInfoReport />} />
            <Route path='/eSkooly/Reports/Parents-Info-Report' element={<ParentsInfoReport />} />
            <Route path='/eSkooly/Certificates/Leave-Certificate' element={<LeaveCertificate />} />
            <Route path='/eSkooly/Certificates/Character-Certificate' element={<CharacterCertificate />} />
          </Routes>
        </div>

        {/* {selectedSubTab !== null ? (
          selectedTab === 1 ? (
            <GeneralSettings subtab={selectedSubTab} />
          ) : null
        ) : (
          selectedTab === 0 ? <Dashboard /> : (
            selectedTab === 11 ? <Homework /> : null
          )
        )} */}
      </div>
    </div>
  )
}

export default Pages;
export { Dashboard };