import React from 'react';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
// import { AiOutlineHome } from "react-icons/ai";
import SideNavItems from "./SideNavItems";

const SideNavDashboard = ({ selectedTab, onTabChange }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredSubIdx, setHoveredSubIdx] = useState(null);
  // console.log(SideNavItems[0].goto)
  return (
    <div className='z-50 w-60 h-full sideNav-shadow overflow-y-auto'>
      {/* <span className='py-2.5 px-3.5'></span> */}
      <ul className=''>
        <li className='px-2.5 py-1.5'><span></span>menu</li>
        {SideNavItems.map((items) => (
          <li
            key={items.idx}
            className={`px-5 py-1.5 w-full cursor-pointer hover: ${hoveredIdx === items.idx ? 'text-blue-600 ' : ''
              } ${!items.dropdown && selectedTab === items.idx ? 'border-l-4 border-indigo-500' : ''}`}
            onMouseEnter={() => setHoveredIdx(items.idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => {
              if (items.dropdown) {
                items.drop = !items.drop;
              } else {
                onTabChange(items.idx, null);
              }
            }}
          >
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <span className='p-1 pt-2 mr-2.5 inline-block items-center h-8 w-8 rounded'>{items.icon}</span>
                <span className='text-sm'>{items.name}</span>
              </div>
              {items.dropdown ? <div className='flex items-center w-2 justify-end'>{items.drop ? <FaMinus color='gray' /> : <FaPlus color='gray' />}</div>: null}
            </div>
            {items.dropdown && items.drop ? <ul>
              {items.subItems.map((item) => (
                <li
                  key={item.idx}
                  className={`px-5 py-1.5 w-full cursor-pointer ${hoveredSubIdx === item.idx ? 'text-blue-600 ' : ''
                    } ${selectedTab === item.idx ? 'border-l-4 border-indigo-500' : ''}`}
                  onMouseEnter={() => setHoveredSubIdx(item.idx)}
                  onMouseLeave={() => setHoveredSubIdx(null)}
                  onClick={() => onTabChange(items.idx, item.idx)}
                >
                  <div className='flex items-center w-full'>
                    <div className='flex items-center'>
                      <span className='text-sm'>{item.name}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul> : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideNavDashboard;

/*
  Dashboard, General Settings(Institute Profile, Fee Particulars, Fee Structure, Discount Type, Details for Fee challan, Rules and Regulations, Marks Grading, Theme & Language, Account Settings, Log out),
  Classes(All Classes, New Class, Edit OR Delete), Subjects(Classes with Subjects, Assign Subjects), Students(All Students, Add New, Manage Families, Active / Inactive, Admission Letter, Student ID Cards, Print Basic List, Promote Students), 
  Employees(All Employees, Add New, Staff ID Cards, Job Letter), Accounts(Chart Of Account, Add Income, Add Expense, Account Statement), Fees(Generate Bank Challan, Collect Fee, Fee Slip, Fees Defaulters, Fees Report, Delete Fee), 
  Salary(Pay Salary, Salary Slip, Salary Report), Attendance(Mark Structure Attendence, Mark Employees, Class Wise Report, Student Attendance Report, Employee Attendance Report), 
  Timetable(Weekdays, Time Periods, Class Rooms, Create TimeTable, Generate for Class, Generate for Teacher), Homework, Behaviour % Skills(Rate Behaviours, Rate Skills, Observations, Affective Domain Rating Report, Psycomotor Domain Rating Report), 
  Online Store & POS(Store Analytics, Product Catagories, Product Tax, Products, New Order, All Orders), WhatsApp, Messaging, SMS Services(Free SMS Gateway, Branded SMS, SMS Templates), Live Class, Question Paper(Subject Chapters, Question Bank, Create Question Paper), Exams(Create New Exam, Edit OR Delete, Add / update Exam Marks, Result Card, Blank Award List), Class Tests(Create New Test, Test Result), Reports(Student Report Card, Student Info Report, Parents Info Report, Studentes Monthly Attendance Report, Staff Monthly Attendance Report, Fee Collection Report, Student Progress Report, Accounts Report, Customized Reports), Certificates(Leave Certificate, Character Certificate, Certificate Templates)
*/

/* <li className="px-2.5 py-1.5 flex items-center"> <AiOutlineHome color='gray'/> Dashboard</li>
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
            <li className="px-2.5 py-1.5 flex items-center"></li> */