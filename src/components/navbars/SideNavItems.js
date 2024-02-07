import { AiOutlineHome } from "react-icons/ai";
// import Dashboard from "../pages/Pages";

const SideNavItems = [
    {
        idx: 0,
        name: 'Dashboard',
        icon: <AiOutlineHome color='gray'/>,
        dropdown: false,
        Lock: false,
        goto: '<Dashboard />',
    },
    {
        idx: 1,
        name: 'General Settings',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Institute Profile', icon: '' },
            { idx: 1, name: 'Fee Particulars', icon: '' },
            { idx: 2, name: 'Fee Structure', icon: '' },
            { idx: 3, name: 'Discount Type', icon: '' },
            { idx: 4, name: 'Details for Fee challan', icon: '' },
            { idx: 5, name: 'Rules and Regulations', icon: '' },
            { idx: 6, name: 'Marks Grading', icon: '' },
            { idx: 7, name: 'Theme & Language', icon: '' },
            { idx: 8, name: 'Account Settings', icon: '' },
            { idx: 9, name: 'Log out', icon: '' }
        ]
    },
    {
        idx: 2,
        name: 'Classes',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'All Classes', icon: '' },
            { idx: 1, name: 'New Class', icon: '' },
            { idx: 2, name: 'Edit OR Delete', icon: '' }
        ]
    },
    {
        idx: 3,
        name: 'Subjects',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Classes with Subjects', icon: '' },
            { idx: 1, name: 'Assign Subjects', icon: '' }
        ]
    },
    {
        idx: 4,
        name: 'Students',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'All Students', icon: '' },
            { idx: 1, name: 'Add New', icon: '' },
            { idx: 2, name: 'Manage Families', icon: '' },
            { idx: 3, name: 'Active / Inactive', icon: '' },
            { idx: 4, name: 'Admission Letter', icon: '' },
            { idx: 5, name: 'Student ID Cards', icon: '' },
            { idx: 6, name: 'Print Basic List', icon: '' },
            { idx: 7, name: 'Promote Students', icon: '' }
        ]
    },
    {
        idx: 5,
        name: 'Employees',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'All Employees', icon: '' },
            { idx: 1, name: 'Add New', icon: '' },
            { idx: 2, name: 'Staff ID Cards', icon: '' },
            { idx: 3, name: 'Job Letter', icon: '' }
        ]
    },
    {
        idx: 6,
        name: 'Accounts',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Chart Of Account', icon: '' },
            { idx: 1, name: 'Add Income', icon: '' },
            { idx: 2, name: 'Add Expense', icon: '' },
            { idx: 3, name: 'Account Statement', icon: '' }
        ]
    },
    {
        idx: 7,
        name: 'Fees',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Generate Bank Challan', icon: '' },
            { idx: 1, name: 'Collect Fee', icon: '' },
            { idx: 2, name: 'Fee Slip', icon: '' },
            { idx: 3, name: 'Fees Defaulters', icon: '' },
            { idx: 4, name: 'Fees Report', icon: '' },
            { idx: 5, name: 'Delete Fee', icon: '' }
        ]
    },
    {
        idx: 8,
        name: 'Salary',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Pay Salary', icon: '' },
            { idx: 1, name: 'Salary Slip', icon: '' },
            { idx: 2, name: 'Salary Report', icon: '' }
        ]
    },
    {
        idx: 9,
        name: 'Attendance',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Mark Structure Attendence', icon: '' },
            { idx: 1, name: 'Mark Employees', icon: '' },
            { idx: 2, name: 'Class Wise Report', icon: '' },
            { idx: 3, name: 'Student Attendance Report', icon: '' },
            { idx: 4, name: 'Employee Attendance Report', icon: '' }
        ]
    },
    {
        idx: 10,
        name: 'Timetable',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Weekdays', icon: '' },
            { idx: 1, name: 'Time Periods', icon: '' },
            { idx: 2, name: 'Class Rooms', icon: '' },
            { idx: 3, name: 'Create TimeTable', icon: '' },
            { idx: 4, name: 'Generate for Class', icon: '' },
            { idx: 5, name: 'Generate for Teacher', icon: '' }
        ]
    },
    { idx: 11, name: 'Homework', icon: '', dropdown: false, Lock: false },
    {
        idx: 12,
        name: 'Behaviour & Skills',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Rate Behaviours', icon: '' },
            { idx: 1, name: 'Rate Skills', icon: '' },
            { idx: 2, name: 'Observations', icon: '' },
            { idx: 3, name: 'Affective Domain Rating Report', icon: '' },
            { idx: 4, name: 'Psycomotor Domain Rating Report', icon: '' }
        ]
    },
    {
        idx: 13,
        name: 'Online Store & POS',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Store Analytics', icon: '' },
            { idx: 1, name: 'Product Categories', icon: '' },
            { idx: 2, name: 'Product Tax', icon: '' },
            { idx: 3, name: 'Products', icon: '' },
            { idx: 4, name: 'New Order', icon: '' },
            { idx: 5, name: 'All Orders', icon: '' }
        ]
    },
    { idx: 14, name: 'WhatsApp', icon: '', dropdown: false, Lock: false },
    { idx: 15, name: 'Messaging', icon: '', dropdown: false, Lock: false },
    {
        idx: 16,
        name: 'SMS Services',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Free SMS Gateway', icon: '' },
            { idx: 1, name: 'Branded SMS', icon: '' },
            { idx: 2, name: 'SMS Templates', icon: '' }
        ]
    },
    {
        idx: 17,
        name: 'Live Class',
        icon: '',
        dropdown: false,
        Lock: false
    },
    {
        idx: 18,
        name: 'Question Paper',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Subject Chapters', icon: '' },
            { idx: 1, name: 'Question Bank', icon: '' },
            { idx: 2, name: 'Create Question Paper', icon: '' }
        ]
    },
    {
        idx: 19,
        name: 'Exams',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Create New Exam', icon: '' },
            { idx: 1, name: 'Edit OR Delete', icon: '' },
            { idx: 2, name: 'Add / Update Exam Marks', icon: '' },
            { idx: 3, name: 'Result Card', icon: '' },
            { idx: 4, name: 'Blank Award List', icon: '' }
        ]
    },
    {
        idx: 20,
        name: 'Class Tests',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Create New Test', icon: '' },
            { idx: 1, name: 'Test Result', icon: '' }
        ]
    },
    {
        idx: 21,
        name: 'Reports',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Student Report Card', icon: '' },
            { idx: 1, name: 'Student Info Report', icon: '' },
            { idx: 2, name: 'Parents Info Report', icon: '' },
            { idx: 3, name: 'Students Monthly Attendance Report', icon: '' },
            { idx: 4, name: 'Staff Monthly Attendance Report', icon: '' },
            { idx: 5, name: 'Fee Collection Report', icon: '' },
            { idx: 6, name: 'Student Progress Report', icon: '' },
            { idx: 7, name: 'Accounts Report', icon: '' },
            { idx: 8, name: 'Customized Reports', icon: '' }
        ]
    },
    {
        idx: 22,
        name: 'Certificates',
        icon: '',
        dropdown: true,
        Lock: false,
        subItems: [
            { idx: 0, name: 'Leave Certificate', icon: '' },
            { idx: 1, name: 'Character Certificate', icon: '' },
            { idx: 2, name: 'Certificate Templates', icon: '' }
        ]
    }
];

export default SideNavItems;