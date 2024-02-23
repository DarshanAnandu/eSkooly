import { CiSearch } from "react-icons/ci";

const FeeSlip = () => {
    return (
        <div className='p-9 w-full flex flex-col items-center'>
            <div className="w-1/3 flex flex-col justify-center">
                <span className='text-center'>Fee Month</span>
                <div className='flex  justify-center'>
                    <div class="relative flex items-center justify-center my-3 w-1/2">
                        <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fee Month</label>
                        <input type="month"
                            class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' />
                </div>
            </div>
        </div>
    );
}
export default FeeSlip;