import React from 'react'

class InsidePaySalary extends React.Component {
    render() {
        // const paySalaryStateString = localStorage.getItem('paySalaryState');
        // const paySalaryStateObject = JSON.parse(paySalaryStateString);
        const paySalaryStateObject = JSON.parse(localStorage.getItem('paySalaryState'));
        const { employeeId, name, FatherName } = paySalaryStateObject;

        return (
            <div>
                <div className='p-9'>
                    <h3 className='text-center font-semibold text-2xl' style={{ color: '#ff808b', padding: '10px' }}>Pay Salary Form</h3>
                    <div className='flex justify-center items-center text-[#9698d6] p-[10px]' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)' }}>
                        <div className='p-[10px] inline-block'>
                            <span>Employee ID:</span>
                            <input type='text' className='text-[#fff] bg-transparent outline-none w-[60px] border-0 p-[2px] m-[5px]' defaultValue={employeeId} />
                            <input type='text' className='text-[#fff] bg-transparent outline-none w-[60px] border-0' defaultValue='Teacher' />
                        </div>
                        <div className='flex p-[10px]'>
                            <span>Employee Name:</span>
                            <input type='text' defaultValue={name} className='text-[#fff] bg-transparent outline-none w-[60px] border-0' />
                        </div>
                        <div className='flex p-[10px]'>
                            <span>Father Name:</span>
                            <input type='text' defaultValue={FatherName} className='text-[#fff] bg-transparent outline-none w-[60px] border-0' />
                        </div>
                    </div>
                    <div className='flex justify-center p-5'>
                        <div className='flex flex-col w-[33%] mr-3'>
                            <label>Salary Month</label>
                            <input type="date" className='bod-in bg-white outline-none p-1 my-1' />
                            <input type="date" className='bod-in bg-white outline-none p-1 my-1' />
                        </div>
                        <div className='flex flex-col w-[33%] justify-between'>
                            <label className='text-[#ff808b] font-bold'>Salary Amount*</label>
                            <input type="number" className='bod-in bg-white outline-none p-1 my-1' />
                            <input type="number" placeholder='Any Bonus' className='bod-in bg-white outline-none p-1 my-1' />
                            <input type="number" placeholder='Any Deduction' className='bod-in bg-white outline-none p-1 my-1' />
                        </div>
                    </div>
                    <hr />
                    <div className='text-center'><button className='m-4 p-2 bg-[#FF5370] border-[#FF5370] text-white cursor-pointer' style={{ transition: 'all ease-in 0.3s' }}>Submit</button></div>
                </div>
            </div>
        )
    }
}
export default InsidePaySalary;