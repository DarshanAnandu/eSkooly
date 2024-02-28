import React, { Component } from 'react';
import { TfiReload } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { TfiPrinter } from "react-icons/tfi";
import { CiCalendar } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiFilterLine } from "react-icons/ri";

class AccountStatement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            accountsInfo: JSON.parse(localStorage.getItem('accountsInfo')) || [],
        };
    }

    componentDidMount() {
        this.getAccountsInfo();
    }

    async getAccountsInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/chartofaccounts/getAccountStatement?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            console.log(responseData)
            this.setState({ accountsInfo: responseData });
            localStorage.setItem('accountsInfo', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };
    // getTotalDebit = () => {
    //     let totalDebit = 0;
    //     this.state.accountsInfo.forEach(account => {
    //         if (account.type === 'EXPENSE') {
    //             totalDebit += account.amount;
    //         }
    //     });
    //     return totalDebit;
    // }
    // getTotalCredit = () => {
    //     let totalCredit = 0;
    //     this.state.accountsInfo.forEach(account => {
    //         if (account.type === 'INCOME') {
    //             totalCredit += account.amount;
    //         }
    //     });
    //     return totalCredit;
    // }
    // getNetBalance = () => {
    //     const totalDebit = this.getTotalDebit();
    //     const totalCredit = this.getTotalCredit();
    //     return totalCredit - totalDebit;
    // }
    getTotalAmount = (type) => {
        let totalAmount = 0;
        this.state.accountsInfo.forEach(account => {
            if (type === 'EXPENSE' && account.type === 'EXPENSE') {
                totalAmount += account.amount;
            } else if (type === 'INCOME' && account.type === 'INCOME') {
                totalAmount += account.amount;
            } else if (type === 'NET_BALANCE' && account.type === 'INCOME') {
                // You need to calculate net balance based on your logic
                totalAmount += account.amount
            }
        });
        return Math.round(totalAmount);
    }
    render() {
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
                                <th className='cursor-pointer text-left' style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>Date</th>
                                <th className='cursor-pointer text-left' style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>Description</th>
                                <th className='cursor-pointer text-left' style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>Debit</th>
                                <th className='cursor-pointer text-left' style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>Credit</th>
                                <th className='cursor-pointer text-left' style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>Net Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.accountsInfo.map((e, idx) => {
                                // Convert the date string to a JavaScript Date object
                                let formattedDate = '';
                                if (!isNaN(new Date(e.date).getTime())) {
                                    const date = new Date(e.date);

                                    // Format the date to desired format (e.g., 18 February 2024)
                                    formattedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
                                }

                                return (
                                    <tr className='' key={idx} style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
                                        <td style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>{formattedDate}</td>
                                        <td style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>{e.description}</td>
                                        <td style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>{e.type === 'EXPENSE' ? ` ₹ ${e.amount}` : ''}</td>
                                        <td style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>{e.type === 'INCOME' ? ` ₹ ${e.amount}` : ''}</td>
                                        <td style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>{e.type === 'INCOME' ? ` ₹ ${e.amount}` : ''}</td>
                                    </tr>
                                );
                            })}
                            <tr className='' style={{ backgroundColor: 'transparent' }}>
                                <td style={{ border: '1px solid #e9ecef' }}></td>
                                <td style={{ padding: '10px 18px', border: '1px solid #e9ecef' }} className=''><b>Total</b></td>
                                <td style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>
                                    <b style={{ color: '#ff808b' }}>
                                        ₹ {this.getTotalAmount('EXPENSE')} <br /> Expense
                                    </b>
                                </td>
                                <td style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>
                                    <b style={{ color: '#5e81f4' }}>
                                        ₹ {this.getTotalAmount('INCOME')} <br /> Income
                                    </b>
                                </td>
                                <td style={{ padding: '10px 18px', border: '1px solid #e9ecef' }}>
                                    <b style={{ color: '#4b49ac' }}>
                                        ₹ {this.getTotalAmount('NET_BALANCE')} <br /> Net Profit
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default AccountStatement;
