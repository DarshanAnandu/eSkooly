import React, { Component } from 'react';
import { TiHomeOutline } from "react-icons/ti";
import { TfiWrite } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { TfiRulerPencil } from "react-icons/tfi";
import { GoBook } from "react-icons/go";
class HomeWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // feefor: '',
            homeWorkInfo: [],
        };
    }
    // componentDidMount() {
    //     this.getHomeWorkInfo();
    // }

    async getHomeWorkInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/homework/getHomework?institutionId=${localStorage.getItem('institutionId')}&date=${localStorage.getItem('teacherId')}&classId=${localStorage.getItem('classId')}&teacherId=${localStorage.getItem('teacherId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            this.setState({ studentsInfo: responseData });
            // localStorage.setItem('studentsInfo', JSON.stringify(responseData));
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
            <div className='p-9'>
                <div className='flex justify-between items-center p-3 rounded bg-white'>
                    <div className="flex items-center">
                        <b>Homework</b>
                        <span className="px-2">|</span>
                        <TiHomeOutline />
                        <span className="px-1">- Homeworks</span>
                    </div>
                    <div>
                        <button className='flex items-center text-white justify-center ml-3 px-8 bg-violet-300' style={{ borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}>Add Homework</button>
                    </div>
                </div>
                <div className='flex items-center p-3 mt-2 bg-white rounded'>
                    <div class="relative flex items-center my-3 mt-5 mx-2 w-1/4">
                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Homework Date*</label>
                        <input type="text" placeholder="******"
                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                    </div>
                    <div class="relative flex items-center my-3 mx-2 mt-5 w-1/4">
                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Class*</label>
                        <select name="timezone" id='searchlist'
                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                            <option value="All Teachers">All Classes</option>
                        </select>
                    </div>
                    <div class="relative flex items-center my-3 mx-2 mt-5 w-1/4">
                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Teacher*</label>
                        <select name="timezone" id='searchlist'
                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                            <option value="All Teachers">All Teachers</option>
                        </select>
                    </div>
                    <button className='flex items-center text-white justify-center ml-3 mx-2 px-3 h-min py-2 rounded-3xl' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }}> Search</button>
                </div>
                {/* <div className='mt-4 p-3 bg-white'>
                <span className='flex justify-center'>No Data Found!</span>
            </div> */}
                <div>
                    <div className="flex bod-in rounded-xl overflow-auto">
                        <div className="w-[30%] flex flex-col p-2 text-[10px]">
                            <div className="flex">
                                <div className="flex justify-center m-1 p-2 rounded-2xl text-[#fff] w-1/2" style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', }}>
                                    <div className="flex flex-col items-center justify-between">
                                        <span>TEACHER</span>
                                        <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%] m-[4px] mx-[0] my-auto flex items-center justify-center"><SlUser className="" size='36px' color="#4d4cac" /></div>
                                        <span>ADMIN</span>
                                    </div>
                                </div>
                                <div className="flex justify-center m-1 p-2 rounded-2xl text-[#fff] w-1/2" style={{ background: 'linear-gradient(45deg, #9698d6, #a9abdb)', }}>
                                    <div className="flex flex-col items-center justify-between">
                                        <span>CLASS</span>
                                        <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%] m-[4px] mx-[0] my-auto flex items-center justify-center"><TfiRulerPencil color="#9698d6" size='35px' /></div>
                                        <span>10</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex justify-center m-1 p-2 rounded-2xl text-[#fff] w-1/2" style={{ background: 'linear-gradient(45deg, #5e81f4, #7191f7)', }}>
                                    <div className="flex flex-col items-center justify-between">
                                        <span>Friday</span>
                                        <strong className="text-[40px]">01</strong>
                                        <span>March, 2024</span>
                                    </div>
                                </div>
                                <div className="flex justify-center m-1 p-2 rounded-2xl text-[#fff] w-1/2" style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', }}>
                                    <div className="flex flex-col items-center justify-between">
                                        <span>SUBJECT</span>
                                        <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%] m-[4px] mx-[0] my-auto flex items-center justify-center"><GoBook color="#ff808b" size='35px' /></div>
                                        <span>Maths</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[70%] p-3 flex justify-between">
                            <div className="flex flex-col">
                                <span className="flex items-center font-semibold text-[#ff808b]"><TfiWrite color="#ff808b" /><span className="pl-2">Assignment</span></span>
                                <span>Algebra test</span>
                            </div>
                            <div className="flex">
                                <div className='p-2 flex justify-center items-center cursor-pointer' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #5e81f4, #7191f7)', borderRadius: '15px', margin: '2px' }}><FaPencilAlt size='11px' color='white' /></div>
                                <div className='p-2 flex justify-center items-center cursor-pointer' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #ff808b, #f79099)', borderRadius: '15px', margin: '2px' }}><IoTrashOutline size='11px' color='white' /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomeWork;  