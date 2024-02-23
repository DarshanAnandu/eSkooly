import { TfiReload } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
const EditORDeleteExam = () => {
    return (
        <div className='m-9 flex flex-col justify-center items-center w-full'>
            <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-1/3 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
                <option selected>---- Select Exam ----</option>
            </select>
            <hr />
            <div className='flex'>
                <button className='flex items-center bg-blue-500 rounded-sm mt-2 p-2 text-white'><TfiReload color='white' /> <span className='pl-2'>Update</span></button>
                <button className='flex items-center bg-red-500 rounded-sm ml-2 mt-2 p-2 text-white'><IoMdClose color='white' /> <span className='pl-2'>Delete</span></button>
            </div>
        </div>
    );
}
export default EditORDeleteExam;