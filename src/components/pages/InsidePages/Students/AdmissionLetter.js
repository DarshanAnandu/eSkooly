import React, { Component } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

class AdmissionLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            searchResults: [],
            students: []
        };
    }

    componentDidMount() {
        this.getStudentsInfo();
    }

    async getStudentsInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/student/getstudents?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            this.setState({ students: responseData });
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
        let filteredStudents = [];
        if (query.length > 0) {
            filteredStudents = this.state.students.filter(student =>
                student.name.toLowerCase().includes(query.toLowerCase()) ||
                student.registrationNumber.toLowerCase().includes(query.toLowerCase()) ||
                student.class_.toLowerCase().includes(query.toLowerCase())
            );
        }
        this.setState({ searchResults: filteredStudents });
    };

    render() {
        return (
            <div className='h-screen m-9 w-full'>
                <div className='flex w-full justify-center items-center mt-10'>
                    <input
                        type='text'
                        placeholder='Search Student'
                        value={this.state.searchQuery}
                        onChange={this.handleSearchChange}
                        autoComplete='off'
                        className='focus:outline-none ml-4 '
                        style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }}
                        required
                    />
                    <CiSearch size='25px' />
                </div>
                <div className='flex justify-center'>
                    <div className={`flex flex-col ${this.state.searchQuery.length === 0 ? '' : 'bod-in'} items-center justify-center`} style={{ width: '250px' }}>
                        {this.state.searchResults.map((student, index) => (
                            <div key={index} className='flex p-1 mx-6'>
                                <Link key={index} to={{ pathname: '/eSkooly/pages/Students/Admission-Letter/Inner-Admission-Letter' }} className='flex cursor-pointer hover:bg-red-400 hover:text-white' style={{ width: '250px' }}>
                                    <p>{student.registrationNumber}</p>
                                    <span className='mx-1'>-</span>
                                    <p>{student.name}</p>
                                    <span className='mx-1'>-</span>
                                    <p>{student.class_}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default AdmissionLetter;
