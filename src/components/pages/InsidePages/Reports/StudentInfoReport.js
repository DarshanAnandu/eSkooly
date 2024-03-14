import { CiSearch } from "react-icons/ci";
const StudentInfoReport = () => {
    return (
        <div className='p-9 overflow-x-auto max-w-full'>
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
            <div className='relative overflow-auto'>
                <table className='text-black bg-white w-full'>
                    <thead>
                        <tr className='h-0 font-bold text-white' style={{ background: 'linear-gradient(87deg, #8898aa 0, #888aaa 100%)' }}>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white', }}><div className='overflow-hidden'>Sr</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>ID</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Name</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Father</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Class</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Discount in Fee</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Admission Date</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Date of Birth</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Age</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Gender</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>B-form</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Religion</div></th>
                            <th className='py-0 border-y-0 h-0' style={{ borderRight: '1px solid white' }}><div className='overflow-hidden'>Cast</div></th>
                            <th className='py-0 border-y-0 h-0' style={{}}><div className='overflow-hidden'>Status</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td className='' colSpan={14} style={{ verticalAlign: 'middle', textAlign: 'center' }}>No data Available in the table</td> */}
                            <td className='' style={{ verticalAlign: 'middle' }}>1</td>
                            <td className='' style={{ verticalAlign: 'middle' }}>4582333</td>
                            <td className='' style={{ verticalAlign: 'middle' }}>Anuj Pandey</td>
                            <td className='' style={{ verticalAlign: 'middle' }}></td>
                            <td className='' style={{ verticalAlign: 'middle' }}>10</td>
                            <td className='' style={{ verticalAlign: 'middle' }}>10%</td>
                            <td className='' style={{ verticalAlign: 'middle' }}>19-02-2024</td>
                            <td className='' style={{ verticalAlign: 'middle' }}></td>
                            <td className='' style={{ verticalAlign: 'middle' }}></td>
                            <td className='' style={{ verticalAlign: 'middle' }}></td>
                            <td className='' style={{ verticalAlign: 'middle' }}></td>
                            <td className='' style={{ verticalAlign: 'middle' }}></td>
                            <td className='' style={{ verticalAlign: 'middle' }}></td>
                            <td className='' style={{ verticalAlign: 'middle' }}>Active</td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
export default StudentInfoReport;