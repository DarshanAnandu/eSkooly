import { TfiReload } from "react-icons/tfi";
import { IoMdCheckmark } from "react-icons/io";

const AddEmployee = () => {
    return (
        <div className='overflow-auto p-9 h-screen w-full' style={{ backgroundColor: 'white' }}>
            {/* <div className='bg-white flex flex-wrap justify-between rounded-xl'>
          <div className=' flex items-center p-2 pt-3 pb-4' style={{ borderRadius: '10px', fontSize: '16px' }}><strong className='' style={{ borderRight: '1px solid #777', paddingRight: '10px', marginRight: '10px' }}>Students</strong> <TiHomeOutline /> <span> - Admission Form</span></div>
          <button className='flex items-center py-2 px-3 cursor-pointer text-white font-semibold m-2 rounded-3xl' style={{ background: 'linear-gradient(45deg, #7878e8, #8787e5)', lineHeight: '16px', fontSize: '11px' }}><CiImport color='white' /> <span className='pl-2'>Import Students</span></button>
        </div> */}
            <h3 className='text-center mb-2 font-semibold w-full text-3xl' style={{ color: '#ff808b' }}>Employee Form</h3>
            <div>
                <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', marginBottom: '20px', padding: '10px' }}>
                    <span className=''>Basic Information</span>
                    <span>[ *Required ]</span>
                </h5>
                <div className='disp-stu-adding my-1 mb-3'>
                    <div className='flex flex-col wid-stu-adding mx-2'>
                        <input type='text' name='studentname' placeholder='Name of the Employee' className='outline-black p-2 focus:outline-blue-500' />
                        <label className='flex flex-col mb-3'><span className='flex items-center'><span>Picture:</span><span className='pl-1' style={{ fontSize: '10px' }}>[ optional ]</span></span> <input type='file' name='fileToUpload' className='bod-in p-2 focus:outline-blue-500 bg-white' /><span className='' style={{ fontSize: '10px' }}>[ Max size 100KB ]</span></label>
                    </div>
                    <div className='wid-stu-adding mx-2' style={{ marginTop: '-10px' }}>
                        <div class="relative flex items-center my-3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Last Reg: None</label>
                            <input type="text" placeholder="Registration No:"
                                class="bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none" />
                        </div>
                        <label className='flex flex-col mb-3' style={{ marginTop: '-10px' }}>Joining Date: <input type='date' className='p-2 bod-in focus:outline-blue-500' /></label>
                    </div>
                    <div className='wid-stu-adding mx-2 flex flex-col'>
                        <select className='p-2 mb-2 bod-in' required>
                            <option>----Employee Type----</option>
                        </select>
                        <input type='number' placeholder='Monthly Salary' className='p-2 bod-in' />
                        {/* <font className='mt-2' style={{ fontSize: '9px', color: '#999' }}>Student / Guardian mobile no to receive SMS / WhatsApp</font>
              <input type='tel' placeholder='Mobile No: e.g +44xxxxxxxxxx' className='p-2 bod-in' name='Gphone' /> */}
                    </div>
                </div>
                <h5 className='flex justify-between text-white font-semibold text-xl' style={{ background: 'linear-gradient(45deg, #9698d6, #a9abdb)', marginBottom: '20px', padding: '10px' }}>
                    <span className=''>Other Info</span>
                    <span>[ Optional ]</span>
                </h5>
                <div className='disp-stu-adding'>
                    <div className='wid-stu-adding mx-2'>
                        <input type='text' name='fnam' placeholder='Name of Father' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='text' name='cnic' placeholder='CNIC' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='text' name='edu' placeholder='Education' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                    </div>
                    <div className='wid-stu-adding flex flex-col mx-2 mt-1'>
                        <select className='p-2 w-full my-2 bod-in' required>
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <select className='p-2 w-full my-2 bod-in' name='religion' required>
                            <option>Religion</option>
                            <option>Hinduisiam</option>
                            <option>Islam</option>
                        </select>
                        <select className='p-2 w-full my-2 bod-in' required>
                            <option>Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </select>
                    </div>
                    <div>
                        <input type='text' name='health' placeholder='Experienct / Specialization' className='outline-black bod-in p-2 my-2 focus:outline-blue-500 w-full mb2' />
                        <input type='email' name='email' placeholder='email' className='outline-black p-2 focus:outline-blue-500 bod-in w-full my-2' />
                        <div className="relative flex items-center my-3">
                            <label class="text-[13px] bg-white lab-txt absolute px-1 top-[-10px] left-[18px]">Date of Birth</label>
                            <input type='date' className='my-2 bod-in bod-sin p-2 bg-white text-black w-full text-sm border-2 rounded outline-none' placeholder='dd-mm-yyyy' />
                        </div>
                    </div>
                </div>
                <div className='disp-stu-adding mb-5'>
                    <div className='w-2/3 addr'>
                        <input type='text' name='addrss' placeholder='Address' className='outline-black p-2 bod-in my-2 w-11/12 addr focus:outline-blue-500' />
                    </div>
                    {/* <button className='text-white flex p-2 px-5 my-2 mb-5 items-center rounded-3xl' style={{ background: 'linear-gradient(87deg, #5e72e4 0, #825ee4 100%)' }}><FaPlus color='white' /> <span className='pl-2'>Add Parents</span></button> */}
                </div>

                <hr />
                <div className='mb-20 mt-5 flex inlin justify-center'>
                    <button className='flex items-center text-white' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', padding: '10px 19px', fontSize: '15px', borderRadius: '2px' }}><TfiReload color='white' /> <span className='pl-2'>Reset</span></button>
                    <button className='flex items-center text-white justify-center ml-3' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button>
                </div>
            </div>
        </div>
    );
}
export default AddEmployee;