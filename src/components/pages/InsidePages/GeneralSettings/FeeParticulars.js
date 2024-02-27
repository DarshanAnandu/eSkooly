import React, { useState } from 'react';
import { TfiReload } from "react-icons/tfi";
import { IoMdCheckmark } from "react-icons/io";

class FeeParticulars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feefor: '',
            // allStudents: [],
            // specificStudent: [],
            classesInfo: [],
            classesInfo2: [
                {
                    "studentStrength": 5,
                    "_id": "65cdc647962e084b5c7fde66",
                    "className": "X A",
                    "classTeacher": "Divyank",
                    "institutionID": "jingle122",
                    "monthlyTuitionFee": 5600,
                    "classID": "JhAfjSIBN",
                    "subjects": [
                        {
                            "_id": "65cf38a54ee33558c4499c8f",
                            "name": "Mathematics",
                            "marks": 100
                        },
                        {
                            "_id": "65cf38d24ee33558c4499c92",
                            "name": "Science",
                            "marks": 100
                        },
                        {
                            "_id": "65cf43684ee33558c4499ca2",
                            "name": "Science",
                            "marks": 100
                        },
                        {
                            "_id": "65cf43824ee33558c4499ca4",
                            "name": "Science",
                            "marks": 100
                        },
                        {
                            "_id": "65cf43934ee33558c4499ca7",
                            "name": "Science",
                            "marks": 100
                        },
                        null,
                        null
                    ],
                    "__v": 0
                },
                {
                    "studentStrength": null,
                    "_id": "65cdc64d962e084b5c7fde68",
                    "className": "X B",
                    "classTeacher": "Sanit",
                    "institutionID": "jingle122",
                    "monthlyTuitionFee": 6000,
                    "classID": "A6k5S9vQE",
                    "subjects": [],
                    "__v": 0
                },
                {
                    "studentStrength": null,
                    "_id": "65ce0d38d673f13e6821f387",
                    "className": "10th D",
                    "classTeacher": "Sanit",
                    "institutionID": "jingle122",
                    "monthlyTuitionFee": 5000,
                    "classID": "2ZfwyPI6I",
                    "subjects": [],
                    "__v": 0
                },
                {
                    "studentStrength": null,
                    "_id": "65d2de37208a704130a82b31",
                    "className": "10th A",
                    "classTeacher": "Sanit",
                    "institutionID": "jingle122",
                    "monthlyTuitionFee": 5888,
                    "classID": "PwJCpU2MO",
                    "subjects": [],
                    "__v": 0
                },
                {
                    "studentStrength": 3,
                    "_id": "65d2de40208a704130a82b33",
                    "className": "10th A",
                    "classTeacher": "Sanit",
                    "institutionID": "jingle122",
                    "monthlyTuitionFee": 5888,
                    "classID": "oJqhPPoyo",
                    "subjects": [],
                    "__v": 0
                }
            ],
            specificClass: []
        };
    }

    // componentDidMount() {
    //     this.getClassesInfo();
    // }

    handleFee = (event) => {
        this.setState({ feefor: event.target.value });
    };

    async getClassesInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/institute/instituteid?institutionID=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            this.setState({ classesInfo: responseData });
            localStorage.setItem('Classes', responseData);
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };

    async specificClass() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/fees/getFeesByClassAndInstitution?classId=${localStorage.getItem('classID')}&institutionId=${localStorage.getItem('institutionID')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            console.log(responseData);
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };
    render() {
        return (
            <div className='p-6 pt-6 shadow border-black bod-in m-9 rounded-2xl bg-white hover:shadow-2xl'>
                <div className='flex justify-between'>
                    <h5 className='font-semibold ' style={{ fontSize: '14px', color: '#5e81f4', fontFamily: 'Poppins, sans-serif' }}>Change Fee Particulars</h5>
                    <div className=' text-white items-center rounded-2xl p-2 px-5 flex' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)' }}><TfiReload size="12px" /><span className='px-2'>Reset to Default</span></div>
                </div>
                <div className=''>
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <label className='lab-txt' style={{ fontSize: '13px' }}>Fee Particulars for*</label>
                            <select id="feeFor" className="w-min rounded-2xl bod-in p-2 focus:ring-blue-500 focus:border-blue-500" style={{ color: '#495057' }} onChange={(e) => this.handleFee(e.target.value)}>
                                <option value="allStudents">All Students</option>
                                <option value="specificClass">Specific Class</option>
                                <option value="specificStudents">Specific Student</option>
                            </select>
                        </div>
                        {this.state.feefor === "specificClass" && (
                            <div className='flex flex-col pl-2'>
                                <label className='lab-txt' style={{ fontSize: '13px' }}>Specific Class for*</label>
                                <select id="SpecificClass" className="w-min rounded-2xl bod-in p-2 focus:ring-blue-500 focus:border-blue-500" style={{ color: '#495057' }}>
                                    {/* <option>10</option>
                                    <option>20</option> */}
                                    {this.state.classesInfo2.map((e, index) => (
                                        <option key={index} value={e.className}>{e.className}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                        {this.state.feefor === "specificStudents" && (
                            <div className='flex flex-col pl-2'>
                                {/* <label className='lab-txt' style={{ fontSize: '13px' }}>Fee Particulars for*</label> */}
                                <input type="text" id="feeFor" className="w-min rounded-2xl bod-in p-2 focus:ring-blue-500 focus:border-blue-500" placeholder='Specific Student' style={{ color: '#495057' }} />
                            </div>
                        )}
                    </div>
                    <div className='flex w-full' style={{ fontSize: '14px' }}>
                        <div className='w-2/3'>
                            <span className='px-2 flex w-full' style={{ color: '#ff808b' }}>Particular Name</span>
                            <span className='bod-in py-2 px-2 flex w-full uppercase cursor-not-allowed' disabled style={{ margin: '2px', opacity: '0.5px', backgroundColor: '#e9ecef', color: '#acb3b9' }}>Monthly Tution Fee</span>
                            <input type="text" defaultValue="Admission Fee" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
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
                            <span className='px-2 flex w-full' style={{ color: '#ff808b' }}>Prefix Amount</span>
                            <span className='bod-in py-2 px-3 flex w-full cursor-not-allowed' style={{ margin: '2px', color: '##acb3b9', opacity: '0.5px', backgroundColor: '#e9ecef' }}>[Fixed]</span>
                            <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
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
                    <div className='flex justify-end'><button className='flex items-center justify-end mt-2 p-2 px-5 rounded-2xl text-white' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', transition: 'all ease-in 0.3s' }}><IoMdCheckmark color='white' /> <span className='pl-2'>Save Changes</span></button></div>
                </div>
            </div>
        );
    }
}
export default FeeParticulars;
