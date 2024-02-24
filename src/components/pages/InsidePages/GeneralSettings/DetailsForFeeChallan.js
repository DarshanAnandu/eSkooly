import { TfiReload } from "react-icons/tfi";
import { TiHomeOutline } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { MdCreditCard } from "react-icons/md";

const DetailsForFeeChallan = () => {
    const UpdateInstituteLogo = () => {
        return (
            <div className='hover:shadow-2xl shadow border-black bg-white bod-in p-6 flex flex-col m-2 rounded-2xl'>
                <div className='font-semibold w-full'>
                    <h5>Update Bank Logo Here</h5>
                </div>
                <form className='w-full'>
                    <label>Bank Logo <br /><input type='file' name='fileToUpload' className='bod-in w-full p-2' required /></label>

                    <div className='flex justify-end'><button className='text-white bg-blue-500 flex flex-end items-center p-2 rounded-sm justify-end mt-3'><TfiReload color='white' /> Update</button></div>
                </form>
            </div>
        );
    }
    const UpdateInstituteInfo = () => {
        return (
            <div className='hover:shadow-2xl shadow border-black bg-white bod-in p-6 flex flex-col m-2 rounded-2xl'>
                <div className='font-semibold w-full'>
                    <h5>Update Instute Info Here</h5>
                </div>
                <form className='w-full mt-3'>
                    <div class="relative flex items-center my-3">
                        <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Bank Name</label>
                        <input type="text" placeholder="Your Bank Name"
                            class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                    </div>
                    <div class="relative flex items-center my-3">
                        <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Bank / Branch Address</label>
                        <input type="text" placeholder="Bank Address"
                            class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                    </div>
                    <div class="relative flex items-center my-3">
                        <label class="text-[13px] bg-white lab-txt absolute px-2 top-[-10px] left-[18px] font-semibold">Account Number</label>
                        <input type="tel" placeholder="Bank Account#"
                            class="px-2 bod-sin py-3.5 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                    </div>
                    <div className='flex justify-end'><button className='text-white bg-blue-500 flex flex-end items-center p-2 rounded-sm justify-end mt-3'><TfiReload color='white' /> Update</button></div>
                </form>
            </div>
        );
    }
    const YourInstituteProfile = () => {
        return (
            <div className=' hover:shadow-2xl w-full text-gray-700 h-auto bg-white shadow rounded-2xl flex flex-col m-2 p-6 bod-in'>
                <div className=' w-full font-semibold text-gray-500'>
                    <h5>Your Bank Profile</h5>
                </div>
                <div className='flex justify-center bod-ip p-6 pt-0'><TiHomeOutline color='#9698d6' size="60px" /></div>
                <div className='flex flex-col p-3 '>
                    <h4 className='flex justify-center'>Your Bank Name</h4>
                    <hr />
                    <p className='flex items-center justify-between'><MdCreditCard color='gray' /> Your Banks Account#</p>
                    <hr />
                    <p className='flex flex-col items-center pt-3'><CiLocationOn color='gray' /> Your Bank Address will goes here!</p>
                    <p className='flex justify-center p-3 pt-0'>COUNTRY</p>
                </div>
            </div>
        );
    }
    return (
        <div className='h-full w-full p-10 pl-7 flex fd overflow-auto'>
            <div className=' w-3/5 h-full wdd'>
                <UpdateInstituteLogo />
                <UpdateInstituteInfo />
            </div>
            <div className='w-5/12 wdd'>
                <YourInstituteProfile />
            </div>
        </div>
    );
}
export default DetailsForFeeChallan;