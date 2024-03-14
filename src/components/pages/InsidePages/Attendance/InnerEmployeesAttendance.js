import React, { Component } from "react";

class InnerEmployeesAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: localStorage.getItem('empDat') || '',
            employeeInfo: [],
        };
    }
    componentDidMount() {
        const storedEmployeeInfo = localStorage.getItem('employeeInfo');
        if (storedEmployeeInfo) {
            try {
                const parsedEmployeeInfo = JSON.parse(storedEmployeeInfo);
                this.setState({ employeeInfo: parsedEmployeeInfo });
            } catch (error) {
                console.error('Error parsing employee info from localStorage:', error);
                this.setState({ employeeInfo: [] });
            }
        } else {
            this.setState({ employeeInfo: [] });
        }
        this.getEmpInfo();
    }

    async getEmpInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/employee/getemployees?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            // console.log(responseData, 'response data');
            if (Array.isArray(responseData)) {
                this.setState({ employeeInfo: responseData });
                localStorage.setItem('employeeInfo', JSON.stringify(responseData));
            } else {
                console.error('Invalid data format for employee info:', responseData);
                this.setState({ employeeInfo: [] });
            }
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
            <div className="p-9">
                <div>
                    <h6 className="text-center">Attendance Not Marked Yet for "Employees" on 06 March 2024
                    </h6>
                    <h5 className="text-center">Please Mark Attendance</h5>
                    <form className="w-full flex flex-col justify-center items-center">
                        <table className="w-[80%]">
                            <thead>
                                <tr className="text-[#fff]" style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)' }}>
                                    <td className="p-[10px]"><b>ID</b></td>
                                    <td className="p-[10px]"><b>Employee Name</b></td>
                                    <td className="p-[10px]"><b>Father Name</b></td>
                                    <td className="p-[10px]"><b>Employee Type</b></td>
                                    <td className="p-[10px]"><b>Status</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.employeeInfo.map((e, idx) => (
                                    <tr key={idx} className="text-[#9698d6]" style={{ background: idx % 2 !== 0 ? 'white' : '', }}>
                                        <td className="p-[10px]"><input type="text" className="bg-transparent outline-none text-[#9698d6]" value={e.employeeId} /></td>
                                        <td className="p-[10px]">{e.name}</td>
                                        <td className="p-[10px]">{e.fatherName}</td>
                                        <td className="p-[10px]">{e.employeeType}</td>
                                        <td className="p-[10px] w-[100px] flex justify-between">
                                            <input className="hidden p-0" type="radio" name="attendance" id="Present" value='P' />
                                            <label htmlFor='Present' className='text-[#fff] text-[12px] bg-[#5e81f4] w-[20px] h-[20px] rounded-[20px] px-1' style={{ border: '2px solid #5e81f4' }}>P</label>
                                            <input className="hidden p-0" type="radio" name="attendance" id="Present" value='L' />
                                            <label htmlFor='Present' className='text-[#9698d6] flex justify-center items-center text-[12px] w-[20px] h-[20px] rounded-[20px] px-1' style={{ border: '1px solid #333' }}>L</label>
                                            <input className="hidden p-0" type="radio" name="attendance" id="Present" value='A' />
                                            <label htmlFor='Present' className='text-[#9698d6] flex justify-center items-center text-[12px] w-[20px] h-[20px] rounded-[20px] px-1' style={{ border: '1px solid #333' }}>A</label>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h5 className="flex justify-center"><button className="bg-[#FF5370] border-[#FF5370] border-[1px] text-[#fff] cursor-pointer rounded-[2px] text-[15px] py-[10px] px-[19px] hover:bg-transparent hover:text-[#FF5370]" style={{ transition: 'all ease-in 0.3s' }}><span className="pl-2">Submit</span></button></h5>
                    </form>
                </div>
            </div>
        );
    }
}
export default InnerEmployeesAttendance;