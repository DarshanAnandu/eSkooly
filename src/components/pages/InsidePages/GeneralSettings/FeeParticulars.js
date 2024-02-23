import { TfiReload } from "react-icons/tfi";
import { IoMdCheckmark } from "react-icons/io";

const FeeParticulars = () => {
    return (
        <div className='p-6 pt-6 shadow border-black bod-in m-9 rounded-2xl bg-white hover:shadow-2xl'>
            <div className='flex justify-between'>
                <h5 className='font-semibold ' style={{ fontSize: '14px', color: '#5e81f4', fontFamily: 'Poppins, sans-serif' }}>Change Fee Particulars</h5>
                <div className=' text-white items-center rounded-2xl p-2 px-5 flex' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)'}}><TfiReload size="12px" /><span className='px-2'>Reset to Default</span></div>
            </div>
            <div className=''>
                <div className='flex flex-col'>
                    <label className='lab-txt' style={{ fontSize: '13px' }}>Fee Particulars for*</label>
                    <select id="feeFor" className="w-min rounded-2xl bod-in p-2 focus:ring-blue-500 focus:border-blue-500">
                        <option selected>All Students</option>
                        <option value="Specific Class">Specific Class</option>
                        <option value="Specific Student">Specific Student</option>
                    </select>
                </div>
                <div className='flex w-full' style={{ fontSize: '14px' }}>
                    <div className='w-2/3'>
                        <span className='px-2 flex w-full' style={{ color: '#ff808b' }}>Particular Name</span>
                        <span className='bod-in py-2 px-2 flex w-full uppercase cursor-not-allowed' disabled style={{ margin: '2px', opacity: '0.5px', backgroundColor: '#e9ecef', color: '#acb3b9' }}>Monthly Tution Fee</span>
                        <input type="text" defaultValue="Admission Fee" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '' }} required />
                        <input type="text" defaultValue="Registration Fee" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="text" defaultValue="Art Material" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="text" defaultValue="Transport" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="text" defaultValue="Books" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="text" defaultValue="Uniform" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="text" defaultValue="Fine" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="text" defaultValue="Others" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <span className='bod-in py-2 px-3 flex w-full uppercase cursor-not-allowed' style={{ margin: '2px', color: '#495057', opacity: '0.5px', backgroundColor: '#e9ecef' }}>Previous Balance</span>
                        <span className='bod-in py-2 px-3 flex w-full uppercase cursor-not-allowed' style={{ margin: '2px', color: '#495057', opacity: '0.5px', backgroundColor: '#e9ecef' }}>Discount in fee [fixed]</span>
                    </div>
                    <div className='w-2/5' style={{ marginLeft: '2px' }}>
                        <span className='px-2 flex w-full' style={{ color: '#ff808b' }}>Prefix Amount</span>
                        <span className='bod-in py-2 px-3 flex w-full cursor-not-allowed' style={{ margin: '2px', color: '##acb3b9', opacity: '0.5px', backgroundColor: '#e9ecef' }}>[Fixed]</span>
                        <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '' }} required />
                        <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <input type="number" defaultValue="0" className='bod-in py-2 px-3 flex w-full uppercase' style={{ margin: '2px', color: '#495057' }} required />
                        <span className='bod-in py-2 px-3 flex w-full cursor-not-allowed' style={{ margin: '2px', color: '#acb3b9', opacity: '0.5px', backgroundColor: '#e9ecef' }}>[Fixed]</span>
                        <span className='bod-in py-2 px-3 flex w-full cursor-not-allowed' style={{ margin: '2px', color: '#acb3b9', opacity: '0.5px', backgroundColor: '#e9ecef' }}>[Fixed]</span>
                    </div>
                </div>
                <div className='flex justify-end'><button className='flex items-center justify-end mt-2 p-2 px-5 rounded-2xl text-white' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', transition: 'all ease-in 0.3s' }}><IoMdCheckmark color='white' /> <span className='pl-2'>Save Changes</span></button></div>
            </div>
        </div>
    );
}
export default FeeParticulars;