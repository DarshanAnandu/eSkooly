import { IoMdCheckmark } from "react-icons/io";

const MarksGradings = () => {
    return (
        <div className='p-6 pt-6 shadow border-black bod-in m-9 rounded-2xl bg-white hover:shadow-2xl'>
            <div className='flex justify-between'>
                <h5 className='font-semibold text-blue-500 pb-6' style={{ fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>Change Fee Particulars</h5>
            </div>
            <div className=''>
                <div className='flex w-full' style={{ fontSize: '14px' }}>
                    <div className='w-1/4'>
                        <span className='text-red-500 px-2 flex w-full'>Grade Name</span>
                        <input type="text" defaultValue="A+" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="A" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="B+" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="B" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="C" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="D" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="F" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                    </div>
                    <div className='w-1/4' style={{ marginLeft: '4px' }}>
                        <span className='text-red-500 px-2 flex w-full'>Percentage From</span>
                        <input type="number" defaultValue="80" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="70" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="60" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="50" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="40" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="33" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                    </div>
                    <div className='w-1/4' style={{ marginLeft: '4px' }}>
                        <span className='text-red-500 px-2 flex w-full'>Percentage Upto</span>
                        <input type="number" defaultValue="100" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="79" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="69" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="59" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="49" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="49" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="number" defaultValue="32" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                    </div>
                    <div className='w-1/4' style={{ marginLeft: '4px' }}>
                        <span className='text-red-500 px-2 flex w-full'>Status</span>
                        <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="Pass" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                        <input type="text" defaultValue="Fail" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '4px', color: '#495057' }} required />
                    </div>
                </div>
                <div className='flex justify-end'><button className='flex items-center justify-end bg-blue-500 mt-2 p-2 px-5 rounded-2xl text-white'><IoMdCheckmark color='white' /> <span className='pl-2'>Save Changes</span></button></div>
            </div>
        </div>
    );
}
export default MarksGradings;