import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";

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
            {/* <div className='text-center mt-5'>
                <span className='font-bold text-violet-200 text-2xl'>No Fee Defaulters in ---------, ----</span>
            </div> */}
            <div className="mt-5 flex p-3">
                <div className='bg-white flex flex-col justify-center items-center rounded-xl p-6 m-3'>
                    <img src='https://eskooly.com/bb/uploads/students/no-image.png' alt='person-logo' style={{ height: '80px', width: '80px' }} />
                    <span style={{ fontSize: '11px', color: '#333' }}> 4582333</span>
                    <b style={{ fontSize: '11px', color: '#555' }}>Anuj Pandey</b>
                    <span style={{ fontSize: '11px', color: '#333' }}>10</span>
                    <div className='flex'>
                        <div className='flex justify-center items-center text-white cursor-pointer' style={{ border: '0', background: 'linear-gradient(45deg, #ff808b, #f79099)', padding: '8px 14px', lineHeight: '16px', borderRadius: '15px', margin: '2px' }}><RiDownloadLine size='11px' color='white' /><span className="pl-2">Submit</span></div>
                        <div className='p-2 flex justify-center items-center cursor-pointer' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #5e81f4, #7191f7)', borderRadius: '15px', margin: '2px' }}><FaPhoneAlt size='11px' color='white' /></div>
                        {/* <div className='p-2 flex justify-center items-center' style={{ border: '0', height: '30px', width: '30px', background: 'linear-gradient(45deg, #ff808b, #f79099)', borderRadius: '15px', margin: '2px' }}><IoTrashOutline size='11px' color='white' /></div> */}
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center text-center rounded-xl float-left font-semibold text-white' style={{ background: 'linear-gradient(45deg, #4b49ac, #5d5ba9)', padding: '10px 19px', width: '155px', margin: '15px' }}>
                    <RiDownloadLine size='38px' color='white' />
                    <span>Add Balance</span>
                    <span>In Accounts</span>
                    <span className="my-3">AND</span>
                    <span>Clear List</span>
                </div>
            </div>
        </div>
    );
}
export default FeeDefaulters;