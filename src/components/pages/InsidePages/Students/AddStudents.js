import React, { useState } from 'react';
import { TfiReload } from "react-icons/tfi";
import { TiHomeOutline } from "react-icons/ti";
import { IoMdCheckmark } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
const AddStudents = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        registrationNo: '',
        admissionDate: '',
        selectedClass: '',
        discountInFee: '',
        mobileNo: '',
        dateOfBirth: '',
        gender: '',
        identificationMark: '',
        bloodGroup: '',
        disease: '',
        birthFormID: '',
        cast: '',
        previousSchool: '',
        previousID: '',
        additionalNote: '',
        orphanStudent: '',
        osc: '',
        religion: '',
        family: '',
        totalSiblings: '',
        address: '',
        fatherName: '',
        fatherEducation: '',
        fatherNationalID: '',
        fatherMobileNo: '',
        fatherOccupation: '',
        fatherProfession: '',
        fatherIncome: '',
        motherName: '',
        motherEducation: '',
        motherNationalID: '',
        motherMobileNo: '',
        motherOccupation: '',
        motherProfession: '',
        motherIncome: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

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
                        <input type='text' name='studentName' value={formData.studentName} onChange={handleInputChange} placeholder='Name of the Student' className='outline-black p-2 focus:outline-blue-500' />
                        <label className='flex flex-col mb-3'><span className='flex items-center'><span>Picture:</span><span className='pl-1' style={{ fontSize: '10px' }}>[ optional ]</span></span> <input type='file' name='fileToUpload' className='bod-in p-2 focus:outline-blue-500 bg-white' /><span className='' style={{ fontSize: '10px' }}>[ Max size 100KB ]</span></label>
                    </div>
                    <div className='wid-stu-adding mx-2' style={{ marginTop: '-10px' }}>
                        <div className="relative flex items-center my-3">
                            <label className="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Last Reg: None</label>
                            <input type="text" placeholder="Registration No:" name="registrationNo" value={formData.registrationNo} onChange={handleInputChange} className="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                        <label className='flex flex-col mb-3' style={{ marginTop: '-10px' }}>Admission Date: <input type='date' className='p-2 bod-in focus:outline-blue-500' name="admissionDate" value={formData.admissionDate} onChange={handleInputChange} /></label>
                    </div>
                    <div className='wid-stu-adding mx-2 flex flex-col'>
                        <select className='p-2 mb-2 bod-in' required>
                            <option>select class</option>
                        </select>
                        <input type='number' name='discountInFee' value={formData.discountInFee} onChange={handleInputChange} placeholder='Discount In Fee in %' className='p-2 bod-in' />
                        <font className='mt-2' style={{ fontSize: '9px', color: '#999' }}>Student / Guardian mobile no to receive SMS / WhatsApp</font>
                        <input type='tel' name='mobileNo' value={formData.mobileNo} onChange={handleInputChange} placeholder='Mobile No: e.g +44xxxxxxxxxx' className='p-2 bod-in' />
                    </div>
                </div>
                {/* Other Info Section */}
                <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #9698d6, #a9abdb)', marginBottom: '20px', padding: '10px' }}>
                    <span className=''>Other Info</span>
                    <span>[ Optional ]</span>
                </h5>
                <div className='disp-stu-adding'>
                    <div className='wid-stu-adding mx-2'>
                        <div className="relative flex items-center my-3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Date of Birth</label>
                            <input type='date' name='dateOfBirth' value={formData.dateOfBirth} onChange={handleInputChange} className='my-2 bod-in bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none' placeholder='dd-mm-yyyy' />
                        </div>
                        <select className='p-2 w-full my-2 bod-in' required>
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <input type='text' name='idmarks' value={formData.identificationMark} onChange={handleInputChange} placeholder='Any Identification Mark ?' className='outline-black p-2 w-full my-2 focus:outline-blue-500' />
                        <select className='p-2 w-full my-2 bod-in' value={formData.bloodGroup} onChange={handleInputChange} required>
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
                        <input type='text' name='disease' value={formData.disease} onChange={handleInputChange} placeholder='Disease if any ?' className='outline-black w-full p-2 focus:outline-blue-500 my-2' />
                    </div>
                    <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
                        <input type='text' name='scnic' placeholder='Student Birth Form ID / NIC' value={formData.birthFormID} onChange={handleInputChange} className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='text' name='cast' placeholder='Cast' value={formData.cast} onChange={handleInputChange} className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
                        <input type='text' name='pr' placeholder='Previous School' value={formData.previousSchool} onChange={handleInputChange} className='my-2 outline-black p-2 w-full bod-in focus:outline-blue-500' />
                        <input type='text' name='previousid' placeholder='Previous ID / Board Roll No.' value={formData.previousID} onChange={handleInputChange} className='outline-black bod-in my-2 p-2 w-full focus:outline-blue-500' />
                        <input type='text' name='additionalinfo' placeholder='Any Additional Note' value={formData.additionalNote} onChange={handleInputChange} className='outline-black p-2 bod-in my-2 w-full focus:outline-blue-500' />
                    </div>
                    <div>
                        <select className='p-2 w-full my-2 bod-in' value={formData.orphanStudent} onChange={handleInputChange} name='os' required>
                            <option>Orphen Student</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <select className='p-2 w-full my-2 bod-in' value={formData.osc} onChange={handleInputChange} name='osc' required>
                            <option>OSC</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <select className='p-2 w-full my-2 bod-in' name='religion' value={formData.religion} onChange={handleInputChange} required>
                            <option>Religion</option>
                            <option>Hinduisiam</option>
                            <option>Islam</option>
                        </select>
                        <select className='p-2 w-full my-2 bod-in' name='family' value={formData.family} onChange={handleInputChange} required>
                            <option>Select Family</option>
                        </select>
                        <input type='number' name='noc' placeholder='Total Sibilings' value={formData.totalSiblings} onChange={handleInputChange} className='outline-black p-2 bod-in my-2 w-full focus:outline-blue-500' />
                    </div>
                </div>
                <div className='disp-stu-adding'>
                    <div className='w-2/3 addr'>
                        <input type='text' name='addrss' placeholder='Address' value={formData.address} onChange={handleInputChange} className='outline-black p-2 bod-in my-2 w-11/12 addr focus:outline-blue-500' />
                    </div>
                    <button className='text-white flex p-2 px-5 my-2 mb-5 items-center rounded-3xl' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }}><FaPlus color='white' /> <span className='pl-2'>Add Parents</span></button>
                </div>
                <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', marginBottom: '20px', padding: '10px' }}>
                    <span className=''>FATHER INFO</span>
                    <span>[ Optional ]</span>
                </h5>
                <div className='disp-stu-adding'>
                    <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
                        <input type='text' name='fnam' placeholder='Name of Father' value={formData.fatherName} onChange={handleInputChange} className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='text' name='fedu' placeholder='Education' value={formData.fatherEducation} onChange={handleInputChange} className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
                    </div>
                    <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
                        <input type='text' name='fcnic' placeholder='National ID No.' value={formData.fatherNationalID} onChange={handleInputChange} className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='text' name='fmob' placeholder='Mobile No' value={formData.fatherMobileNo} onChange={handleInputChange} className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
                    </div>
                    <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
                        <input type='text' name='fo' value={formData.fatherOccupation} onChange={handleInputChange} placeholder='Occupation' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='text' name='fp' value={formData.fatherProfession} onChange={handleInputChange} placeholder='Profession' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
                        <input type='text' name='fi' value={formData.fatherIncome} onChange={handleInputChange} placeholder='Income' className='my-2 outline-black p-2 w-full bod-in focus:outline-blue-500' />
                    </div>
                </div>
                <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #5e81f4, #7191f7)', marginBottom: '20px', padding: '10px' }}>
                    <span className=''>MOTHER INFO</span>
                    <span>[ Optional ]</span>
                </h5>
                <div className='disp-stu-adding'>
                    <div className='disp-stu-adding'>
                        <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
                            <input type='text' name='mnam' value={formData.motherName} onChange={handleInputChange} placeholder='Name of Mother' className='outline-black bod-in p-2 my-2 mx-2 focus:outline-blue-500 w-full mb2' />
                            <input type='text' name='medu' value={formData.motherEducation} onChange={handleInputChange} placeholder='Education' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
                        </div>
                        <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
                            <input type='text' name='mcnic' value={formData.motherNationalID} onChange={handleInputChange} placeholder='National ID No.' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                            <input type='text' name='mmob' value={formData.motherMobileNo} onChange={handleInputChange} placeholder='Mobile No' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
                        </div>
                        <div className='wid-stu-adding flex flex-col mx-2 mt-4'>
                            <input type='text' name='mo' value={formData.motherOccupation} onChange={handleInputChange} placeholder='Occupation' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                            <input type='text' name='mp' value={formData.motherProfession} onChange={handleInputChange} placeholder='Profession' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
                            <input type='text' name='mi' value={formData.motherIncome} onChange={handleInputChange} placeholder='Income' className='my-2 outline-black p-2 w-full bod-in focus:outline-blue-500' />
                        </div>
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
export default AddStudents;