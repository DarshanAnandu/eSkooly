import React from 'react';
import { TiHomeOutline } from 'react-icons/ti';

const InnerAdmissionLetter = () => {
    return (
        <div className="p-9">
            <div className="flex justify-between items-center p-3 rounded bg-white">
                <div className="flex items-center">
                    <b>Students</b>
                    <span className="px-2">|</span>
                    <TiHomeOutline />
                    <span className="px-1">- Admission Letter</span>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-[33%] border-[2px] p-[20px] pt-0 border-[gray] rounded-2xl'>
                    <h6 className='text-center text-[#fff] p-[10px] font-semibold text-[14px]' style={{ background: 'linear-gradient(87deg, #8898aa 0, #888aaa 100%)', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }}>ADDITIONAL CONFIRMATION</h6>
                    <h5 className='flex items-center justify-center my-1'>
                        <img src='https://eskooly.com/bb/uploads/students/no-image.png' alt='' />
                    </h5>
                    <h5 className='text-center font-semibold text-[1.25rem] text-[#4d4cac] m-[10px]'>Anuj Pandey</h5>
                    <table className='flex justify-center text-[12px] rounded-[15px]'>
                        <tbody>
                            <tr style={{ backgroundColor: 'rgba(0, 0, 0, .05)' }}><td className='px-[15px]'>Registeration/ID</td><td className='px-[15px]'><b>4582333</b></td></tr>
                            <tr><td className='px-[15px]'>Class</td><td className='px-[15px]'><b>10</b></td></tr>
                            <tr style={{ backgroundColor: 'rgba(0, 0, 0, .05)' }}><td className='px-[15px]'>Admission Date</td><td className='px-[15px]'><b>19 February, 2024</b></td></tr>
                            <tr><td className='px-[15px]'>Account Status</td><td className='px-[15px] text-[#2ed8b6]'><b>Active</b></td></tr>
                            <tr style={{ backgroundColor: 'rgba(0, 0, 0, .05)' }}><td className='px-[15px]'>Username</td><td className='px-[15px]'><b>6726771BL 4582333</b></td></tr>
                            <tr><td className='px-[15px]'>Password</td><td className='px-[15px]'><b>6726771BL 4582333</b></td></tr>
                        </tbody>
                    </table>
                    <h3 className='flex justify-center'><button className='rounded-[15px] cursor-pointer mt-[20px] py-[8px] px-[14px] text-[11px] text-[#fff]' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)' }}><span>Print Admission Letters</span></button></h3>
                </div>
            </div>
        </div>
    );
};

export default InnerAdmissionLetter;
