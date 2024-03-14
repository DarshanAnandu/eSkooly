import { BrowserRouter as Router, Link, } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa";
const ClassesWithSubjects = () => {
    return (
        <div className='p-9 flex'>
            <div className='hover:shadow-2xl bg-white shadow rounded-2xl flex flex-col px-8 w-1/2'>
                <div className='flex justify-between' style={{ padding: '25px 15px' }}>
                    <span style={{ color: '#5e81f4' }}>10</span>
                    <span className='p-2' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)' }}><FaPencilAlt color='white' /></span>
                </div>
                <table className='p-5'>
                    <thead className='p-2'>
                        <tr className='text-left' style={{ backgroundColor: 'rgba(0,0,0,.05)', color: '#4d4cac' }}>
                            <th>Subject Name</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Maths</td>
                            <td>62</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link to='/eSkooly/Subjects/Assign-Subjects'>
                <div className='hover:shadow-2xl shadow flex flex-col p-9 m-3 text-white rounded-2xl cursor-pointer bg-red-400 items-center text-2xl' style={{ width: '377px', background: 'linear-gradient(45deg, #ff808b, #f79099)' }}>
                    <span className='text-4xl'>+</span>
                    <h2 className='font-bold'>Add Subject</h2>
                </div>
            </Link>
        </div>
    );
}
export default ClassesWithSubjects;