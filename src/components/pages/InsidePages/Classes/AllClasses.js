import { BrowserRouter as Router, Link, } from 'react-router-dom'
import { FaGraduationCap } from "react-icons/fa";

const AllClasses = () => {
    return (
        <div className='p-9 flex w-full'>
            <div className='hover:shadow-2xl shadow flex flex-col p-7 m-3 text-white rounded-2xl cursor-pointer ' style={{ width: '377px', background: 'linear-gradient(45deg, #4d4cac, #5a59ab)' }}>
                <h6>10</h6>
                <h2 className='flex justify-between'><span className='text-2xl font-bold'>1</span><FaGraduationCap size='26px' color='white' /></h2>
                <p>STUDENTS</p>
            </div>
            <Link to='/eSkooly/Classes/New-Class'>
                <div className='hover:shadow-2xl shadow flex flex-col p-9 m-3 text-white rounded-2xl cursor-pointer items-center text-2xl' style={{ width: '377px', background: 'linear-gradient(45deg, #ff808b, #f79099)' }}>
                    <span className='text-4xl'>+</span>
                    <h2>Add New</h2>
                </div>
            </Link>
        </div>
    );
}
export default AllClasses;