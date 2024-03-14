import { useState } from "react";
import { Link } from "react-router-dom";

const MarkEmployeesAttendance = () => {
    const [date, setDate] = useState('');
    return (
        <div className='p-9 w-full flex justify-center'>
            <div className='w-1/2 flex flex-col justify-center'>
                <div>
                    <h6 className='text-center font-bold' style={{ color: '#9698d6', padding: '10px', fontSize: '14px' }}>Choose Employee Attendence Type</h6>
                    <form>
                        <div className="flex flex-col items-center w-full">
                            <div className="flex items-center w-full my-1"><input type='date' value={date} onChange={(e) => setDate(e.target.value)} className='focus:outline-blue-500 ml-4 bod-in w-full' style={{ background: 'white', border: '', borderBottom: '', padding: '9px 10px 8px 10px' }} required /></div>
                            <button onClick={() => localStorage.setItem('empDat', date)} className='flex items-center text-white justify-center m-3 px-8' style={{ background: 'linear-gradient(45deg, #2ed8b6, #59e0c5)', opacity: '0.8', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}><Link to={{ pathname: '/eSkooly/pages/Attendance/Mark-Employee-Attendance/Inner-Employee-Attendandce' }}>Mark Manual Attendance</Link></button>
                        </div>
                    </form>
                </div>
                <hr style={{ margin: '10px', height: '2px', border: 'none', color: '#333', borderTop: '1px solid rgba(0,0,0,.1)' }} />
                <div className='flex flex-col justify-center'>
                    {/* <h6 className='text-center'>Mark Manual Attandance Class wise</h6> */}
                    <div className='flex justify-center'>
                        <button className='flex items-center text-white justify-center m-3 px-8' style={{ background: 'linear-gradient(45deg, #7878e8, #8787e5)', opacity: '0.4', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}><img src="https://eskooly.com/bb/assets/scancard.gif" style={{ height: '50px', verticalAlign: 'middle', borderRadius: '6px' }} alt="gif" /><span className="pl-2">Using Card Scanner</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MarkEmployeesAttendance;