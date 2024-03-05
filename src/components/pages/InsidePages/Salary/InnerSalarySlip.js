import { TfiPrinter } from "react-icons/tfi";
export const InnerSalarySlip = () => {
    return (
        <div className="p-9 h-full">
            <div className="rounded-xl flex flex-col h-[50%] bg-[#f7e5e9] p-3">
                <div className="h-full flex flex-col justify-end items-center">
                    <div className='flex flex-col'>
                        <span>Registration/ID :</span>
                        <span>Type :</span>
                        <span>Salary Month :</span>
                        <span>Date of Receiving :</span>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <span>Bonus</span>
                            <b className="ml-16"><span className="text-[#999]">₹</span>0</b>
                        </div>
                        <div className="flex justify-between">
                            <span>Deduction:</span>
                            <b><span className="text-[#999]">₹</span>0</b>
                        </div>
                        <div className="flex justify-between">
                            <span>Net Paid:</span>
                            <b><span className="text-[#999]">₹</span>0</b>
                        </div>
                    </div>
                    <button className="flex items-center text-[#fff] m-3 px-3 py-2" style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)' }}><TfiPrinter color="#fff" /><span className="pl-2">Print Salary Slip</span></button>
                </div>
            </div>
        </div>
    );
}