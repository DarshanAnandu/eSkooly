import { IoMdCheckmark } from "react-icons/io";

const AddIncome = () => {
  return (
    <div className='m-9 w-full flex justify-center'>
      <div className='wid-stu-adding'>
        <h3 className='text-center font-bold' style={{ color: '#9698d6', fontSize: '1.75rem' }}>Add Income</h3>
        <hr />
        <form className='flex flex-col'>
          <input type='date' name='incomedate' placeholder='' className='bod-in my-1 mt-3 p-2 focus:outline-blue-500' required />
          <input type='text' name='incomename' placeholder='Income Description' className='bod-in my-1 p-2 focus:outline-blue-500' required />
          <input type='text' name='incomename' placeholder='Income Amount' className='bod-in my-1 p-2 focus:outline-blue-500' required />
          <hr className='mt-4' />
          <div className='flex justify-center mt-3'><button className='flex items-center text-white justify-center ml-3' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button></div>
        </form>
      </div>
    </div>
  );
}

export default AddIncome;