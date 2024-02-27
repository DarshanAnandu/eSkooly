import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";

const NewClasses = () => {
    const [className, setClassName] = useState('');
    const [tutionFee, setTutionFees] = useState('');
    const [classTeacher, setClassTeacher] = useState('');
    const [classes, setClasses] = useState(JSON.parse(localStorage.getItem('Classes')) || []);
    const classname = (event) => {
        setClassName(event.target.value);
    };
    const tutionfee = (event) => {
        setTutionFees(event.target.value);
    };
    const classteacher = (event) => {
        setClassTeacher(event.target.value);
    };
    const getClassesInfo = async (event) => {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/class/getclasses?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            setClasses(JSON.parse(responseData));
            localStorage.setItem('Classes', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };
    const Create = async (event) => {
        try {
            const response = await fetch('http://vidyalay.saanvigs.com/class/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    institutionID: localStorage.getItem('institutionID'),
                    className: className,
                    classTeacher: classTeacher,
                    studentStrength: 0,
                    monthlyTutionFee: tutionFee,
                }),
            });
            // const responseData = await response.json();
            getClassesInfo();
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };
    return (
        <div className='m-9 flex flex-col justify-center items-center w-full'>
            <input type='text' name='nameOfTheClass' className='bod-in w-1/3 mt-2 p-2' placeholder='Name of Class' value={className} onChange={classname} required />
            <input type='text' name='TutionFees' className='bod-in w-1/3 mt-2 p-2' placeholder='Monthly Tution Fees' value={tutionFee} onChange={tutionfee} required />
            {/* <input type='file' name='fileToUpload' className='bod-in w-full p-2' required /> */}
            <select id="feeFor" placeholder="---- Select Class Teacher ----" value={classTeacher} onChange={classteacher} className="w-1/3 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
                <option selected>---- Select Class Teacher ----</option>
                {classes.map((e) => <option>{e.classTeacher}</option>)}
            </select>
            <button className='flex items-center bg-blue-500 rounded-sm mt-2 p-5 text-white' onClick={Create} ><IoMdCheckmark color='white' /> <span className='pl-2'>Submit</span></button>
        </div>
    );
}
export default NewClasses;  