import { TbReceipt } from "react-icons/tb";
import { CiLock } from "react-icons/ci";

const GenerateBankChallan = () => {
    return (
        <div className='p-9 w-full flex flex-col items-center' style={{ backgroundColor: '#f3f3f3' }}>
            <div className='w-2/4 text-center'>
                <form>
                    <h5 className='font-bold' style={{ marginBottom: '20px', color: '#4b49ac', fontSize: '1.25rem' }}>Generate for Single Student</h5>
                    <div className='flex'>
                        <div class="relative flex items-center my-3 w-1/3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fee Month</label>
                            <input type="month"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                        <div class="relative flex items-center my-3 w-1/3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Due Date</label>
                            <input type="date"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                        <div class="relative flex items-center my-3 w-1/3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fine After Due Date</label>
                            <input type="number"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div class="relative flex items-center my-3 w-11/12">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Search Student</label>
                            <input type="text" placeholder="Search Student"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                    </div>
                    <div className='flex justify-center m-2 mb-6'><button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><TbReceipt color="white" /><span className="pl-2">Generate</span></button></div>
                    <hr />
                </form>
            </div>
            <div className='w-1/2 text-center'>
                <form>
                    <h5 className='font-bold' style={{ marginBottom: '20px', color: '#4b49ac', fontSize: '1.25rem' }}>Generate for Whole Class</h5>
                    <div className='flex'>
                        <div class="relative flex items-center my-3 w-1/3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fee Month</label>
                            <input type="month"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                        <div class="relative flex items-center my-3 w-1/3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Due Date</label>
                            <input type="date"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                        <div class="relative flex items-center my-3 w-1/3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fine After Due Date</label>
                            <input type="number"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div class="relative flex items-center my-3 w-11/12">
                            {/* <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Search Student</label> */}
                            <select
                                class=" p-2 bg-transparent text-black w-full text-sm outline-none" style={{ borderBottom: '1px solid gray' }}><option>-----SELECT CLASS-----</option></select>
                        </div>
                    </div>
                    <div className='flex justify-center m-2 mb-6'><button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#dc3545', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><CiLock color="white" /><span className="pl-2">Generate</span></button></div>
                    <hr />
                </form>
            </div>
            <div className='w-1/2 text-center'>
                <form>
                    <h5 className='font-bold' style={{ marginBottom: '20px', color: '#4b49ac', fontSize: '1.25rem' }}>Generate for Family</h5>
                    <div className='flex'>
                        <div class="relative flex items-center my-3 w-1/3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fee Month</label>
                            <input type="month"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                        <div class="relative flex items-center my-3 w-1/3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Due Date</label>
                            <input type="date"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                        <div class="relative flex items-center my-3 w-1/3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Fine After Due Date</label>
                            <input type="number"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div class="relative flex items-center my-3 w-11/12">
                            {/* <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Search Student</label> */}
                            <select
                                class="bod-in p-2 bg-white text-black w-full text-sm border-2 text-center rounded outline-none"><option>-----SELECT CLASS-----</option></select>
                        </div>
                    </div>
                    <div className='flex justify-center m-2 mb-6'><button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#28a745', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><CiLock color="white" /><span className="pl-2">Generate</span></button></div>
                    <hr />
                </form>
            </div>
        </div>
    );
}
export default GenerateBankChallan;