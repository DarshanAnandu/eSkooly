import React, { Component } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

class JobLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            searchResults: [],
            employeeInfo: JSON.parse(localStorage.getItem('employeeInfo')) || [],
        };
    }
    componentDidMount() {
        this.getEmployeeInfo();
    }

    async getEmployeeInfo() {
        try {
            console.log('entered')
            const response = await fetch(`http://vidyalay.saanvigs.com/employee/getemployees?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            console.log(responseData);
            this.setState({ employeeInfo: responseData });
            localStorage.setItem('employeeInfo', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };

    handleSearchChange = (event) => {
        const query = event.target.value;
        this.setState({ searchQuery: query });
        let filteredEmp = [];
        if (query.length > 0) {
            filteredEmp = this.state.employeeInfo.filter(employee =>
                employee.name.toLowerCase().includes(query.toLowerCase()) ||
                employee.employeeId.toLowerCase().includes(query.toLowerCase())
            );
        }
        this.setState({ searchResults: filteredEmp });
    };
    render() {
        return (
            <div className='h-screen m-9 w-full'>
                <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Employee' value={this.state.searchQuery} onChange={this.handleSearchChange} className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' /></div>
                <div className='flex justify-center'>
                    <div className={`flex flex-col ${this.state.searchQuery.length === 0 ? '' : 'bod-in'} items-center justify-center`} style={{ width: '250px' }}>
                        {this.state.searchResults.map((emp, index) => (
                            <div key={index} className='flex p-1 mx-6'>
                                <Link key={index} to={{ pathname: '/eSkooly/pages/Employees/Job-Letter/Inner-Job-Letter' }} className='flex cursor-pointer hover:bg-red-400 hover:text-white' style={{ width: '250px' }}>
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
export default JobLetter;  