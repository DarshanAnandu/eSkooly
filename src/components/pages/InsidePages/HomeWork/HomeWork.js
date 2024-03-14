import React, { Component } from 'react';
import { TiHomeOutline } from "react-icons/ti";
import { TfiWrite } from "react-icons/tfi";
import { IoTrashOutline } from "react-icons/io5";
import { FaPencilAlt } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { TfiRulerPencil } from "react-icons/tfi";
import { GoBook } from "react-icons/go";
import Modal from '../../../Modal';
class HomeWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // feefor: '',
            date: new Date().toISOString().split('T')[0],
            cls: '',
            cls_id: '',
            teachers: '',
            teachers_id: '',
            date_HW: new Date().toISOString().split('T')[0],
            cls_HW: '',
            cls_id_HW: '',
            sub_HW: '',
            sub_id_HW: '',
            set_by_HW: '',
            set_by_id_HW: '',
            HomeWork_Detail_HW: '',
            open: true,
            homeWorkInfo: { homeworkDetails: [] },
            classesInfo: JSON.parse(localStorage.getItem('Classes')) || [],
            employeeInfo: JSON.parse(localStorage.getItem('employeeInfo')) || [],
        };
    }
    componentDidMount() {
        this.getClassesInfo();
        this.getEmpInfo();
        this.getHomeWorkInfo();
    }

    async getClassesInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/class/getclasses?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            console.log(responseData);
            this.setState({ classesInfo: responseData });
            localStorage.setItem('Classes', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };

    async getEmpInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/employee/getemployees?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            console.log(responseData[2].employeeId)
            console.log(responseData)
            console.log()
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

    async getHomeWorkInfo() {
        try {
            console.log(this.state.date, this.state.cls_id, this.state.teachers_id, 'id details')
            console.log(this.state.date)
            const response = await fetch(`http://vidyalay.saanvigs.com/homework/getHomework?institutionId=${localStorage.getItem('institutionId')}&date=${this.state.date}&classId=${this.state.cls_id}&teacherId=${this.state.teachers_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            console.log(responseData, 'response data')
            this.setState({ homeWorkInfo: responseData });
            localStorage.setItem('studentsInfo', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };

    async postHW() {
        try {
            console.log(this.state.date, this.state.cls_id, this.state.teachers_id, 'id details')
            console.log(this.state.date)
            const response = await fetch(`http://vidyalay.saanvigs.com/homework/createHomework`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    institutionId: localStorage.getItem('institutionId'),
                    date: this.state.date_HW,
                    className: this.state.cls_HW,
                    classId: this.state.cls_id_HW,
                    teacher: this.state.set_by_HW,
                    teacherId: this.state.set_by_id_HW,
                    subject: this.state.sub_HW,
                    homework: this.state.HomeWork_Detail_HW
                })
            });
            const responseData = await response.json();
            console.log(responseData, 'response data')
            this.setState({ homeWorkInfo: responseData });
            localStorage.setItem('studentsInfo', JSON.stringify(responseData));
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
            <div className='p-9 overflow-auto'>
                <div className='flex justify-between items-center p-3 rounded-[10px] bg-white'>
                    <div className="flex items-center">
                        <b>Homework</b>
                        <span className="px-2">|</span>
                        <TiHomeOutline />
                        <span className="px-1">- Homeworks</span>
                    </div>
                    <div>
                        <button className='flex items-center text-white justify-center ml-3 px-8 bg-violet-300' style={{ borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }} onClick={() => this.setState({ open: true })}>Add Homework</button>
                    </div>
                </div>
                <div className='flex items-center p-3 my-2 bg-white  rounded-[10px]'>
                    <div class="relative flex items-center my-3 mt-5 mx-2 w-1/4">
                        <label class="text-[10px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Homework Date*</label>
                        <input type="date" value={this.state.date} onChange={(e) => { console.log(e.target.value); console.log(this.state.date); this.setState({ date: e.target.value }) }}
                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                    </div>
                    <div class="relative flex items-center my-3 mx-2 mt-5 w-1/4">
                        <label class="text-[10px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Class*</label>
                        <select name="timezone" id='searchlist' value={this.state.cls} onChange={(e) => {
                            this.setState({ cls: e.target.value, cls_id: this.state.classesInfo[e.target.selectedIndex - 1].classID })
                            console.log(e.target.value, this.state.classesInfo[e.target.selectedIndex - 1].classID)
                        }}
                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                            <option value="All Teachers">All Classes</option>
                            {this.state.classesInfo.length > 0 && this.state.classesInfo.map((e, idx) => <option>{e.className}</option>)}
                        </select>
                    </div>
                    <div class="relative flex items-center my-3 mx-2 mt-5 w-1/4">
                        <label class="text-[10px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Teacher*</label>
                        <select name="timezone" id='searchlist' value={this.state.teachers} onChange={(e) => {
                            this.setState({ teachers: e.target.value, teachers_id: this.state.employeeInfo[e.target.selectedIndex - 1].employeeId })
                            console.log(e.target.value, this.state.employeeInfo[e.target.selectedIndex - 1].employeeId)
                        }}
                            class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                            <option value="All Teachers">All Teachers</option>
                            {this.state.employeeInfo.length > 0 && this.state.employeeInfo.map((e, idx) => <option>{e.name}</option>)}
                        </select>
                    </div>
                    <button className='flex items-center text-white justify-center ml-3 mx-2 px-3 h-min py-2 rounded-3xl' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }} onClick={() => this.getHomeWorkInfo()}> Search</button>
                </div>
                <Modal className='' h={`468px`} w={`460px`} p={`0`} isOpen={this.state.open} onClose={() => this.setState({ open: false })} align={`top`}>
                    <div className='flex justify-between border-b w-full p-[13px] border-b-[#e9ecef]'>
                        <strong>Add Homework or Assignment</strong>
                        <button className='w-[22px] h-[22px] rounded-[50%] p-[3px] text-[18px] cursor-pointer flex justify-center items-center leading-[16px] m-0 text-[#fff]' style={{ background: 'linear-gradient(87deg, #f5365c 0, #f56036 100%)' }} onClick={() => this.setState({ open: false })}>x</button>
                    </div>
                    <div className='border-b w-full border-b-[#e9ecef]'>
                        <div className='flex'>
                            <div class="relative flex items-center my-3 mx-2 mt-5 w-1/2">
                                <label class="text-[10px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Homework Date*</label>
                                <input type="date" value={this.state.date_HW} onChange={(e) => { this.setState({ date_HW: e.target.value }) }}
                                    class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                            </div>
                            <div class="relative flex items-center my-3 mx-2 mt-5 w-1/2">
                                <label class="text-[10px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Set by*</label>
                                <select name="timezone" id='searchlist' value={this.state.set_by_HW} onChange={(e) => {
                                    this.setState({ set_by_HW: e.target.value, set_by_id_HW: this.state.employeeInfo[e.target.selectedIndex - 1].employeeId })
                                    console.log(e.target.value, this.state.employeeInfo[e.target.selectedIndex - 1].employeeId)
                                }}
                                    class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                                    <option value="All Teachers">All Teachers</option>
                                    {this.state.employeeInfo.length > 0 && this.state.employeeInfo.map((e, idx) => <option>{e.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='flex'>
                            <div class="relative flex items-center my-3 mx-2 mt-5 w-1/2">
                                <label class="text-[10px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Class*</label>
                                <select name="timezone" id='searchlist' value={this.state.cls_HW} onChange={(e) => {
                                    this.setState({ cls_HW: e.target.value, cls_id_HW: this.state.classesInfo[e.target.selectedIndex - 1].classID })
                                    console.log(e.target.value, this.state.classesInfo[e.target.selectedIndex - 1].classID)
                                }}
                                    class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                                    <option value="All Teachers">All Classes</option>
                                    {this.state.classesInfo.length > 0 && this.state.classesInfo.map((e, idx) => <option>{e.className}</option>)}
                                </select>
                            </div>
                            <div class="relative flex items-center my-3 mx-2 mt-5 w-1/2">
                                <label class="text-[10px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Subject*</label>
                                <select name="timezone" id='searchlist' value={this.state.sub_HW} onChange={(e) => {
                                    this.setState({ sub_HW: e.target.value, sub_id_HW: this.state.classesInfo[e.target.selectedIndex - 1].classID })
                                    console.log(e.target.value, this.state.classesInfo[e.target.selectedIndex - 1].classID)
                                }}
                                    class="px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                                    <option value="All Teachers">All Subject</option>
                                    <option>Tamil</option>
                                    <option>English</option>
                                    <option>Maths</option>
                                    <option>Science</option>
                                    <option>Social Science</option>
                                    {/* {this.state.employeeInfo.length > 0 && this.state.employeeInfo.map((e, idx) => <option>{e.name}</option>)} */}
                                </select>
                            </div>
                        </div>
                        <div class="relative flex items-center my-3 mx-2 mt-5 w-[97%]">
                            <label class="text-[10px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Homework Detail*</label>
                            <textarea className='px-5 bod-sin py-3.5 bg-transparent text-black w-full text-sm border-2 rounded outline-none' rows={8} name='HomeWork_Detail_HW' value={this.state.HomeWork_Detail_HW} onChange={(e) => { this.setState({ HomeWork_Detail_HW: e.target.value }) }} style={{ borderRadius: '30px', }} />
                        </div>
                    </div>
                    <div className='p-[13px] flex justify-end'>
                        <button className='text-[#999] border text-[11px] leading-[16px] border-[#999] rounded-[15px] cursor-pointer py-[8px] px-[14px] mr-[.25rem]' style={{ backgroundColor: 'rgb(240, 240, 240)' }} onClick={() => this.setState({ open: false })}>Close</button>
                        <button className='text-[#fff] m-0 text-[11px] rounded-[15px] leading-[16px] cursor-pointer py-[8px] px-[14px] mr-[.25rem]' style={{ background: 'linear-gradient(87deg, #2dce89 0, #2dcecc 100%)' }} onClick={() => {
                            if (this.state.HomeWork_Detail_HW !== '' && this.state.cls_HW !== '' && this.state.sub_HW !== '' && this.state.set_by_HW !== '' && this.state.date_HW !== '') {
                                console.log('entered if')
                                this.postHW()
                            } else {
                                console.log('not entered')
                                console.log('datas', this.state.HomeWork_Detail_HW, this.state.cls_HW, this.state.set_by_HW, this.state.sub_HW, this.state.date_HW)
                            }
                        }}>Add HomeWork</button>
                    </div>
                </Modal>
                {/* <div className='mt-4 p-3 bg-white'>
                <span className='flex justify-center'>No Data Found!</span>
            </div> */}
                <div className='flex flex-col flex-wrap'>
                    {this.state.homeWorkInfo.homeworkDetails && this.state.homeWorkInfo.homeworkDetails.map((e, idx) => {
                        const dateObj = new Date(e.date);

                        // Define an array of weekdays
                        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                        // Extract the day of the week and format the date
                        const dayOfWeek = weekdays[dateObj.getDay()];
                        const dayOfMonth = dateObj.getDate();
                        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObj);
                        const year = dateObj.getFullYear();

                        return (
                            <div key={idx} className="flex bod-in bg-white rounded-[10px] my-2 overflow-auto">
                                <div className="w-[30%] flex flex-col p-2 text-[10px]">
                                    <div className="flex">
                                        <div className="flex justify-center m-1 p-2 rounded-2xl text-[#fff] w-1/2" style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', }}>
                                            <div className="flex flex-col items-center justify-between">
                                                <span>TEACHER</span>
                                                <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%] m-[4px] mx-[0] my-auto flex items-center justify-center"><SlUser className="" size='36px' color="#4d4cac" /></div>
                                                <span>{e.teacher}</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center m-1 p-2 rounded-2xl text-[#fff] w-1/2" style={{ background: 'linear-gradient(45deg, #9698d6, #a9abdb)', }}>
                                            <div className="flex flex-col items-center justify-between">
                                                <span>CLASS</span>
                                                <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%] m-[4px] mx-[0] my-auto flex items-center justify-center"><TfiRulerPencil color="#9698d6" size='35px' /></div>
                                                <span>{e.className}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex justify-center m-1 p-2 rounded-2xl text-[#fff] w-1/2" style={{ background: 'linear-gradient(45deg, #5e81f4, #7191f7)', }}>
                                            <div className="flex flex-col items-center justify-between">
                                                <span>{dayOfWeek}</span>
                                                <strong className="text-[40px]">{dayOfMonth}</strong>
                                                <span>{month}, {year}</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center m-1 p-2 rounded-2xl text-[#fff] w-1/2" style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', }}>
                                            <div className="flex flex-col items-center justify-between">
                                                <span>SUBJECT</span>
                                                <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%] m-[4px] mx-[0] my-auto flex items-center justify-center"><GoBook color="#ff808b" size='35px' /></div>
                                                <span>{e.subject}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[70%] p-3 flex justify-between">
                                    <div className="flex flex-col">
                                        <span className="flex items-center font-semibold text-[#ff808b]"><TfiWrite color="#ff808b" /><span className="pl-2">Assignment</span></span>
                                        <span>{e.homework}</span>
                                    </div>
                                    <div className="flex">
                                        <div className='p-2 flex justify-center items-center cursor-pointer' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #5e81f4, #7191f7)', borderRadius: '15px', margin: '2px' }}><FaPencilAlt size='11px' color='white' /></div>
                                        <div className='p-2 flex justify-center items-center cursor-pointer' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #ff808b, #f79099)', borderRadius: '15px', margin: '2px' }}><IoTrashOutline size='11px' color='white' /></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default HomeWork;  