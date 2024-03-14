import React from 'react';
import { TiHomeOutline } from 'react-icons/ti';

const InnerJobLetter = () => {
    return (
        <div className="p-9 overflow-auto">
            <div className="flex justify-between items-center p-3 rounded bg-white">
                <div className="flex items-center">
                    <b>Employees</b>
                    <span className="px-2">|</span>
                    <TiHomeOutline />
                    <span className="px-1">- Job Letter</span>
                </div>
            </div>
            <div className='flex bg-[#fff] p-4 my-4 rounded-[15px]'>
                <div className='w-[25%] flex flex-col items-center justify-center'>
                    <img className='h-[100px] w-[100px] rounded-[50%]' src='https://eskooly.com/bb/uploads/employees/no-image.png' alt='' />
                    <h4 className='font-semibold text-[20px]'>Anuj Pandey</h4>
                </div>
                <div className='w-[25%] text-[10px]'>
                    <div className='relative'>
                        <span className='text-[#9698d6]' style={{ borderBottom: '1.5px solid #999' }}>Registration/ID</span>
                        <div className='flex'>
                            <img className='h-[14px] w-[14px]' src='https://eskooly.com/bb/assets/arrow-down.png' alt='' />
                            <strong className='pt-0 text-[12px] pl-2'>87965</strong>
                        </div>
                    </div>
                    <div className='relative'>
                        <span className='text-[#9698d6]' style={{ borderBottom: '1.5px solid #999' }}>Employee Role</span>
                        <div className='flex'>
                            <img className='h-[14px] w-[14px]' src='https://eskooly.com/bb/assets/arrow-down.png' alt='' />
                            <strong className='pt-0 text-[12px] pl-2'>Teacher</strong>
                        </div>
                    </div>
                    <div className='relative'>
                        <span className='text-[#9698d6]' style={{ borderBottom: '1.5px solid #999' }}>Date of Joining</span>
                        <div className='flex'>
                            <img className='h-[14px] w-[14px]' src='https://eskooly.com/bb/assets/arrow-down.png' alt='' />
                            <strong className='pt-0 text-[12px] pl-2'>19 February, 2024</strong>
                        </div>
                    </div>
                    <div className='relative'>
                        <span className='text-[#9698d6]' style={{ borderBottom: '1.5px solid #999' }}>Account Status</span>
                        <div className='flex'>
                            <img className='h-[14px] w-[14px]' src='https://eskooly.com/bb/assets/arrow-down.png' alt='' />
                            <strong className='pt-0 text-[12px] text-[#2ed8b6] pl-2'>Active</strong>
                        </div>
                    </div>
                </div>
                <div className='w-[33.3%] text-[10px]'>
                    <div className='relative'>
                        <span className='text-[#9698d6]' style={{ borderBottom: '1.5px solid #999' }}>Portal URL</span>
                        <div className='flex'>
                            <img className='h-[14px] w-[14px]' src='https://eskooly.com/bb/assets/arrow-down.png' alt='' />
                            <strong className='pt-0 text-[12px] pl-2'>eskooly.com/bb/signin.php</strong>
                        </div>
                    </div>
                    <div className='relative'>
                        <span className='text-[#9698d6]' style={{ borderBottom: '1.5px solid #999' }}>Username</span>
                        <div className='flex'>
                            <img className='h-[14px] w-[14px]' src='https://eskooly.com/bb/assets/arrow-down.png' alt='' />
                            <strong className='pt-0 text-[12px] pl-2'>67267N1OWD1</strong>
                        </div>
                    </div>
                    <div className='relative'>
                        <span className='text-[#9698d6]' style={{ borderBottom: '1.5px solid #999' }}>Password</span>
                        <div className='flex'>
                            <img className='h-[14px] w-[14px]' src='https://eskooly.com/bb/assets/arrow-down.png' alt='' />
                            <strong className='pt-0 text-[12px] pl-2'>67267N1OWD1</strong>
                        </div>
                    </div>
                </div>
                <div className='w-[16%] flex items-center'>
                    <button className='rounded-[20px] text-[11px] px-[14px] py-[8px] cursor-pointer mt-[20px] text-[#fff]' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }}>Print Job Letter</button>
                </div>
            </div>
        </div>
    );
};

export default InnerJobLetter;
