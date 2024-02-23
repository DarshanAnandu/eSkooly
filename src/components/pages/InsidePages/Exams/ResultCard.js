import { CiSearch } from "react-icons/ci";
const ResultCard = () => {
    return (
        <div className='p-9'>
            <div className='flex flex-col justify-center items-center'>
                <div className='w-2/4 my-8'>
                    <h4 className='text-center font-bold text-xl' style={{ color: '#5e81f4', }}>Student Wise Result [Single]</h4>
                    <div className='flex'>
                        <select className='focus:outline-none ml-4 w-1/2' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}>
                            <option>-----SELECT EXAM-----</option>
                            <option>-- LAST 2 EXAMS --</option>
                            <option>-- LAST 3 EXAMS --</option>
                            <option>-- LAST 4 EXAMS --</option>
                        </select>
                        <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' className='bg-blue-500' color='white' /></div>
                    </div>
                </div>
                <hr />
                <div className='w-2/4 my-8'>
                    <h4 className='text-center font-bold text-xl' style={{ color: '#ff808b', }}>Class Wise Result [Bulk]</h4>
                    <div className='flex'>
                        <select className='focus:outline-none ml-4 w-1/2' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}>
                            <option>-----SELECT EXAM-----</option>
                            <option>-- LAST 2 EXAMS --</option>
                            <option>-- LAST 3 EXAMS --</option>
                            <option>-- LAST 4 EXAMS --</option>
                        </select>
                        <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' className='bg-red-500' color='white' /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ResultCard;