import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
// import { AiOutlineHome } from "react-icons/ai";
import SideNavItems from "./SideNavItems";
const SideNavDashboard = ({ selectedTab, selectedSubTab, onTabChange }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredSubIdx, setHoveredSubIdx] = useState(null);
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  // const toggleDropdown = (idx) => {
  //   setExpandedDropdown((prev) => (prev === idx ? null : idx));
  // };

  const handleItemClick = (idx, dropdown, idsx) => {
    if (dropdown) {
      setExpandedDropdown((prev) => (prev === idx ? null : idx));
      localStorage.setItem('tabIndex', idx)
      localStorage.setItem('subTabIndex', idsx)
    } else {
      onTabChange(idx, null);
      localStorage.setItem('tabIndex', idx)
      localStorage.setItem('subTabIndex', null)
    }
  };
  // sideNav-shadow
  return (
    <div className=' shadow-2xl overflow-auto sid-nav' style={{ width: '235px', float: 'left', height: 'calc(100% - 50px)', backgroundColor: '#fff' }}>
      <ul>
        <li className='px-2.5 py-1.5'><span></span>menu</li>
        {SideNavItems.map((items) => (
          <li
            key={items.idx}
            className={`w-full cursor-pointer hover:${hoveredIdx === items.idx ? 'text-blue-600 ' : ''} `}
            style={{ color: hoveredIdx === items.idx ? '#5e81f4' : '#666' }}
            onMouseEnter={() => setHoveredIdx(items.idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <Link
              to={items.goto}
              className='flex items-center justify-between pr-3 w-full'
              onClick={() => handleItemClick(items.idx, items.dropdown, null)}
            >
              <div className={`flex items-center px-5 py-1.5  ${selectedTab === items.idx ? 'border-l-4 border-indigo-500' : ''}`}>
                <span className='p-1 pt-2 mr-0 inline-block items-center h-8 w-8 rounded'>{hoveredIdx === items.idx ? items.hovered_Icon : items.normal_Icon}</span>
                <span className='text-sm'>{items.name}</span>
              </div>
              {items.dropdown && (
                <div className='flex items-center w-2 wl-0 w  r-8 justify-end'>
                  {expandedDropdown === items.idx ? <FaMinus color='gray' /> : <FaPlus color='gray' />}
                </div>
              )}
              {items.Lock && (
                <div className='flex items-center w-2 justify-end'>
                  <FaLock color='#ff808b' style={{ opacity: '0.6' }} />
                </div>
              )}
            </Link>
            {items.dropdown && expandedDropdown === items.idx && (
              <ul className='relative opacity-100 visible' style={{ transform: 'rotateX(0deg)', transition: 'transform 0.5s, opacity 0.5s, -webkit-transform 0.5s', WebkitTransformStyle: 'preserve-3d' }}>
                {items.subItems.map((item) => (
                  <Link
                    to={item.goto}
                    className='flex items-center justify-between w-full px-5'
                    onClick={() => onTabChange(items.idx, items.dropdown, item.idx)}
                  >
                    <li
                      key={item.idx}
                      className={`px-4 py-1.5 w-full flex justify-between cursor-pointer border-indigo-500 ${hoveredSubIdx === item.idx ? 'text-blue-600 ' : ''} ${selectedSubTab === item.idx ? '' : ''}`}
                      onMouseEnter={() => setHoveredSubIdx(item.idx)}
                      onMouseLeave={() => setHoveredSubIdx(null)}
                      style={{ borderLeftWidth: (selectedSubTab === item.idx || hoveredSubIdx === item.idx) ? '3px' : '1px', color: hoveredSubIdx === item.idx ? '#5e81f4' : '#666', opacity: item.Lock ? '0.6' : '' }}
                    >

                      <div className='flex items-center'>
                        <span className='text-sm'>{item.name}</span>
                      </div>
                      {item.Lock && (
                        <div className='flex items-center w-2 justify-end'>
                          <FaLock color='#ff808b' style={{ opacity: '0.6' }} />
                        </div>
                      )}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

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