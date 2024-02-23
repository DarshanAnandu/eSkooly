import { IoMdCheckmark } from "react-icons/io";

const CreateNewExam = () => {
    return (
      <div className='m-9 w-full flex justify-center'>
        <div className='wid-stu-adding'>
          <h3 className='text-center font-bold' style={{ color: '#ff808b', fontSize: '1.75rem' }}>Add New Examination</h3>
          <hr />
          <form className='flex flex-col'>
            <input type='text' name='examname' placeholder='Examination Name' className='bod-in my-1 p-2 focus:outline-blue-500' required />
            <div className='flex w-full'>
              <div className='flex flex-col w-1/2'>
                <label>Starting Date:</label>
                <input type='date' name='fromdate' placeholder='' className='bod-in my-1 mt-3 p-2 focus:outline-blue-500' required />
              </div>
              <div className='flex flex-col w-1/2'>
                <label>Ending Date:</label>
                <input type='date' name='enddate' placeholder='' className='bod-in my-1 mt-3 p-2 focus:outline-blue-500' required />
              </div>
            </div>
            <hr className='mt-4' />
            <div className='flex justify-center mt-3'><button className='flex items-center text-white justify-center ml-3' style={{ backgroundColor: '#ff869a', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px', borderColor: '#ff869a' }}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button></div>
          </form>
        </div>
      </div>
    );
  }
export default CreateNewExam