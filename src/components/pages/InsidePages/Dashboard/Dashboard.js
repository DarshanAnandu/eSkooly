import { FaRegUser } from "react-icons/fa6";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LuDollarSign } from "react-icons/lu";
import { TfiTarget } from "react-icons/tfi";
import { CiWallet } from "react-icons/ci";
import { FaWindows, FaApple } from "react-icons/fa";
import { TfiFaceSad } from "react-icons/tfi";

const Dashboard = () => {
    const Display = () => {
        return (
            <div className="p-8">
                <div className=' flex flex-wrap justify-between' style={{ '@media(max-width: 675px)': { flexDirection: 'column' } }}>{/*  sm:justify-start md:justify-center lg:justify-between xl:justify-around */}
                    <div className='p-6 display-card min-h-36 m-2 flex flex-col bg-m-dblue hover:shadow-2xl rounded-2xl text-white'>
                        <h6 className='mb-3 text-lg font-semibold'>Total Students</h6>
                        <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
                            <span><FaRegUser /></span>
                            <span>0</span>
                        </h2>
                        <p className='flex justify-between'>This Month <span>0</span></p>
                    </div>
                    <div className='p-6 display-card min-h-36 m-2 flex flex-col bg-m-gray hover:shadow-2xl rounded-2xl text-white'>
                        <h6 className='mb-5'>Total Employees</h6>
                        <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
                            <span><HiOutlineBriefcase size="36px" /></span>
                            <span>0</span>
                        </h2>
                        <p className='flex justify-between'>This Month <span>0</span></p>
                    </div>
                    <div className='p-6 display-card min-h-36 m-2 flex flex-col hover:shadow-2xl bg-red-400 rounded-2xl text-white'>
                        <h6 className='mb-5'>Revenue</h6>
                        <h2 className='flex mb-2 justify-between font-semibold items-center text-4xl'>
                            <span><LuDollarSign /></span>
                            <span>0</span>
                        </h2>
                        <div className='flex justify-between'>
                            <p className=''>This Month </p>
                            <div className='flex items-center'><LuDollarSign /> <span>0</span></div>
                        </div>
                    </div>
                    <div className='p-6 display-card min-h-36 m-2 flex flex-col hover:shadow-2xl bg-blue-500 rounded-2xl text-white'>
                        <h6 className='mb-5'>Total Profit</h6>
                        <h2 className='flex mb-2 justify-between font-semibold text-4xl'>
                            <span><LuDollarSign /></span>
                            <span>0</span>
                        </h2>
                        <div className='flex justify-between'>
                            <p className=''>This Month </p>
                            <div className='flex items-center'><LuDollarSign /> <span>0</span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    const GreetingCard = () => {
        return (
            <div className='bg-red-100 flex justify-around w-full p-3 rounded-xl min-w-40 mb-0'>
                <div>
                    <h4 className='' style={{ color: '#ff808b', marginBottom: '5px', fontSize: '14px', }}>Welcome to Admin Dashboard</h4>
                    <p style={{ color: '#777', marginBottom: '1rem', fontSize: '14px', }}>Your Account is not Verified yet! <br />
                        Please Verify your email address. <span className='text-blue-700'>Verify now!</span></p>
                </div>
                <img src='https://eskooly.com/bb/assets/images/admin-message.png' className='h-24 mar-min items-center pic-none' alt='admin-message-img' />
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
            <div className='flex justify-around min-w-min w-full bg-sms rounded-xl text-white p-3 pl-5 hover:shadow-2xl'>
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
            <div className='flex h-full w-full fd' style={{ '@media(max-width: 992px)': { flexDirection: 'column' } }}>
                <div className='h-full w-3/5 m-14 wd mt-0'>
                    <GreetingCard />
                    <TodayAbsentStudents />
                    <TodayPresentEmployees />
                    <NewAdmissions />
                </div>
                <div className='h-full w-2/5 mr-12 fd mtt'>
                    <Estimation />
                    <SMS />
                    <SimpleStat />
                    <Desktop />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;