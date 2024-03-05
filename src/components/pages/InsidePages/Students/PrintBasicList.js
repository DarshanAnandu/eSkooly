import React, { Component } from 'react';
import { CiSearch } from "react-icons/ci";

class PrintBasicList extends Component {
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
            <div className='p-9'>
                <div className='flex w-1/4 items-center'><select className='focus:outline-none p-3 ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
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
                <table className='text-black bg-white w-full'>
                    <thead>
                        <tr className='h-0 font-bold text-[#333333]' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)' }}>
                            <th className='py-[10px] px-[18px] border-b-[#111111] border-y-[1px] h-0' style={{ width: '37px', borderRight: '1px solid white', textAlign: 'left' }}><div className='overflow-hidden text-left'>Sr</div></th>
                            <th className='py-[10px] px-[18px] border-b-[#111111] border-y-[1px] h-0' style={{ width: '147px', borderRight: '1px solid white', textAlign: 'left' }}><div className='overflow-hidden text-left'>Registration No.</div></th>
                            <th className='py-[10px] px-[18px] border-b-[#111111] border-y-[1px] h-0' style={{ width: '69px', borderRight: '1px solid white', textAlign: 'left' }}><div className='overflow-hidden text-left'>Name</div></th>
                            <th className='py-[10px] px-[18px] border-b-[#111111] border-y-[1px] h-0' style={{ width: '72px', borderRight: '1px solid white', textAlign: 'left' }}><div className='overflow-hidden text-left'>Father</div></th>
                            <th className='py-[10px] px-[18px] border-b-[#111111] border-y-[1px] h-0' style={{ width: '65px', borderRight: '1px solid white', textAlign: 'left' }}><div className='overflow-hidden text-left'>Class</div></th>
                            <th className='py-[10px] px-[18px] border-b-[#111111] border-y-[1px] h-0' style={{ width: '147px', borderRight: '1px solid white', textAlign: 'left' }}><div className='overflow-hidden text-left'>Fee Remainings</div></th>
                            <th className='py-[10px] px-[18px] border-b-[#111111] border-y-[1px] h-0' style={{ width: '71px', textAlign: 'left' }}><div className='overflow-hidden'>Phone</div></th>
                        </tr>
                    </thead>
                    <tbody className='border-b-[#111111] border-b'>
                        {this.state.studentsInfo.map((e, idx) => (
                            <tr key={idx} className='' style={{ background: idx%2===0 ? 'rgb(255, 255, 255)' : 'rgba(0, 0, 0, .05)' }}>
                                {/* <td className='' colSpan={8} style={{ verticalAlign: 'middle', textAlign: 'left' }}>No data Available in the table</td> */}
                                <td className='py-[8px] px-[10px]' style={{ verticalAlign: 'middle', textAlign: 'left' }}>{idx}</td>
                                <td className='py-[8px] px-[10px]' style={{ verticalAlign: 'middle', textAlign: 'left' }}>{e.registrationNumber}</td>
                                <td className='py-[8px] px-[10px]' style={{ verticalAlign: 'middle', textAlign: 'left' }}>{e.name}</td>
                                <td className='py-[8px] px-[10px]' style={{ verticalAlign: 'middle', textAlign: 'left' }}>{e.father.name}</td>
                                <td className='py-[8px] px-[10px]' style={{ verticalAlign: 'middle', textAlign: 'left' }}>{e.class_}</td>
                                <td className='py-[8px] px-[10px]' style={{ verticalAlign: 'middle', textAlign: 'left' }}>0</td>
                                <td className='py-[8px] px-[10px]' style={{ verticalAlign: 'middle', textAlign: 'left' }}>{e.mobileNumber}</td>
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
export default PrintBasicList;