import { TfiReload } from "react-icons/tfi";
import { TiHomeOutline } from "react-icons/ti";
import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import React, { useState } from 'react';
import Countries from './Countries'
// import { countries } from 'countries-list';


const InstituteProfile = () => {
    const UpdateInstituteLogo = () => {
        return (
            <div className='hover:shadow-2xl shadow bg-white border-black bod-in p-6 flex flex-col m-2 rounded-2xl'>
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
        const [institeteName, setInstituteName] = useState('');
        const [TargetLine, setTargetLine] = useState('');
        const [phoneNo, setPhoneNo] = useState('');
        // const [phoneNo, setPhoneNo] = useState('');
        // const [phoneNo, setPhoneNo] = useState('');
        // const [phoneNo, setPhoneNo] = useState('');

        const countryOptions = Countries.map((country) => (
            <option key={country.code} value={country.code}>
                {country.name}
            </option>
        ));
        const handleInstiteteName = (event) => {
            setInstituteName(event.target.value);
        };
        const handleTargetLine = (event) => {
            setTargetLine(event.target.value);
        };
        const handlePhoneNo = (event) => {
            setPhoneNo(event.target.value);
        };
        const Update = async (event) => {
            event.preventDefault();
            try {
                const response = await fetch('http://vidyalay.saanvigs.com/auth/institutelogin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // email: email_LI,
                        // password: password_LI
                    }),
                });
                const responseData = await response.json();
                console.log(responseData)
                const adminId = responseData.adminId;
                const token = responseData.accessToken;
                const refreshToken = responseData.refreshToken;
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('adminId', adminId);
                localStorage.setItem('token', token);
                localStorage.setItem('refreshToken', refreshToken);
                if (!response.ok) {
                    console.log('Bad Response for sign in, The Response', response);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Login Error:', error);
            }
        };
        return (
            <div className='hover:shadow-2xl shadow border-black bod-in bg-white p-6 flex flex-col m-2 rounded-2xl'>
                <div className='font-semibold w-full'>
                    <h5>Update Instute Info Here</h5>
                </div>
                <form className='w-full mt-3' onSubmit={Update}>
                    <div class="relative flex items-center my-3">
                        <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Name of the Institute</label>
                        <input type="text" placeholder="Name of the Institute" value={institeteName} onChange={handleInstiteteName}
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
                            {countryOptions}
                        </select>
                    </div>
                    <div className='flex justify-end'><button className='text-white bg-blue-500 flex flex-end items-center p-2 rounded-sm justify-end mt-3'><TfiReload color='white' /> Update</button></div>
                </form>
            </div>
        );
    }
    const YourInstituteProfile = () => {
        return (
            <div className=' hover:shadow-2xl w-full text-gray-700 bg-white h-auto shadow rounded-2xl flex flex-col m-2 p-6 bod-in'>
                <div className=' w-full font-semibold text-gray-500'>
                    <h5>Your Institute Profile</h5>
                </div>
                <div className='flex justify-center bod-ip p-6 pt-0'><TiHomeOutline color='#9698d6' size="60px" /></div>
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
        <div className='h-screen w-full p-10 pl-7 flex fd overflow-auto'>
            <div className=' w-3/5 h-full wdd'>
                <UpdateInstituteLogo />
                <UpdateInstituteInfo />
            </div>
            <div className='w-5/12 wdd'>
                <YourInstituteProfile />
            </div>
        </div>
    );
}
export default InstituteProfile;