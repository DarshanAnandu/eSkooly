import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const NewClasses = () => {
    return (
        <div className='m-9 flex flex-col justify-center items-center w-full'>
            <input type='text' name='fileToUpload' className='bod-in w-1/3 mt-2 p-2' placeholder='Name of Class' required />
            <input type='text' name='fileToUpload' className='bod-in w-1/3 mt-2 p-2' placeholder='Monthly Tution Fees' required />
            {/* <input type='file' name='fileToUpload' className='bod-in w-full p-2' required /> */}
            <select id="feeFor" placeholder="---- Select Class Teacher ----" className="w-1/3 mt-2 p-2 focus:ring-blue-500 focus:border-blue-500">
                <option selected>---- Select Class Teacher ----</option>
            </select>
            <button className='flex items-center bg-blue-500 rounded-sm mt-2 p-5 text-white'><IoMdCheckmark color='white' /> <span className='pl-2'>Submit</span></button>
        </div>
    );
}
export default NewClasses;  