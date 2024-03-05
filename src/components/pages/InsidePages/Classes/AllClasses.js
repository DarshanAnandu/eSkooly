import React, { Component } from 'react';
import { BrowserRouter as Router, Link, } from 'react-router-dom'
import { FaGraduationCap } from "react-icons/fa";

class AllClasses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // allStudents: [],
            // specificStudent: [],
            classesInfo: JSON.parse(localStorage.getItem('Classes')) || [],
            specificClass: []
        };
    }
    componentDidMount() {
        this.getClassesInfo();
    }

    async getClassesInfo() {
        try {
            const response = await fetch(`http://vidyalay.saanvigs.com/class/getclasses?institutionId=${localStorage.getItem('institutionId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            console.log(responseData);
            this.setState({ classesInfo: responseData });
            localStorage.setItem('Classes', JSON.stringify(responseData));
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        } catch (error) {
            console.error('Info Error:', error);
        }
    };
    render() {
        return (
            <div className='p-9 flex flex-wrap w-full'>
                {this.state.classesInfo.map((e, idx) => (
                    <div className='hover:shadow-2xl shadow flex flex-col p-7 m-3 text-white rounded-2xl cursor-pointer ' key={idx} style={{ width: '377px', background: 'linear-gradient(45deg, #4d4cac, #5a59ab)' }}>
                        <h6>{e.className}</h6>
                        <h2 className='flex justify-between'><span className='text-2xl font-bold'>{e.studentStrength}</span><FaGraduationCap size='26px' color='white' /></h2>
                        <p>STUDENTS</p>
                    </div>
                ))}
                <Link to='/eSkooly/pages/Classes/New-Class'>
                    <div className='hover:shadow-2xl shadow flex flex-col p-9 m-3 text-white rounded-2xl cursor-pointer items-center text-2xl' style={{ width: '377px', background: 'linear-gradient(45deg, #ff808b, #f79099)' }}>
                        <span className='text-4xl'>+</span>
                        <h2>Add New</h2>
                    </div>
                </Link>
            </div>
        );
    }
}

export default AllClasses;
