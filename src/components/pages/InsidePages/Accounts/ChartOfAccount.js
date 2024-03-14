import React, { Component } from 'react';
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { type } from '@testing-library/user-event/dist/type';

class ChartOfAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headName: '',
            type: '',
            searchQuery: '',
            currentPage: 1,
            entriesPerPage: 10,
            accountsInfo: JSON.parse(localStorage.getItem('accountsInfo')) || [],
        };
    }

    handleEntriesPerPageChange = (e) => {
        this.setState({ entriesPerPage: parseInt(e.target.value), currentPage: 1 });
    };

    handleSearchChange = (e) => {
        this.setState({ searchQuery: e.target.value });
    };

    componentDidMount() {
        this.getAccountsInfo();
    }

    async getAccountsInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/chartofaccounts/getchartofaccount?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
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
    async setAccountInfo() {
        try {
            console.log(localStorage.getItem('institutionId'), this.state.headName, this.state.type)
            const response = await fetch(`http://vidyalay.saanvigs.com/chartofaccounts/createchartofaccount`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({
                    institutionId: localStorage.getItem('institutionId'),
                    headName: this.state.headName,
                    type: this.state.type
                }),
            });
            const responseData = await response.json();
            console.log(responseData)
            // this.setState({ accountsInfo: responseData });
            // localStorage.setItem('accountsInfo', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            this.getAccountsInfo();
        } catch (error) {
            console.error('Info Error:', error);
        }
    };
    async removeAccountInfo() {
        try {
            console.log(localStorage.getItem('institutionId'), this.state.headName, this.state.type)
            const response = await fetch(`http://vidyalay.saanvigs.com/chartofaccounts/createchartofaccount`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({
                    institutionId: localStorage.getItem('institutionId'),
                    headName: this.state.headName,
                    type: this.state.type
                }),
            });
            const responseData = await response.json();
            console.log(responseData)
            // this.setState({ accountsInfo: responseData });
            // localStorage.setItem('accountsInfo', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            this.getAccountsInfo();
        } catch (error) {
            console.error('Info Error:', error);
        }
    };
    render() {
        const { entriesPerPage, searchQuery, currentPage, accountsInfo } = this.state;

        // Filter accounts based on search query
        const filteredAccounts = Array.isArray(accountsInfo) ? accountsInfo.filter(account =>
            (account.name && account.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (account.type && account.type.toLowerCase().includes(searchQuery.toLowerCase()))
        ) : [];

        // Pagination logic
        const indexOfLastEntry = currentPage * entriesPerPage;
        const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
        const currentEntries = filteredAccounts.slice(indexOfFirstEntry, indexOfLastEntry);

        return (
            <div className=' m-9 w-full flex'>
                <div className='min-w-60 h-max w-2/6 p-3 bg-white shadow rounded hover:shadow-2xl'>
                    <h5 className='text-center'>Add Chart Of Account</h5>
                    <form className='flex flex-col'>
                        <input type='text' value={this.state.headName} onChange={(e) => this.setState({ headName: e.target.value })} name='head' placeholder='Name Of Head*' className='my-2 mx-1 p-3 bod-in outline-black focus:outline-blue-400' style={{ outlineWidth: '0.5px' }} />
                        <select value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })} className='my-2 mx-1 p-3 bod-in focus:outline-blue-400'>
                            <option>Type*</option>
                            <option>Income</option>
                            <option>Expense</option>
                        </select>
                        <hr />
                        <div className='flex justify-center mt-4'>
                            <button type='submit' onClick={(e) => this.setAccountInfo(e)} name='addHead' className='flex items-center m-2 p-2 px-4 justify-center cursor-pointer text-white' style={{ transition: 'all ease-in 0.3s', backgroundColor: '#FF5370', borderColor: '#FF5370' }}>
                                <FaPlus color='white' /><span className='pl-2'>Save Head</span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-3/5 m-3 mt-0 ml-10'>
                    <div className='flex justify-between'>
                        <span>
                            Show
                            <select value={entriesPerPage} onChange={this.handleEntriesPerPageChange} className='bg-transparent bod-in mx-1 p-2 py-1'>
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                            entries
                        </span>
                        <div>
                            <label className='mb-1'>
                                Search: <input type='search' value={searchQuery} onChange={this.handleSearchChange} className='focus:outline-none p-2' style={{ borderRadius: '3px', border: '1px solid #aaa', backgroundColor: 'transparent', marginLeft: '0.5em', fontSize: '14px' }} />
                            </label>
                        </div>
                    </div>
                    <div className="w-full mt-2">
                        <table className="w-full" style={{ border: '1px solid #e9ecef', borderBottom: '1px solid #111' }}>
                            {/* Table Header */}
                            <thead>
                                <tr className='text-white' style={{ background: 'linear-gradient(45deg, #4b49ac, #5d5ba9)', borderBottom: '1px solid #111' }}>
                                    <th className='cursor-pointer text-left' style={{ width: '435px', padding: '10px 18px' }}>NAME OF THE HEAD</th>
                                    <th className='cursor-pointer text-left' style={{ width: '435px', padding: '10px 18px' }}>TYPE</th>
                                    <th className='cursor-pointer text-left' style={{ width: '435px', padding: '10px 18px' }}>ACTION</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody>
                                {currentEntries.map((e, idx) => (
                                    <tr key={idx} className='' style={{ backgroundColor: 'rgba(0,0,0,.05)' }}>
                                        <td style={{ padding: '10px 18px' }}>{e.name}</td>
                                        <td style={{ padding: '10px 18px' }}>{e.type}</td>
                                        <td style={{ padding: '10px 18px' }}>
                                            <button className='cursor-pointer' style={{ background: 'linear-gradient(45deg, #ff808b, #f79099)', padding: '8px 14px', lineHeight: '16px', fontSize: '11px', borderRadius: '2px' }}><IoTrashOutline color='white' /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className='flex justify-between items-center'>
                        <div className='' style={{ whiteSpace: 'nowrap' }}><span>Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, filteredAccounts.length)} of {filteredAccounts.length} entries</span></div>
                        <div className='text-right m-0 flex flex-end items-center cursor-default' style={{ whiteSpace: 'nowrap', color: '#666', border: '1px solid transparent', background: 'transparent', boxShadow: 'none' }}>
                            <button onClick={() => this.setState({ currentPage: currentPage - 1 })} disabled={currentPage === 1} className='m-1 mt-0 p-3 py-2'>Previous</button>
                            {Array.from({ length: Math.ceil(filteredAccounts.length / entriesPerPage) }, (_, i) => {
                                if (i === 0 || i === Math.ceil(filteredAccounts.length / entriesPerPage) - 1 || (i >= currentPage - 1 && i <= currentPage + 1)) {
                                    return (
                                        <button key={i} onClick={() => this.setState({ currentPage: i + 1 })} className={`m-1 p-3 py-2 bod-in ${currentPage === i + 1 ? 'bg-gray-400' : ''}`}>{i + 1}</button>
                                    );
                                } else if (i === 1 && currentPage > 3) {
                                    return <span key={i} className='text-xl'>...</span>;
                                } else if (i === Math.ceil(filteredAccounts.length / entriesPerPage) - 2 && currentPage < Math.ceil(filteredAccounts.length / entriesPerPage) - 3) {
                                    return <span key={i} className='text-xl'>...</span>;
                                }
                                return null;
                            })}
                            <button onClick={() => this.setState({ currentPage: currentPage + 1 })} disabled={indexOfLastEntry >= filteredAccounts.length} className='m-1 mt-0'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChartOfAccount;
