import { TfiReload } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { TfiPrinter } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiFilterLine } from "react-icons/ri";

const AccountStatement = () => {
    return (
        <div className='p-9 w-full flex flex-col'>
            <div className='flex items-center justify-between w-full pr-14'>
                <div className='flex items-center mt-3'>
                    <input type='date' name='expensedate' placeholder='' className='bod-in my-1 p-2 focus:outline-blue-500' required />
                    <span className='mx-2'>To:</span>
                    <input type='date' name='expensedate' placeholder='' className='bod-in my-1 p-2 focus:outline-blue-500' required />
                    <button className='flex items-center text-white justify-center ml-3 px-8' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><CiSearch /><span className='pl-2'>Statement</span></button>
                </div>
                <div className='flex w-min'><div className='flex h-10 w-min' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><CiCalendar className='h-full p-3 w-16 cursor-pointer' /><TfiPrinter className='h-full p-3 w-16 cursor-pointer' /><TfiReload className='h-full w-16 p-3 cursor-pointer' /><RiDeleteBin5Line className='h-full w-16 p-3 cursor-pointer' /><RiFilterLine className='h-full p-3 w-16 cursor-pointer' /></div></div>
            </div>
            <div className=''>
                <table className="w-full " style={{ border: '1px solid #e9ecef', backgroundColor: 'transparent' }}>
                    <thead>
                        <tr className='text-black' style={{}}>
                            <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Date</th>
                            <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Description</th>
                            <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Debit</th>
                            <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Credit</th>
                            <th className='cursor-pointer text-left' style={{ padding: '10px 18px' }}>Net Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='' style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
                            <td></td>
                            <td style={{ padding: '10px 18px' }} className=''><b>Total</b></td>
                            <td style={{ padding: '10px 18px' }}>
                                <b style={{ color: '#ff808b' }}>
                                    $ 0 <br /> Expense
                                </b>
                            </td>
                            <td style={{ padding: '10px 18px' }}>
                                <b style={{ color: '#5e81f4' }}>
                                    $ 0 <br /> Income
                                </b>
                            </td>
                            <td style={{ padding: '10px 18px' }}>
                                <b style={{ color: '#4b49ac' }}>
                                    $ 0 <br /> Net Profit
                                </b>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default AccountStatement;