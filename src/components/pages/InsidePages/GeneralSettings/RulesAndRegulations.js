import { IoMdCheckmark } from "react-icons/io";
import { LuUndo2 } from "react-icons/lu";
import { GrRedo } from "react-icons/gr";

const RulesAndRegulations = () => {
    return (
        <div className='p-6 pt-6 shadow border-black bod-in m-9 rounded-2xl bg-white hover:shadow-2xl'>
            <h5 className='font-semibold text-blue-500 mb-4' style={{ fontSize: '14px', fontFamily: 'Poppins, sans-serif' }}>Institute Rules & Regulations</h5>
            <div className='bod-in'>
                <div className='flex' style={{ padding: '1px', fontSize: '16px', borderBottom: '1px solid rgba(0,0,0,.125)' }}>
                    <div className='p-1 py-2 cursor-default rounded-sm hover:bg-gray-300'><span className='px-1'>File</span></div>
                    <div className='p-1 py-2 cursor-default rounded-sm hover:bg-gray-300'><span className='px-1'>Edit</span></div>
                    <div className='p-1 py-2 cursor-default rounded-sm hover:bg-gray-300'><span className='px-1'>View</span></div>
                    <div className='p-1 py-2 cursor-default rounded-sm hover:bg-gray-300'><span className='px-1'>Format</span></div>
                </div>
                <div className='flex'>
                    <LuUndo2 size="24px" className='m-2' />
                    <GrRedo size="24px" className='m-2' style={{ borderRight: '1px solid rgba(0,0,0,.125)' }} />
                    {/* <hr /> */}
                    <select>
                        <option value="">Headings
                            <div className=''>
                                <h1>Heading 1</h1>
                                <h2>Heading 2</h2>
                                <h3>Heading 3</h3>
                                <h4>Heading 4</h4>
                                <h5>Heading 5</h5>
                                <h6>Heading 6</h6>
                            </div>
                        </option>
                        <option value="">Inline <select></select></option>
                        <option value="">Blocks <select></select></option>
                        <option value="">Align <select></select></option>
                    </select>
                </div>
            </div>
            <div className='flex justify-end'><button className='flex items-center justify-end bg-blue-500 mt-2 p-2 px-5 rounded-sm text-white'><IoMdCheckmark color='white' /> <span className='pl-2'>Save Changes</span></button></div>
        </div>
    );
}
export default RulesAndRegulations;