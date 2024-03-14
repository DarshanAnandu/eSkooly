import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io";
import { useLocation } from 'react-router-dom'

const UpdateClass = () => {
    const location = useLocation()
    // const { lc } = location;
    console.log(location, 'update class id and idx');
    const [updateClass, setUpdateClass] = useState(JSON.parse(localStorage.getItem('updateClass')) || []);
    const [className, setClassName] = useState(updateClass.className);
    const [tutionFee, setTutionFees] = useState(updateClass.tutionFee);
    const [classTeacher, setClassTeacher] = useState(updateClass.classTeacher);
    const [classes, setClasses] = useState(JSON.parse(localStorage.getItem('Classes')) || []);
    // const getClassesInfo = async (event) => {
    //     try {
    //         const response = await fetch(`http://vidyalay.saanvigs.com/class/getclasses?institutionId=${localStorage.getItem('institutionId')}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });
    //         const responseData = await response.json();
    //         setClasses(JSON.parse(responseData));
    //         localStorage.setItem('Classes', JSON.stringify(responseData));
    //         if (!response.ok) {
    //             console.log('Bad Response for sign in, The Response', response);
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //     } catch (error) {
    //         console.error('Info Error:', error);
    //     }
    // };
    const Update = async (event) => {
        try {
            console.log('entered inside create req')
            console.log(localStorage.getItem('institutionID'), className, classTeacher, tutionFee)
            const response = await fetch('http://vidyalay.saanvigs.com/class/updateclass', {
                method: 'Put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    institutionID: localStorage.getItem('institutionID'),
                    classId: localStorage.getItem('classId'),
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
            <label>Class Name:</label>
            <input type='text' name='nameOfTheClass' className='bod-in w-1/3 mt-2 p-2' placeholder='Name of Class' value={className} onChange={(e) => setClassName(e.target.value)} required />
            <label>Monthly Fees:</label>
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
                    Update();
                }
            }} ><IoMdCheckmark color='white' /> <span className='pl-2'>Update</span></button>
        </div>
    );
}
export default UpdateClass;  