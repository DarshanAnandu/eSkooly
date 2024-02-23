import { TfiReload } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { TfiPrinter } from "react-icons/tfi";

const IDCard = () => {
    return (
      <div className='m-9'>
        <div className='flex items-center justify-between'>
          <div className='w-3/5 flex m-2'>
            <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
            <div className='flex w-1/2 items-center'><select className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
          </div>
          <div className='flex h-10' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><TfiReload className='h-full w-16 p-3 cursor-pointer' /><TfiPrinter className='h-full p-3 w-16 cursor-pointer' /></div>
        </div>
      </div>
    );
  }
export default IDCard;