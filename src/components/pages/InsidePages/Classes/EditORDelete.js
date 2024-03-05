import React, { Component } from 'react';
import { TfiReload } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
class EditORDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // allStudents: [],
      // specificStudent: [],
      class: '',
      classId: '',
      classesInfo: JSON.parse(localStorage.getItem('Classes')) || [],
      specificClass: []
    };
  }
  componentDidMount() {
    this.getClassesInfo();
  }

  async getClassesInfo() {
    console.log('called')
    try {
      console.log('entered')
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
  async deleteClass() {
    console.log(this.state.classId, 'this.state.classId')
    try {
      const response = await fetch(`http://vidyalay.saanvigs.com/class/deleteclass?classId=${this.state.classId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      console.log(responseData);
      // this.setState({ classesInfo: responseData });
      // localStorage.setItem('Classes', JSON.stringify(responseData));
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
      <div className='m-9 flex flex-col justify-center items-center w-full'>
        <select id="feeFor" value={this.state.class} onChange={(e) => this.setState({ class: e.target.value, classId: localStorage.getItem('classId') })} className="w-1/3 mt-2 p-2 focus:ring-blue-500 outline-none bod-in focus:border-blue-500">
          <option value="" disabled>---- Select Class ----</option>
          {this.state.classesInfo.map((e, idx) => <option key={idx} onClick={() => {
            localStorage.setItem('classId', e.classId)
            localStorage.setItem('classIdx', idx)
          }}>{e.className}</option>)}
        </select>
        <hr />
        <div className='flex'>
          <Link className='flex items-center bg-blue-500 rounded-sm mt-2 p-2 text-white' to={this.state.class !== '' ? '/eSkooly/pages/Classes/Edit' : null}><TfiReload color='white' /> <span className='pl-2'>Update</span></Link>
          <button className='flex items-center bg-red-500 rounded-sm ml-2 mt-2 p-2 text-white' onClick={() => this.state.class !== '' ? this.deleteClass() : ''}><IoMdClose color='white' /> <span className='pl-2'>Delete</span></button>
        </div>
      </div>
    );
  }
}
export default EditORDelete;