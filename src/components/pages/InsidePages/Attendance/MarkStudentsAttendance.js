import { Component } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
class MarkStudentsAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // feefor: '',
            cls: '',
            date: new Date().toISOString().split('T')[0],
            studentsInfo: JSON.parse(localStorage.getItem('studentsInfo')) || [],
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
            if (!response.ok) {
                console.log('Bad Response for sign in, The Response', response);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const responseData = await response.json();
            this.setState({ studentsInfo: responseData });
            localStorage.setItem('studentsInfo', JSON.stringify(responseData));
            console.log('get req success')
            console.log(responseData)
        } catch (error) {
            console.error('Info Error:', error);
        }
    };
    render() {
        return (
            <div className='p-9 w-full flex justify-center'>
                <div className='w-1/2 flex flex-col justify-center'>
                    <div className="w-full">
                        <h6 className='text-center font-bold' style={{ color: '#9698d6', padding: '10px', fontSize: '14px' }}>Mark Manual Attandance Class wise</h6>
                        <form className="">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center w-full my-1"><input type='date' value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} className='focus:outline-blue-500 ml-4 bod-in w-full' style={{ background: 'white', border: '', borderBottom: '', padding: '9px 10px 8px 10px' }} required /></div>
                                <div className="flex items-center w-full my-1">
                                    <select value={this.state.cls} onChange={(e) => this.setState({ cls: e.target.value })} className='focus:outline-blue-500 ml-4 bod-in w-full' style={{ background: 'white', border: '', borderBottom: '', padding: '9px 10px 8px 10px' }} required>
                                        <option>-----SELECT CLASS-----</option>
                                        {this.state.studentsInfo.length > 0 && this.state.studentsInfo.map((e, idx) => (<option key={idx}>{e.class_}</option>))}
                                    </select>
                                </div>
                                <button onClick={() => {
                                    localStorage.setItem('stuAttend', JSON.stringify([{ cls: this.state.cls, date: this.state.date }]));
                                }} className='flex items-center text-white justify-center ml-3 px-8 my-1' style={{ backgroundColor: '#4099ff', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '2px' }}> <Link to={{ pathname: '/eSkooly/pages/Attendance/Mark-Student-Attendance/Inner-Student-Attendance' }} className="flex items-center justify-center"><CiSearch size='25px' />Search</Link></button>
                            </div>
                        </form>
                    </div>
                    <hr style={{ margin: '50px', height: '2px', border: 'none', color: '#333', backgroundColor: '#333' }} />
                    <div className='flex flex-col justify-center'>
                        <h6 className='text-center font-bold' style={{ color: '#9698d6', padding: '10px', fontSize: '14px' }}>Mark Manual Attandance Class wise</h6>
                        <div className='flex flex-col xl:flex-row justify-center'>
                            <button className='flex items-center text-white justify-center m-3 px-8' style={{ background: 'linear-gradient(45deg, #2ed8b6, #59e0c5)', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}><img src="https://eskooly.com/bb/assets/scancard.gif" style={{ height: '50px', verticalAlign: 'middle', borderRadius: '6px' }} alt="gif" /><span className="p-3">In Attendance</span></button>
                            <button className='flex items-center text-white justify-center m-3 px-8' style={{ background: 'linear-gradient(45deg, #7878e8, #8787e5)', borderColor: '#4099ff', padding: '10px', fontSize: '15px', borderRadius: '12px' }}><img src="https://eskooly.com/bb/assets/scancard.gif" style={{ height: '50px', verticalAlign: 'middle', borderRadius: '6px' }} alt="" /><span className="p-3">Out Attendance</span></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MarkStudentsAttendance;