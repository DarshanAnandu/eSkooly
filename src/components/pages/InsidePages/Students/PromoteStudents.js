import { TfiReload } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";

const PromoteStudents = () => {
    return (
        <div className='m-9'>
            <div className='flex items-center justify-between'>
                <div className='w-3/5 flex m-2'>
                    <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
                    <div className='flex w-1/2 items-center'><select className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
                </div>
                <div className=' h-10' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><TfiReload className='h-full w-16 p-3 cursor-pointer' /></div>
            </div>
            <form className='mt-5 w-full'>
                <table className='mb-4 w-full' style={{ color: '#9698d6' }}>
                    <tbody>
                        <tr className='w-full' style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
                            <td style={{ padding: '.75rem' }}><b>ID</b></td>
                            <td style={{ padding: '.75rem' }}><b>Name</b></td>
                            <td style={{ padding: '.75rem' }}><b>Class</b></td>
                            <td style={{ padding: '.75rem' }}><b>P/D in</b></td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-center'>
                    <button className='text-white bg-blue-500 py-2 px-10'>SUBMIT</button>
                </div>
            </form>
        </div>
    );
}
export default PromoteStudents;