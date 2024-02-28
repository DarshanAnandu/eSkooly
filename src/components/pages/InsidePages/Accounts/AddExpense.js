import React, { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";

const AddExpense = () => {
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        amount: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const Create = async (event) => {
        try {
            const response = await fetch('http://vidyalay.saanvigs.com/chartofaccounts/addAccountStatement', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    institutionId: localStorage.getItem('institutionID'),
                    date: formData.date,
                    description: formData.description,
                    type: "EXPENSE",
                    amount: formData.amount,
                }),
            });
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Login Error:', error);
        }
    };
    return (
        <div className='m-9 w-full flex justify-center'>
            <div className='wid-stu-adding'>
                <h3 className='text-center font-bold' style={{ color: '#9698d6', fontSize: '1.75rem' }}>Add Expense</h3>
                <hr />
                <form className='flex flex-col'>
                    <input type='date' name='expensedate' value={formData.date} onChange={handleChange} placeholder='' className='bod-in my-1 mt-3 p-2 focus:outline-blue-500' required />
                    <input type='text' name='expensename' value={formData.description} onChange={handleChange} placeholder='Expense Description' className='bod-in my-1 p-2 focus:outline-blue-500' required />
                    <input type='text' name='expensename' value={formData.amount} onChange={handleChange} placeholder='Expense Amount' className='bod-in my-1 p-2 focus:outline-blue-500' required />
                    <hr className='mt-4' />
                    <div className='flex justify-center mt-3'><button className='flex items-center text-white justify-center ml-3' style={{ background: 'linear-gradient(45deg, #4d4cac, #5a59ab)', width: '170px', padding: '10px', fontSize: '15px', borderRadius: '2px' }}><IoMdCheckmark color='white' /><span className='pl-2'>Submit</span></button></div>
                </form>
            </div>
        </div>
    );
}
export default AddExpense;