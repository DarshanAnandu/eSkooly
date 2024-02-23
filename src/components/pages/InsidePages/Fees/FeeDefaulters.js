import { CiSearch } from "react-icons/ci";

const FeeDefaulters = () => {
    return (
        <div className='p-9 w-full flex flex-col'>
            <div className='flex justify-between'>
                <div className="flex items-center ">
                    <input type='month' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' />
                </div>
                <span className='font-bold text-red-400 text-2xl'>Fee Defaulters</span>
                <div className='flex'>
                    <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>List View</button>
                    <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}>Send Remainder</button>
                </div>
            </div>
            <div className='text-center mt-5'>
                <span className='font-bold text-violet-200 text-2xl'>No Fee Defaulters in ---------, ----</span>
            </div>
        </div>
    );
}
export default FeeDefaulters;