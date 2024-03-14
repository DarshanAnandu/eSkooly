import { TfiReload } from "react-icons/tfi";
import { IoMdCheckmark } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";

const AccountSettings = () => {
    return (
        <div className='h-full p-6 pt-6 m-9'>
            <div className='flex text-white w-full p-5 items-center bg-blue-500' style={{ borderRadius: '30px' }}><CiSettings color='white' size="23px" /><strong>Account Settings</strong></div>
            <div className='mt-7 flex'>
                <div className='w-8/12'>
                    <div class="relative flex items-center my-3 mt-5">
                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Username*</label>
                        <input type="text" placeholder="New Email ?"
                            class="px-5 bod-sin py-3.5 bg-[#fff] text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                    </div>
                    <div class="relative flex items-center my-3 mt-5">
                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Password*</label>
                        <input type="text" placeholder="******"
                            class="px-5 bod-sin py-3.5 bg-[#fff] text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                    </div>
                    <div class="relative flex items-center my-3 mt-5">
                        <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>TimeZone*</label>
                        <select name="timezone" id='searchlist'
                            class="px-5 bod-sin py-3.5 bg-[#fff] text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                            <option value="Asia/Karachi" selected>Asia/Karachi</option>
                            <option value="Asia/kabul">Asia/kabul</option>
                            <option value="Asia/India">Asia/India</option>
                        </select>
                    </div>
                    <div className='flex'>
                        <div class="relative flex items-center my-3 mt-5 w-1/2">
                            <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Currency*</label>
                            <select name="timezone" id='searchlist'
                                class="px-5 bod-sin py-3.5 bg-[#fff] text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px', }}>
                                <option value="Dollar (USD)" selected>Dollar (USD)</option>
                                <option value="Dollar (TTD)">Dollar (TTD)</option>
                                <option value="Dollar (TVD)">Dollar (TVD)</option>
                            </select>
                        </div>
                        <div class="relative flex items-center my-3 mt-5 ml-3 w-1/2">
                            <label class="text-[13px] text-white absolute px-2 top-[-10px] left-[18px] font-semibold" style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)', borderRadius: '30px', border: '1px solid #999' }}>Symbol*</label>
                            <input type="text" placeholder="Currency Symbol"
                                class="px-5 bod-sin py-3.5 bg-[#fff] text-black w-full text-sm border-2 rounded outline-none" style={{ borderRadius: '30px' }} />
                        </div>
                    </div>
                    <div className='flex justify-center'><button className='flex items-center mt-2 p-2 px-5 text-white' style={{ background: 'linear-gradient(87deg, #11cdef 0, #1171ef 100%)', borderRadius: '20px' }}><TfiReload color='white' /> <span className='pl-2'>Update Settings</span></button></div>
                </div>
                <div className='w-2/5 ml-5 my-3 rounded-2xl h-max' style={{ backgroundImage: 'url(https://eskooly.com/bb/asserts/images/apploginbg.jpg)' }}>
                    <div className='p-8 flex rounded-2xl flex-col acc-det-bg'>
                        <div className='text-white flex w-full justify-center items-center'><CiLock color='white' size="25px" /> <h5 className='ml-2 font-semibold text-xl'> Account details</h5></div>
                        <div className='flex w-full justify-center mt-4'>
                            <div className='flex flex-col items-end text' style={{ color: 'rgb(150, 152, 214)' }}>
                                <span>Username:</span>
                                <span>Password:</span>
                                <span>Subscription:</span>
                                <span>Expiry:</span>
                            </div>
                            <div className='flex flex-col items-start ml-5 text-white'>
                                <span>abc@saanvigs.org</span>
                                <span>*********</span>
                                <span className='flex px-2 items-center rounded-3xl' style={{ background: 'linear-gradient(87deg, #2dce89 0, #2dcecc 100%)' }}><IoMdCheckmark color='white' /> <span className='pl-2'>Free</span></span>
                                <span>Never</span>
                            </div>
                        </div>
                        <div className='flex justify-center'><div className='text-white w-max flex items-center px-5 mt-5 rounded-3xl py-2' style={{ background: 'linear-gradient(87deg, #f5365c 0, #f56036 100%' }}><IoTrashOutline color='white' /><span className='pl-2'>Delete Account</span></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AccountSettings;