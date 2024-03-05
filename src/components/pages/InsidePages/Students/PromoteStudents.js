import { TfiReload } from "react-icons/tfi";
import React, { Component } from 'react';
import { CiSearch } from "react-icons/ci";

class PromoteStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentsInfo: JSON.parse(localStorage.getItem('studentsInfo')) || [],
        };
    }
    componentDidMount() {
        this.getClassesInfo();
    }

    async getClassesInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/student/getstudents?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            this.setState({ studentsInfo: responseData });
            localStorage.setItem('studentsInfo', JSON.stringify(responseData));
            console.log('done')
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
            <div className='m-9'>
                <div className='flex items-center justify-between'>
                    <div className='w-3/5 flex m-2'>
                        <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
                        <div className='flex w-1/2 items-center'><select className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
                    </div>
                    <div className=' h-10' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><TfiReload className='h-full w-16 p-3 cursor-pointer' /></div>
                </div>
                <form className='mt-5 w-full'>
                    <table className='mb-4 w-full' style={{ color: '#9698d6' }}>
                        <thead>
                            <tr className='w-full' style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
                                <td style={{ padding: '.75rem' }}><b>ID</b></td>
                                <td style={{ padding: '.75rem' }}><b>Name</b></td>
                                <td style={{ padding: '.75rem' }}><b>Class</b></td>
                                <td style={{ padding: '.75rem' }}><b>P/D in</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.studentsInfo.map((e, idx) => (
                                <tr key={idx} className='w-full' style={{ backgroundColor: idx % 2 === 0 ? '' : 'rgba(0,0,0,.05)' }}>
                                    <td style={{ padding: '.75rem' }}><input type="text" className="bg-transparent" value={e.registrationNumber} /></td>
                                    <td style={{ padding: '.75rem' }}>{e.name}</td>
                                    <td style={{ padding: '.75rem' }}>{e.class_}</td>
                                    <td style={{ padding: '.75rem' }}>
                                        <select className="w-full bod-in text-[#495057]" style={{ height: 'calc(2.25rem + 2px)' }}>
                                            <option>--select class--</option>
                                            {this.state.studentsInfo.map((e, idx) => (<option>{e.class_}</option>))}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='text-center'>
                        <button className='text-white bg-blue-500 py-2 px-10'>SUBMIT</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default PromoteStudents;