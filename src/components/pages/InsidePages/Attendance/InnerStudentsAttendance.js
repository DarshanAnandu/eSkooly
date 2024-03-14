import React, { Component } from "react";

class InnerStudentsAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // feefor: '',
            datas: JSON.parse(localStorage.getItem('stuAttend')) || [], //(localStorage.setItem('stuAttend', [{ cls: this.state.cls, date: this.state.date }]);)
            studentsInfo: JSON.parse(localStorage.getItem('studentsInfo')) || [],
        };
    }
    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem('stuAttend')))
        this.getStudentsInfo();
    }

    async getStudentsInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/student/getstudents?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            this.setState({ studentsInfo: responseData });
            localStorage.setItem('studentsInfo', JSON.stringify(responseData));
            console.log('get req success')
            console.log(responseData)
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
                                    <td className="p-[10px]"><b>Status</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.studentsInfo.map((student, idx) => (
                                    this.state.datas[0].cls === student.class_ && (
                                        <tr key={idx} className="text-[#9698d6]" style={{ background: idx % 2 !== 0 ? 'white' : '' }}>
                                            <td className="p-[10px]"><input type="text" className="bg-transparent outline-none text-[#9698d6]" value={student.registrationNumber} /></td>
                                            <td className="p-[10px]">{student.name}</td>
                                            <td className="p-[10px]">{student.father.name}</td>
                                            <td className="p-[10px] w-[100px] flex justify-between">
                                                {student.attendanceRecords.map((record, recordIdx) => (
                                                    record.date === this.state.datas[0].date && (
                                                        <React.Fragment key={recordIdx}>
                                                            <input
                                                                className="hidden p-0"
                                                                type="radio"
                                                                name={`attendance_${idx}`}
                                                                id={`Present_${recordIdx}`}
                                                                value="P"
                                                                checked={record.status === 'present' || record.status === null}
                                                            />
                                                            <label htmlFor={`Present_${recordIdx}`} className={`text-[12px] w-[20px] h-[20px] rounded-[20px] px-1 ${record.status === 'present' ? 'text-[#fff] bg-[#5e81f4]' : 'text-[#9698d6] border-[1px] border-[#333]'}`}>P</label>
                                                            <input
                                                                className="hidden p-0"
                                                                type="radio"
                                                                name={`attendance_${idx}`}
                                                                id={`Leave_${recordIdx}`}
                                                                value="L"
                                                                checked={record.status === 'leave'}
                                                            />
                                                            <label htmlFor={`Leave_${recordIdx}`} className={`text-[12px] w-[20px] h-[20px] rounded-[20px] px-1 ${record.status === 'leave' ? 'text-[#fff] bg-[#5e81f4]' : 'text-[#9698d6] border-[1px] border-[#333]'}`}>L</label>
                                                            <input
                                                                className="hidden p-0"
                                                                type="radio"
                                                                name={`attendance_${idx}`}
                                                                id={`Absent_${recordIdx}`}
                                                                value="A"
                                                                checked={record.status === 'absent'}
                                                            />
                                                            <label htmlFor={`Absent_${recordIdx}`} className={`text-[12px] w-[20px] h-[20px] rounded-[20px] px-1 ${record.status === 'absent' ? 'text-[#fff] bg-[#5e81f4]' : 'text-[#9698d6] border-[1px] border-[#333]'}`}>A</label>
                                                        </React.Fragment>
                                                    )
                                                ))}
                                            </td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>
                        <h5 className="flex justify-center"><button className="bg-[#FF5370] border-[#FF5370] border-[1px] text-[#fff] cursor-pointer rounded-[2px] text-[15px] py-[10px] px-[19px] hover:bg-transparent hover:text-[#FF5370]" style={{ transition: 'all ease-in 0.3s' }}><span className="pl-2">Submit</span></button></h5>
                    </form>
                </div>
            </div >
        );
    }
}
export default InnerStudentsAttendance;