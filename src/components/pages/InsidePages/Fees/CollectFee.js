import { CiSearch } from "react-icons/ci";
import { FaBarcode } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";

const CollectFee = () => {
    return (
        <div className='p-9 w-full flex flex-col items-center'>
            <div className='w-1/3 text-center py-6'>
                <h5 className='font-bold' style={{ marginBottom: '', color: '', fontSize: '1.25rem' }}>Collect Fees for single student</h5>
                <div className="flex items-center justify-center">
                    <input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' />
                </div>
            </div>
            <hr />
            <div className='w-1/3 text-center py-6'>
                <h5 className='font-bold' style={{ marginBottom: '', color: '', fontSize: '1.25rem' }}>Collect Fees for family</h5>
                <form>
                    <div class="relative flex items-center justify-center my-3 w-full">
                        <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fee Month</label>
                        <input type="month" placeholder=""
                            class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                    </div>
                    <div class="relative flex items-center justify-center my-3 w-full">
                        {/* <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Search Student</label> */}
                        <input type="select-one" placeholder="Search Fmaily"
                            class="bod-sin p-2 bg-white text-black text-center w-full text-sm border-2 rounded outline-none" />
                    </div>
                    <div className="flex justify-center">
                        <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#dc3545', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><CiLock color="white" /><span className="pl-2">Submit</span></button>
                    </div>
                    <hr />
                </form>
            </div>
            <hr />
            <div className='w-1/3 text-center py-6'>
                <h5 className="flex justify-center items-center font-bold" style={{ marginBottom: '', color: '', fontSize: '1.25rem' }}><FaBarcode /><span className="pl-2">Scan Paid Challan Slip</span></h5>
                <div className="flex justify-center mt-5">
                    <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#dc3545', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><CiLock color="white" /><span className="pl-2">Start Scanning</span></button>
                </div>
            </div>
            <hr />
        </div>
    );
}
export default CollectFee;