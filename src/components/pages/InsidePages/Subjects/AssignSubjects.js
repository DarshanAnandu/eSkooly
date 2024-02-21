import { FaMinus, FaPlus } from "react-icons/fa";
const AssignSubjects = () => {
    return (
        <div className='flex flex-col m-9 justify-center items-center w-full'>
            <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-3/6 bod-in mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
                <option selected>---- Select Class ----</option>
            </select>
            <div className='flex justify-center w-3/6 mt-3'>
                <input type='text' placeholder='Name of Subject' className='w-3/5 p-2 bod-in' />
                <input type='number' placeholder='Marks' className='w-2/5 bod-in p-2' />
            </div>
            <div className='flex'>
                <button className='flex items-center bg-blue-500 rounded-3xl mt-2 p-1 text-white'><FaPlus /> <span className='pl-2'>Add More</span></button>
                <button className='flex items-center bg-red-400 rounded-3xl ml-2 mt-2 p-1 text-white justify-center'><FaMinus /> <span className='pl-2'>Remove</span></button>
            </div>
            <hr />
            <div className='flex justify-center'><button className='flex items-center bg-blue-400 rounded-sm mt-7 p-2 px-5 text-white'><FaPlus color='white' /> <span className='pl-2'>Add Subjects</span></button></div>
        </div>
    );
}
export default AssignSubjects;