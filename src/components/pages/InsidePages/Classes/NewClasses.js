import React, { useEffect, useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";

const NewClasses = () => {
    const [className, setClassName] = useState('');
    const [tutionFee, setTutionFees] = useState('');
    const [classTeacher, setClassTeacher] = useState('');
    const [classes, setClasses] = useState(JSON.parse(localStorage.getItem('Classes')) || []);
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
            console.log(responseData, 'responseData', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };
    useEffect(() => {
        getClassesInfo();
    }, [])
    const Create = async (event) => {
        try {
            console.log('entered inside create req')
            console.log(localStorage.getItem('institutionID'), className, classTeacher, tutionFee)
            const response = await fetch('http://vidyalay.saanvigs.com/class/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    institutionID: localStorage.getItem('institutionId'),
                    className: className,
                    classTeacher: classTeacher,
                    studentStrength: 0,
                    monthlyTuitionFee: tutionFee,
                }),
            });
            const responseData = await response.json();
            console.log(responseData);
            // getClassesInfo();
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Create error:', error);
        }
    };
    return (
        <div className='m-9 flex flex-col justify-center items-center w-full'>
            <input type='text' name='nameOfTheClass' className='bod-in w-1/3 mt-2 p-2' placeholder='Name of Class' value={className} onChange={(e) => setClassName(e.target.value)} required />
            <input type='text' name='TutionFees' className='bod-in w-1/3 mt-2 p-2' placeholder='Monthly Tution Fees' value={tutionFee} onChange={(e) => setTutionFees(e.target.value)} required />
            {/* <input type='file' name='fileToUpload' className='bod-in w-full p-2' required /> */}
            <select id="feeFor" placeholder="---- Select Class Teacher ----" value={classTeacher} onChange={(e) => setClassTeacher(e.target.value)} className="w-1/3 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
                <option selected>---- Select Class Teacher ----</option>
                {classes.map((e) => <option>{e.classTeacher}</option>)}
            </select>
            <button className='flex items-center bg-blue-500 rounded-sm mt-2 p-5 text-white' onClick={() => {
                console.log(className, tutionFee, classTeacher, " values")
                if (className && tutionFee && classTeacher !== '') {
                    console.log('entered')
                    Create();
                }
            }} ><IoMdCheckmark color='white' /> <span className='pl-2'>Submit</span></button>
        </div>
    );
}
export default NewClasses;  