import { CiSearch } from "react-icons/ci";
const CharacterCertificate = () => {
    return (
        <div className='p-9'>
            <div className='flex w-full justify-center items-center flex-col mt-8'>
                <div className='w-2/4'>
                    <label className='font-bold'>School Leave Date:</label>
                    <input type='date' className='w-full bod-in' />
                </div>
                <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '47%' }} required /> <CiSearch size='25px' /></div>
            </div>
        </div>
    );
}
export default CharacterCertificate;