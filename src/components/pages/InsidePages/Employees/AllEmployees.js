import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { TfiReload } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineIdcard } from "react-icons/ai";
import { TfiPrinter } from "react-icons/tfi";
import { FaPencilAlt } from "react-icons/fa";

class AllEmployees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feefor: '',
            employeeInfo: JSON.parse(localStorage.getItem('employeeInfo')) || [],
        };
    }
    componentDidMount() {
        this.getClassesInfo();
    }

    async getClassesInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/employee/getemployees?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            this.setState({ employeeInfo: responseData });
            localStorage.setItem('employeeInfo', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };
    render() {
        return (
            <div className='h-screen w-full overflow-auto p-9'>
                <div className='flex items-center justify-between'>
                    <div className='w-3/5'>
                        <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Employee' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
                    </div>
                    <div className='flex h-10' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><TfiReload className='h-full w-16 p-3 cursor-pointer' /><AiOutlineIdcard className='h-full w-16 p-3 cursor-pointer' /> <TfiPrinter className='h-full p-3 w-16 cursor-pointer' /></div>
                </div>
                <div className='flex flex-wrap p-3'>
                    {this.state.employeeInfo.map((e, idx) => (
                        <div key={idx} className='bg-white flex flex-col justify-center items-center rounded-xl p-6 m-3'>
                            <img src='https://eskooly.com/bb/uploads/employees/no-image.png' alt='person-logo' style={{ height: '80px', width: '80px' }} />
                            <span style={{ fontSize: '11px', color: '#333' }}> {e.name}</span>
                            <b style={{ fontSize: '11px', color: '#555' }}>Teacher</b>
                            <div className='flex'>
                                <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #9698d6, #a9abdb)', borderRadius: '15px', margin: '2px' }}><CiSearch size='11px' color='white' /></div>
                                <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #5e81f4, #7191f7)', borderRadius: '15px', margin: '2px' }}><FaPencilAlt size='11px' color='white' /></div>
                                <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #ff808b, #f79099)', borderRadius: '15px', margin: '2px' }}><IoTrashOutline size='11px' color='white' /></div>
                            </div>
                        </div>
                    ))}
                    <Link to='/eSkooly/Employees/Add-Employee'>
                        <div className='flex flex-col p-8 text-white cursor-pointer mt-5 items-center justify-center' style={{ background: 'linear-gradient(45deg, #4b49ac, #5d5ba9)', borderRadius: '50%', height: '155px', width: '155px' }}>
                            <FaPlus />
                            {/* <span>+</span> */}
                            <span className=''>Add Subject</span>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}
export default AllEmployees;