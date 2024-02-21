import { CiSearch } from "react-icons/ci";
const MarkStudentsAttendance = () => {
    return (
        <div className='p-9 w-full flex justify-center'>
            <div className='w-1/2 flex flex-col justify-center'>
                <div className="w-full">
                    <h6 className='text-center font-bold' style={{ color: '#9698d6', padding: '10px', fontSize: '14px' }}>Mark Manual Attandance Class wise</h6>
                    <form className="">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center w-full my-1"><input type='date' className='focus:outline-blue-500 ml-4 bod-in w-full' style={{ background: 'white', border: '', borderBottom: '', padding: '9px 10px 8px 10px' }} required /></div>
                            <div className="flex items-center w-full my-1"><select className='focus:outline-blue-500 ml-4 bod-in w-full' style={{ background: 'white', border: '', borderBottom: '', padding: '9px 10px 8px 10px' }} required> <option>-----SELECT CLASS-----</option> </select></div>
                            <button className='flex items-center text-white justify-center ml-3 px-8 my-1' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}> <CiSearch size='25px' />Search</button>
                        </div>
                    </form>
                </div>
                <hr style={{ margin: '50px', height: '2px', border: 'none', color: '#333', backgroundColor: '#333' }} />
                <div className='flex flex-col justify-center'>
                    <h6 className='text-center font-bold' style={{ color: '#9698d6', padding: '10px', fontSize: '14px' }}>Mark Manual Attandance Class wise</h6>
                    <div className='flex flex-col xl:flex-row justify-center'>
                        <button className='flex items-center text-white justify-center m-3 px-8' style={{ background: 'linear-gradient(45deg, #2ed8b6, #59e0c5)', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}><img src="https://eskooly.com/bb/assets/scancard.gif" style={{ height: '50px', verticalAlign: 'middle', borderRadius: '6px' }} alt="gif" /><span className="p-3">In Attendance</span></button>
                        <button className='flex items-center text-white justify-center m-3 px-8' style={{ background: 'linear-gradient(45deg, #7878e8, #8787e5)', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}><img src="https://eskooly.com/bb/assets/scancard.gif" style={{ height: '50px', verticalAlign: 'middle', borderRadius: '6px' }} alt="" /><span className="p-3">Out Attendance</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MarkStudentsAttendance;