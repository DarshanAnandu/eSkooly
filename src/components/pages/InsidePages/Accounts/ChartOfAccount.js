import { IoTrashOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const ChartOfAccount = () => {
    return (
        <div className=' m-9 w-full flex'>
            <div className='min-w-60 w-2/6 p-3 bg-white shadow rounded hover:shadow-2xl'>
                <h5 className='text-center'>Add Chart Of Account</h5>
                <form className='flex flex-col'>
                    <input type='text' name='head' placeholder='Name Of Head*' className='my-2 mx-1 p-3 bod-in outline-black focus:outline-blue-400' style={{ outlineWidth: '0.5px' }} />
                    <select className='my-2 mx-1 p-3 bod-in focus:outline-blue-400'>
                        <option>Type*</option>
                        <option>Income</option>
                        <option>Expense</option>
                    </select>
                    <hr />
                    <div className='flex justify-center mt-4'><button type='submit' name='addHead' className='flex items-center m-2 p-2 px-4 justify-center cursor-pointer text-white' style={{ transition: 'all ease-in 0.3s', backgroundColor: '#FF5370', borderColor: '#FF5370' }}><FaPlus color='white' /><span className='pl-2'>Save Head</span></button></div>
                </form>
            </div>
            <div className='w-3/5 m-3 mt-0 ml-10'>
                <div className='flex justify-between'>
                    <span>
                        Show
                        <select className='bg-transparent bod-in mx-1 p-2 py-1'>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        entries
                    </span>
                    <div className=''>
                        <label className='mb-1'>Search: <input type='search' className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px', }} /></label>
                    </div>
                </div>
                <div className="w-full mt-2">
                    <table className="w-full" style={{ border: '1px solid #e9ecef', borderBottom: '1px solid #111' }}>
                        <thead>
                            <tr className='text-white' style={{ background: 'linear-gradient(45deg, #4b49ac, #5d5ba9)', borderBottom: '1px solid #111' }}>
                                <th className='cursor-pointer text-left' style={{ width: '435px', padding: '10px 18px' }}>NAME OF THE HEAD</th>
                                <th className='cursor-pointer text-left' style={{ width: '435px', padding: '10px 18px' }}>TYPE</th>
                                <th className='cursor-pointer text-left' style={{ width: '435px', padding: '10px 18px' }}>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='' style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
                                <td style={{ padding: '10px 18px' }}>Bus repair</td>
                                <td style={{ padding: '10px 18px' }}>EXPENSE</td>
                                <td style={{ padding: '10px 18px' }}>
                                    <button className='cursor-pointer' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', padding: '8px 14px', lineHeight: '16px', fontSize: '11px', borderRadius: '2px' }}><IoTrashOutline color='white' /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='' style={{ whiteSpace: 'nowrap', }}><span>Showing 1 to 1 of 1 entries</span></div>
                    <div className='text-right m-0 flex flex-end cursor-default' style={{ whiteSpace: 'nowrap', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none', }}>
                        <button className='m-1 mt-0 p-3 py-2' style={{ pointerEvents: 'none', }}>Previous</button>
                        <button className='m-1 p-3 py-2 bod-in' style={{ color: '#333', pointerEvents: 'none', backgroundColor: 'rgba(0, 0, 0, 0)', backgroundImage: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(220, 220, 220) 100%)', border: '1px solid #979797', }}>1</button>
                        <button className='m-1 mt-0' style={{ pointerEvents: 'none', }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChartOfAccount;