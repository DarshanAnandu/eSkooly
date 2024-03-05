import React, { Component } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
class SalarySlip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            searchResults: [],
            employeeInfo: JSON.parse(localStorage.getItem('employeeInfo')),
        };
    }
    componentDidMount() {
        this.getClassesInfo();
    }

    async getClassesInfo() {
        if (!localStorage.getItem('employeeInfo')) {
            try {
                const response = await fetch(`http://vidyalay.saanvigs.com/employee/getemployees?institutionId=${localStorage.getItem('institutionId')}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const responseData = await response.json();
                this.setState({ employeeInfo: responseData });
                localStorage.setItem('employeeInfo', JSON.stringify(responseData));
                if (!response.ok) {
                    console.log('Bad Response for sign in, The Response', response);
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            } catch (error) {
                console.error('Info Error:', error);
            }
        }
    };
    handleSearchChange = (event) => {
        const query = event.target.value;
        this.setState({ searchQuery: query });

        let filteredEmployees = [];
        if (query.length > 0) {
            filteredEmployees = this.state.employeeInfo.filter(emp =>
                emp.name.toLowerCase().includes(query.toLowerCase()) ||
                emp.employeeId.toLowerCase().includes(query.toLowerCase())
            );
        }

        this.setState({ searchResults: filteredEmployees });
    };
    render() {
        return (
            <div className='h-screen m-9 w-full'>
                <div className='flex w-full justify-center items-center mt-10'><input type='text' value={this.state.searchQuery} onChange={this.handleSearchChange} placeholder='Search Employee' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' /></div>
                <div className='flex justify-center'>
                    <div className={`flex flex-col ${this.state.searchQuery.length === 0 ? '' : 'bod-in'} items-center justify-center`} style={{ width: '250px' }}>
                        {this.state.searchResults.map((emp, idx) => (
                            <div key={idx} className='flex p-4'>
                                <Link
                                    key={idx}
                                    to={{
                                        pathname: '/eSkooly/pages/Salary/Salary-Slip/Inner-Salary-Slip',
                                        state: {
                                            employeeId: emp.employeeId,
                                            name: emp.name,
                                            FatherName: emp.fatherName
                                        }
                                    }}
                                    className='flex hover:bg-red-400 hover:text-white'
                                >
                                    <p>{emp.employeeId}</p>
                                    <span className='mx-1'>-</span>
                                    <p>{emp.name}</p>
                                    <span className='mx-1'>-</span>
                                    <p>Teacher</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        );
    }
}
export default SalarySlip;