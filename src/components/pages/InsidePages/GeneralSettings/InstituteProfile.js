import { TfiReload } from "react-icons/tfi";
import { TiHomeOutline } from "react-icons/ti";
import { CiMobile4 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import React, { Component } from 'react';
import Countries from './Countries'
// import { countries } from 'countries-list';


class InstituteProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            institeteName: localStorage.getItem('name') || '',
            targetLine: localStorage.getItem('targetLine') || '',
            phoneNo: localStorage.getItem('mobile') || '',
            website: localStorage.getItem('website') || '',
            address: localStorage.getItem('address') || '',
            country: localStorage.getItem('country') || '',
        };
    }
    componentDidMount() {
        this.getInstituteInfo();
    }

    handleInstiteteName = (event) => {
        this.setState({ institeteName: event.target.value });
    };

    handleTargetLine = (event) => {
        this.setState({ targetLine: event.target.value });
    };

    handlePhoneNo = (event) => {
        this.setState({ phoneNo: event.target.value });
    };

    handleWebsite = (event) => {
        this.setState({ website: event.target.value });
    };

    handleAddress = (event) => {
        this.setState({ address: event.target.value });
    };

    getInstituteInfo = async (event) => {
        if (!localStorage.getItem('targetLine') ||
            !localStorage.getItem('website') ||
            !localStorage.getItem('instituteType') ||
            !localStorage.getItem('_id') ||
            !localStorage.getItem('institutionID') ||
            !localStorage.getItem('name') ||
            !localStorage.getItem('board') ||
            !localStorage.getItem('country') ||
            !localStorage.getItem('currency') ||
            !localStorage.getItem('address') ||
            !localStorage.getItem('academicSession') ||
            !localStorage.getItem('profilePicture') ||
            !localStorage.getItem('email') ||
            !localStorage.getItem('mobile') ||
            !localStorage.getItem('adminID') ||
            !localStorage.getItem('__v')) {
            try {
                const response = await fetch(`http://vidyalay.saanvigs.com/institute/instituteid?institutionID=HCJ34e21`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const responseData = await response.json();
                console.log(responseData)
                localStorage.setItem('targetLine', responseData.targetLine);
                localStorage.setItem('website', responseData.website);
                localStorage.setItem('instituteType', responseData.instituteType);
                localStorage.setItem('_id', responseData._id);
                localStorage.setItem('institutionID', responseData.institutionID);
                localStorage.setItem('name', responseData.name);
                localStorage.setItem('board', responseData.board);
                localStorage.setItem('country', responseData.country);
                localStorage.setItem('currency', responseData.currency);
                localStorage.setItem('address', responseData.address);
                localStorage.setItem('academicSession', responseData.academicSession);
                localStorage.setItem('profilePicture', responseData.profilePicture);
                localStorage.setItem('email', responseData.email);
                localStorage.setItem('mobile', responseData.mobile);
                localStorage.setItem('adminID', responseData.adminID);
                localStorage.setItem('__v', responseData.__v);
                if (!response.ok) {
                    console.log('Bad Response for sign in, The Response', response);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Info Error:', error);
            }
        }
    };
    getUpdatedInstituteInfo = async (event) => {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/institute/instituteid?institutionID=HCJ34e21`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            console.log(responseData)
            localStorage.setItem('targetLine', responseData.targetLine);
            localStorage.setItem('website', responseData.website);
            localStorage.setItem('instituteType', responseData.instituteType);
            localStorage.setItem('_id', responseData._id);
            localStorage.setItem('institutionID', responseData.institutionID);
            localStorage.setItem('name', responseData.name);
            localStorage.setItem('board', responseData.board);
            localStorage.setItem('country', responseData.country);
            localStorage.setItem('currency', responseData.currency);
            localStorage.setItem('address', responseData.address);
            localStorage.setItem('academicSession', responseData.academicSession);
            localStorage.setItem('profilePicture', responseData.profilePicture);
            localStorage.setItem('email', responseData.email);
            localStorage.setItem('mobile', responseData.mobile);
            localStorage.setItem('adminID', responseData.adminID);
            localStorage.setItem('__v', responseData.__v);
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };

    Update = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://vidyalay.saanvigs.com/institute/updateinstitute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    institutionID: localStorage.getItem('institutionID'),
                    name: this.state.institeteName,
                    targetLine: this.state.targetLine,
                    mobile: this.state.phoneNo,
                    website: this.state.website,
                    email: localStorage.getItem('email'),
                }),
            });
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            this.getUpdatedInstituteInfo();
        } catch (error) {
            console.error('Login Error:', error);
        }
    };
    render() {
        const { institeteName, targetLine, phoneNo, website, address, country } = this.state;
        return (
            <div className='h-screen w-full p-10 pl-7 flex fd overflow-auto'>
                <div className=' w-3/5 h-full wdd'>
                    <UpdateInstituteLogo />
                    <UpdateInstituteInfo
                        institeteName={institeteName}
                        targetLine={targetLine}
                        phoneNo={phoneNo}
                        website={website}
                        address={address}
                        country={country}
                        handleInstiteteName={this.handleInstiteteName}
                        handleTargetLine={this.handleTargetLine}
                        handlePhoneNo={this.handlePhoneNo}
                        handleWebsite={this.handleWebsite}
                        handleAddress={this.handleAddress}
                        handleCountry={this.handleCountry}
                        Update={this.Update}
                    />
                </div>
                <div className='w-5/12 wdd'>
                    <YourInstituteProfile />
                </div>
            </div>
        );
    }
}

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
const UpdateInstituteInfo = ({
    institeteName,
    targetLine,
    phoneNo,
    website,
    address,
    country,
    handleInstiteteName,
    handleTargetLine,
    handlePhoneNo,
    handleWebsite,
    handleAddress,
    handleCountry,
    Update
}) => {

    const countryOptions = Countries.map((country) => (
        <option key={country.code}>
            {country.name}
        </option>
    ));
    return (
        <div className='hover:shadow-2xl shadow border-black bod-in bg-white p-6 flex flex-col m-2 rounded-2xl'>
            <div className='font-semibold w-full'>
                <h5>Update Instute Info Here</h5>
            </div>
            <form className='w-full mt-3'>
                <div className="relative flex items-center my-3">
                    <label className="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Name of the Institute</label>
                    <input type="text" placeholder="Name of the Institute" value={institeteName} onChange={handleInstiteteName}
                        className="px-2 bod-sin py-3.5 bg-white l-b w-full text-sm border-2 rounded outline-none" />
                </div>
                <div className="relative flex items-center my-3">
                    <label className="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Target Line</label>
                    <input type="text" placeholder="Target Line" value={targetLine} onChange={handleTargetLine}
                        className="px-2 bod-sin py-3.5 bg-white l-b w-full text-sm border-2 rounded outline-none" />
                </div>
                <div className="relative flex items-center my-3">
                    <label className="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Phone Number</label>
                    <input type="tel" placeholder="Phone" value={phoneNo} onChange={handlePhoneNo}
                        className="px-2 bod-sin py-3.5 bg-white l-b w-full text-sm border-2 rounded outline-none" />
                </div>
                <div className="relative flex items-center my-3">
                    <label className="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Website</label>
                    <input type="text" placeholder="Website" value={website} onChange={handleWebsite}
                        className="px-2 bod-sin py-3.5 bg-white l-b w-full text-sm border-2 rounded outline-none" />
                </div>
                <div className="relative flex items-center my-3">
                    <label className="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Address</label>
                    <input type="text" placeholder="Address" value={address} onChange={handleAddress}
                        className="px-2 bod-sin py-3.5 bg-white l-b w-full text-sm border-2 rounded outline-none" />
                </div>
                <div className="relative flex items-center my-3">
                    <label className="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Country</label>
                    <select name='country' value={country} onChange={handleCountry} className='px-4 bod-sin py-3.5 bg-white l-b w-full text-sm border-2 rounded outline-none'>
                        <option value selected="selected">select Country</option>
                        {/* {Countries.map((i) => (
                            <option>{i.name}</option>
                        ))} */}{countryOptions}
                    </select>
                </div>
                <div className='flex justify-end'><button className='text-white bg-blue-500 flex flex-end items-center p-2 rounded-sm justify-end mt-3' onClick={Update}><TfiReload color='white' /> Update</button></div>
            </form>
        </div>
    );
}
const YourInstituteProfile = () => {
    const formatPhoneNumber = (phoneNumber) => {
        if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.length < 9) {
            return ''; // Return empty string or handle the error as needed
        }
        const formattedNumber = `+${phoneNumber.slice(0, 2)} (${phoneNumber.slice(2, 5)}) ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8)}`;
        return formattedNumber;
    };
    return (
        <div className=' hover:shadow-2xl w-full text-gray-700 bg-white h-auto shadow rounded-2xl flex flex-col m-2 p-6 bod-in'>
            <div className=' w-full font-semibold text-gray-500'>
                <h5>Your Institute Profile</h5>
            </div>
            <div className='flex justify-center bod-ip p-6 pt-0'><TiHomeOutline color='#9698d6' size="60px" /></div>
            <div className='flex flex-col p-3 '>
                <h4 className='flex justify-center'>{localStorage.getItem('name')}</h4>
                <h6 className='flex justify-center'>{localStorage.getItem('targetLine')}</h6>
                <hr />
                <p className='flex items-center justify-between'><CiMobile4 color='gray' /> {formatPhoneNumber(localStorage.getItem('mobile'))}</p>
                {/* <p className='flex items-center justify-between'><CiMobile4 color='gray' /> +92 (356) 787 5465</p> */}
                <p className='flex items-center justify-between'><CiMail color='gray' /> {localStorage.getItem('email')}</p>
                <p className='flex items-center justify-between'><TfiWorld color='gray' /> {localStorage.getItem('website')}</p>
                <hr />
                <p className='flex flex-col items-center pt-3'><CiLocationOn color='gray' /> Your Institute Address will goes here!</p>
                <p className='flex flex-col items-center pt-3'><CiLocationOn color='gray' /> {localStorage.getItem('address')}</p>
                <p className='flex justify-center p-3 pt-0'>{localStorage.getItem('country')}</p>
            </div>
        </div>
    );
}
export default InstituteProfile;