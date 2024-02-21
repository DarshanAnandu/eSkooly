import { IoMdCheckmark } from "react-icons/io";
import { FiAlignLeft } from "react-icons/fi";

const ThemeAndLanguage = () => {
    return (
        <div className='p-6 pt-6 shadow border-black bod-in m-9 rounded-2xl bg-white hover:shadow-2xl'>
            <div className='flex flex-col justify-between h-full w-full'>
                <h6 className='mt-3'>Theme Placement</h6>
                <hr className='mt-0 mb-4' style={{ borderTop: '1px solid rgba(0,0,0,.1)' }} />
                <div className='flex flex-col'>
                    <input type='radio' id='ltl' className='' />
                    <label for="ltl" className='flex flex-col ' style={{ fontSize: '20px' }}><FiAlignLeft /><span className='text-green-600' style={{ fontSize: '27px' }}>LTL</span></label>
                </div>
            </div>
            <div className=''>
                <div className='flex justify-center'><button className='flex items-center justify-end bg-blue-500 mt-2 p-2 px-5 rounded-2xl text-white'><IoMdCheckmark color='white' /> <span className='pl-2'>Save Changes</span></button></div>
            </div>
        </div>
    );
}
export default ThemeAndLanguage;