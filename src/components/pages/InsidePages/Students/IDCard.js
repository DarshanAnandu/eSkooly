import React, { Component } from 'react';
import { TfiReload, TfiPrinter } from 'react-icons/tfi';
import { CiSearch } from 'react-icons/ci';

class IDCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsInfo: JSON.parse(localStorage.getItem('studentsInfo')) || [],
    };
  }
  componentDidMount() {
    this.getClassesInfo();
  }

  async getClassesInfo() {
    try {
      const response = await fetch(`http://vidyalay.saanvigs.com/student/getstudents?institutionId=${localStorage.getItem('institutionId')}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      this.setState({ studentsInfo: responseData });
      localStorage.setItem('studentsInfo', JSON.stringify(responseData));
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
      <div className='m-9'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-between'>
            <div className='w-3/5 flex m-2'>
              <div className='flex w-1/2 items-center'><input type='text' placeholder='Search Student' className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }} required /> <CiSearch size='25px' /></div>
              <div className='flex w-1/2 items-center'><select className='focus:outline-none ml-4 w-11/12' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px' }}><option>--select class--</option></select> <CiSearch size='25px' /></div>
            </div>
            <div className='flex h-10' style={{ backgroundColor: 'rgb(240, 240, 240)' }}><TfiReload className='h-full w-16 p-3 cursor-pointer' /><TfiPrinter className='h-full p-3 w-16 cursor-pointer' /></div>
          </div>
          <div className="flex flex-wrap">
            {this.state.studentsInfo.map((e, idx) => (
              <div key={idx} className="flex flex-col text-center " style={{ background: 'url(https://eskooly.com/bb/assets/leftbg.png) left 45% no-repeat, url(https://eskooly.com/bb/assets/rightbg.png) right 45% no-repeat', width: '230px', margin: '6px', float: 'left', backgroundSize: '140px', border: '1px solid #9698d6', padding: '10px', borderRadius: '15px' }}>
                <img src="" style={{ height: '50px', maxWidth: '190px' }} alt="" />
                <h6 className="font-semibold" style={{ color: '#4d4cac', fontSize: '14px' }}></h6>
                <p style={{ color: '#4d4cac', fontSize: '10px' }}></p>
                <div className="flex justify-center">
                  <img src="https://eskooly.com/bb/uploads/students/no-image.png" className="" style={{ height: '100px', color: '#4d4cac', width: '100px', marginTop: '10px', borderRadius: '50%', border: '4px solid #ff808b' }} alt="" />
                </div>
                <div className="flex justify-center mt-2"></div>
                <div className="flex justify-between mt-2">
                  <div className="flex flex-col" style={{ lineHeight: '0px', alignItems: 'flex-start', fontSize: '9px' }}>
                    <b>Registeration No:<font style={{ marginLeft: '2px' }}>{e.registrationNumber}</font></b>
                    <b className="uppercase m-0 leading-6 text-xs font-bold" style={{ color: '#ff808b' }}>{e.name}</b>
                    <b>{e.class_}</b>
                  </div>
                  <div>
                    <img src="" className="" style={{}} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default IDCard;
