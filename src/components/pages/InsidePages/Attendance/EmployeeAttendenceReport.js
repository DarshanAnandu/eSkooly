import React, { Component } from 'react';
import { CiSearch } from "react-icons/ci";
class EmployeeAttendenceReport extends Component {
    constructor(props) {
        super(props);
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);
        this.state = {
            date: formattedDate,
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
            const response = await fetch(`http://vidyalay.saanvigs.com/attendance/getEmpAttendance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    institutionId: localStorage.getItem('institutionId'),
                    date: this.state.date,
                })
            });
            const responseData = await response.json();
            console.log(responseData)
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if (Array.isArray(responseData)) {
                this.setState({ employeeInfo: responseData });
                localStorage.setItem('employeeInfo', JSON.stringify(responseData));
            } else {
                console.error('Invalid data format for employee info:', responseData);
                this.setState({ employeeInfo: [] });
            }
        } catch (error) {
            console.error('Info Error:', error);
            this.setState({ employeeInfo: [] });
        }
    };
    render() {
        return (
            <div className='p-9'>
                <div className='flex w-1/4 items-center'><input type='date' value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} className='focus:outline-none p-3 ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} /> <CiSearch size='25px' className='cursor-pointer' onClick={() => {
                    if (this.state.date !== '') {
                        this.getEmpInfo();
                    }
                }} /></div>
                <div className='flex items-center justify-between text-black mt-6'>
                    <div className='flex items-center'>
                        <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Copy</button>
                        <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>CSV</button>
                        <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Excel</button>
                        <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>PDF</button>
                        <button className='cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}>Print</button>
                        <button className='flex items-center cursor-pointer' style={{ background: 'linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%)', fontSize: '.88em', lineHeight: '1.6em', borderRadius: '2px', padding: '.5em 1em', marginLeft: '.167em', marginRight: '.167em', marginBottom: '.333em', border: '1px solid rgba(0,0,0,0.3)', }}><span>Column Visibility</span><span style={{ top: '-2px', color: 'rgba(70, 70, 70, 0.75)', fontSize: '8px', paddingLeft: '10px', lineHeight: '1em', }}>▼</span></button>
                    </div>
                    <div className='text-right'>
                        <label className='mb-1'>Search: <input type='search' className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px', }} /></label>
                    </div>
                </div>
                <table className='text-black bg-white w-full' style={{ background: '', color: '#333', borderBottom: '1px solid #111' }}>
                    <thead>
                        <tr className='h-0 font-bold' style={{ borderBottom: '1px solid #111' }}>
                            <th className='py-0 border-y-0 h-0' style={{ width: '37px', borderRight: '1px solid white', }}><div className='overflow-hidden'>DATE</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>DAY</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ width: '69px', borderRight: '1px solid white' }}><div className='overflow-hidden'>ID</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ width: '72px', borderRight: '1px solid white' }}><div className='overflow-hidden'>NAME</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ width: '65px', borderRight: '1px solid white' }}><div className='overflow-hidden'>Type</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'>STATUS</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ width: '147px', borderRight: '1px solid white' }}><div className='overflow-hidden'><b>Time</b><i>[Card Scanning]</i></div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(this.state.employeeInfo)}
                        {this.state.employeeInfo.length > 1 && this.state.employeeInfo.attendanceRecords.map((e, idx) => (
                            <tr style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
                                {/* <td className='' colSpan={8} style={{ verticalAlign: 'middle', textAlign: 'center' }}>No data Available in the table</td> */}
                                <td>{e._id}</td>
                                <td>{e.date}</td>
                                <td>{e.employeeId}</td>
                                <td>{e.status}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='flex justify-between'>
                    <div className='' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', }}><span>Showing 0 to 0 of 0 entries</span></div>
                    <div className='text-right m-0 flex flex-end cursor-default' style={{ paddingTop: '0.85em', whiteSpace: 'nowrap', marginTop: '2px', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none', }}>
                        <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Previous</button>
                        <button className='m-1 p-3 py-2 bod-in' style={{ color: '#868e96', pointerEvents: 'none', backgroundColor: '#fff', borderColor: '#ddd', }}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default EmployeeAttendenceReport;