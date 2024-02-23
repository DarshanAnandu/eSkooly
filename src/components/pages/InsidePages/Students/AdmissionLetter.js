import { CiSearch } from "react-icons/ci";

const AdmissionLetter = () => {
    return (
        <div className='h-screen m-9 w-full'>
            <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' /></div>
        </div >
    );
}
export default AdmissionLetter;  