import React, { Component } from 'react';
import { TfiReload } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

class EditORDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: '',
      classId: '',
      classId_Idx: '',
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
        <select
          id="feeFor"
          value={this.state.class}
          onChange={(e) => this.setState({ class: e.target.value, classId: this.state.classesInfo[e.target.selectedIndex - 1].classID, classId_Idx: e.target.selectedIndex - 1 })}
          className="w-1/3 mt-2 p-2 focus:ring-blue-500 outline-none bod-in focus:border-blue-500"
        >
          <option value="" disabled>---- Select Class ----</option>
          {this.state.classesInfo.map((e, idx) => (
            <option key={idx} value={e.classId}>{e.className}</option>
          ))}
        </select>
        <hr />
        <div className='flex'>
          <Link className='flex items-center bg-blue-500 rounded-sm mt-2 p-2 text-white' to={{ pathname: this.state.class !== '' ? '/eSkooly/pages/Classes/Edit' : null, state: { lc: JSON.stringify([{ classId: this.state.classId, idx: this.state.classId_Idx }]) } }}>
            <TfiReload color='white' /> <span className='pl-2'>Update</span>
          </Link>
          <button className='flex items-center bg-red-500 rounded-sm ml-2 mt-2 p-2 text-white' onClick={() => this.state.classId !== '' ? this.deleteClass() : ''}>
            <IoMdClose color='white' /> <span className='pl-2'>Delete</span>
          </button>
        </div>
      </div>
    );
  }
}

export default EditORDelete;
