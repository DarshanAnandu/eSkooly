import React, { useState } from 'react';
import { TfiReload } from "react-icons/tfi";
import { IoMdCheckmark } from 'react-icons/io';
// import { CiSearch } from 'react-icons/ci';

const AddEmployee = () => {
    const initialFormData = {
        employeeName: '',
        fileToUpload: '',
        registrationNo: '',
        joiningDate: '',
        employeeType: '',
        monthlySalary: '',
        fatherName: '',
        cnic: '',
        education: '',
        gender: '',
        religion: '',
        bloodGroup: '',
        specialization: '',
        email: '',
        dateOfBirth: '',
        address: ''
    };
    const [formData, setFormData] = useState(initialFormData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleReset = () => {
        setFormData(initialFormData);
    };
    const handleCreate = async (event) => {
        try {
            console.log('entered req create')
            console.log(formData.employeeName, localStorage.getItem('institutionId'), formData.joiningDate, formData.employeeType, formData.monthlySalary)
            const response = await fetch('http://vidyalay.saanvigs.com/employee/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer' + localStorage.getItem('token')
                },
                body: JSON.stringify({
                    name: formData.employeeName,
                    institutionId: localStorage.getItem('institutionId'),
                    picture: formData.fileToUpload,
                    mobileNumber: 0,
                    joiningDate: formData.joiningDate,
                    employeeType: formData.employeeType,
                    monthlySalary: formData.monthlySalary,
                    fatherName: formData.fatherName,
                    fatherEducation: formData.education,
                    fatherMobileNumber: 0,
                    fatherOccupation: formData.fatherOccupation,
                    fatherIncome: formData.fatherIncome,
                    motherName: formData.motherName,
                    motherEducation: formData.education,
                    motherMobileNumber: 0,
                    motherOccupation: formData.motherOccupation,
                    motherIncome: formData.motherIncome,
                    gender: formData.gender,
                    religion: formData.religion,
                    bloodGroup: formData.bloodGroup,
                    dateOfBirth: formData.dateOfBirth,
                    experience: formData.specialization,
                    email: formData.email,
                    address: formData.address
                }),
            });
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };
    const Create = () => {
        console.log(formData.employeeName, formData.registrationNo, formData.joiningDate, formData.employeeType, formData.monthlySalary)
        if (
            formData.employeeName.trim() !== '' &&
            formData.registrationNo.trim() !== '' &&
            formData.joiningDate.trim() !== '' &&
            formData.employeeType.trim() !== '' &&
            formData.monthlySalary.trim() !== ''
        ) {
            console.log('entered if')
            handleCreate();
        } else {
            console.log('All fields are required.');
        }
    };
    return (
        <div className='overflow-auto p-9 h-screen w-full' style={{ backgroundColor: 'white' }}>
            {/* <div className='bg-white flex flex-wrap justify-between rounded-xl'>
          <div className=' flex items-center p-2 pt-3 pb-4' style={{ borderRadius: '10px', fontSize: '16px' }}><strong className='' style={{ borderRight: '1px solid #777', paddingRight: '10px', marginRight: '10px' }}>Students</strong> <TiHomeOutline /> <span> - Admission Form</span></div>
          <button className='flex items-center py-2 px-3 cursor-pointer text-white font-semibold m-2 rounded-3xl' style={{ background: 'linear-gradient(45deg, #7878e8, #8787e5)', lineHeight: '16px', fontSize: '11px' }}><CiImport color='white' /> <span className='pl-2'>Import Students</span></button>
        </div> */}
            <h3 className='text-center mb-2 font-semibold w-full text-3xl' style={{ color: '#ff808b' }}>Employee Form</h3>
            <div>
                <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', marginBottom: '20px', padding: '10px' }}>
                    <span className=''>Basic Information</span>
                    <span>[ *Required ]</span>
                </h5>
                <div className='disp-stu-adding my-1 mb-3'>
                    <div className='flex flex-col wid-stu-adding mx-2'>
                        <input type='text' name='employeeName' value={formData.employeeName} onChange={handleChange} placeholder='Name of the Employee' className='outline-black p-2 focus:outline-blue-500' />
                        <label className='flex flex-col mb-3'><span className='flex items-center'><span>Picture:</span><span className='pl-1' style={{ fontSize: '10px' }}>[ optional ]</span></span> <input type='file' name='fileToUpload' value={formData.fileToUpload} onChange={handleChange} className='bod-in p-2 focus:outline-blue-500 bg-white' /><span className='' style={{ fontSize: '10px' }}>[ Max size 100KB ]</span></label>
                    </div>
                    <div className='wid-stu-adding mx-2' style={{ marginTop: '-10px' }}>
                        <div class="relative flex items-center my-3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Last Reg: None</label>
                            <input type="text" name="registrationNo" value={formData.registrationNo} onChange={handleChange} placeholder="Registration No:"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                        <label className='flex flex-col mb-3' style={{ marginTop: '-10px' }}>Joining Date: <input type='date' name='joiningDate' value={formData.joiningDate} onChange={handleChange} className='p-2 bod-in focus:outline-blue-500' /></label>
                    </div>
                    <div className='wid-stu-adding mx-2 flex flex-col'>
                        <select className='p-2 mb-2 bod-in' name='employeeType' value={formData.employeeType} onChange={handleChange} required>
                            <option defaultChecked>Select*</option>
                            <option value='Principal'>Principal</option>
                            <option value='Management Staff'>Management Staff</option>
                            <option value='Teacher'>Teacher</option>
                            <option value='Accountant'>Accountant</option>
                            <option value='Store Management'>Store Management</option>
                            <option value='Other'>Other</option>
                        </select>
                        <input type='number' placeholder='Monthly Salary' name='monthlySalary' value={formData.monthlySalary} onChange={handleChange} className='p-2 bod-in' />
                        {/* <font className='mt-2' style={{ fontSize: '9px', color: '#999' }}>Student / Guardian mobile no to receive SMS / WhatsApp</font>
              <input type='tel' placeholder='Mobile No: e.g +44xxxxxxxxxx' className='p-2 bod-in' name='Gphone' /> */}
                    </div>
                </div>
                <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #9698d6, #a9abdb)', marginBottom: '20px', padding: '10px' }}>
                    <span className=''>Other Info</span>
                    <span>[ Optional ]</span>
                </h5>
                <div className='disp-stu-adding'>
                    <div className='wid-stu-adding mx-2'>
                        <input type='text' name='fatherName' value={formData.fatherName} onChange={handleChange} placeholder='Name of Father' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='text' name='cnic' value={formData.cnic} onChange={handleChange} placeholder='CNIC' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='text' name='education' value={formData.education} onChange={handleChange} placeholder='Education' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                    </div>
                    <div className='wid-stu-adding flex flex-col mx-2 mt-1'>
                        <select className='p-2 w-full my-2 bod-in' name='gender' value={formData.gender} onChange={handleChange} required>
                            <option defaultChecked>---Gender---</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <select className='p-2 w-full my-2 bod-in' name='religion' value={formData.religion} onChange={handleChange} name='religion' required>
                            <option defaultChecked>---Religion---</option>
                            <option>Hinduisiam</option>
                            <option>Islam</option>
                        </select>
                        <select className='p-2 w-full my-2 bod-in' name='bloodGroup' value={formData.bloodGroup} onChange={handleChange} required>
                            <option defaultChecked>---Blood Group---</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                    </div>
                    <div>
                        <input type='text' name='health' value={formData.specialization} onChange={handleChange} placeholder='Experience / Specialization' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='email' name='email' placeholder='email' value={formData.email} onChange={handleChange} className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
                        <div className="relative flex items-center my-3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Date of Birth</label>
                            <input type='date' className='my-2 bod-in bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none' name='dateOfBirth' value={formData.dateOfBirth} onChange={handleChange} placeholder='dd-mm-yyyy' />
                        </div>
                    </div>
                </div>
                <div className='disp-stu-adding mb-5'>
                    <div className='w-2/3 addr'>
                        <input type='text' name='address' value={formData.address} onChange={handleChange} placeholder='Address' className='outline-black p-2 bod-in my-2 w-11/12 addr focus:outline-blue-500' />
                    </div>
                    {/* <button className='text-white flex p-2 px-5 my-2 mb-5 items-center rounded-3xl' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }}><FaPlus color='white' /> <span className='pl-2'>Add Parents</span></button> */}
                </div>

                <hr />
                <div className='mb-20 mt-5 flex inlin justify-center'>
                    <button className='flex items-center text-white' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', padding: '10px 19px', fontSize: '15px', borderRadius: '2px' }} onClick={handleReset}><TfiReload color='white' /> <span className='pl-2'>Reset</span></button>
                    <button className='flex items-center text-white justify-center ml-3' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px' }} onClick={Create}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button>
                </div>
            </div>
        </div>
    );
}
export default AddEmployee;