import React from 'react'
import { AiOutlineHome } from "react-icons/ai";

const SideNavDashboard = () => {
  return (
    <div className='h-full w-56 sideNav-shadow'>
        <span className='py-2.5 px-3.5'>menu</span>
        <ul className='px-2.5'>
            <li className="px-2.5 py-1.5 flex items-center"> <AiOutlineHome color='gray'/> Dashboard</li>
            <li className="px-2.5 py-1.5 flex items-center">General Settings</li>
            <li className="px-2.5 py-1.5 flex items-center">Classes</li>
            <li className="px-2.5 py-1.5 flex items-center">Subjects</li>
            <li className="px-2.5 py-1.5 flex items-center">Students</li>
            <li className="px-2.5 py-1.5 flex items-center">Employees</li>
            <li className="px-2.5 py-1.5 flex items-center">Accounts</li>
            <li className="px-2.5 py-1.5 flex items-center">Fees</li>
            <li className="px-2.5 py-1.5 flex items-center">Salary</li>
            <li className="px-2.5 py-1.5 flex items-center">Attendance</li>
            <li className="px-2.5 py-1.5 flex items-center">Timetable</li>
            <li className="px-2.5 py-1.5 flex items-center">Homework</li>
            <li className="px-2.5 py-1.5 flex items-center">Behaviour % Skills</li>
            <li className="px-2.5 py-1.5 flex items-center">Online Store & POS</li>
            <li className="px-2.5 py-1.5 flex items-center">WhatsApp</li>
            <li className="px-2.5 py-1.5 flex items-center">Messaging</li>
            <li className="px-2.5 py-1.5 flex items-center">SMS Services</li>
            <li className="px-2.5 py-1.5 flex items-center">Live Clase</li>
            <li className="px-2.5 py-1.5 flex items-center"></li>
        </ul>
    </div>
  )
}

export default SideNavDashboard